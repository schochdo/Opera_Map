import * as THREE from 'three';

/**
 * Generates the nautical sapphire ocean texture with gold cartographic orientation
 * lines and classical typography labels for global oceans.
 * Continents and lakes are rendered as crisp 3D vector geometry meshes.
 */
export function createGlobeTexture(onLoaded?: () => void): THREE.CanvasTexture {
  const width = 4096;
  const height = 2048;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    return new THREE.CanvasTexture(canvas);
  }

  // Convert lat/lng to canvas pixel coordinates
  const toXY = (lat: number, lng: number) => {
    const x = ((lng + 180) / 360) * width;
    const y = ((90 - lat) / 180) * height;
    return { x, y };
  };

  const drawBaseTexture = (countryGeojson?: any) => {
    // 1. LUMINOUS NAUTICAL SAPPHIRE-AZURE OCEAN (Smooth latitude-based gradient from pole to equator)
    // Using a vertical linear gradient guarantees identical polar color along the entire top/bottom edge,
    // completely eliminating sphere texture pole pinch artifacts.
    const oceanGrad = ctx.createLinearGradient(0, 0, 0, height);
    oceanGrad.addColorStop(0, '#1b324a'); // Deep polar navy at North Pole (y = 0)
    oceanGrad.addColorStop(0.24, '#26425f'); // High-latitude boreal blue
    oceanGrad.addColorStop(0.38, '#2c4d6e'); // Rich Mediterranean / temperate blue
    oceanGrad.addColorStop(0.5, '#3b6287'); // Luminous azure-slate at Equator (y = height / 2)
    oceanGrad.addColorStop(0.62, '#2c4d6e'); // Rich temperate blue
    oceanGrad.addColorStop(0.76, '#26425f'); // High-latitude southern blue
    oceanGrad.addColorStop(1, '#1b324a'); // Deep polar navy at South Pole (y = height)
    ctx.fillStyle = oceanGrad;
    ctx.fillRect(0, 0, width, height);

    // 2. STATELY CLASSICAL OCEAN LABELS (Wide open ocean basins with complete clearance from all land & pins)
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '600 24px "Cinzel", "Lora", Georgia, serif';
    ctx.fillStyle = 'rgba(235, 245, 255, 0.72)';

    const oceans = [
      { text: 'Atlantic Ocean', lat: 20, lng: -40 },
      { text: 'Pacific Ocean', lat: 26, lng: -172 },
      { text: 'Indian Ocean', lat: -20, lng: 75 },
    ];

    oceans.forEach((oc) => {
      const pos = toXY(oc.lat, oc.lng);
      ctx.fillText(oc.text, pos.x, pos.y);
      // Seamlessly wrap text across the 180° antimeridian texture seam
      if (pos.x < 300) {
        ctx.fillText(oc.text, pos.x + width, pos.y);
      } else if (pos.x > width - 300) {
        ctx.fillText(oc.text, pos.x - width, pos.y);
      }
    });
  };

  drawBaseTexture();

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.anisotropy = 16;

  if (typeof window !== 'undefined') {
    (window as any).__GLOBE_TEXTURE_LOADED__ = true;
  }
  if (onLoaded) onLoaded();

  return texture;
}

import * as THREE from 'three';

// Generates an antique parchment globe texture with vector coastlines & country borders
export function createPapercraftGlobeTexture(onLoaded?: () => void): THREE.CanvasTexture {
  const width = 8192;
  const height = 4096;
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

  const drawBaseTexture = (geojson?: any) => {
    // 1. LUMINOUS NAUTICAL SAPPHIRE-AZURE OCEAN (Bright, vibrant, and clear)
    const oceanGrad = ctx.createRadialGradient(
      width / 2, height / 2, 200,
      width / 2, height / 2, width / 1.3
    );
    oceanGrad.addColorStop(0, '#3b6287'); // Luminous azure-slate in temperate/equatorial zones
    oceanGrad.addColorStop(0.5, '#2c4d6e'); // Rich Mediterranean nautical blue
    oceanGrad.addColorStop(1, '#203a54'); // Crisp navy at polar latitudes
    ctx.fillStyle = oceanGrad;
    ctx.fillRect(0, 0, width, height);

    // Subtle antique oceanic wavelets
    ctx.strokeStyle = 'rgba(220, 238, 255, 0.14)';
    ctx.lineWidth = 1.5;
    for (let y = 24; y < height; y += 22) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // 2. VECTOR LANDMASSES & COUNTRY OUTLINES (Luminous antique ivory parchment)
    if (geojson && geojson.features) {
      // Draw all land polygons with bright warm antique ivory parchment & crisp boundary ink
      ctx.fillStyle = '#faf5ea'; // Luminous, high-contrast ivory parchment
      ctx.strokeStyle = 'rgba(120, 90, 55, 0.7)'; // Fine antique country border line
      ctx.lineWidth = 2.0;

      geojson.features.forEach((feature: any) => {
        const geom = feature.geometry;
        if (!geom) return;

        const polyList =
          geom.type === 'Polygon'
            ? [geom.coordinates]
            : geom.type === 'MultiPolygon'
            ? geom.coordinates
            : [];

        polyList.forEach((poly: any) => {
          poly.forEach((ring: any) => {
            if (!ring || ring.length < 3) return;

            ctx.beginPath();
            ring.forEach(([lng, lat]: [number, number], i: number) => {
              const { x, y } = toXY(lat, lng);
              if (i === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            });
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
          });
        });
      });
    }

    // 3. ELEGANT GOLD CARTOGRAPHY GRID & MERIDIANS
    ctx.lineWidth = 1.8;

    // Equator (Double gold line)
    const eqY = height / 2;
    ctx.strokeStyle = 'rgba(235, 195, 75, 0.65)';
    ctx.beginPath();
    ctx.moveTo(0, eqY - 2);
    ctx.lineTo(width, eqY - 2);
    ctx.moveTo(0, eqY + 2);
    ctx.lineTo(width, eqY + 2);
    ctx.stroke();

    // Tropics
    ctx.setLineDash([12, 12]);
    ctx.strokeStyle = 'rgba(235, 195, 75, 0.35)';
    const cancerY = ((90 - 23.5) / 180) * height;
    const capricornY = ((90 + 23.5) / 180) * height;
    ctx.beginPath();
    ctx.moveTo(0, cancerY);
    ctx.lineTo(width, cancerY);
    ctx.moveTo(0, capricornY);
    ctx.lineTo(width, capricornY);
    ctx.stroke();

    // Major Meridians every 30 degrees
    ctx.setLineDash([8, 16]);
    for (let lon = -180; lon < 180; lon += 30) {
      const { x } = toXY(0, lon);
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    ctx.setLineDash([]);

    // 4. OCEAN WATERMARK CALLIGRAPHY ONLY (Scaled for 8K resolution, clear and elegant)
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'italic 32px "Cormorant Garamond", Georgia, serif';
    ctx.fillStyle = 'rgba(235, 245, 255, 0.75)';

    const oceans = [
      { text: '~ Oceanus Atlanticus ~', lat: 26, lng: -38 },
      { text: '~ Oceanus Pacificus ~', lat: 10, lng: -140 },
      { text: '~ Oceanus Indicus ~', lat: -16, lng: 75 },
    ];

    oceans.forEach((oc) => {
      const pos = toXY(oc.lat, oc.lng);
      ctx.fillText(oc.text, pos.x, pos.y);
    });
  };

  // Initial blank base
  drawBaseTexture();

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.anisotropy = 16;

  // Load high-resolution 50m vector GeoJSON for crisp continent boundaries
  fetch('/data/ne_50m_countries.geojson')
    .then((res) => res.json())
    .then((geojson) => {
      drawBaseTexture(geojson);
      texture.needsUpdate = true;
      if (onLoaded) onLoaded();
    })
    .catch((err) => {
      console.warn('Failed to load 50m country GeoJSON, using fallback base:', err);
    });

  return texture;
}

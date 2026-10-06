import * as THREE from 'three';

// Generates an antique parchment globe texture with vector coastlines, Great Lakes, state & country borders
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

  const drawBaseTexture = (countryGeojson?: any, lakesGeojson?: any, statesGeojson?: any) => {
    // 1. LUMINOUS NAUTICAL SAPPHIRE-AZURE OCEAN (Smooth, rich, non-striped)
    const oceanGrad = ctx.createRadialGradient(
      width / 2, height / 2, 200,
      width / 2, height / 2, width / 1.25
    );
    oceanGrad.addColorStop(0, '#3b6287'); // Luminous azure-slate in temperate/equatorial zones
    oceanGrad.addColorStop(0.55, '#2c4d6e'); // Rich Mediterranean nautical blue
    oceanGrad.addColorStop(1, '#1b324a'); // Deep navy at polar latitudes
    ctx.fillStyle = oceanGrad;
    ctx.fillRect(0, 0, width, height);

    // 2a. VECTOR LANDMASSES & COUNTRY OUTLINES (Luminous antique ivory parchment)
    if (countryGeojson && countryGeojson.features) {
      ctx.fillStyle = '#faf5ea'; // Luminous, high-contrast warm ivory parchment
      ctx.strokeStyle = 'rgba(120, 90, 55, 0.7)'; // Fine antique country border line
      ctx.lineWidth = 2.0;

      countryGeojson.features.forEach((feature: any) => {
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

    // 2b. MAJOR INLAND BODIES OF WATER & GREAT LAKES (Rich nautical sapphire fill with antique shoreline)
    if (lakesGeojson && lakesGeojson.features) {
      ctx.fillStyle = oceanGrad; // Matches ocean water exactly
      ctx.strokeStyle = 'rgba(80, 60, 40, 0.65)'; // Fine shoreline ink
      ctx.lineWidth = 1.8;

      lakesGeojson.features.forEach((feature: any) => {
        const geom = feature.geometry;
        if (!geom) return;

        // Filter out river reservoirs or unnamed water features
        const fcla = feature.properties?.featurecla;
        const name = feature.properties?.name;
        if (fcla === 'Reservoir' || (name && name.toLowerCase().includes('reservoir'))) {
          return;
        }

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

    // 2c. STATE & PROVINCIAL BOUNDARIES (United States and Canada ONLY - lighter warm brown/soft gray)
    if (statesGeojson && statesGeojson.features) {
      ctx.strokeStyle = 'rgba(155, 130, 105, 0.45)'; // Lighter antique warm brown/gray ink
      ctx.lineWidth = 1.3;
      ctx.setLineDash([8, 6]); // Subtle antique dashed state boundary

      statesGeojson.features.forEach((feature: any) => {
        const geom = feature.geometry;
        if (!geom) return;

        // State boundaries only for United States and Canada (removes Russia, China, Brazil, etc.)
        const a3 = feature.properties?.ADM0_A3;
        const admName = feature.properties?.ADM0_NAME;
        if (a3 && a3 !== 'USA' && a3 !== 'CAN' && admName !== 'United States of America' && admName !== 'Canada') {
          return;
        }

        const lines =
          geom.type === 'LineString'
            ? [geom.coordinates]
            : geom.type === 'MultiLineString'
            ? geom.coordinates
            : [];

        lines.forEach((line: any) => {
          if (!line || line.length < 2) return;
          ctx.beginPath();
          line.forEach(([lng, lat]: [number, number], i: number) => {
            const { x, y } = toXY(lat, lng);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          });
          ctx.stroke();
        });
      });
      ctx.setLineDash([]);
    }

    // 3. MINIMALIST CARTOGRAPHIC ORIENTATION (Single subtle gold equator & prime meridian - no pinstripes)
    // Equator (Single clean gold line)
    const eqY = height / 2;
    ctx.strokeStyle = 'rgba(235, 195, 75, 0.40)';
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.moveTo(0, eqY);
    ctx.lineTo(width, eqY);
    ctx.stroke();

    // Prime Meridian (0°) - very subtle navigational reference
    const primeX = toXY(0, 0).x;
    ctx.strokeStyle = 'rgba(235, 195, 75, 0.22)';
    ctx.lineWidth = 1.2;
    ctx.setLineDash([8, 14]);
    ctx.beginPath();
    ctx.moveTo(primeX, 0);
    ctx.lineTo(primeX, height);
    ctx.stroke();
    ctx.setLineDash([]);

    // 4. CLEAN, STANDARD OCEAN LABELS (Normal, familiar English names)
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '600 36px "Cinzel", "Lora", Georgia, serif';
    ctx.fillStyle = 'rgba(235, 245, 255, 0.72)';

    const oceans = [
      { text: 'Atlantic Ocean', lat: 24, lng: -38 },
      { text: 'Pacific Ocean', lat: 10, lng: -140 },
      { text: 'Indian Ocean', lat: -16, lng: 75 },
      { text: 'Arctic Ocean', lat: 80, lng: 0 },
      { text: 'Southern Ocean', lat: -62, lng: 0 },
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

  // Load high-resolution 50m vector GeoJSON for continents, Great Lakes, and state borders
  Promise.all([
    fetch('/data/ne_50m_countries.geojson').then((res) => res.json()).catch(() => null),
    fetch('/data/ne_50m_lakes.geojson').then((res) => res.json()).catch(() => null),
    fetch('/data/ne_50m_admin_1_states_provinces_lines.geojson').then((res) => res.json()).catch(() => null),
  ])
    .then(([countryGeojson, lakesGeojson, statesGeojson]) => {
      drawBaseTexture(countryGeojson, lakesGeojson, statesGeojson);
      texture.needsUpdate = true;
      if (onLoaded) onLoaded();
    })
    .catch((err) => {
      console.warn('Failed to load map GeoJSON datasets, using fallback base:', err);
    });

  return texture;
}

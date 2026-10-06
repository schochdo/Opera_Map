import * as THREE from 'three';

// Cache for generated papercraft building textures
const textureCache: Record<string, THREE.CanvasTexture> = {};

// High-res canvas for crisp billboard sprites
function createCanvas(w = 512, h = 640): { canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D } {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d')!;
  return { canvas, ctx };
}

// Shared paper/parchment background (transparent — we only draw the building silhouette)
function clearTransparent(ctx: CanvasRenderingContext2D, w: number, h: number) {
  ctx.clearRect(0, 0, w, h);
}

// Shared helper: draw a single column
function drawColumn(ctx: CanvasRenderingContext2D, x: number, yTop: number, yBottom: number, w: number) {
  // Column shaft
  const grad = ctx.createLinearGradient(x - w / 2, 0, x + w / 2, 0);
  grad.addColorStop(0, '#e8ddc8');
  grad.addColorStop(0.3, '#faf6ec');
  grad.addColorStop(0.7, '#f0e8d4');
  grad.addColorStop(1, '#c8bca8');
  ctx.fillStyle = grad;
  ctx.fillRect(x - w / 2, yTop, w, yBottom - yTop);

  // Column fluting lines
  ctx.strokeStyle = 'rgba(80, 60, 40, 0.25)';
  ctx.lineWidth = 1;
  for (let i = 1; i < 4; i++) {
    ctx.beginPath();
    ctx.moveTo(x - w / 2 + (w / 4) * i, yTop + 4);
    ctx.lineTo(x - w / 2 + (w / 4) * i, yBottom - 4);
    ctx.stroke();
  }

  // Capital (top)
  ctx.fillStyle = '#efe5cc';
  ctx.fillRect(x - w / 2 - 2, yTop, w + 4, 8);
  // Base (bottom)
  ctx.fillStyle = '#e0d4b8';
  ctx.fillRect(x - w / 2 - 2, yBottom - 8, w + 4, 8);

  // Outline
  ctx.strokeStyle = 'rgba(60, 40, 20, 0.6)';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(x - w / 2, yTop, w, yBottom - yTop);
}

// Shared helper: draw a pointed arch opening
function drawArch(
  ctx: CanvasRenderingContext2D,
  cx: number,
  yTop: number,
  yBottom: number,
  hw: number,
  fill: string,
  outline: string
) {
  const r = hw;
  const archTop = yTop + r;
  ctx.beginPath();
  ctx.moveTo(cx - hw, yBottom);
  ctx.lineTo(cx - hw, archTop);
  ctx.arc(cx - hw + r, archTop, r, Math.PI, 0); // left arc half
  // Actually simpler round arch:
  ctx.moveTo(cx - hw, yBottom);
  ctx.lineTo(cx - hw, archTop);
  ctx.arcTo(cx - hw, yTop, cx, yTop, hw);
  ctx.arcTo(cx + hw, yTop, cx + hw, archTop, hw);
  ctx.lineTo(cx + hw, yBottom);
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.strokeStyle = outline;
  ctx.lineWidth = 2;
  ctx.stroke();
}

// Shared helper: drop shadow under the entire illustration
function drawDropShadow(ctx: CanvasRenderingContext2D, w: number, groundY: number) {
  const shadowGrad = ctx.createRadialGradient(w / 2, groundY + 8, 5, w / 2, groundY + 8, w * 0.4);
  shadowGrad.addColorStop(0, 'rgba(0,0,0,0.35)');
  shadowGrad.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = shadowGrad;
  ctx.fillRect(0, groundY - 10, w, 40);
}

// Shared outline stroke helper
function stroke(ctx: CanvasRenderingContext2D, color = '#2a1a0a', lw = 2.5) {
  ctx.strokeStyle = color;
  ctx.lineWidth = lw;
  ctx.stroke();
}

// ─────────────────────────────────────────────────
// 1. SYDNEY OPERA HOUSE
//    Iconic shell sails in cream paper, grey granite podium
// ─────────────────────────────────────────────────
function drawSydneyOpera(ctx: CanvasRenderingContext2D, W: number, H: number) {
  clearTransparent(ctx, W, H);
  const gnd = H - 60;

  // Drop shadow
  drawDropShadow(ctx, W, gnd + 20);

  // === Harbour Platform / Podium ===
  const podGrad = ctx.createLinearGradient(0, gnd - 10, 0, gnd + 20);
  podGrad.addColorStop(0, '#d0c4b4');
  podGrad.addColorStop(1, '#a89888');
  ctx.fillStyle = podGrad;
  ctx.beginPath();
  ctx.moveTo(60, gnd + 20);
  ctx.lineTo(W - 60, gnd + 20);
  ctx.lineTo(W - 40, gnd);
  ctx.lineTo(40, gnd);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = '#7a6858';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Stepped base
  ctx.fillStyle = '#c4b8a8';
  ctx.fillRect(55, gnd - 12, W - 110, 12);
  ctx.strokeStyle = '#8a7868';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(55, gnd - 12, W - 110, 12);

  // === SAILS — each is a curved "paper fold" shape ===
  // Cream parchment gradient for all sails
  const sailFill = (ctx: CanvasRenderingContext2D, x0: number, y0: number, x1: number, y1: number) => {
    const g = ctx.createLinearGradient(x0, y0, x1, y1);
    g.addColorStop(0, '#fdfaf3');
    g.addColorStop(0.5, '#f5eedc');
    g.addColorStop(1, '#e8dcc8');
    return g;
  };

  const drawSail = (
    baseL: number,
    baseR: number,
    tipX: number,
    tipY: number,
    groundY: number,
    ridgeOffsetX: number
  ) => {
    // Left face of sail
    ctx.beginPath();
    ctx.moveTo(baseL, groundY);
    ctx.quadraticCurveTo(baseL + ridgeOffsetX * 0.3, groundY - 40, tipX, tipY);
    ctx.quadraticCurveTo((baseL + tipX) / 2 + ridgeOffsetX, (groundY + tipY) / 2, baseL, groundY);
    ctx.closePath();
    ctx.fillStyle = sailFill(ctx, baseL, groundY, tipX, tipY);
    ctx.fill();
    ctx.strokeStyle = '#3a2a18';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Right face of sail (slightly darker for 3D effect)
    ctx.beginPath();
    ctx.moveTo(baseR, groundY);
    ctx.quadraticCurveTo(baseR - ridgeOffsetX * 0.3, groundY - 40, tipX, tipY);
    ctx.quadraticCurveTo((baseR + tipX) / 2 - ridgeOffsetX * 0.5, (groundY + tipY) / 2, baseR, groundY);
    ctx.closePath();
    const g2 = ctx.createLinearGradient(tipX, tipY, baseR, groundY);
    g2.addColorStop(0, '#f0e8d5');
    g2.addColorStop(1, '#d4c8b0');
    ctx.fillStyle = g2;
    ctx.fill();
    ctx.strokeStyle = '#3a2a18';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Ridge line (paper crease)
    ctx.beginPath();
    ctx.moveTo(tipX, tipY);
    ctx.lineTo((baseL + baseR) / 2, groundY);
    ctx.strokeStyle = 'rgba(180,150,100,0.5)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  };

  // Large Concert Hall sail
  drawSail(70, 190, 145, 80, gnd - 12, 15);
  // Medium Opera Theatre sail
  drawSail(170, 300, 240, 135, gnd - 12, 12);
  // Small Restaurant sail
  drawSail(280, 370, 330, 180, gnd - 12, 8);

  // === Water reflection hint ===
  ctx.fillStyle = 'rgba(160,195,220,0.18)';
  ctx.fillRect(60, gnd + 20, W - 120, 12);
}

// ─────────────────────────────────────────────────
// 2. PALAIS GARNIER (Paris)
//    Beaux-Arts ornate facade, green copper dome, golden Apollo lyre
// ─────────────────────────────────────────────────
function drawPalaisGarnier(ctx: CanvasRenderingContext2D, W: number, H: number) {
  clearTransparent(ctx, W, H);
  const gnd = H - 55;

  drawDropShadow(ctx, W, gnd + 10);

  // === Stone base / podium steps ===
  const baseGrad = ctx.createLinearGradient(0, gnd - 20, 0, gnd + 15);
  baseGrad.addColorStop(0, '#d8ccba');
  baseGrad.addColorStop(1, '#b0a490');
  ctx.fillStyle = baseGrad;
  ctx.fillRect(40, gnd - 20, W - 80, 35);
  ctx.strokeStyle = '#8a7868';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(40, gnd - 20, W - 80, 35);

  // Step 2
  ctx.fillStyle = '#c8bca8';
  ctx.fillRect(50, gnd - 32, W - 100, 14);
  ctx.strokeStyle = '#9a8a78';
  ctx.lineWidth = 1;
  ctx.strokeRect(50, gnd - 32, W - 100, 14);

  // === Main Facade Body ===
  const facadeGrad = ctx.createLinearGradient(50, 220, W - 50, 220);
  facadeGrad.addColorStop(0, '#f0e8d4');
  facadeGrad.addColorStop(0.5, '#faf6ee');
  facadeGrad.addColorStop(1, '#eae0cc');
  ctx.fillStyle = facadeGrad;
  ctx.fillRect(50, 220, W - 100, gnd - 252);
  ctx.strokeStyle = '#3a2a18';
  ctx.lineWidth = 2.5;
  ctx.strokeRect(50, 220, W - 100, gnd - 252);

  // Horizontal cornice lines
  ctx.strokeStyle = 'rgba(80, 60, 40, 0.3)';
  ctx.lineWidth = 1;
  [240, 270, 330].forEach((y) => {
    ctx.beginPath();
    ctx.moveTo(52, y);
    ctx.lineTo(W - 52, y);
    ctx.stroke();
  });

  // === Loggia arched windows (ground level) ===
  const archColors = ['#ffd66b', '#ffca50', '#f5b83a'];
  [90, 148, 206, 264, 322, 380].forEach((x, i) => {
    // Round arch amber glow windows
    ctx.beginPath();
    ctx.moveTo(x - 18, gnd - 32);
    ctx.lineTo(x - 18, gnd - 80);
    ctx.arc(x, gnd - 80, 18, Math.PI, 0);
    ctx.lineTo(x + 18, gnd - 32);
    ctx.closePath();
    ctx.fillStyle = archColors[i % 3];
    ctx.fill();
    ctx.strokeStyle = '#3a2a18';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Keystone
    ctx.fillStyle = '#e0c890';
    ctx.beginPath();
    ctx.arc(x, gnd - 98, 5, 0, Math.PI * 2);
    ctx.fill();
  });

  // === Upper level rectangular windows ===
  [90, 148, 206, 264, 322, 380].forEach((x) => {
    ctx.fillStyle = 'rgba(255, 210, 100, 0.7)';
    ctx.fillRect(x - 14, 245, 28, 38);
    ctx.strokeStyle = '#3a2a18';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(x - 14, 245, 28, 38);
  });

  // === Decorative Friezes / Cornice ornament ===
  ctx.fillStyle = '#c5a85a';
  [65, 105, 145, 185, 225, 265, 305, 345, 385, 415].forEach((x) => {
    ctx.beginPath();
    ctx.arc(x, 222, 5, 0, Math.PI * 2);
    ctx.fill();
  });

  // === GREEN COPPER DOME ===
  const domeGrad = ctx.createRadialGradient(W / 2 - 10, 130, 10, W / 2, 145, 90);
  domeGrad.addColorStop(0, '#5aaa88');
  domeGrad.addColorStop(0.6, '#357a60');
  domeGrad.addColorStop(1, '#1e4a3a');
  ctx.fillStyle = domeGrad;
  ctx.beginPath();
  ctx.ellipse(W / 2, 195, 80, 75, 0, Math.PI, 0);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = '#1a3a2a';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Dome ribs / ridges
  ctx.strokeStyle = 'rgba(100, 200, 150, 0.3)';
  ctx.lineWidth = 1.5;
  for (let i = -3; i <= 3; i++) {
    ctx.beginPath();
    ctx.moveTo(W / 2 + i * 20, 195);
    ctx.quadraticCurveTo(W / 2 + i * 22, 155, W / 2 + i * 8, 120);
    ctx.stroke();
  }

  // === Lantern atop dome ===
  ctx.fillStyle = '#4a8a6a';
  ctx.fillRect(W / 2 - 15, 120, 30, 18);
  ctx.strokeStyle = '#1a3a2a';
  ctx.lineWidth = 2;
  ctx.strokeRect(W / 2 - 15, 120, 30, 18);

  // === GOLDEN APOLLO LYRE finial ===
  ctx.fillStyle = '#d4af37';
  ctx.beginPath();
  ctx.arc(W / 2, 112, 10, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#a07820';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Lyre strings
  ctx.strokeStyle = '#d4af37';
  ctx.lineWidth = 1.5;
  [-4, -1, 2, 5].forEach((dx) => {
    ctx.beginPath();
    ctx.moveTo(W / 2 + dx, 105);
    ctx.lineTo(W / 2 + dx, 92);
    ctx.stroke();
  });
}

// ─────────────────────────────────────────────────
// 3. TEATRO ALLA SCALA (Milan)
//    Neoclassical facade: 4 columns, triangular pediment
// ─────────────────────────────────────────────────
function drawScalaMilan(ctx: CanvasRenderingContext2D, W: number, H: number) {
  clearTransparent(ctx, W, H);
  const gnd = H - 55;

  drawDropShadow(ctx, W, gnd + 10);

  // Granite base
  const baseGrad = ctx.createLinearGradient(0, gnd - 18, 0, gnd + 15);
  baseGrad.addColorStop(0, '#c8bca8');
  baseGrad.addColorStop(1, '#a89888');
  ctx.fillStyle = baseGrad;
  ctx.fillRect(45, gnd - 18, W - 90, 33);
  ctx.strokeStyle = '#8a7868';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(45, gnd - 18, W - 90, 33);

  // Main facade
  const facadeGrad = ctx.createLinearGradient(48, 150, W - 48, 150);
  facadeGrad.addColorStop(0, '#e8dcc8');
  facadeGrad.addColorStop(0.5, '#faf6ee');
  facadeGrad.addColorStop(1, '#e0d4c0');
  ctx.fillStyle = facadeGrad;
  ctx.fillRect(48, 150, W - 96, gnd - 168);
  ctx.strokeStyle = '#2a1a0a';
  ctx.lineWidth = 2.5;
  ctx.strokeRect(48, 150, W - 96, gnd - 168);

  // === TRIANGULAR PEDIMENT ===
  ctx.beginPath();
  ctx.moveTo(38, 150);
  ctx.lineTo(W / 2, 55);
  ctx.lineTo(W - 38, 150);
  ctx.closePath();
  // Crimson velvet pediment fill
  const pedGrad = ctx.createLinearGradient(W / 2, 55, W / 2, 150);
  pedGrad.addColorStop(0, '#8b1e25');
  pedGrad.addColorStop(1, '#5a0e14');
  ctx.fillStyle = pedGrad;
  ctx.fill();
  ctx.strokeStyle = '#2a0a0e';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Pediment acroteria ornaments
  [38, W / 2, W - 38].forEach((x, i) => {
    ctx.fillStyle = '#d4af37';
    ctx.beginPath();
    if (i === 1) { ctx.arc(x, 50, 7, 0, Math.PI * 2); } // apex
    else { ctx.arc(x, 148, 5, 0, Math.PI * 2); }
    ctx.fill();
  });

  // Golden crest in pediment center
  ctx.fillStyle = '#d4af37';
  ctx.beginPath();
  ctx.arc(W / 2, 110, 12, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#a07820';
  ctx.lineWidth = 2;
  ctx.stroke();

  // === 4 IONIC COLUMNS ===
  const colXs = [W * 0.22, W * 0.38, W * 0.62, W * 0.78];
  colXs.forEach((cx) => {
    drawColumn(ctx, cx, 150, gnd - 18, 22);
  });

  // === Arched entrance door ===
  drawArch(ctx, W / 2, gnd - 90, gnd - 18, 28, '#f5b83a', '#2a1a0a');

  // Side windows
  [[W * 0.19, 175], [W * 0.81, 175], [W * 0.19, 235], [W * 0.81, 235]].forEach(([x, y]) => {
    ctx.fillStyle = 'rgba(255, 200, 80, 0.65)';
    ctx.fillRect(x - 14, y, 28, 40);
    ctx.strokeStyle = '#2a1a0a';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(x - 14, y, 28, 40);
  });

  // Horizontal entablature
  ctx.fillStyle = '#ede4cc';
  ctx.fillRect(38, 148, W - 76, 10);
  ctx.strokeStyle = '#2a1a0a';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(38, 148, W - 76, 10);
}

// ─────────────────────────────────────────────────
// 4. METROPOLITAN OPERA (New York — Lincoln Center)
//    Five grand travertine arches, amber glass curtain wall, chandeliers
// ─────────────────────────────────────────────────
function drawMetNYC(ctx: CanvasRenderingContext2D, W: number, H: number) {
  clearTransparent(ctx, W, H);
  const gnd = H - 55;

  drawDropShadow(ctx, W, gnd + 10);

  // Plaza / base
  const baseGrad = ctx.createLinearGradient(0, gnd - 15, 0, gnd + 18);
  baseGrad.addColorStop(0, '#d0c8b8');
  baseGrad.addColorStop(1, '#a8a090');
  ctx.fillStyle = baseGrad;
  ctx.fillRect(35, gnd - 15, W - 70, 33);
  ctx.strokeStyle = '#888078';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(35, gnd - 15, W - 70, 33);

  // Main travertine building body
  const bGrad = ctx.createLinearGradient(38, 90, W - 38, 90);
  bGrad.addColorStop(0, '#e8e0d0');
  bGrad.addColorStop(0.5, '#f8f4ec');
  bGrad.addColorStop(1, '#e0d8c8');
  ctx.fillStyle = bGrad;
  ctx.fillRect(38, 90, W - 76, gnd - 105);
  ctx.strokeStyle = '#2a2018';
  ctx.lineWidth = 2.5;
  ctx.strokeRect(38, 90, W - 76, gnd - 105);

  // === AMBER GLASS CURTAIN WALL (behind the arches) ===
  const glassGrad = ctx.createLinearGradient(45, 100, 45, gnd - 15);
  glassGrad.addColorStop(0, 'rgba(255, 220, 100, 0.85)');
  glassGrad.addColorStop(0.4, 'rgba(255, 200, 60, 0.95)');
  glassGrad.addColorStop(1, 'rgba(220, 160, 20, 0.7)');
  ctx.fillStyle = glassGrad;
  ctx.fillRect(45, 100, W - 90, gnd - 115);

  // === FIVE GRAND ARCHES ===
  const archW = (W - 90) / 5;
  for (let i = 0; i < 5; i++) {
    const ax = 45 + archW * i + archW / 2;
    const archTopY = 105;
    const archBotY = gnd - 15;
    const hw = archW / 2 - 6;

    // Travertine arch frame
    ctx.strokeStyle = '#f4eedc';
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(ax - hw, archBotY);
    ctx.lineTo(ax - hw, archTopY + hw);
    ctx.arc(ax, archTopY + hw, hw, Math.PI, 0);
    ctx.lineTo(ax + hw, archBotY);
    ctx.stroke();

    // Arch keystone
    ctx.fillStyle = '#faf6ec';
    ctx.beginPath();
    ctx.arc(ax, archTopY + hw - hw, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#3a2a18';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Chandelier glow inside arch
    const chandGrad = ctx.createRadialGradient(ax, archTopY + hw + 40, 3, ax, archTopY + hw + 40, 28);
    chandGrad.addColorStop(0, 'rgba(255, 255, 220, 0.95)');
    chandGrad.addColorStop(0.5, 'rgba(255, 230, 100, 0.5)');
    chandGrad.addColorStop(1, 'rgba(255, 200, 50, 0)');
    ctx.fillStyle = chandGrad;
    ctx.beginPath();
    ctx.arc(ax, archTopY + hw + 40, 28, 0, Math.PI * 2);
    ctx.fill();

    // Chandelier body
    ctx.fillStyle = '#fffbe8';
    ctx.beginPath();
    ctx.ellipse(ax, archTopY + hw + 35, 8, 4, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  // Parapet / top rail
  ctx.fillStyle = '#f0e8d8';
  ctx.fillRect(38, 88, W - 76, 10);
  ctx.strokeStyle = '#2a2018';
  ctx.lineWidth = 2;
  ctx.strokeRect(38, 88, W - 76, 10);

  // Corner pilasters
  [38, W - 52].forEach((x) => {
    const g = ctx.createLinearGradient(x, 90, x + 14, 90);
    g.addColorStop(0, '#e8e4d8');
    g.addColorStop(1, '#d0ccc0');
    ctx.fillStyle = g;
    ctx.fillRect(x, 90, 14, gnd - 105);
    ctx.strokeStyle = '#2a2018';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(x, 90, 14, gnd - 105);
  });
}

// ─────────────────────────────────────────────────
// 5. WIENER STAATSOPER (Vienna)
//    Italian Renaissance Revival: loggia arcade, twin mansard copper gables
// ─────────────────────────────────────────────────
function drawViennaState(ctx: CanvasRenderingContext2D, W: number, H: number) {
  clearTransparent(ctx, W, H);
  const gnd = H - 55;

  drawDropShadow(ctx, W, gnd + 10);

  // Base
  const baseGrad = ctx.createLinearGradient(0, gnd - 18, 0, gnd + 15);
  baseGrad.addColorStop(0, '#ccbfad');
  baseGrad.addColorStop(1, '#a89888');
  ctx.fillStyle = baseGrad;
  ctx.fillRect(42, gnd - 18, W - 84, 33);
  ctx.strokeStyle = '#8a7868';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(42, gnd - 18, W - 84, 33);

  // Step
  ctx.fillStyle = '#bbb0a0';
  ctx.fillRect(50, gnd - 28, W - 100, 12);
  ctx.strokeStyle = '#8a7868';
  ctx.lineWidth = 1;
  ctx.strokeRect(50, gnd - 28, W - 100, 12);

  // Main building body (warm ochre)
  const bGrad = ctx.createLinearGradient(44, 180, W - 44, 180);
  bGrad.addColorStop(0, '#ddd0b4');
  bGrad.addColorStop(0.5, '#f0e8d0');
  bGrad.addColorStop(1, '#d8ccb4');
  ctx.fillStyle = bGrad;
  ctx.fillRect(44, 180, W - 88, gnd - 198);
  ctx.strokeStyle = '#2a1a0a';
  ctx.lineWidth = 2.5;
  ctx.strokeRect(44, 180, W - 88, gnd - 198);

  // === TWIN COPPER MANSARD GABLES ===
  const drawGable = (cx: number) => {
    const gGrad = ctx.createLinearGradient(cx - 60, 60, cx + 60, 150);
    gGrad.addColorStop(0, '#4a9478');
    gGrad.addColorStop(0.5, '#357a60');
    gGrad.addColorStop(1, '#1e4a3a');
    ctx.fillStyle = gGrad;
    ctx.beginPath();
    ctx.moveTo(cx - 65, 180);
    ctx.lineTo(cx, 65);
    ctx.lineTo(cx + 65, 180);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#1a3a2a';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Gable ribs
    ctx.strokeStyle = 'rgba(100, 200, 150, 0.25)';
    ctx.lineWidth = 1;
    for (let i = -3; i <= 3; i++) {
      ctx.beginPath();
      ctx.moveTo(cx + i * 15, 180);
      ctx.lineTo(cx + i * 5, 70);
      ctx.stroke();
    }

    // Finial
    ctx.fillStyle = '#d4af37';
    ctx.beginPath();
    ctx.arc(cx, 60, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#a07820';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  };

  drawGable(W * 0.3);
  drawGable(W * 0.7);

  // === LOGGIA ARCHED ARCADE (ground & upper floor) ===
  // Ground: 6 round arches with amber glow
  const lgndXs = [75, 138, 201, 264, 327, 390];
  lgndXs.forEach((x) => {
    ctx.beginPath();
    ctx.moveTo(x - 20, gnd - 28);
    ctx.lineTo(x - 20, gnd - 75);
    ctx.arc(x, gnd - 75, 20, Math.PI, 0);
    ctx.lineTo(x + 20, gnd - 28);
    ctx.closePath();
    const ag = ctx.createLinearGradient(x, gnd - 95, x, gnd - 28);
    ag.addColorStop(0, '#ffca50');
    ag.addColorStop(1, '#f0a020');
    ctx.fillStyle = ag;
    ctx.fill();
    ctx.strokeStyle = '#2a1a0a';
    ctx.lineWidth = 2;
    ctx.stroke();
  });

  // Upper loggia: smaller arched windows
  lgndXs.forEach((x) => {
    ctx.beginPath();
    ctx.moveTo(x - 14, 230);
    ctx.lineTo(x - 14, 200);
    ctx.arc(x, 200, 14, Math.PI, 0);
    ctx.lineTo(x + 14, 230);
    ctx.closePath();
    ctx.fillStyle = 'rgba(255, 200, 80, 0.6)';
    ctx.fill();
    ctx.strokeStyle = '#2a1a0a';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  });

  // Central entablature
  ctx.fillStyle = '#cfc0a4';
  ctx.fillRect(44, 178, W - 88, 10);
  ctx.strokeStyle = '#2a1a0a';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(44, 178, W - 88, 10);
}

// ─────────────────────────────────────────────────
// 6. ROYAL OPERA HOUSE (Covent Garden, London)
//    Classical portico with 4 giant Corinthian columns, pedimented portico
// ─────────────────────────────────────────────────
function drawRoyalOperaHouse(ctx: CanvasRenderingContext2D, W: number, H: number) {
  clearTransparent(ctx, W, H);
  const gnd = H - 55;

  drawDropShadow(ctx, W, gnd + 10);

  // Podium base
  const baseGrad = ctx.createLinearGradient(0, gnd - 20, 0, gnd + 15);
  baseGrad.addColorStop(0, '#ccbfad');
  baseGrad.addColorStop(1, '#a49080');
  ctx.fillStyle = baseGrad;
  ctx.fillRect(40, gnd - 20, W - 80, 35);
  ctx.strokeStyle = '#8a7868';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(40, gnd - 20, W - 80, 35);

  // Main hall body
  const bGrad = ctx.createLinearGradient(44, 130, W - 44, 130);
  bGrad.addColorStop(0, '#e8e0cc');
  bGrad.addColorStop(0.5, '#f8f2e8');
  bGrad.addColorStop(1, '#e0d8c4');
  ctx.fillStyle = bGrad;
  ctx.fillRect(44, 130, W - 88, gnd - 150);
  ctx.strokeStyle = '#2a1a0a';
  ctx.lineWidth = 2.5;
  ctx.strokeRect(44, 130, W - 88, gnd - 150);

  // Upper hall
  ctx.fillStyle = '#ede4cc';
  ctx.fillRect(60, 68, W - 120, 64);
  ctx.strokeStyle = '#2a1a0a';
  ctx.lineWidth = 2;
  ctx.strokeRect(60, 68, W - 120, 64);

  // === CLASSICAL TRIANGULAR PORTICO PEDIMENT ===
  ctx.beginPath();
  ctx.moveTo(38, 130);
  ctx.lineTo(W / 2, 30);
  ctx.lineTo(W - 38, 130);
  ctx.closePath();
  const pedGrad = ctx.createLinearGradient(W / 2, 30, W / 2, 130);
  pedGrad.addColorStop(0, '#8b2030');
  pedGrad.addColorStop(1, '#5a0e18');
  ctx.fillStyle = pedGrad;
  ctx.fill();
  ctx.strokeStyle = '#2a0a0e';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Royal Coat of Arms in pediment
  ctx.fillStyle = '#d4af37';
  ctx.beginPath();
  ctx.arc(W / 2, 90, 14, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#a07820';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Crown atop
  ctx.fillStyle = '#d4af37';
  ctx.beginPath();
  ctx.arc(W / 2, 28, 8, 0, Math.PI * 2);
  ctx.fill();

  // Entablature
  ctx.fillStyle = '#e8e0cc';
  ctx.fillRect(38, 128, W - 76, 10);
  ctx.strokeStyle = '#2a1a0a';
  ctx.lineWidth = 2;
  ctx.strokeRect(38, 128, W - 76, 10);

  // === 6 CORINTHIAN COLUMNS ===
  const colXs = [W * 0.16, W * 0.28, W * 0.40, W * 0.60, W * 0.72, W * 0.84];
  colXs.forEach((cx) => {
    drawColumn(ctx, cx, 138, gnd - 20, 20);
  });

  // Arched entrance
  drawArch(ctx, W / 2, gnd - 88, gnd - 20, 30, '#f5b83a', '#2a1a0a');

  // Side windows
  [W * 0.13, W * 0.87].forEach((x) => {
    [160, 205, 250, 295].forEach((y) => {
      ctx.fillStyle = 'rgba(255, 200, 80, 0.6)';
      ctx.fillRect(x - 13, y, 26, 35);
      ctx.strokeStyle = '#2a1a0a';
      ctx.lineWidth = 1;
      ctx.strokeRect(x - 13, y, 26, 35);
    });
  });
}

// ─────────────────────────────────────────────────
// 7. TEATRO COLÓN (Buenos Aires)
//    Italian Renaissance / French Second Empire mix — seven arched bays, copper dome
// ─────────────────────────────────────────────────
function drawTeatroColon(ctx: CanvasRenderingContext2D, W: number, H: number) {
  clearTransparent(ctx, W, H);
  const gnd = H - 55;

  drawDropShadow(ctx, W, gnd + 10);

  // Base
  const baseGrad = ctx.createLinearGradient(0, gnd - 18, 0, gnd + 15);
  baseGrad.addColorStop(0, '#ccc0ae');
  baseGrad.addColorStop(1, '#a89888');
  ctx.fillStyle = baseGrad;
  ctx.fillRect(38, gnd - 18, W - 76, 33);
  ctx.strokeStyle = '#8a7868';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(38, gnd - 18, W - 76, 33);

  // Main facade
  const bGrad = ctx.createLinearGradient(40, 100, W - 40, 100);
  bGrad.addColorStop(0, '#ddd4c0');
  bGrad.addColorStop(0.5, '#f2ece0');
  bGrad.addColorStop(1, '#d8d0bc');
  ctx.fillStyle = bGrad;
  ctx.fillRect(40, 100, W - 80, gnd - 118);
  ctx.strokeStyle = '#2a1a0a';
  ctx.lineWidth = 2.5;
  ctx.strokeRect(40, 100, W - 80, gnd - 118);

  // Central dome
  const dGrad = ctx.createRadialGradient(W / 2 - 8, 82, 5, W / 2, 92, 60);
  dGrad.addColorStop(0, '#4a9478');
  dGrad.addColorStop(1, '#1e4a3a');
  ctx.fillStyle = dGrad;
  ctx.beginPath();
  ctx.ellipse(W / 2, 100, 58, 50, 0, Math.PI, 0);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = '#1a3a2a';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Dome finial
  ctx.fillStyle = '#d4af37';
  ctx.beginPath();
  ctx.arc(W / 2, 50, 8, 0, Math.PI * 2);
  ctx.fill();

  // Seven arched bays
  const bayW = (W - 80) / 7;
  for (let i = 0; i < 7; i++) {
    const bx = 40 + bayW * i + bayW / 2;
    // Arch amber glow
    ctx.beginPath();
    ctx.moveTo(bx - bayW * 0.38, gnd - 18);
    ctx.lineTo(bx - bayW * 0.38, gnd - 80);
    ctx.arc(bx, gnd - 80, bayW * 0.38, Math.PI, 0);
    ctx.lineTo(bx + bayW * 0.38, gnd - 18);
    ctx.closePath();
    const ag = ctx.createLinearGradient(bx, gnd - 118, bx, gnd - 18);
    ag.addColorStop(0, '#ffca50');
    ag.addColorStop(1, '#e08010');
    ctx.fillStyle = ag;
    ctx.fill();
    ctx.strokeStyle = '#2a1a0a';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  // Upper windows
  for (let i = 0; i < 7; i++) {
    const bx = 40 + bayW * i + bayW / 2;
    ctx.fillStyle = 'rgba(255, 200, 80, 0.55)';
    ctx.fillRect(bx - 14, 115, 28, 38);
    ctx.strokeStyle = '#2a1a0a';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(bx - 14, 115, 28, 38);
  }

  // Entablature
  ctx.fillStyle = '#e0d8c4';
  ctx.fillRect(40, 98, W - 80, 10);
  ctx.strokeStyle = '#2a1a0a';
  ctx.lineWidth = 2;
  ctx.strokeRect(40, 98, W - 80, 10);
}

// ─────────────────────────────────────────────────
// 8. GENERIC CLASSIC OPERA HOUSE (fallback)
// ─────────────────────────────────────────────────
function drawClassicTemple(ctx: CanvasRenderingContext2D, W: number, H: number) {
  clearTransparent(ctx, W, H);
  const gnd = H - 55;

  drawDropShadow(ctx, W, gnd + 10);

  // Base
  ctx.fillStyle = '#c0b4a0';
  ctx.fillRect(40, gnd - 18, W - 80, 33);
  ctx.strokeStyle = '#8a7868';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(40, gnd - 18, W - 80, 33);

  // Main hall
  const bGrad = ctx.createLinearGradient(44, 120, W - 44, 120);
  bGrad.addColorStop(0, '#e8e0cc');
  bGrad.addColorStop(0.5, '#f8f2e8');
  bGrad.addColorStop(1, '#e0d8c4');
  ctx.fillStyle = bGrad;
  ctx.fillRect(44, 120, W - 88, gnd - 138);
  ctx.strokeStyle = '#2a1a0a';
  ctx.lineWidth = 2.5;
  ctx.strokeRect(44, 120, W - 88, gnd - 138);

  // Pediment
  ctx.beginPath();
  ctx.moveTo(36, 120);
  ctx.lineTo(W / 2, 35);
  ctx.lineTo(W - 36, 120);
  ctx.closePath();
  const pedGrad = ctx.createLinearGradient(W / 2, 35, W / 2, 120);
  pedGrad.addColorStop(0, '#8b1e25');
  pedGrad.addColorStop(1, '#5a0e14');
  ctx.fillStyle = pedGrad;
  ctx.fill();
  ctx.strokeStyle = '#2a0a0e';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Crest
  ctx.fillStyle = '#d4af37';
  ctx.beginPath();
  ctx.arc(W / 2, 80, 12, 0, Math.PI * 2);
  ctx.fill();

  // Apex finial
  ctx.fillStyle = '#d4af37';
  ctx.beginPath();
  ctx.arc(W / 2, 32, 7, 0, Math.PI * 2);
  ctx.fill();

  // 4 columns
  const colXs = [W * 0.22, W * 0.38, W * 0.62, W * 0.78];
  colXs.forEach((cx) => drawColumn(ctx, cx, 128, gnd - 18, 20));

  // Arched entrance
  drawArch(ctx, W / 2, gnd - 85, gnd - 18, 28, '#f5b83a', '#2a1a0a');
}

// ─────────────────────────────────────────────────
// FACTORY — create Three.js texture from canvas
// ─────────────────────────────────────────────────
export function getPapercraftBuildingTexture(houseId: string): THREE.CanvasTexture {
  if (textureCache[houseId]) {
    return textureCache[houseId];
  }

  const W = 512;
  const H = 640;
  const { canvas, ctx } = createCanvas(W, H);

  switch (houseId) {
    case 'sydney-opera':
      drawSydneyOpera(ctx, W, H);
      break;
    case 'scala-milan':
      drawScalaMilan(ctx, W, H);
      break;
    case 'met-nyc':
      drawMetNYC(ctx, W, H);
      break;
    case 'garnier-paris':
      drawPalaisGarnier(ctx, W, H);
      break;
    case 'vienna-state':
      drawViennaState(ctx, W, H);
      break;
    case 'royal-opera-london':
      drawRoyalOperaHouse(ctx, W, H);
      break;
    case 'colon-buenos-aires':
      drawTeatroColon(ctx, W, H);
      break;
    default:
      drawClassicTemple(ctx, W, H);
      break;
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  textureCache[houseId] = texture;

  return texture;
}

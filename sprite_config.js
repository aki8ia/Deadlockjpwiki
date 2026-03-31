// Sprite sheet calibration config (generated from calibration tool)
// Maps each item category + price tier to its grid position in the shop screenshot
const SPRITE_CONFIG = {
  weapon: {
    800:  { startX: 121, startY: 176, w: 70, h: 110, gapX: 3, gapY: 2, cols: 5 },
    1600: { startX: 538, startY: 63,  w: 70, h: 110, gapX: 3, gapY: 2, cols: 6 },
    3200: { startX: 119, startY: 482, w: 70, h: 110, gapX: 4, gapY: 2, cols: 6 },
    6400: { startX: 607, startY: 482, w: 70, h: 110, gapX: 6, gapY: 2, cols: 5 }
  },
  vitality: {
    800:  { startX: 121, startY: 176, w: 70, h: 110, gapX: 3, gapY: 2, cols: 5 },
    1600: { startX: 538, startY: 63,  w: 70, h: 110, gapX: 3, gapY: 2, cols: 6 },
    3200: { startX: 119, startY: 482, w: 70, h: 110, gapX: 4, gapY: 2, cols: 5 },
    6400: { startX: 538, startY: 482, w: 70, h: 110, gapX: 5, gapY: 2, cols: 6 }
  },
  spirit: {
    800:  { startX: 121, startY: 176, w: 70, h: 110, gapX: 3, gapY: 2, cols: 5 },
    1600: { startX: 538, startY: 63,  w: 70, h: 110, gapX: 3, gapY: 2, cols: 6 },
    3200: { startX: 119, startY: 482, w: 70, h: 110, gapX: 4, gapY: 2, cols: 5 },
    6400: { startX: 538, startY: 482, w: 70, h: 110, gapX: 5, gapY: 2, cols: 6 }
  }
};

const SPRITE_FILES = {
  weapon:   'images/items/Weapon_shop.png',
  vitality: 'images/items/Vitality_shop.png',
  spirit:   'images/items/Spirit_shop.png'
};

// Build a lookup: item.id -> { category, tierIndex }
// Must be called after wikiData is loaded
let _itemLookup = null;
function buildItemLookup() {
  _itemLookup = {};
  ['weapon','vitality','spirit'].forEach(cat => {
    const tierIndexes = {};  // price -> running index
    wikiData.items[cat].forEach(item => {
      const price = item.price;
      if (typeof price !== 'number') return; // skip Legendary
      if (tierIndexes[price] === undefined) tierIndexes[price] = 0;
      _itemLookup[item.id] = { cat, price, idx: tierIndexes[price] };
      tierIndexes[price]++;
    });
  });
}

function getItemSpriteStyle(item) {
  if (!item) return null;
  if (!_itemLookup) buildItemLookup();
  const info = _itemLookup[item.id];
  if (!info) return null;
  const cfg = SPRITE_CONFIG[info.cat][info.price];
  if (!cfg) return null;
  const col = info.idx % cfg.cols;
  const row = Math.floor(info.idx / cfg.cols);
  const sx = cfg.startX + col * (cfg.w + cfg.gapX);
  const sy = cfg.startY + row * (cfg.h + cfg.gapY);
  const file = SPRITE_FILES[info.cat];
  return { sx, sy, w: cfg.w, h: cfg.h, file };
}

// Returns a div element with the sprite applied (or individual image if available)
function makeItemSprite(item, size) {
  const sz = size || 48;
  const outer = document.createElement('div');
  outer.style.cssText = `width:${sz}px;height:${sz}px;overflow:hidden;flex-shrink:0;display:inline-block;border-radius:4px;`;

  // Priority 1: individual image file (e.g. weapon items)
  if (item && item.image) {
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.original || '';
    img.style.cssText = `width:${sz}px;height:${sz}px;object-fit:contain;image-rendering:pixelated;display:block;`;
    outer.appendChild(img);
    return outer;
  }

  // Priority 2: sprite sheet
  const sp = getItemSpriteStyle(item);
  if (sp) {
    const scale = sz / sp.h;
    const inner = document.createElement('div');
    inner.style.cssText = `
      width:${sp.w}px; height:${sp.h}px;
      background-image: url('${sp.file}');
      background-repeat: no-repeat;
      background-position: -${sp.sx}px -${sp.sy}px;
      background-size: auto;
      transform: scale(${scale.toFixed(4)});
      transform-origin: top left;
      flex-shrink: 0;
    `;
    outer.style.width = sz + 'px';
    outer.style.height = sz + 'px';
    outer.appendChild(inner);
    return outer;
  }

  // Fallback: text
  outer.style.cssText += `background:#1e293b;display:flex;align-items:center;justify-content:center;font-size:0.6rem;color:#94a3b8;text-align:center;padding:2px;`;
  outer.textContent = item ? (item.translated || item.original || '?').substring(0, 4) : '?';
  return outer;
}

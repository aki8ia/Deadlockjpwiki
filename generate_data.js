const fs = require('fs');

const JSON_DIR = 'C:/Users/iinoa/AppData/Local/Temp/dl_data/data/json';
const LOCAL_DIR = 'C:/Users/iinoa/AppData/Local/Temp/dl_data/data/localizations';
const DATA_JS_PATH = 'C:/Users/iinoa/OneDrive/Desktop/字幕/deadlock-wiki-html/data.js';

function loadJson(path) {
    if (fs.existsSync(path)) {
        return JSON.parse(fs.readFileSync(path, 'utf8'));
    }
    return {};
}

function cleanDesc(str) {
    if (!str) return "";
    let s = str.replace(/<[^>]*>?/gm, '');
    s = s.replace(/\{g:[a-zA-Z0-9_]+:'([^']+)'\}/g, '$1');
    s = s.replace(/\{s:([a-zA-Z0-9_]+)\}/g, '[$1]'); // fallback for missing stats
    return s;
}

const itemData = loadJson(`${JSON_DIR}/item-data.json`);
const heroData = loadJson(`${JSON_DIR}/hero-data.json`);
const abilityData = loadJson(`${JSON_DIR}/ability-data.json`);
const jaLocal = loadJson(`${LOCAL_DIR}/japanese.json`);
const enLocal = loadJson(`${LOCAL_DIR}/english.json`);

const slotMap = { 'Weapon': 'weapon', 'Armor': 'vitality', 'Tech': 'spirit' };
const items = { weapon: [], vitality: [], spirit: [] };

// Build lookup of available individual item images (30px-<Name>.png)
const ITEM_IMAGES_DIR = 'C:/Users/iinoa/OneDrive/Desktop/字幕/deadlock-wiki-html/images/items';
const itemImageFiles = fs.existsSync(ITEM_IMAGES_DIR) ? fs.readdirSync(ITEM_IMAGES_DIR) : [];

function getItemImage(enName) {
    // Try exact match: 30px-<Name with spaces→underscores>.png
    const normalized = enName.replace(/ /g, '_').replace(/'/g, "'");

    // Exact match first
    if (itemImageFiles.includes(`30px-${normalized}.png`)) {
        return `images/items/30px-${normalized}.png`;
    }

    // Try with (item) suffix pattern (e.g. "Bullet Lifesteal" → "30px-Bullet_Lifesteal_(item).png")
    const withItem = `30px-${normalized}_(item).png`;
    if (itemImageFiles.includes(withItem)) {
        return `images/items/${withItem}`;
    }

    // Fuzzy: find any file whose name contains the normalized key
    const fuzzy = itemImageFiles.find(f =>
        f.startsWith('30px-') &&
        f.toLowerCase().replace(/[^a-z0-9]/g, '') === ('30px' + normalized.toLowerCase().replace(/[^a-z0-9]/g, ''))
    );
    if (fuzzy) return `images/items/${fuzzy}`;

    return null; // no individual image available
}

for (const [key, item] of Object.entries(itemData)) {
    if (!item.Tier || !item.Cost || !item.Slot || !slotMap[item.Slot] || item.IsDisabled) continue;
    if (key.includes('base') || key.endsWith('_t1') || key.endsWith('_t2') || key.endsWith('_t3') || key.endsWith('_t4') || key.endsWith('_t5')) {
        if (!key.includes('upgrade_') && !key.includes('item_')) continue;
        if (key === 'armor_upgrade_t1' || key === 'tech_upgrade_t1' || key.includes('upgrade_t2') || key.includes('upgrade_t3') || key.includes('upgrade_t4') || key.includes('upgrade_t5')) continue;
    }

    const nameKey = key;
    const descKey = key + '_desc';
    
    const enName = enLocal[nameKey] || key;
    let jaName = jaLocal[nameKey] || enName;
    let jaDesc = jaLocal[descKey] || '';
    jaDesc = cleanDesc(jaDesc);

    const cat = slotMap[item.Slot];
    let price = item.Cost;
    if (price === 9999) price = 'Legendary';

    items[cat].push({
        id: key,
        original: enName,
        translated: jaName,
        image: getItemImage(enName),
        price: price,
        duration: item.AbilityDuration || "",
        effects: item.PropertyUpgrades ? Object.keys(item.PropertyUpgrades).map(k => `${k}: ${item.PropertyUpgrades[k]}`) : [],
        stats: item.PropertyUpgrades || {}, // Raw stats for calculator
        description: jaDesc
    });
}

['weapon', 'vitality', 'spirit'].forEach(cat => {
    items[cat].sort((a,b) => {
        let priceA = a.price === 'Legendary' ? 9999 : a.price;
        let priceB = b.price === 'Legendary' ? 9999 : b.price;
        if (priceA !== priceB) return priceA - priceB;
        // Within same tier, sort alphabetically by English name (matches shop screenshot order)
        return a.original.localeCompare(b.original);
    });
});

const HERO_IMAGES_DIR = 'C:/Users/iinoa/OneDrive/Desktop/字幕/deadlock-wiki-html/images/heroes';
const heroImagesFiles = fs.existsSync(HERO_IMAGES_DIR) ? fs.readdirSync(HERO_IMAGES_DIR) : [];

function getHeroImage(enName) {
    let searchName = enName.toLowerCase().replace(/ /g, '_');
    if (searchName.includes('(transformed)')) searchName = searchName.replace('_(transformed)', '');
    const match = heroImagesFiles.find(img => img.toLowerCase().includes(searchName));
    if (match) return `images/heroes/${match}`;
    return `images/heroes/${enName.toLowerCase().replace(/ /g, '_')}.png`;
}

const heroes = [];
for (const [key, hero] of Object.entries(heroData)) {
    // Exclude unreleased or disabled heroes
    if (hero.IsDisabled || !hero.IsSelectable || hero.InDevelopment) continue;
    if (key === 'hero_targetdummy' || key === 'hero_base') continue;
    
    const nameKey = key;
    const enName = hero.Name || enLocal[nameKey] || key.replace('hero_', '');
    const jaName = jaLocal[nameKey] || enName;
    
    let desc = cleanDesc(jaLocal[`${key}_playstyle`]);

    const abilities = [];
    if (hero.BoundAbilities) {
        for (let i = 1; i <= 4; i++) {
            const abInfo = hero.BoundAbilities[i.toString()];
            if (!abInfo) {
                abilities.push({ name: "", desc: "", scaling: {} });
                continue;
            }
            const abKey = abInfo.Key;
            
            const abEnName = enLocal[abKey] || abInfo.Name || abKey;
            const abJaName = jaLocal[abKey] || abEnName;
            
            let abDesc = cleanDesc(jaLocal[`${abKey}_desc`]);
            
            const t1 = jaLocal[`${abKey}_t1_desc`] ? `【T1】${cleanDesc(jaLocal[`${abKey}_t1_desc`])}` : "";
            const t2 = jaLocal[`${abKey}_t2_desc`] ? `【T2】${cleanDesc(jaLocal[`${abKey}_t2_desc`])}` : "";
            const t3 = jaLocal[`${abKey}_t3_desc`] ? `【T3】${cleanDesc(jaLocal[`${abKey}_t3_desc`])}` : "";
            
            const fullDescChunks = [abDesc, t1, t2, t3].filter(Boolean);
            
            // Extract numerical scaling for calculator
            const rawAbility = abilityData[abKey] || {};
            const dmg = rawAbility.Damage || rawAbility.BonusDamage || rawAbility.StompDamage || rawAbility.HealAmount || rawAbility.DPS || null;
            let baseDamage = 0;
            let spiritScale = 0;
            if (dmg) {
                if (typeof dmg === 'object' && dmg.Value !== undefined) {
                    baseDamage = dmg.Value || 0;
                    if (dmg.Scale && dmg.Scale.Type === 'spirit') {
                        spiritScale = dmg.Scale.Value || 0;
                    }
                } else if (typeof dmg === 'number') {
                    baseDamage = dmg;
                }
            }

            abilities.push({
                name: abEnName,
                translated: abJaName,
                desc: fullDescChunks.join(' / '),
                scaling: { base: baseDamage, spirit: spiritScale } // For calc engine
            });
        }
    } else {
        while(abilities.length < 4) abilities.push({ name: "", desc: "", scaling: {} });
    }

    // Extract hero base stats for calculator
    const baseStats = {
        maxHealth: hero.MaxHealth || 0,
        bulletDamage: hero.Weapon ? hero.Weapon.BulletDamage : 0,
        roundsPerSecond: hero.Weapon ? hero.Weapon.RoundsPerSecond : 0,
        bulletsPerShot: hero.Weapon ? hero.Weapon.BulletsPerShot : 1,
        spiritScaling: hero.LevelScaling ? hero.LevelScaling.TechPower : 0,
        clipSize: hero.Weapon ? hero.Weapon.ClipSize : 0,
        reloadTime: hero.Weapon ? hero.Weapon.ReloadTime : 0,
        bulletSpeed: hero.Weapon ? hero.Weapon.BulletSpeed : 0,
        moveSpeed: hero.MaxMoveSpeed || 0,
        sprintSpeed: hero.SprintSpeed || 0,
        stamina: hero.Stamina || 0,
        lightMelee: hero.LightMeleeDamage || 0,
        heavyMelee: hero.HeavyMeleeDamage || 0,
        bulletResist: (hero.LevelScaling && hero.LevelScaling.BulletResist) ? hero.LevelScaling.BulletResist : 0,
        spiritResist: (hero.LevelScaling && hero.LevelScaling.TechResist) ? hero.LevelScaling.TechResist : 0
    };

    heroes.push({
        id: key,
        original: enName,
        translated: jaName,
        image: getHeroImage(enName),
        description: desc,
        stats: baseStats, // Raw stats for calc engine
        abilities: abilities
    });
}

heroes.sort((a,b) => a.original.localeCompare(b.original));

const finalDataJsContent = `const wikiData = {
  heroes: ${JSON.stringify(heroes, null, 4)},
  items: ${JSON.stringify(items, null, 4)}
};
`;

fs.writeFileSync(DATA_JS_PATH, finalDataJsContent, 'utf8');
console.log(`Successfully injected both heroes and items into data.js`);

// --- NEW: Generate individual HTML pages for SEO ---
const baseTemplate = fs.readFileSync('template.html', 'utf8');
const sitemapPages = ['index.html'];

function generateSlug(name) {
    return name.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
}

// Generate Hero Pages
heroes.forEach(hero => {
    const slug = generateSlug(hero.original);
    let statsHtml = '';
    for (const [key, val] of Object.entries(hero.stats)) {
        statsHtml += `<div class="stat-card"><strong>${key}</strong>: ${val}</div>`;
    }

    const iconHtml = `<img src="../${hero.image}" alt="${hero.translated}">`;
    const abilitiesHtml = hero.abilities.map(ab => `
        <div class="glass-card" style="margin-top: 1rem; padding: 1rem;">
            <h3 style="color: var(--accent-primary)">${ab.translated || ab.name}</h3>
            <p>${ab.desc}</p>
        </div>
    `).join('');

    let pageHtml = baseTemplate
        .replace('{{PAGE_TITLE}}', `${hero.translated} (${hero.original}) ヒーローステータス`)
        .replace('{{PAGE_DESCRIPTION}}', `Deadlockのヒーロー「${hero.translated}」の基本ステータス、アビリティ、詳細情報。日本語Wiki。`)
        .replace('{{NAME}}', hero.translated)
        .replace('{{SUB_NAME}}', hero.original)
        .replace('{{ICON_HTML}}', iconHtml)
        .replace('{{STATS_HTML}}', statsHtml)
        .replace('{{ADDITIONAL_CONTENT}}', `<div class="modal-section" style="margin-top:2rem;"><h2>アビリティ</h2>${abilitiesHtml}</div>`)
        .replace('../index.html', '../index.html')
        .replace('../style.css', '../style.css');

    fs.writeFileSync(`heroes/${slug}.html`, pageHtml, 'utf8');
    sitemapPages.push(`heroes/${slug}.html`);
});

// Generate Item Pages
['weapon', 'vitality', 'spirit'].forEach(cat => {
    items[cat].forEach(item => {
        const slug = generateSlug(item.original);
        const iconHtml = item.image 
            ? `<img src="../${item.image}" alt="${item.translated}">`
            : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:2rem;">★</div>`;

        const statsHtml = item.effects.map(eff => `<div class="stat-card">${eff}</div>`).join('');
        
        let pageHtml = baseTemplate
            .replace('{{PAGE_TITLE}}', `${item.translated} (${item.original}) アイテム性能`)
            .replace('{{PAGE_DESCRIPTION}}', `Deadlockのアイテム「${item.translated}」の効果、価格、詳細ステータス。ビルド計算に役立つ詳細情報。`)
            .replace('{{NAME}}', item.translated)
            .replace('{{SUB_NAME}}', `${item.original} / ${item.price} Souls`)
            .replace('{{ICON_HTML}}', iconHtml)
            .replace('{{STATS_HTML}}', statsHtml)
            .replace('{{ADDITIONAL_CONTENT}}', `<p style="margin-top:2rem;">${item.description}</p>`)
            .replace('../index.html', '../index.html')
            .replace('../style.css', '../style.css');

        fs.writeFileSync(`items/${slug}.html`, pageHtml, 'utf8');
        sitemapPages.push(`items/${slug}.html`);
    });
});

// --- Generate sitemap.xml ---
const domain = "https://deadlock-wiki-jp.pages.dev"; // 仮のドメイン（ユーザーに変更してもらう）
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapPages.map(p => `  <url><loc>${domain}/${p}</loc></url>`).join('\n')}
</urlset>`;
fs.writeFileSync('sitemap.xml', sitemapContent, 'utf8');

// --- Generate robots.txt ---
const robotsContent = `User-agent: *
Allow: /
Sitemap: ${domain}/sitemap.xml`;
fs.writeFileSync('robots.txt', robotsContent, 'utf8');

console.log(`Generated ${sitemapPages.length - 1} individual SEO pages and sitemap.xml.`);


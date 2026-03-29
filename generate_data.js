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

const itemData = loadJson(`${JSON_DIR}/item-data.json`);
const heroData = loadJson(`${JSON_DIR}/hero-data.json`);
const abilityData = loadJson(`${JSON_DIR}/ability-data.json`);
const jaLocal = loadJson(`${LOCAL_DIR}/japanese.json`);
const enLocal = loadJson(`${LOCAL_DIR}/english.json`);

const slotMap = { 'Weapon': 'weapon', 'Armor': 'vitality', 'Tech': 'spirit' };
const items = { weapon: [], vitality: [], spirit: [] };

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
    jaDesc = jaDesc.replace(/<[^>]*>?/gm, '');

    const cat = slotMap[item.Slot];
    let price = item.Cost;
    if (price === 9999) price = 'Legendary';

    items[cat].push({
        id: key,
        original: enName,
        translated: jaName,
        image: `images/items/${key}.png`,
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
        return priceA - priceB;
    });
});

const heroes = [];
for (const [key, hero] of Object.entries(heroData)) {
    // Exclude unreleased or disabled heroes
    if (hero.IsDisabled || !hero.IsSelectable || hero.InDevelopment) continue;
    if (key === 'hero_targetdummy' || key === 'hero_base') continue;
    
    const nameKey = key;
    const enName = hero.Name || enLocal[nameKey] || key.replace('hero_', '');
    const jaName = jaLocal[nameKey] || enName;
    
    let desc = jaLocal[`${key}_playstyle`] || "";
    desc = desc.replace(/<[^>]*>?/gm, '');

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
            
            let abDesc = jaLocal[`${abKey}_desc`] || "";
            abDesc = abDesc.replace(/<[^>]*>?/gm, '');
            
            const t1 = jaLocal[`${abKey}_t1_desc`] ? `【T1】${jaLocal[`${abKey}_t1_desc`].replace(/<[^>]*>?/gm, '')}` : "";
            const t2 = jaLocal[`${abKey}_t2_desc`] ? `【T2】${jaLocal[`${abKey}_t2_desc`].replace(/<[^>]*>?/gm, '')}` : "";
            const t3 = jaLocal[`${abKey}_t3_desc`] ? `【T3】${jaLocal[`${abKey}_t3_desc`].replace(/<[^>]*>?/gm, '')}` : "";
            
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
        image: `images/heroes/${key}.png`,
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

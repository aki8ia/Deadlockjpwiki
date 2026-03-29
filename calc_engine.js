class DamageCalculator {
    static calculate(hero, items) {
        if (!hero) return null;

        // Base stats from hero
        let stats = {
            maxHealth: hero.stats.maxHealth || 0,
            bulletDamage: hero.stats.bulletDamage || 0,
            fireRate: hero.stats.roundsPerSecond || 0,
            bulletsPerShot: hero.stats.bulletsPerShot || 1,
            spiritScaling: hero.stats.spiritScaling || 1,
            clipSize: hero.stats.clipSize || 0,
            reloadTime: hero.stats.reloadTime || 0,
            bulletSpeed: hero.stats.bulletSpeed || 0,
            moveSpeed: hero.stats.moveSpeed || 0,
            sprintSpeed: hero.stats.sprintSpeed || 0,
            stamina: hero.stats.stamina || 0,
            lightMelee: hero.stats.lightMelee || 0,
            heavyMelee: hero.stats.heavyMelee || 0,
            bulletResist: (hero.stats.bulletResist || 0) * 100, // assume base might be raw decimal or 0
            spiritResist: (hero.stats.spiritResist || 0) * 100
        };

        // Aggregate all item stats dynamically
        let agg = {};
        items.forEach(item => {
            if (!item || !item.stats) return;
            for (const [key, val] of Object.entries(item.stats)) {
                if (!agg[key]) agg[key] = 0;
                agg[key] += val;
            }
        });

        // Parse aggregated modifiers
        const healthBonus = agg.BonusHealth || 0;
        const healthPercent = agg.BonusHealthPercent || 0;
        const weaponDamagePercent = (agg.BonusWeaponDamagePercent || 0) + (agg.BaseAttackDamagePercent || 0);
        const spiritPower = (agg.SpiritPower || 0) + (agg.TechPower || 0);
        const fireRatePercent = agg.BonusFireRate || 0;
        
        const clipSizeBonus = agg.BonusClipSize || 0;
        const clipSizePercent = agg.BonusClipSizePercent || 0;
        const reloadTimePercent = agg.BonusReloadTimePercent || 0; 
        const reloadSpeed = agg.ReloadSpeed || 0;

        const moveSpeedBonus = agg.BonusMoveSpeed || 0;
        const moveSpeedPercent = agg.BonusMoveSpeedPercent || 0;
        const sprintSpeedBonus = agg.BonusSprintSpeed || 0;
        
        const staminaBonus = agg.BonusStamina || 0;
        
        const meleeDamageBonus = agg.BonusMeleeDamage || 0;
        const meleeDamagePercent = agg.BonusMeleeDamagePercent || 0;
        
        const bulletResistBonus = (agg.BulletArmorDamageReduction || 0) + (agg.BonusBulletResist || 0);
        const spiritResistBonus = (agg.TechArmorDamageReduction || 0) + (agg.BonusSpiritResist || 0);
        
        const bulletLifesteal = agg.BulletLifestealPercent || 0;
        const spiritLifesteal = agg.SpiritLifestealPercent || 0;
        
        const bulletSpeedPercent = agg.BonusBulletSpeedPercent || 0;

        // Compute finals
        const finalHealth = (stats.maxHealth + healthBonus) * (1 + healthPercent / 100);
        const finalBulletDamage = stats.bulletDamage * (1 + weaponDamagePercent / 100);
        const finalFireRate = stats.fireRate * (1 + fireRatePercent / 100);
        const dps = finalBulletDamage * finalFireRate * stats.bulletsPerShot;

        // Clip size can be increased flat and %
        const finalClipSize = (stats.clipSize + clipSizeBonus) * (1 + clipSizePercent / 100);
        
        // Reload time is reduced by ReloadSpeed. Usually ReloadTime / (1 + reloadSpeed/100)
        const totalReloadSpeedPercent = reloadSpeed + reloadTimePercent; // Note: In game, sometimes it's negative to indicate reduction. We assume positive means faster reload speed.
        const finalReloadTime = stats.reloadTime / Math.max(0.1, (1 + totalReloadSpeedPercent / 100));

        const finalMoveSpeed = (stats.moveSpeed + moveSpeedBonus) * (1 + moveSpeedPercent / 100);
        const finalSprintSpeed = stats.sprintSpeed + sprintSpeedBonus;
        const finalStamina = stats.stamina + staminaBonus;
        
        const finalLightMelee = stats.lightMelee * (1 + meleeDamagePercent / 100) + meleeDamageBonus;
        const finalHeavyMelee = stats.heavyMelee * (1 + meleeDamagePercent / 100) + meleeDamageBonus;
        
        const finalBulletResist = stats.bulletResist + bulletResistBonus;
        const finalSpiritResist = stats.spiritResist + spiritResistBonus;
        const finalBulletSpeed = stats.bulletSpeed * (1 + bulletSpeedPercent / 100);

        // Compute abilities
        const abilityDamages = hero.abilities.map((ab) => {
            if (!ab || !ab.name) return null;
            let baseDmg = ab.scaling.base || 0;
            let spiritScale = ab.scaling.spirit || 0;
            let totalDmg = baseDmg + (spiritPower * spiritScale);
            return {
                name: ab.translated || ab.name,
                base: baseDmg,
                scaling: spiritScale,
                total: totalDmg
            };
        });

        // Group the finals logically for UI consumption
        return {
            weapon: {
                dps: Math.round(dps),
                bulletDamage: finalBulletDamage.toFixed(1),
                fireRate: finalFireRate.toFixed(2),
                clipSize: Math.round(finalClipSize),
                reloadTime: finalReloadTime.toFixed(2) + "s",
                bulletSpeed: Math.round(finalBulletSpeed)
            },
            vitality: {
                health: Math.round(finalHealth),
                moveSpeed: finalMoveSpeed.toFixed(1) + "m/s",
                sprintSpeed: finalSprintSpeed.toFixed(1) + "m/s",
                stamina: Math.round(finalStamina),
                bulletResist: finalBulletResist.toFixed(0) + "%",
                spiritResist: finalSpiritResist.toFixed(0) + "%",
                bulletLifesteal: bulletLifesteal.toFixed(0) + "%"
            },
            spirit: {
                spiritPower: Math.round(spiritPower),
                spiritLifesteal: spiritLifesteal.toFixed(0) + "%",
                lightMelee: Math.round(finalLightMelee),
                heavyMelee: Math.round(finalHeavyMelee)
            },
            abilities: abilityDamages.filter(a => a !== null)
        };
    }
}

// Make accessible globally
window.DamageCalculator = DamageCalculator;

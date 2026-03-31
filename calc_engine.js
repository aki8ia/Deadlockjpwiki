class DamageCalculator {
    static calculate(hero, items) {
        if (!hero || !hero.stats) return null;

        const s = hero.stats;

        // Base stats from hero data
        let stats = {
            maxHealth:     s.maxHealth     || 0,
            bulletDamage:  s.bulletDamage  || 0,
            fireRate:      s.roundsPerSecond || 0,
            bulletsPerShot:s.bulletsPerShot || 1,
            clipSize:      s.clipSize      || 0,
            reloadTime:    s.reloadTime    || 0,
            bulletSpeed:   s.bulletSpeed   || 0,
            moveSpeed:     s.moveSpeed     || 0,
            sprintSpeed:   s.sprintSpeed   || 0,
            stamina:       s.stamina       || 0,
            lightMelee:    s.lightMelee    || 0,
            heavyMelee:    s.heavyMelee    || 0,
            bulletResist:  s.bulletResist  || 0,  // already 0 (base %)
            spiritResist:  s.spiritResist  || 0
        };

        // Aggregate all item stats dynamically
        let agg = {};
        items.forEach(item => {
            if (!item || !item.stats) return;
            for (const [key, val] of Object.entries(item.stats)) {
                agg[key] = (agg[key] || 0) + val;
            }
        });

        // Item modifiers
        const healthBonus          = agg.BonusHealth || 0;
        const healthPercent        = agg.BonusHealthPercent || 0;
        const weaponDamagePercent  = (agg.BonusWeaponDamagePercent || 0) + (agg.BaseAttackDamagePercent || 0) + (agg.WeaponPower || 0);
        const spiritPower          = (agg.SpiritPower || 0) + (agg.TechPower || 0);
        const fireRatePercent      = agg.BonusFireRate || 0;
        const clipSizeBonus        = agg.BonusClipSize || 0;
        const clipSizePercent      = agg.BonusClipSizePercent || 0;
        const reloadSpeedPercent   = (agg.ReloadSpeed || 0) + (agg.BonusReloadSpeed || 0);
        const moveSpeedBonus       = agg.BonusMoveSpeed || 0;
        const moveSpeedPercent     = agg.BonusMoveSpeedPercent || 0;
        const sprintSpeedBonus     = agg.BonusSprintSpeed || 0;
        const staminaBonus         = agg.BonusStamina || 0;
        const meleeDamageBonus     = agg.BonusMeleeDamage || 0;
        const meleeDamagePercent   = agg.BonusMeleeDamagePercent || 0;
        const bulletResistBonus    = (agg.BulletArmorDamageReduction || 0) + (agg.BonusBulletResist || 0) + (agg.BulletResist || 0);
        const spiritResistBonus    = (agg.TechArmorDamageReduction || 0) + (agg.BonusSpiritResist || 0) + (agg.TechResist || 0);
        const bulletLifesteal      = agg.BulletLifestealPercent || 0;
        const spiritLifesteal      = agg.SpiritLifestealPercent || 0;
        const bulletSpeedPercent   = agg.BonusBulletSpeedPercent || 0;

        // Compute finals
        const finalBulletDamage = stats.bulletDamage * (1 + weaponDamagePercent / 100);
        const finalFireRate     = stats.fireRate * (1 + fireRatePercent / 100);
        // Per-shot DPS: each "shot" fires bulletsPerShot pellets (e.g. Abrams shotgun = 9)
        const dps = finalBulletDamage * stats.bulletsPerShot * finalFireRate;

        const finalHealth       = (stats.maxHealth + healthBonus) * (1 + healthPercent / 100);
        const finalClipSize     = Math.ceil((stats.clipSize + clipSizeBonus) * (1 + clipSizePercent / 100));
        // Reload is faster with ReloadSpeed%: divide by (1 + pct/100)
        const finalReloadTime   = reloadSpeedPercent > 0
            ? stats.reloadTime / (1 + reloadSpeedPercent / 100)
            : stats.reloadTime;
        const finalBulletSpeed  = stats.bulletSpeed * (1 + bulletSpeedPercent / 100);
        const finalMoveSpeed    = (stats.moveSpeed + moveSpeedBonus) * (1 + moveSpeedPercent / 100);
        const finalSprintSpeed  = stats.sprintSpeed + sprintSpeedBonus;
        const finalStamina      = stats.stamina + staminaBonus;
        const finalLightMelee   = stats.lightMelee * (1 + meleeDamagePercent / 100) + meleeDamageBonus;
        const finalHeavyMelee   = stats.heavyMelee * (1 + meleeDamagePercent / 100) + meleeDamageBonus;
        const finalBulletResist = stats.bulletResist + bulletResistBonus;
        const finalSpiritResist = stats.spiritResist + spiritResistBonus;

        // Ability damage with spirit scaling
        const abilities = (hero.abilities || []).map(ab => {
            if (!ab || !ab.name) return null;
            const base  = (ab.scaling && ab.scaling.base)   || 0;
            const scale = (ab.scaling && ab.scaling.spirit) || 0;
            return {
                name:    ab.translated || ab.name,
                base,
                scaling: scale,
                total:   base + spiritPower * scale
            };
        }).filter(Boolean);

        return {
            weapon: {
                dps:         Math.round(dps),
                bulletDamage:finalBulletDamage.toFixed(1),
                fireRate:    finalFireRate.toFixed(2),
                clipSize:    finalClipSize,
                reloadTime:  finalReloadTime.toFixed(2) + 's',
                bulletSpeed: Math.round(finalBulletSpeed)
            },
            vitality: {
                health:        Math.round(finalHealth),
                moveSpeed:     finalMoveSpeed.toFixed(1) + 'm/s',
                sprintSpeed:   finalSprintSpeed.toFixed(1) + 'm/s',
                stamina:       finalStamina,
                bulletResist:  finalBulletResist.toFixed(0) + '%',
                spiritResist:  finalSpiritResist.toFixed(0) + '%',
                bulletLifesteal: bulletLifesteal.toFixed(0) + '%'
            },
            spirit: {
                spiritPower:    Math.round(spiritPower),
                spiritLifesteal: spiritLifesteal.toFixed(0) + '%',
                lightMelee:    Math.round(finalLightMelee),
                heavyMelee:    Math.round(finalHeavyMelee)
            },
            abilities
        };
    }
}

window.DamageCalculator = DamageCalculator;

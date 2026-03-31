// analyze item counts per tier per category
const src = require('fs').readFileSync('data.js', 'utf8');
// evaluate safely
const fn = new Function(src + '; return wikiData;');
const wikiData = fn();

['weapon', 'vitality', 'spirit'].forEach(cat => {
  const items = wikiData.items[cat];
  const byTier = {};
  items.forEach(i => {
    const t = i.price === 'Legendary' ? 'Legendary' : i.price;
    byTier[t] = (byTier[t] || []);
    byTier[t].push(i.original);
  });
  console.log(`\n=== ${cat.toUpperCase()} (${items.length} items) ===`);
  Object.entries(byTier).sort((a,b) => Number(a[0])-Number(b[0])).forEach(([tier, names]) => {
    console.log(`  Tier ${tier} (${names.length}): ${names.join(', ')}`);
  });
});

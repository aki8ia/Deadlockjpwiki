// data.jsの内容はグローバルスコープで読み込まれます

document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item, .nav-button');
  const sections = document.querySelectorAll('.view-section');

  // ナビゲーション処理
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = item.getAttribute('data-target');
      
      document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
      if(item.classList.contains('nav-item')) {
        item.classList.add('active');
      } else {
        const sidebarLink = document.querySelector(`.nav-item[data-target="${targetId}"]`);
        if(sidebarLink) sidebarLink.classList.add('active');
      }

      sections.forEach(sec => {
        if(sec.id === targetId) {
          sec.style.display = 'block';
          sec.classList.remove('animate-fade-in');
          void sec.offsetWidth;
          sec.classList.add('animate-fade-in');
        } else {
          sec.style.display = 'none';
        }
      });
    });
  });

  // データ描画機能
  const renderCards = (dataArray, containerId, iconText, groupByPrice = false) => {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    const createCard = (item) => {
      const displayName = item.translated || item.original;
      const subName = item.translated ? item.original : (item.price && item.price !== "Legendary" ? `${item.price} Souls` : (item.price === 'Legendary' ? 'Legendary' : '未翻訳'));

      const card = document.createElement('div');
      card.className = 'item-card';
      card.dataset.title = displayName;
      card.dataset.sub = item.original;

      const iconHtml = item.image 
        ? `<img src="${item.image}" alt="${displayName}">` 
        : iconText;

      card.innerHTML = `
        <div class="item-card-icon">${iconHtml}</div>
        <div class="item-card-title">${displayName}</div>
        <div class="item-card-sub" style="font-size: 0.8rem">${subName}</div>
        <div class="item-card-line"></div>
      `;
      return card;
    };

    if (groupByPrice) {
      const priceOrder = [800, 1600, 3200, 6400, 'Legendary'];
      priceOrder.forEach(price => {
        const itemsInPrice = dataArray.filter(i => i.price === price);
        if(itemsInPrice.length === 0) return;

        const priceTitle = document.createElement('h4');
        priceTitle.style.marginTop = '1.5rem';
        priceTitle.style.marginBottom = '1rem';
        priceTitle.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
        priceTitle.style.paddingBottom = '0.5rem';
        priceTitle.style.color = '#e5e7eb';
        priceTitle.style.fontSize = '1.2rem';
        priceTitle.style.width = '100%';
        
        if(price === 'Legendary') {
           priceTitle.innerHTML = `<span style="color:#d946ef">★</span> Legendary`;
        } else {
           priceTitle.innerHTML = `<span style="color:#fbbf24">◎</span> ${price} Souls`;
        }
        container.appendChild(priceTitle);

        const gridWrapper = document.createElement('div');
        gridWrapper.className = 'grid-container';
        gridWrapper.style.width = '100%';
        itemsInPrice.forEach(item => gridWrapper.appendChild(createCard(item)));
        container.appendChild(gridWrapper);
      });
    } else {
      const gridWrapper = document.createElement('div');
      gridWrapper.className = 'grid-container';
      gridWrapper.style.width = '100%';
      dataArray.forEach(item => gridWrapper.appendChild(createCard(item)));
      container.appendChild(gridWrapper);
    }
  }

  // 初期ロード時のレンダリング
  renderCards(wikiData.heroes, 'heroes-container', 'H', false);
  renderCards(wikiData.items.weapon, 'items-weapon-container', 'W', true);
  renderCards(wikiData.items.vitality, 'items-vitality-container', 'V', true);
  renderCards(wikiData.items.spirit, 'items-spirit-container', 'S', true);

  // グローバルデータの結合 (検索・モーダル用)
  const allItems = [
    ...wikiData.heroes.map(h => ({...h, category: 'hero'})),
    ...wikiData.items.weapon.map(i => ({...i, category: 'weapon'})),
    ...wikiData.items.vitality.map(i => ({...i, category: 'vitality'})),
    ...wikiData.items.spirit.map(i => ({...i, category: 'spirit'}))
  ];

  // 検索インターフェース
  const searchInput = document.querySelector('.topbar-search input');
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    document.querySelectorAll('.item-card').forEach(card => {
      const title = card.querySelector('.item-card-title').textContent.toLowerCase();
      const sub = card.querySelector('.item-card-sub').textContent.toLowerCase();
      if(title.includes(query) || sub.includes(query)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });

  // モーダル処理
  const modal = document.getElementById('detail-modal');
  const modalClose = document.getElementById('modal-close');
  
  if(modal && modalClose) {
    document.addEventListener('click', (e) => {
      // item-cardのクリック判定
      const card = e.target.closest('.item-card');
      if(card) {
        const queryTitle = card.dataset.title;
        const queryOrig = card.dataset.sub;
        
        // 元データからアイテムを特定
        const itemData = allItems.find(i => (i.translated || i.original) === queryTitle && i.original === queryOrig);
        if(itemData) {
          document.getElementById('modal-title').textContent = itemData.translated || itemData.original;
          document.getElementById('modal-sub').textContent = itemData.translated ? itemData.original : (itemData.tier ? `Tier ${itemData.tier}` : 'Detailed Info');
          document.getElementById('modal-icon').innerHTML = itemData.image ? `<img src="${itemData.image}">` : (itemData.category === 'hero' ? 'H' : '★');
          
          // 金額の表示切替
          if(itemData.price) {
            document.getElementById('modal-price-val').textContent = itemData.price.toLocaleString();
            document.getElementById('modal-price').style.display = 'flex';
          } else {
            document.getElementById('modal-price').style.display = 'none';
          }

          // スキルまたはエフェクトリストの生成
          const elemEffects = document.getElementById('modal-effects');
          const elemTitle = elemEffects.previousElementSibling;
          elemEffects.innerHTML = '';
          
          if(itemData.category === 'hero') {
            elemTitle.textContent = 'アビリティ・スキル';
            if(itemData.abilities && itemData.abilities.length > 0) {
              itemData.abilities.forEach((ab, idx) => {
                const li = document.createElement('li');
                li.style.flexDirection = 'column';
                li.style.alignItems = 'flex-start';
                li.style.gap = '0.2rem';
                li.innerHTML = `<strong style="color:var(--accent-primary)">Skill ${idx+1}: <span style="color:var(--text-main)">${ab.name || "未登録"}</span></strong><span style="color:var(--text-muted); font-size: 0.85rem">${ab.desc || "説明なし"}</span>`;
                elemEffects.appendChild(li);
              });
            } else {
              elemEffects.innerHTML = '<li style="color:var(--text-muted); padding-left:0;">└ スキルはまだ登録されていません</li>';
            }
          } else {
            elemTitle.textContent = 'ステータス・効果';
            if(itemData.effects && itemData.effects.length > 0) {
              itemData.effects.forEach(eff => {
                const li = document.createElement('li');
                li.textContent = eff;
                elemEffects.appendChild(li);
              });
            } else {
              elemEffects.innerHTML = '<li style="color:var(--text-muted); padding-left:0;">└ ステータス効果はまだ登録されていません</li>';
            }
          }

          // 説明テキスト
          let descText = itemData.description || "";
          if(itemData.duration) descText += `\n\n🕒 持続時間: ${itemData.duration}`;
          document.getElementById('modal-desc').textContent = descText || "このパネルに記載したい詳細情報を data.js に入力してください。";
          
          modal.classList.add('active');
        }
      }
    });

    modalClose.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => { if(e.target === modal) modal.classList.remove('active'); });
  }

  // --- Calculator App Logic ---
  const calcState = {
    hero: null,
    items: new Array(12).fill(null)
  };

  const calcHeroSelect = document.getElementById('calc-hero-select');
  if(calcHeroSelect) {
    wikiData.heroes.forEach((h, idx) => {
      const opt = document.createElement('option');
      opt.value = idx;
      opt.textContent = h.translated || h.original;
      calcHeroSelect.appendChild(opt);
    });

    calcHeroSelect.addEventListener('change', (e) => {
      const idx = e.target.value;
      calcState.hero = idx !== "" ? wikiData.heroes[idx] : null;
      updateCalcResults();
    });
  }

  const slotContainers = {
    all: document.getElementById('calc-all-slots')
  };

  function renderCalcSlots() {
    const container = slotContainers.all;
    if(!container) return;
    container.innerHTML = '';
    
    for(let i=0; i<12; i++) {
        const item = calcState.items[i];
        
        const slot = document.createElement('div');
        slot.className = 'calc-slot' + (item ? '' : ' empty');
        
        if (item) {
          if (item.image) {
            const img = document.createElement('img');
            img.src = item.image;
            slot.appendChild(img);
          } else {
            slot.textContent = item.translated.substring(0,2);
          }
          const rmBtn = document.createElement('button');
          rmBtn.className = 'remove-btn';
          rmBtn.innerHTML = '&times;';
          rmBtn.onclick = (e) => {
            e.stopPropagation();
            calcState.items[i] = null;
            renderCalcSlots();
            updateCalcResults();
          };
          slot.appendChild(rmBtn);
        }
        
        slot.addEventListener('click', () => {
          showCalcItemPicker(i, 'all');
        });
        
        container.appendChild(slot);
    }
  }

  function showCalcItemPicker(globalIdx, category) {
    let items = [];
    if (category === 'all') {
      items = [...wikiData.items.weapon, ...wikiData.items.vitality, ...wikiData.items.spirit];
    } else {
      items = wikiData.items[category];
    }
    
    // Filter out already equipped items (Prevent duplicates)
    items = items.filter(it => !calcState.items.some(equipped => equipped && equipped.id === it.id));
    
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay active';
    overlay.style.zIndex = '200';
    
    const content = document.createElement('div');
    content.className = 'modal-content glass-card';
    content.style.padding = '2rem';
    content.style.maxHeight = '80vh';
    content.style.overflowY = 'auto';
    content.style.maxWidth = '800px';
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'modal-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.onclick = () => overlay.remove();
    content.appendChild(closeBtn);
    
    const title = document.createElement('h3');
    title.textContent = `アイテムを選択`;
    title.style.marginBottom = '1.5rem';
    content.appendChild(title);
    
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(180px, 1fr))';
    grid.style.gap = '1rem';
    
    items.forEach(it => {
      const card = document.createElement('div');
      card.className = 'item-card';
      card.style.cursor = 'pointer';
      card.style.padding = '1rem';
      card.style.minHeight = '120px';
      
      const iconHtml = it.image ? `<img src="${it.image}" alt="">` : '?';
      
      card.innerHTML = `
        <div class="item-card-icon" style="width:40px;height:40px;margin-bottom:0.5rem">${iconHtml}</div>
        <div class="item-card-title" style="font-size:0.9rem">${it.translated || it.original}</div>
      `;
      
      card.onclick = () => {
        calcState.items[globalIdx] = it;
        renderCalcSlots();
        updateCalcResults();
        overlay.remove();
      };
      
      grid.appendChild(card);
    });
    
    content.appendChild(grid);
    overlay.appendChild(content);
    document.body.appendChild(overlay);
    
    overlay.addEventListener('click', (e) => {
      if(e.target === overlay) overlay.remove();
    });
  }

  function renderStatsSection(containerId, statsObj, labels) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    
    for (const [key, val] of Object.entries(statsObj)) {
      if (!labels[key]) continue;
      const row = document.createElement('div');
      row.className = 'stat-row';
      row.innerHTML = `<span class="label">${labels[key]}</span><span class="val">${val}</span>`;
      container.appendChild(row);
    }
  }

  function updateCalcResults() {
    if(!calcState.hero) {
       document.getElementById('res-weapon-stats').innerHTML = '<p style="color: #64748b;">ヒーローを選択</p>';
       document.getElementById('res-vitality-stats').innerHTML = '<p style="color: #64748b;">ヒーローを選択</p>';
       document.getElementById('res-spirit-stats').innerHTML = '<p style="color: #64748b;">ヒーローを選択</p>';
       document.getElementById('res-abilities').innerHTML = '<p style="color: #64748b;">ヒーローを選択してください</p>';
       return;
    }
    
    const res = window.DamageCalculator.calculate(calcState.hero, calcState.items);
    if(!res) return;
    
    const weaponLabels = {
      dps: 'Weapon DPS', bulletDamage: '弾丸ダメージ', fireRate: '発射速度 (RoF)',
      clipSize: '装弾数 (Ammo)', reloadTime: 'リロード時間', bulletSpeed: '弾速'
    };
    renderStatsSection('res-weapon-stats', res.weapon, weaponLabels);

    const vitalityLabels = {
      health: '最大体力 (HP)', moveSpeed: '移動速度', sprintSpeed: 'スプリント',
      stamina: 'スタミナ', bulletResist: '銃弾耐性', spiritResist: 'スピリット耐性', bulletLifesteal: '銃弾吸収(LS)'
    };
    renderStatsSection('res-vitality-stats', res.vitality, vitalityLabels);

    const spiritLabels = {
      spiritPower: 'スピリットパワー', spiritLifesteal: 'スピ吸収(LS)',
      lightMelee: '近接(弱)', heavyMelee: '近接(強)'
    };
    renderStatsSection('res-spirit-stats', res.spirit, spiritLabels);
    
    const abList = document.getElementById('res-abilities');
    abList.innerHTML = '';
    
    res.abilities.forEach(ab => {
      const card = document.createElement('div');
      card.className = 'ability-card';
      card.innerHTML = `
        <div class="ability-card-header">
          <span class="ability-name">${ab.name}</span>
          <span class="ability-dmg">${Math.round(ab.total)}</span>
        </div>
        <div class="ability-meta">
          Base: ${ab.base} / Scaling: ${(ab.scaling*100).toFixed(0)}% Spirit
        </div>
      `;
      abList.appendChild(card);
    });
  }

  if(slotContainers.all) {
    renderCalcSlots();
  }

});

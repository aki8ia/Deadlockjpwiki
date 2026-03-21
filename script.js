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
});

const wikiData = {
    heroes: [
        {
            "id": "hero_atlas",
            "original": "Abrams",
            "translated": "エイブラムス",
            "image": "images/heroes/hero_atlas.png",
            "description": "エイブラムスは優れた体格と耐久力の持ち主だ。敵地の中心に突っ込んでは敵を散り散りにさせ、前線から戦況を有利に運ぶ。敵がエイブラムスに対して無駄撃ちしている隙に、味方の後衛が安全にダメージを出してくれるだろう。",
            "stats": {
                "maxHealth": 810,
                "bulletDamage": 3.6,
                "roundsPerSecond": 1.5873,
                "bulletsPerShot": 9,
                "spiritScaling": 1.1,
                "clipSize": 9,
                "reloadTime": 0.3525,
                "bulletSpeed": 609.6,
                "moveSpeed": 6.4,
                "sprintSpeed": 1.6,
                "stamina": 3,
                "lightMelee": 50,
                "heavyMelee": 116,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Siphon Life",
                    "translated": "サイフォンライフ",
                    "desc": "付近にいる敵からHPを奪って{g:citadel_inline_attribute:'SpiritDPS'}を与え、ダメージ量に応じてHPを{g:citadel_inline_attribute:'Healing'}する / 【T3】範囲 +3m、DPS +18、スピリットスケーリングが上昇する",
                    "scaling": {
                        "base": 22,
                        "spirit": 0.6
                    }
                },
                {
                    "name": "Shoulder Charge",
                    "translated": "ショルダーチャージ",
                    "desc": "前方に突撃し、ヒットした敵を{g:citadel_inline_attribute:'Pulling'}ながら進む。ヒーローを壁に押し込むと{g:citadel_inline_attribute:'Stun'}を付与する突進中にヒーローにぶつかると、移動速度が上昇する / 【T1】3秒間スロウ+40%を付与 / 【T2】壁ヒット時：スタン時間+0.8秒 / 【T3】クールダウン-20秒ヒーロー衝突時：6秒間武器ダメージ+1.5",
                    "scaling": {
                        "base": 30,
                        "spirit": 1.4
                    }
                },
                {
                    "name": "Infernal Resilience",
                    "translated": "ヘル・レジリエンス",
                    "desc": "防御性能が上昇する。受けたダメージ量に応じた{g:citadel_inline_attribute:'Regen'}を一時的に得る / 【T3】デバフ耐性 +20%、被ダメージのリジェネ +8%",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Seismic Impact",
                    "translated": "サイズミック・インパクト",
                    "desc": "空中に高く飛び上がり地面に勢いよく着地して{g:citadel_inline_attribute:'SpiritDamage'}を与え{g:citadel_inline_attribute:'Stun'}を付与する / 【T3】発動時にアンストッパブルになる、衝撃範囲 +6m",
                    "scaling": {
                        "base": 100,
                        "spirit": 2.325
                    }
                }
            ]
        },
        {
            "id": "hero_fencer",
            "original": "Apollo",
            "translated": "アポロ",
            "image": "images/heroes/hero_fencer.png",
            "description": "",
            "stats": {
                "maxHealth": 780,
                "bulletDamage": 18.5,
                "roundsPerSecond": 2.6316,
                "bulletsPerShot": 1,
                "spiritScaling": 1.1,
                "clipSize": 15,
                "reloadTime": 2.5,
                "bulletSpeed": 127,
                "moveSpeed": 7.2,
                "sprintSpeed": 1.6,
                "stamina": 3,
                "lightMelee": 63,
                "heavyMelee": 116,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Disengaging Sigil",
                    "translated": "退避の五芒星",
                    "desc": "五芒星を目の前に描き、後ろへと飛びのく。五芒星は爆発を起こし、ヒットした敵にダメージを与えてスロウを付与する / 【T2】10秒間、発射速度が +20%、弾速が +50% / 【T3】プレイヤーヒット時：スタミナを2回復し、空中ジャンプ／ダッシュの使用可能回数をリセットする",
                    "scaling": {
                        "base": 100,
                        "spirit": 1.3
                    }
                },
                {
                    "name": "Riposte",
                    "translated": "リポスト",
                    "desc": "次の攻撃を受け流す準備をする。受け流しに成功すると、短時間無敵状態となる。その後、前方に素早くダッシュして敵をスタンさせ、その敵の近接攻撃耐性を低下させるトルーパーや中立モンスターのダメージでは発動しない",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Flawless Advance",
                    "translated": "フローレスアドバンス",
                    "desc": "任意の方向に連続で突進し、前方を鋭い突きで攻撃する。アビリティキーを長押しすることで攻撃タイミングを調整でき、溜めが長いほどダメージが上昇する。ベストタイミングで攻撃を解放すると最大ダメージを与える{g:citadel_binding:'Ability3'}で再発動できる / 【T1】ヒーローへのパーフェクトヒット時：30回復 / 【T2】クールダウン -10秒。突進中は+60%の弾薬耐性を獲得する / 【T3】パーフェクトダメージ +65、スピリットスケーリングが上昇する突進攻撃のダッシュの速度と距離が上昇する",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Itani Lo Sahn",
                    "translated": "イタニ・ロー・サーン",
                    "desc": "チャージの後、長距離の斬撃を繰り出す。ヒットした敵は行動や回復ができずスローモーションとなる。この効果が終了した時、ヒットした敵は大ダメージを受ける。HPが半分以下の敵には与えるダメージが上昇するスローモーション中、アポロは無敵状態となり、敵は受けるダメージが低下する{g:citadel_binding:'Ability4'}か{g:citadel_binding:'Attack'}を長押しすることで発動を遅らせることができる / 【T3】IGNORED[]% Max Health Damage",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                }
            ]
        },
        {
            "id": "hero_bebop",
            "original": "Bebop",
            "translated": "ビバップ",
            "image": "images/heroes/hero_bebop.png",
            "description": "ビバップは、アビリティを組み合わせることで様々な戦況に対応が可能だ。敵のポジションをかき乱したり、一気に大ダメージを与えたり……細かい戦略が求められない場面であっても、ビバップの巨大ビームがあれば万事解決だ。",
            "stats": {
                "maxHealth": 890,
                "bulletDamage": 4.98,
                "roundsPerSecond": 11.905,
                "bulletsPerShot": 1,
                "spiritScaling": 1.1,
                "clipSize": 66,
                "reloadTime": 2.35,
                "bulletSpeed": 508,
                "moveSpeed": 6.45,
                "sprintSpeed": 4,
                "stamina": 3,
                "lightMelee": 63,
                "heavyMelee": 116,
                "bulletResist": 0.3,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Exploding Uppercut",
                    "translated": "ブラストアッパーカット",
                    "desc": "付近の敵に{g:citadel_inline_attribute:'MeleeDamage'}を与えて{g:citadel_inline_attribute:'KnockBack'}する敵が着地すると、{g:citadel_inline_attribute:'SpiritDamage'}を与え、周辺の他の敵に{g:citadel_inline_attribute:'ReducedFireRate'}を付与するブラストアッパーカットは味方にも使用可能 / 【T2】ヒーローヒット時：武器のチャージ時間短縮、2倍の武器射程、武器ダメージ +40%を9秒間獲得する / 【T3】ヒーローヒット時：グラップルアームのクールダウンを0にし、減少HPの+17%を回復する",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Sticky Bomb",
                    "translated": "スティッキーボム",
                    "desc": "ディレイ後に起爆するボムを取り付ける。ボムは爆発すると付近の敵に{g:citadel_inline_attribute:'SpiritDamage'}を与えるヒーローに命中するかキルするたび、スティッキーボムが永続的な追加ダメージを得るスタックは60ヒットおよび7キルすると半減する / 【T3】発動時：5秒間、移動速度+5m／秒、発射速度 +20%",
                    "scaling": {
                        "base": 85,
                        "spirit": 1.5
                    }
                },
                {
                    "name": "Grapple Arm",
                    "translated": "グラップルアーム",
                    "desc": "メカニカルハンドを発射し、最初に命中したキャラクターをつかんで{g:citadel_inline_attribute:'Pulls'}るグラップルアームは味方にも使用可能 / 【T1】6秒間、対象に与える武器ダメージが +20%",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Hyper Beam",
                    "translated": "ハイパービーム",
                    "desc": "{g:citadel_inline_attribute:'SpiritDamage'}を与えて{g:citadel_inline_attribute:'Slow'}状態にする強力なエネルギーの奔流を放つ / 【T3】ハイパービームでヒーローに与えたダメージの 65%をBebopが回復する。非ヒーロー時は回復量が 20%になる",
                    "scaling": {
                        "base": 160,
                        "spirit": 2.511
                    }
                }
            ]
        },
        {
            "id": "hero_punkgoat",
            "original": "Billy",
            "translated": "ビリー",
            "image": "images/heroes/hero_punkgoat.png",
            "description": "",
            "stats": {
                "maxHealth": 830,
                "bulletDamage": 6.3,
                "roundsPerSecond": 11.765,
                "bulletsPerShot": 1,
                "spiritScaling": 1.1,
                "clipSize": 30,
                "reloadTime": 2.9,
                "bulletSpeed": 513.1,
                "moveSpeed": 7,
                "sprintSpeed": 1.6,
                "stamina": 3,
                "lightMelee": 50,
                "heavyMelee": 116,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Bashdown",
                    "translated": "バッシュダウン",
                    "desc": "バットを地面に叩きつけ、敵を{g:citadel_inline_attribute:'Pulling'}て、{g:citadel_inline_attribute:'MeleeDamage'}を与える叩きつけ時には衝撃波が生じ、敵に{g:citadel_inline_attribute:'SpiritDamage'}を与えて{g:citadel_inline_attribute:'KnockUp'}する / 【T1】クールダウン -10秒 / 【T2】チャージ +1、範囲 +2m / 【T3】チャージ時間 -2秒60%の近接強攻撃ダメージを与えるようになる",
                    "scaling": {
                        "base": 35,
                        "spirit": 1.1
                    }
                },
                {
                    "name": "Rising Ram",
                    "translated": "ライジング・ラム",
                    "desc": "敵に頭から突進して、敵と一緒にビリー自身も空に打ち上げるヒット時にクールダウンが50%短縮される / 【T1】ヒット時：5秒間、{g:citadel_inline_attribute:'WeaponDamage'} +25% / 【T3】ヒット時：最大HPの8% を{g:citadel_inline_attribute:'SpiritDamage'}として与える",
                    "scaling": {
                        "base": 40,
                        "spirit": 1.9
                    }
                },
                {
                    "name": "Blasted",
                    "translated": "ブラスト",
                    "desc": "パッシブ：近接攻撃が命中すると弾薬を回復し、対象にレックド状態を7秒間付与する / 【T1】ブラスト状態中： {g:citadel_inline_attribute:'BonusMoveSpeed'} +2.25m/秒 / 【T2】使用時にバッシュダウンのチャージ回数 +1、レックド状態の敵への弾薬ダメージ増幅 +7% / 【T3】近接攻撃時のHP増加 +50、スピリットスケーリングが上昇する",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Chain Gang",
                    "translated": "チェーンギャング",
                    "desc": "付近の敵を鎖で自身につなぐ。鎖で拘束された敵は移動アビリティを使用できず、鎖を引こうとすると強力な{g:citadel_inline_attribute:'Slow'}を受けるディレイ後に、全ての敵をビリーの元に引き寄せ、{g:citadel_inline_attribute:'SpiritDamage'}を与える射線が短時間途切れると鎖は切れる / 【T1】+40% {g:citadel_inline_attribute:'SpiritResist'} & {g:citadel_inline_attribute:'BulletResist'} / 【T3】範囲 +5m引き寄せたヒーローにつき+1.3秒のアンストッパブル状態を獲得する",
                    "scaling": {
                        "base": 120,
                        "spirit": 1
                    }
                }
            ]
        },
        {
            "id": "hero_nano",
            "original": "Calico",
            "translated": "キャリコ",
            "image": "images/heroes/hero_nano.png",
            "description": "キャリコは影を巧みに利用することで戦線に出入りしながら、敵を1人また1人と順番に仕留める。",
            "stats": {
                "maxHealth": 740,
                "bulletDamage": 1.84,
                "roundsPerSecond": 4.7619,
                "bulletsPerShot": 9,
                "spiritScaling": 1.1,
                "clipSize": 12,
                "reloadTime": 2.6,
                "bulletSpeed": 317.5,
                "moveSpeed": 6.8,
                "sprintSpeed": 1.6,
                "stamina": 3,
                "lightMelee": 63,
                "heavyMelee": 116,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Gloom Bombs",
                    "translated": "グルームボム",
                    "desc": "爆弾を複数投げる。爆弾はディレイ後に起爆し、{g:citadel_inline_attribute:'SpiritDamage'}を与える複数の爆弾がヒットした敵は受けるダメージが 65%に低下する / 【T2】爆弾がバリアに対して +75ダメージを与える",
                    "scaling": {
                        "base": 45,
                        "spirit": 0.644
                    }
                },
                {
                    "name": "Leaping Slash",
                    "translated": "リーピングスラッシュ",
                    "desc": "前方にダッシュした後、円形範囲内にいるすべての敵を斬りつけて{g:citadel_inline_attribute:'MeleeDamage'}を与えるこのアビリティが1人以上のヒーローにヒットすると、HPを少しだけ{g:citadel_inline_attribute:'Heal'}する / 【T2】3秒以内にヒーローをキルすると、+200ソウルを獲得する / 【T3】ダメージ+60、ヒーローヒット時：クールダウン回復50%",
                    "scaling": {
                        "base": 40,
                        "spirit": 1.4
                    }
                },
                {
                    "name": "Ava",
                    "translated": "アヴァ",
                    "desc": "影と化してアヴァに憑依する。時間経過で増加する{g:citadel_inline_attribute:'BonusMoveSpeed'}を獲得し、ミニマップ上に表示されなくなる敵ヒーローからダメージを受けると移動速度ボーナスがリセットされ、アヴァが短時間のクールダウン状態になる / 【T2】HPリジェネ+15、最大移動速度 +45% / 【T3】時間経過でダメージ増幅を獲得し、最大20%まで増加する。効果は6秒間持続する",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Return to Shadows",
                    "translated": "シャドウバースト",
                    "desc": "瞬時に影へと姿を変えて対象指定不可状態になり、{g:citadel_inline_attribute:'BonusMoveSpeed'}を得て{g:citadel_inline_attribute:'SpiritDamage'}を与えるディレイの後、影から戻って再び{g:citadel_inline_attribute:'SpiritDamage'}を与える / 【T2】ダメージ +65、移動速度 +20% / 【T3】終了時：350回復し、すべてのアビリティのクールダウンを回復する",
                    "scaling": {
                        "base": 140,
                        "spirit": 0.609336
                    }
                }
            ]
        },
        {
            "id": "hero_unicorn",
            "original": "Celeste",
            "translated": "セレステ",
            "image": "images/heroes/hero_unicorn.png",
            "description": "",
            "stats": {
                "maxHealth": 790,
                "bulletDamage": 22,
                "roundsPerSecond": 1.6667,
                "bulletsPerShot": 1,
                "spiritScaling": 1.1,
                "clipSize": 8,
                "reloadTime": 2,
                "bulletSpeed": 50,
                "moveSpeed": 6.2,
                "sprintSpeed": 1.6,
                "stamina": 4,
                "lightMelee": 50,
                "heavyMelee": 116,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Light Eater",
                    "translated": "ライトイーター",
                    "desc": "前方の扇形範囲にいる敵を閃光で攻撃する。ヒットした敵は、Celesteの武器で攻撃されると{g:citadel_inline_attribute:'SpiritDamage'}を受け、スピリットライフスティールが発生する / 【T2】クールダウン -10秒、キャスト範囲 +3m / 【T3】ダメージ +25、スピリットスケーリングが上昇する",
                    "scaling": {
                        "base": 20,
                        "spirit": 0.28
                    }
                },
                {
                    "name": "Dazzling Trick",
                    "translated": "ダズリングトリック",
                    "desc": "自らの体をプリズムのバリアで包む。バリアが破壊されると、付近の敵をサイレンス状態にし、バリアの一部をダメージとして与える / 【T2】バリア +100、バリアのスピリットスケーリングが上昇する / 【T3】サイレンス継続時間 +1.5秒、クールダウン -18秒。シャイニングワンダーの跳ね返り対象になる",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Radiant Daggers",
                    "translated": "レディアントダガー",
                    "desc": "空から降り注ぐ光のビームを呼び寄せる。短いディレイの後、ビームが完全に形成され、範囲内にいるすべての対象に{g:citadel_inline_attribute:'SpiritDamage'}を与える爆発を発生させるこのアビリティが敵ヒーローにヒットするたび、スピリットダメージを上昇させるバフのスタックをセレステが獲得する / 【T2】クールダウン -18秒、着弾ダメージ +70",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Shining Wonder",
                    "translated": "シャイニングワンダー",
                    "desc": "{g:citadel_inline_attribute:'SpiritDamage'}を与える光のオーブを発射する。光のオーブは着弾時に{g:citadel_inline_attribute:'Slow'}を付与し、ダッシュ距離を減少させる。その後オーブは範囲内の敵に跳ね返る。対象がいない場合、オーブは短時間その場に留まり、対象を探し続ける対象が複数いる場合、敵ヒーローが優先される / 【T1】移動速度 -20%、ダッシュ距離 -15% / 【T3】最大バウンド回数 +8、クールダウン -35秒",
                    "scaling": {
                        "base": 105,
                        "spirit": 0.63
                    }
                }
            ]
        },
        {
            "id": "hero_drifter",
            "original": "Drifter",
            "translated": "ドリフター",
            "image": "images/heroes/hero_drifter.png",
            "description": "",
            "stats": {
                "maxHealth": 765,
                "bulletDamage": 19.5,
                "roundsPerSecond": 2.2676,
                "bulletsPerShot": 3,
                "spiritScaling": 1.1,
                "clipSize": 12,
                "reloadTime": 2.444,
                "bulletSpeed": 508,
                "moveSpeed": 6.9,
                "sprintSpeed": 1.6,
                "stamina": 3,
                "lightMelee": 51.5,
                "heavyMelee": 120,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Rend",
                    "translated": "クロー",
                    "desc": "前方の扇形範囲を攻撃し、範囲内の敵に{g:citadel_inline_attribute:'SpiritDamage'}を与える。敵が至近距離内にいる場合、{g:citadel_inline_attribute:'MeleeDamage'}を追加で与える / 【T2】クールダウン -7秒 / 【T3】至近距離内にいる敵を2.3秒間サイレンス状態にする",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Stalker's Mark",
                    "translated": "追跡者の刻印",
                    "desc": "最初にヒットした対象を出血させ、{g:citadel_inline_attribute:'SpiritDPS'}を与えるマークを放つ敵が出血している間に追跡者の刻印を再発動すると、その敵の背後に瞬間移動できる / 【T1】弾薬耐性 -8% / 【T2】クールダウン -8秒、継続時間 +3秒 / 【T3】出血ダメージ +2%、回復阻害 -40%",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Bloodscent",
                    "translated": "血への嗅覚",
                    "desc": "When enemy heroes are low on health you deal amplified damage against them. These enemies leave a lingering blood trail as they move. / 【T1】孤立状態の敵ヒーロー付近にいる間、移動速度 +2m／秒 / 【T2】孤立ヒーローデス時：減少HPの18%を回復し、スタミナを2回復する",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Eternal Night",
                    "translated": "エターナルナイト",
                    "desc": "付近の敵ヒーローを闇で包み込み、視界を大幅に制限する。効果を受けた敵は短い間マップ上に表示され、継続時間中は孤立状態とみなされる{g:citadel_inline_attribute:'BonusSprintSpeed'}を獲得する / 【T3】継続時間 +2.5秒、最大対象数 +1",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                }
            ]
        },
        {
            "id": "hero_dynamo",
            "original": "Dynamo",
            "translated": "ダイナモ",
            "image": "images/heroes/hero_dynamo.png",
            "description": "ダイナモは、自身と仲間のHPを維持することに長けている。そしてその時が訪れると、味方と息を合わせてシンギュラリティを発動し、戦いの流れを一変させる。",
            "stats": {
                "maxHealth": 890,
                "bulletDamage": 12.6,
                "roundsPerSecond": 3.8095,
                "bulletsPerShot": 1,
                "spiritScaling": 1.1,
                "clipSize": 20,
                "reloadTime": 2.35,
                "bulletSpeed": 320,
                "moveSpeed": 6.7,
                "sprintSpeed": 1.6,
                "stamina": 3,
                "lightMelee": 50,
                "heavyMelee": 116,
                "bulletResist": 0.625,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Kinetic Pulse",
                    "translated": "ストンプパルス",
                    "desc": "地面を走るパルスを放ち、{g:citadel_inline_attribute:'SpiritDamage'}を与えて敵を{g:citadel_inline_attribute:'KnockUp'}する / 【T1】チャージ+1 / 【T2】ヒット時：弾薬耐性-18%、4秒間移動速度-30% / 【T3】ダメージ +135、キャスト範囲+20m",
                    "scaling": {
                        "base": 115,
                        "spirit": 1.8
                    }
                },
                {
                    "name": "Quantum Entanglement",
                    "translated": "クアンタムブリンク",
                    "desc": "一時的に対象指定不可となり、指定地点にテレポートする。発動時にスタミナを回復する{g:citadel_binding:'AltCast'}：周辺の味方を同行させる / 【T3】アルティメットを除くデバフを解除するチャージアビリティのチャージを1回分回復する",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Rejuvenating Aurora",
                    "translated": "リジュビネ・オーロラ",
                    "desc": "詠唱中、自身と近くにいる味方のHPを継続回復する詠唱中もダッシュや近接攻撃が可能 / 【T1】詠唱中、オーラが移動速度+4m／秒を付与する / 【T2】クールダウン -20秒、継続時間 +1秒 / 【T3】移動やアビリティ使用が自由にできるようになり、最大HPの +2.5% を追加で毎秒回復する",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Singularity",
                    "translated": "シンギュラリティ",
                    "desc": "特異点を生み出し、{g:citadel_inline_attribute:'SpiritDPS'}を与えて{g:citadel_inline_attribute:'Stun'}を付与し、付近の敵を引き寄せる",
                    "scaling": {
                        "base": 75,
                        "spirit": 0.28
                    }
                }
            ]
        },
        {
            "id": "hero_necro",
            "original": "Graves",
            "translated": "グレイブス",
            "image": "images/heroes/hero_necro.png",
            "description": "",
            "stats": {
                "maxHealth": 740,
                "bulletDamage": 4,
                "roundsPerSecond": 9.8039,
                "bulletsPerShot": 1,
                "spiritScaling": 1.1,
                "clipSize": 40,
                "reloadTime": 2.8,
                "bulletSpeed": 635,
                "moveSpeed": 7,
                "sprintSpeed": 1.6,
                "stamina": 2,
                "lightMelee": 50,
                "heavyMelee": 116,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Jar of Dead",
                    "translated": "死者の魔瓶",
                    "desc": "パッシブ：付近で何かがデスすると、死者の魔瓶に死を収集するアクティブ：魔瓶を投げてデッドヘッドを召喚する。デッドヘッドは敵に繰り返し{g:citadel_inline_attribute:'SpiritDamage'}を与える付近に敵がいない場合、デッドヘッドはプレイヤーを追従し、武器の攻撃対象を優先する / 【T1】死を収集するたびにHPを5回復する / 【T2】継続時間 +4秒ヒット時：30%のスロウを1秒間付与 / 【T3】デッドヘッドの数 +2。デッドヘッドが生気吸収を発動するようになる",
                    "scaling": {
                        "base": 20,
                        "spirit": 0.35
                    }
                },
                {
                    "name": "Grasping Hands",
                    "translated": "グラスプハンド",
                    "desc": "死者の手による壁を生成する。壁は{g:citadel_inline_attribute:'SpiritDamage'}を与え、通ろうとした敵を{g:citadel_inline_attribute:'Immobilize'}状態にするオルトキャスト {g:citadel_binding:'AltCast'} で壁の方向を回転できる / 【T2】ダメージ +90、壁の長さ +10m / 【T3】1体のグールを召喚するクールダウン-10秒移動不能継続時間+1秒",
                    "scaling": {
                        "base": 90,
                        "spirit": 1.6
                    }
                },
                {
                    "name": "Essence Theft",
                    "translated": "生気吸収",
                    "desc": "対象ごとに最大値まで、武器による攻撃が{g:citadel_inline_attribute:'WeaponDamage'}と{g:citadel_inline_attribute:'SpiritResist'}を敵から継続的に吸収し続ける / 【T3】武器のテザー +1本、テザーの追尾性能が向上する",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Borrowed Decree",
                    "translated": "屍鬼累々",
                    "desc": "【T2】グール移動速度 +25%、継続時間 +10秒 / 【T3】デス時：現在HPの+6%分のダメージを与える",
                    "scaling": {
                        "base": 135,
                        "spirit": 1.5
                    }
                }
            ]
        },
        {
            "id": "hero_orion",
            "original": "Grey Talon",
            "translated": "グレイタロン",
            "image": "images/heroes/hero_orion.png",
            "description": "グレイタロンは狡猾な狩人だ。異常なまでの命中率を誇る弓矢や罠、そして巧妙なポジショニングを組み合わせることで、どんなに強い敵でも圧倒してしまう。",
            "stats": {
                "maxHealth": 790,
                "bulletDamage": 23.51,
                "roundsPerSecond": 1.7316,
                "bulletsPerShot": 1,
                "spiritScaling": 1.1,
                "clipSize": 17,
                "reloadTime": 2.35,
                "bulletSpeed": 495.3,
                "moveSpeed": 6.3,
                "sprintSpeed": 1.6,
                "stamina": 4,
                "lightMelee": 50,
                "heavyMelee": 116,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Charged Shot",
                    "translated": "チャージショット",
                    "desc": "敵を貫通する強力なショットをチャージする。{g:citadel_binding:'Ability1'}か{g:citadel_binding:'Attack'}長押しでショットを溜めることができる / 【T2】ダメージ +54 / 【T3】ダメージスケールが増加し、アビリティチャージ時間が -3秒",
                    "scaling": {
                        "base": 80,
                        "spirit": 1
                    }
                },
                {
                    "name": "Rain of Arrows",
                    "translated": "レインアロー",
                    "desc": "空中に高くジャンプして、ゆっくり滑空する。滑空中は武器ダメージが上昇し、武器がマルチショットになる{g:citadel_binding:'AltCast'}でジャンプの高さを抑えられる{g:citadel_binding:'Mantle'}で滑空をキャンセル可能 / 【T2】滑空中の武器ダメージ +5、滑空中に武器ダメージを与えると 40%のスロウを 1.5秒間付与する / 【T3】滑空中、弾薬ライフスティール +30%、スピリットライフスティール +30%、弾薬回避 +30%",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Spirit Snare",
                    "translated": "スピリットスネア",
                    "desc": "短いディレイの後に起動準備が完了する罠を設置する。範囲内に敵が入ると罠が発動し、カース状態とスロウ状態を付与する。また、行動を中断させ、サイレンス状態とディスアーム状態を付与し、アイテムを使用できなくするチャージショットで罠を撃つと、範囲を拡大させて即座に起動できる / 【T2】--15%弾薬耐性を10秒間付与 / 【T3】カース継続時間 +1秒、範囲 +1.5m",
                    "scaling": {
                        "base": 25,
                        "spirit": 0
                    }
                },
                {
                    "name": "Guided Owl",
                    "translated": "ガイドアウル",
                    "desc": "1.5秒の詠唱後、操作可能なフクロウの精霊を放つ。フクロウは着弾時に爆発し、敵にダメージを与えてスタンを付与する。 {g:citadel_binding:'MoveForward'}長押しでフクロウを加速可能{g:citadel_binding:'Mantle'}で操作を解除する。ガイドアウルで敵をキルするたびに永続的なスピリットパワーを獲得する / 【T3】ヒット後、HPが 22%を下回る敵をキルする",
                    "scaling": {
                        "base": 230,
                        "spirit": 0.93744
                    }
                }
            ]
        },
        {
            "id": "hero_haze",
            "original": "Haze",
            "translated": "ヘイズ",
            "image": "images/heroes/hero_haze.png",
            "description": "1人の敵に集中できる状況であれば、銃撃戦においてヘイズの右に出る者はいない。ワンサイドゲームを好む彼女はダメージを回避しながら、油断している敵の不意をついてとどめを刺す。",
            "stats": {
                "maxHealth": 740,
                "bulletDamage": 5.26,
                "roundsPerSecond": 9.5238,
                "bulletsPerShot": 1,
                "spiritScaling": 0.5,
                "clipSize": 25,
                "reloadTime": 2.35,
                "bulletSpeed": 762,
                "moveSpeed": 8.2,
                "sprintSpeed": 1.6,
                "stamina": 3,
                "lightMelee": 50,
                "heavyMelee": 116,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Sleep Dagger",
                    "translated": "スリープダガー",
                    "desc": "対象にダメージを与え、睡眠状態を付与するダガーを投げる。睡眠状態の対象はダメージを受けると目を覚ます。ダガーを投げても自身のインビジブル状態は解除されない。スリープダガーは敵の詠唱アビリティを中断しない / 【T1】覚醒時に6秒間、弾薬耐性低下 -8% / 【T2】クールダウン -15秒 / 【T3】睡眠継続時間+0.75秒覚醒時に2.5秒間移動速度とダッシュ速度-50%",
                    "scaling": {
                        "base": 65,
                        "spirit": 2.6
                    }
                },
                {
                    "name": "Smoke Bomb",
                    "translated": "スモークボム",
                    "desc": "視界から消えてインビジブル状態になり、スプリント速度を獲得する。攻撃するとインビジブルが解除されるが、アイテム使用では解除されない。付近の敵はインビジブル状態を無視して姿を視認できる / 【T1】{s:AbilityCooldown}s Ability Cooldown / 【T2】アビリティチャージを 2回獲得 / 【T3】アルティメットを除くデバフを解除する5秒間、 +30%の弾薬ライフスティールを獲得する",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Fixation",
                    "translated": "フィクセーション",
                    "desc": "対象を撃つとその対象への弾薬ダメージが増加する。1発ヒットするたびに1スタック獲得し、ヘッドショットの場合は2スタック獲得する / 【T1】20スタックごとに40スピリットダメージを与え、15%のスロウを2秒間付与する / 【T2】最大スタック +40、継続時間 +5秒",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Bullet Dance",
                    "translated": "バレットダンス",
                    "desc": "弾薬の雨をまき散らして周囲の敵に完璧な精度で武器を発射し、弾薬ダメージを追加で与える / 【T2】発射速度+10%クールダウン-45秒 / 【T3】追加対象+1バレットダンス移動速度 +3m／秒",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                }
            ]
        },
        {
            "id": "hero_astro",
            "original": "Holliday",
            "translated": "ホリデイ",
            "image": "images/heroes/hero_astro.png",
            "description": "空中に飛び上がった的を撃ち抜くガンマンとしての技術はホリデイの生命線。正確なエイムがあれば、大ダメージを与えられるだろう。敵を孤立させたり、素早く撤退したりと、有能な移動スキルもそろっている。",
            "stats": {
                "maxHealth": 790,
                "bulletDamage": 18.8,
                "roundsPerSecond": 2.1164,
                "bulletsPerShot": 1,
                "spiritScaling": 1.1,
                "clipSize": 10,
                "reloadTime": 2.75,
                "bulletSpeed": 635,
                "moveSpeed": 8.2,
                "sprintSpeed": 1.6,
                "stamina": 2,
                "lightMelee": 50,
                "heavyMelee": 116,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Powder Keg",
                    "translated": "パウダーケグ",
                    "desc": "ディレイ後に爆発するバレルを投げる。爆発したバレルは{g:citadel_inline_attribute:'SpiritDamage'}を与え、敵を{g:citadel_inline_attribute:'KnockUp'}するバレルは射撃、近接攻撃、射出または他のバレルによる爆発により早めに起爆できる / 【T3】ノックアップ +0.4秒、チャージ +2",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Bounce Pad",
                    "translated": "バウンスパッド",
                    "desc": "バウンスパッドを設置し、任意のヒーローに放つ着地時に爆発し、付近の敵にダメージを与える爆発は各バウンスパッドごとに1人につき1回のみ発生する / 【T1】クールダウン -10秒 / 【T2】自身と味方は着地時に +4m／秒の移動速度ボーナスを 4秒間獲得する / 【T3】着地ダメージ +67.5、スピリットスケーリングが上昇する",
                    "scaling": {
                        "base": 60,
                        "spirit": 0.372
                    }
                },
                {
                    "name": "Crackshot",
                    "translated": "クラックショット",
                    "desc": "ヘッドショットで追加の ダメージを与え、 徐々に減衰する移動速度ペナルティを付与する。この効果はクールダウン時には発生しないNPCヒット時はクールダウンが 50%短縮するクラックショットはダメージ距離減衰の影響を受けず、オブジェクトには適用されない / 【T1】減衰する移動速度-25% / 【T3】ヒーローヘッドショット時にクールダウン -6秒。 NPCヘッドショット時は -3秒",
                    "scaling": {
                        "base": 55,
                        "spirit": 1.116
                    }
                },
                {
                    "name": "Spirit Lasso",
                    "translated": "スピリットラッソ",
                    "desc": "ヒットした敵に{g:citadel_inline_attribute:'SpiritDamage'}を与えて近くまで{g:citadel_inline_attribute:'Pulling'}、{g:citadel_inline_attribute:'Stun'}を付与する投げ縄を投げるバウンスパッドを使うとスピリットラッソの継続時間が長くなる",
                    "scaling": {
                        "base": 80,
                        "spirit": 0.93
                    }
                }
            ]
        },
        {
            "id": "hero_inferno",
            "original": "Infernus",
            "translated": "インファーナス",
            "image": "images/heroes/hero_inferno.png",
            "description": "継続ダメージを与える手段が豊富なインファーナスは、敵を燃え上がらせて体力を削り、接近してとどめを刺す。それに加えて足も速い――燃え盛る炎から逃げることはできないのだ。",
            "stats": {
                "maxHealth": 840,
                "bulletDamage": 5.5,
                "roundsPerSecond": 9.5238,
                "bulletsPerShot": 1,
                "spiritScaling": 1.1,
                "clipSize": 27,
                "reloadTime": 2.25,
                "bulletSpeed": 660.4,
                "moveSpeed": 6.7,
                "sprintSpeed": 1.6,
                "stamina": 3,
                "lightMelee": 50,
                "heavyMelee": 116,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Napalm",
                    "translated": "ナパーム",
                    "desc": "可燃性の高い混合物を噴射する。{g:citadel_inline_attribute:'SpiritDamage'}を与えて{g:citadel_inline_attribute:'Slow'}を付与し、対象をナパームで覆う / 【T2】ナパームの効果：ライフスティール+15% / 【T3】ナパームの効果：被ダメージ +17%、敵の回復-33%",
                    "scaling": {
                        "base": 40,
                        "spirit": 0.6
                    }
                },
                {
                    "name": "Flame Dash",
                    "translated": "フレイムダッシュ",
                    "desc": "{g:citadel_inline_attribute:'SlowResistance'}を得ながら前方にダッシュし、{g:citadel_inline_attribute:'SpiritDPS'}を与える炎の道を残す発動中に{g:citadel_binding:'MoveForward'}を長押しするとより遠くまでダッシュできる / 【T2】炎の道の継続時間 +1秒、DPS +20 / 【T3】リチャージ時間が14秒のチャージを2個獲得する",
                    "scaling": {
                        "base": 30,
                        "spirit": 1
                    }
                },
                {
                    "name": "Afterburn",
                    "translated": "アフターバーン",
                    "desc": "武器によってデバフが蓄積し、燃焼効果を付与する。燃焼効果は{g:citadel_inline_attribute:'SpiritDPS'}を与えるアビリティによって燃焼効果の基礎継続時間が更新される / 【T2】燃焼効果：スピリットダメージ -35% / 【T3】燃焼 最大継続時間 +3秒間",
                    "scaling": {
                        "base": 14,
                        "spirit": 0.66
                    }
                },
                {
                    "name": "Concussive Combustion",
                    "translated": "スタンバースト",
                    "desc": "人間爆弾となって{g:citadel_inline_attribute:'SpiritDamage'}を与え、ディレイの後に付近の敵すべてを{g:citadel_inline_attribute:'Stun'}にするスタンバーストは一度発動すると中断できない / 【T2】クールダウン -75秒、爆発ライフスティール+100% / 【T3】スタン継続時間 +0.75秒、範囲 +10m",
                    "scaling": {
                        "base": 125,
                        "spirit": 0.974938
                    }
                }
            ]
        },
        {
            "id": "hero_tengu",
            "original": "Ivy",
            "translated": "アイビー",
            "image": "images/heroes/hero_tengu.png",
            "description": "スロウやスタンなど、敵を妨害する能力を数多く有しているアイビーだが、真に恐ろしいのは味方との連携能力だ。自分と味方の武器を強化し、回復を共有することで戦闘を有利に進めることができる。",
            "stats": {
                "maxHealth": 765,
                "bulletDamage": 4.45,
                "roundsPerSecond": 13.605,
                "bulletsPerShot": 1,
                "spiritScaling": 1.2,
                "clipSize": 33,
                "reloadTime": 2.444,
                "bulletSpeed": 571.5,
                "moveSpeed": 7.2,
                "sprintSpeed": 1.6,
                "stamina": 4,
                "lightMelee": 50,
                "heavyMelee": 116,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Entangling Thorns",
                    "translated": "絡みつくイバラ",
                    "desc": "敵を窒息させてダメージを与え、スロウを付与するイバラを指定した範囲に召喚する / 【T2】範囲 +2m、DPSのスピリットスケーリングが上昇する / 【T3】イバラ内に2秒間滞在し続けた敵は、+1.6秒間移動不能状態になる",
                    "scaling": {
                        "base": 40,
                        "spirit": 0.45
                    }
                },
                {
                    "name": "Kudzu Connection",
                    "translated": "イバラの絆",
                    "desc": "付近にいる味方と線をつなげてバフを獲得する。回復の一部を共有し、射撃時の移動速度ペナルティを受けなくなるつながっていない場合は50％のボーナスを得る射線が切れると線が切れる / 【T2】発射速度 +8%、弾薬ライフスティール +8% / 【T3】アビリティが常にアクティブになる",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Stone Form",
                    "translated": "ストーンフォーム",
                    "desc": "無敵の石像に変身して地面に急降下し、付近にいる敵をスタン状態にしてダメージを与える。最大HPの一定割合分回復する / 【T3】スタン継続時間 +1秒間、ダメージのスピリットスケーリングが上昇する",
                    "scaling": {
                        "base": 75,
                        "spirit": 0.6
                    }
                },
                {
                    "name": "Air Drop",
                    "translated": "エアドロップ",
                    "desc": "味方をつかみ共に飛行する。味方を落とすと{g:citadel_inline_attribute:'SpiritDamage'}を与える爆発を発生させる。飛行終了時に自分と味方は、与えるダメージが上昇するバフを獲得する味方に使用した場合はクールダウンが25%短縮されるダメージを受けると、短時間アビリティを使用できなくなる飛行中、味方は射撃できず、与えるダメージが-20%になる / 【T1】飛行終了時：Ivyと味方が300のバリアを獲得、このバリアはスピリットでスケールする / 【T2】ヒットした敵に3秒間、+40%のスロウを付与 / 【T3】ヒットした敵に3秒間、サイレンスを付与ダメージとバリアのスケーリングが上昇する",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                }
            ]
        },
        {
            "id": "hero_kelvin",
            "original": "Kelvin",
            "translated": "ケルビン",
            "image": "images/heroes/hero_kelvin.png",
            "description": "決定的な勝敗の分かれ目となるのは、適切なタイミングの回復と集団戦の分断だ。敵の動きを鈍らせながら戦場を駆け巡ることで、ケルビンはそのような状況を容易に作り出すことができるだろう。",
            "stats": {
                "maxHealth": 890,
                "bulletDamage": 18.6,
                "roundsPerSecond": 3.8095,
                "bulletsPerShot": 1,
                "spiritScaling": 1.3,
                "clipSize": 14,
                "reloadTime": 2.585,
                "bulletSpeed": 160,
                "moveSpeed": 6.7,
                "sprintSpeed": 1.1,
                "stamina": 3,
                "lightMelee": 50,
                "heavyMelee": 116,
                "bulletResist": 0,
                "spiritResist": 0.625
            },
            "abilities": [
                {
                    "name": "Frost Grenade",
                    "translated": "フロストグレネード",
                    "desc": "爆発時に大量の氷を噴出するグレネードを投げる。この氷は味方を{g:citadel_inline_attribute:'Heals'}し、敵には{g:citadel_inline_attribute:'SpiritDamage'}を与えて移動速度低下を付与する / 【T1】ダメージ +30、回復量+30 / 【T2】クールダウン-10秒、デバフがスタミナリジェネを停止させる / 【T3】範囲+2m、ダメージと回復のスピリットスケーリングが上昇する",
                    "scaling": {
                        "base": 60,
                        "spirit": 0.7
                    }
                },
                {
                    "name": "Ice Path",
                    "translated": "アイスパス",
                    "desc": "Kelvinが氷雪でできた道を空中に作る。道は自身と味方に移動速度ボーナスを付与する。この間、ケルビンはスロウ耐性を60% 獲得。この道は敵も使用可能アイスパス作成中に {g:citadel_binding:'Roll'} ／ {g:citadel_binding:'Crouch'}を押すと上下に操作可能 / 【T1】アイスパス上にいるKelvinが移動速度+2m／秒、弾薬耐性+35% / 【T3】アイスパス上にいるKelvinのスピリット+35%、スピリット+20",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Arctic Beam",
                    "translated": "アークティックビーム",
                    "desc": "前方に冷気エネルギーを放ち、対象にダメージを与える。ビームをヒットさせる時間に応じて対象の移動速度と発射速度を徐々に低下させる。アークティックビーム発動中は自身の移動速度が低下する。また、ビームはソウルを回収できる / 【T1】発射速度と移動速度-25% / 【T2】DPS+20、スピリットスケーリングが上昇する / 【T3】クールダウン-13秒、最後にヒットした対象から10m以内に追加のアークティックビームを2本放つ",
                    "scaling": {
                        "base": 45,
                        "spirit": 0.5
                    }
                },
                {
                    "name": "Frozen Shelter",
                    "translated": "フローズンシェルター",
                    "desc": "自身またはヒーローを対象に、空気を凍らせてその周囲に侵入不可能なドームを作る。ドーム内では味方は高速の{g:citadel_inline_attribute:'Regen'}を獲得し、敵はスロウ状態になるフローズンシェルター内ではオブジェクトが無敵状態となり、凍結する / 【T3】自身と味方の非アルティメットのデバフを解除するHPリジェネ +65、HPリジェネがスピリットでスケールするようになる",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                }
            ]
        },
        {
            "id": "hero_ghost",
            "original": "Lady Geist",
            "translated": "レディガイスト",
            "image": "images/heroes/hero_ghost.png",
            "description": "自身のHPを消費することで獲得できる強力な効果、それがレディガイストの強さの源だ。HPが少なくなっても問題はない――敵のHPを吸収してしまえばいいのだから。",
            "stats": {
                "maxHealth": 890,
                "bulletDamage": 21.94,
                "roundsPerSecond": 2.1164,
                "bulletsPerShot": 1,
                "spiritScaling": 1.1,
                "clipSize": 9,
                "reloadTime": 2.585,
                "bulletSpeed": 828,
                "moveSpeed": 6.3,
                "sprintSpeed": 2.4,
                "stamina": 3,
                "lightMelee": 50,
                "heavyMelee": 116,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Essence Bomb",
                    "translated": "エッセンスボム",
                    "desc": "自身のHPを消費し、短い起爆時間の後に爆発してダメージを与える爆弾を放つ自傷ダメージはスピリットダメージに分類され、軽減が可能 / 【T2】範囲 +2m、ダメージ+50 / 【T3】起爆後に毒沼が発生し、元のダメージの 26% のダメージが毎秒、6秒間発生する",
                    "scaling": {
                        "base": 90,
                        "spirit": 1.22
                    }
                },
                {
                    "name": "Life Drain",
                    "translated": "ライフドレイン",
                    "desc": "継続的に敵のHPを吸収し、自身を回復するテザーを発生させる。対象は視界内かつ吸収範囲内にいる必要がある。発動中、射撃や他のアビリティは使用可能だが、移動速度が低下する {g:citadel_binding:'AltCast'} で味方ヒーローにHPを与える / 【T3】チャージアビリティになり+2チャージを獲得、スピリットスケーリングが上昇する",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Malice",
                    "translated": "マリス",
                    "desc": "自身のHPを消費して血の欠片を放ち、マリスのスタックを付与する。スタックは対象をスロウ状態にし、対象に対して自身が与えるダメージを上昇させる。スロウ効果は時間経過で減衰する / 【T2】ダメージ +25.2、血の欠片 +4個 / 【T3】ダメージ増幅 +7%",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Soul Exchange",
                    "translated": "ソウルエクスチェンジ",
                    "desc": "対象の敵とHPの現在割合を交換する。敵のHP減少には下限が設定されているが、交換して受け取るHPも対象のHPに基づいた最低限の量が保証されている / 【T2】25m以内にいる敵を 3秒間サイレンス状態にする / 【T3】発動後の8秒間、スピリットパワー+60、発射速度+40%、スピリット耐性+50%",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                }
            ]
        },
        {
            "id": "hero_lash",
            "original": "Lash",
            "translated": "ラッシュ",
            "image": "images/heroes/hero_lash.png",
            "description": "油断している敵に遠距離から飛び込んで戦闘を仕掛け、撤退しようとする敵を追撃する……こうして、敵に隙を与えないのがラッシュの戦い方だ。",
            "stats": {
                "maxHealth": 790,
                "bulletDamage": 8.46,
                "roundsPerSecond": 5.8309,
                "bulletsPerShot": 1,
                "spiritScaling": 1.1,
                "clipSize": 29,
                "reloadTime": 2.35,
                "bulletSpeed": 635,
                "moveSpeed": 7.2,
                "sprintSpeed": 2.1,
                "stamina": 3,
                "lightMelee": 50,
                "heavyMelee": 116,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Ground Strike",
                    "translated": "グラウンドストライク",
                    "desc": "足元の地面を踏みつけて、前方の敵にダメージを与える。空中でグラウンドストライクを発動すると、地面に急降下する。25ｍを超えるとダメージ増加量がゆるやかになる / 【T2】ヒットした敵をノックアップし、 50% のスロウを 3秒間付与する / 【T3】ダメージ／mが +110% 上昇し、スケーリングが強化",
                    "scaling": {
                        "base": 60,
                        "spirit": 0.7905
                    }
                },
                {
                    "name": "Grapple",
                    "translated": "グラップル",
                    "desc": "空中を移動して対象の位置まで移動する。グラップルを使うと空中ジャンプとダッシュの回数制限がリセットされる / 【T2】キャスト範囲 +20m、 10秒間武器ダメージ +7 / 【T3】発動時：スタミナ+1、空中制御+60%",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Flog",
                    "translated": "ウィップ",
                    "desc": "目の前の敵をムチで攻撃し、与えたダメージに応じてHPを{g:citadel_inline_attribute:'Healing'}する / 【T1】-35%移動速度を3秒間付与 / 【T2】-30%の発射速度を付与クールダウン-16秒 / 【T3】ダメージ+80攻撃角度+40回復+20%",
                    "scaling": {
                        "base": 65,
                        "spirit": 0.85
                    }
                },
                {
                    "name": "Death Slam",
                    "translated": "デススラム",
                    "desc": "敵にフォーカスしてムチをつなげる。詠唱後、ムチでつながった敵を持ち上げてスタン状態を付与し、地面に叩きつける。対象と着地地点にいた敵にはダメージとスロウを与える{g:citadel_binding:'Attack'}を押すと早めに敵を持ち上げる。ムチをつないだ後に射線から外れた敵や範囲外に移動した敵は捕まえられない / 【T3】範囲内の敵を1.2秒間スタンさせるキャスト範囲+6m",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                }
            ]
        },
        {
            "id": "hero_forge",
            "original": "McGinnis",
            "translated": "マクギニス",
            "image": "images/heroes/hero_forge.png",
            "description": "キルゾーンを作るにしろ、敵チームを分断させるにしろ、マクギニスにとっては配置の正確さがカギを握る。一度堅固な陣形を組んでしまえば、容易には崩されない強さを発揮することができるだろう。",
            "stats": {
                "maxHealth": 790,
                "bulletDamage": 6.2,
                "roundsPerSecond": 4.7619,
                "bulletsPerShot": 1,
                "spiritScaling": 1.1,
                "clipSize": 66,
                "reloadTime": 3.29,
                "bulletSpeed": 650,
                "moveSpeed": 6.7,
                "sprintSpeed": 1.6,
                "stamina": 2,
                "lightMelee": 50,
                "heavyMelee": 116,
                "bulletResist": 0,
                "spiritResist": 0.625
            },
            "abilities": [
                {
                    "name": "Mini Turret",
                    "translated": "ミニタレット",
                    "desc": "敵を射撃して{g:citadel_inline_attribute:'SpiritDPS'}を与えるタレットを配置する。このタレットは一定時間後に消滅するトルーパーやオブジェクトに対するタレットのダメージは減少する / 【T1】タレットDPS +10、攻撃範囲 +10m / 【T3】タレット発射速度 +30%、タレット継続時間 +12秒",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Medicinal Specter",
                    "translated": "スペクターメディック",
                    "desc": "付近の味方のHPを{g:citadel_inline_attribute:'Healing'}するガジェットを展開する / 【T1】ガジェットが+40%のスピリット耐性を付与する / 【T2】クールダウン -20秒、+100%のスタミナ回復を付与 / 【T3】最大HPリジェネ／秒 +2%、回復範囲 +3m、継続時間 +1.5秒",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Spectral Wall",
                    "translated": "スペクトラル・ウォール",
                    "desc": "通り抜けた敵にスロウを付与する壁を生成する。生成された壁は地形を分断し、付近にいる敵にダメージを与えるキャスト後、{g:citadel_binding:'Attack'}か{g:citadel_binding:'Ability3'}を押すと早めに壁を生成できる壁は近接攻撃で破壊できる / 【T1】ヒットした敵に対してMcGinnisの与えるダメージが、7秒間+20% / 【T2】クールダウン -20秒、継続時間 +2秒 / 【T3】壁の近くに2個のミニタレットを8秒間設置するスロウ +30%",
                    "scaling": {
                        "base": 60,
                        "spirit": 0.731203
                    }
                },
                {
                    "name": "Heavy Barrage",
                    "translated": "ヘビーバラージ",
                    "desc": "指定地点に向かって誘導ロケットを一斉射撃するMcGinnisはスロウ状態になるが、スタミナは消費可能 / 【T1】1秒間、30%のスロウとダッシュ性能低下を付与 / 【T2】クールダウン -55秒、継続時間 +6秒 / 【T3】範囲 +2m、ダメージ／ロケット +18、スピリットスケーリングが上昇する",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                }
            ]
        },
        {
            "id": "hero_vampirebat",
            "original": "Mina",
            "translated": "ミナ",
            "image": "images/heroes/hero_vampirebat.png",
            "description": "",
            "stats": {
                "maxHealth": 670,
                "bulletDamage": 7.31,
                "roundsPerSecond": 3.9683,
                "bulletsPerShot": 1,
                "spiritScaling": 1.1,
                "clipSize": 12,
                "reloadTime": 1.7,
                "bulletSpeed": 762,
                "moveSpeed": 6.5,
                "sprintSpeed": 1.6,
                "stamina": 2,
                "lightMelee": 50,
                "heavyMelee": 116,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Rake",
                    "translated": "レーキ",
                    "desc": "アクティブ：傘で切りつけて{g:citadel_inline_attribute:'SpiritDamage'}を与える。このダメージは減少HPに応じて上昇する。対象をキルするたび、HPを{g:citadel_inline_attribute:'Heal'}するパッシブ：{g:citadel_binding:'ADS'}を長押しすると少しだけ浮遊できるレーキはHPが60未満の非ヒーローを処刑する / 【T2】キルによる回復 +30クールダウン -8秒 / 【T3】減少HPに応じたダメージ +7%、キルによる回復のスピリットスケーリングが上昇する",
                    "scaling": {
                        "base": 60,
                        "spirit": 0
                    }
                },
                {
                    "name": "Sanguine Retreat",
                    "translated": "サングインブリンク",
                    "desc": "一時的に分散して対象指定不可となり、指定地点まで飛行する発動後の短い間であれば、再発動が可能 / 【T1】発動時：8秒間+25%の発射速度を獲得、弾数を8発追加 / 【T3】再発動 +1",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Love Bites",
                    "translated": "ラヴファング",
                    "desc": "弾薬とアビリティが{g:citadel_inline_attribute:'SpiritDamage'}を与える。一定量蓄積すると{g:citadel_inline_attribute:'BonusSpiritDamage'}が発生するラヴファングは対象ごとに個別のクールダウンを持つ / 【T1】プロック時：3秒間スロウ +30% / 【T2】ダメージ +3追加ダメージ+45% / 【T3】クールダウン -4秒プロック時：5秒間、発射速度 +25%",
                    "scaling": {
                        "base": 4,
                        "spirit": 0.09
                    }
                },
                {
                    "name": "Nox Nostra",
                    "translated": "ノックス・ノストラ",
                    "desc": "アクティブ：対象を追跡するコウモリの群れを放つ。コウモリはそれぞれ{g:citadel_inline_attribute:'SpiritDamage'}を与え、{g:citadel_inline_attribute:'Silence'}状態を付与するパッシブ：ヒーローに対してラヴファングを発動させると、放つコウモリの数が永続的に増加する / 【T3】ヒット時：現在HPの+1%をダメージとして与える",
                    "scaling": {
                        "base": 4.75,
                        "spirit": 0.1
                    }
                }
            ]
        },
        {
            "id": "hero_mirage",
            "original": "Mirage",
            "translated": "ミラージュ",
            "image": "images/heroes/hero_mirage.png",
            "description": "激しい竜巻と化して敵を空中に打ち上げる能力を有するミラージュ。スカラベの助けを借りて生存力を高めることができるほか、味方の援護や甘えた敵の始末のため、マップのどこにでも瞬間移動することができる。",
            "stats": {
                "maxHealth": 740,
                "bulletDamage": 14.8,
                "roundsPerSecond": 2.7211,
                "bulletsPerShot": 1,
                "spiritScaling": 1.1,
                "clipSize": 16,
                "reloadTime": 2.6,
                "bulletSpeed": 828,
                "moveSpeed": 7,
                "sprintSpeed": 1.6,
                "stamina": 3,
                "lightMelee": 50,
                "heavyMelee": 116,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Fire Scarabs",
                    "translated": "ファイアスカラベ",
                    "desc": "ファイアスカラベを敵に寄生させる。その敵からHPを吸収し、与えるダメージを低下させる / 【T2】チャージ+2",
                    "scaling": {
                        "base": 9,
                        "spirit": 0.12
                    }
                },
                {
                    "name": "Dust Devil",
                    "translated": "ダストデビル",
                    "desc": "竜巻に変身して前方に移動しながら敵にダメージを与える。ヒットした敵にはスロウを付与し、空中にノックアップする。変身終了後、弾薬回避を獲得する / 【T1】ダメージ+60 / 【T2】クールダウン-12秒回避+30% / 【T3】6秒以内に再発動可能ノックアップ継続時間 +0.3秒スピリットスケーリングが上昇する",
                    "scaling": {
                        "base": 65,
                        "spirit": 0.3
                    }
                },
                {
                    "name": "Djinn's Mark",
                    "translated": "ジンの刻印",
                    "desc": "アクティブ：ジンの刻印をすべて消費して即座にダメージを与える / 【T1】プロック時：0.8秒間、60%の減衰するスロウを付与する / 【T2】基礎ダメージ +20、刻印の継続時間 +3秒 / 【T3】クールダウン -1秒刻印の最大数 +1刻印最大時に対象を0.5秒間スタンさせる",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Traveler",
                    "translated": "トラベラー",
                    "desc": "ミニマップ上で任意の地点を指定する。短い準備時間の後、その地点にテレポートする。準備中にダメージを受けると、テレポートが中断される / 【T1】12秒間、移動速度+3m／秒、発射速度 +20% / 【T2】スピリットでスケールするバリア 400",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                }
            ]
        },
        {
            "id": "hero_krill",
            "original": "Mo & Krill",
            "translated": "モー＆クリル",
            "image": "images/heroes/hero_krill.png",
            "description": "モー＆クリルは地面を掘り進むことで、相手の不意を突くことが可能だ。そうして接近戦に持ち込んでしまえば、敵には悲劇が待ち受けていることだろう。",
            "stats": {
                "maxHealth": 940,
                "bulletDamage": 2.82,
                "roundsPerSecond": 5.291,
                "bulletsPerShot": 4,
                "spiritScaling": 1.1,
                "clipSize": 20,
                "reloadTime": 2.82,
                "bulletSpeed": 320,
                "moveSpeed": 8,
                "sprintSpeed": 1.6,
                "stamina": 3,
                "lightMelee": 50,
                "heavyMelee": 116,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Scorn",
                    "translated": "スコーン",
                    "desc": "付近にいる敵にダメージを与え、与えたダメージに応じて自身を回復する。敵ヒーローにヒットした場合は回復量が増加する / 【T2】クールダウン -5秒 範囲 +1m / 【T3】Mo & Krillから受けるダメージが+15%上昇するデバフを付与する。この効果はスタックし、 16秒間継続する",
                    "scaling": {
                        "base": 50,
                        "spirit": 0.75
                    }
                },
                {
                    "name": "Burrow",
                    "translated": "穴掘り",
                    "desc": "地中に潜って素早く移動し、スピリットアーマーと弾薬アーマーを獲得する。敵ヒーローからダメージを受けると速度ボーナスが低下する地上に飛び出す際に{g:citadel_inline_attribute:'SpiritDamage'}を与え、{g:citadel_inline_attribute:'Slow'}を付与して敵を{g:citadel_inline_attribute:'KnockUp'}する / 【T1】スピンDPS +50 / 【T2】穴掘り継続時間+4秒、範囲 +2m / 【T3】クールダウン -20秒、移動速度 +4m／秒",
                    "scaling": {
                        "base": 75,
                        "spirit": 1.488
                    }
                },
                {
                    "name": "Sand Blast",
                    "translated": "サンドブラスト",
                    "desc": "目の前に砂をまき散らして敵にダメージを与えて、ディスアーム状態にする / 【T1】ダメージ+50、範囲+5m / 【T2】対象を-25%のスロウ状態にさせ、ダッシュ距離を-25%減少させる / 【T3】継続時間 +1秒、クールダウン-20秒",
                    "scaling": {
                        "base": 40,
                        "spirit": 0
                    }
                },
                {
                    "name": "Combo",
                    "translated": "袋叩き",
                    "desc": "対象をその場に拘束し、詠唱中継続的にスタンを付与してダメージを与える。発動中か袋叩き終了から3秒以内に対象がデスした場合、自身の最大HPが永続的に増加する / 【T1】ライフスティール +100% / 【T2】クールダウン -35秒、弾薬耐性 +50% / 【T3】継続時間 +0.7秒、DPS +40、スケーリングが上昇する",
                    "scaling": {
                        "base": 40,
                        "spirit": 0.6
                    }
                }
            ]
        },
        {
            "id": "hero_bookworm",
            "original": "Paige",
            "translated": "ペイジ",
            "image": "images/heroes/hero_bookworm.png",
            "description": "",
            "stats": {
                "maxHealth": 690,
                "bulletDamage": 35,
                "roundsPerSecond": 1.6667,
                "bulletsPerShot": 1,
                "spiritScaling": 1.1,
                "clipSize": 14,
                "reloadTime": 2.5,
                "bulletSpeed": 43.43,
                "moveSpeed": 6.9,
                "sprintSpeed": 3.5,
                "stamina": 2,
                "lightMelee": 42,
                "heavyMelee": 120,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Bookwyrm",
                    "translated": "ブックドラゴン",
                    "desc": "指定地点にドラゴンを召喚し、前方へ飛ばす。このドラゴンは{g:citadel_inline_attribute:'SpiritDamage'}を与え、通った後に炎の道を残す / 【T1】炎の道の継続時間 +2秒範囲 +1m / 【T2】飛行距離 +10mクールダウン -8秒 / 【T3】ダメージ +100DPS +30チャージ +1",
                    "scaling": {
                        "base": 60,
                        "spirit": 1.3
                    }
                },
                {
                    "name": "Plot Armor",
                    "translated": "プロットアーマー",
                    "desc": "味方に{g:citadel_inline_attribute:'CombatBarrier'}を付与する。バリアが維持されている間、味方は{g:citadel_inline_attribute:'BonusWeaponDamage'}を得る / 【T1】バリア時：発射速度 +14% / 【T2】バリア +100、継続時間 +2秒 / 【T3】バリアスケーリングが上昇する最大2人の味方に追加で75%バリアを付与する",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Captivating Read",
                    "translated": "チャーミングリード",
                    "desc": "魔法を仕掛ける範囲を指定し、{g:citadel_inline_attribute:'Slow'}を付与する魔法はディレイの後に爆発し、{g:citadel_inline_attribute:'SpiritDamage'}を与え、{g:citadel_inline_attribute:'Immobilize'}状態にする / 【T3】範囲 +1mヒット時：6秒間、-18%スピリット耐性低下",
                    "scaling": {
                        "base": 90,
                        "spirit": 1.3
                    }
                },
                {
                    "name": "Rallying Charge",
                    "translated": "ファントムチャージ",
                    "desc": "街全体を駆け抜ける幻影の騎士と騎馬の波を放つ。騎士は味方を{g:citadel_inline_attribute:'Healing'}し、敵には{g:citadel_inline_attribute:'SpiritDamage'}を与える{g:citadel_inline_attribute:'Heal'}と{g:citadel_inline_attribute:'SpiritDamage'}の量は、騎士の移動距離に応じて増幅する / 【T2】騎馬の列幅が+4頭分増加クールダウン -30秒 / 【T3】ダメージ +135スタン継続時間 +0.5秒最大増幅 +50%",
                    "scaling": {
                        "base": 125,
                        "spirit": 1
                    }
                }
            ]
        },
        {
            "id": "hero_chrono",
            "original": "Paradox",
            "translated": "パラドックス",
            "image": "images/heroes/hero_chrono.png",
            "description": "パラドックスは時間を操ることで、一対一の戦闘において敵を圧倒する。タイミングよく自身と敵の位置を交換することで、あらかじめ設置しておいたパルスグレネードや壁、あるいは味方の近くへと敵を誘い込むのだ。",
            "stats": {
                "maxHealth": 740,
                "bulletDamage": 6.42,
                "roundsPerSecond": 7.5586,
                "bulletsPerShot": 1,
                "spiritScaling": 1.1,
                "clipSize": 40,
                "reloadTime": 2.585,
                "bulletSpeed": 525,
                "moveSpeed": 6.7,
                "sprintSpeed": 1.6,
                "stamina": 3,
                "lightMelee": 50,
                "heavyMelee": 116,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Pulse Grenade",
                    "translated": "パルスグレネード",
                    "desc": "着弾時にパルスを放つグレネードを投げる。パルスのたびに範囲が広がり、{g:citadel_inline_attribute:'SpiritDamage'}を与え、スローモーション状態とParadoxから対象への{g:citadel_inline_attribute:'DamageAmp'}（スタック可）を付与する / 【T2】パルスダメージ +20、スピリットスケーリングが上昇する / 【T3】ダメージ増幅 +4%、継続時間 +1.6秒",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Time Wall",
                    "translated": "タイムウォール",
                    "desc": "時間をゆがめる壁を作り出す。この壁は触れた敵の発射物や弾薬すべての時間を停止させ、味方の弾薬の弾速とダメージを上昇させる。壁に直接触れた敵は一時的にスロウ状態とサイレンス状態になる / 【T1】継続時間 +2.5秒幅 +3m高さ +1m / 【T2】サイレンス継続時間 2.3秒武器ダメージ +30% / 【T3】アビリティチャージを 2回獲得",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Kinetic Carbine",
                    "translated": "キネティックカービン",
                    "desc": "強力な時間エネルギーをチャージして放つ。{g:citadel_inline_attribute:'SpiritDamage'}を与え、ヒットした敵に時間停止効果を付与する。与えるダメージは{g:citadel_inline_attribute:'WeaponDamage'}によって上昇する。チャージ中は移動速度が上昇する空中でのチャージ中、{g:citadel_binding:'ADS'}で自分の動きを遅くすることができる / 【T3】チャージ継続時間 +2秒、最大ダメージスケール +50%",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Paradoxical Swap",
                    "translated": "パラドックススワップ",
                    "desc": "ヒットした敵ヒーローと自分の位置を入れ替える発射物を発射する / 【T1】8秒間200バリアを獲得、バリア量はスピリットでスケールする / 【T2】クールダウン -35秒、キャスト範囲 +13m / 【T3】ヒットした対象から7m以内にいるすべての敵を入れ替える、最大HPの割合ダメージ +10%",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                }
            ]
        },
        {
            "id": "hero_synth",
            "original": "Pocket",
            "translated": "ポケット",
            "image": "images/heroes/hero_synth.png",
            "description": "細身でありながら高威力のショットガンを操るポケットは、中に逃げ込むことができる不思議なスーツケースや、瞬間移動が可能な空飛ぶマントを活用し、近接戦を生き残る。",
            "stats": {
                "maxHealth": 790,
                "bulletDamage": 4.28,
                "roundsPerSecond": 1.9048,
                "bulletsPerShot": 7,
                "spiritScaling": 1.1,
                "clipSize": 11,
                "reloadTime": 2.82,
                "bulletSpeed": 558.8,
                "moveSpeed": 7.2,
                "sprintSpeed": 1.6,
                "stamina": 3,
                "lightMelee": 60,
                "heavyMelee": 116,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Barrage",
                    "translated": "バラージ",
                    "desc": "着弾地点周辺の敵に{g:citadel_inline_attribute:'SpiritDamage'}を与えて、{g:citadel_inline_attribute:'Slow'}を付与する発射物を放つ。ヒーローにヒットした発射物は、Pocketにスタックする{g:citadel_inline_attribute:'DamageAmp'}を付与する空中で発動すると、Pocketは浮遊する空中ダッシュまたはフライングクロークを発動してもバラージはキャンセルされない / 【T3】増幅／スタック +4%、範囲 3m",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Flying Cloak",
                    "translated": "フライングクローク",
                    "desc": "前進し続けるマントを飛ばす。マントは敵にダメージを与え、 {g:citadel_binding:'Ability2'} を押すとマントの位置にテレポートできる / 【T2】8秒間、武器ダメージ+5% / 【T3】生存時間 +1.6秒、クールダウン-14秒",
                    "scaling": {
                        "base": 60,
                        "spirit": 1.3
                    }
                },
                {
                    "name": "Enchanter's Satchel",
                    "translated": "マジシャンズバッグ",
                    "desc": "スーツケースの中に隠れる。潜伏時間終了時、付近にいる敵に{g:citadel_inline_attribute:'SpiritDamage'}を与える。潜伏時間は、任意のアクションを行うことで早めに終了できる / 【T3】継続時間+1.5秒間範囲+4m4秒間、移動速度と発射速度-40%",
                    "scaling": {
                        "base": 65,
                        "spirit": 0.9
                    }
                },
                {
                    "name": "Affliction",
                    "translated": "アフリクション",
                    "desc": "付近にいる敵に{g:citadel_inline_attribute:'SpiritIcon'}継続ダメージを付与するアフリクションのダメージで敵をキルすることはできず、アイテムプロックは発生しない / 【T2】継続時間 +3秒、範囲 +4m / 【T3】すべての回復を無効化するDPS+18、スピリットスケーリングが上昇する",
                    "scaling": {
                        "base": 34,
                        "spirit": 0.22
                    }
                }
            ]
        },
        {
            "id": "hero_familiar",
            "original": "Rem",
            "translated": "レム",
            "image": "images/heroes/hero_familiar.png",
            "description": "",
            "stats": {
                "maxHealth": 690,
                "bulletDamage": 16,
                "roundsPerSecond": 3.8462,
                "bulletsPerShot": 1,
                "spiritScaling": 1.1,
                "clipSize": 13,
                "reloadTime": 2,
                "bulletSpeed": 160,
                "moveSpeed": 7.2,
                "sprintSpeed": 4,
                "stamina": 3,
                "lightMelee": 58,
                "heavyMelee": 116,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Pillow Toss",
                    "translated": "まくらなげ",
                    "desc": "お気に入りの枕を投げて{g:citadel_inline_attribute:'SpiritDamage'}を与え、大きく{g:citadel_inline_attribute:'KnockBack'}させる命中すると他のアビリティのクールダウンを短縮する / 【T2】範囲 +2、-35%の発射速度を付与 / 【T3】ダメージ +90、アビリティチャージ +1",
                    "scaling": {
                        "base": 75,
                        "spirit": 1.6
                    }
                },
                {
                    "name": "Tag Along",
                    "translated": "おひるね",
                    "desc": "味方までジャンプし、そばで仮眠を取る。自身およびその味方は、減少HPに応じて一気にHPを{g:citadel_inline_attribute:'Heal'}し、持続する{g:citadel_inline_attribute:'Regen'}を獲得する味方につき1度まで、{g:citadel_binding:'Ability2'}で別の味方に飛びつくことで継続時間を更新できるアルティメットによるスタンを受けた場合は仮眠が解除されるアビリティ中はアイテムを使用でき、セルフキャストが味方を対象とするようになる / 【T2】仮眠中のアイテムの範囲、継続時間、バリア効果量が上昇 / 【T3】仮眠中と覚醒後の短い時間、ボーナススピリットパワーを獲得",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Lil Helpers",
                    "translated": "おてつだい",
                    "desc": "使い魔に簡単なお使いをさせる。使い魔は木箱の中身集めや、罪人の供物の使用、味方やトルーパーの補佐ができるヒーローの追従：{g:citadel_inline_attribute:'SpiritResist'}を短い時間付与し、徐々に減衰する{g:citadel_inline_attribute:'MoveSpeed'}を付与するトルーパーの追従：トルーパーに回復、ダメージ、耐性を付与し、おひるねの対象にできる。付近にヒーローがいない場合、トルーパーキルによるソウルはチーム内で分配されるおひるね中に発動できる。誰かに追従した後、使い魔は15.1秒間仮眠を取る / 【T1】使い魔 +1 / 【T2】スピリット耐性 +8%移動速度 +1.5m／秒 / 【T3】使い魔 +2トルーパーの与ダメージと耐性 +20%",
                    "scaling": {
                        "base": 20,
                        "spirit": 0
                    }
                },
                {
                    "name": "Naptime",
                    "translated": "おやすみのじかん",
                    "desc": "壁や床を貫通する視線を前方に放つ。視線範囲内の敵はスロウ状態になってダッシュ距離が短くなり、移動アビリティが使えなくなる詠唱完了時に範囲内の敵は睡眠状態になる。その後、激しい頭痛と共に覚醒し、大きな{g:citadel_inline_attribute:'SpiritDamage'}を与える / 【T1】覚醒時に敵のスタミナ -1、睡眠中の敵はスタミナが回復しない / 【T2】範囲 +3m、睡眠継続時間 +0.5秒 / 【T3】クールダウン -65秒詠唱中ダメージが減少し、アンストッパブル状態になる",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                }
            ]
        },
        {
            "id": "hero_gigawatt",
            "original": "Seven",
            "translated": "セブン",
            "image": "images/heroes/hero_gigawatt.png",
            "description": "小規模な戦闘をしながら機会をじっと待つ、それがセブンの戦い方だ。そして機会が訪れれば嵐のように戦場へと飛び込み、無数の稲妻で敵を焼き尽くす。",
            "stats": {
                "maxHealth": 740,
                "bulletDamage": 10.81,
                "roundsPerSecond": 5.8309,
                "bulletsPerShot": 1,
                "spiritScaling": 1.1,
                "clipSize": 29,
                "reloadTime": 2.35,
                "bulletSpeed": 635,
                "moveSpeed": 6.7,
                "sprintSpeed": 1.8,
                "stamina": 3,
                "lightMelee": 50,
                "heavyMelee": 116,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Lightning Ball",
                    "translated": "ライトニングボール",
                    "desc": "まっすぐ進む雷球を発射する。雷球は範囲内のすべての対象にダメージを与える。敵にダメージを与えると減速し、マップ上の地形にあたると停止する / 【T2】ヒットした対象の移動速度 -35%、電球の生存時間 +1秒 / 【T3】DPS +58.5、範囲 +1.5m",
                    "scaling": {
                        "base": 75,
                        "spirit": 0.5
                    }
                },
                {
                    "name": "Static Charge",
                    "translated": "スタティックチャージ",
                    "desc": "対象の敵ヒーローに電荷を付与する。しばらくすると、スタティックチャージが範囲内の敵をスタン状態にしてダメージを与える / 【T2】範囲 +7mキャスト範囲 +5m / 【T3】スタン継続時間 +0.9秒、ダメージ +160",
                    "scaling": {
                        "base": 35,
                        "spirit": 0.792137
                    }
                },
                {
                    "name": "Power Surge",
                    "translated": "パワーサージ",
                    "desc": "感電効果を付与して武器を強化し、弾薬がヒットした対象に感電ダメージを与える。この感電ダメージは対象の近くにいる敵に連鎖する。この効果はバースト射撃ごとに1回発生する / 【T2】移動速度 +3m／秒ダメージ +8、スピリットスケーリングが上昇する / 【T3】継続時間 +12秒-15%のスピリット耐性を付与",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Storm Cloud",
                    "translated": "ストームクラウド",
                    "desc": "自身の周りに拡大する嵐の雲を発生させ、範囲内の敵すべてにダメージを与える。ただし、射線が通らない敵はダメージを受けない / 【T1】ストームクラウド詠唱中の弾薬耐性 +55% / 【T2】詠唱時間 +7秒範囲 +10m / 【T3】DPS +65飛行速度 +4m／秒",
                    "scaling": {
                        "base": 95,
                        "spirit": 0.6
                    }
                }
            ]
        },
        {
            "id": "hero_shiv",
            "original": "Shiv",
            "translated": "シヴ",
            "image": "images/heroes/hero_shiv.png",
            "description": "フェアプレイにこれっぽっちの興味もないシヴは、ヒットエンドラン戦法を駆使し、敵を弱らせてからとどめを刺す。",
            "stats": {
                "maxHealth": 840,
                "bulletDamage": 4.8,
                "roundsPerSecond": 1.8141,
                "bulletsPerShot": 6,
                "spiritScaling": 1.1,
                "clipSize": 10,
                "reloadTime": 2.8,
                "bulletSpeed": 609.6,
                "moveSpeed": 6.5,
                "sprintSpeed": 1.6,
                "stamina": 3,
                "lightMelee": 50,
                "heavyMelee": 116,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Serrated Knives",
                    "translated": "セレイテッド・ナイフ",
                    "desc": "敵に出血を付与するナイフを投げる。ヒットごとにスタックを追加し、出血の継続時間を更新する。出血効果はスタック数に応じて上昇する / 【T2】チャージ+2 / 【T3】出血DPS+12、スピリットスケーリングが上昇する",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Slice and Dice",
                    "translated": "スライス＆ダイス",
                    "desc": "前方にダッシュして、進路上にいる敵にダメージを与える。命中した敵は、{g:citadel_inline_attribute:'SpiritResist'}が低下する。このデバフはスタックする / 【T2】スピリット耐性-8%ダッシュ距離+2m / 【T3】衝突ダメージ+50ヒットしたヒーローにつきクールダウン-2秒",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Bloodletting",
                    "translated": "ブラッドレッティング",
                    "desc": "ダメージを受けた時、その一部のみを即座に受け、残りのダメージを継続ダメージに変換する。発動すると、変換した継続ダメージの一部を解消する",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Killing Blow",
                    "translated": "キリングブロー",
                    "desc": "【T1】怒りゲージ最大時、移動速度が +2 m／秒 / 【T2】怒り最大時の追加ダメージ+8% / 【T3】敵HPしきい値+5%キリングブローで敵をキルすると20秒間再発動が可能",
                    "scaling": {
                        "base": 200,
                        "spirit": 0
                    }
                }
            ]
        },
        {
            "id": "hero_werewolf",
            "original": "Silver",
            "translated": "シルバー",
            "image": "images/heroes/hero_werewolf.png",
            "description": "",
            "stats": {
                "maxHealth": 840,
                "bulletDamage": 5.4,
                "roundsPerSecond": 1.1111,
                "bulletsPerShot": 7,
                "spiritScaling": 1.1,
                "clipSize": 7,
                "reloadTime": 0.3,
                "bulletSpeed": 812.8,
                "moveSpeed": 6.7,
                "sprintSpeed": 1.5,
                "stamina": 2,
                "lightMelee": 50,
                "heavyMelee": 116,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Slam Fire",
                    "translated": "スラムファイア",
                    "desc": "武器を即座にリロードし、{g:citadel_inline_attribute:'BonusFireRate'}を獲得する。一定回数、対象のHPに応じた追加{g:citadel_inline_attribute:'WeaponDamage'}を与えるが、射撃精度が低下する / 【T3】全弾ヒットさせた場合、現在HPの+8%分のダメージを与える",
                    "scaling": {
                        "base": 40,
                        "spirit": 0
                    }
                },
                {
                    "name": "Boot Kick",
                    "translated": "ブーツキック",
                    "desc": "【T2】ヒーローヒット時：スタミナを2回復する / 【T3】追加ダメージ +80、キックされた敵は5秒間与えるダメージが-35%",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Entangling Bola",
                    "translated": "バインドボーラ",
                    "desc": "{g:citadel_inline_attribute:'SpiritDamage'}を与えるボーラを投げる。ボーラは{g:citadel_inline_attribute:'Slow'}を付与し、移動アビリティやスタミナ、ジャンプの使用を無効化する / 【T3】アビリティクールダウン -5秒。ボーラが追加で2つの対象に連鎖する",
                    "scaling": {
                        "base": 40,
                        "spirit": 1.6
                    }
                },
                {
                    "name": "Lycan Curse",
                    "translated": "人狼の呪い",
                    "desc": "パッシブ：ダメージを与えると血の渇望を生成する。生成量はHPが低いと増加する。血の渇望が最大になると、自動で人狼の呪いを発動するアクティブ：即座に変身し、{g:citadel_inline_attribute:'MaxHealth'}が増加し、敵ヒーローに対してスタックする{g:citadel_inline_attribute:'FireRate'}を獲得する。また、アビリティと武器がより凶暴なものに変化する / 【T1】弾薬＆スピリット耐性 +20% / 【T2】移動速度 +4 m／秒、HP増加 200 / 【T3】ヒーローキル時：アビリティ、継続時間、変身回復をリフレッシュ",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                }
            ]
        },
        {
            "id": "hero_werewolf_transformed",
            "original": "Silver (Transformed)",
            "translated": "Silver (Transformed)",
            "image": "images/heroes/hero_werewolf_transformed.png",
            "description": "",
            "stats": {
                "maxHealth": 840,
                "bulletDamage": 25,
                "roundsPerSecond": 2,
                "bulletsPerShot": 1,
                "spiritScaling": 1.1,
                "clipSize": 0,
                "reloadTime": 1.5,
                "bulletSpeed": 254,
                "moveSpeed": 6.7,
                "sprintSpeed": 1.5,
                "stamina": 2,
                "lightMelee": 50,
                "heavyMelee": 116,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Go For The Throat",
                    "translated": "ブラッディファング",
                    "desc": "目の前にいるすべての敵に{g:citadel_inline_attribute:'MeleeDamage'}を与え、与えたダメージに応じてHPを{g:citadel_inline_attribute:'Heal'}する。対象のHPが低いほど、与えるダメージが上昇する",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Mauling Leap",
                    "translated": "マウリングリープ",
                    "desc": "前方に飛びかかり、最初にヒットした敵に{g:citadel_inline_attribute:'MeleeDamage'}を与える。敵の{g:citadel_inline_attribute:'BulletResist'}を低下させ、継続{g:citadel_inline_attribute:'SpiritDamage'}を与える",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Tail Whack",
                    "translated": "テイルスマッシュ",
                    "desc": "周囲の敵を強打して{g:citadel_inline_attribute:'SpiritDamage'}を与える。ヒットした敵はディスアーム状態になり、短時間{g:citadel_inline_attribute:'Slow'}状態になる / 【T3】デバフ継続時間 +1.5秒間",
                    "scaling": {
                        "base": 45,
                        "spirit": 1.5
                    }
                },
                {
                    "name": "Lycan Curse",
                    "translated": "人狼の呪い",
                    "desc": "パッシブ：ダメージを与えると血の渇望を生成する。生成量はHPが低いと増加する。血の渇望が最大になると、自動で人狼の呪いを発動するアクティブ：即座に変身し、{g:citadel_inline_attribute:'MaxHealth'}が増加し、敵ヒーローに対してスタックする{g:citadel_inline_attribute:'FireRate'}を獲得する。また、アビリティと武器がより凶暴なものに変化する / 【T1】弾薬＆スピリット耐性 +20% / 【T2】移動速度 +4 m／秒、HP増加 200 / 【T3】ヒーローキル時：アビリティ、継続時間、変身回復をリフレッシュ",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                }
            ]
        },
        {
            "id": "hero_magician",
            "original": "Sinclair",
            "translated": "シンクレア",
            "image": "images/heroes/hero_magician.png",
            "description": "やる気のないアシスタントの力を借りながら、マグニフィセント・シンクレアは様々な魔法を操って敵を混乱させる。",
            "stats": {
                "maxHealth": 740,
                "bulletDamage": 17.76,
                "roundsPerSecond": 2.7211,
                "bulletsPerShot": 1,
                "spiritScaling": 1.3,
                "clipSize": 16,
                "reloadTime": 2.5,
                "bulletSpeed": 300,
                "moveSpeed": 7.2,
                "sprintSpeed": 1.6,
                "stamina": 3,
                "lightMelee": 50,
                "heavyMelee": 116,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Vexing Bolt",
                    "translated": "ヴェックスボルト",
                    "desc": " ダメージを与える魔法の雷を放つ。このダメージは移動中に上昇する。アシスタントがいる場合、アシスタントもヴェックスボルトを発動するが、ダメージは減少する{g:citadel_binding:'Ability1'} を押すと、クロスヘアに向かって雷を再誘導する / 【T1】ボルトが -25%の発射速度を 5秒間付与する / 【T3】最大ダメージ +126。アシスタントダメージ +50%",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Spectral Assistant",
                    "translated": "スペクターアシスタント",
                    "desc": "指定地点にアシスタントを召喚する。アシスタントはプレイヤーが射撃するたびに攻撃して ダメージを与えるアシスタントがいるときに {g:citadel_binding:'Ability2'} を押すと、アシスタントと位置を交換できるスペクターアシスタントの発動時に武器をリロードする / 【T2】継続時間 +7、召喚距離 +5m / 【T3】発射速度 +60%、アシスタントダメージ +12.6",
                    "scaling": {
                        "base": 15,
                        "spirit": 0.36
                    }
                },
                {
                    "name": "Rabbit Hex",
                    "translated": "ラビットヘックス",
                    "desc": "指定範囲に呪いをかけ、範囲内のすべての敵を一定時間ウサギに変身させるウサギは小さいため 移動速度が高いが、受ける ダメージが上昇し、 ほとんどのアクションを実行できない呪いは敵のアビリティを中断しない / 【T3】ダメージ +7、範囲 +3m",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Audience Participation",
                    "translated": "イミテーションマジック",
                    "desc": "一定時間その敵のアルティメットをコピーする。アビリティを再発動すると、コピーしたアルティメットを使用するコピーしたアルティメットには、このアビリティの強化段階が適用されるイミテーションマジックはクールダウンもコピーする / 【T1】コピーしたアルティメットを強化 / 【T2】コピーしたアルティメットをもう1段階強化！ / 【T3】コピーしたアルティメットをさらにもう1段階強化！",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                }
            ]
        },
        {
            "id": "hero_doorman",
            "original": "The Doorman",
            "translated": "ドアマン",
            "image": "images/heroes/hero_doorman.png",
            "description": "",
            "stats": {
                "maxHealth": 765,
                "bulletDamage": 29.26,
                "roundsPerSecond": 1.4706,
                "bulletsPerShot": 1,
                "spiritScaling": 1.1,
                "clipSize": 8,
                "reloadTime": 2.4,
                "bulletSpeed": 203.2,
                "moveSpeed": 7.9,
                "sprintSpeed": 1.6,
                "stamina": 3,
                "lightMelee": 50,
                "heavyMelee": 116,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Call Bell",
                    "translated": "コールベル",
                    "desc": "着弾時に{g:citadel_inline_attribute:'SpiritDamage'}を与えるコールベルを投げる。コールベルは短いディレイ後に爆発し、追加の{g:citadel_inline_attribute:'SpiritDamage'}を与える。この爆発を受けた敵は武器の精度が低下し、{g:citadel_inline_attribute:'Slow'}状態になる射撃することで早めに起爆できる / 【T1】チャージ +1 / 【T2】着弾ダメージ +30爆発ダメージ +40 / 【T3】範囲 +4mベルの生存時間 +26秒スケーリングが上昇する",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Doorway",
                    "translated": "ドアウェイ",
                    "desc": "つながったドアを2つ設置する。プレイヤーとほとんどの発射物は、片方のドアを通るともう片方のドアから出てくる。継続時間が終わるか、アビリティを再発動するとドアが閉じる2つのドアは、それぞれの最大距離以内に設置する必要がある / 【T2】1度目にドアを通過した際にバリアを付与する / 【T3】キャスト範囲 +30m、ドア間の最大距離 +45mスピリットパワーでスケールするようになる",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Luggage Cart",
                    "translated": "キャリーカート",
                    "desc": "{g:citadel_inline_attribute:'SpiritDamage'}を与え、通路上の敵ヒーローを{g:citadel_inline_attribute:'Pulls'}るキャリーカートを送り出す{g:citadel_binding:'AltCast'}でオルトキャストすると、味方ヒーローを対象にできる / 【T2】キャスト範囲 +20m壁衝突時のダメージ +75 / 【T3】クールダウン -15秒、壁衝突時に1.25秒の {g:citadel_inline_attribute:'Stun'}を付与",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Hotel Guest",
                    "translated": "ホテルゲスト",
                    "desc": "対象の肉体を、客としてバロネス・ホテルに送る。客は速やかに出口用エレベーターを目指す必要がある。エレベーターに到着すると元の場所に送り返されるバロネス・ホテルでの滞在費は{g:citadel_inline_attribute:'SpiritDamage'}で支払われる。時間内にチェックアウトできなかった場合、追加の{g:citadel_inline_attribute:'SpiritDamage'}が発生する / 【T1】スタミナ減少 1、クールダウン -25秒 / 【T2】ダメージ +150チェックアウト失敗時に+1.5秒スタン / 【T3】客がバロネス・ホテルに滞在中、アンストッパブル状態になるチェックアウト失敗時にクールダウン13秒",
                    "scaling": {
                        "base": 75,
                        "spirit": 1
                    }
                }
            ]
        },
        {
            "id": "hero_priest",
            "original": "Venator",
            "translated": "ヴェナトル",
            "image": "images/heroes/hero_priest.png",
            "description": "",
            "stats": {
                "maxHealth": 790,
                "bulletDamage": 8,
                "roundsPerSecond": 7.9365,
                "bulletsPerShot": 1,
                "spiritScaling": 1.1,
                "clipSize": 33,
                "reloadTime": 2.8,
                "bulletSpeed": 1588,
                "moveSpeed": 6.4,
                "sprintSpeed": 1.5,
                "stamina": 3,
                "lightMelee": 50,
                "heavyMelee": 125,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Consecrating Grenade",
                    "translated": "聖別手榴弾",
                    "desc": "爆発前にバウンドするグレネードを射出する。グレネードの爆発は{g:citadel_inline_attribute:'WeaponDamage'}を与え、敵に火をつける燃えている対象は範囲内の敵に{g:citadel_inline_attribute:'PureDamage'}を与え、回復量が減少する / 【T2】範囲 +1.5m、燃焼継続時間 +1秒 / 【T3】回復阻害 -20%、アビリティがチャージを獲得",
                    "scaling": {
                        "base": 35,
                        "spirit": 0
                    }
                },
                {
                    "name": "Gutshot",
                    "translated": "ガットショット",
                    "desc": "ショットガンによる爆撃を放って{g:citadel_inline_attribute:'WeaponDamage'}を与え、敵を後方へとノックバックする。壁付近の敵は{g:citadel_inline_attribute:'Stun'}状態になり、{g:citadel_inline_attribute:'BonusWeaponDamage'}を受ける / 【T2】アビリティクールダウン -10秒、スタン継続時間 +0.4秒 / 【T3】壁スタン時：次の近接強攻撃が祝福状態になる",
                    "scaling": {
                        "base": 60,
                        "spirit": 0
                    }
                },
                {
                    "name": "Hex-Lined Snap Trap",
                    "translated": "魔呪の狩猟罠",
                    "desc": "短いディレイの後に作動状態になるトラップを蹴り飛ばすトラップは最初に触れた敵に飛びかかって{g:citadel_inline_attribute:'SpiritDamage'}を与え、{g:citadel_inline_attribute:'Immobilize'}状態を付与する。その後の一定時間、その敵は視認可能になる / 【T3】視認可能状態の対象に与えるダメージが+25%",
                    "scaling": {
                        "base": 80,
                        "spirit": 2.2
                    }
                },
                {
                    "name": "Ira Domini",
                    "translated": "イーラ・ドミニ",
                    "desc": "クロスボウに杭を3本装填する。杭は大幅に増加した{g:citadel_inline_attribute:'WeaponDamage'}を与える最後の杭は祝福状態となり、追加{g:citadel_inline_attribute:'PureDamage'}を与え、HPの低い敵を処刑する / 【T1】アクティブ時：移動速度1.2m／秒を獲得 / 【T2】アビリティクールダウン -15秒、追加ダメージ +65 / 【T3】すべての杭が祝福される",
                    "scaling": {
                        "base": 120,
                        "spirit": 0
                    }
                }
            ]
        },
        {
            "id": "hero_frank",
            "original": "Victor",
            "translated": "ビクター",
            "image": "images/heroes/hero_frank.png",
            "description": "",
            "stats": {
                "maxHealth": 810,
                "bulletDamage": 12,
                "roundsPerSecond": 5.0505,
                "bulletsPerShot": 1,
                "spiritScaling": 1.1,
                "clipSize": 24,
                "reloadTime": 2.4,
                "bulletSpeed": 203.2,
                "moveSpeed": 6.3,
                "sprintSpeed": 1.1,
                "stamina": 3,
                "lightMelee": 50,
                "heavyMelee": 116,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Pain Battery",
                    "translated": "ペインバッテリー",
                    "desc": "ダメージを受けると、ペインバッテリーが自動的に蓄積される蓄積が満タンの状態でアビリティを発動すると複数の電撃を放ち、それぞれの対象に{g:citadel_inline_attribute:'SpiritDamage'}を与える / 【T1】ヒット時：2秒間スロウ40% / 【T3】ヒーローヒット時に失ったHPの15%を回復、スピリットスケーリングが上昇する",
                    "scaling": {
                        "base": 100,
                        "spirit": 1.6
                    }
                },
                {
                    "name": "Jumpstart",
                    "translated": "ジャンプスタート",
                    "desc": "自身に{g:citadel_inline_attribute:'SpiritDamage'}を与えた後に、追加の{g:citadel_inline_attribute:'Regen'}と{g:citadel_inline_attribute:'BonusMoveSpeed'}を得る。この効果は時間経過とともに減衰する / 【T2】合計HPリジェネ +50、クールダウン -8秒 / 【T3】チャージ +1デバフ耐性 +50%スピリットスケーリングが上昇する",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Aura of Suffering",
                    "translated": "苦悶のオーラ",
                    "desc": "苦痛を解き放ち、敵と自分の両方に{g:citadel_inline_attribute:'SpiritDPS'}を与えるダメージはアビリティの発動時間が長いほど、上限に達するまで増加し続ける / 【T1】敵に30%のスロウを付与する / 【T2】最小DPS +6、最大DPS+23 / 【T3】敵の受けるダメージが+15% 増加する",
                    "scaling": {
                        "base": 0,
                        "spirit": 1.1
                    }
                },
                {
                    "name": "Shocking Reanimation",
                    "translated": "ショックリバイブ",
                    "desc": "致死ダメージを受けた後に復活し、付近の敵に{g:citadel_inline_attribute:'SpiritDamage'}を与えて{g:citadel_inline_attribute:'Stun'}を付与する / 【T1】クールダウン中：+15%の発射速度を獲得、弾薬ごとに6を与える / 【T3】ダメージ +150スタン +1.5秒クールダウン -100秒",
                    "scaling": {
                        "base": 200,
                        "spirit": 2
                    }
                }
            ]
        },
        {
            "id": "hero_hornet",
            "original": "Vindicta",
            "translated": "ヴィンディクタ",
            "image": "images/heroes/hero_hornet.png",
            "description": "ヴィンディクタはその優れた機動力を活かし、定期的に交戦しては獲物を少しずつ弱らせる。マップ上にヴィンディクタがいる限り、傷ついた敵は遠くからの狙撃を恐れなければいけないのだ。",
            "stats": {
                "maxHealth": 765,
                "bulletDamage": 12.33,
                "roundsPerSecond": 4.329,
                "bulletsPerShot": 1,
                "spiritScaling": 1.1,
                "clipSize": 19,
                "reloadTime": 2.914,
                "bulletSpeed": 660,
                "moveSpeed": 7.9,
                "sprintSpeed": 1.6,
                "stamina": 2,
                "lightMelee": 50,
                "heavyMelee": 116,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Stake",
                    "translated": "テザーステイク",
                    "desc": "杭を投げ、着地地点に敵を縛りつける。敵の移動範囲はテザーの長さに制限される / 【T3】テザー継続時間 +0.75秒、捕獲範囲 +2m",
                    "scaling": {
                        "base": 40,
                        "spirit": 0.5
                    }
                },
                {
                    "name": "Flight",
                    "translated": "フライト",
                    "desc": "空中に飛び上がって飛行状態になる。飛行中、武器は追加スピリットダメージを与え、アイテムの射程が増加する / 【T1】飛行中、基礎弾数 +50% / 【T3】ヒーローキルで継続時間が更新されるスピリットダメージ+10、スピリットスケーリングが上昇する",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Crow Familiar",
                    "translated": "クロウ・ファミリア",
                    "desc": "カラスの使い魔を放ち、着弾時に衝撃ダメージを与えて、弾薬耐性を低下させる。また、対象の現在のHPに応じたダメージを与える出血状態を付与する / 【T1】-35%の回復阻害を付与する / 【T2】出血ダメージ+0.5%クールダウン-12秒 / 【T3】継続時間+2秒間弾薬耐性-8%スピリット耐性-8%",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Assassinate",
                    "translated": "アサシネイト",
                    "desc": "スコープ付きライフルで遠距離から強力なショットを放つ。スコープをのぞいてから1秒経過して、チャージが最大になるまでは与えるダメージが減少する。残りHPが50%未満の敵には追加ダメージを与える。アサシネイトでプレイヤーをキルすると追加武器ダメージを獲得",
                    "scaling": {
                        "base": 90,
                        "spirit": 0.93
                    }
                }
            ]
        },
        {
            "id": "hero_viscous",
            "original": "Viscous",
            "translated": "ヴィスカス",
            "image": "images/heroes/hero_viscous.png",
            "description": "ヴィスカスは巧みな回避と戦略的な回復を駆使して敵を翻弄することで、この上なく激しい猛攻でさえも耐え抜いてしまう。",
            "stats": {
                "maxHealth": 790,
                "bulletDamage": 10.34,
                "roundsPerSecond": 4.7619,
                "bulletsPerShot": 1,
                "spiritScaling": 1.3,
                "clipSize": 20,
                "reloadTime": 2.5,
                "bulletSpeed": 254,
                "moveSpeed": 7.2,
                "sprintSpeed": 1.6,
                "stamina": 3,
                "lightMelee": 63,
                "heavyMelee": 116,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Splatter",
                    "translated": "スプラッター",
                    "desc": "ダメージを与える粘液ボールを投げる。ボールは着弾地点に粘液の沼を生成し、範囲内の敵にスロウ状態を付与する / 【T1】ダメージ +36、範囲 +2m / 【T3】2回バウンド、スピリットスケーリングが上昇する",
                    "scaling": {
                        "base": 70,
                        "spirit": 0.8
                    }
                },
                {
                    "name": "The Cube",
                    "translated": "ザ・キューブ",
                    "desc": "回復力の高い粘液キューブで対象を包み込み、ダメージを防いでHPリジェネを上昇させる。キューブの中にいる間、対象はあらゆるアクションを行えない。自身にも使用可能。 {g:citadel_binding:'Mantle'} を押すと早く脱出できる / 【T1】移動速度とスタミナ回復が上昇 / 【T2】HPリジェネ +25、継続時間 +1秒 / 【T3】使用時にすべてのデバフ（アルティメットを除く）を解除、クールダウン -25秒",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Puddle Punch",
                    "translated": "パドルパンチ",
                    "desc": "範囲内にいるユニットをパンチして{g:citadel_inline_attribute:'KnockUp'}する拳を、指定地点に生成するヒットした敵には{g:citadel_inline_attribute:'MeleeDamage'}を与え、{g:citadel_inline_attribute:'Slow'}を付与する自分と味方は、空中制御が上昇する / 【T2】範囲 +1.5m、ダメージ +30 / 【T3】クールダウン -12秒、近接強攻撃ダメージを与えるようになる",
                    "scaling": {
                        "base": 20,
                        "spirit": 0
                    }
                },
                {
                    "name": "Goo Ball",
                    "translated": "スライムボール",
                    "desc": "ヒット時にダメージを与え、スタンさせる大きな粘液ボールに変身する。変身中は、弾薬耐性とスピリット耐性が大幅に上昇する。ボールは壁に当たると跳ね返るほか、ダブルジャンプも可能 / 【T3】継続時間 +6秒、スタン継続時間 +0.3秒",
                    "scaling": {
                        "base": 110,
                        "spirit": 1
                    }
                }
            ]
        },
        {
            "id": "hero_viper",
            "original": "Vyper",
            "translated": "ヴァイパー",
            "image": "images/heroes/hero_viper.png",
            "description": "強力な武器（とそれに見合うほど危険な毒）を操るヴァイパーは、高い機動性を生かして敵の後衛へと突入し、真っ先に倒すべき敵を暗殺する。",
            "stats": {
                "maxHealth": 790,
                "bulletDamage": 6.58,
                "roundsPerSecond": 14.286,
                "bulletsPerShot": 1,
                "spiritScaling": 1.1,
                "clipSize": 24,
                "reloadTime": 1.6,
                "bulletSpeed": 411.5,
                "moveSpeed": 6.9,
                "sprintSpeed": 1.6,
                "stamina": 4,
                "lightMelee": 50,
                "heavyMelee": 116,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Screwjab Dagger",
                    "translated": "スクリュージャブダガー",
                    "desc": "{g:citadel_inline_attribute:'SpiritDamage'}を与え、{g:citadel_inline_attribute:'Slow'}を付与するダガーを投げる同じ対象に連続してダガーを命中させると、{g:citadel_inline_attribute:'SpiritDamage'}と{g:citadel_inline_attribute:'Slow'}がスタックする / 【T2】ヒット時：弾薬耐性-8%、スタックごとに弾薬耐性-5% / 【T3】ヒット時：チャージのクールダウンを55%回復",
                    "scaling": {
                        "base": 50,
                        "spirit": 0.8
                    }
                },
                {
                    "name": "Lethal Venom",
                    "translated": "リーサルポイズン",
                    "desc": "対象に致死性の毒を注入する。ディレイ後に毒が発動してスピリットダメージを与える。このダメージは対象の減少HPに応じて上昇するリーサルポイズンは石化によるダメージ無効を無視する / 【T2】回復阻害 -40%、クールダウン -8秒 / 【T3】弾薬がリーサルポイズンを蓄積するようになる",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Slither",
                    "translated": "スリザー",
                    "desc": "スライディング距離が延び、坂道をのぼりながらスライディングできるようになる。また、スライディング中のターンが早くなる / 【T3】スライド時：180バリアを5秒間獲得する",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Petrifying Bola",
                    "translated": "ペトリファイボーラ",
                    "desc": "爆発するボーラを投げる。爆発時、ボーラは範囲内の敵すべてに スロウを付与し、 ダメージを与える直撃した敵には 追加ダメージを与え、石化を付与する。石化状態のユニットはあらゆるダメージを受けないが、アクションが行えない / 【T3】石化継続時間 +1秒。範囲内の敵すべてを石化する",
                    "scaling": {
                        "base": 50,
                        "spirit": 0.744
                    }
                }
            ]
        },
        {
            "id": "hero_warden",
            "original": "Warden",
            "translated": "ウォーデン",
            "image": "images/heroes/hero_warden.png",
            "description": "ウォーデンは最前線に飛び込み、敵のアビリティを妨害して戦いを有利に進めることを得意とする。だが、彼にとっての勇敢な行動は、他者にしてみれば無謀そのものだ。慎重さが足りなければ、容易に窮地に追い込まれるだろう。",
            "stats": {
                "maxHealth": 815,
                "bulletDamage": 17.34,
                "roundsPerSecond": 3.8095,
                "bulletsPerShot": 1,
                "spiritScaling": 1.1,
                "clipSize": 17,
                "reloadTime": 2.914,
                "bulletSpeed": 290,
                "moveSpeed": 6.3,
                "sprintSpeed": 1.6,
                "stamina": 3,
                "lightMelee": 50,
                "heavyMelee": 116,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Alchemical Flask",
                    "translated": "アルケミカルフラスコ",
                    "desc": "ヒットした敵にダメージを与えて、その敵の武器ダメージと移動速度を低下させるフラスコを投げる / 【T1】ヒットした敵はスタミナが1減少 / 【T2】ダメージ +40、武器ダメージ-20% / 【T3】クールダウン -7秒、範囲 +2m-30% の発射速度を付与",
                    "scaling": {
                        "base": 60,
                        "spirit": 0.731203
                    }
                },
                {
                    "name": "Willpower",
                    "translated": "ウィルパワー",
                    "desc": "バリアを獲得し、移動速度が上昇する / 【T2】クールダウン -22秒、継続時間 +2秒 / 【T3】デバフ耐性+40%、バリアスケーリングが上昇する",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Binding Word",
                    "translated": "バインディングワード",
                    "desc": "敵ヒーローを呪う。逃走時間内に元いた位置から移動しなかった敵はダメージを受けて移動不能状態になる / 【T1】移動不能状態のヒーローに対して5秒間、Wardenが与える弾薬ダメージが +20 上昇する / 【T2】継続時間+0.75秒キャスト範囲+12m / 【T3】クールダウン -18秒敵は逃げるか移動不能状態になるまでサイレンス状態になる",
                    "scaling": {
                        "base": 110,
                        "spirit": 2.437344
                    }
                },
                {
                    "name": "Last Stand",
                    "translated": "ラストスタンド",
                    "desc": "2秒間のチャージ後、敵にダメージを与えて自身を回復するパルスを放つ。回復量は与ダメージ量に応じてスケールするラストスタンドの詠唱中は弾薬耐性とスピリット耐性が上昇する / 【T2】DPS +40.5クールダウン -30秒 / 【T3】継続時間 +3秒詠唱中アンストッパブル状態になり、+30%の耐性を付与",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                }
            ]
        },
        {
            "id": "hero_wraith",
            "original": "Wraith",
            "translated": "レイス",
            "image": "images/heroes/hero_wraith.png",
            "description": "標的を孤立させることで冷酷かつ効率的に排除する、一対一の戦闘におけるスペシャリスト。そして助けに来た敵に捕まる前に、瞬時にテレポートで姿を消してしまうのだ。",
            "stats": {
                "maxHealth": 740,
                "bulletDamage": 5.64,
                "roundsPerSecond": 10.582,
                "bulletsPerShot": 1,
                "spiritScaling": 1.1,
                "clipSize": 52,
                "reloadTime": 2.82,
                "bulletSpeed": 571.5,
                "moveSpeed": 7.2,
                "sprintSpeed": 1.6,
                "stamina": 3,
                "lightMelee": 50,
                "heavyMelee": 116,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Card Trick",
                    "translated": "カードトリック",
                    "desc": "武器ダメージを与えるとランダムなスートのトランプを生成する。それぞれのトランプは投げるとダメージを与え、スートに応じた効果を発生させる。トランプは敵またはクロスヘアの地点に向けて発射される オルトキャストで最初のカードを投げる / 【T2】ダメージ +40、スピリットスケーリングが上昇する / 【T3】すべてのスートを強化、ジョーカーの生成確率が上昇",
                    "scaling": {
                        "base": 45,
                        "spirit": 0.55
                    }
                },
                {
                    "name": "Project Mind",
                    "translated": "プロジェクトマインド",
                    "desc": "指定地点にテレポートする / 【T2】5秒間300バリアを獲得、バリア量はスピリットパワーでスケールする",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Full Auto",
                    "translated": "フルオート",
                    "desc": "一時的に発射速度を上昇させ、追加{g:citadel_inline_attribute:'SpiritDamage'}を与える / 【T2】発射速度 +10%、継続時間 +3秒 / 【T3】弾数が無制限になる、弾薬ごとのスピリットダメージのスケーリングが増加",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Telekinesis",
                    "translated": "テレキネシス",
                    "desc": "敵ヒーローを空中に持ち上げ、指定地点に向かって叩きつける / 【T3】デバフ継続時間 +1.5秒、叩きつけとキャスト範囲 +6m",
                    "scaling": {
                        "base": 100,
                        "spirit": 1
                    }
                }
            ]
        },
        {
            "id": "hero_yamato",
            "original": "Yamato",
            "translated": "ヤマト",
            "image": "images/heroes/hero_yamato.png",
            "description": "ヤマトは正確な斬撃を武器に、敵を圧倒する。だが強力な攻撃は隙が大きく、もしも外してしまえば致命的だ。ミスは許されない。",
            "stats": {
                "maxHealth": 740,
                "bulletDamage": 5.31,
                "roundsPerSecond": 2.381,
                "bulletsPerShot": 5,
                "spiritScaling": 1.1,
                "clipSize": 12,
                "reloadTime": 2.444,
                "bulletSpeed": 254,
                "moveSpeed": 8.2,
                "sprintSpeed": 1.6,
                "stamina": 3,
                "lightMelee": 55,
                "heavyMelee": 128,
                "bulletResist": 0,
                "spiritResist": 0
            },
            "abilities": [
                {
                    "name": "Power Slash",
                    "translated": "パワースラッシュ",
                    "desc": "1.4秒間の詠唱を行い、チャージ完了時に刀攻撃を放つ。ダメージは詠唱中に徐々に上昇する{g:citadel_binding:'Ability1'}か{g:citadel_binding:'Attack'}を押すと攻撃が早く発動するが、与えるダメージが減少する / 【T1】3秒間スロウ+40% / 【T2】アビリティクールダウン -4秒 / 【T3】キャスト範囲+8mダメージ+150、スピリットパワースケーリングが上昇",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Flying Slash",
                    "translated": "フライングスラッシュ",
                    "desc": "鉤縄を投げてヒットした敵に向かって飛びつき、対象に軽{g:citadel_inline_attribute:'MeleeDamage'}を与えてスロウを付与する / 【T2】キャスト範囲 +20m、 6秒間スピリットパワー +40を獲得する / 【T3】味方ヒーローに飛びつき可能になる、チャージを1回獲得する",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                },
                {
                    "name": "Crimson Slash",
                    "translated": "クリムゾンスラッシュ",
                    "desc": "目の前の敵を斬り、ダメージを与えて発射速度を低下させる。敵ヒーローにヒットするとHPを回復する / 【T1】ヒット時：4秒間、近接ダメージ 30% / 【T2】ヒーローヒット時：最大HPの+6%を回復 / 【T3】クールダウン -10秒、スピリットスケーリングが上昇する",
                    "scaling": {
                        "base": 55,
                        "spirit": 0.37
                    }
                },
                {
                    "name": "Shadow Transformation",
                    "translated": "トランスシャドウ",
                    "desc": "Yamatoが有する影の魂をその身に宿す。無敵状態での変身後、すべてのアビリティがリフレッシュされ、その挙動が60%速くなる。効果時間中、状態異常を無効化し、弾薬耐性とスピリット耐性が大幅に上昇するヒーローをキルするとHPを回復し、効果時間を延長する / 【T2】移動速度 +4m／秒、クールダウン 130 / 【T3】継続時間 +3秒間弾薬耐性 +30%スピリット耐性 +30%",
                    "scaling": {
                        "base": 0,
                        "spirit": 0
                    }
                }
            ]
        }
    ],
    items: {
        "weapon": [
            {
                "id": "upgrade_clip_size",
                "original": "Extended Magazine",
                "translated": "基礎拡張マガジン",
                "image": "images/items/upgrade_clip_size.png",
                "price": 800,
                "duration": "",
                "effects": [
                    "BonusClipSizePercent: 30"
                ],
                "stats": {
                    "BonusClipSizePercent": 30
                },
                "description": ""
            },
            {
                "id": "upgrade_close_range",
                "original": "Close Quarters",
                "translated": "クローズクォーター",
                "image": "images/items/upgrade_close_range.png",
                "price": 800,
                "duration": "",
                "effects": [
                    "CloseRangeBonusWeaponPower: 15",
                    "MeleeResistPercent: 10"
                ],
                "stats": {
                    "CloseRangeBonusWeaponPower": 15,
                    "MeleeResistPercent": 10
                },
                "description": "対象が近距離にいる場合、追加で武器ダメージを与える"
            },
            {
                "id": "upgrade_headshot_booster",
                "original": "Headshot Booster",
                "translated": "ヘッドショットブースター",
                "image": "images/items/upgrade_headshot_booster.png",
                "price": 800,
                "duration": "",
                "effects": [
                    "HeadShotBonusDamage: 55"
                ],
                "stats": {
                    "HeadShotBonusDamage": 55
                },
                "description": "敵ヒーローへの次のヘッドショットが、{g:citadel_inline_attribute:'BonusWeaponDamage'}を与える"
            },
            {
                "id": "upgrade_high_velocity_mag",
                "original": "High-Velocity Rounds",
                "translated": "ハイスピードラウンド",
                "image": "images/items/upgrade_high_velocity_mag.png",
                "price": 800,
                "duration": "",
                "effects": [
                    "BonusBulletSpeedPercent: 45",
                    "BaseAttackDamagePercent: 15"
                ],
                "stats": {
                    "BonusBulletSpeedPercent": 45,
                    "BaseAttackDamagePercent": 15
                },
                "description": ""
            },
            {
                "id": "upgrade_medic_bullets",
                "original": "Restorative Shot",
                "translated": "ヒーリングショット",
                "image": "images/items/upgrade_medic_bullets.png",
                "price": 800,
                "duration": "",
                "effects": [
                    "HealFromHero: 100",
                    "HealFromNPC: 40"
                ],
                "stats": {
                    "HealFromHero": 100,
                    "HealFromNPC": 40
                },
                "description": "次の弾薬がHPを回復する。回復量はヒットした対象に応じて変化する"
            },
            {
                "id": "upgrade_non_player_bonus",
                "original": "Monster Rounds",
                "translated": "モンスターラウンド",
                "image": "images/items/upgrade_non_player_bonus.png",
                "price": 800,
                "duration": "",
                "effects": [
                    "NonPlayerBonusWeaponPower: 35",
                    "NonPlayerBulletResist: 35",
                    "OutOfCombatHealthRegen: 1"
                ],
                "stats": {
                    "NonPlayerBonusWeaponPower": 35,
                    "NonPlayerBulletResist": 35,
                    "OutOfCombatHealthRegen": 1
                },
                "description": ""
            },
            {
                "id": "upgrade_rapid_rounds",
                "original": "Rapid Rounds",
                "translated": "ラピッドラウンド",
                "image": "images/items/upgrade_rapid_rounds.png",
                "price": 800,
                "duration": "",
                "effects": [
                    "BonusFireRate: 15"
                ],
                "stats": {
                    "BonusFireRate": 15
                },
                "description": ""
            },
            {
                "id": "weapon_upgrade_t1",
                "original": "weapon_upgrade_t1",
                "translated": "weapon_upgrade_t1",
                "image": "images/items/weapon_upgrade_t1.png",
                "price": 800,
                "duration": "",
                "effects": [],
                "stats": {},
                "description": ""
            },
            {
                "id": "upgrade_active_reload",
                "original": "Active Reload",
                "translated": "アクティブリロード",
                "image": "images/items/upgrade_active_reload.png",
                "price": 1600,
                "duration": 7,
                "effects": [
                    "BonusFireRate: 15",
                    "BonusMoveSpeed: 3m",
                    "BulletLifestealPercent: 12",
                    "BonusClipSizePercent: 10"
                ],
                "stats": {
                    "BonusFireRate": 15,
                    "BonusMoveSpeed": "3m",
                    "BulletLifestealPercent": 12,
                    "BonusClipSizePercent": 10
                },
                "description": "リロード中にハイライト部分で{g:citadel_binding:'Reload'}を押すとリロードが一瞬で完了する。また、効果発動時に発射速度と移動速度が上昇し、弾薬ライフスティールを獲得する"
            },
            {
                "id": "upgrade_blitz_bullets",
                "original": "Swift Striker",
                "translated": "スイフトストライカー",
                "image": "images/items/upgrade_blitz_bullets.png",
                "price": 1600,
                "duration": "",
                "effects": [
                    "BonusFireRate: 15",
                    "BonusSprintSpeed: 4m"
                ],
                "stats": {
                    "BonusFireRate": 15,
                    "BonusSprintSpeed": "4m"
                },
                "description": ""
            },
            {
                "id": "upgrade_crackshot",
                "original": "Mystic Shot",
                "translated": "ミスティックショット",
                "image": "images/items/upgrade_crackshot.png",
                "price": 1600,
                "duration": "",
                "effects": [
                    "ProcBonusMagicDamage: 109",
                    "SpiritPower: 14"
                ],
                "stats": {
                    "ProcBonusMagicDamage": 109,
                    "SpiritPower": 14
                },
                "description": "次の弾薬が追加でスピリットダメージを与える"
            },
            {
                "id": "upgrade_fleetfoot_boots",
                "original": "Fleetfoot",
                "translated": "フリートフット",
                "image": "images/items/upgrade_fleetfoot_boots.png",
                "price": 1600,
                "duration": 5,
                "effects": [
                    "SlowResistancePercent: 30",
                    "BulletResist: 12",
                    "ActiveBonusMoveSpeed: 3m"
                ],
                "stats": {
                    "SlowResistancePercent": 30,
                    "BulletResist": 12,
                    "ActiveBonusMoveSpeed": "3m"
                },
                "description": ""
            },
            {
                "id": "upgrade_headshot_booster2",
                "original": "Weakening Headshot",
                "translated": "イグゾーストヘッドショット",
                "image": "images/items/upgrade_headshot_booster2.png",
                "price": 1600,
                "duration": "",
                "effects": [
                    "BulletResistReduction: -7",
                    "BonusHealth: 125"
                ],
                "stats": {
                    "BulletResistReduction": -7,
                    "BonusHealth": 125
                },
                "description": "ヒーローにヘッドショットを命中させると、その対象の弾薬耐性を低下させる"
            },
            {
                "id": "upgrade_intensifying_clip",
                "original": "Intensifying Magazine",
                "translated": "連射強化マガジン",
                "image": "images/items/upgrade_intensifying_clip.png",
                "price": 1600,
                "duration": "",
                "effects": [
                    "BonusClipSizePercent: 40",
                    "BaseAttackDamagePercentAtMaxDuration: 55"
                ],
                "stats": {
                    "BonusClipSizePercent": 40,
                    "BaseAttackDamagePercentAtMaxDuration": 55
                },
                "description": "武器を連続で発射し続けることで武器ダメージが上昇する"
            },
            {
                "id": "upgrade_kinetic_sash",
                "original": "Kinetic Dash",
                "translated": "キネティックダッシュ",
                "image": "images/items/upgrade_kinetic_sash.png",
                "price": 1600,
                "duration": 7,
                "effects": [
                    "BonusFireRate: 20",
                    "Stamina: 1",
                    "BonusClipSize: 6"
                ],
                "stats": {
                    "BonusFireRate": 20,
                    "Stamina": 1,
                    "BonusClipSize": 6
                },
                "description": "ダッシュジャンプ時に発射速度が上昇し、追加弾数を獲得する。この効果は次にリロードするまで、最大で{s:AbilityDuration}秒間継続する"
            },
            {
                "id": "upgrade_long_range",
                "original": "Long Range",
                "translated": "ロングレンジ",
                "image": "images/items/upgrade_long_range.png",
                "price": 1600,
                "duration": "",
                "effects": [
                    "BonusAttackRangePercent: 8",
                    "LongRangeBonusWeaponPower: 30"
                ],
                "stats": {
                    "BonusAttackRangePercent": 8,
                    "LongRangeBonusWeaponPower": 30
                },
                "description": "対象と一定距離離れている場合、追加で武器ダメージを与える"
            },
            {
                "id": "upgrade_melee_charge",
                "original": "Melee Charge",
                "translated": "メレーチャージ",
                "image": "images/items/upgrade_melee_charge.png",
                "price": 1600,
                "duration": "",
                "effects": [
                    "MeleeDistanceScale: 30",
                    "BulletResist: 12",
                    "BonusHeavyMeleeDamage: 15"
                ],
                "stats": {
                    "MeleeDistanceScale": 30,
                    "BulletResist": 12,
                    "BonusHeavyMeleeDamage": 15
                },
                "description": "次の近接強攻撃で敵に与えるダメージが上昇する"
            },
            {
                "id": "upgrade_pristine_emblem",
                "original": "Opening Rounds",
                "translated": "オープニングラウンド",
                "image": "images/items/upgrade_pristine_emblem.png",
                "price": 1600,
                "duration": "",
                "effects": [
                    "BaseAttackDamagePercentBonus: 25",
                    "TechPower: 18"
                ],
                "stats": {
                    "BaseAttackDamagePercentBonus": 25,
                    "TechPower": 18
                },
                "description": "HPが{s:EnemyLifeThreshold}%を上回る敵に対する攻撃が追加で武器ダメージを与える"
            },
            {
                "id": "upgrade_rechargingbullets",
                "original": "Recharging Rush",
                "translated": "リチャージラッシュ",
                "image": "images/items/upgrade_rechargingbullets.png",
                "price": 1600,
                "duration": "",
                "effects": [
                    "AbilityCooldown: -12",
                    "BonusClipSizePercent: 30",
                    "BaseAttackDamagePercent: 30"
                ],
                "stats": {
                    "AbilityCooldown": -12,
                    "BonusClipSizePercent": 30,
                    "BaseAttackDamagePercent": 30
                },
                "description": "一定以上の{g:citadel_inline_attribute:'WeaponDamage'}を与えると、チャージを持つアビリティそれぞれの使用回数が1回分回復する"
            },
            {
                "id": "upgrade_slowing_bullets",
                "original": "Slowing Bullets",
                "translated": "スロウバレット",
                "image": "images/items/upgrade_slowing_bullets.png",
                "price": 1600,
                "duration": "",
                "effects": [
                    "BaseAttackDamagePercent: 30",
                    "SlowPercent: 20",
                    "GroundDashReductionPercent: -10"
                ],
                "stats": {
                    "BaseAttackDamagePercent": 30,
                    "SlowPercent": 20,
                    "GroundDashReductionPercent": -10
                },
                "description": "弾薬が命中した敵にスロウを蓄積するようになる"
            },
            {
                "id": "upgrade_split_shot",
                "original": "Split Shot",
                "translated": "スプリットショット",
                "image": "images/items/upgrade_split_shot.png",
                "price": 1600,
                "duration": "",
                "effects": [
                    "BulletSplitShot: 4",
                    "WeaponDamagePerStack: 8",
                    "AbilityCooldown: -8"
                ],
                "stats": {
                    "BulletSplitShot": 4,
                    "WeaponDamagePerStack": 8,
                    "AbilityCooldown": -8
                },
                "description": "武器がマルチショットするようになる2人以上のヒーローに命中させると、スタックする武器ダメージボーナスを獲得する同じ対象に複数回命中することはない"
            },
            {
                "id": "upgrade_tech_defense_shredders",
                "original": "Spirit Shredder Bullets",
                "translated": "スピリットシュレッダー",
                "image": "images/items/upgrade_tech_defense_shredders.png",
                "price": 1600,
                "duration": "",
                "effects": [
                    "TechArmorDamageReduction: -10",
                    "AbilityLifestealPercentHero: 10"
                ],
                "stats": {
                    "TechArmorDamageReduction": -10,
                    "AbilityLifestealPercentHero": 10
                },
                "description": "弾薬が対象のスピリット耐性を低下させるデバフを付与するようになる。自分と味方は、デバフ状態の対象に対してスピリットライフスティールを獲得する"
            },
            {
                "id": "upgrade_titan_round",
                "original": "Titanic Magazine",
                "translated": "巨大拡張マガジン",
                "image": "images/items/upgrade_titan_round.png",
                "price": 1600,
                "duration": "",
                "effects": [
                    "BaseAttackDamagePercent: 18",
                    "BonusClipSizePercent: 70"
                ],
                "stats": {
                    "BaseAttackDamagePercent": 18,
                    "BonusClipSizePercent": 70
                },
                "description": ""
            },
            {
                "id": "upgrade_weapon_backstabber",
                "original": "Stalker",
                "translated": "ストーカー",
                "image": "images/items/upgrade_weapon_backstabber.png",
                "price": 1600,
                "duration": 5,
                "effects": [
                    "BulletResistReduction: -10",
                    "BonusMoveSpeed: 2m",
                    "DPS: 20",
                    "ReduceFootstepSound: -50"
                ],
                "stats": {
                    "BulletResistReduction": -10,
                    "BonusMoveSpeed": "2m",
                    "DPS": 20,
                    "ReduceFootstepSound": -50
                },
                "description": "近距離で{g:citadel_inline_attribute:'WeaponDamage'}を与えると傷を付与し、{g:citadel_inline_attribute:'BonusMoveSpeed'}を獲得する傷状態の敵は{g:citadel_inline_attribute:'SpiritDPS'}を受け、{g:citadel_inline_attribute:'BulletResist'}が低下する。また、壁越しにその姿を視認できる"
            },
            {
                "id": "upgrade_berserker",
                "original": "Berserker",
                "translated": "バーサーカー",
                "image": "images/items/upgrade_berserker.png",
                "price": 3200,
                "duration": "",
                "effects": [
                    "WeaponPowerPerStack: 3",
                    "BulletResist: 8",
                    "MaxStacks: 8"
                ],
                "stats": {
                    "WeaponPowerPerStack": 3,
                    "BulletResist": 8,
                    "MaxStacks": 8
                },
                "description": "継続的にダメージを受けると武器ダメージが上昇する"
            },
            {
                "id": "upgrade_blood_tribute",
                "original": "Blood Tribute",
                "translated": "ブラッドトリビュート",
                "image": "images/items/upgrade_blood_tribute.png",
                "price": 3200,
                "duration": "",
                "effects": [
                    "HealthDrainedPerSecond: -20",
                    "BonusFireRate: 30",
                    "TechResist: 14",
                    "OutOfCombatHealthRegen: 8"
                ],
                "stats": {
                    "HealthDrainedPerSecond": -20,
                    "BonusFireRate": 30,
                    "TechResist": 14,
                    "OutOfCombatHealthRegen": 8
                },
                "description": "切り替え：継続的にHPを捧げることで、{g:citadel_inline_attribute:'FireRate'}とデバフ耐性、移動速度が上昇する"
            },
            {
                "id": "upgrade_bullet_armor_reduction_aura",
                "original": "Hunter's Aura",
                "translated": "ハンターオーラ",
                "image": "images/items/upgrade_bullet_armor_reduction_aura.png",
                "price": 3200,
                "duration": "",
                "effects": [
                    "FireRateSlow: 5",
                    "BulletArmorReduction: -6",
                    "BonusHealth: 125",
                    "BonusSprintSpeed: 3m"
                ],
                "stats": {
                    "FireRateSlow": 5,
                    "BulletArmorReduction": -6,
                    "BonusHealth": 125,
                    "BonusSprintSpeed": "3m"
                },
                "description": "付近にいる敵の弾薬耐性と発射速度を低下させる。付近にいる敵が1人だけの場合、この効果量は2倍になる"
            },
            {
                "id": "upgrade_bulletshredimbue",
                "original": "Ballistic Enchantment",
                "translated": "バリスティックエンチャント",
                "image": "images/items/upgrade_bulletshredimbue.png",
                "price": 3200,
                "duration": 14,
                "effects": [
                    "WeaponPowerPerStack: 15",
                    "TechRangeMultiplier: 15",
                    "TechRadiusMultiplier: 15"
                ],
                "stats": {
                    "WeaponPowerPerStack": 15,
                    "TechRangeMultiplier": 15,
                    "TechRadiusMultiplier": 15
                },
                "description": "アビリティに射程増加効果を付与する。そのアビリティでダメージを与えると、異なるヒーローに命中するたびに武器ダメージが増加する。非ヒーローに対する効果は減少する"
            },
            {
                "id": "upgrade_burst_fire",
                "original": "Burst Fire",
                "translated": "バーストファイア",
                "image": "images/items/upgrade_burst_fire.png",
                "price": 3200,
                "duration": 4.5,
                "effects": [
                    "SlideScale: 50",
                    "ActivatedFireRate: 15",
                    "BonusMoveSpeed: 1.5m",
                    "BonusFireRate: 10",
                    "AbilityCooldown: -1"
                ],
                "stats": {
                    "SlideScale": 50,
                    "ActivatedFireRate": 15,
                    "BonusMoveSpeed": "1.5m",
                    "BonusFireRate": 10,
                    "AbilityCooldown": -1
                },
                "description": "弾薬が敵ヒーローにヒットすると、発射速度と移動速度が一時的に上昇する"
            },
            {
                "id": "upgrade_chain_lightning",
                "original": "Tesla Bullets",
                "translated": "テスラバレット",
                "image": "images/items/upgrade_chain_lightning.png",
                "price": 3200,
                "duration": "",
                "effects": [
                    "DamagePerChain: 25",
                    "BonusPerChain: 25"
                ],
                "stats": {
                    "DamagePerChain": 25,
                    "BonusPerChain": 25
                },
                "description": "弾薬が一定確率で、対象に感電ダメージを与える。感電ダメージは付近にいる敵に連鎖する"
            },
            {
                "id": "upgrade_close_quarter_combat",
                "original": "Point Blank",
                "translated": "ポイントブランク",
                "image": "images/items/upgrade_close_quarter_combat.png",
                "price": 3200,
                "duration": "",
                "effects": [
                    "CloseRangeBonusWeaponPower: 30",
                    "MeleeResistPercent: 30",
                    "BonusHealth: 150",
                    "SlowPercent: 5"
                ],
                "stats": {
                    "CloseRangeBonusWeaponPower": 30,
                    "MeleeResistPercent": 30,
                    "BonusHealth": 150,
                    "SlowPercent": 5
                },
                "description": "対象が近距離にいる場合、武器ダメージが上昇し、弾薬がスロウを付与する"
            },
            {
                "id": "upgrade_dps_aura",
                "original": "Heroic Aura",
                "translated": "ヒロイックオーラ",
                "image": "images/items/upgrade_dps_aura.png",
                "price": 3200,
                "duration": 7,
                "effects": [
                    "ActiveBonusMoveSpeed: 3m",
                    "BonusFireRate: 34",
                    "BulletResist: 10",
                    "ActiveRadius: 15m"
                ],
                "stats": {
                    "ActiveBonusMoveSpeed": "3m",
                    "BonusFireRate": 34,
                    "BulletResist": 10,
                    "ActiveRadius": "15m"
                },
                "description": "付近にいる味方に弾薬耐性を付与する"
            },
            {
                "id": "upgrade_express_shot",
                "original": "Express Shot",
                "translated": "エクスプレスショット",
                "image": "images/items/upgrade_express_shot.png",
                "price": 3200,
                "duration": "",
                "effects": [
                    "ProcBaseAttackDamagePercent: 75",
                    "ProcBaseAttackDamagePercentAltFire: 25",
                    "BonusBulletSpeedPercent: 45",
                    "BaseAttackDamagePercent: 15"
                ],
                "stats": {
                    "ProcBaseAttackDamagePercent": 75,
                    "ProcBaseAttackDamagePercentAltFire": 25,
                    "BonusBulletSpeedPercent": 45,
                    "BaseAttackDamagePercent": 15
                },
                "description": "次の攻撃時に素早く2回連続で射撃し、ダメージと弾速が上昇する。この攻撃は追加で弾薬を消費する"
            },
            {
                "id": "upgrade_headhunter",
                "original": "Headhunter",
                "translated": "ヘッドハンター",
                "image": "images/items/upgrade_headhunter.png",
                "price": 3200,
                "duration": "",
                "effects": [
                    "HeadShotBonusDamage: 75",
                    "HealPercentPerHeadshot: 4",
                    "AbilityCooldown: -3"
                ],
                "stats": {
                    "HeadShotBonusDamage": 75,
                    "HealPercentPerHeadshot": 4,
                    "AbilityCooldown": -3
                },
                "description": "敵ヒーローへの次のヘッドショットが、{g:citadel_inline_attribute:'BonusWeaponDamage'}を与え、自身を{g:citadel_inline_attribute:'Heal'}し、{g:citadel_inline_attribute:'BonusMoveSpeed'}を短時間付与する"
            },
            {
                "id": "upgrade_hollow_point_rounds",
                "original": "Hollow Point",
                "translated": "ホロウポイント",
                "image": "images/items/upgrade_hollow_point_rounds.png",
                "price": 3200,
                "duration": "",
                "effects": [
                    "BulletArmorReduction: -12",
                    "BonusHealth: 150",
                    "BaseAttackDamagePercent: 25"
                ],
                "stats": {
                    "BulletArmorReduction": -12,
                    "BonusHealth": 150,
                    "BaseAttackDamagePercent": 25
                },
                "description": "自身のHPが{s:LifeThreshold}%を上回っている間、追加武器ダメージを与え、弾薬が敵の弾薬耐性を低下させる"
            },
            {
                "id": "upgrade_non_player_bonus_sacrifice",
                "original": "Cultist Sacrifice",
                "translated": "サクリファイス",
                "image": "images/items/upgrade_non_player_bonus_sacrifice.png",
                "price": 3200,
                "duration": 160,
                "effects": [
                    "TechRadiusMultiplier: 40",
                    "TechRangeMultiplier: 40",
                    "BaseAttackDamagePercent: 47",
                    "BonusHealth: 300",
                    "NonPlayerBonusWeaponPower: 30",
                    "NonPlayerBulletResist: 30"
                ],
                "stats": {
                    "TechRadiusMultiplier": 40,
                    "TechRangeMultiplier": 40,
                    "BaseAttackDamagePercent": 47,
                    "BonusHealth": 300,
                    "NonPlayerBonusWeaponPower": 30,
                    "NonPlayerBulletResist": 30
                },
                "description": "敵NPC1体を対象にする。対象をキルして{s:BonusSoulsPct}%の追加ソウルを獲得し、長時間持続する強力なバフを獲得する"
            },
            {
                "id": "upgrade_reinforcing_casings",
                "original": "Escalating Resilience",
                "translated": "エスカレートレジリエンス",
                "image": "images/items/upgrade_reinforcing_casings.png",
                "price": 3200,
                "duration": "",
                "effects": [
                    "BulletResistPerStack: 2",
                    "MaxArmorStacks: 20",
                    "BonusClipSizePercent: 30",
                    "BonusHealth: 125",
                    "WeaponPower: 10"
                ],
                "stats": {
                    "BulletResistPerStack": 2,
                    "MaxArmorStacks": 20,
                    "BonusClipSizePercent": 30,
                    "BonusHealth": 125,
                    "WeaponPower": 10
                },
                "description": "弾薬が敵ヒーローにヒットすると、弾薬耐性を獲得する。1回の射撃で複数ヒットしても1スタックしか獲得しない"
            },
            {
                "id": "upgrade_sharpshooter",
                "original": "Sharpshooter",
                "translated": "シャープシューター",
                "image": "images/items/upgrade_sharpshooter.png",
                "price": 3200,
                "duration": "",
                "effects": [
                    "LongRangeBonusWeaponPower: 40",
                    "BonusAttackRangePercent: 10"
                ],
                "stats": {
                    "LongRangeBonusWeaponPower": 40,
                    "BonusAttackRangePercent": 10
                },
                "description": "対象と一定距離離れている場合、追加で武器ダメージを与える"
            },
            {
                "id": "upgrade_spellslinger_headshots",
                "original": "Spirit Rend",
                "translated": "スピリットキラー",
                "image": "images/items/upgrade_spellslinger_headshots.png",
                "price": 3200,
                "duration": "",
                "effects": [
                    "MagicResistReduction: -5",
                    "AbilityLifestealPercentHero: 10",
                    "TechArmorDamageReduction: -10"
                ],
                "stats": {
                    "MagicResistReduction": -5,
                    "AbilityLifestealPercentHero": 10,
                    "TechArmorDamageReduction": -10
                },
                "description": ""
            },
            {
                "id": "upgrade_thermal_detonator",
                "original": "Alchemical Fire",
                "translated": "アルケミカルファイア",
                "image": "images/items/upgrade_thermal_detonator.png",
                "price": 3200,
                "duration": 5,
                "effects": [
                    "DPS: 30",
                    "DPSMax: 30",
                    "BulletArmorReduction: -8",
                    "SpiritPower: 15"
                ],
                "stats": {
                    "DPS": 30,
                    "DPSMax": 30,
                    "BulletArmorReduction": -8,
                    "SpiritPower": 15
                },
                "description": "接触時に爆発する瓶を投げる。生成されたエリア内にいる敵には増加するスピリットダメージを毎秒与え続け、弾薬耐性を低下させる非ヒーローには効果が{s:NonHeroReductionPercent}%減少する"
            },
            {
                "id": "upgrade_toxic_bullets",
                "original": "Toxic Bullets",
                "translated": "トキシックバレット",
                "image": "images/items/upgrade_toxic_bullets.png",
                "price": 3200,
                "duration": "",
                "effects": [
                    "HealAmpReceivePenaltyPercent: -30",
                    "HealAmpRegenPenaltyPercent: -30",
                    "DotHealthPercent: 0.7"
                ],
                "stats": {
                    "HealAmpReceivePenaltyPercent": -30,
                    "HealAmpRegenPenaltyPercent": -30,
                    "DotHealthPercent": 0.7
                },
                "description": "弾薬が敵に出血を蓄積するようになる。出血状態の敵は時間経過で最大HPの一定割合を失う。また、出血状態の対象に回復阻害を付与する"
            },
            {
                "id": "upgrade_weighted_shots",
                "original": "Weighted Shots",
                "translated": "ヘヴィショット",
                "image": "images/items/upgrade_weighted_shots.png",
                "price": 3200,
                "duration": "",
                "effects": [
                    "StatusResistancePercent: 10",
                    "BaseAttackDamagePercent: 35"
                ],
                "stats": {
                    "StatusResistancePercent": 10,
                    "BaseAttackDamagePercent": 35
                },
                "description": "弾薬が命中した敵にスロウを蓄積するようになる"
            },
            {
                "id": "upgrade_aprounds",
                "original": "Armor Piercing Rounds",
                "translated": "アーマーピアッサー",
                "image": "images/items/upgrade_aprounds.png",
                "price": 6400,
                "duration": "",
                "effects": [
                    "BonusBulletSpeedPercent: 55",
                    "ProcChance: 20",
                    "BaseAttackDamagePercent: 30"
                ],
                "stats": {
                    "BonusBulletSpeedPercent": 55,
                    "ProcChance": 20,
                    "BaseAttackDamagePercent": 30
                },
                "description": "一定確率で弾薬が強化される。強化された弾薬は回避できず、敵を貫通して弾薬耐性を無視する"
            },
            {
                "id": "upgrade_banshee_slugs",
                "original": "Crippling Headshot",
                "translated": "クリップリングショット",
                "image": "images/items/upgrade_banshee_slugs.png",
                "price": 6400,
                "duration": "",
                "effects": [
                    "MagicResistReduction: -12",
                    "BulletResistReduction: -12",
                    "HealAmpReceivePenaltyPercent: -25",
                    "HealAmpRegenPenaltyPercent: -25",
                    "BonusHealth: 150"
                ],
                "stats": {
                    "MagicResistReduction": -12,
                    "BulletResistReduction": -12,
                    "HealAmpReceivePenaltyPercent": -25,
                    "HealAmpRegenPenaltyPercent": -25,
                    "BonusHealth": 150
                },
                "description": ""
            },
            {
                "id": "upgrade_capacitor",
                "original": "Capacitor",
                "translated": "コンデンサー",
                "image": "images/items/upgrade_capacitor.png",
                "price": 6400,
                "duration": "",
                "effects": [
                    "ProcChance: 5",
                    "BonusFireRate: 15",
                    "DamagePerChain: 25",
                    "AbilityCooldown: -32",
                    "Damage: 25"
                ],
                "stats": {
                    "ProcChance": 5,
                    "BonusFireRate": 15,
                    "DamagePerChain": 25,
                    "AbilityCooldown": -32,
                    "Damage": 25
                },
                "description": "{g:citadel_inline_attribute:'SpiritIcon'}ダメージを与える発射物を射出する。発射物は時間経過で回復する強力なスロウを付与する。また、対象はスタミナが使用できなくなり、移動に関連するアイテムやアビリティがサイレンス状態になる"
            },
            {
                "id": "upgrade_cloaking_device_active",
                "original": "Shadow Weave",
                "translated": "シャドウウィーブ",
                "image": "images/items/upgrade_cloaking_device_active.png",
                "price": 6400,
                "duration": 18,
                "effects": [
                    "OutOfCombatHealthRegen: 20",
                    "AmbushBonusFireRate: 35",
                    "AmbushBonusMeleeDamage: 30",
                    "AmbushBonusTechPower: 35",
                    "AbilityCooldown: -17"
                ],
                "stats": {
                    "OutOfCombatHealthRegen": 20,
                    "AmbushBonusFireRate": 35,
                    "AmbushBonusMeleeDamage": 30,
                    "AmbushBonusTechPower": 35,
                    "AbilityCooldown": -17
                },
                "description": "ステルス状態になる。ダメージを受けるとステルス状態が一時的に解除される"
            },
            {
                "id": "upgrade_critshot",
                "original": "Lucky Shot",
                "translated": "ラッキーショット",
                "image": "images/items/upgrade_critshot.png",
                "price": 6400,
                "duration": "",
                "effects": [
                    "CritDamagePercent: 30",
                    "BonusClipSizePercent: 40",
                    "ProcChance: 5"
                ],
                "stats": {
                    "CritDamagePercent": 30,
                    "BonusClipSizePercent": 40,
                    "ProcChance": 5
                },
                "description": "一定確率で弾薬が強化される。強化弾薬はヒット時に追加で武器ダメージを与える追加ダメージにはクリティカルが乗らない"
            },
            {
                "id": "upgrade_crushing_fists",
                "original": "Crushing Fists",
                "translated": "クラッシュフィスト",
                "image": "images/items/upgrade_crushing_fists.png",
                "price": 6400,
                "duration": "",
                "effects": [
                    "MeleeDistanceScale: 40",
                    "BulletResist: 12",
                    "BonusMeleeDamagePercent: 15",
                    "BulletResistReduction: -4",
                    "BonusHeavyMeleeDamage: 15"
                ],
                "stats": {
                    "MeleeDistanceScale": 40,
                    "BulletResist": 12,
                    "BonusMeleeDamagePercent": 15,
                    "BulletResistReduction": -4,
                    "BonusHeavyMeleeDamage": 15
                },
                "description": "{g:citadel_inline_attribute:'MeleeDamage'}を与えると弾数を回復し、スタックする弾薬耐性デバフを1つ付与する。近接強攻撃は2スタック付与するスタックが最大数に達すると、対象はスタン状態になる"
            },
            {
                "id": "upgrade_enchanted_holsters",
                "original": "Spellslinger",
                "translated": "スペルスリンガー",
                "image": "images/items/upgrade_enchanted_holsters.png",
                "price": 6400,
                "duration": "",
                "effects": [
                    "ReloadSpeedMultipler: -3",
                    "BonusFireRate: 6",
                    "CooldownReduction: 8"
                ],
                "stats": {
                    "ReloadSpeedMultipler": -3,
                    "BonusFireRate": 6,
                    "CooldownReduction": 8
                },
                "description": "戦闘中にアビリティやアイテムを発動するたび、発射速度とリロード速度を上昇させるスタック性のバフを1つ獲得するスタックを獲得するたびに継続時間が更新される"
            },
            {
                "id": "upgrade_fervor",
                "original": "Frenzy",
                "translated": "フレンジー",
                "image": "images/items/upgrade_fervor.png",
                "price": 6400,
                "duration": "",
                "effects": [
                    "FervorFireRate: 20",
                    "FervorMovespeed: 3m",
                    "FervorTechResist: 20"
                ],
                "stats": {
                    "FervorFireRate": 20,
                    "FervorMovespeed": "3m",
                    "FervorTechResist": 20
                },
                "description": ""
            },
            {
                "id": "upgrade_glass_cannon",
                "original": "Glass Cannon",
                "translated": "グラスキャノン",
                "image": "images/items/upgrade_glass_cannon.png",
                "price": 6400,
                "duration": "",
                "effects": [
                    "FireRatePerKill: 8",
                    "BaseAttackDamagePercent: 60"
                ],
                "stats": {
                    "FireRatePerKill": 8,
                    "BaseAttackDamagePercent": 60
                },
                "description": "ヒーローをキルするたび、永続的に発射速度が上昇する（最大{s:MaxStacks}スタック）。デスするとスタックを1つ失う"
            },
            {
                "id": "upgrade_proc_silence",
                "original": "Silencer",
                "translated": "サイレンサー",
                "image": "images/items/upgrade_proc_silence.png",
                "price": 6400,
                "duration": "",
                "effects": [
                    "TechDamageReduction: -15",
                    "SilenceDuration: 1.25",
                    "TechResist: 15"
                ],
                "stats": {
                    "TechDamageReduction": -15,
                    "SilenceDuration": 1.25,
                    "TechResist": 15
                },
                "description": "弾薬がサイレンスを蓄積するようになる。サイレンス状態が終了した後の{s:ImmunityDuration}秒間、対象は蓄積の効果を受けない"
            },
            {
                "id": "upgrade_ricochet",
                "original": "Ricochet",
                "translated": "リコシェ",
                "image": "images/items/upgrade_ricochet.png",
                "price": 6400,
                "duration": "",
                "effects": [
                    "RicochetDamagePercent: 15",
                    "BonusFireRate: 25"
                ],
                "stats": {
                    "RicochetDamagePercent": 15,
                    "BonusFireRate": 25
                },
                "description": "対象にヒットした弾薬が、付近にいる敵に跳弾する。跳弾は弾薬ヒット時効果を発生させ、元ダメージに応じたダメージを与える"
            },
            {
                "id": "upgrade_tech_overflow",
                "original": "Spiritual Overflow",
                "translated": "スピリットオーバーフロー",
                "image": "images/items/upgrade_tech_overflow.png",
                "price": 6400,
                "duration": 15,
                "effects": [
                    "BonusAbilityDurationPercent: 15",
                    "BonusSpirit: 30",
                    "BonusFireRate: 20",
                    "AbilityLifestealPercentHero: 15"
                ],
                "stats": {
                    "BonusAbilityDurationPercent": 15,
                    "BonusSpirit": 30,
                    "BonusFireRate": 20,
                    "AbilityLifestealPercentHero": 15
                },
                "description": "敵ヒーローに弾薬をヒットさせ続けると、発射速度とスピリットパワーとアビリティ継続時間を獲得する"
            },
            {
                "id": "upgrade_eldritch_shot",
                "original": "Haunting Shot",
                "translated": "ホーンテッドショット",
                "image": "images/items/upgrade_eldritch_shot.png",
                "price": "Legendary",
                "duration": "",
                "effects": [
                    "GroundDashReductionPercent: -10",
                    "HealthPctDamage: 5",
                    "MovementSpeedSlow: 10",
                    "HealAmpReceivePenaltyPercent: -15",
                    "HealAmpRegenPenaltyPercent: -15",
                    "OutgoingDamagePenaltyPercent: -15",
                    "AbilityCooldown: -1"
                ],
                "stats": {
                    "GroundDashReductionPercent": -10,
                    "HealthPctDamage": 5,
                    "MovementSpeedSlow": 10,
                    "HealAmpReceivePenaltyPercent": -15,
                    "HealAmpRegenPenaltyPercent": -15,
                    "OutgoingDamagePenaltyPercent": -15,
                    "AbilityCooldown": -1
                },
                "description": "次に放たれる弾薬が、敵の与ダメージ、回復効果、移動速度を低下させる強力なデバフを付与する。さらに、対象の現在のHPに応じた{g:citadel_inline_attribute:'BonusSpiritDamage'}も与える。この弾薬はサイズが大きく、対象を貫通する"
            },
            {
                "id": "upgrade_infinite_rounds",
                "original": "Infinite Rounds",
                "translated": "インフィニットラウンド",
                "image": "images/items/upgrade_infinite_rounds.png",
                "price": "Legendary",
                "duration": "",
                "effects": [
                    "BonusBulletSpeedPercent: 100",
                    "BonusFireRate: 20",
                    "ProcChance: 10"
                ],
                "stats": {
                    "BonusBulletSpeedPercent": 100,
                    "BonusFireRate": 20,
                    "ProcChance": 10
                },
                "description": "弾数が無限になる"
            },
            {
                "id": "upgrade_runed_gauntlets",
                "original": "Runed Gauntlets",
                "translated": "ルーンガントレット",
                "image": "images/items/upgrade_runed_gauntlets.png",
                "price": "Legendary",
                "duration": "",
                "effects": [
                    "MeleeDistanceScale: 50",
                    "MeleeResistPercent: 15",
                    "CooldownReductionOnHitPct: 6"
                ],
                "stats": {
                    "MeleeDistanceScale": 50,
                    "MeleeResistPercent": 15,
                    "CooldownReductionOnHitPct": 6
                },
                "description": "近接強攻撃を命中させるたびに、クールダウンが短縮される"
            }
        ],
        "vitality": [
            {
                "id": "upgrade_endurance",
                "original": "Extra Regen",
                "translated": "エクストラリジェネ",
                "image": "images/items/upgrade_endurance.png",
                "price": 800,
                "duration": "",
                "effects": [
                    "BonusHealthRegen: 9"
                ],
                "stats": {
                    "BonusHealthRegen": 9
                },
                "description": ""
            },
            {
                "id": "upgrade_health",
                "original": "Extra Health",
                "translated": "エクストラヘルス",
                "image": "images/items/upgrade_health.png",
                "price": 800,
                "duration": "",
                "effects": [
                    "BonusHealth: 115"
                ],
                "stats": {
                    "BonusHealth": 115
                },
                "description": ""
            },
            {
                "id": "upgrade_health_stimpak",
                "original": "Healing Rite",
                "translated": "ヒーリングリチュアル",
                "image": "images/items/upgrade_health_stimpak.png",
                "price": 800,
                "duration": "",
                "effects": [
                    "TotalHealthRegen: 600",
                    "BonusSprintSpeed: 6m",
                    "AbilityCooldown: -60"
                ],
                "stats": {
                    "TotalHealthRegen": 600,
                    "BonusSprintSpeed": "6m",
                    "AbilityCooldown": -60
                },
                "description": "指定した対象にリジェネとスプリント速度を付与する。敵プレイヤーかオブジェクトからダメージを受けると効果が切れる。このアイテムはセルフキャストできる"
            },
            {
                "id": "upgrade_improved_stamina",
                "original": "Extra Stamina",
                "translated": "エクストラスタミナ",
                "image": "images/items/upgrade_improved_stamina.png",
                "price": 800,
                "duration": "",
                "effects": [
                    "Stamina: 1",
                    "StaminaCooldownReduction: 14"
                ],
                "stats": {
                    "Stamina": 1,
                    "StaminaCooldownReduction": 14
                },
                "description": ""
            },
            {
                "id": "upgrade_lifestrike_gauntlets",
                "original": "Melee Lifesteal",
                "translated": "メレーライフスティール",
                "image": "images/items/upgrade_lifestrike_gauntlets.png",
                "price": 800,
                "duration": "",
                "effects": [
                    "BonusMeleeDamagePercent: 12",
                    "AbilityCooldown: -6"
                ],
                "stats": {
                    "BonusMeleeDamagePercent": 12,
                    "AbilityCooldown": -6
                },
                "description": "次の近接攻撃がHPを回復する非ヒーローに対しては回復量が{s:NonHeroHealPct}%に低下する近接弱攻撃の場合はクールダウンが{s:LightMeleeCooldownMult}倍になる"
            },
            {
                "id": "upgrade_melee_rebuttal",
                "original": "Rebuttal",
                "translated": "プロテスト",
                "image": "images/items/upgrade_melee_rebuttal.png",
                "price": 800,
                "duration": "",
                "effects": [
                    "ParryCooldownReduction: 0.5",
                    "MeleeResistPercent: 22",
                    "BonusDamagePercent: 20",
                    "BonusHealth: 150"
                ],
                "stats": {
                    "ParryCooldownReduction": 0.5,
                    "MeleeResistPercent": 22,
                    "BonusDamagePercent": 20,
                    "BonusHealth": 150
                },
                "description": "敵ヒーローへのパリィに成功すると、パリィしたダメージ分、自身のHPを回復し、対象にそのダメージを与える。また、一時的にダメージが上昇する"
            },
            {
                "id": "upgrade_sprint_booster",
                "original": "Sprint Boots",
                "translated": "スプリントブーツ",
                "image": "images/items/upgrade_sprint_booster.png",
                "price": 800,
                "duration": "",
                "effects": [
                    "OutOfCombatHealthRegen: 8",
                    "BonusSprintSpeed: 12m"
                ],
                "stats": {
                    "OutOfCombatHealthRegen": 8,
                    "BonusSprintSpeed": "12m"
                },
                "description": ""
            },
            {
                "id": "upgrade_cardio_calibrator",
                "original": "Enduring Speed",
                "translated": "ウィングブーツ",
                "image": "images/items/upgrade_cardio_calibrator.png",
                "price": 1600,
                "duration": "",
                "effects": [
                    "SlowResistancePercent: 30",
                    "BonusMoveSpeed: 2m",
                    "OutOfCombatHealthRegen: 8"
                ],
                "stats": {
                    "SlowResistancePercent": 30,
                    "BonusMoveSpeed": "2m",
                    "OutOfCombatHealthRegen": 8
                },
                "description": "敵による移動速度ペナルティの効果を軽減する"
            },
            {
                "id": "upgrade_debuff_reducer",
                "original": "Debuff Reducer",
                "translated": "デバフリデューサー",
                "image": "images/items/upgrade_debuff_reducer.png",
                "price": 1600,
                "duration": "",
                "effects": [
                    "StatusResistancePercent: 15"
                ],
                "stats": {
                    "StatusResistancePercent": 15
                },
                "description": "付与された状態異常の継続時間が短くなる"
            },
            {
                "id": "upgrade_guardian_ward",
                "original": "Guardian Ward",
                "translated": "ガーディアンワード",
                "image": "images/items/upgrade_guardian_ward.png",
                "price": 1600,
                "duration": "",
                "effects": [
                    "TechRangeMultiplier: 12",
                    "TechRadiusMultiplier: 12",
                    "GuardianWardCombatBarrier: 125",
                    "ChannelMoveSpeed: 2",
                    "AbilityCooldown: -12"
                ],
                "stats": {
                    "TechRangeMultiplier": 12,
                    "TechRadiusMultiplier": 12,
                    "GuardianWardCombatBarrier": 125,
                    "ChannelMoveSpeed": 2,
                    "AbilityCooldown": -12
                },
                "description": "指定した対象にバリアを付与し、一時的に移動速度を上昇させるこのアイテムはセルフキャストできる自分以外に使用すると、クールダウンが半減する"
            },
            {
                "id": "upgrade_healbane",
                "original": "Healbane",
                "translated": "ヒールベイン",
                "image": "images/items/upgrade_healbane.png",
                "price": 1600,
                "duration": 8,
                "effects": [
                    "HealAmpRegenPenaltyPercent: -20",
                    "HealAmpReceivePenaltyPercent: -20",
                    "TechPower: 11",
                    "HealOnKill: 125"
                ],
                "stats": {
                    "HealAmpRegenPenaltyPercent": -20,
                    "HealAmpReceivePenaltyPercent": -20,
                    "TechPower": 11,
                    "HealOnKill": 125
                },
                "description": "スピリットダメージを与えると回復阻害を付与する。この効果を受けている敵ヒーローがデスすると、HPを大幅に回復する"
            },
            {
                "id": "upgrade_healing_booster",
                "original": "Healing Booster",
                "translated": "ヒーリングブースター",
                "image": "images/items/upgrade_healing_booster.png",
                "price": 1600,
                "duration": "",
                "effects": [
                    "HealAmpRegenPercent: 15",
                    "HealAmpCastPercent: 15",
                    "BonusHealthRegen: 9"
                ],
                "stats": {
                    "HealAmpRegenPercent": 15,
                    "HealAmpCastPercent": 15,
                    "BonusHealthRegen": 9
                },
                "description": "自身の回復効果が上昇する"
            },
            {
                "id": "upgrade_health_stealing_magic",
                "original": "Spirit Lifesteal",
                "translated": "スピリットライフスティール",
                "image": "images/items/upgrade_health_stealing_magic.png",
                "price": 1600,
                "duration": "",
                "effects": [
                    "AbilityLifestealPercentHero: 14",
                    "BonusHealth: 80",
                    "TechPower: 9"
                ],
                "stats": {
                    "AbilityLifestealPercentHero": 14,
                    "BonusHealth": 80,
                    "TechPower": 9
                },
                "description": ""
            },
            {
                "id": "upgrade_magic_shield",
                "original": "Enchanter's Emblem",
                "translated": "妖術師の紋章",
                "image": "images/items/upgrade_magic_shield.png",
                "price": 1600,
                "duration": "",
                "effects": [
                    "TechResist: 13",
                    "OutOfCombatHealthRegen: 3",
                    "TechPower: 15",
                    "CooldownReduction: 7"
                ],
                "stats": {
                    "TechResist": 13,
                    "OutOfCombatHealthRegen": 3,
                    "TechPower": 15,
                    "CooldownReduction": 7
                },
                "description": "自身のHPが{s:LifeThreshold}%を上回っている間、ボーナス{g:citadel_inline_attribute:'Spirit'}を獲得し、クールダウンが短縮される"
            },
            {
                "id": "upgrade_regenerating_bullet_shield",
                "original": "Battle Vest",
                "translated": "バトルベスト",
                "image": "images/items/upgrade_regenerating_bullet_shield.png",
                "price": 1600,
                "duration": "",
                "effects": [
                    "OutOfCombatHealthRegen: 3",
                    "BulletResist: 12",
                    "BaseAttackDamagePercent: 15",
                    "BonusFireRate: 8"
                ],
                "stats": {
                    "OutOfCombatHealthRegen": 3,
                    "BulletResist": 12,
                    "BaseAttackDamagePercent": 15,
                    "BonusFireRate": 8
                },
                "description": "自身のHPが{s:LifeThreshold}%を上回っている間、{g:citadel_inline_attribute:'WeaponDamage'}と{g:citadel_inline_attribute:'BonusFireRate'}を獲得する"
            },
            {
                "id": "upgrade_restorative_locket",
                "original": "Restorative Locket",
                "translated": "ヒーリングロケット",
                "image": "images/items/upgrade_restorative_locket.png",
                "price": 1600,
                "duration": "",
                "effects": [
                    "TechResist: 10",
                    "HealPerStack: 30",
                    "AbilityCooldown: -8",
                    "MaxStaminaRestore: 2",
                    "MinStaminaRestore: 2"
                ],
                "stats": {
                    "TechResist": 10,
                    "HealPerStack": 30,
                    "AbilityCooldown": -8,
                    "MaxStaminaRestore": 2,
                    "MinStaminaRestore": 2
                },
                "description": ""
            },
            {
                "id": "upgrade_return_fire",
                "original": "Return Fire",
                "translated": "リターンファイア",
                "image": "images/items/upgrade_return_fire.png",
                "price": 1600,
                "duration": 6,
                "effects": [
                    "BulletResist: 16",
                    "SpiritDamageReflectedPct: 15",
                    "BulletDamageReflectedPct: 25",
                    "AbilityCooldown: -10"
                ],
                "stats": {
                    "BulletResist": 16,
                    "SpiritDamageReflectedPct": 15,
                    "BulletDamageReflectedPct": 25,
                    "AbilityCooldown": -10
                },
                "description": "アビリティや武器で自身にダメージを与えた対象に、自動的に弾薬を発射する"
            },
            {
                "id": "upgrade_spirit_bubble",
                "original": "Spirit Shielding",
                "translated": "スピリットシールド",
                "image": "images/items/upgrade_spirit_bubble.png",
                "price": 1600,
                "duration": "",
                "effects": [
                    "OutOfCombatHealthRegen: 3",
                    "CombatBarrier: 175",
                    "BonusMoveSpeed: 1m",
                    "AbilityCooldown: -20"
                ],
                "stats": {
                    "OutOfCombatHealthRegen": 3,
                    "CombatBarrier": 175,
                    "BonusMoveSpeed": "1m",
                    "AbilityCooldown": -20
                },
                "description": "短時間内に敵から一定以上の{g:citadel_inline_attribute:'SpiritDamage'}を受けると、バリアを獲得する"
            },
            {
                "id": "upgrade_vampire",
                "original": "Bullet Lifesteal",
                "translated": "バレットライフスティール",
                "image": "images/items/upgrade_vampire.png",
                "price": 1600,
                "duration": "",
                "effects": [
                    "BulletLifestealPercent: 16",
                    "BonusHealth: 120"
                ],
                "stats": {
                    "BulletLifestealPercent": 16,
                    "BonusHealth": 120
                },
                "description": ""
            },
            {
                "id": "upgrade_vex_barrier",
                "original": "Reactive Barrier",
                "translated": "リアクティブバリア",
                "image": "images/items/upgrade_vex_barrier.png",
                "price": 1600,
                "duration": 10,
                "effects": [
                    "TechResist: 10",
                    "VexBarrierCombatBarrier: 375",
                    "AbilityCooldown: -15"
                ],
                "stats": {
                    "TechResist": 10,
                    "VexBarrierCombatBarrier": 375,
                    "AbilityCooldown": -15
                },
                "description": "スタン、束縛、移動不能、睡眠状態になると、自動的にスタミナを1回復し、バリアを獲得する"
            },
            {
                "id": "upgrade_weapon_shielding",
                "original": "Weapon Shielding",
                "translated": "ウェポンシールド",
                "image": "images/items/upgrade_weapon_shielding.png",
                "price": 1600,
                "duration": "",
                "effects": [
                    "OutOfCombatHealthRegen: 3",
                    "CombatBarrier: 225",
                    "BonusMoveSpeed: 3m",
                    "AbilityCooldown: -20"
                ],
                "stats": {
                    "OutOfCombatHealthRegen": 3,
                    "CombatBarrier": 225,
                    "BonusMoveSpeed": "3m",
                    "AbilityCooldown": -20
                },
                "description": "短時間内に敵から一定以上の{g:citadel_inline_attribute:'WeaponDamage'}を受けると、バリアを獲得する"
            },
            {
                "id": "upgrade_boxing_glove",
                "original": "Lifestrike",
                "translated": "ライフストライク",
                "image": "images/items/upgrade_boxing_glove.png",
                "price": 3200,
                "duration": "",
                "effects": [
                    "BonusMeleeDamagePercent: 10",
                    "BonusHealth: 125",
                    "AbilityCooldown: -3"
                ],
                "stats": {
                    "BonusMeleeDamagePercent": 10,
                    "BonusHealth": 125,
                    "AbilityCooldown": -3
                },
                "description": "近接攻撃時、対象にスロウを付与し、与えた近接ダメージの一定割合に固定値を加えた分のHPを回復する非ヒーローに対しては総回復量が{s:NonHeroHealPct}%に低下する近接弱攻撃の場合はクールダウンが{s:LightMeleeCooldownMult}倍になる"
            },
            {
                "id": "upgrade_chonky",
                "original": "Fortitude",
                "translated": "フォルティチュード",
                "image": "images/items/upgrade_chonky.png",
                "price": 3200,
                "duration": "",
                "effects": [
                    "RestoreDelay: -6",
                    "BonusHealth: 375",
                    "BonusMoveSpeed: 1m",
                    "HealLifePercentOutOfCombat: 1"
                ],
                "stats": {
                    "RestoreDelay": -6,
                    "BonusHealth": 375,
                    "BonusMoveSpeed": "1m",
                    "HealLifePercentOutOfCombat": 1
                },
                "description": "一定時間ダメージを受けないと、リジェネを獲得する"
            },
            {
                "id": "upgrade_counterspell",
                "original": "Counterspell",
                "translated": "カウンタースペル",
                "image": "images/items/upgrade_counterspell.png",
                "price": 3200,
                "duration": "",
                "effects": [
                    "SpiritPower: 20",
                    "BonusHealth: 150",
                    "HealOnSuccess: 250",
                    "BonusMoveSpeed: 2m",
                    "AbilityCooldown: -8"
                ],
                "stats": {
                    "SpiritPower": 20,
                    "BonusHealth": 150,
                    "HealOnSuccess": 250,
                    "BonusMoveSpeed": "2m",
                    "AbilityCooldown": -8
                },
                "description": "次のパリィがダメージを防ぎ、敵のアビリティやアイテムによる効果を防ぐようになる。スペルパリィに成功するとHPを{g:citadel_inline_attribute:'Heal'}し、{g:citadel_inline_attribute:'MoveSpeed'}と{g:citadel_inline_attribute:'Spirit'}を獲得する"
            },
            {
                "id": "upgrade_fury_trance",
                "original": "Fury Trance",
                "translated": "フューリートランス",
                "image": "images/items/upgrade_fury_trance.png",
                "price": 3200,
                "duration": 6,
                "effects": [
                    "BulletLifestealPercent: 28",
                    "ActiveBonusFireRate: 25",
                    "TechResist: 20"
                ],
                "stats": {
                    "BulletLifestealPercent": 28,
                    "ActiveBonusFireRate": 25,
                    "TechResist": 20
                },
                "description": ""
            },
            {
                "id": "upgrade_health_nova",
                "original": "Healing Nova",
                "translated": "ヒーリングノヴァ",
                "image": "images/items/upgrade_health_nova.png",
                "price": 3200,
                "duration": "",
                "effects": [
                    "TechRadiusMultiplier: 12",
                    "TechRangeMultiplier: 12",
                    "TechPower: 12",
                    "TotalHealthRegen: 425"
                ],
                "stats": {
                    "TechRadiusMultiplier": 12,
                    "TechRangeMultiplier": 12,
                    "TechPower": 12,
                    "TotalHealthRegen": 425
                },
                "description": "自分自身と付近にいる味方のHPを回復する"
            },
            {
                "id": "upgrade_improved_bullet_armor",
                "original": "Bullet Resilience",
                "translated": "バレットレジリエンス",
                "image": "images/items/upgrade_improved_bullet_armor.png",
                "price": 3200,
                "duration": "",
                "effects": [
                    "BulletResist: 10",
                    "BulletResistBelowThreshold: 10"
                ],
                "stats": {
                    "BulletResist": 10,
                    "BulletResistBelowThreshold": 10
                },
                "description": "自身のHPが{s:HealthThreshold}%を下回っている間、追加の弾薬耐性を獲得する"
            },
            {
                "id": "upgrade_metal_skin",
                "original": "Metal Skin",
                "translated": "メタルスキン",
                "image": "images/items/upgrade_metal_skin.png",
                "price": 3200,
                "duration": 5,
                "effects": [
                    "ActiveMoveSpeedPenalty: 6.5m",
                    "GroundDashReductionPercent: 60",
                    "AbilityCooldown: -2",
                    "BulletResist: 5"
                ],
                "stats": {
                    "ActiveMoveSpeedPenalty": "6.5m",
                    "GroundDashReductionPercent": 60,
                    "AbilityCooldown": -2,
                    "BulletResist": 5
                },
                "description": "弾薬を無効化する"
            },
            {
                "id": "upgrade_reduce_debuff_duration",
                "original": "Dispel Magic",
                "translated": "ディスペルマジック",
                "image": "images/items/upgrade_reduce_debuff_duration.png",
                "price": 3200,
                "duration": "",
                "effects": [
                    "HealOnActivate: 150",
                    "TechResist: 20",
                    "AbilityCooldown: -25"
                ],
                "stats": {
                    "HealOnActivate": 150,
                    "TechResist": 20,
                    "AbilityCooldown": -25
                },
                "description": ""
            },
            {
                "id": "upgrade_rescue_beam",
                "original": "Rescue Beam",
                "translated": "レスキュービーム",
                "image": "images/items/upgrade_rescue_beam.png",
                "price": 3200,
                "duration": "",
                "effects": [
                    "TechRadiusMultiplier: 20",
                    "TechRangeMultiplier: 20",
                    "HealPercentAmount: 15",
                    "AbilityCooldown: -45"
                ],
                "stats": {
                    "TechRadiusMultiplier": 20,
                    "TechRangeMultiplier": 20,
                    "HealPercentAmount": 15,
                    "AbilityCooldown": -45
                },
                "description": "指定した味方ヒーローと自分を最大HPの一定割合回復する。回復中、対象を自身の近くへと引っ張ることができる。このアイテムはセルフキャストできる"
            },
            {
                "id": "upgrade_rocket_booster",
                "original": "Majestic Leap",
                "translated": "マジェスティックリープ",
                "image": "images/items/upgrade_rocket_booster.png",
                "price": 3200,
                "duration": "",
                "effects": [
                    "AbilityCooldown: -35",
                    "CombatBarrier: 275",
                    "InterruptCooldown: -3"
                ],
                "stats": {
                    "AbilityCooldown": -35,
                    "CombatBarrier": 275,
                    "InterruptCooldown": -3
                },
                "description": "空中高くに自身を射出し、バリアを獲得する。空中で再発動することで急降下できる敵ヒーローからダメージを受けてから{s:InterruptCooldown}秒間は使用できない"
            },
            {
                "id": "upgrade_superior_stamina",
                "original": "Stamina Mastery",
                "translated": "スタミナマスタリー",
                "image": "images/items/upgrade_superior_stamina.png",
                "price": 3200,
                "duration": "",
                "effects": [
                    "Stamina: 2",
                    "AirMoveIncreasePercent: 40",
                    "StaminaCooldownReduction: 15"
                ],
                "stats": {
                    "Stamina": 2,
                    "AirMoveIncreasePercent": 40,
                    "StaminaCooldownReduction": 15
                },
                "description": ""
            },
            {
                "id": "upgrade_tech_purge",
                "original": "Spirit Resilience",
                "translated": "スピリットレジリエンス",
                "image": "images/items/upgrade_tech_purge.png",
                "price": 3200,
                "duration": "",
                "effects": [
                    "TechResist: 10",
                    "TechResistBelowThreshold: 10"
                ],
                "stats": {
                    "TechResist": 10,
                    "TechResistBelowThreshold": 10
                },
                "description": "自身のHPが{s:HealthThreshold}%を下回っている間、追加のスピリット耐性を獲得する"
            },
            {
                "id": "upgrade_trophy_collector",
                "original": "Trophy Collector",
                "translated": "トロフィーコレクター",
                "image": "images/items/upgrade_trophy_collector.png",
                "price": 3200,
                "duration": "",
                "effects": [
                    "StackingTechRadiusMultiplier: 3",
                    "StackingTechRangeMultiplier: 3",
                    "StackingBonusHealth: 25",
                    "OutOfCombatHealthRegen: 6",
                    "BonusSprintSpeed: 12m",
                    "MaxStacks: 83"
                ],
                "stats": {
                    "StackingTechRadiusMultiplier": 3,
                    "StackingTechRangeMultiplier": 3,
                    "StackingBonusHealth": 25,
                    "OutOfCombatHealthRegen": 6,
                    "BonusSprintSpeed": "12m",
                    "MaxStacks": 83
                },
                "description": "アシストかキルを獲得するたび、追加のHP、スプリント、アビリティ範囲、パッシブソウル生成を獲得する。この効果はスタックし、デス後も継続する"
            },
            {
                "id": "upgrade_veil_walker",
                "original": "Veil Walker",
                "translated": "ベールウォーカー",
                "image": "images/items/upgrade_veil_walker.png",
                "price": 3200,
                "duration": 16,
                "effects": [
                    "SpiritPower: 25",
                    "InvisMoveSpeedMod: 6m",
                    "HealOnVeil: 300",
                    "AbilityCooldown: -9",
                    "InvisDuration: 4",
                    "BonusMoveSpeed: 4m"
                ],
                "stats": {
                    "SpiritPower": 25,
                    "InvisMoveSpeedMod": "6m",
                    "HealOnVeil": 300,
                    "AbilityCooldown": -9,
                    "InvisDuration": 4,
                    "BonusMoveSpeed": "4m"
                },
                "description": "コズミックベールを通過するとステルス状態になる。また、HPを回復し、移動速度が上昇する"
            },
            {
                "id": "upgrade_warp_stone",
                "original": "Warp Stone",
                "translated": "ワープストーン",
                "image": "images/items/upgrade_warp_stone.png",
                "price": 3200,
                "duration": "",
                "effects": [
                    "BulletResist: 20",
                    "AbilityCastRange: 9m",
                    "AbilityCooldown: -3"
                ],
                "stats": {
                    "BulletResist": 20,
                    "AbilityCastRange": "9m",
                    "AbilityCooldown": -3
                },
                "description": "前方にテレポートし、弾薬耐性を獲得する"
            },
            {
                "id": "upgrade_absorbing_armor",
                "original": "Witchmail",
                "translated": "ウィッチメイル",
                "image": "images/items/upgrade_absorbing_armor.png",
                "price": 6400,
                "duration": "",
                "effects": [
                    "TechPower: 26",
                    "CooldownReductionPerHit: 2",
                    "TechResist: 5"
                ],
                "stats": {
                    "TechPower": 26,
                    "CooldownReductionPerHit": 2,
                    "TechResist": 5
                },
                "description": "敵から大きな{g:citadel_inline_attribute:'SpiritDamage'}を受けると、ランダムなアビリティのクールダウンを短縮する"
            },
            {
                "id": "upgrade_cheat_death",
                "original": "Cheat Death",
                "translated": "デスチーター",
                "image": "images/items/upgrade_cheat_death.png",
                "price": 6400,
                "duration": "",
                "effects": [
                    "DeathImmunityDamageReduction: 90",
                    "HealAmpReceivePenaltyPercent: 90",
                    "HealAmpRegenPenaltyPercent: 90",
                    "DeathImmunityDuration: 0.5",
                    "AbilityCooldown: -20"
                ],
                "stats": {
                    "DeathImmunityDamageReduction": 90,
                    "HealAmpReceivePenaltyPercent": 90,
                    "HealAmpRegenPenaltyPercent": 90,
                    "DeathImmunityDuration": 0.5,
                    "AbilityCooldown": -20
                },
                "description": ""
            },
            {
                "id": "upgrade_colossus",
                "original": "Colossus",
                "translated": "コロッサス",
                "image": "images/items/upgrade_colossus.png",
                "price": 6400,
                "duration": 7,
                "effects": [
                    "BonusHealth: 700",
                    "ModelScaleGrowth: 0.2",
                    "ModelScaleGrowthTooltip: 20",
                    "BuffBulletResist: 10",
                    "BuffTechResist: 10",
                    "AbilityCooldown: -7"
                ],
                "stats": {
                    "BonusHealth": 700,
                    "ModelScaleGrowth": 0.2,
                    "ModelScaleGrowthTooltip": 20,
                    "BuffBulletResist": 10,
                    "BuffTechResist": 10,
                    "AbilityCooldown": -7
                },
                "description": "サイズが大きくなり、{g:citadel_inline_attribute:'BulletResist'}、{g:citadel_inline_attribute:'SpiritResist'}、{g:citadel_inline_attribute:'MeleeDamage'}を獲得する付近にいる敵は{g:citadel_inline_attribute:'Slow'}状態になり、ダッシュ速度が低下する"
            },
            {
                "id": "upgrade_damage_recycler",
                "original": "Leech",
                "translated": "ライフドレイン",
                "image": "images/items/upgrade_damage_recycler.png",
                "price": 6400,
                "duration": "",
                "effects": [
                    "BulletLifestealPercent: 15",
                    "AbilityLifestealPercentHero: 15",
                    "BonusHealth: 100",
                    "TechPower: 15",
                    "BaseAttackDamagePercent: 15"
                ],
                "stats": {
                    "BulletLifestealPercent": 15,
                    "AbilityLifestealPercentHero": 15,
                    "BonusHealth": 100,
                    "TechPower": 15,
                    "BaseAttackDamagePercent": 15
                },
                "description": "敵から付与される回復阻害の効果を軽減する"
            },
            {
                "id": "upgrade_deflecting_armor",
                "original": "Plated Armor",
                "translated": "プレートアーマー",
                "image": "images/items/upgrade_deflecting_armor.png",
                "price": 6400,
                "duration": "",
                "effects": [
                    "DeflectionPercent: 15",
                    "BulletProcDeflectionPercent: 15"
                ],
                "stats": {
                    "DeflectionPercent": 15,
                    "BulletProcDeflectionPercent": 15
                },
                "description": "一定確率で弾薬による攻撃を逸らす。弾薬を逸らした場合、{g:citadel_inline_attribute:'WeaponDamage'}をすべて無効化するか、その弾薬によるヒット時効果をすべて無効化する"
            },
            {
                "id": "upgrade_divine_barrier",
                "original": "Divine Barrier",
                "translated": "ディバインバリア",
                "image": "images/items/upgrade_divine_barrier.png",
                "price": 6400,
                "duration": "",
                "effects": [
                    "AbilityCooldown: -27",
                    "TechRadiusMultiplier: 10",
                    "TechRangeMultiplier: 10"
                ],
                "stats": {
                    "AbilityCooldown": -27,
                    "TechRadiusMultiplier": 10,
                    "TechRangeMultiplier": 10
                },
                "description": "指定した対象に付与されたスタンを除くデバフをすべて解除する。また、対象にバリアと移動速度を付与するこのアイテムはセルフキャストできる。自分以外に使用すると、クールダウンが半減する"
            },
            {
                "id": "upgrade_diviners_kevlar",
                "original": "Diviner's Kevlar",
                "translated": "ディバイナーズケブラー",
                "image": "images/items/upgrade_diviners_kevlar.png",
                "price": 6400,
                "duration": "",
                "effects": [
                    "BonusAbilityDurationPercent: 15",
                    "TechPower: 55",
                    "CombatBarrier: 500",
                    "AbilityCooldown: -14"
                ],
                "stats": {
                    "BonusAbilityDurationPercent": 15,
                    "TechPower": 55,
                    "CombatBarrier": 500,
                    "AbilityCooldown": -14
                },
                "description": "アルティメットアビリティの発動時、バリアと一時的なスピリットパワーを獲得する"
            },
            {
                "id": "upgrade_healbuff",
                "original": "Healing Tempo",
                "translated": "ヒーリングテンポ",
                "image": "images/items/upgrade_healbuff.png",
                "price": 6400,
                "duration": "",
                "effects": [
                    "HealAmpRegenPercent: 10",
                    "HealAmpCastPercent: 10",
                    "TechResist: 10",
                    "BonusMoveSpeed: 2m",
                    "BonusFireRate: 20",
                    "BonusHealthRegen: 6"
                ],
                "stats": {
                    "HealAmpRegenPercent": 10,
                    "HealAmpCastPercent": 10,
                    "TechResist": 10,
                    "BonusMoveSpeed": "2m",
                    "BonusFireRate": 20,
                    "BonusHealthRegen": 6
                },
                "description": "自分自身か味方のHPを{g:citadel_inline_attribute:'Heal'}すると、その対象に{g:citadel_inline_attribute:'BonusFireRate'}と{g:citadel_inline_attribute:'BonusMoveSpeed'}を付与するヒーローが元から有しているリジェネやパッシブの弾薬／スピリットライフスティールには適用されない"
            },
            {
                "id": "upgrade_infuser",
                "original": "Infuser",
                "translated": "インフューザー",
                "image": "images/items/upgrade_infuser.png",
                "price": 6400,
                "duration": 6,
                "effects": [
                    "AbilityCooldown: -10",
                    "TechResist: 10",
                    "BonusSpirit: 30",
                    "BonusHealth: 50",
                    "AbilityLifestealPercentHeroPassive: 16"
                ],
                "stats": {
                    "AbilityCooldown": -10,
                    "TechResist": 10,
                    "BonusSpirit": 30,
                    "BonusHealth": 50,
                    "AbilityLifestealPercentHeroPassive": 16
                },
                "description": "スピリットライフスティールとスピリットパワーを獲得する"
            },
            {
                "id": "upgrade_inhibitor",
                "original": "Inhibitor",
                "translated": "インヒビター",
                "image": "images/items/upgrade_inhibitor.png",
                "price": 6400,
                "duration": "",
                "effects": [
                    "OutgoingDamagePenaltyPercent: -20",
                    "HealAmpReceivePenaltyPercent: -20",
                    "HealAmpRegenPenaltyPercent: -20",
                    "BonusHealth: 125",
                    "BaseAttackDamagePercent: 20"
                ],
                "stats": {
                    "OutgoingDamagePenaltyPercent": -20,
                    "HealAmpReceivePenaltyPercent": -20,
                    "HealAmpRegenPenaltyPercent": -20,
                    "BonusHealth": 125,
                    "BaseAttackDamagePercent": 20
                },
                "description": "弾薬が対象に与えるダメージ低下を蓄積させる。また、回復阻害を付与する"
            },
            {
                "id": "upgrade_juggernaut",
                "original": "Juggernaut",
                "translated": "ジャガーノート",
                "image": "images/items/upgrade_juggernaut.png",
                "price": 6400,
                "duration": "",
                "effects": [
                    "BonusMoveSpeed: 3.5m",
                    "MeleeResistPercent: 15",
                    "FireRateSlow: 20",
                    "SlowResistancePercent: 15",
                    "BonusHealthRegen: 8"
                ],
                "stats": {
                    "BonusMoveSpeed": "3.5m",
                    "MeleeResistPercent": 15,
                    "FireRateSlow": 20,
                    "SlowResistancePercent": 15,
                    "BonusHealthRegen": 8
                },
                "description": ""
            },
            {
                "id": "upgrade_phantom_strike",
                "original": "Phantom Strike",
                "translated": "ファントムストライク",
                "image": "images/items/upgrade_phantom_strike.png",
                "price": 6400,
                "duration": "",
                "effects": [
                    "TechPower: 12",
                    "BaseAttackDamagePercent: 20",
                    "AbilityCooldown: -20",
                    "ImpactDamage: 100"
                ],
                "stats": {
                    "TechPower": 12,
                    "BaseAttackDamagePercent": 20,
                    "AbilityCooldown": -20,
                    "ImpactDamage": 100
                },
                "description": "指定した敵の場所までテレポートし、対象を地面に引き寄せる。対象にはダメージを与え、移動速度を低下させてディスアーム状態を付与する"
            },
            {
                "id": "upgrade_siphon_bullets",
                "original": "Siphon Bullets",
                "translated": "サイフォンバレット",
                "image": "images/items/upgrade_siphon_bullets.png",
                "price": 6400,
                "duration": "",
                "effects": [
                    "HealthStealPctHero: 1.5",
                    "BulletResist: 10"
                ],
                "stats": {
                    "HealthStealPctHero": 1.5,
                    "BulletResist": 10
                },
                "description": ""
            },
            {
                "id": "upgrade_spellbreaker",
                "original": "Spellbreaker",
                "translated": "スペルブレイカー",
                "image": "images/items/upgrade_spellbreaker.png",
                "price": 6400,
                "duration": "",
                "effects": [
                    "TechResist: 15",
                    "StatusResistancePercent: 15",
                    "AbilityCooldown: -3"
                ],
                "stats": {
                    "TechResist": 15,
                    "StatusResistancePercent": 15,
                    "AbilityCooldown": -3
                },
                "description": "次に受けるスピリットダメージが一定量を超える場合、そのダメージを大幅に軽減する"
            },
            {
                "id": "upgrade_surging_power",
                "original": "Vampiric Burst",
                "translated": "ヴァンパイアバースト",
                "image": "images/items/upgrade_surging_power.png",
                "price": 6400,
                "duration": 4.5,
                "effects": [
                    "ActiveBonusFireRate: 25",
                    "AbilityCooldown: -10",
                    "BulletResist: 10",
                    "BulletLifestealPercent: 16",
                    "BonusHealth: 110"
                ],
                "stats": {
                    "ActiveBonusFireRate": 25,
                    "AbilityCooldown": -10,
                    "BulletResist": 10,
                    "BulletLifestealPercent": 16,
                    "BonusHealth": 110
                },
                "description": ""
            },
            {
                "id": "upgrade_unstoppable",
                "original": "Unstoppable",
                "translated": "アンストッパブル",
                "image": "images/items/upgrade_unstoppable.png",
                "price": 6400,
                "duration": 5.5,
                "effects": [
                    "AbilityDuration: 1.25",
                    "BonusHealth: 75",
                    "AbilityCooldown: -35",
                    "StatusResistancePercent: 15"
                ],
                "stats": {
                    "AbilityDuration": 1.25,
                    "BonusHealth": 75,
                    "AbilityCooldown": -35,
                    "StatusResistancePercent": 15
                },
                "description": "状態異常を一時的に抑制し、スタン、サイレンス、睡眠、移動不能、ディスアームを無効化するスタン状態や睡眠状態の間は使用できない"
            },
            {
                "id": "upgrade_celestial_guidance",
                "original": "Celestial Blessing",
                "translated": "天の祝福",
                "image": "images/items/upgrade_celestial_guidance.png",
                "price": "Legendary",
                "duration": "",
                "effects": [
                    "AbilityCooldown: -20",
                    "BuffDuration: 2",
                    "MinHeal: 200"
                ],
                "stats": {
                    "AbilityCooldown": -20,
                    "BuffDuration": 2,
                    "MinHeal": 200
                },
                "description": "非常に強力な浄化を付与し、味方全体を回復させる"
            },
            {
                "id": "upgrade_cloak_of_opportunity",
                "original": "Cloak of Opportunity",
                "translated": "加護のマント",
                "image": "images/items/upgrade_cloak_of_opportunity.png",
                "price": "Legendary",
                "duration": "",
                "effects": [
                    "BonusMoveSpeed: 4m",
                    "AbilityCooldown: -4",
                    "CombatBarrier: 300"
                ],
                "stats": {
                    "BonusMoveSpeed": "4m",
                    "AbilityCooldown": -4,
                    "CombatBarrier": 300
                },
                "description": "次に付与されるスタン、束縛、移動不能、睡眠のいずれかのデバフを無効化し、アンストッパブル状態になる。さらに、バリアと{g:citadel_inline_attribute:'MoveSpeed'}ボーナスを獲得する"
            },
            {
                "id": "upgrade_electric_slippers",
                "original": "Electric Slippers",
                "translated": "エレクトリックブーツ",
                "image": "images/items/upgrade_electric_slippers.png",
                "price": "Legendary",
                "duration": "",
                "effects": [
                    "Stamina: 2",
                    "EvasionWhileSliding: 15",
                    "Damage: 50",
                    "FireRateWhileSliding: 20"
                ],
                "stats": {
                    "Stamina": 2,
                    "EvasionWhileSliding": 15,
                    "Damage": 50,
                    "FireRateWhileSliding": 20
                },
                "description": "スライディング中、弾薬を回避し、発射速度が上昇し、付近にいる敵にダメージを与えるクールダウンは対象ごとに適用される"
            },
            {
                "id": "upgrade_eternal_gift",
                "original": "Eternal Gift",
                "translated": "エターナルギフト",
                "image": "images/items/upgrade_eternal_gift.png",
                "price": "Legendary",
                "duration": "",
                "effects": [
                    "BuffFrequency: -0.5"
                ],
                "stats": {
                    "BuffFrequency": -0.5
                },
                "description": "定期的にランダムな永続ステータスバフを獲得する"
            },
            {
                "id": "upgrade_icarus_wings",
                "original": "Seraphim Wings",
                "translated": "セラフィムウィング",
                "image": "images/items/upgrade_icarus_wings.png",
                "price": "Legendary",
                "duration": "",
                "effects": [
                    "AirBonusDamageGiven: 10",
                    "AirBonusDamageTaken: -10",
                    "StaminaCooldownReduction: 30"
                ],
                "stats": {
                    "AirBonusDamageGiven": 10,
                    "AirBonusDamageTaken": -10,
                    "StaminaCooldownReduction": 30
                },
                "description": "空中にいる間、与ダメージは増加し、被ダメージは減少する。空中ダッシュと空中ジャンプが無制限に使用できるようになる"
            },
            {
                "id": "upgrade_nullification_aura",
                "original": "Nullification Burst",
                "translated": "虚無の波動",
                "image": "images/items/upgrade_nullification_aura.png",
                "price": "Legendary",
                "duration": 7,
                "effects": [
                    "EndRadius: 6m",
                    "BonusHealth: 300",
                    "StatusResistancePercent: 20",
                    "Damage: 200"
                ],
                "stats": {
                    "EndRadius": "6m",
                    "BonusHealth": 300,
                    "StatusResistancePercent": 20,
                    "Damage": 200
                },
                "description": "敵に付与されている有利なバフを全て解除し、スタミナの使用と回復効果を無効化する"
            },
            {
                "id": "upgrade_shadow_strike",
                "original": "Shadow Strike",
                "translated": "シャドウストライク",
                "image": "images/items/upgrade_shadow_strike.png",
                "price": "Legendary",
                "duration": 3,
                "effects": [
                    "Stamina: 1",
                    "BonusHealth: 250",
                    "ResistStealAmount: 20",
                    "DPS: 125",
                    "AbilityDuration: 3"
                ],
                "stats": {
                    "Stamina": 1,
                    "BonusHealth": 250,
                    "ResistStealAmount": 20,
                    "DPS": 125,
                    "AbilityDuration": 3
                },
                "description": "スタミナを使用すると、検知範囲なしでインビジブル状態になる。インビジブル状態時に、近接攻撃を行うと、敵から弾薬耐性とスピリット耐性を奪い、さらに継続ダメージを与える"
            }
        ],
        "spirit": [
            {
                "id": "upgrade_acolytes_glove",
                "original": "Spirit Strike",
                "translated": "スピリットストライク",
                "image": "images/items/upgrade_acolytes_glove.png",
                "price": 800,
                "duration": 6,
                "effects": [
                    "SpiritDamage: 80",
                    "TechArmorDamageReduction: -5"
                ],
                "stats": {
                    "SpiritDamage": 80,
                    "TechArmorDamageReduction": -5
                },
                "description": "ヒーローに対して近接弱攻撃か近接強攻撃を行うと、追加でスピリットダメージを与え、対象のスピリット耐性を低下させる近接弱攻撃の場合はクールダウンが{s:LightMeleeCooldownMult}倍になる"
            },
            {
                "id": "upgrade_extra_charge",
                "original": "Extra Charge",
                "translated": "エクストラチャージ",
                "image": "images/items/upgrade_extra_charge.png",
                "price": 800,
                "duration": "",
                "effects": [
                    "BonusAbilityCharges: 1",
                    "BonusSpiritForChargedAbilities: 7"
                ],
                "stats": {
                    "BonusAbilityCharges": 1,
                    "BonusSpiritForChargedAbilities": 7
                },
                "description": "Adds one to your ability max charges."
            },
            {
                "id": "upgrade_goose_egg",
                "original": "Golden Goose Egg",
                "translated": "ガチョウの黄金の卵",
                "image": "images/items/upgrade_goose_egg.png",
                "price": 800,
                "duration": "",
                "effects": [
                    "BonusSprintSpeed: 5",
                    "OutOfCombatHealthRegen: 10",
                    "BonusBuffsPerGold: -100",
                    "OutgoingDamagePenaltyPercent: 20"
                ],
                "stats": {
                    "BonusSprintSpeed": 5,
                    "OutOfCombatHealthRegen": 10,
                    "BonusBuffsPerGold": -100,
                    "OutgoingDamagePenaltyPercent": 20
                },
                "description": "生存している限り、時間経過でソウルを獲得する"
            },
            {
                "id": "upgrade_improved_spirit",
                "original": "Extra Spirit",
                "translated": "エクストラスピリット",
                "image": "images/items/upgrade_improved_spirit.png",
                "price": 800,
                "duration": "",
                "effects": [
                    "TechPower: 10"
                ],
                "stats": {
                    "TechPower": 10
                },
                "description": ""
            },
            {
                "id": "upgrade_magic_burst",
                "original": "Mystic Burst",
                "translated": "ミスティックバースト",
                "image": "images/items/upgrade_magic_burst.png",
                "price": 800,
                "duration": "",
                "effects": [
                    "Damage: 60"
                ],
                "stats": {
                    "Damage": 60
                },
                "description": "時間経過で{g:citadel_inline_attribute:'BonusSpiritDamage'}をチャージする。アビリティで{s:MinimumDamage}を超えるダメージを与えると、追加ダメージを与える"
            },
            {
                "id": "upgrade_magic_reach",
                "original": "Mystic Expansion",
                "translated": "ミスティックエクスパンダー",
                "image": "images/items/upgrade_magic_reach.png",
                "price": 800,
                "duration": "",
                "effects": [
                    "TechRadiusMultiplier: 15",
                    "TechRangeMultiplier: 15"
                ],
                "stats": {
                    "TechRadiusMultiplier": 15,
                    "TechRangeMultiplier": 15
                },
                "description": "エンチャントしたアビリティの距離と効果範囲を上昇させる"
            },
            {
                "id": "upgrade_mystic_regeneration",
                "original": "Mystic Regeneration",
                "translated": "ミスティックリジェネ",
                "image": "images/items/upgrade_mystic_regeneration.png",
                "price": 800,
                "duration": "",
                "effects": [
                    "Regeneration: 8",
                    "BonusHealth: 150"
                ],
                "stats": {
                    "Regeneration": 8,
                    "BonusHealth": 150
                },
                "description": "敵ヒーローにスピリットダメージを与えると、ボーナスリジェネを獲得する。このリジェネは異なるヒーローにダメージを与えるたびにスタックする"
            },
            {
                "id": "upgrade_withering_whip",
                "original": "Rusted Barrel",
                "translated": "コロッシブバレル",
                "image": "images/items/upgrade_withering_whip.png",
                "price": 800,
                "duration": 5,
                "effects": [
                    "BonusHealth: 130",
                    "BulletArmorReduction: -4",
                    "FireRateSlow: 20",
                    "AbilityCooldown: -8"
                ],
                "stats": {
                    "BonusHealth": 130,
                    "BulletArmorReduction": -4,
                    "FireRateSlow": 20,
                    "AbilityCooldown": -8
                },
                "description": "指定した敵の発射速度と弾薬耐性を低下させる"
            },
            {
                "id": "upgrade_arcane_extension",
                "original": "Duration Extender",
                "translated": "エクステンダー",
                "image": "images/items/upgrade_arcane_extension.png",
                "price": 1600,
                "duration": "",
                "effects": [
                    "BonusAbilityDurationPercent: 12"
                ],
                "stats": {
                    "BonusAbilityDurationPercent": 12
                },
                "description": "エンチャントしたアビリティの継続時間を増加させる"
            },
            {
                "id": "upgrade_arcane_surge",
                "original": "Arcane Surge",
                "translated": "アーケインサージ",
                "image": "images/items/upgrade_arcane_surge.png",
                "price": 1600,
                "duration": 7,
                "effects": [
                    "Stamina: 1",
                    "SpiritPower: 25",
                    "TechRadiusMultiplierBuff: 15",
                    "TechRangeMultiplierBuff: 15",
                    "BonusAbilityDurationPercent: 15"
                ],
                "stats": {
                    "Stamina": 1,
                    "SpiritPower": 25,
                    "TechRadiusMultiplierBuff": 15,
                    "TechRangeMultiplierBuff": 15,
                    "BonusAbilityDurationPercent": 15
                },
                "description": "ダッシュジャンプすると、次に使用するアビリティの範囲と継続時間、スピリットパワーが強化される。この効果は最大で{s:AbilityDuration}秒間継続する"
            },
            {
                "id": "upgrade_bullet_resist_shredder",
                "original": "Bullet Resist Shredder",
                "translated": "レジストシュレッダー",
                "image": "images/items/upgrade_bullet_resist_shredder.png",
                "price": 1600,
                "duration": 8,
                "effects": [
                    "BulletResist: 7",
                    "BulletArmorReduction: -11",
                    "BonusHealth: 90"
                ],
                "stats": {
                    "BulletResist": 7,
                    "BulletArmorReduction": -11,
                    "BonusHealth": 90
                },
                "description": "スピリットダメージを与えた対象の弾薬耐性を低下させる"
            },
            {
                "id": "upgrade_cold_front",
                "original": "Cold Front",
                "translated": "コールドフロント",
                "image": "images/items/upgrade_cold_front.png",
                "price": 1600,
                "duration": 4,
                "effects": [
                    "TechResist: 8",
                    "AbilityCooldown: -13",
                    "Damage: 60"
                ],
                "stats": {
                    "TechResist": 8,
                    "AbilityCooldown": -13,
                    "Damage": 60
                },
                "description": "氷の衝撃波を発生させる。衝撃波はヒット時にスピリットダメージを与え、対象にスロウを付与する"
            },
            {
                "id": "upgrade_containment",
                "original": "Slowing Hex",
                "translated": "スロウヘックス",
                "image": "images/items/upgrade_containment.png",
                "price": 1600,
                "duration": 3.5,
                "effects": [
                    "SlowPercent: 10",
                    "AbilityCooldown: -18",
                    "GroundDashReductionPercent: -6"
                ],
                "stats": {
                    "SlowPercent": 10,
                    "AbilityCooldown": -18,
                    "GroundDashReductionPercent": -6
                },
                "description": "指定した敵をスロウ状態にする。また、移動に関連するアイテムやアビリティに限り、対象をサイレンス状態にする対象にかかる重力を増加させるスタミナを消費する行動には効果がない"
            },
            {
                "id": "upgrade_magic_slow",
                "original": "Mystic Slow",
                "translated": "ミスティックスロウ",
                "image": "images/items/upgrade_magic_slow.png",
                "price": 1600,
                "duration": 2,
                "effects": [
                    "MovementSpeedSlow: 15",
                    "GroundDashReductionPercent: -10",
                    "BonusHealth: 100",
                    "BonusSprintSpeed: 1"
                ],
                "stats": {
                    "MovementSpeedSlow": 15,
                    "GroundDashReductionPercent": -10,
                    "BonusHealth": 100,
                    "BonusSprintSpeed": 1
                },
                "description": "スピリットダメージを与えた対象の移動速度を低下させる"
            },
            {
                "id": "upgrade_magic_tempo",
                "original": "Compress Cooldown",
                "translated": "コンプレッサー",
                "image": "images/items/upgrade_magic_tempo.png",
                "price": 1600,
                "duration": "",
                "effects": [
                    "CooldownReduction: 10"
                ],
                "stats": {
                    "CooldownReduction": 10
                },
                "description": "エンチャントしたアビリティのクールダウンを短縮する"
            },
            {
                "id": "upgrade_magic_vulnerability",
                "original": "Mystic Vulnerability",
                "translated": "ヴァルネラビリティ",
                "image": "images/items/upgrade_magic_vulnerability.png",
                "price": 1600,
                "duration": 7,
                "effects": [
                    "TechResist: 8",
                    "TechArmorDamageReduction: -10"
                ],
                "stats": {
                    "TechResist": 8,
                    "TechArmorDamageReduction": -10
                },
                "description": "スピリットダメージを与えた敵のスピリット耐性を低下させる"
            },
            {
                "id": "upgrade_quick_silver",
                "original": "Quicksilver Reload",
                "translated": "クイックシルバーリロード",
                "image": "images/items/upgrade_quick_silver.png",
                "price": 1600,
                "duration": "",
                "effects": [
                    "BonusFireRate: 20",
                    "Damage: 56",
                    "AbilityChargeUpTime: -4",
                    "AbilityCooldown: -4"
                ],
                "stats": {
                    "BonusFireRate": 20,
                    "Damage": 56,
                    "AbilityChargeUpTime": -4,
                    "AbilityCooldown": -4
                },
                "description": "エンチャントしたアビリティを時間経過でチャージする。チャージ状態のアビリティは使用時に{g:citadel_inline_attribute:'BonusSpiritDamage'}を与え、{g:citadel_inline_attribute:'BonusFireRate'}を獲得して弾数をリロードする"
            },
            {
                "id": "upgrade_soaring_spirit",
                "original": "Improved Spirit",
                "translated": "グレータースピリット",
                "image": "images/items/upgrade_soaring_spirit.png",
                "price": 1600,
                "duration": "",
                "effects": [
                    "TechPower: 22",
                    "OutOfCombatHealthRegen: 3"
                ],
                "stats": {
                    "TechPower": 22,
                    "OutOfCombatHealthRegen": 3
                },
                "description": ""
            },
            {
                "id": "upgrade_spirit_sap",
                "original": "Spirit Sap",
                "translated": "スピリットドレイン",
                "image": "images/items/upgrade_spirit_sap.png",
                "price": 1600,
                "duration": 12,
                "effects": [
                    "BonusHealth: 150",
                    "MagicResistReduction: -12",
                    "AbilityCooldown: -12",
                    "TechPowerReduction: -26"
                ],
                "stats": {
                    "BonusHealth": 150,
                    "MagicResistReduction": -12,
                    "AbilityCooldown": -12,
                    "TechPowerReduction": -26
                },
                "description": "指定した敵のスピリット耐性とスピリットパワーを低下させる"
            },
            {
                "id": "upgrade_suppressor",
                "original": "Suppressor",
                "translated": "サプレッサー",
                "image": "images/items/upgrade_suppressor.png",
                "price": 1600,
                "duration": 5,
                "effects": [
                    "TechPower: 12",
                    "BonusHealth: 90",
                    "FireRateSlow: 20"
                ],
                "stats": {
                    "TechPower": 12,
                    "BonusHealth": 90,
                    "FireRateSlow": 20
                },
                "description": "スピリットダメージを与えると、その敵の発射速度を低下させる"
            },
            {
                "id": "upgrade_cooldown_reduction",
                "original": "Superior Cooldown",
                "translated": "クールダウンブースト",
                "image": "images/items/upgrade_cooldown_reduction.png",
                "price": 3200,
                "duration": "",
                "effects": [
                    "CooldownReduction: 10",
                    "OutOfCombatHealthRegen: 6"
                ],
                "stats": {
                    "CooldownReduction": 10,
                    "OutOfCombatHealthRegen": 6
                },
                "description": "アビリティのクールダウンを短縮する"
            },
            {
                "id": "upgrade_greater_withering_whip",
                "original": "Disarming Hex",
                "translated": "ディスアームヘックス",
                "image": "images/items/upgrade_greater_withering_whip.png",
                "price": 3200,
                "duration": 4,
                "effects": [
                    "BonusHealth: 175",
                    "BulletArmorReduction: -7",
                    "AbilityCooldown: -8"
                ],
                "stats": {
                    "BonusHealth": 175,
                    "BulletArmorReduction": -7,
                    "AbilityCooldown": -8
                },
                "description": "指定した敵をディスアーム状態にし、弾薬耐性を低下させる"
            },
            {
                "id": "upgrade_imbued_duration_extender",
                "original": "Superior Duration",
                "translated": "スーパーエクステンダー",
                "image": "images/items/upgrade_imbued_duration_extender.png",
                "price": 3200,
                "duration": "",
                "effects": [
                    "BonusAbilityDurationPercent: 12",
                    "BulletResist: 8"
                ],
                "stats": {
                    "BonusAbilityDurationPercent": 12,
                    "BulletResist": 8
                },
                "description": "アビリティおよびアイテムの継続時間が長くなる"
            },
            {
                "id": "upgrade_magic_shock",
                "original": "Tankbuster",
                "translated": "タンクバスター",
                "image": "images/items/upgrade_magic_shock.png",
                "price": 3200,
                "duration": "",
                "effects": [
                    "CurrentHealthDamage: 5",
                    "BonusHealth: 100"
                ],
                "stats": {
                    "CurrentHealthDamage": 5,
                    "BonusHealth": 100
                },
                "description": "時間経過で{g:citadel_inline_attribute:'BonusSpiritDamage'}をチャージする。アビリティで{s:MinimumDamage}を超えるダメージを与えると、追加ダメージを与える。スピリット耐性を無視する"
            },
            {
                "id": "upgrade_magic_storm",
                "original": "Surge of Power",
                "translated": "パワーサージ",
                "image": "images/items/upgrade_magic_storm.png",
                "price": 3200,
                "duration": "",
                "effects": [
                    "ImbuedTechPower: 32",
                    "FireRateBonus: 18",
                    "BonusMoveSpeed: 2m"
                ],
                "stats": {
                    "ImbuedTechPower": 32,
                    "FireRateBonus": 18,
                    "BonusMoveSpeed": "2m"
                },
                "description": "このアイテムをエンチャントしたアビリティは永続的にスピリットパワーが上昇する。エンチャントアビリティを使用すると、移動速度が上昇し、射撃中の移動速度ペナルティを受けなくなる"
            },
            {
                "id": "upgrade_rapid_recharge",
                "original": "Rapid Recharge",
                "translated": "ラピッドリチャージ",
                "image": "images/items/upgrade_rapid_recharge.png",
                "price": 3200,
                "duration": "",
                "effects": [
                    "BonusAbilityCharges: 2",
                    "CooldownReductionOnChargedAbilities: 15",
                    "BonusSpiritForChargedAbilities: 20",
                    "CooldownBetweenChargeReduction: 5"
                ],
                "stats": {
                    "BonusAbilityCharges": 2,
                    "CooldownReductionOnChargedAbilities": 15,
                    "BonusSpiritForChargedAbilities": 20,
                    "CooldownBetweenChargeReduction": 5
                },
                "description": ""
            },
            {
                "id": "upgrade_resonant_healing",
                "original": "Radiant Regeneration",
                "translated": "ラディアントリジェネ",
                "image": "images/items/upgrade_resonant_healing.png",
                "price": 3200,
                "duration": 3,
                "effects": [
                    "Regeneration: 9",
                    "HealingPerCast: 60",
                    "BonusMoveSpeed: 1m"
                ],
                "stats": {
                    "Regeneration": 9,
                    "HealingPerCast": 60,
                    "BonusMoveSpeed": "1m"
                },
                "description": "アビリティを発動するとHPを回復し、ボーナス移動速度を短時間獲得する"
            },
            {
                "id": "upgrade_rupture",
                "original": "Decay",
                "translated": "ディケイ",
                "image": "images/items/upgrade_rupture.png",
                "price": 3200,
                "duration": 10,
                "effects": [
                    "TechPower: 12",
                    "BonusHealth: 90",
                    "HealAmpReceivePenaltyPercent: -20",
                    "HealAmpRegenPenaltyPercent: -20",
                    "DotHealthPercent: 0.5",
                    "AbilityCooldown: -10"
                ],
                "stats": {
                    "TechPower": 12,
                    "BonusHealth": 90,
                    "HealAmpReceivePenaltyPercent": -20,
                    "HealAmpRegenPenaltyPercent": -20,
                    "DotHealthPercent": 0.5,
                    "AbilityCooldown": -10
                },
                "description": "対象に継続ダメージを与え、対象の現在HPに応じたダメージを与えるディケイのダメージではキルできず、アイテムのプロックも発生しない"
            },
            {
                "id": "upgrade_spirit_snatch",
                "original": "Spirit Snatch",
                "translated": "スピリットスナッチ",
                "image": "images/items/upgrade_spirit_snatch.png",
                "price": 3200,
                "duration": 10,
                "effects": [
                    "SpiritDamage: 50",
                    "TechArmorGain: 5",
                    "TechArmorDamageReduction: -5",
                    "TechPowerGain: 35",
                    "TechPowerReduction: -35"
                ],
                "stats": {
                    "SpiritDamage": 50,
                    "TechArmorGain": 5,
                    "TechArmorDamageReduction": -5,
                    "TechPowerGain": 35,
                    "TechPowerReduction": -35
                },
                "description": "ヒーローに対して近接弱攻撃か近接強攻撃を行うと、追加でスピリットダメージを与え、対象のスピリット耐性とスピリットパワーを吸収する近接弱攻撃の場合は効果量が{s:LightMeleeScale}%に減少する"
            },
            {
                "id": "upgrade_target_stun",
                "original": "Knockdown",
                "translated": "ノックダウン",
                "image": "images/items/upgrade_target_stun.png",
                "price": 3200,
                "duration": "",
                "effects": [
                    "TechRadiusMultiplier: 6",
                    "TechRangeMultiplier: 6",
                    "StunDuration: 0.75",
                    "BonusHealth: 75"
                ],
                "stats": {
                    "TechRadiusMultiplier": 6,
                    "TechRangeMultiplier": 6,
                    "StunDuration": 0.75,
                    "BonusHealth": 75
                },
                "description": "{s:StunDelay}秒のディレイ後に対象をスタンさせる。空中にいる対象に対してはスタン継続時間が増加するスタン状態の間、対象にかかる重力を増加させる"
            },
            {
                "id": "upgrade_targeted_silence",
                "original": "Silence Wave",
                "translated": "サイレンスウェーブ",
                "image": "images/items/upgrade_targeted_silence.png",
                "price": 3200,
                "duration": 3,
                "effects": [
                    "AbilityCooldown: -10",
                    "Damage: 125",
                    "BonusHealth: 75"
                ],
                "stats": {
                    "AbilityCooldown": -10,
                    "Damage": 125,
                    "BonusHealth": 75
                },
                "description": "膨張する発射物を射出する。発射体は敵に着弾ダメージを与え、短い間サイレンス状態にするサイレンス状態は詠唱アビリティを中断しない"
            },
            {
                "id": "upgrade_tech_damage_pulse",
                "original": "Torment Pulse",
                "translated": "トーメントパルス",
                "image": "images/items/upgrade_tech_damage_pulse.png",
                "price": 3200,
                "duration": "",
                "effects": [
                    "BonusHealth: 75",
                    "DamagePulseAmount: 30"
                ],
                "stats": {
                    "BonusHealth": 75,
                    "DamagePulseAmount": 30
                },
                "description": "定期的に、一番近い敵2人にスピリットダメージを与える"
            },
            {
                "id": "upgrade_tech_range",
                "original": "Greater Expansion",
                "translated": "グレーターエクスパンダー",
                "image": "images/items/upgrade_tech_range.png",
                "price": 3200,
                "duration": "",
                "effects": [
                    "TechResist: 10",
                    "TechRadiusMultiplier: 20",
                    "TechRangeMultiplier: 20"
                ],
                "stats": {
                    "TechResist": 10,
                    "TechRadiusMultiplier": 20,
                    "TechRangeMultiplier": 20
                },
                "description": "アビリティおよびアイテムの範囲と効果範囲が拡大する"
            },
            {
                "id": "upgrade_ability_power_shard",
                "original": "Echo Shard",
                "translated": "エコーシャード",
                "image": "images/items/upgrade_ability_power_shard.png",
                "price": 6400,
                "duration": "",
                "effects": [
                    "BulletResist: 5",
                    "TechResist: 5",
                    "BonusFireRate: 5",
                    "AbilityCooldown: -10",
                    "TechRadiusMultiplier: 5",
                    "TechRangeMultiplier: 5"
                ],
                "stats": {
                    "BulletResist": 5,
                    "TechResist": 5,
                    "BonusFireRate": 5,
                    "AbilityCooldown": -10,
                    "TechRadiusMultiplier": 5,
                    "TechRangeMultiplier": 5
                },
                "description": ""
            },
            {
                "id": "upgrade_ability_refresher",
                "original": "Refresher",
                "translated": "リフレッシャー",
                "image": "images/items/upgrade_ability_refresher.png",
                "price": 6400,
                "duration": "",
                "effects": [
                    "AbilityCooldown: -210"
                ],
                "stats": {
                    "AbilityCooldown": -210
                },
                "description": "すべてのアビリティのクールダウンをリセットし、すべてのチャージを回復する"
            },
            {
                "id": "upgrade_aoe_root",
                "original": "Vortex Web",
                "translated": "ボルテックスウェブ",
                "image": "images/items/upgrade_aoe_root.png",
                "price": 6400,
                "duration": 4,
                "effects": [
                    "BonusSprintSpeed: 9m",
                    "AbilityCooldown: -22",
                    "TechRadiusMultiplier: 10",
                    "TechRangeMultiplier: 10",
                    "SlowPercent: 15"
                ],
                "stats": {
                    "BonusSprintSpeed": "9m",
                    "AbilityCooldown": -22,
                    "TechRadiusMultiplier": 10,
                    "TechRangeMultiplier": 10,
                    "SlowPercent": 15
                },
                "description": ""
            },
            {
                "id": "upgrade_arctic_blast",
                "original": "Arctic Blast",
                "translated": "アークティックブラスト",
                "image": "images/items/upgrade_arctic_blast.png",
                "price": 6400,
                "duration": "",
                "effects": [
                    "Damage: 150",
                    "AbilityCooldown: -12",
                    "TechResist: 15",
                    "FreezeDuration: 0.25"
                ],
                "stats": {
                    "Damage": 150,
                    "AbilityCooldown": -12,
                    "TechResist": 15,
                    "FreezeDuration": 0.25
                },
                "description": "膨張する氷の波動を放つ。波動は命中した敵にスピリットダメージを与えて凍結させ、その後スロウ状態を付与する。凍結状態の敵は受けるダメージが増加する"
            },
            {
                "id": "upgrade_boundless_spirit",
                "original": "Boundless Spirit",
                "translated": "バウンドレススピリット",
                "image": "images/items/upgrade_boundless_spirit.png",
                "price": 6400,
                "duration": "",
                "effects": [
                    "TechPower: 25",
                    "TechPowerPercent: 10",
                    "OutOfCombatHealthRegen: 4",
                    "BonusHealth: 100"
                ],
                "stats": {
                    "TechPower": 25,
                    "TechPowerPercent": 10,
                    "OutOfCombatHealthRegen": 4,
                    "BonusHealth": 100
                },
                "description": ""
            },
            {
                "id": "upgrade_discord",
                "original": "Scourge",
                "translated": "スカージ",
                "image": "images/items/upgrade_discord.png",
                "price": 6400,
                "duration": 10,
                "effects": [
                    "MaxHealthPercentAsDPS: 2",
                    "CombatBarrier: 300",
                    "CooldownReduction: 12",
                    "BonusHealth: 125",
                    "AbilityDuration: 3"
                ],
                "stats": {
                    "MaxHealthPercentAsDPS": 2,
                    "CombatBarrier": 300,
                    "CooldownReduction": 12,
                    "BonusHealth": 125,
                    "AbilityDuration": 3
                },
                "description": "指定した味方にスピリット耐性とオーラを付与する。オーラは最大HPに応じた{g:citadel_inline_attribute:'SpiritIcon'}ダメージダメージを与えるこのアイテムはセルフキャストできる"
            },
            {
                "id": "upgrade_escalating_exposure",
                "original": "Escalating Exposure",
                "translated": "エクスポージャー",
                "image": "images/items/upgrade_escalating_exposure.png",
                "price": 6400,
                "duration": 12,
                "effects": [
                    "MagicIncreasePerStack: 2",
                    "TechResist: 8",
                    "TechArmorDamageReduction: -8",
                    "MaxStacks: 8"
                ],
                "stats": {
                    "MagicIncreasePerStack": 2,
                    "TechResist": 8,
                    "TechArmorDamageReduction": -8,
                    "MaxStacks": 8
                },
                "description": "スピリットダメージを与えるとスタックするスピリット増幅を獲得する。この効果は対象に与えるスピリットダメージを上昇させる"
            },
            {
                "id": "upgrade_ethereal_bullets",
                "original": "Mercurial Magnum",
                "translated": "マーキュリーマグナム",
                "image": "images/items/upgrade_ethereal_bullets.png",
                "price": 6400,
                "duration": "",
                "effects": [
                    "BonusFireRate: 20",
                    "BonusClipSizePercent: 60",
                    "Damage: 120",
                    "BulletsBonusMagicDamage: 20",
                    "TechPower: 15"
                ],
                "stats": {
                    "BonusFireRate": 20,
                    "BonusClipSizePercent": 60,
                    "Damage": 120,
                    "BulletsBonusMagicDamage": 20,
                    "TechPower": 15
                },
                "description": "エンチャントしたアビリティを時間経過でチャージする。チャージ状態のアビリティは使用時に{g:citadel_inline_attribute:'BonusSpiritDamage'}を与え、{g:citadel_inline_attribute:'BonusFireRate'}を獲得し、弾薬をリロードする。また、次にリロードするまで、スピリットパワーに応じた追加スピリットダメージを弾薬が与えるようになる"
            },
            {
                "id": "upgrade_focus_lens",
                "original": "Focus Lens",
                "translated": "フォーカスレンズ",
                "image": "images/items/upgrade_focus_lens.png",
                "price": 6400,
                "duration": 4,
                "effects": [
                    "PercentDamage: 20",
                    "BonusFireRate: 20",
                    "TechPowerReduction: -26",
                    "MagicResistReduction: -12",
                    "AbilityDuration: 0.25",
                    "AbilityCooldown: -12"
                ],
                "stats": {
                    "PercentDamage": 20,
                    "BonusFireRate": 20,
                    "TechPowerReduction": -26,
                    "MagicResistReduction": -12,
                    "AbilityDuration": 0.25,
                    "AbilityCooldown": -12
                },
                "description": "指定した敵をサイレンス状態にする。サイレンス状態が終了したとき、サイレンス状態中に与えたすべてのダメージに応じたダメージを対象に与える"
            },
            {
                "id": "upgrade_glitch",
                "original": "Cursed Relic",
                "translated": "呪いの遺物",
                "image": "images/items/upgrade_glitch.png",
                "price": 6400,
                "duration": 3.25,
                "effects": [
                    "AbilityCooldown: -40",
                    "AbilityDuration: 0.25"
                ],
                "stats": {
                    "AbilityCooldown": -40,
                    "AbilityDuration": 0.25
                },
                "description": "敵1人を呪うことで行動を中断させ、サイレンス状態とディスアーム状態を付与し、アイテムを使用できなくする。非アルティメットのバフすべてを解除する"
            },
            {
                "id": "upgrade_magic_carpet",
                "original": "Magic Carpet",
                "translated": "マジックカーペット",
                "image": "images/items/upgrade_magic_carpet.png",
                "price": 6400,
                "duration": 12,
                "effects": [
                    "TechPower: 46",
                    "AbilityDuration: 8",
                    "BonusAbilityDurationPercent: 15",
                    "BonusHealth: 200",
                    "FlyMoveSpeed: 6m",
                    "SummonDuration: -0.3"
                ],
                "stats": {
                    "TechPower": 46,
                    "AbilityDuration": 8,
                    "BonusAbilityDurationPercent": 15,
                    "BonusHealth": 200,
                    "FlyMoveSpeed": "6m",
                    "SummonDuration": -0.3
                },
                "description": "乗ることで飛行が可能なマジックカーペットを召喚する。飛行中はスロウを無効化し、いずれかのアクションを実行するとカーペットが消失するカーペット召喚中はアビリティを使用できない"
            },
            {
                "id": "upgrade_mystic_reverb",
                "original": "Mystic Reverb",
                "translated": "ミスティックリバーブ",
                "image": "images/items/upgrade_mystic_reverb.png",
                "price": 6400,
                "duration": "",
                "effects": [
                    "AbilityLifestealPercentHero: 25",
                    "TechDamagePercent: 20"
                ],
                "stats": {
                    "AbilityLifestealPercentHero": 25,
                    "TechDamagePercent": 20
                },
                "description": ""
            },
            {
                "id": "upgrade_self_bubble",
                "original": "Ethereal Shift",
                "translated": "エーテリアルシフト",
                "image": "images/items/upgrade_self_bubble.png",
                "price": 6400,
                "duration": 4,
                "effects": [
                    "AbilityDuration: 2",
                    "BonusSpirit: 30",
                    "BonusMoveSpeed: 2m",
                    "TechResist: 10",
                    "AbilityCooldown: -10",
                    "FloatMoveSpeed: 3.5m"
                ],
                "stats": {
                    "AbilityDuration": 2,
                    "BonusSpirit": 30,
                    "BonusMoveSpeed": "2m",
                    "TechResist": 10,
                    "AbilityCooldown": -10,
                    "FloatMoveSpeed": "3.5m"
                },
                "description": "ヴォイド状態となって一時的に対象指定不可および無敵状態になる。発動中はゆっくりと浮遊し、行動はできない。ヴォイド状態が終了するとスピリットパワー、移動速度、スピリット耐性が上昇する途中でキャンセル可能発動時にあらゆるアクティブアビリティをキャンセルする"
            },
            {
                "id": "upgrade_spirit_burn",
                "original": "Spirit Burn",
                "translated": "スピリットバーン",
                "image": "images/items/upgrade_spirit_burn.png",
                "price": 6400,
                "duration": "",
                "effects": [
                    "ExplosionDamage: 160",
                    "TechRadiusMultiplier: 12",
                    "TechRangeMultiplier: 12",
                    "DPS: 20",
                    "AbilityCooldown: -6"
                ],
                "stats": {
                    "ExplosionDamage": 160,
                    "TechRadiusMultiplier": 12,
                    "TechRangeMultiplier": 12,
                    "DPS": 20,
                    "AbilityCooldown": -6
                },
                "description": "敵に対して{s:DamageThresholdDuration}秒以内に一定以上のスピリットダメージを与えると、ダメージを与える爆発を発生させ、付近にいる敵に燃焼を付与する。燃焼状態の敵は継続ダメージを受け、被回復量が低下する非ヒーローに対しては与えるダメージとクールダウンが半減する"
            },
            {
                "id": "upgrade_transcendent_cooldown",
                "original": "Transcendent Cooldown",
                "translated": "トランセンデント",
                "image": "images/items/upgrade_transcendent_cooldown.png",
                "price": 6400,
                "duration": "",
                "effects": [
                    "ItemCooldownReduction: 10",
                    "OutOfCombatHealthRegen: 10",
                    "CooldownReduction: 15"
                ],
                "stats": {
                    "ItemCooldownReduction": 10,
                    "OutOfCombatHealthRegen": 10,
                    "CooldownReduction": 15
                },
                "description": "アビリティおよびアイテムのクールダウンを短縮する"
            },
            {
                "id": "upgrade_ultimate_burst",
                "original": "Lightning Scroll",
                "translated": "ライトニングスクロール",
                "image": "images/items/upgrade_ultimate_burst.png",
                "price": 6400,
                "duration": 2,
                "effects": [
                    "BonusHealth: 100",
                    "Damage: 100",
                    "BonusSprintSpeed: 5m",
                    "StunDuration: 0.75"
                ],
                "stats": {
                    "BonusHealth": 100,
                    "Damage": 100,
                    "BonusSprintSpeed": "5m",
                    "StunDuration": 0.75
                },
                "description": "アルティメットでダメージを与えると、短いディレイ後に{g:citadel_inline_attribute:'Stun'}を付与し、{g:citadel_inline_attribute:'BonusSpiritDamage'}を与える"
            },
            {
                "id": "upgrade_mystical_piano",
                "original": "Mystical Piano",
                "translated": "ミスティカルピアノ",
                "image": "images/items/upgrade_mystical_piano.png",
                "price": "Legendary",
                "duration": 1.7,
                "effects": [
                    "AbilityCooldown: -15",
                    "Radius: 3m"
                ],
                "stats": {
                    "AbilityCooldown": -15,
                    "Radius": "3m"
                },
                "description": "短いディレイ後に、対象のエリア内にいる敵をスタン状態にし、スタミナを消耗させる。スタンした敵はスタン終了後、一時的に目眩状態になる"
            },
            {
                "id": "upgrade_omnicharge_pendant",
                "original": "Omnicharge Signet",
                "translated": "オムニチャージ",
                "image": "images/items/upgrade_omnicharge_pendant.png",
                "price": "Legendary",
                "duration": "",
                "effects": [
                    "BonusAbilityCharges: 2",
                    "BonusSpiritForChargedAbilities: 30",
                    "CooldownBetweenChargeReduction: 5",
                    "CooldownReductionOnChargedAbilities: 10"
                ],
                "stats": {
                    "BonusAbilityCharges": 2,
                    "BonusSpiritForChargedAbilities": 30,
                    "CooldownBetweenChargeReduction": 5,
                    "CooldownReductionOnChargedAbilities": 10
                },
                "description": "エンチャントした任意のアビリティ（アルティメットを除く）に、アビリティ追加チャージを付与する。すでにチャージを持つアビリティはさらに多くの追加チャージを獲得する"
            },
            {
                "id": "upgrade_patrons_blessing",
                "original": "Mystic Conduit",
                "translated": "ミスティックコンジット",
                "image": "images/items/upgrade_patrons_blessing.png",
                "price": "Legendary",
                "duration": "",
                "effects": [
                    "TechRadiusMultiplier: 10",
                    "TechRangeMultiplier: 10",
                    "CooldownReduction: 10"
                ],
                "stats": {
                    "TechRadiusMultiplier": 10,
                    "TechRangeMultiplier": 10,
                    "CooldownReduction": 10
                },
                "description": "自身と味方に強力なスピリット特化のオーラを付与する。味方への効果は低下する"
            },
            {
                "id": "upgrade_prism_blast",
                "original": "Prism Blast",
                "translated": "プリズムブラスト",
                "image": "images/items/upgrade_prism_blast.png",
                "price": "Legendary",
                "duration": 6,
                "effects": [
                    "AbilityDuration: 2",
                    "AbilityCooldown: -10"
                ],
                "stats": {
                    "AbilityDuration": 2,
                    "AbilityCooldown": -10
                },
                "description": "短時間ヴォイド状態になり、対象指定不可かつ無敵状態になる。この間、自身の周囲を回転するレーザーを放つ"
            },
            {
                "id": "upgrade_shivas_bracelet",
                "original": "Frostbite Charm",
                "translated": "凍傷のチャーム",
                "image": "images/items/upgrade_shivas_bracelet.png",
                "price": "Legendary",
                "duration": "",
                "effects": [
                    "AbilityCooldown: -2",
                    "ImbuedCooldownReduction: 15",
                    "ImbuedTechPower: 40",
                    "Damage: 100",
                    "FreezeDuration: 0.3"
                ],
                "stats": {
                    "AbilityCooldown": -2,
                    "ImbuedCooldownReduction": 15,
                    "ImbuedTechPower": 40,
                    "Damage": 100,
                    "FreezeDuration": 0.3
                },
                "description": "エンチャントしたアビリティのクールダウンが短縮され、スピリットパワーを獲得する。そのアビリティがダメージを与えると、対象を凍結させ、追加ダメージを与えるクールダウンは対象ごとに適用される"
            },
            {
                "id": "upgrade_shrink_ray",
                "original": "Shrink Ray",
                "translated": "シュリンクレイ",
                "image": "images/items/upgrade_shrink_ray.png",
                "price": "Legendary",
                "duration": "",
                "effects": [
                    "ModelScaleGrowth: -0.15",
                    "ModelScaleGrowthTooltip: -15",
                    "BonusMoveSpeed: 2m",
                    "BonusFireRate: 20",
                    "AbilityCooldown: -15"
                ],
                "stats": {
                    "ModelScaleGrowth": -0.15,
                    "ModelScaleGrowthTooltip": -15,
                    "BonusMoveSpeed": "2m",
                    "BonusFireRate": 20,
                    "AbilityCooldown": -15
                },
                "description": "対象のモデルサイズを縮小させ、移動速度を上昇させる。このモードではトンネルを使用できる。セルフキャストが可能"
            },
            {
                "id": "upgrade_unstable_concoction",
                "original": "Unstable Concoction",
                "translated": "不安定な調合薬",
                "image": "images/items/upgrade_unstable_concoction.png",
                "price": "Legendary",
                "duration": 4,
                "effects": [
                    "StunDuration: 0.5",
                    "BaseAttackDamagePercent: 50",
                    "TechPower: 50",
                    "BonusHealth: 1300"
                ],
                "stats": {
                    "StunDuration": 0.5,
                    "BaseAttackDamagePercent": 50,
                    "TechPower": 50,
                    "BonusHealth": 1300
                },
                "description": "アンストッパブルを獲得し、速度、HP、スピリット、武器ダメージが増加する調合薬を飲む。短時間後に、自身はデスして爆発し、周辺の敵をスタンさせ、最大HPに応じたダメージを与える"
            }
        ]
    }
};

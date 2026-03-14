// SHELLS HACK - マスターデータ
// このファイルを編集すると全HTMLに反映されます
const GAME_DATA = {
  "game_rules": {
    "attack_conditions": {
      "exposure": {
        "direct": [
          "業務端末",
          "VPN Gateway",
          "IdP",
          "Web AP",
          "Client",
          "外部SaaS",
          "DNS",
          "3rd Party JS"
        ],
        "internal": [
          "運用端末or踏み台サーバ",
          "DB",
          "Backup",
          "社内SaaS",
          "クラウド管理コンソール",
          "Storage"
        ]
      }
    },
    "asset_effects": {
      "金融資産情報": {
        "漏洩": {
          "stock": -15
        },
        "削除": {
          "stock": -20
        },
        "停止": {
          "stock": -5
        }
      },
      "顧客個人情報": {
        "漏洩": {
          "stock": -10
        },
        "削除": {
          "stock": -20
        },
        "停止": {
          "stock": -5
        }
      },
      "社内認証情報": {
        "漏洩": {
          "special": "bypass_adjacency"
        },
        "削除": {
          "funds": -5
        },
        "停止": {
          "funds": -1
        }
      },
      "企業秘密": {
        "漏洩": {
          "stock": -5
        },
        "削除": {
          "stock": -5
        },
        "停止": {
          "stock": -5
        }
      }
    },
    "adjacency": {
      "業務端末": [
        "IdP",
        "VPN Gateway"
      ],
      "IdP": [
        "社内SaaS",
        "クラウド管理コンソール"
      ],
      "VPN Gateway": [
        "運用端末or踏み台サーバ"
      ],
      "クラウド管理コンソール": [
        "DB",
        "Backup",
        "Storage"
      ],
      "運用端末or踏み台サーバ": [
        "DB",
        "Storage"
      ],
      "Web AP": [
        "DB",
        "Storage"
      ]
    }
  },
  "companies": [
    {
      "name": "ニュース配信メディア",
      "fund": 3,
      "robust": 1,
      "desc": "ニュース配信を行うメディア企業。広告収入モデル。",
      "assets": {
        "金融資産情報": [],
        "顧客個人情報": [
          "DB",
          "Backup",
          "社内SaaS"
        ],
        "社内認証情報": [
          "業務端末"
        ],
        "企業秘密": [
          "業務端末",
          "社内SaaS"
        ]
      }
    },
    {
      "name": "伝統金融機関",
      "fund": 5,
      "robust": 3,
      "desc": "銀行・証券・保険等の伝統的金融機関。高セキュリティ要件。",
      "assets": {
        "金融資産情報": [
          "DB",
          "Backup"
        ],
        "顧客個人情報": [
          "DB",
          "Backup",
          "Storage",
          "社内SaaS",
          "運用端末or踏み台サーバ"
        ],
        "社内認証情報": [
          "業務端末",
          "運用端末or踏み台サーバ"
        ],
        "企業秘密": [
          "業務端末",
          "社内SaaS"
        ]
      }
    },
    {
      "name": "暗号資産系企業",
      "fund": 3,
      "robust": 4,
      "desc": "暗号資産取引所・ウォレットサービス。高度なセキュリティ対策。",
      "assets": {
        "金融資産情報": [
          "DB",
          "Backup"
        ],
        "顧客個人情報": [
          "DB",
          "Backup",
          "Storage",
          "社内SaaS"
        ],
        "社内認証情報": [
          "業務端末",
          "社内SaaS"
        ],
        "企業秘密": [
          "社内SaaS"
        ]
      }
    },
    {
      "name": "EC",
      "fund": 2,
      "robust": 2,
      "desc": "ECサイト運営企業。決済情報を扱う。",
      "assets": {
        "金融資産情報": [],
        "顧客個人情報": [
          "DB",
          "Backup",
          "社内SaaS"
        ],
        "社内認証情報": [
          "業務端末",
          "社内SaaS"
        ],
        "企業秘密": [
          "業務端末",
          "社内SaaS"
        ]
      }
    },
    {
      "name": "HRTech",
      "fund": 3,
      "robust": 2,
      "desc": "人事・採用管理SaaSを提供。従業員の個人情報を大量に保持。",
      "assets": {
        "金融資産情報": [],
        "顧客個人情報": [
          "DB",
          "Backup",
          "社内SaaS"
        ],
        "社内認証情報": [
          "業務端末"
        ],
        "企業秘密": [
          "業務端末",
          "社内SaaS"
        ]
      }
    },
    {
      "name": "動画配信メディア",
      "fund": 4,
      "robust": 3,
      "desc": "動画配信プラットフォーム。サブスクリプションモデル。",
      "assets": {
        "金融資産情報": [],
        "顧客個人情報": [
          "DB",
          "Backup",
          "社内SaaS"
        ],
        "社内認証情報": [
          "業務端末",
          "社内SaaS",
          "運用端末or踏み台サーバ"
        ],
        "企業秘密": [
          "業務端末",
          "社内SaaS"
        ]
      }
    },
    {
      "name": "重工産業企業",
      "fund": 5,
      "robust": 1,
      "desc": "製造業・インフラ企業。OT/IT融合環境。",
      "assets": {
        "金融資産情報": [],
        "顧客個人情報": [
          "社内SaaS"
        ],
        "社内認証情報": [
          "業務端末",
          "運用端末or踏み台サーバ"
        ],
        "企業秘密": [
          "社内SaaS",
          "DB",
          "Backup"
        ]
      }
    }
  ],
  "actors": [
    {
      "name": "国家支援 金銭調達集団",
      "type": "Red Team",
      "fund": 4,
      "tech": 3,
      "desc": "国家が支援する攻撃集団。株価操作か換金性の高い情報の窃取が目的。",
      "purpose": "株価30%下落 または 金融資産情報の窃取"
    },
    {
      "name": "国家支援 産業スパイ集団",
      "type": "Red Team",
      "fund": 5,
      "tech": 3,
      "desc": "国家が支援する攻撃集団。主に技術情報の流出が目的。APT攻撃を得意とする。",
      "purpose": "企業秘密の窃取"
    },
    {
      "name": "産業スパイ集団",
      "type": "Red Team",
      "fund": 2,
      "tech": 2,
      "desc": "窃取した情報を売りさばくのが目的の攻撃集団。",
      "purpose": "社内認証情報 または 企業秘密の窃取"
    },
    {
      "name": "ハクティビスト集団",
      "type": "Red Team",
      "fund": 3,
      "tech": 1,
      "desc": "政治的な思想表明のために攻撃を仕掛ける少数集団。サービス不能攻撃に特化。",
      "purpose": "サービス停止 または 株価20%下落"
    }
  ],
  "components": [
    {
      "name": "業務端末",
      "layer": "端末",
      "exposure": "direct",
      "desc": "社員が日常業務に使用する端末。",
      "init_lv": {
        "偵察": 3,
        "侵入": 1,
        "実行": 1
      }
    },
    {
      "name": "VPN Gateway",
      "layer": "Gateway",
      "exposure": "direct",
      "desc": "リモートアクセス用VPN装置。",
      "init_lv": {
        "偵察": 1,
        "侵入": 1,
        "実行": 1
      }
    },
    {
      "name": "IdP",
      "layer": "Gateway",
      "exposure": "direct",
      "desc": "認証基盤。Okta/Entra ID等。",
      "init_lv": {
        "偵察": 1,
        "侵入": 3,
        "実行": 2
      }
    },
    {
      "name": "運用端末or踏み台サーバ",
      "layer": "運用",
      "exposure": "internal",
      "desc": "本番環境へのアクセス用端末・踏み台サーバ。VDI、SSH踏み台等。",
      "init_lv": {
        "偵察": 2,
        "侵入": 2,
        "実行": 1
      }
    },
    {
      "name": "クラウド管理コンソール",
      "layer": "運用",
      "exposure": "internal",
      "desc": "AWS/GCP/Azure等の管理画面。",
      "init_lv": {
        "偵察": 1,
        "侵入": 3,
        "実行": 3
      }
    },
    {
      "name": "社内SaaS",
      "layer": "運用",
      "exposure": "internal",
      "desc": "社内向けSaaSサービス。",
      "init_lv": {
        "偵察": 2,
        "侵入": 3,
        "実行": 2
      }
    },
    {
      "name": "DB",
      "layer": "Backend",
      "exposure": "internal",
      "desc": "データベースサーバ。",
      "init_lv": {
        "偵察": 2,
        "侵入": 2,
        "実行": 1
      }
    },
    {
      "name": "Backup",
      "layer": "Backend",
      "exposure": "internal",
      "desc": "バックアップストレージ。",
      "init_lv": {
        "偵察": 2,
        "侵入": 2,
        "実行": 1
      }
    },
    {
      "name": "Web AP",
      "layer": "Frontend",
      "exposure": "direct",
      "desc": "Webアプリケーションサーバ。",
      "init_lv": {
        "偵察": 1,
        "侵入": 2,
        "実行": 1
      }
    },
    {
      "name": "Storage",
      "layer": "Backend",
      "exposure": "internal",
      "desc": "オブジェクトストレージ。S3等。",
      "init_lv": {
        "偵察": 2,
        "侵入": 2,
        "実行": 1
      }
    },
    {
      "name": "外部SaaS",
      "layer": "External",
      "exposure": "direct",
      "desc": "外部SaaSサービス。",
      "init_lv": {
        "偵察": 1,
        "侵入": 3,
        "実行": 2
      }
    },
    {
      "name": "DNS",
      "layer": "External",
      "exposure": "direct",
      "desc": "DNSサーバ。",
      "init_lv": {
        "偵察": 1,
        "侵入": 3,
        "実行": 2
      }
    },
    {
      "name": "3rd Party JS",
      "layer": "External",
      "exposure": "direct",
      "desc": "サードパーティJavaScript。",
      "init_lv": {
        "偵察": 1,
        "侵入": 3,
        "実行": 1
      }
    }
  ],
  "attacks": [
    {
      "name": "OSINT",
      "category": "偵察",
      "target": [
        "全て(直接攻撃可能)"
      ],
      "condition": "なし",
      "cost": 0,
      "lv": {
        "偵察": 1
      },
      "desc": "公開情報(GitHub、技術ブログ)やダークウェブでの漏洩情報収集。",
      "effect": "偵察成功時: 対象のLv開示"
    },
    {
      "name": "アクティブスキャン",
      "category": "偵察",
      "target": [
        "全て(直接攻撃可能)"
      ],
      "condition": "なし",
      "cost": 2,
      "lv": {
        "偵察": 2
      },
      "desc": "ポートスキャン、脆弱性スキャン等の能動的偵察。",
      "effect": "偵察成功時: 対象のLv開示"
    },
    {
      "name": "ソーシャルエンジニアリング",
      "category": "偵察",
      "target": [
        "業務端末"
      ],
      "condition": "なし",
      "cost": 4,
      "lv": {
        "偵察": 3
      },
      "desc": "人間の心理を突いた情報収集。なりすまし電話、SNS調査等。",
      "effect": "偵察成功時: 対象のLv開示"
    },
    {
      "name": "パッシブ偵察(侵入後)",
      "category": "偵察",
      "target": [
        "全て(隣接必須)"
      ],
      "condition": "隣接侵入済み",
      "cost": 3,
      "lv": {
        "偵察": 2
      },
      "desc": "内部ネットワークでの情報収集。通信傍受、内部スキャン等。",
      "effect": "偵察成功時: 対象のLv開示"
    },
    {
      "name": "フィッシングサイト構築",
      "category": "武器化",
      "target": [
        "武器準備"
      ],
      "condition": "攻撃対象が業務端末の場合",
      "cost": 2,
      "lv": {},
      "buff": {
        "侵入": 1
      },
      "desc": "偽サイトの構築。認証情報窃取用。",
      "effect": "攻撃バフ: 侵入+1（次ターンまで）"
    },
    {
      "name": "エクスプロイトキット入手",
      "category": "武器化",
      "target": [
        "武器準備"
      ],
      "condition": "なし",
      "cost": 2,
      "lv": {},
      "buff": {
        "侵入": 1
      },
      "desc": "既知脆弱性のエクスプロイトキット入手。",
      "effect": "攻撃バフ: 侵入+1（次ターンまで）"
    },
    {
      "name": "RaaS契約",
      "category": "武器化",
      "target": [
        "武器準備"
      ],
      "condition": "攻撃カードがランサムウェア展開の場合",
      "cost": 2,
      "lv": {},
      "buff": {
        "実行": 1
      },
      "desc": "Ransomware as a Serviceの購入。LockBit、BlackCat等。",
      "effect": "攻撃バフ: 実行+1（次ターンまで）"
    },
    {
      "name": "ゼロデイ開発",
      "category": "武器化",
      "target": [
        "武器準備"
      ],
      "condition": "技術力★★★以上",
      "cost": 2,
      "lv": {},
      "buff": {
        "侵入": 2
      },
      "desc": "未知の脆弱性を発見・武器化。",
      "effect": "攻撃バフ: 侵入+2（次ターンまで）"
    },
    {
      "name": "マルウェア開発",
      "category": "武器化",
      "target": [
        "武器準備"
      ],
      "condition": "技術力★★以上",
      "cost": 2,
      "lv": {},
      "buff": {
        "実行": 2
      },
      "desc": "カスタムマルウェアの開発。RAT、バックドア等。",
      "effect": "攻撃バフ: 実行Lv+2（次ターンまで）"
    },
    {
      "name": "標的型フィッシング",
      "category": "侵入",
      "target": [
        "業務端末"
      ],
      "condition": "なし",
      "cost": 3,
      "lv": {
        "侵入": 2
      },
      "desc": "特定個人を狙ったフィッシングメール。",
      "effect": "侵入成功時: 侵入済みフラグ"
    },
    {
      "name": "水飲み場攻撃",
      "category": "侵入",
      "target": [
        "業務端末"
      ],
      "condition": "なし",
      "cost": 2,
      "lv": {
        "侵入": 1
      },
      "desc": "Webサイト閲覧だけで感染させる攻撃。",
      "effect": "侵入成功時: 侵入済みフラグ"
    },
    {
      "name": "VPN脆弱性悪用",
      "category": "侵入",
      "target": [
        "VPN Gateway"
      ],
      "condition": "なし",
      "cost": 3,
      "lv": {
        "侵入": 2
      },
      "desc": "VPN機器の脆弱性を突いた侵入。",
      "effect": "侵入成功時: 侵入済みフラグ"
    },
    {
      "name": "Webアプリ脆弱性攻撃",
      "category": "侵入",
      "target": [
        "Web AP"
      ],
      "condition": "なし",
      "cost": 3,
      "lv": {
        "侵入": 2
      },
      "desc": "Webアプリの脆弱性を突いた侵入。SSRF，LFI等。",
      "effect": "侵入成功時: 侵入済みフラグ"
    },
    {
      "name": "インジェクション攻撃",
      "category": "侵入",
      "target": [
        "Web AP"
      ],
      "condition": "なし",
      "cost": 2,
      "lv": {
        "侵入": 1
      },
      "desc": "OSコマンド/SQLインジェクションによる侵入。WebShellによるバックドア設置等。",
      "effect": "侵入成功時: 侵入済みフラグ"
    },
    {
      "name": "IdP侵害",
      "category": "侵入",
      "target": [
        "IdP"
      ],
      "condition": "なし",
      "cost": 3,
      "lv": {
        "侵入": 2
      },
      "desc": "認証基盤への侵入。Golden SAML等。",
      "effect": "侵入成功時: 侵入済みフラグ"
    },
    {
      "name": "サプライチェーン攻撃",
      "category": "侵入",
      "target": [
        "業務端末",
        "Web AP"
      ],
      "condition": "なし",
      "cost": 3,
      "lv": {
        "侵入": 2
      },
      "desc": "サプライチェーンを経由した侵入。依存パッケージ汚染等。",
      "effect": "侵入成功時: 侵入済みフラグ"
    },
    {
      "name": "内部者買収",
      "category": "侵入",
      "target": [
        "業務端末"
      ],
      "condition": "なし",
      "cost": 5,
      "lv": {
        "侵入": 3
      },
      "desc": "社員を買収して攻撃の踏み台を設置。",
      "effect": "侵入成功時: 侵入済みフラグ"
    },
    {
      "name": "ラテラルムーブメント(脆弱性悪用)",
      "category": "侵入",
      "subcategory": "横展開",
      "target": [
        "Storage",
        "DB",
        "Backup",
        "運用端末or踏み台サーバ"
      ],
      "condition": "隣接侵入済み",
      "cost": 1,
      "lv": {
        "侵入": 2
      },
      "desc": "脆弱性を突いた横展開。",
      "effect": "侵入成功時: 侵入済みフラグ"
    },
    {
      "name": "ラテラルムーブメント(認証情報悪用)",
      "category": "侵入",
      "subcategory": "横展開",
      "target": [
        "全て"
      ],
      "condition": "隣接侵入済み",
      "cost": 1,
      "lv": {
        "侵入": 2
      },
      "desc": "窃取した認証情報での横展開。",
      "effect": "侵入成功時: 侵入済みフラグ"
    },
    {
      "name": "データ窃取・外部送信",
      "category": "目的実行",
      "action_type": "漏洩",
      "target": [
        "全て"
      ],
      "condition": "侵入済み",
      "cost": 2,
      "lv": {
        "実行": 2
      },
      "desc": "データを窃取して外部に送信。",
      "effect": "対象の保管資産に応じた株価下落。社内認証情報漏洩時: 横展開条件解除(3ターン)"
    },
    {
      "name": "ランサムウェア展開",
      "category": "目的実行",
      "action_type": "漏洩",
      "target": [
        "業務端末",
        "運用端末or踏み台サーバ",
        "Backup",
        "Storage"
      ],
      "condition": "侵入済み",
      "cost": 2,
      "lv": {
        "実行": 2
      },
      "desc": "ランサムウェアを展開してデータ暗号化。さらに外部漏洩させ二重脅迫。",
      "effect": "対象の保管資産に応じた株価下落。社内認証情報漏洩時: 横展開条件解除(3ターン)"
    },
    {
      "name": "ワイパー攻撃",
      "category": "目的実行",
      "action_type": "削除",
      "target": [
        "全て"
      ],
      "condition": "侵入済み",
      "cost": 4,
      "lv": {
        "実行": 2
      },
      "desc": "データを完全に破壊。復旧不能にする。",
      "effect": "対象の保管資産に応じた株価下落"
    },
    {
      "name": "DDoS攻撃",
      "category": "目的実行",
      "action_type": "停止",
      "target": [
        "Web AP",
        "DNS"
      ],
      "condition": "なし",
      "cost": 4,
      "lv": {
        "実行": 1
      },
      "desc": "分散型サービス拒否攻撃。",
      "effect": "対象の保管資産に応じた株価下落"
    },
    {
      "name": "インフラ破壊",
      "category": "目的実行",
      "action_type": "停止",
      "target": [
        "Web AP",
        "運用端末or踏み台サーバ",
        "Storage",
        "DB",
        "Backup"
      ],
      "condition": "侵入済み",
      "cost": 3,
      "lv": {
        "実行": 2
      },
      "desc": "インフラ基盤を破壊。復旧に長時間を要する。",
      "effect": "対象の保管資産に応じた株価下落"
    }
  ],
  "countermeasures": [
    {
      "name": "EDR導入",
      "target": [
        "業務端末",
        "運用端末or踏み台サーバ"
      ],
      "cost": 3,
      "effect": {
        "侵入": 1
      },
      "desc": "Endpoint Detection & Response。端末の異常検知・対応。"
    },
    {
      "name": "NDR導入",
      "target": [
        "業務端末",
        "運用端末or踏み台サーバ"
      ],
      "cost": 3,
      "effect": {
        "実行": 1
      },
      "desc": "Network Detection & Response。ネットワーク全体の統合検知・対応。"
    },
    {
      "name": "MFA導入",
      "target": [
        "VPN Gateway",
        "IdP",
        "クラウド管理コンソール",
        "運用端末or踏み台サーバ",
        "社内SaaS"
      ],
      "cost": 2,
      "effect": {
        "侵入": 2
      },
      "desc": "多要素認証の導入。"
    },
    {
      "name": "イミュータブル・バックアップ",
      "target": [
        "Backup"
      ],
      "cost": 2,
      "effect": {
        "実行": 2
      },
      "desc": "変更不可能なバックアップ。ランサムウェア対策。"
    },
    {
      "name": "サイバーハイジーン",
      "target": [
        "全て"
      ],
      "cost": 3,
      "effect": {
        "侵入": 1
      },
      "desc": "定期的な脆弱性スキャンとパッチ管理。"
    },
    {
      "name": "ランタイム検知/脅威検知",
      "target": [
        "Web AP",
        "クラウド管理コンソール",
        "運用端末or踏み台サーバ",
        "Storage",
        "DB",
        "Backup"
      ],
      "cost": 2,
      "effect": {
        "侵入": 1,
        "実行": 1
      },
      "desc": "アプリケーション実行時の異常検知。RASP等。"
    },
    {
      "name": "アタックサーフェス監視",
      "target": [
        "全て(直接攻撃可能)"
      ],
      "cost": 2,
      "effect": {
        "偵察": 1
      },
      "desc": "外部から見える攻撃対象の継続的監視・評価。"
    },
    {
      "name": "セキュリティ教育",
      "target": [
        "業務端末",
        "運用端末or踏み台サーバ"
      ],
      "cost": 2,
      "effect": {
        "偵察": 1,
        "侵入": 1
      },
      "desc": "フィッシング対策等のセキュリティ意識向上。"
    },
    {
      "name": "IAM強化",
      "target": [
        "クラウド管理コンソール"
      ],
      "cost": 2,
      "effect": {
        "侵入": 1,
        "実行": 1
      },
      "desc": "最小権限原則、権限の定期レビュー。"
    },
    {
      "name": "暗号化強化",
      "target": [
        "DB",
        "Storage",
        "Backup"
      ],
      "cost": 2,
      "effect": {
        "実行": 1
      },
      "desc": "保存時・転送時の暗号化強化。"
    },
    {
      "name": "ペンテスト/インシデント演習",
      "target": [
        "全て"
      ],
      "cost": 3,
      "effect": {
        "侵入": 1,
        "実行": 1
      },
      "desc": "ペネトレーションテストとインシデント対応手順の訓練。"
    },
    {
      "name": "WAF強化",
      "target": [
        "Web AP"
      ],
      "cost": 2,
      "effect": {
        "侵入": 1
      },
      "desc": "WAFルールの強化。SQLi、XSS対策。"
    },
    {
      "name": "CDN導入",
      "target": [
        "Web AP",
        "DNS"
      ],
      "cost": 2,
      "effect": {
        "実行": 1
      },
      "desc": "CDN導入による可用性向上。DDoS緩和。"
    }
  ],
  "events": [
    {
      "name": "重大脆弱性発覚",
      "target": "Blue Team不利",
      "desc": "主要製品で重大な脆弱性が発覚。全コンポーネントの侵入耐性-1。",
      "effect": "侵入 -1",
      "effects": {
        "defense_mod": {
          "侵入": -1
        }
      }
    },
    {
      "name": "セキュリティ予算増額",
      "target": "Blue Team有利",
      "desc": "経営層がセキュリティ投資を承認。",
      "effects": {
        "funds_bonus": {
          "blue": 2
        }
      }
    },
    {
      "name": "攻撃グループ摘発",
      "target": "Blue Team有利",
      "desc": "法執行機関が攻撃グループを摘発。",
      "effects": {
        "funds_penalty": {
          "red": -2
        }
      }
    },
    {
      "name": "情報漏洩報道",
      "target": "Blue Team不利",
      "desc": "他社の情報漏洩が報道され、自社も調査対象に。",
      "effects": {
        "stock_mod": -5
      }
    },
    {
      "name": "平穏な日",
      "target": "なし",
      "desc": "特に何も起きない平穏な1日。",
      "effects": {}
    }
  ]
};

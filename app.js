const form = document.querySelector("#promptForm");
const output = document.querySelector("#promptOutput");
const toast = document.querySelector("#toast");
const modeHint = document.querySelector("#modeHint");

const fields = {
  mode: document.querySelector("#mode"),
  request: document.querySelector("#request"),
  background: document.querySelector("#background"),
  audience: document.querySelector("#audience"),
  outputType: document.querySelector("#outputType"),
  materials: document.querySelector("#materials"),
  constraints: document.querySelector("#constraints"),
  tone: document.querySelector("#tone"),
  detail: document.querySelector("#detail"),
  inferMissing: document.querySelector("#inferMissing"),
  askQuestions: document.querySelector("#askQuestions"),
  includeSummary: document.querySelector("#includeSummary"),
  illustColors: document.querySelector("#illustColors"),
  illustBg: document.querySelector("#illustBg"),
  illustFigure: document.querySelector("#illustFigure"),
  illustFigureCount: document.querySelector("#illustFigureCount"),
  illustFraming: document.querySelector("#illustFraming"),
  illustTheme: document.querySelector("#illustTheme"),
  wfPageType: document.querySelector("#wfPageType"),
  wfOutputType: document.querySelector("#wfOutputType"),
  wfCompany: document.querySelector("#wfCompany"),
  wfIndustry: document.querySelector("#wfIndustry"),
  wfPageName: document.querySelector("#wfPageName"),
  wfPagePurpose: document.querySelector("#wfPagePurpose"),
  wfMaterials: document.querySelector("#wfMaterials"),
  wfSections: document.querySelector("#wfSections"),
  wfNotes: document.querySelector("#wfNotes"),
  propIndustry: document.querySelector("#propIndustry"),
  propIssue: document.querySelector("#propIssue"),
  propGoal: document.querySelector("#propGoal"),
  propTarget: document.querySelector("#propTarget"),
  propSolution: document.querySelector("#propSolution"),
  uiPerspective: document.querySelector("#uiPerspective"),
  uiPageType: document.querySelector("#uiPageType"),
  uiTarget: document.querySelector("#uiTarget"),
  uiGoal: document.querySelector("#uiGoal"),
  uiVolume: document.querySelector("#uiVolume"),
  designTarget: document.querySelector("#designTarget"),
  designAudience: document.querySelector("#designAudience"),
  designTone: document.querySelector("#designTone"),
  designRef: document.querySelector("#designRef"),
  designNg: document.querySelector("#designNg"),

  researchTheme: document.querySelector("#researchTheme"),
  researchPurpose: document.querySelector("#researchPurpose"),
  researchTargets: document.querySelector("#researchTargets"),
  researchFocus: document.querySelector("#researchFocus"),
  minType: document.querySelector("#minType"),
  minFormat: document.querySelector("#minFormat"),
  minWish: document.querySelector("#minWish"),
  minContent: document.querySelector("#minContent"),
  customRole: document.querySelector("#customRole"),
  customConditions: document.querySelector("#customConditions"),
  customTask: document.querySelector("#customTask"),
  emailRecipient: document.querySelector("#emailRecipient"),
  emailContent: document.querySelector("#emailContent"),
  emailTone: document.querySelector("#emailTone"),
  policyType: document.querySelector("#policyType"),
  policyCompany: document.querySelector("#policyCompany"),
  policyIssue: document.querySelector("#policyIssue"),
  policyGoal: document.querySelector("#policyGoal"),
  policyMaterials: document.querySelector("#policyMaterials"),
  bsIssue: document.querySelector("#bsIssue"),
  bsTarget: document.querySelector("#bsTarget"),
  bsContext: document.querySelector("#bsContext"),
  bsGoal: document.querySelector("#bsGoal"),
  bsTone: document.querySelector("#bsTone"),
  bsMaterials: document.querySelector("#bsMaterials"),
};

const modeLabels = {
  proposal: "企画書・提案書",
  wireframe: "ワイヤーフレーム",
  policy: "社内制度・ルール整理",
  "ui-review": "UI/UXレビュー",
  "design-direction": "デザイン指示書",
  email: "メール・依頼文",
  minutes: "議事録・要約リライト",
  brainstorm: "アイデア出し",
  research: "リサーチ・競合分析",
  custom: "自由に作る",
  illust: "イラスト生成",
};

const modeHints = {
  proposal: "提案の構成、見出し、伝える順番を作りたい時。",
  wireframe: "白・グレー・黒の低忠実度ワイヤーフレームを作りたい時。HTML・画像どちらでも出力できます。",
  policy: "社内ルール、制度、運用フローを整理したい時。",
  "ui-review": "画面や導線の改善点をレビューしてほしい時。",
  "design-direction": "制作チームに渡す制作指示を作りたい時。",
  email: "営業、依頼、確認、謝罪などの文章を作りたい時。",
  minutes: "議事録を読みやすく整えたい時。",
  brainstorm: "施策案、企画案、切り口を広げたい時。",
  research: "競合、顧客、業界、参考事例を整理したい時。",
  custom: "上にない用途を自由に作りたい時。",
  illust: "フラットベクター編集イラストの画像生成プロンプトを作りたい時。",
};

const exampleRequests = {
  proposal: "",
  wireframe: "",
  policy: "",
  "ui-review": "",
  "design-direction": "",
  email: "納期延期をクライアントに丁重にお願いするメールを書きたい",
  minutes: "プロジェクトキックオフ会議の議事録を整理したい",
  brainstorm: "",
  research: "",
  custom: "",
  illust: "",
};

const roleMap = {
  proposal: "企画書・提案書構成クリエイターAI",
  wireframe: "Webサイトの情報設計と低忠実度ワイヤーフレームを作るUI設計者",
  policy: "組織開発コンサルタント兼制度設計ファシリテーターAI",
  "ui-review": "UI/UXの課題を見つけて改善案を出すレビュアー",
  "design-direction": "クリエイティブディレクター兼デザイン戦略AI",
  email: "営業コミュニケーション設計AI",
  minutes: "ビジネスコミュニケーション編集AI",
  brainstorm: "戦略プランナー兼アイデアクリエイターAI",
  research: "市場分析コンサルタント兼リサーチAI",
  custom: "プロンプトエンジニア兼専門領域支援AI",
  illust: "フラットベクターイラスト生成AI",
};

const templateConfigs = {
  proposal: {
    goals: [
      "説得力が高く、読み手の意図を動かす企画構成をつくる",
      "企画のストーリーラインを明確化する（問題 → 解決 → 実行 → 成果）",
      "スライド化しやすいアウトラインを生成する",
      "必要に応じて UI/HTML に転用できる構造を抽出する",
    ],
    constraints: [
      "必ず「問題 → 解決 → 実行 → 成果」の骨子でストーリー化する",
      "スライド1枚1メッセージを意識した簡潔構造にする",
      "UI化可能な要素（Hero / Feature / Flow / CTA など）を抽出する",
      "読み手にとってのメリットを必ず文章に含める",
      "前提条件が不足している場合は、合理的な推定で補完する",
      "必要に応じて複数構成案（A案 / B案）を提示できる",
      "実現可能性の低い施策は除外する",
    ],
    materials: ["過去資料 / RFP / 要件書", "クライアントの既存サイト", "提案内容のメモ", "参考にしたい資料・ブランドトーン", "競合情報", "利用者 / ターゲット像"],
    output: ["提案書要約（Executive Summary）", "As-Is（現状課題）整理", "To-Be（目指す姿）整理", "ソリューション全体像", "スライド構成案（10〜20枚前後）", "UIモック化用の抽出情報（Hero / Feature / Flow / CTAなど）", "追加で検討すべき論点"],
    options: ["スライド化（Googleスライド / PDF向け）のページ割り調整", "HTMLモック化・デザインディレクションへの接続情報を追加", "A案 / B案の構造出し", "説明トークスクリプト案"],
  },
  wireframe: {
    goals: [
      "添付資料や入力内容をもとにWebサイトのページ構成を整理する",
      "ワイヤーフレームテンプレートのルール・クラス・セクションパターンを使って低忠実度ワイヤーを作る",
      "情報の優先順位、セクション構成、導線をわかりやすく可視化する",
      "実装やデザインに進む前のたたき台として使える状態にする",
    ],
    constraints: [
      "フォントは Noto Sans JP の Regular 〜 Bold を使用する",
      "フォントサイズは4の倍数のみ。最小サイズは16px",
      "余白・幅・高さ・gap・padding・margin はすべて4の倍数のみ",
      "使用カラーは #000000 / #A4A4A4 / #FFFFFF / #F3F3F3 / #CCCCCC のみ",
      "アイコンはグレーの四角（.icon-sq）で表現し、具体的な絵柄は入れない。基本100×100px、小サイズは40×40px以上",
      "画像・写真エリアは .img-ph クラス＋ SVGシンボル #pic で表現する",
      "矢印は SVGシンボル #arrow-ne（↗）または #arrow-e（→）を使用する",
      "実画像・実ロゴ・ブランドカラー・装飾的なデザイン表現は一切入れない",
      "HTMLは1ページずつ書き出す",
      "資料にないデータを推測で補った場合は、HTML末尾に「推測で補った内容」として箇条書きで明記する",
    ],
    materials: ["wireframe-template.html（ベーステンプレート）", "サイトの目的・対象ページ一覧", "掲載したい資料や原稿", "参考サイトURL", "ターゲットユーザー", "必要な導線やCTA"],
    output: ["ページごとの役割と構成方針", "1ページずつの完成HTML（<!DOCTYPE html>から始まる）", "資料にないため推測した内容の補足", "次にデザイン化するときの確認ポイント"],
    options: ["トップページのみ作成", "下層ページも含めて作成", "採用サイト向け構成", "サービスサイト向け構成", "LP向け構成"],
    extraPrompt: [
      "# 【ワイヤーフレーム専用ルール】",
      "## 基本設定",
      "- 1440px幅基準。コンテンツ幅は max-width: 1120px を原則とする。",
      "- セクション背景は白（#FFFFFF）。KV・フッターなど必要な箇所のみグレー／黒を使う。",
      "- CSSカスタムプロパティを使う場合は以下の変数名を使用する:",
      "  --black: #000000 / --gray-dark: #666666 / --gray-mid: #999999 / --gray-light: #CCCCCC / --bg-light: #F3F3F3 / --white: #FFFFFF / --border: #DDDDDD",
      "",
      "## セクションパターン（テンプレートから選んで組み合わせる）",
      "- HEADER   : ロゴ左 ＋ ナビ中央 ＋ 電話ボタン右",
      "- KV-TOP   : 全画面グレー背景、テキスト左下（トップページ用）",
      "- KV-SUB   : コンパクト、パンくず付き（下層ページ用）",
      "- SEC-A    : 左テキスト ＋ 右番号リスト（番号＋テキスト＋矢印）",
      "- SEC-B    : 中央タイトル ＋ Pointカード交互（画像左右交互）",
      "- SEC-C    : 番号グリッド3列（丸番号＋テキスト）",
      "- SEC-D    : カード3列または4列（画像＋タイトル＋テキスト）",
      "- SEC-E    : 番号リスト詳細（番号＋テキスト本文＋右画像）",
      "- SEC-F    : Newsリスト ＋ 右画像",
      "- SEC-G    : スタッフ紹介4列（縦長写真）",
      "- SEC-H    : アクセス／MAP（地図左＋テキスト右）",
      "- SEC-I    : 会社概要テーブル",
      "- SEC-J    : お問い合わせフォーム",
      "- CTA      : テキスト ＋ ボタン2つ横並び全幅（背景 #F3F3F3）",
      "- FOOTER   : 黒背景、ロゴ左＋ナビ3列＋コピーライト",
      "",
      "## SVGシンボル（<svg style='display:none'>内で定義して使い回す）",
      "- #pic      : 画像プレースホルダー（山＋太陽アイコン、背景 #F3F3F3）",
      "- #arrow-ne : 右上向き矢印（↗）",
      "- #arrow-e  : 右向き矢印（→）",
      "- #map-pin  : マップピン",
      "",
      "## 出力",
      "- `<!DOCTYPE html>` から始まる完成HTMLを出力する。",
      "- 資料にない情報を推測で補った場合は、HTML末尾に「推測で補った内容」として箇条書きで明記する。",
    ],
  },
  policy: {
    goals: [
      "組織の事業戦略・MVVと整合した制度案をつくる",
      "メンバーの納得感・再現性・公平性の高い制度を構築する",
      "経営陣や管理職が意思決定しやすい案を提示する",
      "制度導入後の運用ロードマップまで整理する",
    ],
    constraints: [
      "理想論ではなく、現実に運用できる制度を優先する",
      "評価・報酬・等級の接続（連動ロジック）を明確化する",
      "評価項目は多くしすぎない（3〜6項目を推奨）",
      "メンバーが自分の状態を自己判定しやすい構造にする",
      "職種×等級の役割定義はMECEを意識する",
      "ベンチャー〜中小企業でも使える設計にする",
      "メリット・デメリット・導入リスクも併記する",
      "浸透施策（説明会、1on1、ガイドライン）まで含めて提案する",
    ],
    materials: ["現状の評価シート・等級表", "給与テーブル", "組織課題（離職、採用、人材育成など）", "既存の職種一覧", "経営陣が重視しているポイント"],
    output: ["課題整理（As-Is）", "あるべき状態（To-Be）", "制度設計コンセプト / 原則", "等級制度の案（構造・レベル定義・役割範囲）", "評価制度の案（項目・基準・重み・頻度・プロセス）", "報酬制度の案（給与レンジ / インセンティブ構造）", "運用フロー（年間サイクル / ミーティング設計）", "制度定着のための浸透施策", "リスク・懸念点と対策", "経営陣で議論すべき残タスク"],
    options: ["スライド化前提のアウトライン生成", "役割定義テンプレート（職種別・等級別）", "KPI・OKR連携の組み込み", "1on1・フィードバック制度のセット設計", "カルチャー醸成のための行動指針（バリュー）案"],
  },
  "ui-review": {
    goals: [
      "UI/UX上の課題を具体的・構造的に特定する",
      "使いやすさ・わかりやすさを高める改善案を提示する",
      "情報設計、視認性、導線、アクセシビリティの改善余地を可視化する",
      "実装チームへ渡せるレベルの改善指示を作る",
    ],
    constraints: [
      "ただの感想ではなく、構造化されたレビューにする",
      "評価観点を分ける（情報設計 / 導線 / UI / 文章 / アクセシビリティ）",
      "必ず「課題 → 理由 → 改善案」の順で書く",
      "課題は抽象化しすぎず、UI部品・導線レベルまで具体化する",
      "スクリーンショットやURLが不足していても、仮説ベースで補完してよい",
    ],
    materials: ["スクリーンショット", "URL", "Figmaリンク", "ワイヤーフレーム", "計測データ", "ユーザーの声"],
    output: [
      "総評",
      "UX観点の課題と改善案",
      "UI観点の課題と改善案",
      "情報設計（IA）観点の課題と改善案",
      "導線（Flow）観点の課題と改善案",
      "アクセシビリティ観点の課題と改善案",
      "改善後の構成イメージ",
      "追加で検討すべき論点",
    ],
    options: ["簡易HTMLモック", "UI改善案A/B/C", "競合比較", "デザイントークン提案"],
  },
  "design-direction": {
    goals: [
      "デザインの方向性を明文化する",
      "制作チームとの認識ズレを減らす",
      "トンマナ・世界観・UI方針を整理する",
      "デザインレビュー基準を事前定義する",
      "Web / グラフィック / UI / LP などの制作品質を安定化させる",
    ],
    constraints: [
      "デザイン抽象論ではなく制作指示レベルまで具体化する",
      "UI / レイアウト / 余白 / タイポ / 配色 / 写真トーンまで言語化する",
      "なぜその方向性なのかも説明する",
      "ターゲット視点での印象設計を行う",
      "実装可能性・制作コストも考慮する",
      "必要に応じてA/B方向性を提示する",
      "制作レビュー時の評価軸も定義する",
    ],
    materials: ["参考サイトURL", "Figma / ワイヤー", "ブランドガイドライン", "ロゴ / 写真素材", "既存デザイン", "SNS / 広告クリエイティブ", "コンセプトメモ"],
    output: ["デザイン戦略サマリー", "ターゲット印象設計", "トーン＆マナー定義", "画面 / クリエイティブ構成方針", "デザインレビュー基準", "制作チーム向けディレクションメモ", "必要に応じたA/B方向性案"],
    options: ["UIコンポーネント設計指示", "LPワイヤーフレーム構成", "デザインシステム方針", "HTMLモック生成への接続情報", "ブランドキーワード抽出", "コピーライティングトーン定義"],
  },
  email: {
    goals: [
      "相手に伝わる・動いてもらえる文章を作る",
      "長すぎず、失礼なく、要点が整理された文面にする",
      "相手との関係性に合ったトーンに調整する",
      "営業・提案・確認・催促・日程調整などを円滑に進める",
    ],
    constraints: [
      "要件を先に伝える",
      "長文になりすぎない",
      "相手視点でのメリットを含める",
      "圧迫感・高圧感を避ける",
      "件名も生成する",
      "必要に応じて複数トーン（丁寧 / カジュアル）を提示する",
      "ビジネスマナーを維持する",
      "誤解を生みにくい文章にする",
    ],
    materials: ["ラフメモ", "過去メール", "提案概要", "日程候補", "URL / 添付資料情報", "相手の属性情報"],
    output: ["件名案（3案程度）", "メール本文（宛名 / 挨拶 / 本文 / CTA / 締め文）", "Slack / Chat向け短文化版", "トーン違いバリエーション（フォーマル版 / 柔らかめ版 / 簡潔版）"],
    options: ["英文化", "営業トーク調整", "催促になりすぎないリマインド化", "クレーム回避表現への調整", "エグゼクティブ向け短文化", "提案送付文とのセット生成"],
  },
  minutes: {
    goals: [
      "会議内容を分かりやすく整理する",
      "認識ズレを防ぐ",
      "決定事項・宿題・次回アクションを明確化する",
      "クライアントに失礼のない文章へ整える",
      "長すぎず、実務で読みやすい形式にする",
    ],
    constraints: [
      "ラフな会話表現はビジネス文体へ整える",
      "発言の意図を補完しつつ、事実ベースを維持する",
      "決定事項と未決事項を分離する",
      "ToDo / 担当 / 期限を可能な限り整理する",
      "攻撃的・曖昧・責任転嫁に見える表現を避ける",
      "長文になりすぎない",
      "クライアントにそのまま送れる品質にする",
    ],
    materials: ["Zoom文字起こし", "Notionメモ", "Slackログ", "過去議事録", "タスク一覧", "日程情報"],
    output: ["会議概要（日時 / 参加者 / 会議目的）", "議題ごとの整理", "決定事項", "未決事項 / 確認事項", "ToDo一覧", "次回予定", "クライアント送付用メール文面"],
    options: ["箇条書き強化版", "エグゼクティブ向け要約版", "Slack共有用短文化", "Notion貼り付け最適化", "決定事項だけ抽出版", "論点整理モード"],
  },
  brainstorm: {
    goals: [
      "課題解決につながる施策の幅出しを行う",
      "独自性の高いクリエイティブ案を創出する",
      "実行ステップ・期待効果・KPIまで整理する",
      "施策群としての流れ（ストーリー）を構築する",
    ],
    constraints: [
      "必ず複数案（3〜5案）を出す",
      "奇抜すぎて実行不可能な案は除外する",
      "必ず「目的 → 施策概要 → 実施ステップ → 期待効果 → KPI」の構造で提示する",
      "施策単体ではなく、施策群（ストーリー）として整理する",
      "初手でやるべき施策、後半に効く施策など、時系列の優先順位も提示する",
      "必要に応じてターゲット別アプローチも提示する",
      "ROIやコストイメージにも触れる",
    ],
    materials: ["過去の施策例", "ターゲットの詳細情報", "社内リソース・予算感", "参考にしたいブランド / 事例URL", "施策の想定期間（短期 / 中期 / 長期）"],
    output: ["課題整理（As-Is）", "施策コンセプト（方向性）", "施策案の一覧（3〜5案）", "各施策の詳細（目的 / 施策概要 / 実施ステップ / 期待効果 / KPI）", "時系列の優先順位（ロードマップ案）", "ターゲット別の追加施策", "追加で検討すべき論点"],
    options: ["施策資料（スライド）構成案の作成", "クリエイティブ案のラフスケッチ（テキストベース）", "広告・SNS投稿案の生成", "バリュープロポジション整理", "戦略キャンペーンのストーリー構成化"],
  },
  research: {
    goals: [
      "市場・競合・ユーザー動向を整理する",
      "意思決定に必要な情報を短時間で把握する",
      "差別化ポイント・戦略示唆を抽出する",
      "提案書・企画書・戦略会議に使える情報へ整理する",
    ],
    constraints: [
      "単なる情報列挙ではなく示唆を含める",
      "比較可能な形で整理する",
      "事実と推測を分離する",
      "実務で使えるレベルの具体性を持たせる",
      "競合優位性・弱点を両面で整理する",
      "必要に応じてフレームワーク（3C / SWOT 等）を使用する",
      "情報不足時は合理的推定を行う",
    ],
    materials: ["調査対象URL", "提案書 / 企画書", "既存調査メモ", "競合一覧", "KPI情報", "業界知見", "ユーザーインタビュー結果"],
    output: ["調査サマリー", "競合比較一覧", "ユーザー観点分析", "戦略示唆", "UI / UX / クリエイティブ観点", "今後追加で調査すべき論点"],
    options: ["SWOT分析", "3C分析", "カオスマップ生成", "提案資料向け要約", "スライド化前提アウトライン", "UIスクリーン比較", "SEO観点分析", "SNS戦略分析"],
  },
  custom: {
    goals: ["自由形式の依頼を構造化し、最適なプロンプトに変換する", "要望の粒度を補完し、曖昧さを排除し、期待値を明確にする", "専門性・実用性・再現性の高い指示文を生成する"],
    constraints: ["曖昧な表現は補完して具体化する", "対象とゴールを明文化する", "出力内容の粒度は実行可能レベルにする", "必要なら複数パターン（A/B）を提示する", "記号・数字・書式は正確に保持する", "ユーザーの不足情報は合理的推定で補完してよい"],
    materials: ["入力文", "補足情報・要件", "参考資料", "参考サイトURL", "実務で使う文脈", "想定ターゲット"],
    output: ["要件整理（Before→After）", "最適化されたプロンプト本文（コピペで実行可能）", "改善ポイント・追加で明示すべき情報（ユーザー向け）"],
    options: ["複数提示（A/B/Cパターン）", "実装工程 or モック工程に接続する補足案", "ターゲット別カスタム", "国内 / グローバル仕様", "トーン選択（フォーマル / カジュアル / クリエイティブ）"],
  },
  illust: {
    goals: [],
    constraints: [],
    materials: [],
    output: [],
    options: [],
  },
};

const outputLabels = {
  auto: "おまかせ",
  outline: "構成案",
  document: "文章・ドキュメント",
  table: "表形式",
  html: "HTML",
  checklist: "チェックリスト",
  slides: "スライド構成",
  image: "画像として出力（PNG）",
};

const toneLabels = {
  clear: "わかりやすく",
  business: "ビジネス向け",
  friendly: "やわらかく",
  professional: "プロっぽく",
  concise: "短く簡潔に",
};

const detailLabels = {
  balanced: "ちょうどよく",
  simple: "短め",
  deep: "かなり詳しく",
};

const detailInstructions = {
  balanced: "各セクションは5行程度を目安に、要点を押さえてまとめてください。",
  simple: "各セクションは3行以内で端的にまとめてください。箇条書き・見出しを積極的に使い、冗長な説明は省いてください。",
  deep: "各項目に根拠・具体例・懸念点を含め、詳細に展開してください。関係者が判断できる情報量を目指してください。",
};

const defaults = {
  mode: "proposal",
  request: "",
  background: "",
  audience: "",
  outputType: "outline",
  materials: "",
  constraints: "",
  tone: "clear",
  detail: "balanced",
  inferMissing: true,
  askQuestions: false,
  includeSummary: true,
};

function buildWireframePrompt(state) {
  const opt = (label, val) => (val || "").trim() ? `- ${label}：${val.trim()}` : null;
  const pageTypeLabels = {
    top: "トップページ", sub: "下層ページ", lp: "LP（ランディングページ）",
    all: "全ページ", any: "おまかせ（AIが構成を提案）",
  };

  const infoLines = [
    opt("会社名", state.wfCompany),
    opt("業種", state.wfIndustry),
    `- ページの種類：${pageTypeLabels[state.wfPageType] || "全ページ"}`,
    opt("ページ名", state.wfPageName),
    opt("目的", state.wfPagePurpose),
  ].filter(Boolean);

  const wfSectionsRaw = (state.wfSections || "").trim();
  const knownWfExamples = Object.values(wfSectionsExamples).filter(v => v !== "");
  const wfSectionsVal = knownWfExamples.includes(wfSectionsRaw) ? "" : wfSectionsRaw;
  const sectionsText = wfSectionsVal
    ? `【セクション構成】\n${wfSectionsVal}`
    : "セクション構成はサイトの目的・業種・ターゲットを考慮してAIが最適な構成を提案してください。";

  const outputType = state.wfOutputType === "image" ? "image" : "html";

  const imageRules = [
    "# 【画像出力専用ルール】",
    "- HTMLは生成せず、PythonのPillow（PIL）を使って直接ワイヤーフレーム画像を生成してください。",
    "- 幅1440px、高さはコンテンツ量に合わせて可変にしてください。",
    "- 使用カラーは #000000 / #A4A4A4 / #FFFFFF / #F3F3F3 / #CCCCCC のみ。",
    "- 写真エリアは #F3F3F3 の矩形＋中央に「IMAGE」テキストで表現。",
    "- アイコンは #CCCCCC の正方形（基本100×100px）で表現。",
    "- 最終的にPNG画像としてダウンロード可能な状態で出力してください。",
    "- コードを実行して実際に画像ファイルを生成してください。",
  ].join("\n");

  const htmlRules = [
    "# 【ワイヤーフレーム専用ルール】",
    "## 基本設定",
    "- 1440px幅基準。コンテンツ幅は max-width: 1120px を原則とする。",
    "- セクション背景は白（#FFFFFF）。KV・フッターなど必要箇所のみグレー／黒を使う。",
    "- CSSカスタムプロパティ：--black: #000000 / --gray-light: #CCCCCC / --bg-light: #F3F3F3 / --white: #FFFFFF / --border: #DDDDDD",
    "",
    "## セクションパターン",
    "HEADER / KV-TOP / KV-SUB / SEC-A〜J / CTA / FOOTER から選んで組み合わせる。",
    "",
    "## SVGシンボル",
    "- #pic：画像プレースホルダー（背景 #F3F3F3）",
    "- #arrow-ne：↗矢印 / #arrow-e：→矢印",
    "",
    "## 出力",
    "- <!DOCTYPE html> から始まる完成HTMLを出力する。",
    "- 資料にない情報を推測で補った場合はHTML末尾に「推測で補った内容」として箇条書きで明記する。",
  ].join("\n");

  const materialsText = (state.wfMaterials || "").trim();
  const wfTemplate = `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ワイヤーフレーム テンプレート</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet">

  <!--
  ================================================================
  【ワイヤーフレーム テンプレート】
  参考デザイン：1440px幅のWebサイト
  ----------------------------------------------------------------
  デザインルール
    フォント    : Noto Sans JP Regular〜Bold
    フォントサイズ: 4の倍数・最小16px
    余白        : 4の倍数のみ
    文字色      : #000000
    アイコン    : グレーの四角（.icon-sq）
    矢印        : SVGシンボル #arrow-ne（↗）/ #arrow-e（→）を使用
    画像枠      : .img-ph ＋ <svg><use href="#pic"/></svg>・背景#F3F3F3
    セクション背景: 白（KV・フッターのみ有色）
    コンテンツ幅 : max-width 1120px
  ----------------------------------------------------------------
  収録パターン一覧（不要なセクションは削除して使う）
    HEADER          ヘッダー（ロゴ＋ナビ＋電話ボタン）
    KV-TOP          KV トップ用（全画面・テキスト左下）
    KV-SUB          KV 下層用（コンパクト・パンくず付き）
    SEC-A           左テキスト＋右番号リスト（参考画像の Service パターン）
    SEC-B           中央タイトル＋Pointカード交互（画像左右交互）
    SEC-C           番号グリッド3列（丸番号＋テキスト）
    SEC-D           カード3列（画像＋テキスト）
    SEC-E           番号リスト詳細（番号＋テキスト＋右画像）
    SEC-F           Newsリスト＋右画像（参考画像の News パターン）
    SEC-G           スタッフ紹介4列（縦長写真）
    SEC-H           アクセス / MAP（地図＋テキスト）
    SEC-I           会社概要テーブル
    SEC-J           お問い合わせフォーム
    CTA             CTA（テキスト左＋ボタン右）
    FOOTER          フッター（黒背景）
  ================================================================
  -->

  <style>

    /* ==============================================================
       RESET & BASE
    ============================================================== */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --black:      #000000;
      --gray-dark:  #666666;
      --gray-mid:   #999999;
      --gray-light: #CCCCCC;
      --bg-light:   #F3F3F3;
      --white:      #FFFFFF;
      --border:     #DDDDDD;
    }

    body {
      font-family: 'Noto Sans JP', sans-serif;
      font-size: 16px;
      color: var(--black);
      background: var(--white);
      line-height: 1.7;
    }

    a { color: inherit; text-decoration: none; }

    /* ==============================================================
       PARTS: 画像プレースホルダー
       ※ 背景 #F3F3F3、SVGシンボル #pic を使用
    ============================================================== */
    .img-ph {
      background: var(--bg-light);
      border: 1px solid var(--border);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .img-ph svg { pointer-events: none; }

    /* ==============================================================
       PARTS: グレー四角アイコン
       ※ アイコンはグレーの四角で表現。サイズは用途に応じてインラインで指定
    ============================================================== */
    .icon-sq {
      display: inline-block;
      background: var(--gray-light);
      flex-shrink: 0;
    }

    /* ==============================================================
       PARTS: 矢印アイコン
       ※ SVGシンボル使用。↗ = #arrow-ne / → = #arrow-e
    ============================================================== */
    .arrow-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    /* ==============================================================
       PARTS: セクションヘッダー（中央揃え）
       ※ 英語ラベル(小) → 日本語タイトル(大) → 説明文
    ============================================================== */
    .sec-header { text-align: center; margin-bottom: 48px; }
    .sec-header.left { text-align: left; }

    .sec-label {
      display: block;
      font-size: 16px;
      font-weight: 400;
      color: var(--gray-mid);
      margin-bottom: 16px;
      letter-spacing: 0.08em;
    }
    .sec-title {
      font-size: 40px;
      font-weight: 700;
      line-height: 1.3;
      color: var(--black);
      margin-bottom: 20px;
    }
    .sec-desc {
      font-size: 16px;
      color: var(--gray-dark);
      line-height: 1.8;
      max-width: 640px;
      margin-left: auto;
      margin-right: auto;
    }
    .sec-header.left .sec-desc { margin-left: 0; }

    /* ==============================================================
       PARTS: ボタン
    ============================================================== */
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 16px 48px;
      font-size: 16px;
      font-family: inherit;
      font-weight: 400;
      cursor: pointer;
      border: none;
      min-width: 160px;
    }
    .btn-gray    { background: var(--gray-light); color: var(--black); }
    .btn-dark    { background: var(--black);      color: var(--white); }
    .btn-outline { background: var(--white); color: var(--black); border: 1px solid var(--black); }

    /* ボタン行 */
    .btn-row-right  { display: flex; justify-content: flex-end;  margin-top: 40px; }
    .btn-row-center { display: flex; justify-content: center;    margin-top: 48px; }
    .btn-row-left   { display: flex; justify-content: flex-start; margin-top: 40px; }

    /* ==============================================================
       LAYOUT: セクション共通
       ※ 背景は白。KV・フッターのみ有色
    ============================================================== */
    .section { padding: 80px 64px; background: var(--white); }
    .section-inner { max-width: 1120px; margin: 0 auto; }


    /* ==============================================================
       HEADER
    ============================================================== */
    header {
      position: sticky;
      top: 0;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 32px;
      height: 64px;
      background: var(--white);
      border-bottom: 1px solid var(--border);
    }
    .logo {
      width: 64px; height: 40px;
      background: var(--gray-light);
      display: flex; align-items: center; justify-content: center;
      font-size: 16px; font-weight: 700;
      flex-shrink: 0;
    }
    .gnav { display: flex; gap: 32px; font-size: 16px; }
    .gnav a { font-weight: 400; }

    /* 右：電話番号 2行ダークボタン */
    .header-tel-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2px;
      padding: 0 24px;
      height: 64px;
      background: var(--black);
      color: var(--white);
      font-family: inherit;
      border: none;
      cursor: pointer;
      white-space: nowrap;
    }
    .header-tel-num  { font-size: 16px; font-weight: 700; letter-spacing: 0.05em; }
    .header-tel-note { font-size: 12px; font-weight: 400; }


    /* ==============================================================
       KV: TOP用
       ※ トップページ専用。灰色全画面、テキスト左下
    ============================================================== */
    .kv-top {
      background: var(--gray-light);
      min-height: 560px;
      display: flex;
      align-items: flex-end;
      padding: 0 64px 80px;
    }
    .kv-top-title {
      font-size: 56px;
      font-weight: 700;
      color: var(--white);
      line-height: 1.3;
      margin-bottom: 16px;
    }
    .kv-top-sub {
      font-size: 16px;
      color: var(--white);
      line-height: 1.8;
      max-width: 560px;
    }


    /* ==============================================================
       KV: 下層用
       ※ 日本語タイトル（大）→ 英語（小）/ パンくず右下
    ============================================================== */
    .kv-sub {
      position: relative;
      background: var(--gray-light);
      min-height: 240px;
      display: flex;
      align-items: flex-end;
      padding: 0 64px 40px;
    }
    .kv-sub-ja {
      display: block;
      font-size: 36px;
      font-weight: 700;
      color: var(--white);
      line-height: 1.3;
      margin-bottom: 8px;
    }
    .kv-sub-en {
      display: block;
      font-size: 16px;
      font-weight: 400;
      color: var(--white);
      letter-spacing: 0.12em;
    }
    .breadcrumb {
      position: absolute;
      bottom: 16px;
      right: 32px;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 16px;
      color: var(--white);
      opacity: .8;
    }


    /* ==============================================================
       SEC-A: 左テキスト＋右番号リスト
       ※ 参考画像の「Service」パターン
    ============================================================== */
    .layout-a { display: flex; gap: 80px; align-items: flex-start; }
    .layout-a-left  { width: 360px; flex-shrink: 0; }
    .layout-a-right { flex: 1; }

    .num-list { display: flex; flex-direction: column; }
    .num-item {
      display: flex;
      align-items: center;
      gap: 24px;
      padding: 24px 0;
      border-bottom: 1px solid var(--border);
    }
    .num-item:first-child { border-top: 1px solid var(--border); }
    .num-label {
      font-size: 16px;
      font-weight: 700;
      color: var(--gray-light);
      width: 32px;
      flex-shrink: 0;
    }
    .num-text {
      font-size: 20px;
      font-weight: 700;
      flex: 1;
    }


    /* ==============================================================
       SEC-B: Pointカード交互
       ※ 参考画像の「Point」パターン
    ============================================================== */
    .point-list { display: flex; flex-direction: column; gap: 24px; }
    .point-card {
      display: flex;
      border: 1px solid var(--border);
      min-height: 280px;
    }
    /* 奇数: テキスト左・画像右 */
    .point-card:nth-child(odd)  .point-text { order: 1; }
    .point-card:nth-child(odd)  .point-img  { order: 2; }
    /* 偶数: 画像左・テキスト右 */
    .point-card:nth-child(even) .point-img  { order: 1; }
    .point-card:nth-child(even) .point-text { order: 2; }

    .point-text {
      flex: 1;
      padding: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .point-num {
      display: block;
      font-size: 16px;
      font-weight: 400;
      color: var(--gray-mid);
      margin-bottom: 12px;
    }
    .point-title {
      font-size: 24px;
      font-weight: 700;
      line-height: 1.4;
      margin-bottom: 16px;
    }
    .point-desc {
      font-size: 16px;
      color: var(--gray-dark);
      line-height: 1.8;
    }
    .point-img { width: 420px; flex-shrink: 0; }


    /* ==============================================================
       SEC-C: 番号グリッド 3列
       ※ 丸番号＋テキストの実績・強みリスト
    ============================================================== */
    .num-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
    }
    .num-grid-item { display: flex; gap: 16px; align-items: flex-start; }
    .num-circle {
      width: 48px; height: 48px;
      border: 1px solid var(--border);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 16px;
      flex-shrink: 0;
    }
    .num-grid-text { font-size: 16px; line-height: 1.7; }


    /* ==============================================================
       SEC-D: カード 3列（画像＋タイトル＋テキスト）
    ============================================================== */
    .card-grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }
    .card { background: var(--white); border: 1px solid var(--border); }
    .card-img {
      width: 100%; height: 200px;
      background: var(--bg-light);
      display: flex; align-items: center; justify-content: center;
    }
    .card-body   { padding: 20px; }
    .card-title  { font-size: 20px; font-weight: 700; margin-bottom: 8px; }
    .card-text   { font-size: 16px; color: var(--gray-dark); line-height: 1.7; }

    /* 4列バリエーション */
    .card-grid-4 { grid-template-columns: repeat(4, 1fr); gap: 16px; }


    /* ==============================================================
       SEC-E: 番号リスト詳細（番号＋テキスト本文＋右画像）
    ============================================================== */
    .detail-list { display: flex; flex-direction: column; }
    .detail-item {
      display: flex;
      align-items: flex-start;
      gap: 24px;
      padding: 32px 0;
      border-bottom: 1px solid var(--border);
    }
    .detail-num {
      font-size: 36px;
      font-weight: 700;
      color: var(--gray-light);
      width: 48px;
      flex-shrink: 0;
    }
    .detail-body { flex: 1; }
    .detail-name { font-size: 20px; font-weight: 700; margin-bottom: 8px; }
    .detail-text { font-size: 16px; color: var(--gray-dark); line-height: 1.8; }
    .detail-img  { width: 320px; height: 200px; flex-shrink: 0; }


    /* ==============================================================
       SEC-F: Newsリスト＋右画像
       ※ 参考画像の「News」パターン
    ============================================================== */
    .news-layout { display: flex; gap: 64px; align-items: flex-start; margin-top: 40px; }
    .news-list-col { flex: 1; }
    .news-img-col  { width: 400px; flex-shrink: 0; aspect-ratio: 4/3; }

    .news-list { display: flex; flex-direction: column; }
    .news-item {
      display: flex;
      align-items: center;
      gap: 20px;
      padding: 20px 0;
      border-bottom: 1px solid var(--border);
    }
    .news-date  { font-size: 16px; color: var(--gray-mid); flex-shrink: 0; width: 72px; }
    .news-title { font-size: 20px; font-weight: 700; flex: 1; }


    /* ==============================================================
       SEC-G: スタッフ紹介 4列（縦長写真）
    ============================================================== */
    .staff-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
    }
    .staff-photo {
      width: 100%;
      aspect-ratio: 3/4;
      margin-bottom: 16px;
    }
    .staff-role    { font-size: 16px; color: var(--gray-mid); margin-bottom: 8px; }
    .staff-name    { font-size: 20px; font-weight: 700; margin-bottom: 12px; }
    .staff-comment { font-size: 16px; color: var(--gray-dark); line-height: 1.7; }


    /* ==============================================================
       SEC-H: アクセス / MAP（地図＋テキスト）
    ============================================================== */
    .access-list { display: flex; flex-direction: column; gap: 48px; }
    .access-item { display: flex; gap: 64px; align-items: flex-start; }
    .access-map  { width: 480px; height: 320px; flex-shrink: 0; }
    .access-info { flex: 1; padding-top: 8px; }
    .access-label { font-size: 16px; color: var(--gray-mid); margin-bottom: 8px; }
    .access-name  { font-size: 24px; font-weight: 700; margin-bottom: 16px; }
    .access-addr  { font-size: 16px; color: var(--gray-dark); line-height: 1.8; margin-bottom: 24px; }

    /* マップピン SVG */
    .map-pin { width: 48px; height: 64px; opacity: .4; }


    /* ==============================================================
       SEC-I: 会社概要テーブル
    ============================================================== */
    .company-table { width: 100%; border-collapse: collapse; }
    .company-table tr   { border-bottom: 1px solid var(--border); }
    .company-table th {
      width: 240px;
      padding: 20px 24px;
      text-align: left;
      font-size: 16px;
      font-weight: 400;
      background: var(--bg-light);
      vertical-align: top;
    }
    .company-table td {
      padding: 20px 24px;
      font-size: 16px;
      vertical-align: top;
    }


    /* ==============================================================
       SEC-J: お問い合わせフォーム
    ============================================================== */
    .form-wrap { max-width: 800px; margin: 0 auto; }
    .form-row {
      display: flex;
      align-items: flex-start;
      gap: 24px;
      margin-bottom: 24px;
    }
    .form-label {
      width: 160px;
      flex-shrink: 0;
      font-size: 16px;
      padding-top: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .form-required { color: #c00; font-size: 12px; }
    .form-control  { flex: 1; }
    .form-input {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid var(--border);
      font-size: 16px;
      font-family: inherit;
      outline: none;
    }
    .form-input-sm {
      padding: 12px 16px;
      border: 1px solid var(--border);
      font-size: 16px;
      font-family: inherit;
      outline: none;
      width: 160px;
    }
    .form-textarea {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid var(--border);
      font-size: 16px;
      font-family: inherit;
      outline: none;
      height: 200px;
      resize: vertical;
    }
    .form-radio-group { display: flex; gap: 24px; padding-top: 12px; }
    .form-radio { display: flex; align-items: center; gap: 8px; font-size: 16px; cursor: pointer; }
    .form-select {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid var(--border);
      font-size: 16px;
      font-family: inherit;
      background: var(--white);
    }
    .form-check { display: flex; align-items: center; gap: 8px; font-size: 16px; cursor: pointer; }
    .form-submit-wrap { text-align: center; margin-top: 40px; }


    /* ==============================================================
       CTA セクション
       ※ 縦積みレイアウト / ボタン2つ横並び全幅
    ============================================================== */
    .cta-section { padding: 64px; background: var(--bg-light); }
    .cta-inner   { max-width: 1120px; margin: 0 auto; }
    .cta-label   { display: block; font-size: 16px; color: var(--gray-mid); margin-bottom: 16px; }
    .cta-title   { font-size: 40px; font-weight: 700; line-height: 1.3; margin-bottom: 20px; }
    .cta-desc    { font-size: 16px; color: var(--gray-dark); line-height: 1.8; margin-bottom: 40px; }
    .cta-btns    { display: flex; gap: 24px; }
    .cta-btns .btn { flex: 1; padding: 20px; }


    /* ==============================================================
       FOOTER
    ============================================================== */
    footer { background: var(--black); color: var(--white); padding: 64px 64px 0; }
    .footer-inner {
      display: flex;
      gap: 80px;
      padding-bottom: 64px;
      max-width: 1120px;
      margin: 0 auto;
    }
    .footer-logo {
      width: 80px; height: 56px;
      background: #444;
      display: flex; align-items: center; justify-content: center;
      font-size: 16px; font-weight: 700;
      flex-shrink: 0;
    }
    .footer-nav  { display: flex; gap: 64px; flex: 1; }
    .footer-col  { display: flex; flex-direction: column; gap: 20px; }
    .footer-col a { font-size: 16px; color: #aaaaaa; }
    .footer-bottom {
      border-top: 1px solid #444;
      padding: 20px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      color: var(--gray-mid);
      max-width: 1120px;
      margin: 0 auto;
    }
    .footer-links     { display: flex; gap: 32px; }
    .footer-links a   { font-size: 16px; color: var(--gray-mid); }

  </style>
</head>
<body>

  <!-- ============================================================
       SVGシンボル定義（全ページ共通）
  ============================================================ -->
  <svg xmlns="http://www.w3.org/2000/svg" style="display:none;">

    <!-- 画像プレースホルダー（山＋太陽） -->
    <symbol id="pic" viewBox="0 0 80 54">
      <rect width="80" height="54" fill="#F3F3F3"/>
      <circle cx="22" cy="17" r="7" fill="#CCCCCC"/>
      <polygon points="0,54 28,26 48,40 58,28 80,54" fill="#CCCCCC"/>
      <rect x="1" y="1" width="78" height="52" fill="none" stroke="#DDDDDD" stroke-width="1"/>
    </symbol>

    <!-- 矢印 ↗（右上向き）- 番号リスト・ニュースリスト等に使用 -->
    <symbol id="arrow-ne" viewBox="0 0 20 20">
      <path d="M4 16 L16 4 M16 4 H8 M16 4 V12"
            stroke="#000000" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </symbol>

    <!-- 矢印 →（右向き）- ボタン内・リンク等に使用 -->
    <symbol id="arrow-e" viewBox="0 0 20 20">
      <path d="M4 10 H16 M10 4 L16 10 L10 16"
            stroke="#000000" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </symbol>

    <!-- マップピン -->
    <symbol id="map-pin" viewBox="0 0 48 64">
      <path d="M24 0C10.75 0 0 10.75 0 24C0 42 24 64 24 64C24 64 48 42 48 24C48 10.75 37.25 0 24 0ZM24 32C19.58 32 16 28.42 16 24C16 19.58 19.58 16 24 16C28.42 16 32 19.58 32 24C32 28.42 28.42 32 24 32Z" fill="#AAAAAA"/>
    </symbol>

  </svg>


  <!-- ============================================================
       HEADER
       ロゴ left / ナビ center / 電話番号ダークボタン right
  ============================================================ -->
  <header>
    <div class="logo">LOGO</div>
    <nav class="gnav">
      <a href="#">トップ</a>
      <a href="#">仕事・職種</a>
      <a href="#">カルチャー</a>
      <a href="#">選考・応募</a>
      <a href="#">お問い合わせ</a>
    </nav>
    <button class="header-tel-btn">
      <span class="header-tel-num">00-0000-0000</span>
      <span class="header-tel-note">24時間365日対応</span>
    </button>
  </header>


  <!-- ============================================================
       KV: TOP用
       ※ トップページのみ使用。下層KVと入れ替えて使う
  ============================================================ -->
  <section class="kv-top">
    <div>
      <h1 class="kv-top-title">タイトルが入ります<br>タイトルが入ります</h1>
      <p class="kv-top-sub">サブテキストが入りますサブテキストが入りますサブテキストが入りますサブテキストが入ります</p>
    </div>
  </section>


  <!-- ============================================================
       KV: 下層用
       ※ 下層ページで使用。日本語（大）→英語（小）、パンくず右下
       ※ TOPのKVと入れ替えて使う（どちらか一方を削除）
  ============================================================ -->
  <!--
  <div class="kv-sub">
    <div>
      <span class="kv-sub-ja">タイトルが入ります</span>
      <span class="kv-sub-en">PAGE TITLE IN ENGLISH</span>
    </div>
    <div class="breadcrumb">
      <span>トップ</span><span>＞</span><span>2ND</span>
    </div>
  </div>
  -->


  <!-- ============================================================
       SEC-A: 左テキスト＋右番号リスト
       ※ 参考画像「Service」パターン
       左: ラベル／タイトル／説明文
       右: 01〜番号付きリスト（↗矢印）＋ボタン右寄せ
  ============================================================ -->
  <section class="section">
    <div class="section-inner">
      <div class="layout-a">

        <div class="layout-a-left">
          <span class="sec-label">Service</span>
          <h2 class="sec-title">タイトルが入ります</h2>
          <p class="sec-desc" style="margin:0;">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        </div>

        <div class="layout-a-right">
          <div class="num-list">
            <div class="num-item">
              <span class="num-label">01</span>
              <span class="num-text">サービス名が入ります</span>
              <span class="arrow-icon"><svg width="20" height="20"><use href="#arrow-ne"/></svg></span>
            </div>
            <div class="num-item">
              <span class="num-label">02</span>
              <span class="num-text">サービス名が入ります</span>
              <span class="arrow-icon"><svg width="20" height="20"><use href="#arrow-ne"/></svg></span>
            </div>
            <div class="num-item">
              <span class="num-label">03</span>
              <span class="num-text">サービス名が入ります</span>
              <span class="arrow-icon"><svg width="20" height="20"><use href="#arrow-ne"/></svg></span>
            </div>
            <div class="num-item">
              <span class="num-label">04</span>
              <span class="num-text">サービス名が入ります</span>
              <span class="arrow-icon"><svg width="20" height="20"><use href="#arrow-ne"/></svg></span>
            </div>
            <div class="num-item">
              <span class="num-label">05</span>
              <span class="num-text">サービス名が入ります</span>
              <span class="arrow-icon"><svg width="20" height="20"><use href="#arrow-ne"/></svg></span>
            </div>
          </div>
          <div class="btn-row-right">
            <button class="btn btn-gray">詳しく見る</button>
          </div>
        </div>

      </div>
    </div>
  </section>


  <!-- ============================================================
       SEC-B: 中央タイトル＋Pointカード交互
       ※ 参考画像「Point」パターン
       奇数: テキスト左・画像右 / 偶数: 画像左・テキスト右
  ============================================================ -->
  <section class="section">
    <div class="section-inner">
      <div class="sec-header">
        <span class="sec-label">Feature</span>
        <h2 class="sec-title">タイトルが入ります</h2>
        <p class="sec-desc">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      </div>

      <div class="point-list">
        <div class="point-card">
          <div class="point-text">
            <span class="point-num">Point01</span>
            <h3 class="point-title">タイトルが入りますタイトルが入ります</h3>
            <p class="point-desc">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
          <div class="point-img img-ph">
            <svg width="80" height="54"><use href="#pic"/></svg>
          </div>
        </div>
        <div class="point-card">
          <div class="point-img img-ph">
            <svg width="80" height="54"><use href="#pic"/></svg>
          </div>
          <div class="point-text">
            <span class="point-num">Point02</span>
            <h3 class="point-title">タイトルが入りますタイトルが入ります</h3>
            <p class="point-desc">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
        </div>
        <div class="point-card">
          <div class="point-text">
            <span class="point-num">Point03</span>
            <h3 class="point-title">タイトルが入りますタイトルが入ります</h3>
            <p class="point-desc">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
          <div class="point-img img-ph">
            <svg width="80" height="54"><use href="#pic"/></svg>
          </div>
        </div>
      </div>

      <div class="btn-row-center">
        <button class="btn btn-gray">詳しく見る</button>
      </div>
    </div>
  </section>


  <!-- ============================================================
       SEC-C: 番号グリッド 3列
       ※ 強み・実績リスト（丸番号＋テキスト）
  ============================================================ -->
  <section class="section">
    <div class="section-inner">
      <div class="sec-header">
        <span class="sec-label">Strength</span>
        <h2 class="sec-title">タイトルが入ります</h2>
        <p class="sec-desc">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      </div>
      <div class="num-grid">
        <div class="num-grid-item">
          <div class="num-circle">01</div>
          <p class="num-grid-text">テキストが入りますテキストが入りますテキストが入りますテキストが入ります</p>
        </div>
        <div class="num-grid-item">
          <div class="num-circle">02</div>
          <p class="num-grid-text">テキストが入りますテキストが入りますテキストが入りますテキストが入ります</p>
        </div>
        <div class="num-grid-item">
          <div class="num-circle">03</div>
          <p class="num-grid-text">テキストが入りますテキストが入りますテキストが入りますテキストが入ります</p>
        </div>
        <div class="num-grid-item">
          <div class="num-circle">04</div>
          <p class="num-grid-text">テキストが入りますテキストが入りますテキストが入りますテキストが入ります</p>
        </div>
        <div class="num-grid-item">
          <div class="num-circle">05</div>
          <p class="num-grid-text">テキストが入りますテキストが入りますテキストが入りますテキストが入ります</p>
        </div>
        <div class="num-grid-item">
          <div class="num-circle">06</div>
          <p class="num-grid-text">テキストが入りますテキストが入りますテキストが入りますテキストが入ります</p>
        </div>
      </div>
      <div class="btn-row-center">
        <button class="btn btn-gray">詳しく見る</button>
      </div>
    </div>
  </section>


  <!-- ============================================================
       SEC-D: カード 3列（画像＋テキスト）
       ※ 4列にする場合は card-grid-3 を card-grid-4 に変更
  ============================================================ -->
  <section class="section">
    <div class="section-inner">
      <div class="sec-header">
        <span class="sec-label">Service</span>
        <h2 class="sec-title">タイトルが入ります</h2>
        <p class="sec-desc">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      </div>
      <div class="card-grid-3">
        <div class="card">
          <div class="card-img img-ph"><svg width="80" height="54"><use href="#pic"/></svg></div>
          <div class="card-body">
            <h3 class="card-title">タイトルが入ります</h3>
            <p class="card-text">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
        </div>
        <div class="card">
          <div class="card-img img-ph"><svg width="80" height="54"><use href="#pic"/></svg></div>
          <div class="card-body">
            <h3 class="card-title">タイトルが入ります</h3>
            <p class="card-text">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
        </div>
        <div class="card">
          <div class="card-img img-ph"><svg width="80" height="54"><use href="#pic"/></svg></div>
          <div class="card-body">
            <h3 class="card-title">タイトルが入ります</h3>
            <p class="card-text">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
        </div>
      </div>
      <div class="btn-row-center">
        <button class="btn btn-gray">詳しく見る</button>
      </div>
    </div>
  </section>


  <!-- ============================================================
       SEC-E: 番号リスト詳細（番号＋テキスト本文＋右画像）
  ============================================================ -->
  <section class="section">
    <div class="section-inner">
      <div class="sec-header">
        <span class="sec-label">Service</span>
        <h2 class="sec-title">タイトルが入ります</h2>
        <p class="sec-desc">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      </div>
      <div class="detail-list">
        <div class="detail-item">
          <span class="detail-num">01</span>
          <div class="detail-body">
            <h3 class="detail-name">サービス名が入ります</h3>
            <p class="detail-text">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
          <div class="detail-img img-ph"><svg width="80" height="54"><use href="#pic"/></svg></div>
        </div>
        <div class="detail-item">
          <span class="detail-num">02</span>
          <div class="detail-body">
            <h3 class="detail-name">サービス名が入ります</h3>
            <p class="detail-text">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
          <div class="detail-img img-ph"><svg width="80" height="54"><use href="#pic"/></svg></div>
        </div>
        <div class="detail-item">
          <span class="detail-num">03</span>
          <div class="detail-body">
            <h3 class="detail-name">サービス名が入ります</h3>
            <p class="detail-text">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
          <div class="detail-img img-ph"><svg width="80" height="54"><use href="#pic"/></svg></div>
        </div>
      </div>
      <div class="btn-row-center">
        <button class="btn btn-gray">詳しく見る</button>
      </div>
    </div>
  </section>


  <!-- ============================================================
       SEC-F: Newsリスト＋右画像
       ※ 参考画像「News」パターン
  ============================================================ -->
  <section class="section">
    <div class="section-inner">
      <span class="sec-label">News</span>
      <h2 class="sec-title">タイトルが入ります</h2>
      <div class="news-layout">
        <div class="news-list-col">
          <div class="news-list">
            <div class="news-item">
              <span class="news-date">26-03-01</span>
              <span class="news-title">ニュースタイトルが入ります</span>
              <span class="arrow-icon"><svg width="20" height="20"><use href="#arrow-ne"/></svg></span>
            </div>
            <div class="news-item">
              <span class="news-date">26-02-15</span>
              <span class="news-title">ニュースタイトルが入ります</span>
              <span class="arrow-icon"><svg width="20" height="20"><use href="#arrow-ne"/></svg></span>
            </div>
            <div class="news-item">
              <span class="news-date">26-01-01</span>
              <span class="news-title">ニュースタイトルが入ります</span>
              <span class="arrow-icon"><svg width="20" height="20"><use href="#arrow-ne"/></svg></span>
            </div>
            <div class="news-item">
              <span class="news-date">25-12-22</span>
              <span class="news-title">ニュースタイトルが入ります</span>
              <span class="arrow-icon"><svg width="20" height="20"><use href="#arrow-ne"/></svg></span>
            </div>
            <div class="news-item">
              <span class="news-date">25-11-19</span>
              <span class="news-title">ニュースタイトルが入ります</span>
              <span class="arrow-icon"><svg width="20" height="20"><use href="#arrow-ne"/></svg></span>
            </div>
          </div>
        </div>
        <div class="news-img-col img-ph">
          <svg width="80" height="54"><use href="#pic"/></svg>
        </div>
      </div>
      <div class="btn-row-left">
        <button class="btn btn-gray">詳しく見る</button>
      </div>
    </div>
  </section>


  <!-- ============================================================
       SEC-G: スタッフ紹介 4列（縦長写真）
  ============================================================ -->
  <section class="section">
    <div class="section-inner">
      <div class="sec-header">
        <span class="sec-label">Staff</span>
        <h2 class="sec-title">タイトルが入ります</h2>
        <p class="sec-desc">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      </div>
      <div class="staff-grid">
        <div>
          <div class="staff-photo img-ph"><svg width="80" height="54"><use href="#pic"/></svg></div>
          <p class="staff-role">役職が入ります</p>
          <h3 class="staff-name">名前が入ります</h3>
          <p class="staff-comment">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        </div>
        <div>
          <div class="staff-photo img-ph"><svg width="80" height="54"><use href="#pic"/></svg></div>
          <p class="staff-role">役職が入ります</p>
          <h3 class="staff-name">名前が入ります</h3>
          <p class="staff-comment">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        </div>
        <div>
          <div class="staff-photo img-ph"><svg width="80" height="54"><use href="#pic"/></svg></div>
          <p class="staff-role">役職が入ります</p>
          <h3 class="staff-name">名前が入ります</h3>
          <p class="staff-comment">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        </div>
        <div>
          <div class="staff-photo img-ph"><svg width="80" height="54"><use href="#pic"/></svg></div>
          <p class="staff-role">役職が入ります</p>
          <h3 class="staff-name">名前が入ります</h3>
          <p class="staff-comment">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        </div>
      </div>
      <div class="btn-row-center">
        <button class="btn btn-gray">詳しく見る</button>
      </div>
    </div>
  </section>


  <!-- ============================================================
       SEC-H: アクセス / MAP（地図左＋テキスト右）
  ============================================================ -->
  <section class="section">
    <div class="section-inner">
      <div class="sec-header">
        <span class="sec-label">Access</span>
        <h2 class="sec-title">タイトルが入ります</h2>
        <p class="sec-desc">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      </div>
      <div class="access-list">
        <div class="access-item">
          <div class="access-map img-ph">
            <svg class="map-pin" viewBox="0 0 48 64"><use href="#map-pin"/></svg>
          </div>
          <div class="access-info">
            <p class="access-label">Access</p>
            <h3 class="access-name">会社名・拠点名が入ります</h3>
            <p class="access-addr">
              〒000-0000<br>
              住所が入ります住所が入ります住所が入ります<br>
              TEL 03-0000-0000　FAX 03-0000-0001
            </p>
            <button class="btn btn-gray">Google Mapで見る</button>
          </div>
        </div>
        <div class="access-item">
          <div class="access-map img-ph">
            <svg class="map-pin" viewBox="0 0 48 64"><use href="#map-pin"/></svg>
          </div>
          <div class="access-info">
            <p class="access-label">Access</p>
            <h3 class="access-name">会社名・拠点名が入ります</h3>
            <p class="access-addr">
              〒000-0000<br>
              住所が入ります住所が入ります住所が入ります<br>
              TEL 03-0000-0000　FAX 03-0000-0001
            </p>
            <button class="btn btn-gray">Google Mapで見る</button>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- ============================================================
       SEC-I: 会社概要テーブル
  ============================================================ -->
  <section class="section">
    <div class="section-inner">
      <div class="sec-header">
        <span class="sec-label">Company</span>
        <h2 class="sec-title">会社概要</h2>
        <p class="sec-desc">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      </div>
      <table class="company-table">
        <tr><th>会社名</th><td>テキストが入ります</td></tr>
        <tr><th>代表取締役</th><td>テキストが入ります</td></tr>
        <tr><th>設立</th><td>テキストが入ります</td></tr>
        <tr><th>資本金</th><td>テキストが入ります</td></tr>
        <tr><th>所在地</th><td>テキストが入ります</td></tr>
        <tr><th>TEL / FAX</th><td>テキストが入ります</td></tr>
        <tr><th>MAIL</th><td>テキストが入ります</td></tr>
        <tr><th>事業内容</th><td>テキストが入ります</td></tr>
      </table>
    </div>
  </section>


  <!-- ============================================================
       SEC-J: お問い合わせフォーム
  ============================================================ -->
  <section class="section">
    <div class="section-inner">
      <div class="sec-header">
        <span class="sec-label">Contact</span>
        <h2 class="sec-title">お問い合わせ</h2>
        <p class="sec-desc">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      </div>
      <div class="form-wrap">
        <div class="form-row">
          <label class="form-label">お名前 <span class="form-required">*</span></label>
          <div class="form-control"><input type="text" class="form-input" placeholder="山田　太郎"></div>
        </div>
        <div class="form-row">
          <label class="form-label">ふりがな <span class="form-required">*</span></label>
          <div class="form-control"><input type="text" class="form-input" placeholder="やまだ　たろう"></div>
        </div>
        <div class="form-row">
          <label class="form-label">性別 <span class="form-required">*</span></label>
          <div class="form-control">
            <div class="form-radio-group">
              <label class="form-radio"><input type="radio" name="gender"> 男性</label>
              <label class="form-radio"><input type="radio" name="gender"> 女性</label>
            </div>
          </div>
        </div>
        <div class="form-row">
          <label class="form-label">郵便番号 <span class="form-required">*</span></label>
          <div class="form-control"><input type="text" class="form-input-sm" placeholder="000-0000"></div>
        </div>
        <div class="form-row">
          <label class="form-label">住所 <span class="form-required">*</span></label>
          <div class="form-control"><input type="text" class="form-input" placeholder="東京都〇〇区〇〇"></div>
        </div>
        <div class="form-row">
          <label class="form-label">TEL <span class="form-required">*</span></label>
          <div class="form-control"><input type="text" class="form-input" placeholder="03-0000-0000"></div>
        </div>
        <div class="form-row">
          <label class="form-label">メールアドレス <span class="form-required">*</span></label>
          <div class="form-control"><input type="email" class="form-input" placeholder="example@example.com"></div>
        </div>
        <div class="form-row">
          <label class="form-label">お問い合わせ種類 <span class="form-required">*</span></label>
          <div class="form-control">
            <select class="form-select"><option>選択してください</option></select>
          </div>
        </div>
        <div class="form-row">
          <label class="form-label">お問い合わせ内容 <span class="form-required">*</span></label>
          <div class="form-control"><textarea class="form-textarea" placeholder="お問い合わせ内容をご入力ください"></textarea></div>
        </div>
        <div style="margin-bottom:32px;">
          <label class="form-check"><input type="checkbox"> プライバシーポリシーに同意する</label>
        </div>
        <div class="form-submit-wrap">
          <button class="btn btn-dark" style="min-width:240px;">確認する</button>
        </div>
      </div>
    </div>
  </section>


  <!-- ============================================================
       CTA セクション
       英語ラベル→タイトル→説明文→ボタン2つ横並び全幅
  ============================================================ -->
  <section class="cta-section">
    <div class="cta-inner">
      <span class="cta-label">英語タイトル</span>
      <h2 class="cta-title">タイトルが入ります</h2>
      <p class="cta-desc">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      <div class="cta-btns">
        <button class="btn btn-outline">contact</button>
        <button class="btn btn-gray">採用情報</button>
      </div>
    </div>
  </section>


  <!-- ============================================================
       FOOTER
       黒背景 / ロゴ＋ナビ3列 / コピーライト
  ============================================================ -->
  <footer>
    <div class="footer-inner">
      <div class="footer-logo">LOGO</div>
      <nav class="footer-nav">
        <div class="footer-col">
          <a href="#">テキスト</a>
          <a href="#">テキスト</a>
          <a href="#">テキスト</a>
          <a href="#">テキスト</a>
        </div>
        <div class="footer-col">
          <a href="#">テキスト</a>
          <a href="#">テキスト</a>
          <a href="#">テキスト</a>
          <a href="#">テキスト</a>
        </div>
        <div class="footer-col">
          <a href="#">テキスト</a>
          <a href="#">テキスト</a>
          <a href="#">テキスト</a>
          <a href="#">テキスト</a>
        </div>
      </nav>
    </div>
    <div class="footer-bottom">
      <span>Copyright © 会社名</span>
      <div class="footer-links">
        <a href="#">プライバシーポリシー</a>
        <a href="#">サイトマップ</a>
      </div>
    </div>
  </footer>

</body>
</html>
`;

  if (outputType === "image") {
    return [
      "あなたは「Webサイトの情報設計と低忠実度ワイヤーフレームを作るUI設計者」です。",
      "以下の情報をもとに、ワイヤーフレーム画像を作成してください。",
      "",
      "# 【サイト情報】",
      ...infoLines,
      "",
      sectionsText,
      (state.wfNotes || "").trim() ? `\n【補足】\n${state.wfNotes.trim()}` : "",
      (state.request || "").trim() ? `\n【背景・ひとこと】\n${state.request.trim()}` : "",
      materialsText ? `\n# 【参考資料】\n${materialsText}` : "",
      "",
      imageRules,
      "",
      "以上の内容を確認しました。それでは今すぐ作業を開始してください。",
    ].filter(Boolean).join("\n");
  }

  return [
    "あなたは「Webサイトの情報設計と低忠実度ワイヤーフレームを作るUI設計者」です。",
    "以下のHTMLテンプレートをベースに、【サイト情報】に合わせてワイヤーフレームを完成させてください。",
    "",
    "# 【サイト情報】",
    ...infoLines,
    "",
    sectionsText,
    (state.wfNotes || "").trim() ? `\n【補足】\n${state.wfNotes.trim()}` : "",
    (state.request || "").trim() ? `\n【背景・ひとこと】\n${state.request.trim()}` : "",
    materialsText ? `\n# 【参考資料】\nこの資料をもとにテキスト・構成・導線を考えてください。\n${materialsText}` : "",
    "",
    "# 【作業ルール】",
    "- 以下のHTMLテンプレートをそのままベースとして使うこと",
    "- 不要なセクションは削除し、必要なセクションだけ残す",
    "- テキスト・コンテンツは【サイト情報】と【参考資料】をもとに仮文で作成してよい（後で差し替え前提）",
    "- CSSクラス名・CSS変数・構造は変更しない（デザインルールは既にテンプレートに含まれている）",
    "- PC専用（1440px基準）。レスポンシブ対応は不要",
    "- 実画像・実ロゴ・ブランドカラー・装飾は一切入れない",
    "- 資料にない情報を推測で補った場合はHTML末尾に「推測で補った内容」として明記する",
    "- <!DOCTYPE html> から始まる完成HTMLを出力する",
    "",
    "# 【ベーステンプレート】",
    "```html",
    wfTemplate,
    "```",
    "",
    "以上の内容を確認しました。それでは今すぐ作業を開始してください。",
  ].filter(Boolean).join("\n");
}

function buildCustomPrompt(state) {
  const task = (state.customTask || "").trim();
  const role = (state.customRole || "").trim();
  const conditions = (state.customConditions || "").trim();

  return [
    role ? `あなたは「${role}」です。` : null,
    task || "（やりたいことを入力してください）",
    conditions ? `\n# 守ってほしい条件\n${conditions}` : null,
    "",
    "以上の内容を確認しました。それでは今すぐ作業を開始してください。途中で質問はせず、今ある情報から最善の形で完成させてください。",
  ].filter(Boolean).join("\n");
}

function buildEmailPrompt(state) {
  const opt = (label, val) => (val || "").trim() ? `- ${label}：${val.trim()}` : null;
  const infoLines = [
    opt("相手・関係性", state.emailRecipient),
    opt("目的・状況", state.emailContent),
    `- 文体トーン：${state.emailTone || "丁寧・フォーマル"}`,
    opt("補足", state.request),
  ].filter(Boolean);

  return [
    "あなたは「営業コミュニケーション設計AI」です。",
    "以下の情報をもとに、相手に伝わり動いてもらえるメール・依頼文を作成してください。",
    "",
    "# 【メール情報】",
    ...infoLines,
    "",
    "# 【制約条件】",
    "- 要件を先に伝える",
    "- 長文になりすぎない",
    "- 相手視点でのメリットを含める",
    "- 圧迫感・高圧感を避ける",
    "- 件名も生成する",
    "- ビジネスマナーを維持する",
    "- 誤解を生みにくい文章にする",
    "",
    "# 【出力形式】",
    "1. 件名案（3案）",
    "2. メール本文（宛名・挨拶・本文・CTA・締め）",
    "3. Slack / チャット向け短文化版",
    "4. トーン違いバリエーション（フォーマル版 / 柔らかめ版 / 簡潔版）",
    "",
    "以上の内容を確認しました。それでは今すぐ作業を開始してください。",
  ].join("\n");
}

function buildPolicyPrompt(state) {
  const opt = (label, val) => (val || "").trim() ? `- ${label}：${val.trim()}` : null;

  const infoLines = [
    `- 制度の種類：${state.policyType || "評価制度"}`,
    opt("業種・規模", state.policyCompany),
    opt("困っていること", state.policyIssue),
    opt("どうなりたいか", state.policyGoal),
    opt("補足", state.request),
  ].filter(Boolean);

  return [
    "あなたは「組織開発コンサルタント兼制度設計ファシリテーターAI」です。",
    "以下の情報をもとに、実務レベルで使える社内制度の設計方針と具体案を提案してください。",
    "",
    "# 【入力情報】",
    ...infoLines,
    (state.policyMaterials || "").trim() ? `\n# 【参考情報】\n${state.policyMaterials.trim()}` : "",
    "",
    "# 【制約条件】",
    "- 「運用できる現実解」を優先し、理想論だけで終わらせない",
    "- 中小〜中堅企業でも運用可能なレベル感で設計する",
    "- メリット・デメリット・運用上のリスクを必ず併記する",
    "- 制度の内容だけでなく「導入プロセス」と「社内浸透施策」にも言及する",
    "- 専門用語は社内メンバーにも伝わる言葉に噛み砕く",
    "- 情報が不足している場合は一般的な中小〜中堅企業を想定して補完する",
    "",
    "# 【出力形式】",
    "1. 課題整理（現状の問題・ボトルネック・不満ポイント）",
    "2. 目指す状態（制度設計で重視すべき軸・実現したい文化）",
    "3. 制度設計の全体方針",
    "4. 具体的な制度案（2〜3パターン：概要・メリット・デメリット・向いている規模）",
    "5. 導入プロセス案（準備→試験運用→本格導入→改善サイクル）",
    "6. 社内浸透・運用定着のための施策",
    "7. 今後の検討・ディスカッション用の論点リスト",
    "",
    "以上の内容を確認しました。それでは今すぐ作業を開始してください。途中で質問はせず、今ある情報から最善の形で完成させてください。",
  ].filter(Boolean).join("\n");
}

function buildBrainstormPrompt(state) {
  const opt = (label, val) => (val || "").trim() ? `- ${label}：${val.trim()}` : null;

  const bgLines = [
    opt("解決したい課題", state.bsIssue),
    opt("対象", state.bsTarget),
    opt("業界・商材・事業フェーズ", state.bsContext),
    opt("施策の目的", state.bsGoal),
    `- 施策のトーン：${state.bsTone || "バランス重視"}`,
  ].filter(Boolean);

  return [
    "あなたは「戦略プランナー兼アイデアクリエイターAI」です。",
    "ユーザーが提示したテーマに対して、目的達成のための最適な施策・アイデアを多角的に提案し、実行可能性や期待効果も含めて構造化して提示してください。",
    "",
    "# 【背景】",
    ...bgLines,
    "",
    (state.bsMaterials || "").trim()
      ? `# 【参考情報・素材】\n${state.bsMaterials.trim()}`
      : "# 【参考情報・素材】\n記載がない場合は一般的な想定で補完してください。",
    (state.request || "").trim() ? `\n# 【補足】\n${state.request.trim()}` : null,
    "",
    "# 【制約条件】",
    "- 実現可能性の低すぎる施策は除外する",
    "- KPI軸・顧客体験軸・事業戦略軸で施策を整理する",
    "- 必ず3〜5案を提示する",
    "- 施策単体ではなく施策群のストーリーとして整理する",
    "- 時間軸・予算・リソース・ROIイメージに触れる",
    "- 初手でやるべき施策と後半に効く施策を時系列で整理する",
    "",
    "# 【出力形式】",
    "1. 課題整理（現状のAs-Is）",
    "2. 施策コンセプト（全体の方向性・戦略の軸）",
    "3. 施策案一覧（3〜5案）",
    "4. 各施策の詳細（目的 → 施策概要 → 実施ステップ → 期待効果 → KPI → コスト感）",
    "5. 時系列の優先順位（初手でやるべき施策 / 後半に効く施策のロードマップ）",
    "6. 追加で検討すべき論点",
    "",
    "以上の内容を確認しました。それでは今すぐ提案を開始してください。",
  ].filter(Boolean).join("\n");
}

function buildMinutesPrompt(state) {
  const opt = (label, val) => (val || "").trim() ? `- ${label}：${val.trim()}` : null;
  const content = (state.minContent || "").trim();
  const isEmail = state.minFormat === "email";

  const metaLines = [
    `- 会議の種類：${state.minType || "定例会"}`,
    opt("どう出してほしいか", state.minWish),
    opt("補足", state.request),
  ].filter(Boolean);

  if (isEmail) {
    const today = new Date();
    const dateStr = `${today.getMonth() + 1}/${today.getDate()}`;
    return [
      "あなたは「ビジネスコミュニケーション編集AI」です。",
      "以下の議事メモ・文字起こしをもとに、クライアントへ送付できるメール形式の議事録メールを作成してください。",
      "",
      "# 【会議情報】",
      ...metaLines,
      "",
      "# 【元データ】",
      content || "（メモ・文字起こしがここに入ります）",
      "",
      "# 【出力形式】",
      "以下のフォーマットに沿って出力してください。【固定テキスト】と書かれた部分は一字一句そのまま出力し、【生成】と書かれた部分だけ議事メモをもとに作成してください。",
      "",
      "⚫︎⚫︎様",
      "",
      "お世話になっております。",
      "⚫︎⚫︎でございます。",
      "",
      "本日もお時間をいただき誠にありがとうございました。",
      "下記に、議事録とネクストアクションをご案内させていただきます。",
      "＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿",
      "",
      "【固定テキスト】",
      `1. ${dateStr}お打ち合わせ 議事録`,
      "本日のお打ち合わせの内容をご共有いたします。",
      "▼議事録",
      "（urlを添付する）",
      "※上記、閲覧の際に支障がございましたらお知らせくださいませ。",
      "＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿",
      "",
      "【生成】",
      "2. 議事録",
      "（議事メモをもとに要点をまとめる）",
      "＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿",
      "",
      "【生成】",
      "3. ネクストアクション",
      "▼お客様の宿題",
      "・（箇条書き）",
      "—",
      "▼弊社の宿題",
      "・（箇条書き）",
      "＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿",
      "",
      "【固定テキスト】",
      "以上になります。",
      "ご不明点がございましたらご連絡くださいませ。",
      "引き続き、よろしくお願いいたします。",
      "",
      "# 【制約条件】",
      "- ⚫︎⚫︎などのプレースホルダーは埋めず、そのまま出力する（実名は入れない）",
      "- 議事内容は要点を押さえて簡潔にまとめる",
      "- ネクストアクションはお客様側と弊社側に分けて整理する",
      "- ビジネスマナーを維持した丁寧な文体にする",
      "",
      "以上の内容を確認しました。それでは今すぐ作業を開始してください。",
    ].join("\n");
  }

  return [
    "あなたは「ビジネスコミュニケーション編集AI」です。",
    "以下の議事メモ・文字起こしをもとに、読みやすく整理された議事録を作成してください。",
    "",
    "# 【会議情報】",
    ...metaLines,
    "",
    "# 【元データ】",
    content || "（メモ・文字起こしがここに入ります）",
    "",
    "# 【制約条件】",
    "- ラフな会話表現はビジネス文体へ整える",
    "- 発言の意図を補完しつつ、事実ベースを維持する",
    "- 決定事項と未決事項を分離する",
    "- 攻撃的・曖昧・責任転嫁に見える表現を避ける",
    "- ToDo・担当・期限を可能な限り整理する",
    "- 攻撃的・曖昧・責任転嫁に見える表現を避ける",
    "",
    "# 【出力形式】",
    "1. 会議概要（日時・目的）",
    "2. 議題ごとの整理（議題 / 内容要約 / 補足事項）",
    "3. 決定事項",
    "4. 未決事項・確認事項",
    "5. ToDo一覧（タスク／担当／期限）",
    "6. 次回予定（あれば）",
    "",
    "以上の内容を確認しました。それでは今すぐ作業を開始してください。",
  ].join("\n");
}

function buildDesignPrompt(state) {
  const opt = (label, val) => (val || "").trim() ? `- ${label}：${val.trim()}` : null;
  const infoLines = [
    opt("制作対象", state.designTarget),
    opt("ターゲットユーザー", state.designAudience),
    `- ブランドトーン：${state.designTone || "モダン・スタイリッシュ"}`,
    opt("参考サイト・URL", state.designRef),
    opt("NG表現・避けたい方向性", state.designNg),
    opt("補足", state.request),
  ].filter(Boolean);

  return [
    "あなたは「クリエイティブディレクター兼デザイン戦略AI」です。",
    "以下の情報をもとに、デザイン制作チームへ共有できるデザインディレクション指示書を作成してください。",
    "",
    "# 【制作情報】",
    ...infoLines,
    "",
    "# 【制約条件】",
    "- デザイン抽象論ではなく制作指示レベルまで具体化する",
    "- UI/レイアウト/余白/タイポ/配色/写真トーンまで言語化する",
    "- 「なぜその方向性なのか」も説明する",
    "- ターゲット視点での印象設計を行う",
    "- 必要に応じてA/B方向性を提示する",
    "- デザインレビュー時の評価軸も定義する",
    "",
    "# 【出力形式】",
    "1. デザイン戦略サマリー",
    "2. ターゲット印象設計（感じさせたいこと／避けるべき印象）",
    "3. トーン＆マナー定義（配色／タイポ／写真トーン／余白方針）",
    "4. 画面・クリエイティブ構成方針（FV・CTA・情報優先順位）",
    "5. デザインレビュー基準（良い状態／NG状態のチェックリスト）",
    "6. 制作チーム向けディレクションメモ",
    "",
    "以上の内容を確認しました。それでは今すぐ作業を開始してください。",
  ].join("\n");
}

function buildResearchPrompt(state) {
  const opt = (label, val) => (val || "").trim() ? `- ${label}：${val.trim()}` : null;
  const infoLines = [
    opt("調査テーマ", state.researchTheme),
    `- 調査目的：${state.researchPurpose || "競合比較"}`,
    opt("対象企業・URL", state.researchTargets),
    opt("特に見たい観点", state.researchFocus),
    opt("補足", state.request),
  ].filter(Boolean);

  return [
    "あなたは「市場分析コンサルタント兼リサーチAI」です。",
    "以下の情報をもとに、実務で意思決定に使えるレベルの調査・比較・示唆抽出を行ってください。",
    "",
    "# 【調査情報】",
    ...infoLines,
    "",
    "# 【制約条件】",
    "- 単なる情報列挙ではなく「示唆」を含める",
    "- 比較可能な形で整理する",
    "- 事実と推測を分離する",
    "- 競合優位性・弱点を両面で整理する",
    "- 情報不足時は合理的推定を行い、推定である旨を明記する",
    "",
    "# 【出力形式】",
    "1. 調査サマリー（市場全体感・重要示唆）",
    "2. 競合比較一覧（強み・弱み・差別化要素・推定ポジション）",
    "3. ユーザー観点分析（ニーズ・不満・選定理由）",
    "4. 戦略示唆（攻めるべきポイント・差別化余地・勝ち筋仮説）",
    "5. 今後追加で調査すべき論点",
    "",
    "以上の内容を確認しました。それでは今すぐ作業を開始してください。",
  ].join("\n");
}

function buildUiReviewPrompt(state) {
  const opt = (label, val) => (val || "").trim() ? `- ${label}：${val.trim()}` : null;
  const perspectiveLabels = {
    overall: "UI/UX総合",
    cv: "コンバージョン改善",
    usability: "ユーザビリティ",
    design: "デザイン品質",
    accessibility: "アクセシビリティ",
  };
  const perspective = perspectiveLabels[state.uiPerspective] || "UI/UX総合";

  const volumeInstructions = {
    brief: "各項目は要点のみ箇条書きで簡潔にまとめてください。",
    standard: "各項目はポイントを押さえて整理してください。",
    detail: "各項目を詳細に展開し、具体例や根拠も含めてください。",
  };
  const volumeInstruction = volumeInstructions[state.uiVolume] || volumeInstructions.standard;

  const infoLines = [
    `- レビュー観点：${perspective}`,
    opt("ページの種類", state.uiPageType),
    opt("ターゲットユーザー", state.uiTarget),
    opt("改善したいこと", state.uiGoal),
    opt("補足", state.request),
  ].filter(Boolean);

  return [
    "あなたは「UI/UXコンサルタント兼プロダクトレビューAI」です。",
    "添付のスクリーンショット・URL・構成情報をもとに、実務レベルのUI/UXレビューと改善提案を行ってください。",
    "",
    "# 【レビュー情報】",
    ...infoLines,
    "",
    "# 【制約条件】",
    "- 抽象論ではなく「改善可能な指摘」を行う",
    "- UI / UX / 情報設計 / CTA / コピーを分けて整理する",
    "- ユーザー心理ベースで説明する",
    "- 各指摘に優先度（高 / 中 / 低）を付与する",
    "- 改善理由を明示する",
    "- 必要に応じてA/B案を提示する",
    "- 実装難易度も考慮する",
    "- デザインだけでなく体験導線まで見る",
    "",
    "# 【出力形式】",
    volumeInstruction,
    "以下の構成でレビューしてください。",
    "",
    "1. 総評（全体UX評価）：良い点 / 大きな課題",
    "2. UIレビュー：レイアウト・視線誘導・タイポ・配色・余白・一貫性",
    "3. UXレビュー：導線・理解コスト・離脱要因・不安要素・CTA設計",
    "4. 情報設計レビュー：優先順位・コンテンツ構造・読みやすさ・情報不足/過多",
    "5. 改善提案一覧（表形式）：課題 / 改善案 / 理由 / 優先度 / 実装難易度",
    "6. A/B改善案（必要に応じて）",
    "7. 追加で確認すべきデータ・仮説",
    "",
    "以上の内容を確認しました。それでは今すぐレビューを開始してください。",
  ].join("\n");
}

function buildProposalPrompt(state) {
  const opt = (label, val) => (val || "").trim() ? `■ ${label}：${val.trim()}` : null;

  const inputLines = [
    opt("クライアント業種・対象", state.propIndustry),
    opt("現状課題（As-Is）", state.propIssue),
    opt("企画の目的", state.propGoal),
    opt("想定ターゲット・意思決定者", state.propTarget),
    opt("提案するソリューション概要", state.propSolution),
    opt("その他・補足", state.request),
  ].filter(Boolean);

  const inputSection = inputLines.length > 0
    ? inputLines.join("\n")
    : "情報の入力がありません。一般的なビジネスケースとして合理的に補完し、補完した内容は「仮定」と明記してください。";

  return [
    "あなたは「企画書・提案書構成クリエイターAI」です。",
    "以下の情報をもとに、論理的で通りやすく、スライド化しやすい企画構成を作成してください。",
    "必要に応じて、UI化可能な要素（Hero / Feature / Flow / CTA 等）も抽出し、後工程で使える情報設計に落とし込んでください。",
    "",
    "# 【目的（Goal）】",
    "- 説得力が高く、読み手の意図を動かす企画構成をつくる",
    "- 企画のストーリーラインを明確化する（問題 → 解決 → 実行 → 成果）",
    "- スライド化しやすいアウトラインを生成する",
    "- 必要に応じてUI / HTMLへ転用できる構造を抽出する",
    "",
    "# 【入力情報】",
    inputSection,
    "",
    "# 【制約条件】",
    "- 「問題 → 解決 → 実行 → 成果」の構造で整理する",
    "- スライド1枚1メッセージを意識する",
    "- 抽象論ではなく実行レベルへ落とし込む",
    "- UI化可能な要素（Hero / Feature / Flow / CTA 等）を抽出する",
    "- 読み手視点のメリットを明示する",
    "- 情報不足時は合理的推定で補完し、補完内容は「仮定」として明記する",
    "- 実現性が低い案は除外する",
    "",
    "# 【出力形式】",
    "最初に「目的・背景・求められるアウトプット・守る条件」を短く整理してから、以下の構成で出力してください。",
    "",
    "1. 提案サマリー（Executive Summary）：何をどう改善する提案か",
    "2. 現状課題整理（As-Is）：課題・原因・ビジネス影響",
    "3. 目指す状態（To-Be）：実現したい成果・ユーザー変化・事業インパクト",
    "4. ソリューション概要：提案内容・提供価値・差別化ポイント",
    "5. スライド構成案（10〜20枚）| No | スライドタイトル | 伝えたいこと | 主な内容 |",
    "   以下の流れを基本にしてください：表紙 / 背景・課題 / 課題深掘り / 解決方針 / ソリューション詳細 / UI・UXイメージ / 実行フロー / スケジュール / KPI・成果想定 / 体制 / まとめ・CTA",
    "6. UIモック化向け抽出情報（Hero / Feature / Flow / CTA / コンテンツ構造）",
    "7. 追加で検討すべき論点：リスク・不足情報・確認事項",
    "",
    "以上の内容を確認しました。それでは今すぐ作業を開始してください。途中で質問はせず、今ある情報から最善の形で完成させてください。",
  ].join("\n");
}

function buildIllustPrompt(state) {
  const theme = (state.illustTheme || state.request || '').trim() || 'テーマを入力してください';

  const colorInstructions = {
    "2": "高度にコントロールされた2色のみを使用",
    "3": "高度にコントロールされた3色のみを使用",
    "4": "高度にコントロールされた4色のみを使用",
    "mono": "ブラック・ホワイト・グレーのモノクロのみを使用",
  };

  const bgInstructions = {
    "solid": `${theme}にインスパイアされたソリッドな背景色`,
    "white": "白（#FFFFFF）の背景",
    "transparent": "透明背景（背景なし）",
  };

  const framingLabels = {
    "full": "全身が見えるフルショット",
    "bust": "胸から上のバストアップ",
    "face": "顔・表情にフォーカスしたフェイスアップ",
  };

  let figureText = "";
  if (state.illustFigure === "none") {
    figureText = "人物は含めず、オブジェクトとシーンのみで構成します。";
  } else {
    const framing = framingLabels[state.illustFraming] || framingLabels["full"];
    const countLabels = {
      "1":    "1人の",
      "2-3":  "2〜3人の",
      "4-6":  "4〜6人の",
      "many": "7人以上の",
    };
    const countText = countLabels[state.illustFigureCount] || "1人の";
    const multiNote = (state.illustFigureCount !== "1")
      ? "それぞれ異なるポーズ・動作（くつろぐ、歩く、食べる、読む、観光など）で表現します。"
      : "くつろぐ、歩く、食べる、読む、観光などのポーズで表現します。";

    if (state.illustFigure === "include") {
      figureText = `環境とインタラクトするスタイリッシュな${countText}人間のフィギュアを含めます（${framing}で表現）。${multiNote}`;
    } else {
      figureText = `スタイリッシュな${countText}人間のフィギュアを中心に構成します（${framing}で表現）。${multiNote}周囲にテーマのオブジェクトを散りばめます。`;
    }
  }

  return [
    `${theme}にインスパイアされた、洗練されたフラットベクターの編集パターンイラストを作成してください。`,
    `象徴的なオブジェクト、文化的要素、ライフスタイルシーンを組み合わせたシームレスなアートコラージュとして構成します。`,
    "",
    `プレミアムなスカンジナビア編集グラフィックス、ミッドセンチュリーテキスタイルパターン、現代のミュージアムショップイラスト、高級ライフスタイルマガジンビジュアルにインスパイアされています。`,
    "",
    `スタイル：`,
    `超クリーンなフラットベクターシェイプ / 大胆に簡略化されたシルエット / 遊び心のあるジオメトリック構成 / 強いネガティブスペース / シャープな編集ミニマリズム / スクリーンプリント風のカラーブロッキング / 高コントラストのグラフィックデザイン / ダイナミックな非対称配置 / アウトラインなし / グラデーションなし / フォトリアリズムなし / クリーンなマットな外観 / ファッショナブルなコンテンポラリーポスターエステティック`,
    "",
    `構成：`,
    `${theme}の4〜5つの象徴的な要素を、認識可能な抽象シルエットに強く簡略化して含めます。文化・食・建築・乗り物・自然などのライフスタイル要素とミックスし、プレミアムテキスタイルプリントのようにリズミカルにキャンバス全体へ散りばめます。中央集中型の構成・現実的なパースペクティブを避けます。`,
    figureText,
    "",
    `カラーシステム：`,
    `${theme}にインスパイアされた色を使用した、${colorInstructions[state.illustColors] || colorInstructions["3"]}。`,
    "",
    `背景：`,
    bgInstructions[state.illustBg] || bgInstructions["solid"],
    "",
    `出力：`,
    `ウルトラプレミアムなシームレス編集イラスト。8K。比率 3:4`,
  ].join("\n");
}

const wfSectionsExamples = {
  top: "1. ヘッダー\n2. KV\n3. サービス紹介\n4. 選ばれる理由\n5. 導入の流れ\n6. お客様の声\n7. お問い合わせフォーム\n8. フッター",
  sub: "お問い合わせページ、サービス詳細ページ、会社概要ページ",
  lp: "1. FV\n2. 課題提起\n3. 解決策・特徴\n4. 実績・お客様の声\n5. CTA＋問い合わせフォーム",
  all: "トップ・サービス紹介・会社概要・お問い合わせ",
  any: "",
};

function updateWfSectionsPlaceholder(pageType) {
  const textarea = document.querySelector("#wfSections");
  const currentVal = textarea.value;
  const knownExamples = Object.values(wfSectionsExamples).filter(v => v !== "");
  const isUnedited = knownExamples.includes(currentVal);
  if (isUnedited) {
    textarea.value = wfSectionsExamples[pageType] ?? "";
    updatePrompt();
  }
}

function updateIllustVisibility(mode) {
  const isIllust    = mode === "illust";
  const isWireframe = mode === "wireframe";
  const isProposal  = mode === "proposal";
  const isUiReview  = mode === "ui-review";
  const isDesign    = mode === "design-direction";
  const isResearch  = mode === "research";
  const isMinutes   = mode === "minutes";
  const isBrainstorm = mode === "brainstorm";
  const isCustom    = mode === "custom";
  const isPolicy    = mode === "policy";
  const isEmailMode = mode === "email";

  // 専用フィールドがあるモード（標準フォームを隠す）
  const hasDedicated = isIllust || isWireframe || isProposal || isUiReview ||
                       isDesign || isResearch || isMinutes || isBrainstorm || isCustom || isPolicy || isEmailMode;

  // 各専用fieldsetの表示制御
  document.querySelector("#fieldset-illust").style.display    = isIllust    ? "" : "none";
  document.querySelector("#fieldset-wireframe").style.display = isWireframe ? "" : "none";
  document.querySelector("#fieldset-proposal").style.display  = isProposal  ? "" : "none";
  document.querySelector("#fieldset-uireview").style.display  = isUiReview  ? "" : "none";
  document.querySelector("#fieldset-design").style.display    = isDesign    ? "" : "none";
  document.querySelector("#fieldset-research").style.display  = isResearch  ? "" : "none";
  document.querySelector("#fieldset-minutes").style.display   = isMinutes   ? "" : "none";
  document.querySelector("#fieldset-brainstorm").style.display = isBrainstorm ? "" : "none";
  document.querySelector("#fieldset-email").style.display     = isEmailMode ? "" : "none";
  document.querySelector("#fieldset-policy").style.display    = isPolicy    ? "" : "none";
  document.querySelector("#fieldset-custom").style.display    = isCustom    ? "" : "none";

  // 標準フォームの表示制御
  document.querySelector("#fieldset-extras").style.display  = hasDedicated ? "none" : "";
  document.querySelector("#optionsFieldset").style.display  = hasDedicated ? "none" : "";
  document.querySelector("#fieldset-finish").style.display  = hasDedicated ? "none" : "";

  // 補足欄: illust/minutes/customは非表示、他の専用モードは表示（下部に）
  const hideRequest = isIllust || isMinutes || isCustom;
  document.querySelector("#fieldset-request").style.display = hideRequest ? "none" : "";
  document.querySelector("#wfSectionsGroup").style.display = isWireframe ? "" : "none";
  document.querySelector("#wfNotesGroup").style.display = isWireframe ? "" : "none";
  document.querySelector("#uiOptionalGroup").style.display = isUiReview ? "" : "none";
  document.querySelector("#designOptionalGroup").style.display = isDesign ? "" : "none";
  document.querySelector("#researchOptionalGroup").style.display = isResearch ? "" : "none";
  document.querySelector("#brainstormOptionalGroup").style.display = isBrainstorm ? "" : "none";

  // 背景・状況と出してほしい形はpolicyのみ非表示
  const bgRow = document.querySelector("#backgroundRow");
  const otRow = document.querySelector("#outputTypeRow");
  if (bgRow) bgRow.style.display = isPolicy ? "none" : "";
  if (otRow) otRow.style.display = isPolicy ? "none" : "";

  // 補足欄のラベルとplaceholderをモードに合わせて変更
  if (!hideRequest) {
    const requestLegendEl  = document.querySelector("#requestLegend");
    const requestLabelText = document.querySelector("#requestLabelText");
    const requestTextarea  = document.querySelector("#request");
    if (hasDedicated) {
      requestLegendEl.textContent = "任意";
      if (isWireframe) {
        requestLabelText.textContent = "作成の背景・ひとこと";
        requestTextarea.placeholder = "例：初回クライアント提案用。シンプルに見せたい。";
      } else {
        requestLabelText.textContent = "補足・その他";
        requestTextarea.placeholder = "例：追加で気になる点や希望があれば";
      }
    } else {
      requestLegendEl.textContent = "";
      requestLabelText.textContent = "依頼内容";
      requestTextarea.placeholder = "ここに相談内容・タスクの詳細を入力してください";
    }
  }
}

function updateFramingVisibility(figureValue) {
  const hidden = figureValue === "none";
  document.querySelector("#framingRow").style.display = hidden ? "none" : "";
  document.querySelector("#figureCountRow").style.display = hidden ? "none" : "";
}

function renderOptions(mode) {
  const config = templateConfigs[mode] || templateConfigs.custom;
  const container = document.querySelector("#optionsContainer");
  container.innerHTML = "";
  config.options.forEach((opt) => {
    const label = document.createElement("label");
    label.className = "check-row";
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.value = opt;
    cb.name = "option";
    cb.addEventListener("change", updatePrompt);
    const span = document.createElement("span");
    span.textContent = opt;
    label.appendChild(cb);
    label.appendChild(span);
    container.appendChild(label);
  });
}

function getSelectedOptions() {
  return Array.from(document.querySelectorAll("#optionsContainer input[type=checkbox]:checked")).map((cb) => cb.value);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function getState() {
  return Object.fromEntries(
    Object.entries(fields).map(([key, field]) => [key, field.type === "checkbox" ? field.checked : field.value.trim()]),
  );
}

function applyState(state) {
  const mode = state.mode || defaults.mode;
  renderOptions(mode);
  if (state.selectedOptions) {
    const selected = state.selectedOptions.split(",");
    document.querySelectorAll("#optionsContainer input[type=checkbox]").forEach((cb) => {
      cb.checked = selected.includes(cb.value);
    });
  }
  Object.entries({ ...defaults, ...state }).forEach(([key, value]) => {
    if (!fields[key]) return;
    if (fields[key].type === "checkbox") fields[key].checked = Boolean(value);
    else fields[key].value = value;
  });
  updatePrompt();
}

function line(label, value) {
  return value ? `- ${label}: ${value}` : "";
}

function bulletList(items) {
  return items.map((item) => `- ${item}`).join("\n");
}

function numberedList(items) {
  return items.map((item, index) => `${index + 1}. **${item}**`).join("\n");
}

function buildPrompt(state) {
  if (state.mode === "illust") return buildIllustPrompt(state);
  if (state.mode === "proposal") return buildProposalPrompt(state);
  if (state.mode === "ui-review") return buildUiReviewPrompt(state);
  if (state.mode === "design-direction") return buildDesignPrompt(state);
  if (state.mode === "research") return buildResearchPrompt(state);
  if (state.mode === "minutes") return buildMinutesPrompt(state);
  if (state.mode === "brainstorm") return buildBrainstormPrompt(state);
  if (state.mode === "custom") return buildCustomPrompt(state);
  if (state.mode === "wireframe") return buildWireframePrompt(state);
  if (state.mode === "policy") return buildPolicyPrompt(state);
  if (state.mode === "email") return buildEmailPrompt(state);

  const mode = modeLabels[state.mode];
  const role = roleMap[state.mode];
  const config = templateConfigs[state.mode] || templateConfigs.custom;
  const request = state.request || "ユーザーの相談内容をもとに、目的に合う成果物を作る";
  const outputType = outputLabels[state.outputType];
  const tone = toneLabels[state.tone];
  const detail = detailLabels[state.detail];

  const assumptions = state.inferMissing
    ? "足りない情報がある場合は、一般的で自然な前提を置いて補ってください。補った内容はわかるように書いてください。"
    : "足りない情報がある場合は、勝手に決めずに不足点として書いてください。";

  const questions = state.askQuestions
    ? "作業前に確認した方がよい点があれば、最初に3つ以内で質問してください。"
    : "質問せずに、今ある情報から最善の形で作成してください。";

  const summaryBlock = state.includeSummary
    ? [
        "# 【最初に整理すること】",
        "作業に入る前に、以下を短く整理してください。",
        "- 目的",
        "- 背景",
        "- 求められるアウトプット",
        "- 守る条件",
        "",
      ].join("\n")
    : "";

  return [
    "-------------------------------------",
    "# 【役割（Role）】",
    `あなたは「${role}」です。`,
    "ユーザーのラフな相談内容をもとに、目的に合う成果物を作成してください。",
    "",
    "# 【目的（Goal）】",
    bulletList(config.goals),
    "",
    "# 【依頼内容】",
    request,
    "",
    ...(state.background || state.audience ? [
      "# 【背景（Background）】",
      state.background || "",
      state.audience ? `- 想定する読み手：${state.audience}` : "",
      "",
    ] : []),
    "# 【制約条件（Constraints）】",
    bulletList(config.constraints),
    line("文章のトーン", tone),
    detailInstructions[state.detail] ? `- ${detailInstructions[state.detail]}` : "",
    line("追加条件", state.constraints),
    `- ${assumptions}`,
    `- ${questions}`,
    "- 曖昧な表現を減らし、誰が読んでも同じ意味に受け取れるようにしてください。",
    "- 見出し、箇条書き、表などを使い、読みやすく整理してください。",
    "",
    (() => {
      if (state.mode === "wireframe") {
        const pageTypeLabels = {
          top: "トップページ",
          sub: "下層ページ",
          lp: "LP（ランディングページ）",
          all: "全ページ（複数ページ）",
          any: "おまかせ（構成から提案）",
        };
        const lines = [];
        lines.push("【サイト概要】");
        if (state.wfCompany) lines.push(`会社名：${state.wfCompany}`);
        if (state.wfIndustry) lines.push(`業種：${state.wfIndustry}`);
        lines.push(`ページの種類：${pageTypeLabels[state.wfPageType] || "全ページ"}`);
        if (state.wfPageName) lines.push(`ページ名：${state.wfPageName}`);
        if (state.wfPagePurpose) lines.push(`目的：${state.wfPagePurpose}`);
        const wfSectionsVal = (state.wfSections || "").trim();
        lines.push("", "【セクション構成】");
        if (wfSectionsVal) {
          lines.push(wfSectionsVal);
        } else if (state.wfPageType === "all" || state.wfPageType === "sub") {
          lines.push("各ページのセクション構成はサイトの目的・業種・ターゲットを考慮してAIが提案してください。");
        } else {
          lines.push("セクション構成はサイトの目的・業種・ターゲットを考慮してAIが最適な構成を提案してください。");
        }
        if (state.wfNotes) {
          lines.push("", "【補足】", state.wfNotes);
        }
        if (state.request) {
          lines.push("", "【背景・その他】", state.request);
        }
        return ["# 【入力素材（Materials）】", lines.join("\n")].join("\n");
      }
      return state.materials ? ["# 【入力素材（Materials）】", state.materials].join("\n") : null;
    })(),
    "",
    "# 【出力形式（Output Format）】",
    `出力形式は「${outputType}」を基本にしてください。`,
    state.includeSummary ? summaryBlock : "",
    "以下の項目を含めてください。",
    numberedList(config.output),
    state.outputType === "image"
      ? [
          "",
          "# 【画像出力専用ルール】",
          "- HTMLは生成せず、PythonのPillow（PIL）を使って直接ワイヤーフレーム画像を生成してください。",
          "- 幅1440px、高さはコンテンツ量に合わせて可変にしてください。",
          "- 使用カラーは #000000 / #A4A4A4 / #FFFFFF / #F3F3F3 / #CCCCCC のみとしてください。",
          "- 写真・画像エリアは #F3F3F3 の矩形＋中央に「IMAGE」テキストで表現してください。",
          "- アイコンは #CCCCCC の正方形（基本100×100px、小サイズは40×40px以上）で表現してください。",
          "- セクションは背景色または横線で区切ってください。",
          "- テキストはPillowのデフォルトフォントを使用し、日本語が必要な場合は noto-sans-cjk などの利用可能なフォントを使用してください。",
          "- 最終的にPNG画像としてダウンロード可能な状態で出力してください。",
          "- コードを実行して実際に画像ファイルを生成してください（コードの提示だけでなく、実行まで行うこと）。",
        ].join("\n")
      : config.extraPrompt
        ? ["", ...config.extraPrompt].join("\n")
        : "",
    "",
    ...((() => {
      const selected = getSelectedOptions();
      return selected.length > 0
        ? ["# 【追加対応オプション】", "以下の内容も対応してください。", bulletList(selected), ""]
        : [];
    })()),
    "-------------------------------------",
    state.askQuestions
      ? "以上の内容を確認しました。不明な点があれば作業前に質問してください。"
      : "以上の内容を確認しました。それでは今すぐ作業を開始してください。途中で質問はせず、今ある情報から最善の形で完成させてください。",
  ]
    .filter(Boolean)
    .join("\n");
}

function updatePrompt() {
  const state = getState();
  updateIllustVisibility(state.mode);
  if (state.mode === "illust") updateFramingVisibility(state.illustFigure);
  output.value = buildPrompt(state);
  modeHint.textContent = modeHints[state.mode] || "";
  document.querySelector("#previewMode").textContent = modeLabels[state.mode];
  document.querySelector("#previewOutput").textContent = outputLabels[state.outputType] || "";
  document.querySelector("#previewTone").textContent = toneLabels[state.tone] || "";
}

async function copyPrompt() {
  try {
    await navigator.clipboard.writeText(output.value);
    showToast("プロンプトをコピーしました");
  } catch {
    output.select();
    document.execCommand("copy");
    showToast("プロンプトをコピーしました");
  }
}

async function shareLink() {
  const state = getState();
  const params = new URLSearchParams();
  Object.entries(state).forEach(([key, value]) => params.set(key, String(value)));
  const selectedOpts = getSelectedOptions().join(",");
  if (selectedOpts) params.set("selectedOptions", selectedOpts);
  const url = `${location.origin}${location.pathname}?${params.toString()}`;
  try {
    await navigator.clipboard.writeText(url);
    showToast("共有リンクをコピーしました");
  } catch {
    showToast("共有リンクを作りました");
  }
}

function loadFromUrl() {
  const params = new URLSearchParams(location.search);
  if (!params.size) return defaults;
  const state = { ...defaults };
  Object.keys(fields).forEach((key) => {
    if (!params.has(key)) return;
    state[key] = fields[key].type === "checkbox" ? params.get(key) === "true" : params.get(key);
  });
  if (params.has("selectedOptions")) state.selectedOptions = params.get("selectedOptions");
  return state;
}

function resetForm() {
  history.replaceState(null, "", location.pathname);
  applyState(defaults);
  showToast("初期設定に戻しました");
}

form.addEventListener("input", updatePrompt);
form.addEventListener("change", updatePrompt);
fields.mode.addEventListener("change", () => {
  const examples = Object.values(exampleRequests);
  if (!fields.request.value.trim() || examples.includes(fields.request.value.trim())) {
    const nextExample = exampleRequests[fields.mode.value];
    fields.request.value = nextExample !== undefined ? nextExample : exampleRequests.custom;
  }
  if (fields.mode.value === "wireframe" && fields.outputType.value !== "image") {
    fields.outputType.value = "html";
  }
  if (fields.mode.value === "wireframe" && !fields.wfSections.value.trim()) {
    fields.wfSections.value = wfSectionsExamples[fields.wfPageType.value] ?? "";
  }
  renderOptions(fields.mode.value);
  updatePrompt();
});
document.querySelector("#copyBtn").addEventListener("click", copyPrompt);
document.querySelector("#shareBtn").addEventListener("click", shareLink);
document.querySelector("#resetBtn").addEventListener("click", resetForm);
fields.illustFigure.addEventListener("change", () => updateFramingVisibility(fields.illustFigure.value));
fields.wfPageType.addEventListener("change", () => updateWfSectionsPlaceholder(fields.wfPageType.value));

applyState(loadFromUrl());

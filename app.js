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
  illustStyle: document.querySelector("#illustStyle"),
  illustCategory: document.querySelector("#illustCategory"),
  illustDirection: document.querySelector("#illustDirection"),
  illustIconStyle:  document.querySelector("#illustIconStyle"),
  illustBg: document.querySelector("#illustBg"),
  illustFigure: document.querySelector("#illustFigure"),
  illustFigureCount: document.querySelector("#illustFigureCount"),
  illustFraming: document.querySelector("#illustFraming"),
  illustObjects: document.querySelector("#illustObjects"),
  illustColorTone: document.querySelector("#illustColorTone"),
  illustTheme: document.querySelector("#illustTheme"),
  illustElements: document.querySelector("#illustElements"),
  illustStyleRef: document.querySelector("#illustStyleRef"),
  wfPageType: document.querySelector("#wfPageType"),
  wfOutputType: document.querySelector("#wfOutputType"),
  wfCompany: document.querySelector("#wfCompany"),
  wfIndustry: document.querySelector("#wfIndustry"),
  wfPageName: document.querySelector("#wfPageName"),
  wfPagePurpose: document.querySelector("#wfPagePurpose"),
  wfMaterials: document.querySelector("#wfMaterials"),
  wfSiteDesign: document.querySelector("#wfSiteDesign"),
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
  designPrevResult: document.querySelector("#designPrevResult"),

  siteService: document.querySelector("#siteService"),
  siteSiteType: document.querySelector("#siteSiteType"),
  siteTarget: document.querySelector("#siteTarget"),
  siteUsage: document.querySelector("#siteUsage"),
  siteIssue: document.querySelector("#siteIssue"),
  sitePages: document.querySelector("#sitePages"),
  sitePrevResult: document.querySelector("#sitePrevResult"),
  siteContent: document.querySelector("#siteContent"),
  siteNotes: document.querySelector("#siteNotes"),
  compService: document.querySelector("#compService"),
  compOwnUrl: document.querySelector("#compOwnUrl"),
  compCompetitorUrl: document.querySelector("#compCompetitorUrl"),
  compSiteType: document.querySelector("#compSiteType"),
  compNotes: document.querySelector("#compNotes"),
  researchTheme: document.querySelector("#researchTheme"),
  researchPurpose: document.querySelector("#researchPurpose"),
  researchOwnUrl: document.querySelector("#researchOwnUrl"),
  researchTargets: document.querySelector("#researchTargets"),
  researchFocus: document.querySelector("#researchFocus"),
  minFormat: document.querySelector("#minFormat"),
  minWish: document.querySelector("#minWish"),
  minContent: document.querySelector("#minContent"),
  customRole: document.querySelector("#customRole"),
  customGoal: document.querySelector("#customGoal"),
  customAudience: document.querySelector("#customAudience"),
  customBackground: document.querySelector("#customBackground"),
  customOutput: document.querySelector("#customOutput"),
  customConditions: document.querySelector("#customConditions"),
  emailRecipient: document.querySelector("#emailRecipient"),
  emailContent: document.querySelector("#emailContent"),
  emailTone: document.querySelector("#emailTone"),
  bsIssue: document.querySelector("#bsIssue"),
  bsTarget: document.querySelector("#bsTarget"),
  bsContext: document.querySelector("#bsContext"),
  bsGoal: document.querySelector("#bsGoal"),
  bsTone: document.querySelector("#bsTone"),
  bsMaterials: document.querySelector("#bsMaterials"),
  bsNotes: document.querySelector("#bsNotes"),
  minNextMtg: document.querySelector("#minNextMtg"),
  taskRole: document.querySelector("#taskRole"),
  taskSituation: document.querySelector("#taskSituation"),
  taskType: document.querySelector("#taskType"),
  taskConcern: document.querySelector("#taskConcern"),
  taskDeadline: document.querySelector("#taskDeadline"),
  taskNotes: document.querySelector("#taskNotes"),
  seoType: document.querySelector("#seoType"),
  seoUrl: document.querySelector("#seoUrl"),
  seoSiteName: document.querySelector("#seoSiteName"),
  seoPages: document.querySelector("#seoPages"),
  seoKeywords: document.querySelector("#seoKeywords"),
  seoPrevResult: document.querySelector("#seoPrevResult"),
  seoTarget: document.querySelector("#seoTarget"),
  seoTone: document.querySelector("#seoTone"),
  seoNotes: document.querySelector("#seoNotes"),
  wfRequest: document.querySelector("#wfRequest"),
  designNotes: document.querySelector("#designNotes"),
  uiNotes: document.querySelector("#uiNotes"),
  convertOutputFormat: document.querySelector("#convertOutputFormat"),
  convertFont: document.querySelector("#convertFont"),
  convertColorOverride: document.querySelector("#convertColorOverride"),
  convertNotes: document.querySelector("#convertNotes"),
};

const modeLabels = {
  proposal: "企画書・提案書",
  wireframe: "ワイヤーフレーム",
  "ui-review": "デザインレビュー",
  "design-direction": "デザイン指示書",
  email: "メール・依頼文",
  minutes: "議事録・要約リライト",
  brainstorm: "アイデア出し",
  sitedesign: "サイト設計",
  seo: "サイトマップ・メタ情報設計",
  task: "やること整理",
  competitor: "競合分析",
  research: "リサーチ・競合分析",
  custom: "自由に作る",
  illust: "イラスト生成",
  convert: "画像→編集データ",
};

const modeHints = {
  proposal: "提案の構成、見出し、伝える順番を作りたい時。",
  wireframe: "白・グレー・黒の低忠実度ワイヤーフレームを作りたい時。HTML・画像どちらでも出力できます。",
  "ui-review": "画面や導線の改善点をレビューしてほしい時。",
  "design-direction": "制作チームに渡す制作指示を作りたい時。",
  email: "営業、依頼、確認、謝罪などの文章を作りたい時。",
  minutes: "議事録を読みやすく整えたい時。",
  brainstorm: "施策案、企画案、切り口を広げたい時。",
  sitedesign: "サイトの構成・導線・提案をまとめたい時。",
  seo: "URL・メタタイトル・ディスクリプションをページごとに設計したい時。",
  task: "やること・確認事項・依頼先が整理できていない時。",
  competitor: "競合サイトを分析して、差別化戦略と打ち出し方を考えたい時。",
  research: "競合、顧客、業界、参考事例を整理したい時。",
  custom: "上にない用途を自由に作りたい時。",
  illust: "フラットベクター編集イラストの画像生成プロンプトを作りたい時。",
  convert: "画像を .pptx・HTML・SVG に組み直して編集できるデータにしたい時。",
};

const exampleRequests = {
  proposal: "",
  wireframe: "",
  "ui-review": "",
  "design-direction": "",
  email: "納期延期をクライアントに丁重にお願いするメールを書きたい",
  minutes: "プロジェクトキックオフ会議の議事録を整理したい",
  brainstorm: "",
  sitedesign: "",
  seo: "",
  task: "",
  competitor: "",
  research: "",
  custom: "",
  illust: "",
  convert: "",
};

const roleMap = {
  proposal: "企画書・提案書構成クリエイターAI",
  wireframe: "Webサイトの情報設計と低忠実度ワイヤーフレームを作るUI設計者",
  "ui-review": "UI/UXの課題を見つけて改善案を出すレビュアー",
  "design-direction": "クリエイティブディレクター兼デザイン戦略AI",
  email: "営業コミュニケーション設計AI",
  minutes: "ビジネスコミュニケーション編集AI",
  brainstorm: "戦略プランナー兼アイデアクリエイターAI",
  sitedesign: "Webディレクター兼サイト設計AI",
  seo: "SEOコンサルタント兼Webディレクター",
  task: "Webプロジェクト整理AI",
  competitor: "Web戦略コンサルタント兼競合分析AI",
  research: "市場分析コンサルタント兼リサーチAI",
  custom: "プロンプトエンジニア兼専門領域支援AI",
  illust: "フラットベクターイラスト生成AI",
  convert: "画像再構築・編集データ変換AI",
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
  mode: "custom",
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
  customRole: "",
  customGoal: "",
  customAudience: "",
  customBackground: "",
  customOutput: "",
  customConditions: "",
  illustStyle: "flat",
  illustColorTone: "soft",
  illustElements: "",
  illustStyleRef: "",
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
  const sectionsText = wfSectionsRaw
    ? `【セクション構成】\n${wfSectionsRaw}`
    : "セクション構成はサイトの目的・業種・ターゲットを考慮してAIが最適な構成を提案してください。";

  const outputType = state.wfOutputType === "image" ? "image" : "html";

  const imageRules = [
    "# 【画像出力ルール】",
    "- HTMLは生成せず、PythonのPillow（PIL）を使ってワイヤーフレーム画像を生成してください。",
    "- 幅1440px、高さはコンテンツ量に合わせて可変。",
    "- 最終的にPNG画像としてダウンロード可能な状態で出力してください。",
  ].join("\n");

  const htmlRules = [
    "# 【出力ルール】",
    "- <!DOCTYPE html> から始まる完成HTMLを1ファイルで出力してください。",
    "- セクションはコメントで区切ってください。",
    "- 資料にない情報を推測で補った場合はHTML末尾に箇条書きで明記してください。",
  ].join("\n");

  const materialsText = (state.wfMaterials || "").trim();
  const siteDesignText = (state.wfSiteDesign  || "").trim();
  const bgText         = (state.wfRequest     || "").trim();
  const notesText      = (state.wfNotes       || "").trim();

  return [
    "あなたは「Webフロントエンドエンジニア兼UIワイヤーフレーム生成AI」です。",
    "以下の情報をもとに、ブラウザで確認できるレベルのワイヤーフレームを生成してください。",
    "",
    "# 【サイト情報】",
    ...infoLines,
    "",
    "# 【セクション構成】",
    sectionsText,
    "",
    "# 【デザインルール】",
    "- フォント：Noto Sans JP（Regular〜Bold）",
    "- フォントサイズ：4の倍数・最小16px",
    "- カラー：#000000 / #A4A4A4 / #FFFFFF / #F3F3F3 / #CCCCCC のみ使用",
    "- 余白：4の倍数のみ",
    "- アイコン：グレーの四角で表現（基本100×100px、小サイズは40px以上）",
    "- 写真エリア：SVGアイコン＋背景#F3F3F3で表現",
    "- 矢印：SVGの矢印を使用",
    "- テキストは添付資料をもとに入力。資料にない場合は推測で補い、末尾に明記する",
    "",
    materialsText  ? `# 【参考情報・素材】\n${materialsText}`     : null,
    siteDesignText ? `# 【サイト設計の結果】\n${siteDesignText}` : null,
    bgText         ? `# 【作成の背景・ひとこと】\n${bgText}`      : null,
    notesText      ? `# 【補足】\n${notesText}`                   : null,
    "",
    outputType === "image" ? imageRules : htmlRules,
    "",
    "以上の内容を確認しました。それでは今すぐ作業を開始してください。",
  ].filter(v => v !== null).join("\n");
}

function buildCustomPrompt(state) {
  const role       = (state.customRole       || "").trim();
  const goal       = (state.customGoal       || "").trim();
  const audience   = (state.customAudience   || "").trim();
  const background = (state.customBackground || "").trim();
  const output     = (state.customOutput     || "").trim();
  const conditions = (state.customConditions || "").trim();

  return [
    role ? `あなたは「${role}」です。` : null,
    "",
    `# 目的\n${goal || "（目的を入力してください）"}`,
    audience   ? `\n# 対象レベル\n${audience}`   : null,
    background ? `\n# 背景・状況\n${background}` : null,
    output     ? `\n# 出力形式\n${output}`        : null,
    conditions ? `\n# 条件・制約\n${conditions}`  : null,
    "",
    "以上の内容を確認しました。それでは今すぐ作業を開始してください。途中で質問はせず、今ある情報から最善の形で完成させてください。",
  ].filter(v => v !== null).join("\n");
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
    (state.bsNotes || "").trim() ? `\n# 【補足】\n${state.bsNotes.trim()}` : null,
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
    opt("次回MTG日程", state.minNextMtg),
    opt("どう出してほしいか", state.minWish),
    opt("補足", state.request),
  ].filter(Boolean);

  if (isEmail) {
    const today = new Date();
    const dateStr = `${today.getMonth() + 1}/${today.getDate()}`;
    const nextMtg = (state.minNextMtg || "").trim();
    const nextMtgLine = nextMtg
      ? `【固定テキスト】\n4. 次回のお打ち合わせ\n${nextMtg}\n＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿`
      : "";

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
      "【生成】",
      `件名：【議事録】${dateStr}お打ち合わせ（会社名や案件名があれば補完して）`,
      "",
      "⚫︎⚫︎様",
      "",
      "お世話になっております。",
      "⚫︎⚫︎でございます。",
      "",
      "本日はお時間をいただき誠にありがとうございました。",
      "下記に、議事録とネクストアクションをご案内させていただきます。",
      "＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿",
      "",
      "【固定テキスト】",
      `1. ${dateStr}お打ち合わせ 議事録`,
      "本日のお打ち合わせの内容をご共有いたします。",
      "▼議事録",
      "（議事録のURLがあれば記載。なければこの行ごと省略）",
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
      "▼お客様 対応事項",
      "・（箇条書き）",
      "—",
      "▼弊社 対応事項",
      "・（箇条書き）",
      "＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿",
      "",
      nextMtgLine,
      nextMtgLine ? "" : null,
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
    ].filter(v => v !== null).join("\n");
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
    opt("ペルソナ", state.designAudience),
    `- ブランドトーン：${state.designTone || "モダン・スタイリッシュ"}`,
    opt("参考サイト・URL", state.designRef),
    opt("NG表現・避けたい方向性", state.designNg),
    opt("補足", state.designNotes),
  ].filter(Boolean);

  const prevResult = (state.designPrevResult || "").trim();
  const prevSection = prevResult
    ? `\n# 【サイト設計の結果】\n${prevResult}`
    : "";

  return [
    "あなたは「クリエイティブディレクター兼デザイン戦略AI」です。",
    "以下の情報をもとに、デザイン制作チームへ共有できるデザインディレクション指示書を作成してください。",
    "",
    "# 【制作情報】",
    ...infoLines,
    prevSection,
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

function buildSiteDesignPrompt(state) {
  const opt = (label, val) => (val || "").trim() ? `- ${label}：${val.trim()}` : null;

  const infoLines = [
    opt("サービス・事業内容", state.siteService),
    opt("サイトの種類", state.siteSiteType),
    opt("ターゲット", state.siteTarget),
    opt("現状の課題・背景", state.siteIssue),
    opt("想定ページ数", state.sitePages),
    opt("必須コンテンツ", state.siteContent),
    opt("補足・その他", state.siteNotes),
  ].filter(Boolean);

  const prevResult = (state.sitePrevResult || "").trim();
  const prevSection = prevResult
    ? `\n# 【競合分析の結果】\n${prevResult}`
    : "";

  const isSlide = state.siteUsage === "slide";

  return [
    "あなたは「Webディレクター兼提案AI」です。",
    isSlide
      ? "以下の情報をもとに、クライアントへのプレゼンに使えるサイト設計とスライド構成をまとめてください。"
      : "以下の情報をもとに、クライアントや社内共有に使えるサイト設計レポートをまとめてください。",
    "専門用語を避け、読んで納得できる言葉で書いてください。",
    "",
    "# 【サイト情報】",
    ...infoLines,
    prevSection,
    "",
    "# 【制約条件】",
    "- 専門用語を避けクライアントが読んでも理解できる言葉で書く",
    "- 「なぜそうするか」の理由を添えて提案する",
    "- メリットや期待効果を明確に示す",
    "- 競合分析の結果がある場合はサイト設計に反映する",
    "- ページ数が未定の場合はAIが適切な構成を提案する",
    isSlide ? "- スライド1枚1メッセージを意識する" : null,
    "",
    "# 【出力形式】",
    "1. 提案サマリー（何のためのサイトか・何を実現するか）",
    "2. 現状の課題と背景",
    "3. 提案するサイトの方向性（なぜこのアプローチか）",
    "4. ページ構成案（各ページの役割付き）",
    "5. ユーザー導線（メインの流れを2〜3パターン）",
    "6. 期待できる効果・成果指標",
    isSlide
      ? [
          "8. スライド構成案（表形式）",
          "   | No | タイトル | 伝えたいこと | 主な内容（2〜4項目の具体的な内容） |",
          "   各スライドの「主な内容」は、スライド上に載せる具体的な項目を2〜4つ記載してください。",
          "   例：| 2 | 現状の課題 | 問題点を整理する | 問い合わせにつながりにくい構成・競合との差・ユーザーが求める情報のギャップ・現状KPI |",
        ].join("\n")
      : null,
    "",
    "以上を確認しました。それでは今すぐ作業を開始してください。",
  ].filter(v => v !== null).join("\n");
}

function buildSeoPrompt(state) {
  const opt = (label, val) => (val || "").trim() ? `- ${label}：${val.trim()}` : null;
  const isExisting = state.seoType === "existing";
  const siteName   = (state.seoSiteName   || "").trim();
  const pages      = (state.seoPages      || "").trim();
  const keywords   = (state.seoKeywords   || "").trim();
  const url        = (state.seoUrl        || "").trim();
  const prevResult = (state.seoPrevResult || "").trim();
  const target     = (state.seoTarget     || "").trim();
  const tone       = (state.seoTone       || "").trim();
  const notes      = (state.seoNotes      || "").trim();

  const infoLines = [
    siteName   ? `- サイト名：${siteName}` : null,
    keywords   ? `- 狙いたいキーワード：${keywords}` : null,
    target     ? `- ターゲット：${target}` : null,
    tone       ? `- ブランドのトーン：${tone}` : null,
    notes      ? `- 補足：${notes}` : null,
  ].filter(Boolean);

  const urlSection = isExisting && url
    ? [
        "# 【既存サイトの確認】",
        `以下のURLにアクセスして、各ページの現在のメタタイトル・メタディスクリプションを確認してから改善案を提案してください。`,
        `サイトURL：${url}`,
        "",
      ].join("\n")
    : "";

  const prevSection = prevResult
    ? `# 【サイト設計の結果】\n${prevResult}\n\n`
    : "";

  const pagesSection = pages
    ? `# 【対象ページ】\n${pages}`
    : "# 【対象ページ】\n（ページ情報がここに入ります）";

  return [
    `あなたは「SEOコンサルタント兼Webディレクター」です。`,
    `以下の情報をもとに、各ページのURL・メタタイトル・メタディスクリプションを設計してください。`,
    "",
    urlSection,
    prevSection,
    pagesSection,
    "",
    "# 【サイト情報】",
    ...infoLines,
    "",
    "# 【出力形式】",
    "各ページについて以下の形式で出力してください。",
    "",
    "---",
    "## ページ名",
    "- URL：/xxx（英小文字・ハイフン区切り）",
    "- メタタイトル：〇〇（全角30文字以内・半角60文字以内）",
    "- メタディスクリプション：〇〇（全角120文字以内）",
    "---",
    "",
    "全ページ出力後に、サイト全体のサイトマップをツリー形式で出力してください。",
    "例：",
    "HOME（/）",
    "├ サービス（/service）",
    "├ 実績（/works）",
    "└ お問い合わせ（/contact）",
    "",
    "# 【制約条件】",
    "- メタタイトルはキーワードを自然に含め、クリックしたくなる文言にする",
    "- メタディスクリプションは内容を簡潔に伝え、行動を促す表現にする",
    "- URLは短く・意味が伝わる英語スラッグにする（日本語・大文字・スペース禁止）",
    "- ページ間でメタ情報が重複しないよう各ページで差別化する",
    isExisting ? "- 既存のメタ情報と比較して改善点を明示する" : null,
    "",
    "以上を確認しました。それでは今すぐ作業を開始してください。",
  ].filter(v => v !== null && v !== "").join("\n");
}


function buildTaskPrompt(state) {
  const roleLabels = {
    "director":          "ディレクター",
    "designer":          "デザイナー",
    "director-designer": "ディレクター兼デザイナー",
    "coder":             "コーダー",
  };
  const sectionsByRole = {
    "director":          ["現状整理", "ブロッカー", "クライアントへの確認事項", "コーダーへの依頼事項", "インフラ担当への確認事項", "QAへの依頼事項", "自分のネクストアクション（優先順位付き）"],
    "designer":          ["現状整理", "ブロッカー", "クライアントへの確認事項", "ディレクターへの確認・報告事項", "コーダーへの引き渡し確認", "自分のネクストアクション（優先順位付き）"],
    "director-designer": ["現状整理", "ブロッカー", "クライアントへの確認事項", "コーダーへの依頼事項", "インフラ担当への確認事項", "QAへの依頼事項", "自分のネクストアクション（優先順位付き）"],
    "coder":             ["現状整理", "ブロッカー", "ディレクターへの確認事項", "デザイナーへの確認事項", "インフラ担当への確認事項", "QAへの連携事項", "自分のネクストアクション（優先順位付き）"],
  };
  const role      = state.taskRole || "director";
  const roleLabel = roleLabels[role] || "ディレクター";
  const sections  = sectionsByRole[role] || sectionsByRole["director"];
  const situation = (state.taskSituation || "").trim();
  const type      = (state.taskType      || "").trim();
  const concern   = (state.taskConcern   || "").trim();
  const deadline  = (state.taskDeadline  || "").trim();
  const notes     = (state.taskNotes     || "").trim();

  const infoLines = [
    `- 役割：${roleLabel}`,
    type     ? `- プロジェクトの種類：${type}`   : null,
    deadline ? `- 納期・フェーズ：${deadline}`   : null,
    notes    ? `- 補足：${notes}`                : null,
  ].filter(Boolean);

  const sectionsText = sections.map(s => `- ${s}`).join("\n");

  return [
    "あなたは「Webプロジェクト整理AI」です。",
    `以下の情報をもとに、${roleLabel}として今すぐやるべきことを整理してください。`,
    "入力は状況説明の場合もあれば、受け取った依頼・メッセージ・議事録そのままの場合もあります。内容に応じて柔軟に解釈してください。",
    "各項目には、実際に使える例文・聞き方のサンプルも添えてください。",
    "",
    "# 【プロジェクト情報】",
    ...infoLines,
    "",
    "# 【現状・状況】",
    situation || "（状況説明がここに入ります）",
    concern ? `\n# 【気になっていること】\n${concern}` : null,
    "",
    "# 【出力形式】",
    "以下のセクション順で出力してください。",
    "「言葉の解読・意図の翻訳」は専門用語・意図がわかりにくい言葉・依頼が含まれている場合のみ出力してください。含まれていない場合はスキップしてください。",
    "「確認事項・依頼事項」には「→ 例：〇〇」の形で実際に使える一言を添えてください。",
    "「ブロッカー」はプロジェクトの進行を止めているもの・止まりそうなものを優先して挙げてください。",
    "「自分のネクストアクション」は優先順位が高い順に番号付きで並べてください。",
    "- 現状整理",
    "- 言葉の解読・意図の翻訳（専門用語・意図不明な依頼が含まれる場合のみ）",
    ...sections.filter(s => s !== "現状整理").map(s => `- ${s}`),
    "",
    "# 【制約条件】",
    "- 状況から読み取れる内容だけを出す（架空の問題を作らない）",
    "- 誰に何を確認すべきか不明な場合は、それも整理して出す",
    "- 例文は堅すぎず、実務で使える自然な言葉にする",
    "",
    "以上を確認しました。それでは今すぐ作業を開始してください。",
  ].filter(v => v !== null).join("\n");
}

function buildCompetitorPrompt(state) {
  const opt = (label, val) => (val || "").trim() ? `- ${label}：${val.trim()}` : null;
  const infoLines = [
    opt("サービス・事業内容", state.compService),
    opt("調査対象のサイトURL", state.compOwnUrl),
    opt("競合サイトURL", state.compCompetitorUrl),
    opt("サイトの種類", state.compSiteType),
    opt("補足", state.compNotes),
  ].filter(Boolean);

  return [
    "あなたは「Web戦略コンサルタント兼競合分析AI」です。",
    "以下の情報をもとに、事業・競合分析と戦略提案を行ってください。",
    "分析で終わらず「だからこうすべき」という提案まで出してください。",
    "",
    "# 【分析情報】",
    ...infoLines,
    "",
    "# 【制約条件】",
    "- URLが提供された場合はそのサイトを直接分析し、構成・訴求・デザイン・導線まで具体的に比較する",
    "- URLがない場合はサービス・事業内容をもとに代表的な競合をAIが選定して分析する",
    "- 提供された競合URLに加え、ユーザーが気づいていない直接競合・間接競合も積極的に提案する",
    "- 単なる情報列挙ではなく「示唆と提案」を含める",
    "- 強み・弱みは両面で整理する",
    "- 事実と推測を分離し、推測には「※推定」と明記する",
    "- 分析結果を踏まえた具体的なアクション提案まで出す",
    "",
    "# 【出力形式】",
    "1. 調査サマリー（全体感・重要示唆）",
    "2. サービスの提供価値と強み",
    "3. ユーザー観点分析（ターゲットのニーズ・不満・選定理由）",
    "4. 競合比較（構成・訴求・デザイン・導線の観点で）",
    "5. 差別化ポイントと改善余地",
    "6. 戦略提案（何をどう打ち出すべきか）",
    "7. サイトで優先して伝えるべき内容",
    "8. 今後追加で調査すべき論点",
    "9. 見落としがちな競合・間接競合（なぜ競合になりうるかの説明付き）",
    "",
    "以上を確認しました。それでは今すぐ作業を開始してください。",
  ].join("\n");
}

function buildResearchPrompt(state) {
  const opt = (label, val) => (val || "").trim() ? `- ${label}：${val.trim()}` : null;
  const infoLines = [
    opt("調査テーマ", state.researchTheme),
    (state.researchPurpose && state.researchPurpose !== "おまかせ")
      ? `- 調査目的：${state.researchPurpose}`
      : "- 調査目的：全角度から包括的に分析してください",
    opt("調査対象の企業", state.researchOwnUrl),
    opt("比較対象の企業", state.researchTargets),
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
    overall: "総合レビュー",
    cv: "CV・導線改善",
    design: "デザイン品質",
    accessibility: "アクセシビリティ",
  };
  const perspective = perspectiveLabels[state.uiPerspective] || "UI/UX総合";

  const volumeMap = {
    brief:    { count: "3〜5件", depth: "各提案は簡潔に2〜3行でまとめてください。" },
    standard: { count: "5〜7件", depth: "各提案は根拠と改善案を具体的に記述してください。" },
    detail:   { count: "7〜10件", depth: "各提案は背景・根拠・改善案・Before/After・期待効果を詳細に展開してください。" },
  };
  const vol = volumeMap[state.uiVolume] || volumeMap.standard;

  const infoLines = [
    `- レビュー観点：${perspective}`,
    opt("ページの種類", state.uiPageType),
    opt("ペルソナ", state.uiTarget),
    opt("改善したいこと", state.uiGoal),
    opt("補足", state.uiNotes),
  ].filter(Boolean);

  return [
    "あなたは「UI/UXコンサルタント兼プロダクトレビューAI」です。",
    "添付のスクリーンショットをもとに、クライアントへそのまま提出できるレベルのデザインレビューと改善提案を作成してください。",
    "※スクリーンショットが添付されていない場合は、その旨を伝えてください。",
    "",
    "# 【レビュー情報】",
    ...infoLines,
    "",
    "# 【制約条件】",
    "- 感想ではなく「改善可能な指摘」に絞る",
    "- UI / UX / 情報設計 / コピーの領域を分けて整理する",
    "- ユーザー心理・行動原理をベースに理由を説明する",
    "- 実装難易度（小：CSS変更レベル / 中：構成変更 / 大：設計から見直し）を明示する",
    "- 情報が不足している場合は仮説ベースで補完し「※仮説」と注記する",
    "",
    "# 【出力形式】",
    "以下の構成で出力してください。",
    "",
    "## 1. 総評",
    "- 全体的な第一印象（ユーザー目線で）",
    "- 特に評価できる点（2〜3点）",
    "- 最優先で対処すべき課題（2〜3点）",
    "",
    "## 2. 領域別レビュー",
    "UI・UX・情報設計・コピーの4領域について、それぞれ箇条書きで気になる点を挙げてください。",
    "各項目は「場所 → 課題の内容 → なぜ問題か」の順で書いてください。",
    "",
    "## 3. 具体的な改善提案",
    `優先度の高い順に${vol.count}を「提案①」「提案②」…の形式で番号付きで出力してください。`,
    vol.depth,
    "各提案は以下の構成で記述してください：",
    "",
    "### 提案①：（タイトル）",
    "**課題**：何が問題か（場所・状況を具体的に）",
    "**背景・理由**：なぜそれがユーザー体験を損ねるか",
    "**改善案**：具体的に何をどう変えるか",
    "**Before → After**：変更前後のコピー・構成・UIの例",
    "**期待効果**：改善によって何が変わるか",
    "**優先度 / 実装難易度**：高・中・低 / 小・中・大",
    "",
    "## 4. 次に確認すべきこと",
    "レビューで仮説にとどまった点、追加で確認すると精度が上がるデータや情報を列挙してください。",
    "",
    "以上の内容を確認しました。それでは今すぐレビューを開始してください。途中で質問はせず、今ある情報から最善の形で完成させてください。",
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

function buildConvertPrompt(state) {
  const fmt = state.convertOutputFormat || "pptx";
  const font = (state.convertFont || "").trim();
  const colorOverride = (state.convertColorOverride || "").trim();
  const notes = (state.convertNotes || "").trim();

  const colorLines = [
    "# 配色",
    "- 原画からHEXで抽出して再現する（近似で済ませない）。",
    "- 近似色の統一：色差が小さい色（例：#1A1A1A と #222222）は同一色にまとめ、使用色数を最小化する。",
    colorOverride ? `- 上書き色：${colorOverride}` : null,
  ].filter(Boolean).join("\n");

  const fontRule = font
    ? `- フォントは「${font}」で統一する（日本語・英数字とも）。`
    : "- 日本語フォントはfont-familyで明示的に指定する。";

  const notesSection = notes ? `\n# 補足\n${notes}` : "";

  const steps = [
    "Step 1. 画像を観察し、存在する要素だけを列挙する（元画像にない要素を足さない）。",
    "Step 2. 各要素の位置・色・サイズを実測し、座標・寸法を出力フォーマットの単位に等比変換する。",
    "Step 3. テキストは一字一句コピーする（全角/半角・句読点・記号の種類まで一致させる）。",
    "Step 4. 要素を次のルールで振り分ける：テキストはネイティブのテキスト要素、図形・線・背景色はネイティブの図形要素で組む。写真・イラスト・アイコン画像など「そもそも画像であるコンテンツ」はラスタ画像のまま埋め込む。",
    "Step 5. 出力後に原画と並べて比較し、目視でバレるズレだけ修正する（最大3回）。",
  ].join("\n");

  if (fmt === "pptx") {
    return [
      "あなたは添付画像を「見た目はほぼ同じ・中身は完全に編集可能」な .pptx に組み直すプロです。python-pptx でゼロから再構築してください。",
      "",
      steps,
      "",
      "# 出力形式",
      "- キャンバス：16:9（13.333 × 7.5 inch）。原画の比率が異なる場合は原画優先。",
      "- 納品物：編集可能な .pptx を1ファイル。",
      "",
      "# デザイン仕様",
      "- 全テキストが選択・編集できること（文字の画像化・アウトライン化・SmartArt化は禁止）。",
      "- 全シェイプが個別に選択・移動・リサイズできること。",
      "- SVG埋め込み禁止。テキストや図形の代替としてのラスタ画像使用禁止（画像コンテンツの埋め込みは可）。",
      "- 点線・破線の枠は「塗りなしシェイプ＋破線アウトライン」で表現する（prstDash: dash / sysDash / sysDot、線幅1〜2pt）。短い線を並べた自作破線は禁止。",
      `- ${fontRule.replace("- ", "")} 日本語はea（eastAsia）とlatinの両方に同じフェイスを指定する。`,
      "- テキストボックスは右マージンを30〜100pt広めに取り、word_wrap=Falseにする。",
      "",
      colorLines,
      "",
      "# ルール",
      "- 原画にない要素を追加しない／原画にある要素を省略しない。",
      "- Boldは大きい見出し・英語ラベル・アクセント色の小ラベルのみ。本文中の単語を勝手に太字にしない。",
      "- 完成基準：「原画と並べて、見る人にバレる破綻がないこと」。ピクセル単位の追い込みは不要。",
      notesSection,
    ].filter(v => v !== "").join("\n");
  }

  if (fmt === "html") {
    return [
      "あなたは添付画像を「見た目はほぼ同じ・中身は完全に編集可能」なHTMLページに組み直すプロです。",
      "",
      steps,
      "",
      "# 出力形式",
      "- 1ファイルのHTML（CSSは<style>タグにまとめる）。",
      "- 全テキストが選択・コピー・編集できること（テキストの画像化禁止）。",
      "- 各ブロックが個別に移動・リサイズできる構造にする（Flexbox / Grid / position:absolute を適切に使う）。",
      "- 背景・装飾はCSSで表現する。テキストや図形の代替としてのラスタ画像使用禁止（画像コンテンツの埋め込みは可）。",
      `- ${fontRule}`,
      "",
      colorLines,
      "",
      "# ルール",
      "- 原画にない要素を追加しない／原画にある要素を省略しない。",
      "- 完成基準：「原画と並べて、見る人にバレる破綻がないこと」。",
      notesSection,
    ].filter(v => v !== "").join("\n");
  }

  // svg
  return [
    "あなたは添付画像を「見た目はほぼ同じ・中身は完全に編集可能」なSVGファイルに組み直すプロです。",
    "",
    steps,
    "",
    "# 出力形式",
    "- 単体で開けるSVGファイル（xmlns属性付き）。",
    "- viewBoxは原画の縦横比に合わせる。",
    "- 全テキストが選択・編集できること（アウトライン化禁止）。",
    "- 全シェイプが個別に選択・編集できること（<g>グループ化は可、各要素を独立操作できる構造を維持）。",
    `- ${fontRule}`,
    "",
    colorLines,
    "",
    "# ルール",
    "- 原画にない要素を追加しない／原画にある要素を省略しない。",
    "- 完成基準：「原画と並べて、見る人にバレる破綻がないこと」。",
    notesSection,
  ].filter(v => v !== "").join("\n");
}

function buildIllustPrompt(state) {
  const theme = (state.illustTheme || state.request || '').trim() || 'テーマを入力してください';

  // アイコン
  if (state.illustStyle === "icon") {
    const iconStyle = state.illustIconStyle || "outline";

    if (iconStyle === "filled") {
      return [
        `Theme: ${theme}`,
        "",
        "Generate 6 different icons relevant to the theme.",
        "Choose the most representative subjects automatically.",
        "",
        "For abstract themes (such as IR, ESG, DX, recruitment, corporate, business, strategy, finance, sustainability, healthcare, education, etc.),",
        "choose symbols commonly used on professional corporate websites and business communications.",
        "",
        "Flat icon set of 6 icons on white background.",
        "",
        "Output image: 1200×800px.",
        "2×3 grid layout.",
        "Each icon approximately 350×350px.",
        "",
        "Style:",
        "Solid filled shapes.",
        "No outlines.",
        "Fill color: #1A1A1A.",
        "",
        "Modern pictogram icon set.",
        "Simple silhouette-based design.",
        "Clean geometric construction.",
        "Subtle rounded corners.",
        "Professional UI icon style.",
        "",
        "Highly simplified forms.",
        "Clear visual hierarchy.",
        "Instantly recognizable silhouettes.",
        "Balanced proportions.",
        "Consistent visual weight.",
        "",
        "Designed for maps, navigation systems, mobile apps and UI design.",
        "",
        "The icon shapes should be simple and vector-friendly.",
        "Avoid tiny details, thin gaps, intricate cutouts, and complex negative space.",
        "Use clean geometric silhouettes suitable for SVG vectorization.",
        "",
        "Avoid:",
        "logos, mascots, cartoon style, children's illustration style,",
        "toy-like proportions, character design, decorative details.",
        "",
        "Pure vector appearance.",
        "No gradients. No shadows. No textures. No 3D effects. No text labels. No background elements.",
        "",
        "Center each icon within its grid cell.",
        "Maintain consistent scale and visual balance across all icons.",
        "",
        "The icons should resemble professional map and interface pictograms rather than brand logos.",
        "",
        "FINAL STEP (REQUIRED)",
        "",
        'After generating the icon image, always ask:',
        '"Would you like me to convert this icon set to editable SVG files using Python?"',
        "",
        "Do not automatically create SVG files.",
        "Wait for user approval before SVG conversion.",
      ].join("\n");
    }

    // outline
    return [
      `Theme: ${theme}`,
      "",
      "Generate 6 different icons relevant to the theme.",
      "Choose the most representative subjects automatically.",
      "",
      "For abstract themes (such as IR, ESG, DX, recruitment, corporate, business, strategy, finance, sustainability, healthcare, education, etc.),",
      "choose symbols commonly used on professional corporate websites and business communications.",
      "",
      "Flat icon set of 6 icons on white background.",
      "",
      "Output image: 1200×800px.",
      "2×3 grid layout.",
      "Each icon approximately 350×350px.",
      "",
      "Style:",
      "Outline only.",
      "No fills.",
      "",
      "Stroke color: #1A1A1A.",
      "Stroke width: 20px.",
      "Uniform stroke.",
      "No stroke variation.",
      "No tapered lines.",
      "Consistent stroke weight throughout the entire set.",
      "",
      "Shape:",
      "Soft rounded corners.",
      "Friendly geometric construction.",
      "Gentle curves.",
      "Approachable silhouettes.",
      "Slightly simplified proportions.",
      "Not overly round.",
      "Not cartoonish.",
      "",
      "Simple pictogram-style construction.",
      "Minimal internal details.",
      "Clear and recognizable forms.",
      "Instantly recognizable silhouettes.",
      "",
      "Designed for websites, landing pages, SaaS products, service pages, mobile apps, and modern UI systems.",
      "",
      "The icon shapes should be simple and vector-friendly.",
      "Use clean geometric shapes suitable for SVG vectorization.",
      "",
      "Prefer objects, tools, facilities, and symbols over people.",
      "Objects should be represented as generic symbols rather than realistic products.",
      "",
      "Avoid brand-specific, government-specific, region-specific, or legally protected designs.",
      "",
      "Vehicles and objects should appear friendly and approachable.",
      "Avoid aggressive styling, sporty proportions, technical or industrial appearance, engineering details.",
      "",
      "Maintain consistent visual complexity across all icons.",
      "Use a similar amount of detail for every icon.",
      "",
      "Every icon should be drawable using a small number of SVG paths.",
      "Prefer: circles, rounded rectangles, straight lines, simple polylines.",
      "Avoid: complex contours, hand-drawn curves, unnecessary anchor points.",
      "",
      "The resulting icons should be easy to recreate as clean editable SVG vectors.",
      "",
      "Avoid:",
      "tiny details, thin gaps, intricate cutouts, complex negative space,",
      "mechanical details, filled shapes, logos, mascots, cartoon style,",
      "children's illustration style, toy-like proportions, decorative details,",
      "realistic details, transportation-sign aesthetics, public-signage aesthetics,",
      "map-marker icon style.",
      "",
      "Pure vector appearance.",
      "No gradients. No shadows. No textures. No 3D effects. No text labels. No background elements.",
      "",
      "Center each icon within its grid cell.",
      "Maintain consistent scale and visual balance across all icons.",
      "",
      "The icons should resemble professional website UI icons rather than transportation signage.",
      "",
      "SVG-friendly construction.",
      "Use basic geometric shapes wherever possible.",
      "Avoid overlapping strokes.",
      "Avoid decorative line work.",
      "Minimize anchor points.",
      "",
      "FINAL STEP (REQUIRED)",
      "",
      'After generating the icon image, always ask:',
      '"Would you like me to convert this icon set to editable SVG files using Python?"',
      "",
      "Do not automatically create SVG files.",
      "Wait for user approval before SVG conversion.",
    ].join("\n");
  }

  // アイソメトリック
  if (state.illustStyle === "isometric") {
    const colorTonePeople = {
      soft:  "Bright clean palette. Bright white clothing. Soft and light accent colors. Each character limited to 2–3 colors. Consistent color palette across the entire collection.",
      muted: "Calm muted palette. Bright white clothing. Muted and desaturated accent colors. Each character limited to 2–3 colors. Consistent color palette across the entire collection.",
      vivid: "Bright clean palette. Bright white clothing. Fresh accent colors. Bold and vivid accent colors. Each character limited to 2–3 colors. Consistent color palette across the entire collection.",
    };
    const colorToneObject = {
      soft:  "Bright clean palette. Soft and light colors. Each object limited to 2–3 colors. Consistent color palette across the entire collection.",
      muted: "Calm muted palette. Desaturated and quiet tones. Each object limited to 2–3 colors. Consistent color palette across the entire collection.",
      vivid: "Bright clean palette. Bold and vivid accent colors. Each object limited to 2–3 colors. Consistent color palette across the entire collection.",
    };

    const objects = (state.illustObjects || "").trim();
    const isPeople = state.illustCategory === "people" || state.illustCategory === "mix" || !state.illustCategory;

    const categoryContentMap = {
      building: `${theme}に関連する建物・ランドマーク・施設を8点、それぞれ異なる種類・用途でAIが考えて構成する。`,
      item:     `${theme}に関連する小物・アイテム・道具を8点、それぞれ異なる種類でAIが考えて構成する。`,
      vehicle:  `${theme}に関連する乗り物・交通手段を8点、それぞれ異なる種類でAIが考えて構成する。`,
      nature:   `${theme}に関連する自然・植物・動物を8点、それぞれ異なる種類でAIが考えて構成する。`,
      people:   `${theme}に関連するスタッフ、店員、客、作業スタッフなどをテーマに、異なる役割・ポーズ・シーンの人物8点を構成する。`,
      mix:      `${theme}に関連する人物・建物・小物・乗り物などを幅広くミックスして8点を構成する。`,
    };

    const directionMap = {
      left:       "All objects / figures facing left-forward direction.",
      right:      "All objects / figures facing right-forward direction.",
      "back-left":  "All objects / figures facing away from the viewer, turned toward the left.",
      "back-right": "All objects / figures facing away from the viewer, turned toward the right.",
      mix:        null,
    };
    const directionText = directionMap[state.illustDirection] || null;
    const contentText = objects || categoryContentMap[state.illustCategory] || categoryContentMap.people;
    const colorTone = isPeople
      ? (colorTonePeople[state.illustColorTone] || colorTonePeople.soft)
      : (colorToneObject[state.illustColorTone] || colorToneObject.soft);
    const collectionLabel = isPeople ? "人物キャラクター" : "素材";

    return [
      `${theme}の${collectionLabel}アセットコレクション。純白の背景。8点の素材を均等なグリッドレイアウトで配置。各オブジェクトは独立して配置され、重なりなし、統一スケール、十分な余白。`,
      contentText,
      "",
      "Japanese stock illustration aesthetic.",
      isPeople ? "Flat vector people asset collection." : "Flat vector object asset collection.",
      "Pseudo-isometric view.",
      "Almost two-dimensional appearance.",
      "Minimal isometric hint.",
      "Extremely weak three-dimensionality.",
      isPeople ? "Extremely simplified human figures." : "Extremely simplified objects.",
      "Large flat color areas.",
      "Large uninterrupted color blocks.",
      "Paper-cut style vector shapes.",
      "Minimal contour variation.",
      "Minimal visual information.",
      "Geometric simplification.",
      "Clean vector shapes.",
      "Soft controlled curves.",
      "Smooth rounded silhouettes.",
      isPeople ? "Face without eyes, mouth, nose, eyebrows or facial details." : null,
      isPeople ? "Hair represented as a single simple shape." : null,
      isPeople ? "Hair colors limited to warm brown, chestnut brown, medium brown and light brown." : null,
      isPeople ? "Tall and slim proportions." : null,
      isPeople ? "Long legs relative to torso." : null,
      isPeople ? "Lightweight silhouette." : null,
      isPeople ? "Simplified hands and feet." : null,
      isPeople ? "Simplified clothing." : null,
      isPeople ? "No clothing folds." : null,
      isPeople ? "No wrinkles." : null,
      isPeople ? "No seams." : null,
      isPeople ? "No fabric texture." : null,
      "No decorative details.",
      colorTone,
      directionText,
      isPeople ? "Characters are isolated assets." : "Objects are isolated assets.",
      isPeople ? "Characters are the primary subject." : "Objects are the primary subject.",
      "Props are symbolic only.",
      "Minimal prop detail.",
      "No scene construction.",
      "No environmental storytelling.",
      "No realistic details.",
      "Pure flat appearance.",
      "No outlines.",
      "No strokes.",
      "No shadows.",
      "No gradients.",
      "No textures.",
      "No lighting effects.",
      "No reflections.",
      "No ambient occlusion.",
      "No realistic rendering.",
      "No volumetric modeling.",
      "No sculpted forms.",
      "Pure white background.",
      "",
      "Negative prompt:\nphotorealistic, realistic face, anime, manga, detailed eyes, detailed hands, realistic anatomy, muscular body, chibi, super deformed, mascot character, thick outlines, black stroke, shadows, gradient shading, texture, glossy material, 3D render, clay render, dramatic lighting, perspective view, interior scene, environmental storytelling, decorative elements, cluttered composition, excessive details, strong depth, strong three-dimensionality, volumetric shading",
      "",
      "8K",
    ].filter(v => v !== null).join("\n");
  }

  // フラットベクター
  const colorToneFlat = {
    soft:  "やわらかく明るいトーンで、親しみやすい色合い",
    muted: "落ち着いたミュートトーンで、洗練された色合い",
    vivid: "鮮やかでコントラストの強いビビッドな色合い",
  };

  const bgInstructions = {
    "solid": `${theme}のテーマカラーを使ったソリッドな背景色`,
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
      ? "それぞれ異なるポーズ・動作（くつろぐ、歩く、食べる、読む、楽しむなど）で表現します。"
      : "くつろぐ、歩く、食べる、読む、楽しむなどのポーズで表現します。";

    if (state.illustFigure === "include") {
      figureText = `環境とインタラクトするスタイリッシュな${countText}人間のフィギュアを含めます（${framing}で表現）。${multiNote}`;
    } else {
      figureText = `スタイリッシュな${countText}人間のフィギュアを中心に構成します（${framing}で表現）。${multiNote}周囲にテーマのオブジェクトを散りばめます。`;
    }
  }

  return [
    `${theme}をテーマにした、洗練されたフラットベクターの編集パターンイラストを作成してください。`,
    `テーマに関連する象徴的なオブジェクトやシーンを組み合わせたシームレスなアートコラージュとして構成します。`,
    "",
    (state.illustStyleRef || "").trim()
      ? `${(state.illustStyleRef).trim()}の様式で構成します。`
      : `北欧ポスターの様式で構成します。`,
    "",
    `スタイル：`,
    `超クリーンなフラットベクターシェイプ / 大胆に簡略化されたシルエット / 遊び心のあるジオメトリック構成 / 強いネガティブスペース / シャープな編集ミニマリズム / スクリーンプリント風のカラーブロッキング / 高コントラストのグラフィックデザイン / ダイナミックな非対称配置 / アウトラインなし / グラデーションなし / フォトリアリズムなし / クリーンなマットな外観 / ファッショナブルなコンテンポラリーポスターエステティック`,
    "",
    `構成：`,
    (state.illustElements || "").trim()
      ? `${(state.illustElements).trim()}を中心に構成します。関連するオブジェクトやライフスタイル要素とミックスし、プレミアムテキスタイルプリントのようにリズミカルにキャンバス全体へ散りばめます。中央集中型の構成・現実的なパースペクティブを避けます。`
      : `${theme}の4〜5つの象徴的な要素を、認識可能な抽象シルエットに強く簡略化して含めます。関連するオブジェクトやライフスタイル要素とミックスし、プレミアムテキスタイルプリントのようにリズミカルにキャンバス全体へ散りばめます。中央集中型の構成・現実的なパースペクティブを避けます。`,
    figureText,
    "",
    `カラーシステム：`,
    `${colorToneFlat[state.illustColorTone] || colorToneFlat.soft}。高度にコントロールされた3色以内に限定。`,
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
  textarea.placeholder = wfSectionsExamples[pageType] ?? "";
  updatePrompt();
}

function updateIllustVisibility(mode) {
  const isIllust    = mode === "illust";
  const isWireframe = mode === "wireframe";
  const isProposal  = mode === "proposal";
  const isUiReview  = mode === "ui-review";
  const isDesign    = mode === "design-direction";
  const isSiteDesign = mode === "sitedesign";
  const isSeo       = mode === "seo";
  const isTask       = mode === "task";
  const isCompetitor = mode === "competitor";
  const isResearch  = mode === "research";
  const isMinutes   = mode === "minutes";
  const isBrainstorm = mode === "brainstorm";
  const isCustom    = mode === "custom";
  const isEmailMode = mode === "email";
  const isConvert   = mode === "convert";

  // 専用フィールドがあるモード（標準フォームを隠す）
  const hasDedicated = isIllust || isWireframe || isProposal || isUiReview ||
                       isDesign || isResearch || isTask || isTask || isCompetitor || isSiteDesign || isSeo || isMinutes || isBrainstorm || isCustom || isEmailMode || isConvert;

  // 各専用fieldsetの表示制御
  document.querySelector("#fieldset-illust").style.display    = isIllust    ? "" : "none";
  document.querySelector("#fieldset-wireframe").style.display = isWireframe ? "" : "none";
  document.querySelector("#fieldset-proposal").style.display  = isProposal  ? "" : "none";
  document.querySelector("#fieldset-uireview").style.display  = isUiReview  ? "" : "none";
  document.querySelector("#fieldset-design").style.display    = isDesign    ? "" : "none";
  document.querySelector("#fieldset-sitedesign").style.display = isSiteDesign ? "" : "none";
  document.querySelector("#fieldset-seo").style.display        = isSeo        ? "" : "none";
  document.querySelector("#fieldset-task").style.display       = isTask       ? "" : "none";
  document.querySelector("#fieldset-competitor").style.display = isCompetitor ? "" : "none";
  document.querySelector("#fieldset-research").style.display  = isResearch  ? "" : "none";
  if (isResearch) {
    const theme = document.querySelector("#researchTheme");
    const purpose = document.querySelector("#researchPurpose");
    if (theme && purpose) theme.placeholder = researchThemePlaceholders[purpose.value] || "";
  }
  document.querySelector("#fieldset-minutes").style.display   = isMinutes   ? "" : "none";
  document.querySelector("#fieldset-brainstorm").style.display = isBrainstorm ? "" : "none";
  document.querySelector("#fieldset-email").style.display     = isEmailMode ? "" : "none";
  document.querySelector("#fieldset-custom").style.display    = isCustom    ? "" : "none";
  document.querySelector("#fieldset-convert").style.display   = isConvert   ? "" : "none";

  // 標準フォームの表示制御
  document.querySelector("#fieldset-extras").style.display  = hasDedicated ? "none" : "";
  document.querySelector("#optionsFieldset").style.display  = hasDedicated ? "none" : "";
  document.querySelector("#fieldset-finish").style.display  = hasDedicated ? "none" : "";

  // 補足欄: illust/minutes/customは非表示、他の専用モードは表示（下部に）
  const hideRequest = isIllust || isMinutes || isCustom || isTask || isCompetitor || isSiteDesign || isSeo || isBrainstorm || isWireframe || isDesign || isUiReview || isConvert;
  document.querySelector("#fieldset-request").style.display = hideRequest ? "none" : "";
  document.querySelector("#designOptionalGroup").style.display = isDesign ? "" : "none";
  document.querySelector("#researchOptionalGroup").style.display = isResearch ? "" : "none";

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

function updateIllustStylePanels(styleValue) {
  const val = styleValue || "flat";
  document.querySelector("#illustColorToneRow").style.display = val === "icon" ? "none" : "";
  document.querySelector("#illustFlatFields").style.display   = val === "flat"      ? "" : "none";
  document.querySelector("#illustIsoFields").style.display    = val === "isometric" ? "" : "none";
  document.querySelector("#illustIconFields").style.display   = val === "icon"      ? "" : "none";
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
    Object.entries(fields).map(([key, field]) => [key, field ? (field.type === "checkbox" ? field.checked : field.value.trim()) : ""]),
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
  if (state.mode === "convert") return buildConvertPrompt(state);
  if (state.mode === "proposal") return buildProposalPrompt(state);
  if (state.mode === "ui-review") return buildUiReviewPrompt(state);
  if (state.mode === "design-direction") return buildDesignPrompt(state);
  if (state.mode === "sitedesign") return buildSiteDesignPrompt(state);
  if (state.mode === "seo") return buildSeoPrompt(state);
  if (state.mode === "task") return buildTaskPrompt(state);
  if (state.mode === "competitor") return buildCompetitorPrompt(state);
  if (state.mode === "research") return buildResearchPrompt(state);
  if (state.mode === "minutes") return buildMinutesPrompt(state);
  if (state.mode === "brainstorm") return buildBrainstormPrompt(state);
  if (state.mode === "custom") return buildCustomPrompt(state);
  if (state.mode === "wireframe") return buildWireframePrompt(state);
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
  if (state.mode === "illust") {
    updateFramingVisibility(state.illustFigure);
    updateIllustStylePanels(state.illustStyle);
  }
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
  const currentMode = fields.mode.value;
  document.querySelectorAll("#promptForm input[type=text], #promptForm input[type=url], #promptForm textarea").forEach(el => {
    el.value = "";
  });
  applyState({ ...defaults, mode: currentMode });
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
  if (fields.mode.value === "wireframe") {
    fields.wfSections.placeholder = wfSectionsExamples[fields.wfPageType.value] ?? "";
  }
  renderOptions(fields.mode.value);
  updatePrompt();
});
document.querySelector("#copyBtn").addEventListener("click", copyPrompt);
document.querySelector("#shareBtn").addEventListener("click", shareLink);
document.querySelector("#resetBtn").addEventListener("click", resetForm);
fields.illustFigure.addEventListener("change", () => updateFramingVisibility(fields.illustFigure.value));
fields.illustStyle.addEventListener("change", () => {
  updateIllustStylePanels(fields.illustStyle.value);
  updatePrompt();
});

fields.illustIconStyle.addEventListener("change", () => {
  updatePrompt();
});
fields.wfPageType.addEventListener("change", () => updateWfSectionsPlaceholder(fields.wfPageType.value));

const researchThemePlaceholders = {
  "競合サイトの比較": "例：美容クリニックの競合サイト、工務店の採用ページ",
  "新規事業・サービスの検討": "例：類似サービスのWebサイト、国内外の参入事例サイト",
  "提案・企画書づくり": "例：クライアント業界の主要Webサイト、参考にしたいデザイン事例",
  "デザイン・UI研究": "例：予約サイトの導線設計、ECサイトのチェックアウトUI",
  "市場・業界の把握": "例：国内の工務店サイト傾向、化粧品ブランドのLP",
};

fields.researchPurpose.addEventListener("change", () => {
  const theme = document.querySelector("#researchTheme");
  if (theme) theme.placeholder = researchThemePlaceholders[fields.researchPurpose.value] || "";
  updatePrompt();
});

fields.seoType.addEventListener("change", () => {
  const isExisting = fields.seoType.value === "existing";
  document.querySelector("#seoUrlGroup").style.display = isExisting ? "" : "none";
  updatePrompt();
});

applyState(loadFromUrl());

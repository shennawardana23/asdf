const en = [
  {
    text: "Guide",
    collapsed: false,
    items: [
      { text: "What is asdf?", link: "/guide/introduction" },
      { text: "Getting Started", link: "/guide/getting-started" },
    ],
  },
  {
    text: "Usage",
    collapsed: false,
    items: [
      { text: "Core", link: "/manage/core" },
      { text: "Plugins", link: "/manage/plugins" },
      { text: "Versions", link: "/manage/versions" },
    ],
  },
  {
    text: "Reference",
    collapsed: false,
    items: [
      { text: "Configuration", link: "/manage/configuration" },
      { text: "All Commands", link: "/manage/commands" },
      {
        text: "Plugin Shortname Index",
        link: "https://github.com/asdf-vm/asdf-plugins",
      },
    ],
  },
  {
    text: "Plugins",
    collapsed: true,
    items: [
      {
        text: "Authors",
        items: [
          { text: "Create a Plugin", link: "/plugins/create" },
          {
            text: "GitHub Plugin Template",
            link: "https://github.com/asdf-vm/asdf-plugin-template",
          },
        ],
      },
      {
        text: "First Party Plugins",
        items: [
          {
            text: "Elixir",
            link: "https://github.com/asdf-vm/asdf-elixir",
          },
          {
            text: "Erlang",
            link: "https://github.com/asdf-vm/asdf-erlang",
          },
          {
            text: "Node.js",
            link: "https://github.com/asdf-vm/asdf-nodejs",
          },
          {
            text: "Ruby",
            link: "https://github.com/asdf-vm/asdf-ruby",
          },
        ],
      },
      {
        text: "Community Plugins",
        items: [
          {
            text: "asdf-community",
            link: "https://github.com/asdf-community",
          },
          {
            text: "GitHub Topics Search",
            link: "https://github.com/topics/asdf-plugin",
          },
        ],
      },
    ],
  },
  {
    text: "Questions",
    collapsed: true,
    items: [
      { text: "FAQ", link: "/more/faq" },
      {
        text: "GitHub Issues",
        link: "https://github.com/asdf-vm/asdf/issues",
      },
      {
        text: "Stack Overflow Tag",
        link: "https://stackoverflow.com/questions/tagged/asdf-vm",
      },
    ],
  },
  {
    text: "Contribute",
    collapsed: true,
    items: [
      { text: "Core asdf", link: "/contribute/core" },
      { text: "Documentation", link: "/contribute/documentation" },
      {
        text: "First-Party Plugins",
        link: "/contribute/first-party-plugins",
      },
      { text: "GitHub Actions", link: "/contribute/github-actions" },
    ],
  },
  { text: "Community Projects", link: "/more/community-projects" },
  { text: "Thanks", link: "/more/thanks" },
];

const ja_jp = [
  {
    text: "ガイド",
    collapsed: false,
    items: [
      { text: "asdfってなに?", link: "/ja-jp/guide/introduction" },
      { text: "はじめよう", link: "/ja-jp/guide/getting-started" },
    ],
  },
  {
    text: "使い方",
    collapsed: false,
    items: [
      { text: "コア", link: "/ja-jp/manage/core" },
      { text: "プラグイン", link: "/ja-jp/manage/plugins" },
      { text: "バージョン", link: "/ja-jp/manage/versions" },
    ],
  },
  {
    text: "リファレンス",
    collapsed: false,
    items: [
      { text: "構成設定", link: "/ja-jp/manage/configuration" },
      { text: "すべてのコマンド", link: "/ja-jp/manage/commands" },
      {
        text: "プラグインショートネームの一覧",
        link: "https://github.com/asdf-vm/asdf-plugins",
      },
    ],
  },
  {
    text: "プラグイン",
    collapsed: true,
    items: [
      {
        text: "開発者向け",
        items: [
          { text: "プラグインの作成", link: "/ja-jp/plugins/create" },
          {
            text: "GitHubプラグインテンプレート",
            link: "https://github.com/asdf-vm/asdf-plugin-template",
          },
        ],
      },
      {
        text: "公式プラグイン",
        items: [
          {
            text: "Elixir",
            link: "https://github.com/asdf-vm/asdf-elixir",
          },
          {
            text: "Erlang",
            link: "https://github.com/asdf-vm/asdf-erlang",
          },
          {
            text: "Node.js",
            link: "https://github.com/asdf-vm/asdf-nodejs",
          },
          {
            text: "Ruby",
            link: "https://github.com/asdf-vm/asdf-ruby",
          },
        ],
      },
      {
        text: "コミュニティプラグイン",
        items: [
          {
            text: "asdf-community",
            link: "https://github.com/asdf-community",
          },
          {
            text: "GitHubトピック検索",
            link: "https://github.com/topics/asdf-plugin",
          },
        ],
      },
    ],
  },
  {
    text: "困ったときは",
    collapsed: true,
    items: [
      { text: "FAQ", link: "/ja-jp/more/faq" },
      {
        text: "GitHub イシュー",
        link: "https://github.com/asdf-vm/asdf/issues",
      },
      {
        text: "Stack Overflow タグ",
        link: "https://stackoverflow.com/questions/tagged/asdf-vm",
      },
    ],
  },
  {
    text: "コントリビューション",
    collapsed: true,
    items: [
      { text: "asdf コア", link: "/ja-jp/contribute/core" },
      { text: "ドキュメント", link: "/ja-jp/contribute/documentation" },
      {
        text: "公式プラグイン",
        link: "/ja-jp/contribute/first-party-plugins",
      },
      { text: "GitHub Actions", link: "/ja-jp/contribute/github-actions" },
    ],
  },
  { text: "コミュニティプロジェクト", link: "/ja-jp/more/community-projects" },
  { text: "謝辞", link: "/ja-jp/more/thanks" },
];

export { en, ja_jp };


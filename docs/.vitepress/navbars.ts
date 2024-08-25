import fs from "fs";
import path from "path";
import process from "process";

export const getVersion = () => {
  const versionFilepath = path.join(__dirname, "../../version.txt");
  try {
    const version = fs.readFileSync(versionFilepath, "utf8").trim();
    console.log(`Found version ${version} from ${versionFilepath}`);
    return version;
  } catch (error) {
    console.error(`Failed to find version from file ${versionFilepath}`, error);
    process.exit(1);
  }
};

const en = [
  { text: "Guide", link: "/guide/getting-started" },
  {
    text: "Reference",
    link: "/manage/configuration",
  },
  {
    text: getVersion(),
    items: [
      {
        text: "Changelog",
        link: "https://github.com/asdf-vm/asdf/blob/master/CHANGELOG.md",
      },
      { text: "Contribute", link: "/contribute/core" },
    ],
  },
];

const ja_jp = [
  { text: "ガイド", link: "/ja-jp/guide/getting-started" },
  {
    text: "リファレンス",
    link: "/ja-jp/manage/configuration",
  },
  {
    text: getVersion(),
    items: [
      {
        text: "変更履歴",
        link: "https://github.com/asdf-vm/asdf/blob/master/CHANGELOG.md",
      },
      { text: "コントリビューション", link: "/ja-jp/contribute/core" },
    ],
  },
];

export { en, ja_jp };

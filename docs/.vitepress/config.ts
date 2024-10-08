import { defineConfig } from "vitepress";
import * as navbars from "./navbars";
import * as sidebars from "./sidebars";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "asdf",
  description: "Manage multiple runtime versions with a single CLI tool",
  lastUpdated: true,
  locales: {
    root: {
      label: "English",
      lang: "en-US",
      themeConfig: {
        nav: navbars.en,
        sidebar: sidebars.en,
      },
    },
    "ja-jp": {
      label: "日本語",
      lang: "ja-jp",
      themeConfig: {
        nav: navbars.ja_jp,
        sidebar: sidebars.ja_jp,
      },
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
  },
});

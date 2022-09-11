import type { EnhanceAppContext } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import { useMediumZoomProvider } from "./components/composables";
import IconExternalLink from "./components/icons/IconExternalLink.vue";
import ReloadPrompt from "./components/ReloadPrompt.vue";
import "./styles/index.scss";
import "uno.css"

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "layout-bottom": () => h(ReloadPrompt),
    });
  },
  enhanceApp({ app, router }: EnhanceAppContext) {
    useMediumZoomProvider(app, router);
    app.component('IconExternalLink', IconExternalLink)
  },
};

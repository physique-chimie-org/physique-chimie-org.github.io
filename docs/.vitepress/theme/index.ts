import type { EnhanceAppContext } from 'vitepress'
import DefaultTheme from "vitepress/theme";
import { h } from 'vue'
import { useMediumZoomProvider } from '../components/composables'
import ReloadPrompt from '../components/ReloadPrompt.vue'

import "./styles/index.scss";

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(ReloadPrompt),
    })
  },
  enhanceApp({ app, router }: EnhanceAppContext) {
    useMediumZoomProvider(app, router)
  },
};

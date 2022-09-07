import type { EnhanceAppContext } from 'vitepress'
import { useMediumZoomProvider } from '../components/composables'

import DefaultTheme from "vitepress/theme";

import "./styles/index.scss";

export default {
  ...DefaultTheme,
  enhanceApp({ app, router }: EnhanceAppContext) {
    useMediumZoomProvider(app, router)
  },
};

// https://vitepress.dev/guide/custom-theme
import Documate from '@documate/vue';
import '@documate/vue/dist/style.css';
import mediumZoom from 'medium-zoom';
import { useRoute } from 'vitepress';
import Theme from 'vitepress/theme';
import { h, nextTick, onMounted, watch } from 'vue';
import ReloadPrompt from './components/ReloadPrompt.vue';
import './style.css';

export default {
  extends: Theme,
  setup() {
    const route = useRoute();
    const initZoom = () => {
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'nav-bar-content-before': () => h(Documate, {
        endpoint: 'https://n88gzkwb84.us.aircode.run/ask',
        buttonLabel: 'Une question ?',
        placeholder: 'Poser une question à classBot_',
        predefinedQuestions: [
          "Quelle est la composition d'un atome ?",
          "Comment justifier qu'une loi de vitesse est d'ordre 1 ?",
        ],
      }),
      'layout-bottom': () => h(ReloadPrompt)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}

// https://vitepress.dev/guide/custom-theme
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
      'layout-bottom': () => h(ReloadPrompt)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}

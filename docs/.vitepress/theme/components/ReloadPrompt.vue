<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';

const offlineReady = ref(false)
const needRefresh = ref(false)

let updateServiceWorker: (() => Promise<void>) | undefined

const onOfflineReady = () => {
  offlineReady.value = true
}
const onNeedRefresh = () => {
  needRefresh.value = true
}
const close = async () => {
  offlineReady.value = false
  needRefresh.value = false
}

onBeforeMount(async () => {
  const { registerSW } = await import('virtual:pwa-register')
  updateServiceWorker = registerSW({
    immediate: true,
    onOfflineReady,
    onNeedRefresh,
    onRegistered() {

      console.info('Service Worker registered')
    },
    onRegisterError(e) {
      console.error('Service Worker registration error!', e)
    },
  })
})
</script>

<template>
  <template v-if="offlineReady || needRefresh">
    <div
      class="pwa-toast"
      role="alertdialog"
      aria-labelledby="pwa-message"
    >
      <div id="pwa-message" class="mb-3">
        {{ offlineReady ? 'App prête à fonctionner hors ligne' : 'Nouveau contenu disponible, cliquer sur "Recharger" pour mettre à jour' }}
      </div>
      <button
        v-if="needRefresh"
        type="button"
        class="pwa-refresh"
        @click="updateServiceWorker?.()"
      >
      Recharger
      </button>
      <button
        type="button"
        class="pwa-cancel"
        @click="close"
      >
        Fermer
      </button>
    </div>
  </template>
</template>

<style>
    .pwa-toast {
        position: fixed;
        right: 0;
        bottom: 0;
        margin: 16px;
        padding: 12px;
        border: 1px solid var(--vp-button-brand-hover-bg);
        border-radius: 4px;
        z-index: 100;
        text-align: left;
        background-color: var(--vp-c-bg-soft);
    }
    .pwa-toast #pwa-message {
        margin-bottom: 8px;
    }
    .pwa-toast button {
        border: 1px solid var(--vp-button-brand-border);
        background-color: var(--vp-button-brand-bg);
        outline: none;
        margin-right: 5px;
        border-radius: 2px;
        padding: 3px 10px;
    }
</style>
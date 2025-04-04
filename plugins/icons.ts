import { defineNuxtPlugin } from '#app';
import * as lucideVue from 'lucide-vue-next';

export default defineNuxtPlugin((nuxtApp) => {
  // Register all lucide icons globally
  for (const [key, component] of Object.entries(lucideVue)) {
    nuxtApp.vueApp.component(key, component as any);
  }
});

import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MenuIcon,
  XIcon,
  ExternalLinkIcon,
  PhoneIcon,
  MapPinIcon,
  TwitterIcon,
  SendIcon,
} from 'lucide-vue-next';

export default defineNuxtPlugin((nuxtApp) => {
  // Register all lucide icons globally
  nuxtApp.vueApp.component('GithubIcon', GithubIcon);
  nuxtApp.vueApp.component('LinkedinIcon', LinkedinIcon);
  nuxtApp.vueApp.component('MailIcon', MailIcon);
  nuxtApp.vueApp.component('MenuIcon', MenuIcon);
  nuxtApp.vueApp.component('XIcon', XIcon);
  nuxtApp.vueApp.component('PhoneIcon', PhoneIcon);
  nuxtApp.vueApp.component('MapPinIcon', MapPinIcon);
  nuxtApp.vueApp.component('TwitterIcon', TwitterIcon);
  nuxtApp.vueApp.component('SendIcon', SendIcon);
  nuxtApp.vueApp.component('ExternalLinkIcon', ExternalLinkIcon);
});

import DefaultLayout from '~/layouts/Default.vue'

import BootstrapVue from 'bootstrap-vue'
import './assets/styles/main.scss'

import checkIfMobile from './mixins/checkIfMobile'

import VueYouTubeEmbed from 'vue-youtube-embed'

export default function (Vue, { router, head, isClient }) {
  Vue.use(BootstrapVue)
  Vue.use(VueYouTubeEmbed)
  Vue.component('Layout', DefaultLayout)
  Vue.mixin(checkIfMobile)
}

import './assets/main.css'

import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/utils/colors.scss'
import 'vue3-toastify/dist/index.css';

const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
    components,
    directives
})

const app = createApp(App)

app.use(vuetify);

app.use(router);

app.use(Vue3Toastify, {
    autoClose: 3000,
} as ToastContainerOptions)

app.mount('#app');

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './index.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'

import { fa } from "vuetify/iconsets/fa";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";

import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";

const vuetify = createVuetify({
    components,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            fa,
            mdi,
        }
    },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')

import {createApp} from 'vue'
import App from './App.vue'

import VuejsSdk from '@roman86/vuejs-sdk'

const app = createApp(App)

app.use(VuejsSdk)

app.mount('#app')



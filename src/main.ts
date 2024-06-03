// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'
// import { directives } from '@/directives'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(directives)
app.use(ElementPlus)

app.mount('#app')

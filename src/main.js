import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style/all.scss'
import LoadingItem from '@/components/LoadingItem.vue'

const app = createApp(App)

app.use(router)
app.component('LoadingItem', LoadingItem)

app.mount('#app')

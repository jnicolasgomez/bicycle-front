import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'
import store from './store'

const gauthClientId = process.env.VUE_APP_GOOGLE_AUTH_CLIENT_ID;
const app = createApp(App).use(store).use(router);
app.use(vue3GoogleLogin, {
    clientId: gauthClientId
})
app.mount('#app')

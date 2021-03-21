import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import authStore from './store/auth'
import axios from 'axios'

axios.defaults.withCredentials = true

/* Bootstrap */
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

authStore.dispatch('user')
    .then(() => {
        createApp(App).use(store).use(router).mount('#app')
    })
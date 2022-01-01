import { createApp } from 'vue'
import App from '@/App.vue'
import '@/index.css'
import router from '@/router'
import axios from 'redaxios';

const init = async () => {
    createApp(App)
    .use(router)
    .provide('index', await axios.get('/blog/posts/index.json').then(reponse => { return reponse.data }))
    .mount('#app')
}

init()
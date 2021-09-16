import { createApp } from "@vue/runtime-dom";
import App from './App.vue'
import Main from './components/Main.vue'
import Packages from './components/Packages.vue'
import { createRouter, createWebHistory } from 'vue-router'
const app = createApp(App)

const router = createRouter({
    //i forgot ()
    history: createWebHistory(),
    routes: [

        {
            path: '/',
            component: Main,
        },
        {
            path: '/packages',
            component: Packages
        }
    ]


})
app.use(router)
app.mount('#app')
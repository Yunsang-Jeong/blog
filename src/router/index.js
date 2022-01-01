import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'

import About from '@/pages/About.vue'
import PostView from '@/pages/PostView.vue'
import PostList from '@/pages/PostList.vue'


const routes = [
    { 
        path: '/blog/', 
        component: About, 
        meta: { is_menu: false, title: "About" } 
    },
    { 
        path: '/blog/about', 
        component: About, 
        meta: { is_menu: true, title: "About" } 
    },
    { 
        path: '/blog/posts/', 
        component: PostList, 
        meta: { is_menu: true, title: "Posts" } 
    },
    { 
        path: '/blog/posts/:id', 
        component: PostView, 
        meta: { is_menu: false }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
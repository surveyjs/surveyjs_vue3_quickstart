import { createRouter, createWebHistory } from 'vue-router'

import Home from "../components/Home.vue"
import Survey from "../components/Survey.vue"
import Creator from "../components/Creator.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home },
    { path: "/survey", component: Survey },
    { path: "/creator", component: Creator },
  ]
})

export default router

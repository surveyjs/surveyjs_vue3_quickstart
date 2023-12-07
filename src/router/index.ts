import { createRouter, createWebHistory } from 'vue-router'

import Home from "../components/Home.vue"
import Survey from "../components/Survey.vue"
import Creator from "../components/Creator.vue"
import ExportToPDF from "../components/ExportToPDF.vue"
import Analytics from "../components/Analytics.vue"
import AnalyticsTabulator from "../components/AnalyticsTabulator.vue"
import AnalyticsDatatables from "../components/AnalyticsDatatables.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home },
    { path: "/survey", component: Survey },
    { path: "/creator", component: Creator },
    { path: "/exportpdf", component: ExportToPDF },
    { path: "/analytics", component: Analytics },
    { path: "/analyticstabulator", component: AnalyticsTabulator },
    { path: "/analyticsdatatables", component: AnalyticsDatatables },
  ]
})

export default router

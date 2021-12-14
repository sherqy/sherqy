import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/search',
      name: 'search_page',
      component: () => import('./components/search.vue')
    },
    {
      path: '/map',
      name: 'map_page',
      component: () => import('./components/map.vue')
    },
  ]
})

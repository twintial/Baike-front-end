import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import VideoPage from '@/components/VideoPage.vue'
import SearchResult from '@/components/SearchResult.vue'
import SearchResultcopy from '@/components/SearchResultcopy.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/video',
      name: 'interactiveVideo',
      component: VideoPage
    },
    {
      path: '/searchresult',
      name: 'SearchResult',
      component: SearchResult
    },
    {
      path: '/searchresult2',
      name: 'SearchResultcopy',
      component: SearchResultcopy
    },
  ]
})

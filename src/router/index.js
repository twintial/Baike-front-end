import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import VideoPage from '@/components/VideoPage.vue'
import UploadPage from '@/components/SubmitPost.vue'
import ErrorPage from '@/components/404.vue'
import test from '@/test.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/test',
      component: test
    },
    // 错误页面重定向
    {
      path: '*',
      redirect: '/error'
    },
    {
      path: '/error',
      name: '404',
      component: ErrorPage
    },
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
      path: '/upload',
      name: 'uploadInteractiveVideo',
      component: UploadPage
    }
  ]
})

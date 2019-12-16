import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import EditPage from '@/components/EditInterVideo.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import VideoPage from '@/components/VideoPage.vue'
import ErrorPage from '@/components/404.vue'
import SearchResult from '@/components/SearchResult.vue'
import admin from '@/components/Admin.vue'
import adminLogin from '@/components/AdminLogin.vue'
import UploadPage from '@/components/profile/SubmitPost.vue'

import MyAccount from '@/components/profile/ProfileMyInfor'
import othersAccount from '@/components/otherprofile/ProfileOMyInfor'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
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
    // 主页
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    // 登陆
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    // 注册
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    // 视频页
    {
      path: '/video',
      name: 'interactiveVideo',
      component: VideoPage
    },
    // 上传视频页面
    {
      path: '/upload',
      name: 'uploadInteractiveVideo',
      component: UploadPage
    },
    // 编辑页面
    {
      path: '/edit',
      name: 'editPage',
      component: EditPage
    },
    // 个人信息
    {
      path: '/myaccount',
      name: 'myAccount',
      component: MyAccount
    },
    // 他人信息页
    {
      path: '/othersaccount',
      name: 'othersAccount',
      component: othersAccount
    },
    {
      path: '/searchresult',
      name: 'SearchResult',
      component: SearchResult
    },
    // 管理员
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/adminLogin',
      name: 'adminLogin',
      component: adminLogin
    }
  ]
})

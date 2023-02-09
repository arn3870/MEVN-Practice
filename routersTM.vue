import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import ForgotPassword from '@/components/ForgotPassword'
import ResetPassword from '@/components/ResetPassword'
import Products from '@/components/Products'
import Create from '@/components/Create'
import Form from '@/components/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'auth-login',
      component: Login,
      meta: {
          layout: 'blank',
           redirectIfLoggedIn: true,
  
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
          layout: 'content',
           redirectIfLoggedIn: true,
           
        }
    },
    {
      path: '/forgotpassword',
      name: 'ForgotPassword',
      component: ForgotPassword ,
      meta: {
          layout: 'blank',
           redirectIfLoggedIn: true,
        }
    },
    {
      path: '/reset',
      name: 'ResetPassword',
      component: ResetPassword ,
      meta: {
          layout: 'blank',
           redirectIfLoggedIn: true,
        }
    },
    {
      path: '/products',
      name: 'Products',
      component: Products ,
      meta: {
          layout: 'content',
           redirectIfLoggedIn: true,
        }
    }, 
    {
      path: '/products/create',
      name: 'Create',
      component: Create ,
      meta: {
          layout: 'content',
           redirectIfLoggedIn: true,
        }
    },
    {
      path: '/form',
      name: 'Form',
      component: Form ,
      meta: {
          layout: 'content',
           redirectIfLoggedIn: true,
        }
    },
  ]
})
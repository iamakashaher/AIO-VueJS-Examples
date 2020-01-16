import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import blog from '@/components/blog'
import services from '@/components/services'
import contact from '@/components/contact'
import details from '@/components/details'
import api from '@/components/api'
import computed from '@/components/computed'
import customevents from '@/components/customevents'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    },
    {
      path: '/services',
      name: 'services',
      component: services
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/api',
      name: 'Api',
      component: api
    },
    {
      path: '/computed',
      name: 'Computed',
      component: computed
    },
    {
      path: '/details/:Pid',
      name: 'details',
      component: details
    }
  ]
})

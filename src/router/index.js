import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/pages/HomePage'
import StandardPage from '@/pages/StandardPage'
import GenericContainer from '@/pages/GenericContainer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: '/admin-vue/',
  routes: [{
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/:initlocale',
      name: 'landing',
      component: HomePage
    },
    {
      path: '/:locale/buy',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/:locale/p/:pageName',
      name: 'standardPageDetails',
      component: StandardPage
    },
    // {
    //   path: '/:locale',
    //   // name: 'site-page',
    //   component: GenericContainer,
    //   redirect: { name: 'homePage' },
    //   children: [{
    //       path: '',
    //       name: 'homePage',
    //       component: HomePage,
    //     },
    //     {
    //       path: '/p',
    //       name: 'standardPage',
    //       component: GenericContainer,
    //       children: [{
    //         name: 'standardPageDetails',
    //         path: '/:pageName',
    //         component: HomePage
    //       }]
    //     }
    //   ]
    // }
  ]
})

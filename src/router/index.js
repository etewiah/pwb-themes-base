import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/pages/HomePage'
import BuyPage from '@/pages/BuyPage'
import RentPage from '@/pages/RentPage'
import StandardPage from '@/pages/StandardPage'
import ContactUsPage from '@/pages/ContactUsPage'
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
      component: BuyPage
    },
    {
      path: '/:locale/rent',
      component: RentPage
    },
    {
      path: '/:locale/contact-us',
      // name: 'HelloWorld',
      component: ContactUsPage
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
    //   // redirect: { name: 'homePage' },
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

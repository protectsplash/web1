import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import test from './views/test.vue'
import nav from './components/nav/nav.vue'
import footer from './components/footer/footer.vue'
import WokrsDetail from './views/WokrsDetail.vue'

Vue.use(Router)
/* eslint-disable */
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        header: nav,
        footer: footer
      }
    },
    {
      path: '/works',
      name: 'home',
      components: {
        default: Home,
        header: nav,
        footer: footer
      }
    },
    {
      path: '/works/:id',
      name: 'WokrsDetail',
      components: {
        header: nav,
        footer: footer,
        default: WokrsDetail
      }
    },
    {
      path: '/about',
      name: 'about',
      components: {
        default: About,
        header: nav,
        footer: footer
      }
    },
    {
      path: '/contact',
      name: 'contact',
      components: {
        default: Contact,
        header: nav,
        footer: footer
      }
    },
    {
      path: '/test',
      name: 'test',
      components: {
        default: test,
        header: nav,
        footer: footer
      }
    },
  ]
})

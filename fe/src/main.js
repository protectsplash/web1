import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate from 'vee-validate'
 Vue.use(VeeValidate)
/* eslint-disable */
import 'animate.css'

import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import VueApollo from 'vue-apollo'
const { createUploadLink } = require('apollo-upload-client')
Vue.use(VueApollo)

import VueAgile from 'vue-agile'
Vue.use(VueAgile)

Vue.config.productionTip = false

//token 인증
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    localStorage.getItem('USER_TOKEN') ? next() : next('/login')
  } else {
    next()
  }
})
//라우터 로딩 페이지
router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start()
  }
  next()
})
router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

const httpLink = createUploadLink({
  uri: 'http://localhost:4000'
})
const httpLinkAuth = setContext(async (_, {
  headers
}) => {
  // get the authentication token from localstorage if it exists
  const token = await localStorage.getItem('USER_TOKEN')
  // await localStorage.clear()
  // await localStorage.removeItem('USER_TOKEN')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const apolloClient = new ApolloClient({
  link: httpLinkAuth.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true,
  query: {
    fetchPolicy: 'no-cache'
  }
})
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
})

new Vue({
  router,
  store,
  provide: apolloProvider.provide(),
  render: h => h(App)
}).$mount('#app')

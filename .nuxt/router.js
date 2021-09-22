import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0dfd2132 = () => interopDefault(import('..\\pages\\dadosLocation.vue' /* webpackChunkName: "pages/dadosLocation" */))
const _2de97b1e = () => interopDefault(import('..\\pages\\dadosScreen.vue' /* webpackChunkName: "pages/dadosScreen" */))
const _02e82340 = () => interopDefault(import('..\\pages\\ficha.vue' /* webpackChunkName: "pages/ficha" */))
const _186a2c8e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/dadosLocation",
    component: _0dfd2132,
    name: "dadosLocation"
  }, {
    path: "/dadosScreen",
    component: _2de97b1e,
    name: "dadosScreen"
  }, {
    path: "/ficha",
    component: _02e82340,
    name: "ficha"
  }, {
    path: "/",
    component: _186a2c8e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

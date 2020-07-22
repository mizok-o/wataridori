import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7c8ca640 = () => interopDefault(import('../pages/article001.vue' /* webpackChunkName: "pages/article001" */))
const _7c70773e = () => interopDefault(import('../pages/article002.vue' /* webpackChunkName: "pages/article002" */))
const _6288b7fd = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/article001",
    component: _7c8ca640,
    name: "article001"
  }, {
    path: "/article002",
    component: _7c70773e,
    name: "article002"
  }, {
    path: "/",
    component: _6288b7fd,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _39aca969 = () => interopDefault(import('../pages/form.vue' /* webpackChunkName: "pages/form" */))
const _6288b7fd = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _7f03905c = () => interopDefault(import('../pages/_article.vue' /* webpackChunkName: "pages/_article" */))

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
    path: "/form",
    component: _39aca969,
    name: "form"
  }, {
    path: "/",
    component: _6288b7fd,
    name: "index"
  }, {
    path: "/:article",
    component: _7f03905c,
    name: "article"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

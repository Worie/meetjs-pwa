import Vue from 'vue'
import VueRouter, { Location, Route, RouteConfig } from 'vue-router'
// import { makeHot, reload } from './util/hot-reload'
import pHome from './components/pages/p-home';

Vue.use(VueRouter)

export const createRoutes: () => RouteConfig[] = () => [
  {
    path: '/',
    component: pHome
  },
]

export const createRouter = () => new VueRouter({ mode: 'history', routes: createRoutes() })

import { map, filter } from "rxjs/operators"
import NotFound from "../NotFound.svelte"

import browserPlugin from "router5-plugin-browser"
import createRouter from "router5"

import createObservables from "rxjs-router5"
import { componentMap } from "./component"

const router = createRouter(
  [
    { name: "home", path: "/home" },
    { name: "test", path: "/home/:id" },
    { name: "about", path: "/about" },
    { name: "counter", path: "/counter" },
    { name: "notfound", path: "/404" }
  ],
  { defaultRoute: "notfound" }
)
router.usePlugin(
  browserPlugin({
    useHash: true,
    preserveHash: false
  })
)
router.start()
const observables = createObservables(router)

export const route$ = observables.route$.pipe(
  filter(route => route && route !== null)
)

export const component$ = observables.route$.pipe(
  filter(route => route && route !== null),
  map(route => {
    const currentComponent = componentMap[route.path]

    return currentComponent ? currentComponent : NotFound
  })
)
export const routeNode = observables.routeNode
export const transitionError$ = observables.transitionError$
export const transitionRoute$ = observables.transitionRoute$

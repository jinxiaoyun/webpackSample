import Greeter from "../Greeter"
import antd from "./antd"
import apple from "./apple"

export default [
  {
    path: "/",
    component: Greeter,
    indexRoute: {
      onEnter(ns, replace) {
        replace("/antd")
      }
    },
    childRoutes: [antd, apple]
  }
]

/* @refresh reload */
import { render } from "solid-js/web"

//Bootstrap libraries
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

import "./index.css"
import App from "./App"
import { Router, Route } from "@solidjs/router"
import Home from "./views/Home"
import _404 from "./views/_404"
import Cart from "./views/Cart"
import Details from "./views/Details"

const root = document.getElementById("root")

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  )
}

render(
  () => (
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/products/:id" component={Details} />
      <Route path="/*404" component={_404} />
    </Router>
  ),
  root
)

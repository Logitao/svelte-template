import Home from "../Home.svelte"
import About from "../About.svelte"
import Counter from "../Counter.svelte"
import NotFound from "../NotFound.svelte"
import Form from "../Form.svelte"

export const componentMap = {
  "/home": Home,
  "/about": About,
  "/counter": Counter,
  "/404": NotFound,
  "/form": Form
}

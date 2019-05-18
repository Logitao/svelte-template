<script>
  import { onMount } from "svelte";

  import { counter } from "./stores/counter.js";
  import {
    route$,
    routeNode,
    transitionError$,
    transitionRoute$,
    component$
  } from "./router/router.js";
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello world!</h1>
<a href="#/home">Home</a>
<a href="#/about">About</a>
<a href="#/counter">Counter</a>
<a href="#/form">Form</a>

<h3>{$counter}</h3>

<svelte:component this={$component$} match={$route$} />

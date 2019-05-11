<script>
  import { counter } from "./stores/counter.js";

  function increment() {
    counter.set($counter + 1);
  }
  function decrement() {
    counter.set($counter - 1);
  }

  export let match;
</script>

<style>

</style>

<button on:click={increment}>+</button>
<button on:click={decrement}>-</button>

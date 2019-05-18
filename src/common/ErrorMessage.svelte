<script>
  export let from;
  export let errors;
</script>

{#if errors[from]}
  <span>{errors[from]}</span>
{/if}

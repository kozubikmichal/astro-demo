<script>
  export let text = "";

  let isMark = false;

  const onClick = () => {
    isMark = !isMark;
  };

  $: element = isMark ? "mark" : "span";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<h2 on:click={onClick}>
  <svelte:element this={element}>
    {text}
    <span>
      {#if isMark}
        🙉
      {:else}
        🙈
      {/if}
    </span>
  </svelte:element>
</h2>

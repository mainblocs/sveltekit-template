<script>
    export let invert = false;
    export let className = '';
    export let href = "";
    export let handleClick = () => {};
    export let disabled = false;
    export let ariaLebel = "";
    export let onMouseEnter = () => {};
    export let onMouseLeave = () => {};
    
    let combinedClass = `${className} inline-flex justify-center items-center rounded-full px-4 py-1.5 text-sm font-semibold transition ${invert ? 'bg-white text-neutral-950 hover:bg-neutral-200' : 'bg-neutral-950 text-white hover:bg-neutral-800'}`;
    
  </script>
  
  {#if href.length > 0}
    <a on:mouseleave={onMouseLeave} on:mouseenter={onMouseEnter} href={href} class={combinedClass} on:click={handleClick} aria-label={ariaLebel}>
        <slot/>
    </a>
  {:else}
    <button on:mouseleave={onMouseLeave} on:mouseenter={onMouseEnter}  aria-label={ariaLebel} class={combinedClass} disabled={disabled} on:click={handleClick}>
        <slot/>
    </button>
  {/if}
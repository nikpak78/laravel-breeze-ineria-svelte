<script>
  import { inertia } from '@inertiajs/inertia-svelte'
  let classes;
  
    export let active;
    $: {
        classes = active
            ? "inline-flex items-center px-1 pt-1 bg-black border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition  duration-150 ease-in-out"
            : "inline-flex items-center px-1 pt-1  border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out";
    }
  export let links = []
</script>
{#if links.length > 3}
<nav aria-label="...">
    <ul class="mt-6 -mb-1 flex flex-wrap">
        {#each links as link, key (key)}
            {#if link.url === null}
              <li class="page-item">
                  <a class=" hidden" href="#!" tabindex="-1">{@html link.label}</a>
              </li>
            {:else}
              <li class="px-2">
                  <a class="page-link " use:inertia href="{link.url}">
                    <p class={classes}  >{@html link.label}</p>
                  </a>
              </li>
            {/if}
        {/each}
    </ul>
</nav>
{/if}
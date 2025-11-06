<!-- src/components/Breadcrumb.svelte -->
<script lang="ts">
  export let items: Array<{ label: string; href?: string }>;
</script>

<nav class="breadcrumb mb-4" aria-label="Breadcrumb">
  <ol class="flex items-center space-x-2 text-sm">
    {#each items as item, index}
      <li class="flex items-center">
        {#if index > 0}
          <svg class="w-4 h-4 mx-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        {/if}
        
        {#if item.href}
          <a
            href={item.href}
            class="text-gray-500 hover:text-primary-600 transition-colors"
          >
            {item.label}
          </a>
        {:else}
          <span class="text-gray-900 font-medium">
            {item.label}
          </span>
        {/if}
      </li>
    {/each}
  </ol>
</nav>
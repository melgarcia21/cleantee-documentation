<!-- src/components/Search.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  
  export let placeholder: string = 'Search...';
  
  let searchQuery = '';
  let searchResults: Array<{ title: string; url: string; excerpt: string }> = [];
  let isLoading = false;
  let showResults = false;
  
  async function handleSearch() {
    if (searchQuery.length < 2) {
      searchResults = [];
      return;
    }
    
    isLoading = true;
    
    // Simulated search - replace with actual search implementation
    await new Promise(resolve => setTimeout(resolve, 300));
    
    searchResults = [
      {
        title: 'Getting Started',
        url: '/getting-started/introduction',
        excerpt: 'Learn how to get started with CleanTee...'
      },
      // Add more results
    ];
    
    isLoading = false;
    showResults = true;
  }
  
  function selectResult(url: string) {
    window.location.href = url;
  }
  
  onMount(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault();
        document.querySelector<HTMLInputElement>('#search-input')?.focus();
      }
    };
    
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  });
</script>

<div class="search-container relative">
  <div class="relative">
    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
    
    <input
      id="search-input"
      type="search"
      bind:value={searchQuery}
      on:input={handleSearch}
      on:focus={() => searchQuery && (showResults = true)}
      on:blur={() => setTimeout(() => showResults = false, 200)}
      {placeholder}
      class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg
             focus:ring-2 focus:ring-primary-500 focus:border-transparent
             bg-white text-gray-900 placeholder-gray-500 text-sm"
    />
    
    {#if isLoading}
      <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
        <svg class="animate-spin h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    {/if}
  </div>
  
  {#if showResults && searchResults.length > 0}
    <div class="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto z-50">
      <ul>
        {#each searchResults as result}
          <li>
            <button
              on:click={() => selectResult(result.url)}
              class="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
            >
              <div class="font-medium text-gray-900 mb-1">{result.title}</div>
              <div class="text-sm text-gray-600">{result.excerpt}</div>
            </button>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>
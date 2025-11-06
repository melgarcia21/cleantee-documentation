<!-- src/components/TOC.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  
  export let headings: Array<{
    depth: number;
    slug: string;
    text: string;
  }> = [];
  
  let activeId = '';
  
  onMount(() => {
    // Intersection Observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeId = entry.target.id;
          }
        });
      },
      {
        rootMargin: '-80px 0px -80% 0px',
      }
    );
    
    // Observe all headings
    headings.forEach((heading) => {
      const element = document.getElementById(heading.slug);
      if (element) {
        observer.observe(element);
      }
    });
    
    return () => observer.disconnect();
  });
  
  function scrollToHeading(slug: string) {
    const element = document.getElementById(slug);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
</script>

<nav class="toc" aria-label="Table of contents">
  <h2 class="text-sm font-semibold text-gray-900 mb-4">
    On this page
  </h2>
  
  {#if headings.length > 0}
    <ul class="space-y-2 text-sm">
      {#each headings as heading}
        <li class={heading.depth === 3 ? 'pl-4' : ''}>
          <button
            on:click={() => scrollToHeading(heading.slug)}
            class="block w-full text-left py-1 transition-colors {
              activeId === heading.slug
                ? 'text-primary-600 font-medium'
                : 'text-gray-600 hover:text-gray-900'
            }"
          >
            {heading.text}
          </button>
        </li>
      {/each}
    </ul>
  {:else}
    <p class="text-sm text-gray-500 italic">No headings found</p>
  {/if}
</nav>

<style>
  .toc {
    max-height: calc(100vh - 200px);
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #cbd5e0 transparent;
  }
  
  .toc::-webkit-scrollbar {
    width: 4px;
  }
  
  .toc::-webkit-scrollbar-track {
    background: transparent;
  }
  
  .toc::-webkit-scrollbar-thumb {
    background-color: #cbd5e0;
    border-radius: 2px;
  }
  
  .toc::-webkit-scrollbar-thumb:hover {
    background-color: #a0aec0;
  }
</style>
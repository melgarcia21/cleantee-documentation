<!-- src/components/ImageZoom.svelte -->
<script lang="ts">
  export let src: string;
  export let alt: string;
  export let caption: string = '';
  
  let isZoomed = false;
  
  function toggleZoom() {
    isZoomed = !isZoomed;
  }
</script>

<figure class="image-zoom my-6">
  <button
    on:click={toggleZoom}
    class="block w-full cursor-zoom-in hover:opacity-90 transition-opacity"
  >
    <img
      {src}
      {alt}
      class="rounded-lg shadow-md w-full h-auto"
      loading="lazy"
    />
  </button>
  
  {#if caption}
    <figcaption class="mt-2 text-sm text-gray-600 text-center italic">
      {caption}
    </figcaption>
  {/if}
</figure>

{#if isZoomed}
  <div
    class="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
    on:click={toggleZoom}
    on:keydown={(e) => e.key === 'Escape' && toggleZoom()}
    role="button"
    tabindex="0"
  >
    <button
      class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
      on:click={toggleZoom}
      aria-label="Close"
    >
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    
    <img
      {src}
      {alt}
      class="max-w-full max-h-full object-contain"
    />
  </div>
{/if}
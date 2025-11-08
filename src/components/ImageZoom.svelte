<!-- src/components/ImageZoom.svelte -->
<script lang="ts">
  export let src: string;
  export let alt: string;
  export let caption: string = '';
  
  let isZoomed = false;

  function toggleZoom() {
    isZoomed = !isZoomed;
    // Prevent body scroll when zoomed
    if (isZoomed) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  function handleOverlayKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleZoom();
    }
  }

  function handleOverlayClick(e: MouseEvent) {
    // Only close if clicking the overlay itself, not the image
    if (e.target === e.currentTarget) {
      toggleZoom();
    }
  }
</script>

<figure class="image-zoom my-6">
  <button
    on:click={toggleZoom}
    class="block w-full cursor-zoom-in hover:opacity-90 transition-opacity"
    aria-label="Click to zoom image"
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
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <div
    class="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
    on:click={handleOverlayClick}
    on:keydown={handleOverlayKeydown}
    role="dialog"
    aria-modal="true"
    aria-label="Zoomed image view"
    tabindex="-1"
  >
    <button
      class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
      on:click={toggleZoom}
      aria-label="Close zoomed image"
    >
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <img
      {src}
      {alt}
      class="max-w-full max-h-full object-contain cursor-zoom-out"
      on:click={toggleZoom}
      on:keydown={() => {}}
      role="presentation"
    />
  </div>
{/if}
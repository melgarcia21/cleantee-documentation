<!-- src/components/Accordion.svelte -->
<script lang="ts">
  export let title: string;
  export let isOpen: boolean = false;
  
  function toggle() {
    isOpen = !isOpen;
  }
</script>

<div class="accordion border border-gray-200 rounded-lg mb-4 overflow-hidden">
  <button
    on:click={toggle}
    class="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors text-left"
    aria-expanded={isOpen}
    aria-controls="accordion-content"
  >
    <span class="font-medium text-gray-900">{title}</span>
    <svg
      class="w-5 h-5 text-gray-500 transition-transform duration-200 {isOpen ? 'rotate-180' : ''}"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </button>

  {#if isOpen}
    <div
      id="accordion-content"
      class="p-4 bg-gray-50 border-t border-gray-200"
      role="region"
    >
      <slot />
    </div>
  {/if}
</div>
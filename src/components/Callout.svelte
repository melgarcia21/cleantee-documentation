<!-- src/components/Callout.svelte -->
<script lang="ts">
  export let type: 'note' | 'tip' | 'warning' | 'danger' | 'info' = 'info';
  export let title: string = '';
  export let collapsible: boolean = false;
  
  let isOpen = true;
  
  const config = {
    note: {
      icon: '📝',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-300',
      iconColor: 'text-gray-600',
      titleColor: 'text-gray-900',
      textColor: 'text-gray-700',
    },
    tip: {
      icon: '💡',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-300',
      iconColor: 'text-green-600',
      titleColor: 'text-green-900',
      textColor: 'text-green-800',
    },
    warning: {
      icon: '⚠️',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-300',
      iconColor: 'text-yellow-600',
      titleColor: 'text-yellow-900',
      textColor: 'text-yellow-800',
    },
    danger: {
      icon: '🚨',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-300',
      iconColor: 'text-red-600',
      titleColor: 'text-red-900',
      textColor: 'text-red-800',
    },
    info: {
      icon: 'ℹ️',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-300',
      iconColor: 'text-blue-600',
      titleColor: 'text-blue-900',
      textColor: 'text-blue-800',
    },
  };
  
  $: style = config[type];
  $: defaultTitle = {
    note: 'Note',
    tip: 'Tip',
    warning: 'Warning',
    danger: 'Important',
    info: 'Info',
  }[type];
</script>

<div class="callout {style.bgColor} {style.textColor} border-l-4 {style.borderColor} rounded-r-lg my-6 overflow-hidden">
  <div class="flex items-start p-4">
    <div class="shrink-0 {style.iconColor} text-2xl mr-3 mt-0.5">
      {style.icon}
    </div>
    
    <div class="flex-1 min-w-0">
      {#if collapsible}
        <button
          on:click={() => isOpen = !isOpen}
          class="flex items-center justify-between w-full text-left mb-2 group"
        >
          <span class="font-semibold {style.titleColor} text-base">
            {title || defaultTitle}
          </span>
          <svg
            class="w-5 h-5 {style.iconColor} transform transition-transform duration-200 {isOpen ? 'rotate-180' : ''}"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      {:else if title}
        <div class="font-semibold {style.titleColor} text-base mb-2">
          {title}
        </div>
      {/if}
      
      {#if !collapsible || isOpen}
        <div class="prose prose-sm max-w-none {style.textColor}">
          <slot />
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  .callout :global(p:last-child) {
    margin-bottom: 0;
  }
  
  .callout :global(ul:last-child),
  .callout :global(ol:last-child) {
    margin-bottom: 0;
  }
  
  .callout :global(a) {
    text-decoration: underline;
    font-weight: 500;
  }
  
  .callout :global(code) {
    font-size: 0.875em;
    padding: 0.125rem 0.25rem;
    border-radius: 0.25rem;
    background-color: rgba(0, 0, 0, 0.05);
  }
</style>
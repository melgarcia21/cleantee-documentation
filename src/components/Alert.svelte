<!-- src/components/Alert.svelte -->
<script lang="ts">
  export let type: 'info' | 'success' | 'warning' | 'error' = 'info';
  export let title: string = '';
  export let dismissible: boolean = false;
  
  let visible = true;
  
  const config = {
    info: {
      icon: 'ℹ️',
      iconLabel: 'Information',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-900',
      titleColor: 'text-blue-800',
    },
    success: {
      icon: '✅',
      iconLabel: 'Success',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-900',
      titleColor: 'text-green-800',
    },
    warning: {
      icon: '⚠️',
      iconLabel: 'Warning',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      textColor: 'text-yellow-900',
      titleColor: 'text-yellow-800',
    },
    error: {
      icon: '❌',
      iconLabel: 'Error',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      textColor: 'text-red-900',
      titleColor: 'text-red-800',
    },
  };
  
  const style = config[type];
</script>

{#if visible}
  <div
    class="alert {style.bgColor} {style.textColor} border {style.borderColor} rounded-lg p-4 my-4"
    role="alert"
    aria-live="polite"
  >
    <div class="flex {dismissible ? 'justify-between' : ''}">
      <div class="flex gap-3 flex-1">
        <div class="shrink-0 text-xl" role="img" aria-label={style.iconLabel}>
          {style.icon}
        </div>
        <div class="flex-1">
          {#if title}
            <h5 class="font-semibold {style.titleColor} mb-1">
              {title}
            </h5>
          {/if}
          <div class="text-sm">
            <slot />
          </div>
        </div>
      </div>
      
      {#if dismissible}
        <button
          on:click={() => visible = false}
          class="shrink-0 ml-4 text-current opacity-50 hover:opacity-100 transition-opacity"
          aria-label="Dismiss alert"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      {/if}
    </div>
  </div>
{/if}
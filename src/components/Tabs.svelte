<!-- src/components/Tabs.svelte -->
<script lang="ts">
  export let tabs: Array<{ id: string; label: string; icon?: string }> = [];
  export let activeTab: string = tabs[0]?.id || '';
  export let variant: 'underline' | 'pills' | 'bordered' = 'underline';
  export let fullWidth: boolean = false;
  
  function setActiveTab(tabId: string) {
    activeTab = tabId;
  }
  
  function isActive(tabId: string): boolean {
    return activeTab === tabId;
  }
</script>

<div class="tabs-container">
  <!-- Tab Navigation -->
  <div class="tab-nav {variant === 'bordered' ? 'border border-gray-200 rounded-lg p-1 bg-gray-50' : ''}">
    <div 
      class="flex {variant === 'underline' ? 'border-b border-gray-200' : ''} {fullWidth ? 'w-full' : 'space-x-2'}"
      aria-label="Tabs"
      role="tablist"
    >
      {#each tabs as tab}
        {@const active = isActive(tab.id)}
        <button
          type="button"
          role="tab"
          aria-selected={active}
          aria-controls={`panel-${tab.id}`}
          id={`tab-${tab.id}`}
          on:click={() => setActiveTab(tab.id)}
          class="tab-button {fullWidth ? 'flex-1' : ''} 
                 {variant === 'underline' 
                   ? `py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                       active 
                         ? 'border-primary-600 text-primary-600' 
                         : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                     }`
                   : variant === 'pills'
                   ? `py-2 px-4 rounded-lg font-medium text-sm transition-all ${
                       active
                         ? 'bg-primary-600 text-white shadow-sm'
                         : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                     }`
                   : `py-2 px-4 rounded-md font-medium text-sm transition-all ${
                       active
                         ? 'bg-white text-primary-600 shadow-sm'
                         : 'text-gray-600 hover:text-gray-900'
                     }`
                 }"
        >
          {#if tab.icon}
            <span class="mr-2" aria-hidden="true">{tab.icon}</span>
          {/if}
          {tab.label}
        </button>
      {/each}
    </div>
  </div>
  
  <!-- Tab Panels -->
  <div class="tab-panels mt-6">
    <slot {activeTab} />
  </div>
</div>

<style lang="postcss">
  .tab-button {
    white-space: nowrap;
    outline: none;
  }
  
  .tab-button:focus-visible {
    @apply ring-2 ring-primary-500 ring-offset-2;
  }
</style>
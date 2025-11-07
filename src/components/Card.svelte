<!-- src/components/Card.svelte -->
<script lang="ts">
  export let title: string = '';
  export let description: string = '';
  export let icon: string = '';
  export let href: string = '';
  export let external: boolean = false;
  export let variant: 'default' | 'featured' | 'simple' = 'default';
  export let clickable: boolean = true;
  
  $: isLink = href !== '';
  $: Component = isLink ? 'a' : 'div';
  $: linkProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  
  const variantStyles = {
    default: 'bg-white border-2 border-gray-200 hover:border-primary-500 hover:shadow-lg',
    featured: 'bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-300 hover:border-primary-500 hover:shadow-xl',
    simple: 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md',
  };
</script>

<svelte:element
  this={Component}
  {...(isLink ? { href } : {})}
  {...linkProps}
  class="card group block rounded-xl p-6 transition-all duration-200 {variantStyles[variant]} {clickable ? 'cursor-pointer' : ''}"
>
  <div class="flex items-start gap-4">
    {#if icon}
      <div class="shrink-0 text-4xl" aria-hidden="true">
        {icon}
      </div>
    {/if}
    
    <div class="flex-1 min-w-0">
      {#if title}
        <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
      {/if}
      
      {#if description}
        <p class="text-gray-600 leading-relaxed mb-3">
          {description}
        </p>
      {:else}
        <div class="text-gray-600 leading-relaxed mb-3">
          <slot />
        </div>
      {/if}
      
      {#if isLink && clickable}
        <div class="flex items-center text-primary-600 font-medium text-sm mt-4">
          <span>Learn more</span>
          {#if external}
            <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          {:else}
            <svg class="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          {/if}
        </div>
      {/if}
      
      {#if $$slots.footer}
        <div class="mt-4 pt-4 border-t border-gray-200">
          <slot name="footer" />
        </div>
      {/if}
    </div>
  </div>
</svelte:element>

<style>
  .card:hover {
    transform: translateY(-2px);
  }
  
  .card :global(p:last-child) {
    margin-bottom: 0;
  }
</style>
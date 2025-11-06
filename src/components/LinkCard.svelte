<!-- src/components/LinkCard.svelte -->
<script lang="ts">
  export let title: string;
  export let description: string = '';
  export let href: string;
  export let icon: string = '📄';
  export let external: boolean = false;
</script>

<a
  {href}
  class="link-card block p-6 bg-white border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all duration-200 group"
  target={external ? '_blank' : undefined}
  rel={external ? 'noopener noreferrer' : undefined}
>
  <div class="flex items-start gap-4">
    <div class="shrink-0 text-3xl">
      {icon}
    </div>
    <div class="flex-1 min-w-0">
      <h3 class="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
        {title}
        {#if external}
          <svg class="inline w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        {/if}
      </h3>
      {#if description}
        <p class="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      {/if}
    </div>
  </div>
</a>
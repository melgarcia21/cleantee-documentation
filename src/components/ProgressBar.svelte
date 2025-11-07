<script lang="ts">
  export let value: number = 0;
  export let max: number = 100;
  export let showLabel: boolean = true;
  export let color: 'primary' | 'success' | 'warning' | 'danger' = 'primary';
  
  $: percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  const colorStyles = {
    primary: 'bg-primary-600',
    success: 'bg-green-600',
    warning: 'bg-yellow-600',
    danger: 'bg-red-600',
  };
</script>

<div class="progress-bar">
  {#if showLabel}
    <div class="flex justify-between items-center mb-2 text-sm">
      <span class="font-medium text-gray-700">Progress</span>
      <span class="text-gray-600">{Math.round(percentage)}%</span>
    </div>
  {/if}
  
  <div class="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
    <div
      class="h-full rounded-full transition-all duration-500 {colorStyles[color]}"
      style="width: {percentage}%"
    ></div>
  </div>
</div>
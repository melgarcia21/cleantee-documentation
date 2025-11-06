<!-- src/components/Badge.svelte -->
<script lang="ts">
  export let variant: 'default' | 'success' | 'warning' | 'danger' | 'info' = 'default';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  
  const variantStyles = {
    default: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
  };
  
  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  };
</script>

<span class="badge inline-flex items-center font-medium rounded-full {variantStyles[variant]} {sizeStyles[size]}">
  <slot />
</span>
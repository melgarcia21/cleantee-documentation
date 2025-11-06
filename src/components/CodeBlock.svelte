<!-- src/components/CodeBlock.svelte -->
<script lang="ts">
  export let code: string;
  export let language: string = 'text';
  export let filename: string = '';
  export let showLineNumbers: boolean = false;
  
  let copied = false;
  
  function copyToClipboard() {
    navigator.clipboard.writeText(code).then(() => {
      copied = true;
      setTimeout(() => copied = false, 2000);
    });
  }
  
  const lines = code.split('\n');
</script>

<div class="code-block my-6 rounded-lg overflow-hidden border border-gray-200">
  <!-- Header -->
  <div class="flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-gray-700">
    <div class="flex items-center gap-2">
      {#if filename}
        <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span class="text-sm text-gray-300 font-mono">{filename}</span>
      {:else}
        <span class="text-xs text-gray-400 uppercase font-semibold">{language}</span>
      {/if}
    </div>
    
    <button
      on:click={copyToClipboard}
      class="flex items-center gap-1 px-2 py-1 text-xs text-gray-300 hover:text-white rounded transition-colors hover:bg-gray-700"
      aria-label="Copy code"
    >
      {#if copied}
        <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span>Copied!</span>
      {:else}
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        <span>Copy</span>
      {/if}
    </button>
  </div>
  
  <!-- Code Content -->
  <div class="bg-gray-900 overflow-x-auto">
    <pre class="p-4 text-sm"><code class="language-{language} text-gray-100 font-mono">{#if showLineNumbers}{#each lines as line, i}<span class="line-number text-gray-500 select-none mr-4">{i + 1}</span>{line}
{/each}{:else}{code}{/if}</code></pre>
  </div>
</div>

<style>
  .code-block pre {
    margin: 0;
  }
  
  .code-block code {
    display: block;
  }
  
  .line-number {
    display: inline-block;
    width: 2.5rem;
    text-align: right;
  }
</style>
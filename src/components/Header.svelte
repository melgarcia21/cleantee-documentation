<script lang="ts">
  import { onMount } from 'svelte';

  let searchQuery = '';
  let isSearchFocused = false;
  let isScrolled = false;
  let isDarkMode = false;

  function handleSearch() {
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  }

  function toggleTheme() {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 10;
    };

    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      isDarkMode = true;
      document.documentElement.classList.add('dark');
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<header class="sticky top-0 z-30 bg-white border-b border-gray-200 transition-shadow {isScrolled ? 'shadow-sm' : ''}">
  <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <!-- Left: Logo (hidden on desktop as sidebar has it) -->
      <div class="shrink-0 lg:hidden">
        <a href="/" class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold">C</span>
          </div>
          <span class="text-lg font-bold text-gray-900">CleanTee</span>
        </a>
      </div>
      
      <!-- Center: Search Bar -->
      <div class="flex-1 max-w-2xl mx-4">
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="search"
            bind:value={searchQuery}
            on:focus={() => isSearchFocused = true}
            on:blur={() => setTimeout(() => isSearchFocused = false, 200)}
            on:keydown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Search documentation... (Press / to focus)"
            class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg
                   focus:ring-2 focus:ring-primary-500 focus:border-transparent
                   bg-gray-50 text-gray-900 placeholder-gray-500 text-sm
                   transition-colors"
          />
          
          <!-- Search Results Dropdown -->
          {#if isSearchFocused && searchQuery}
            <div class="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto">
              <div class="p-4 text-sm text-gray-500">
                Press Enter to search for "<span class="font-semibold text-gray-900">{searchQuery}</span>"
              </div>
            </div>
          {/if}
        </div>
      </div>
      
      <!-- Right: Links -->
      <div class="flex items-center space-x-4">
        <!-- Version Badge -->
        <span class="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
          v1.0.0
        </span>
        
        <!-- GitHub Link -->
        <a
          href="https://github.com/melgarcia21/cleantee-documentation.git"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-500 hover:text-gray-900 transition-colors p-2 rounded-lg hover:bg-gray-100"
          aria-label="GitHub Repository"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
          </svg>
        </a>
        
        <!-- Theme Toggle -->
        <button
          on:click={toggleTheme}
          class="p-2 text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {#if isDarkMode}
            <!-- Sun icon for light mode -->
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          {:else}
            <!-- Moon icon for dark mode -->
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          {/if}
        </button>
      </div>
    </div>
  </div>
</header>

<style>
  /* Custom scrollbar for search results */
  .max-h-96 {
    scrollbar-width: thin;
    scrollbar-color: #cbd5e0 #f7fafc;
  }
  
  .max-h-96::-webkit-scrollbar {
    width: 6px;
  }
  
  .max-h-96::-webkit-scrollbar-track {
    background: #f7fafc;
  }
  
  .max-h-96::-webkit-scrollbar-thumb {
    background-color: #cbd5e0;
    border-radius: 3px;
  }
</style>

<svelte:window on:keydown={(e) => {
  if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName || '')) {
    e.preventDefault();
    (document.querySelector('input[type="search"]') as HTMLInputElement | null)?.focus();
  }
}} />
<script lang="ts">
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    documentation: [
      { label: 'Getting Started', href: '/getting-started/introduction' },
      { label: 'System Overview', href: '/overview/background' },
      { label: 'User Guides', href: '/user-guides/customer/getting-started' },
      { label: 'API Reference', href: '/api/authentication' },
    ],
    resources: [
      { label: 'GitHub Repository', href: 'https://github.com/melgarcia21/cleantee-documentation.git' },
      { label: 'Laravel Docs', href: 'https://laravel.com/docs' },
      { label: 'React Docs', href: 'https://react.dev' },
      { label: 'Tailwind CSS', href: 'https://tailwindcss.com' },
    ],
    community: [
      { label: 'Report Issues', href: 'https://github.com/melgarcia21/cleantee-documentation/issues' },
      { label: 'Discussions', href: 'https://github.com/melgarcia21/cleantee-documentation/discussions' },
      { label: 'Changelog', href: '/appendices/changelog' },
      { label: 'FAQ', href: '/appendices/faq' },
    ],
  };
</script>

<footer class="bg-white border-t border-gray-200">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- Brand -->
      <div class="space-y-4">
        <a href="/" class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-xl">C</span>
          </div>
          <div>
            <div class="text-lg font-bold text-gray-900">CleanTee</div>
            <div class="text-xs text-gray-500">Documentation</div>
          </div>
        </a>
        <p class="text-sm text-gray-600">
          Complete documentation for the CleanTee Online Booking System.
        </p>
        <div class="flex space-x-4">
          <a
            href="https://github.com/melgarcia21/cleantee-documentation"
            class="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      
      <!-- Documentation -->
      <div>
        <h3 class="text-sm font-semibold text-gray-900 mb-4">Documentation</h3>
        <ul class="space-y-3">
          {#each footerLinks.documentation as link}
            <li>
              <a
                href={link.href}
                class="text-sm text-gray-600 hover:text-primary-600 transition-colors"
              >
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>
      
      <!-- Resources -->
      <div>
        <h3 class="text-sm font-semibold text-gray-900 mb-4">Resources</h3>
        <ul class="space-y-3">
          {#each footerLinks.resources as link}
            <li>
              <a
                href={link.href}
                class="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>
      
      <!-- Community -->
      <div>
        <h3 class="text-sm font-semibold text-gray-900 mb-4">Community</h3>
        <ul class="space-y-3">
          {#each footerLinks.community as link}
            <li>
              <a
                href={link.href}
                class="text-sm text-gray-600 hover:text-primary-600 transition-colors"
              >
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
    
    <!-- Bottom Bar -->
    <div class="mt-12 pt-8 border-t border-gray-200">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sm text-gray-600">
          © {currentYear} CleanTee Services. All rights reserved.
        </p>
        <div class="flex items-center gap-6 text-sm">
          <a href="/appendices/privacy" class="text-gray-600 hover:text-primary-600 transition-colors">
            Privacy Policy
          </a>
          <a href="/appendices/terms" class="text-gray-600 hover:text-primary-600 transition-colors">
            Terms of Service
          </a>
          <span class="text-gray-400">
            Built with <a href="https://astro.build" class="text-primary-600 hover:text-primary-700" target="_blank" rel="noopener noreferrer">Astro</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</footer>
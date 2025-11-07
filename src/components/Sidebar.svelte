<!-- src/components/Sidebar.svelte -->
<script lang="ts">
  import { onMount } from "svelte";

  export let currentPath = "/";

  let isMobileMenuOpen = false;
  let expandedSections: Set<string> = new Set([
    "Getting Started",
    "System Overview",
  ]);

  const navigation = [
    {
      title: "Getting Started",
      icon: "🚀",
      links: [
        { title: "Introduction", href: "/getting-started/introduction" },
        { title: "Quick Start", href: "/getting-started/quick-start" },
        { title: "Requirements", href: "/getting-started/requirements" },
        { title: "Installation", href: "/getting-started/installation" },
        { title: "Configuration", href: "/getting-started/configuration" },
      ],
    },
    {
      title: "System Overview",
      icon: "📖",
      links: [
        { title: "Background & Context", href: "/overview/background" },
        { title: "Problem Statement", href: "/overview/problem-statement" },
        { title: "Objectives", href: "/overview/objectives" },
        { title: "Scope & Limitations", href: "/overview/scope" },
        { title: "Target Users", href: "/overview/users" },
        { title: "Key Features", href: "/overview/features" },
        { title: "Significance", href: "/overview/significance" },
      ],
    },
    {
      title: "Requirements",
      icon: "📋",
      links: [
        { title: "Functional Requirements", href: "/requirements/functional" },
        {
          title: "Non-Functional Requirements",
          href: "/requirements/non-functional",
        },
        { title: "User Stories", href: "/requirements/user-stories" },
        { title: "Use Cases", href: "/requirements/use-cases" },
      ],
    },
    {
      title: "Architecture",
      icon: "🏗️",
      links: [
        { title: "Technology Stack", href: "/architecture/tech-stack" },
        { title: "Architecture Overview", href: "/architecture/overview" },
        { title: "Design Patterns", href: "/architecture/patterns" },
        { title: "Security", href: "/architecture/security" },
        { title: "Data Flow", href: "/architecture/data-flow" },
      ],
    },
    {
      title: "Database",
      icon: "🗄️",
      links: [
        { title: "Schema Overview", href: "/database/schema" },
        { title: "ERD", href: "/database/erd" },
        { title: "Tables", href: "/database/tables" },
        { title: "Relationships", href: "/database/relationships" },
      ],
    },
    {
      title: "User Guides",
      icon: "👥",
      links: [
        {
          title: "Customer Guide",
          href: "/user-guides/customer/getting-started",
        },
        { title: "Staff Guide", href: "/user-guides/staff/getting-started" },
        { title: "Admin Guide", href: "/user-guides/admin/dashboard" },
      ],
    },
    {
      title: "Features",
      icon: "✨",
      links: [
        { title: "Authentication", href: "/features/authentication" },
        { title: "Booking System", href: "/features/booking-system" },
        { title: "Payment", href: "/features/payment" },
        { title: "Loyalty Program", href: "/features/loyalty" },
      ],
    },
    {
      title: "Technical",
      icon: "💻",
      links: [
        { title: "Backend", href: "/technical/backend/structure" },
        { title: "Frontend", href: "/technical/frontend/structure" },
        { title: "API Reference", href: "/api/authentication" },
      ],
    },
    {
      title: "Developer",
      icon: "🛠️",
      links: [
        { title: "Setup", href: "/developer/setup" },
        { title: "Standards", href: "/developer/standards" },
        { title: "Testing", href: "/developer/testing" },
      ],
    },
    {
      title: "Deployment",
      icon: "🚀",
      links: [
        { title: "Checklist", href: "/deployment/checklist" },
        { title: "Steps", href: "/deployment/steps" },
        { title: "Configuration", href: "/deployment/configuration" },
      ],
    },
  ];

  function toggleSection(title: string) {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(title)) {
      newExpanded.delete(title);
    } else {
      newExpanded.add(title);
    }
    expandedSections = newExpanded;
  }

  function isActive(href: string): boolean {
    return currentPath === href || currentPath.startsWith(href + "/");
  }

  function isSectionActive(section: (typeof navigation)[0]): boolean {
    return section.links.some((link) => isActive(link.href));
  }

  onMount(() => {
    // Auto-expand active section and trigger reactivity by assigning a new Set
    const newExpanded = new Set(expandedSections);
    navigation.forEach((section) => {
      if (isSectionActive(section)) {
        newExpanded.add(section.title);
      }
    });
    expandedSections = newExpanded;
    return () => {};
  });
</script>

<!-- Mobile Menu Toggle -->
<button
  class="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md hover:bg-gray-50 transition-colors"
  on:click={() => (isMobileMenuOpen = !isMobileMenuOpen)}
  aria-label="Toggle navigation menu"
>
  <svg
    class="w-6 h-6 text-gray-900"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    {#if isMobileMenuOpen}
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    {:else}
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    {/if}
  </svg>
</button>

<!-- Sidebar -->
<aside
  class="sidebar fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-200 overflow-y-auto transition-transform duration-300 z-40
         {isMobileMenuOpen
    ? 'translate-x-0'
    : '-translate-x-full lg:translate-x-0'}"
>
  <!-- Logo -->
  <div class="sticky top-0 bg-white z-10 p-6 border-b border-gray-200">
    <a href="/" class="flex items-center space-x-2 group">
      <div
        class="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center group-hover:bg-primary-700 transition-colors"
      >
        <span class="text-white font-bold text-xl">C</span>
      </div>
      <div>
        <span class="text-lg font-bold text-gray-900">CleanTee</span>
        <span class="block text-xs text-gray-500">Documentation</span>
      </div>
    </a>
  </div>

  <!-- Navigation -->
  <nav class="p-4 pb-20">
    {#each navigation as section}
      {@const isExpanded = expandedSections.has(section.title)}
      {@const isSectionActiveNow = isSectionActive(section)}

      <div class="mb-2">
        <button
          class="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold rounded-lg transition-colors
                 {isSectionActiveNow
            ? 'text-primary-700 bg-primary-50'
            : 'text-gray-700 hover:bg-gray-100'}"
          on:click={() => toggleSection(section.title)}
        >
          <span class="flex items-center gap-2">
            <span class="text-base">{section.icon}</span>
            <span>{section.title}</span>
          </span>
          <svg
            class="w-4 h-4 transition-transform duration-200 {isExpanded
              ? 'rotate-90'
              : ''}"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {#if isExpanded}
          <ul class="mt-1 ml-2 space-y-1">
            {#each section.links as link}
              <li>
                <a
                  href={link.href}
                  class="block px-3 py-2 text-sm rounded-lg transition-colors
                        {isActive(link.href)
                    ? 'bg-primary-50 text-primary-700 font-medium border-l-2 border-primary-600 pl-2.5'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}"
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.title}
                </a>
              </li>
            {/each}
          </ul>
        {/if}
      </div>
    {/each}
  </nav>
</aside>

<!-- Overlay for mobile -->
{#if isMobileMenuOpen}
  <div
    class="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
    on:click={() => (isMobileMenuOpen = false)}
    on:keydown={(e) => e.key === "Escape" && (isMobileMenuOpen = false)}
    role="button"
    tabindex="0"
    aria-label="Close navigation menu"
  ></div>
{/if}

<style>
  .sidebar {
    scrollbar-width: thin;
    scrollbar-color: #cbd5e0 #f7fafc;
  }

  .sidebar::-webkit-scrollbar {
    width: 6px;
  }

  .sidebar::-webkit-scrollbar-track {
    background: #f7fafc;
  }

  .sidebar::-webkit-scrollbar-thumb {
    background-color: #cbd5e0;
    border-radius: 3px;
  }

  .sidebar::-webkit-scrollbar-thumb:hover {
    background-color: #a0aec0;
  }
</style>

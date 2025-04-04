<template>
  <header class="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container flex h-16 items-center justify-between py-4">
      <NuxtLink to="/" class="flex items-center space-x-2">
        <span class="font-bold text-xl">DevPortfolio</span>
      </NuxtLink>
      <nav class="hidden md:flex items-center space-x-6 text-sm font-medium">
        <NuxtLink to="/" class="transition-colors hover:text-primary">Home</NuxtLink>
        <NuxtLink to="/projects" class="transition-colors hover:text-primary">Projects</NuxtLink>
        <NuxtLink to="/about" class="transition-colors hover:text-primary">About</NuxtLink>
        <NuxtLink to="/contact" class="transition-colors hover:text-primary">Contact</NuxtLink>
      </nav>
      <button class="md:hidden" aria-label="Toggle Menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu">
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
      </button>
    </div>
  </header>
</template>


<!-- <header
    class="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
  >
    <div class="container flex h-16 items-center justify-between py-4">
      <NuxtLink to="/" class="flex items-center space-x-2">
        <span class="font-bold text-xl">DevPortfolio</span>
      </NuxtLink>
      <nav class="hidden md:flex items-center space-x-6 text-sm font-medium">
        <NuxtLink to="/" class="transition-colors hover:text-primary"
          >Home</NuxtLink
        >
        <NuxtLink to="/projects" class="transition-colors hover:text-primary"
          >Projects</NuxtLink
        >
        <NuxtLink to="/about" class="transition-colors hover:text-primary"
          >About</NuxtLink
        >
        <NuxtLink to="/contact" class="transition-colors hover:text-primary"
          >Contact</NuxtLink
        >
      </nav>
      <button class="md:hidden" aria-label="Toggle Menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-menu"
        >
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
      </button>
    </div>
  </header> -->

<template>
  <nav
    class="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm z-10 py-4 shadow-sm"
  >
    <div class="container mx-auto px-4 flex justify-between items-center">
      <div class="text-xl font-bold text-gray-800 dark:text-white">
        DevPortfolio
      </div>
      <div class="hidden md:flex space-x-6">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition"
        >
          {{ item.name }}
        </a>
      </div>
      <button
        @click="toggleMobileMenu"
        class="md:hidden text-gray-600 dark:text-gray-300"
      >
        <MenuIcon v-if="!mobileMenuOpen" class="h-6 w-6" />
        <XIcon v-else class="h-6 w-6" />
      </button>
    </div>
    <!-- Mobile menu -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden absolute w-full bg-white dark:bg-gray-800 shadow-md"
    >
      <div class="container mx-auto px-4 py-2">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          @click="mobileMenuOpen = false"
          class="block py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const mobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

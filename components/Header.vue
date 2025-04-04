<template>
  <nav
    class="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm z-10 py-4 shadow-sm"
  >
    <div class="container mx-auto px-4 flex justify-between items-center">
      <div class="text-xl font-bold text-gray-800 dark:text-white">
        Welcome to my Portfolio
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

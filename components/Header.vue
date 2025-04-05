<template>
  <nav
    class="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm z-10 py-4 shadow-sm"
  >
    <div class="container mx-auto px-4 flex justify-between items-center">
      <div class="text-xl font-bold text-gray-800 dark:text-white">
        {{ title }}
      </div>

      <!-- Desktop menu -->
      <navigation-DesktopNavigation />

      <button
        @click="toggleMobileMenu"
        class="md:hidden text-gray-600 dark:text-gray-300"
      >
        <MenuIcon v-if="!mobileMenuOpen" class="h-6 w-6" />
        <XIcon v-else class="h-6 w-6" />
      </button>
    </div>

    <!-- Mobile menu -->
    <navigation-MobileNavigation />
  </nav>
</template>

<script setup>
  const {
    title,
    mobileMenuOpen,
    toggleMobileMenu
  } = useNavigation();
</script>
<template>
  <div class="hidden md:flex space-x-6">
    <div v-for="item in navigation" class="flex items-center" :key="item.name">
      <a
        v-if="item.type === 'link'"
        @click.prevent="unToggleDropdownAfterClick(item.href)"
        class="text-gray-600 cursor-pointer hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition"
      >
        {{ item.name }}
      </a>
      <a
        v-else-if="item.type === 'dropdown'"
        @click.prevent="toggleDropdown"
        class="py-2 cursor-pointer text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white flex items-center"
      >
        {{ item.name }}
        <!-- DROPDOWN -->
        <svg
          v-if="item.type === 'dropdown'"
          class="h-4 w-4 ml-1 relative top-0.5 transition-transform duration-300"
          :class="dropdownOpen ? '-rotate-90' : 'rotate-90'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
      <transition name="slide-fade" appear>
        <div v-if="dropdownOpen" class="flex">
          <NuxtLink
            v-for="subItem in item.items"
            class="block px-4 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:underline cursor-pointer"
            :key="subItem.name"
            @click.prevent="unToggleDropdownAfterClick(subItem.href)"
          >
            {{ subItem.name }}
          </NuxtLink>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
const { navigation, dropdownOpen, toggleDropdown, unToggleDropdownAfterClick } =
  useNavigation();
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: transform 0.1s ease, opacity 0.1s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>

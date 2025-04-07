<template>
  <div class="hidden md:flex space-x-6">
    <div v-for="item in navigation" class="flex items-center" :key="item.name">
      <a
        v-if="item.type === 'link'"
        @click.prevent="unToggleDropdownAfterClick(item.href)"
        class="group relative inline-block cursor-pointer text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all"
      >
        {{ item.name }}
        <span
          class="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-emerald-500 transition-all duration-300 group-hover:w-full"
        ></span>
      </a>
      <a
        v-else-if="item.type === 'dropdown'"
        @click.prevent="toggleDropdown"
        class="group relative inline-flex items-center cursor-pointer text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all"
      >
        {{ item.name }}
        <svg
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

        <!-- Animated underline -->
        <span
          class="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-emerald-500 transition-all duration-300 group-hover:w-full"
        ></span>
      </a>

      <transition name="slide-fade" appear>
        <div v-if="dropdownOpen" class="flex">
          <NuxtLink
            v-for="subItem in item.items"
            :key="subItem.name"
            class="group relative inline-block px-4 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-200 bg-transparent h-full text-shadow cursor-pointer"
            @click.prevent="unToggleDropdownAfterClick(subItem.href)"
          >
            {{ subItem.name }}

            <!-- Animated underline -->
            <span
              class="absolute left-0 bottom-0 w-full h-[2px] bg-emerald-500 scale-x-0 transition-all duration-300 group-hover:scale-x-65"
            ></span>
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
  transition: transform 0.5s ease, opacity 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>

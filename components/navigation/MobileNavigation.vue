<template>
  <div
    v-if="mobileMenuOpen"
    class="md:hidden absolute top-[100%] right-0 w-[180px] h-screen bg-white dark:bg-gray-800 shadow-md"
  >
    <div class="container mx-auto px-4 py-2">
      <a
        v-for="item in navigation"
        :key="item.name"
        :href="item.href"
        @click="item.type === 'dropdown' ? toggleDropdown(item) : null"
        class="py-2 cursor-pointer text-left text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white flex items-center"
      >
        {{ item.name }}
        <svg
          v-if="item.type === 'dropdown'"
          class="h-4 w-4 ml-1 transition-transform duration-300"
          :class="dropdownOpen ? 'rotate-180' : ''"
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
        <transition name="slide-fade" appear>
          <div
            v-show="dropdownOpen"
            class="absolute bottom-0 left-1/5 top-4/5 w-40 bg-white dark:bg-gray-700 shadow-2xl rounded-md py-2 overflow-hidden h-fit"
          >
            <NuxtLink
              v-for="subItem in item.items"
              class="block px-4 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              :key="subItem.name"
              :to="subItem.href"
            >
              {{ subItem.name }}
            </NuxtLink>
          </div>
        </transition>
      </a>
    </div>
  </div>
</template>

<script setup>
const { navigation, mobileMenuOpen, dropdownOpen, toggleDropdown } =
  useNavigation();
</script>

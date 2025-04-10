<template>
  <transition name="drawer">
    <div
      v-if="mobileMenuOpen"
      ref="menuDrawer"
      class="md:hidden fixed top-[100%] right-0 w-[180px] h-auto bg-white/80 dark:bg-gray-800/90 backdrop-blur-md rounded-bl-2xl shadow-sm inset-shadow-sm"
    >
      <div class="container mx-auto px-4 py-2">
        <div v-for="item in navigation" :key="item.name" class="relative">
          <a
            :href="item.href"
            class="py-2 cursor-pointer text-left text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white flex items-center"
            @click="
              item.type === 'dropdown'
                ? handleItemClick($event, item)
                : !isHomePage
                  ? toggleMobileMenu()
                  : null
            "
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
          </a>

          <transition name="drawer-down" appear>
            <div
              v-if="item.type === 'dropdown' && dropdownOpen"
              class="pl-4 mt-1 overflow-hidden"
            >
              <NuxtLink
                v-for="subItem in item.items"
                :key="subItem.name"
                class="block py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                :to="subItem.href"
                @click="toggleMobileMenu()"
              >
                {{ subItem.name }}
              </NuxtLink>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const {
  navigation,
  mobileMenuOpen,
  dropdownOpen,
  toggleDropdown,
  toggleMobileMenu,
  isHomePage,
} = useNavigation();
const menuDrawer = ref(null); // Create a ref for the menu

// Handle click on navigation items
const handleItemClick = (event, item) => {
  if (item.type === "dropdown") {
    // Prevent default only for dropdown items
    event.preventDefault();
    toggleDropdown(item);
  }
  // For regular links, let the default behavior happen
};

// Close the menu if clicked outside
const handleClickOutside = (event) => {
  if (menuDrawer.value && !menuDrawer.value.contains(event.target)) {
    toggleMobileMenu();
  }
};

// Set up the click listener when mounted
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

// Clean up the listener before unmounting
onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped src="~/assets/css/menu-drawer.css" />

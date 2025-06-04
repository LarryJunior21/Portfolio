<template>
  <nav
    class="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm z-10 py-4 shadow-sm"
  >
    <!-- Add horizontal padding if is desktop view -->
    <div class="pl-4 lg:px-4 mx-5 flex justify-between items-center">
      <a href="javascript:void(0)" @click.prevent="goHomeOrScrollTop">
        <h1
          class="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-200 bg-transparent h-full text-shadow mr-4"
        >
          {{ title }}
        </h1>
      </a>

      <!-- Desktop menu -->
      <NavigationDesktopNavigation />
      <!-- Send true as a parameter so the function checks the button was clicked and not the outside drawer -->
      <button
        class="md:hidden z-50 text-gray-600 dark:text-gray-300 relative w-10 h-10"
        @click="toggleMobileMenu(true)"
      >
        <!-- Transition for MenuIcon to XIcon -->
        <Transition name="rotate-fade" mode="out-in" @after-leave="afterLeave">
          <MenuIcon
            v-show="!menuTransitioning && !mobileMenuOpen"
            key="menu"
            class="h-6 w-6 absolute top-2 transition-opacity duration-300"
          />
        </Transition>

        <!-- Transition for XIcon to MenuIcon -->
        <Transition name="fade" mode="out-in" @after-leave="afterLeave">
          <XIcon
            v-show="!menuTransitioning && mobileMenuOpen"
            key="x"
            class="h-6 w-6 absolute top-2 transition-opacity duration-300"
          />
        </Transition>
      </button>
    </div>

    <!-- Mobile menu -->
    <NavigationMobileNavigation />
  </nav>
</template>

<script setup>
const {
  title,
  mobileMenuOpen,
  menuTransitioning,
  toggleMobileMenu,
  afterLeave,
} = useNavigation();

const router = useRouter();
const route = useRoute();

const goHomeOrScrollTop = () => {
  if (route.path === '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.replaceState({}, document.title, window.location.pathname);
  } else {
    router.push('/');
  }
};
</script>

<style scoped src="~/assets/css/hamburger-menu-rotation.css" />

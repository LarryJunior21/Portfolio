<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
  >
    <MainPageHero />
    <MainPageAbout />
    <MainPageProjects />
    <MainPageContact />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

// Set up scroll animations
onMounted(() => {
  // Initialize scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe all elements with scroll-animate class
  document.querySelectorAll('.scroll-animate').forEach((el) => {
    observer.observe(el);
  });
});
</script>

<style>
@reference "tailwindcss";
.scroll-animate {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-animate.animate-in {
  opacity: 1;
  transform: translateY(0);
}
</style>

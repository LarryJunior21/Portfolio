<template>
  <Transition name="fade">
    <button
      v-if="isVisible"
      aria-label="Back to top"
      class="back-button"
      :class="{ 'shifted-up': isNearBottom }"
      @click="scrollToTop"
    >
      <ChevronUpIcon class="h-5 w-5 mx-auto" />
    </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { ChevronUpIcon } from 'lucide-vue-next';

const isVisible = ref(false);
const isNearBottom = ref(false);

const checkScrollPosition = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  // Show button when page is scrolled down 300px
  if (scrollTop > 300) {
    isVisible.value = true;
  } else {
    isVisible.value = false;
  }

  // Check if user is near bottom (within 200px of footer)
  const distanceFromBottom = documentHeight - (scrollTop + windowHeight);
  isNearBottom.value = distanceFromBottom <= 200;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

onMounted(() => {
  window.addEventListener('scroll', checkScrollPosition);
  window.addEventListener('resize', checkScrollPosition); // Handle window resize
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScrollPosition);
  window.removeEventListener('resize', checkScrollPosition);
});
</script>

<style scoped>
@reference "tailwindcss";

.back-button {
  @apply fixed bottom-4 right-4 z-50 h-10 w-10 sm:h-12 sm:w-12 rounded-full font-extrabold opacity-80 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:opacity-100 focus:outline-none;
  background: linear-gradient(300deg, deepskyblue, darkviolet);
  color: white;
}

/* Shift button up when near bottom */
.back-button.shifted-up {
  @apply bottom-40 sm:bottom-28;
  transform: translateY(-20px);
}

.back-button.shifted-up:hover {
  transform: translateY(-20px) scale(1.1);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(16px) scale(0.8);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(16px) scale(0.8);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* Smooth transition for position changes */
.back-button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>

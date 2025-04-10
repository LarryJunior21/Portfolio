<!-- AnimatedBackground.vue -->
<template>
  <div class="animated-background">
    <div class="gradient-overlay" />
  </div>
</template>

<style scoped>
.animated-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 30%;
  background: linear-gradient(90deg, #058645, rgba(16, 18, 16, 0));
  background-size: 400% 400%;
  animation: gradientAnimation 8s ease infinite;
  pointer-events: none; /* Make it non-interactive */
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at center,
    transparent 0%,
    rgba(255, 255, 255, 0.1) 70%,
    rgba(255, 255, 255, 0.2) 100%
  );
  animation: pulseAnimation 8s ease-in-out infinite;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes pulseAnimation {
  0% {
    opacity: 0.7;
    transform: scale(1);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.05);
  }
  100% {
    opacity: 0.7;
    transform: scale(1);
  }
}
</style>

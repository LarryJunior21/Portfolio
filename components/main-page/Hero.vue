<template>
  <section
    id="/"
    class="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden"
  >
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
    </div>

    <div class="relative z-9 text-center max-w-4xl mx-auto w-full">
      <!-- Animated profile image with circular animation -->
      <div class="mb-6 md:mb-8 scroll-animate">
        <div class="relative inline-block">
          <div class="profile-container">
            <div class="profile-ring"></div>
            <div class="profile-ring-2"></div>
            <img
              src="~/assets/images/profile.png"
              alt="Larry Junior"
              class="profile-image"
            />
          </div>
        </div>
      </div>

      <!-- Animated text content -->
      <div class="scroll-animate px-2" style="animation-delay: 0.2s">
        <h1
          class="text-xl xs:text-[28px] sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 leading-tight w-fit justify-self-center"
        >
          <span class="typing-animation">Hi, I'm Larry Junior</span>
        </h1>
      </div>

      <div class="scroll-animate px-2" style="animation-delay: 0.4s">
        <p
          class="text-base sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 leading-relaxed"
        >
          Full Stack Developer & UI/UX Enthusiast
        </p>
      </div>

      <div class="scroll-animate px-2" style="animation-delay: 0.6s">
        <div
          class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto"
        >
          <a href="#projects" class="btn-primary group w-full sm:w-auto">
            <span>View My Work</span>
            <ArrowDownIcon
              class="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-y-1 transition-transform"
            />
          </a>
          <a href="#contact" class="btn-secondary group w-full sm:w-auto">
            <span>Get In Touch</span>
            <MailIcon
              class="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform"
            />
          </a>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      class="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 scroll-animate"
      style="animation-delay: 1s"
    >
      <div class="scroll-indicator">
        <div class="scroll-dot"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowDownIcon, MailIcon } from "lucide-vue-next";
</script>

<style scoped>
@reference "tailwindcss";

/* Profile image animations - Mobile optimized */
.profile-container {
  position: relative;
  width: 150px;
  height: 150px;
  margin: 0 auto;
}

@media (min-width: 640px) {
  .profile-container {
    width: 180px;
    height: 180px;
  }
}

@media (min-width: 768px) {
  .profile-container {
    width: 200px;
    height: 200px;
  }
}

.profile-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  z-index: 3;
  border: 3px solid white;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  animation: profileFloat 6s ease-in-out infinite;
}

@media (min-width: 768px) {
  .profile-image {
    border: 4px solid white;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
}

.profile-ring {
  position: absolute;
  top: -15px;
  left: -15px;
  right: -15px;
  bottom: -15px;
  border: 2px solid transparent;
  border-top: 2px solid #3b82f6;
  border-right: 2px solid #8b5cf6;
  border-radius: 50%;
  animation: rotate 8s linear infinite;
}

@media (min-width: 768px) {
  .profile-ring {
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    border-width: 3px;
    border-top: 3px solid #3b82f6;
    border-right: 3px solid #8b5cf6;
  }
}

.profile-ring-2 {
  position: absolute;
  top: -25px;
  left: -25px;
  right: -25px;
  bottom: -25px;
  border: 2px solid transparent;
  border-bottom: 2px solid #06b6d4;
  border-left: 2px solid #10b981;
  border-radius: 50%;
  animation: rotate 12s linear infinite reverse;
}

@media (min-width: 768px) {
  .profile-ring-2 {
    top: -30px;
    left: -30px;
    right: -30px;
    bottom: -30px;
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes profileFloat {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}

@media (min-width: 768px) {
  @keyframes profileFloat {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
}

/* Floating background shapes - Mobile optimized */
.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.05;
  animation: float 20s infinite linear;
}

@media (min-width: 768px) {
  .shape {
    opacity: 0.1;
  }
}

.shape-1 {
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6);
  top: 15%;
  left: 5%;
  animation-delay: 0s;
}

@media (min-width: 768px) {
  .shape-1 {
    width: 100px;
    height: 100px;
    top: 20%;
    left: 10%;
  }
}

.shape-2 {
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, #06b6d4, #10b981);
  top: 65%;
  right: 5%;
  animation-delay: -10s;
}

@media (min-width: 768px) {
  .shape-2 {
    width: 150px;
    height: 150px;
    top: 60%;
    right: 10%;
  }
}

.shape-3 {
  width: 50px;
  height: 50px;
  background: linear-gradient(45deg, #f59e0b, #ef4444);
  bottom: 25%;
  left: 15%;
  animation-delay: -5s;
}

@media (min-width: 768px) {
  .shape-3 {
    width: 80px;
    height: 80px;
    bottom: 20%;
    left: 20%;
  }
}

@keyframes float {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) rotate(120deg);
  }
  66% {
    transform: translateY(20px) rotate(240deg);
  }
  100% {
    transform: translateY(0px) rotate(360deg);
  }
}

@media (min-width: 768px) {
  @keyframes float {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    33% {
      transform: translateY(-30px) rotate(120deg);
    }
    66% {
      transform: translateY(30px) rotate(240deg);
    }
    100% {
      transform: translateY(0px) rotate(360deg);
    }
  }
}

/* Button styles - Mobile optimized */
.btn-primary {
  @apply bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center min-w-0;
  font-size: 0.9rem;
}

@media (min-width: 640px) {
  .btn-primary {
    font-size: 1rem;
  }
}

.btn-secondary {
  @apply bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold border-2 border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center min-w-0;
  font-size: 0.9rem;
}

@media (min-width: 640px) {
  .btn-secondary {
    font-size: 1rem;
  }
}

/* Typing animation - Mobile optimized */
.typing-animation {
  display: inline-block;
  overflow: hidden;
  border-right: 2px solid #3b82f6;
  white-space: nowrap;
  font-family: monospace;
  animation:
    typing 3s steps(20, end) forwards,
    blink-caret 0.75s step-end infinite;
  width: 0;
  max-width: 100%;
}

@media (min-width: 768px) {
  .typing-animation {
    border-right: 3px solid #3b82f6;
  }
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 20ch; /* Using monospace font makes ch unit accurate */
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #3b82f6;
  }
}

/* Scroll indicator - Mobile optimized */
.scroll-indicator {
  width: 25px;
  height: 40px;
  border: 2px solid #3b82f6;
  border-radius: 20px;
  position: relative;
  animation: bounce 2s infinite;
}

@media (min-width: 768px) {
  .scroll-indicator {
    width: 30px;
    height: 50px;
    border-radius: 25px;
  }
}

.scroll-dot {
  width: 5px;
  height: 5px;
  background: #3b82f6;
  border-radius: 50%;
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  animation: scrollDot 2s infinite;
}

@media (min-width: 768px) {
  .scroll-dot {
    width: 6px;
    height: 6px;
    top: 8px;
  }
}

@keyframes scrollDot {
  0% {
    transform: translateX(-50%) translateY(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(-50%) translateY(15px);
    opacity: 0;
  }
}

@media (min-width: 768px) {
  @keyframes scrollDot {
    0% {
      transform: translateX(-50%) translateY(0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateX(-50%) translateY(20px);
      opacity: 0;
    }
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-8px);
  }
  60% {
    transform: translateY(-4px);
  }
}

@media (min-width: 768px) {
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
}

/* Scroll animation utilities */
.scroll-animate {
  opacity: 0;
  transform: translateY(30px);
  animation: slideInUp 0.8s ease-out forwards;
}

@keyframes slideInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

<template>
  <section
    id="/"
    class="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
  >
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
    </div>

    <div class="relative z-10 text-center max-w-4xl mx-auto">
      <!-- Animated profile image with circular animation -->
      <div class="mb-8 scroll-animate">
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
      <div class="scroll-animate" style="animation-delay: 0.2s">
        <h1
          class="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
        >
          <span class="typing-animation">Hi, I'm Larry Junior</span>
        </h1>
      </div>

      <div class="scroll-animate" style="animation-delay: 0.4s">
        <p
          class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
        >
          Full Stack Developer & UI/UX Enthusiast
        </p>
      </div>

      <div class="scroll-animate" style="animation-delay: 0.6s">
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" class="btn-primary group">
            <span>View My Work</span>
            <ArrowDownIcon
              class="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform"
            />
          </a>
          <a href="#contact" class="btn-secondary group">
            <span>Get In Touch</span>
            <MailIcon
              class="ml-2 h-5 w-5 group-hover:scale-110 transition-transform"
            />
          </a>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-animate"
      style="animation-delay: 1s"
    >
      <div class="scroll-indicator">
        <div class="scroll-dot"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowDownIcon, MailIcon } from 'lucide-vue-next';
</script>

<style scoped>
@reference "tailwindcss";
/* Profile image animations */
.profile-container {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto;
}

.profile-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  z-index: 3;
  border: 4px solid white;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  animation: profileFloat 6s ease-in-out infinite;
}

.profile-ring {
  position: absolute;
  top: -20px;
  left: -20px;
  width: 240px;
  height: 240px;
  border: 3px solid transparent;
  border-top: 3px solid #3b82f6;
  border-right: 3px solid #8b5cf6;
  border-radius: 50%;
  animation: rotate 8s linear infinite;
}

.profile-ring-2 {
  position: absolute;
  top: -30px;
  left: -30px;
  width: 260px;
  height: 260px;
  border: 2px solid transparent;
  border-bottom: 2px solid #06b6d4;
  border-left: 2px solid #10b981;
  border-radius: 50%;
  animation: rotate 12s linear infinite reverse;
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
    transform: translateY(-10px);
  }
}

/* Floating background shapes */
.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
  animation: float 20s infinite linear;
}

.shape-1 {
  width: 100px;
  height: 100px;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6);
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 150px;
  height: 150px;
  background: linear-gradient(45deg, #06b6d4, #10b981);
  top: 60%;
  right: 10%;
  animation-delay: -10s;
}

.shape-3 {
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, #f59e0b, #ef4444);
  bottom: 20%;
  left: 20%;
  animation-delay: -5s;
}

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

/* Button styles */
.btn-primary {
  @apply bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center;
}

.btn-secondary {
  @apply bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-full font-semibold border-2 border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center;
}

/* Typing animation */
.typing-animation {
  overflow: hidden;
  border-right: 3px solid #3b82f6;
  white-space: nowrap;
  animation:
    typing 3s steps(20, end),
    blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
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

/* Scroll indicator */
.scroll-indicator {
  width: 30px;
  height: 50px;
  border: 2px solid #3b82f6;
  border-radius: 25px;
  position: relative;
  animation: bounce 2s infinite;
}

.scroll-dot {
  width: 6px;
  height: 6px;
  background: #3b82f6;
  border-radius: 50%;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  animation: scrollDot 2s infinite;
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
    transform: translateX(-50%) translateY(20px);
    opacity: 0;
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
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
</style>

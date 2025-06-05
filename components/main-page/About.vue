<template>
  <section id="about" class="py-20 px-4 bg-white dark:bg-gray-800">
    <div class="max-w-6xl mx-auto">
      <div class="scroll-animate text-center mb-16">
        <h2
          class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
        >
          About Me
        </h2>
        <div
          class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"
        ></div>
      </div>

      <div class="grid md:grid-cols-2 gap-20 items-center">
        <div class="scroll-animate" style="animation-delay: 0.2s">
          <div class="relative text-center">
            <div class="about-image-container">
              <!-- Card Shuffle Container -->
              <div
                class="card-shuffle-container"
                @mouseenter="pauseShuffle"
                @mouseleave="resumeShuffle"
                @click="nextImage()"
              >
                <div
                  v-for="(image, index) in images"
                  :key="index"
                  class="card-image"
                  :class="getCardClass(index)"
                  :style="getCardStyle(index)"
                >
                  <img :src="image.src" :alt="image.alt" class="about-image" />
                </div>
              </div>

              <!-- Decorative elements -->
              <div class="about-decoration"></div>
              <div class="about-decoration-2"></div>

              <!-- Image indicators -->
              <div class="image-indicators">
                <div
                  v-for="(image, index) in images"
                  :key="index"
                  class="indicator"
                  :class="{ active: index === currentImageIndex }"
                  @click="setCurrentImage(index)"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-6 px-6 md:px-0">
          <div class="scroll-animate" style="animation-delay: 0.4s">
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Hello 👋, I have more than five years of experience as a software
              developer, creating meaningful and useful digital experiences.
              Tools like Angular, React.js, React Native, Next.js, Tailwind,
              Adobe E-Commerce, and SQL have all been used in my work across the
              stack. Writing clear, well-structured code is very important to
              me, and I like collaborating closely with others to realise ideas.
              I work best in collaborative settings where I can contribute to
              both the technical and business aspects of a project, whether in
              big or small teams.
            </p>
          </div>

          <div class="scroll-animate" style="animation-delay: 0.6s">
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me travelling, gaming or playing
              with my little dachshund. I like to cook sometimes, watch action
              movies and walks on the beach.
            </p>
          </div>

          <div class="scroll-animate" style="animation-delay: 0.8s">
            <div class="skills-grid">
              <div
                v-for="(category, categoryName) in skillsWithLevels"
                :key="categoryName"
                class="skill-card"
                :class="`skill-card-${categoryName.toLowerCase()}`"
              >
                <div class="skill-header">
                  <div
                    class="skill-icon"
                    :class="`skill-icon-${categoryName.toLowerCase()}`"
                  >
                    <CodeIcon
                      v-if="categoryName === 'frontend'"
                      class="h-6 w-6"
                    />
                    <ServerIcon
                      v-else-if="categoryName === 'backend'"
                      class="h-6 w-6"
                    />
                    <SmartphoneIcon
                      v-else-if="categoryName === 'mobile'"
                      class="h-6 w-6"
                    />
                    <CloudIcon
                      v-else-if="categoryName === 'cloud'"
                      class="h-6 w-6"
                    />
                  </div>
                  <div>
                    <h3 class="skill-title">
                      {{ formatCategoryName(categoryName) }}
                    </h3>
                    <p class="skill-count">
                      {{ category.length }} technologies
                    </p>
                  </div>
                </div>

                <div class="skill-divider"></div>

                <div class="skill-list scrollbar-thin">
                  <div
                    v-for="tech in category"
                    :key="tech.name"
                    class="skill-item"
                  >
                    <div class="skill-tech">
                      <div class="flex items-center gap-2">
                        <Icon :icon="tech.icon" class="skill-tech-icon" />
                        <span>{{ tech.name }}</span>
                      </div>
                      <span class="skill-level-text">{{ tech.level }}%</span>
                    </div>

                    <div class="skill-bar-container">
                      <div
                        class="skill-bar"
                        :class="`skill-bar-${categoryName.toLowerCase()}`"
                        :style="`width: ${tech.level}%`"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import {
  CodeIcon,
  ServerIcon,
  SmartphoneIcon,
  CloudIcon,
} from "lucide-vue-next";
import { Icon } from "@iconify/vue";

// Import images using ES6 imports (recommended approach)
import image1 from "~/assets/images/image_1.jpeg";
import image2 from "~/assets/images/image_2.jpeg";
import image3 from "~/assets/images/about_photo.png";
import image4 from "~/assets/images/image_3.jpg";
import image5 from "~/assets/images/image_4.jpg";
import image6 from "~/assets/images/image_5.jpg";
import image7 from "~/assets/images/image_6.jpg";

// Image carousel data with properly imported images
const images = [
  { src: image6, alt: "Larry - Photo 6" },
  { src: image1, alt: "Larry - Photo 1" },
  { src: image2, alt: "Larry - Photo 2" },
  { src: image3, alt: "Larry - Photo 3" },
  { src: image4, alt: "Larry - Photo 4" },
  { src: image5, alt: "Larry - Photo 5" },
  { src: image7, alt: "Larry - Photo 7" },
];

const currentImageIndex = ref(0);
const isShuffling = ref(true);
let shuffleInterval = null;

// Card shuffle logic
const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
};

const setCurrentImage = (index) => {
  currentImageIndex.value = index;
};

const pauseShuffle = () => {
  isShuffling.value = false;
  if (shuffleInterval) {
    clearInterval(shuffleInterval);
  }
};

const resumeShuffle = () => {
  isShuffling.value = true;
  startShuffle();
};

const startShuffle = () => {
  if (shuffleInterval) clearInterval(shuffleInterval);
  shuffleInterval = setInterval(nextImage, 3000); // Change image every 3 seconds
};

const getCardClass = (index) => {
  const diff =
    (index - currentImageIndex.value + images.length) % images.length;
  if (diff === 0) return "card-active";
  if (diff === 1) return "card-next";
  if (diff === 2) return "card-next-2";
  return "card-hidden";
};

const getCardStyle = (index) => {
  const diff =
    (index - currentImageIndex.value + images.length) % images.length;
  const rotation = diff * 5 - 10; // Slight rotation for stacking effect
  const zIndex = images.length - diff;

  return {
    transform: `rotate(${rotation}deg) translateY(${diff * 2}px)`,
    zIndex: zIndex,
    opacity: diff < 3 ? 1 - diff * 0.2 : 0,
  };
};

onMounted(() => {
  startShuffle();
});

onUnmounted(() => {
  if (shuffleInterval) {
    clearInterval(shuffleInterval);
  }
});

// Skills data
const skills = {
  frontend: [
    { name: "Angular", icon: "logos:angular-icon" },
    { name: "Vue.js", icon: "logos:vue" },
    { name: "Nuxt.js", icon: "logos:nuxt-icon" },
    { name: "Next.js", icon: "logos:nextjs-icon" },
    { name: "React", icon: "logos:react" },
    { name: "JavaScript", icon: "logos:javascript" },
    { name: "TypeScript", icon: "logos:typescript-icon" },
    { name: "HTML/CSS", icon: "vscode-icons:file-type-html" },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    { name: "Adobe Commerce", icon: "simple-icons:adobe" },
  ],
  backend: [
    { name: "Node.js", icon: "logos:nodejs-icon" },
    { name: "PHP", icon: "logos:php" },
    { name: "RESTful APIs", icon: "mdi:api" },
    { name: "GraphQL", icon: "logos:graphql" },
    { name: "MongoDB", icon: "logos:mongodb-icon" },
    { name: "PostgreSQL", icon: "logos:postgresql" },
    { name: "Supabase", icon: "logos:supabase-icon" },
  ],
  mobile: [{ name: "React Native", icon: "logos:react" }],
  cloud: [
    { name: "Git", icon: "logos:git-icon" },
    { name: "Docker", icon: "logos:docker-icon" },
    { name: "Docker Compose", icon: "logos:docker-icon" },
    { name: "Linux", icon: "logos:linux-tux" },
  ],
};

// Generate skill levels based on expertise
const skillLevels = {
  // Frontend - Your strongest area
  "Vue.js": 60,
  "Nuxt.js": 65,
  JavaScript: 90,
  "HTML/CSS": 100,
  "Tailwind CSS": 90,
  TypeScript: 85,
  React: 100,
  "Next.js": 95,
  Angular: 87,
  "Adobe Commerce": 95,

  // Backend
  "Node.js": 75,
  "RESTful APIs": 100,
  PHP: 90,
  PostgreSQL: 85,
  Supabase: 70,
  MongoDB: 75,
  GraphQL: 98,

  // Mobile
  "React Native": 90,

  // Cloud/DevOps
  Git: 99,
  Linux: 95,
  Docker: 85,
  "Docker Compose": 85,
};

const skillsWithLevels = computed(() => {
  const result = {};
  for (const [category, techs] of Object.entries(skills)) {
    result[category] = techs.map((tech) => ({
      ...tech,
      level: skillLevels[tech.name] || 70,
    }));
  }
  return result;
});

const formatCategoryName = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};
</script>

<style scoped>
@reference "tailwindcss";

@theme {
  --breakpoint-xs: 345px;
}

/* Card Shuffle Styles */
.about-image-container {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  @apply max-w-3xs xs:max-w-2xs sm:max-w-[340px] md:max-w-[280px] lg:max-w-[400px] xl:max-w-[450px];
}

.card-shuffle-container {
  position: relative;
  width: 100%;
  height: 400px;
  cursor: pointer;
  perspective: 1000px;
}

.card-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}

.about-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.card-active .about-image {
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
}

.card-shuffle-container:hover .card-active .about-image {
  transform: scale(1.02);
}

/* Decorative elements */
.about-decoration {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 100px;
  height: 100px;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6);
  border-radius: 20px;
  opacity: 0.2;
  z-index: -1;
  animation: decorationFloat 4s ease-in-out infinite;
}

.about-decoration-2 {
  position: absolute;
  bottom: -15px;
  left: -15px;
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, #10b981, #06b6d4);
  border-radius: 15px;
  opacity: 0.15;
  z-index: -1;
  animation: decorationFloat 6s ease-in-out infinite reverse;
}

/* Image indicators */
.image-indicators {
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: #3b82f6;
  transform: scale(1.2);
}

.indicator:hover {
  background: #3b82f6;
  opacity: 0.8;
}

@keyframes decorationFloat {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(10deg);
  }
}

/* Skills styles */
.skills-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6 mt-8;
}

.skill-card {
  @apply bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100 dark:border-gray-700;
  transform: translateY(0);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
  @apply shadow-xl;
}

.skill-card-frontend {
  @apply bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-800;
}

.skill-card-backend {
  @apply bg-gradient-to-br from-white to-green-50 dark:from-gray-800 dark:to-gray-800;
}

.skill-card-mobile {
  @apply bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-gray-800;
}

.skill-card-cloud {
  @apply bg-gradient-to-br from-white to-orange-50 dark:from-gray-800 dark:to-gray-800;
}

.skill-header {
  @apply flex items-center gap-4 mb-4;
}

.skill-icon {
  @apply flex items-center justify-center w-12 h-12 rounded-lg text-white shadow-md;
}

.skill-icon-frontend {
  @apply bg-gradient-to-br from-blue-500 to-blue-700;
}

.skill-icon-backend {
  @apply bg-gradient-to-br from-green-500 to-green-700;
}

.skill-icon-mobile {
  @apply bg-gradient-to-br from-purple-500 to-purple-700;
}

.skill-icon-cloud {
  @apply bg-gradient-to-br from-orange-500 to-orange-700;
}

.skill-title {
  @apply text-lg font-bold text-gray-900 dark:text-white;
}

.skill-count {
  @apply text-xs text-gray-500 dark:text-gray-400;
}

.skill-divider {
  @apply h-px w-full bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-600 to-transparent mb-4;
}

.skill-list {
  @apply space-y-3 max-h-[240px] overflow-y-auto pr-2;
}

.skill-item {
  @apply space-y-1;
}

.skill-tech {
  @apply flex items-center justify-between text-sm text-gray-700 dark:text-gray-300 font-medium;
}

.skill-tech-icon {
  @apply w-4 h-4 flex-shrink-0;
}

.skill-level-text {
  @apply text-xs font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full;
}

.skill-bar-container {
  @apply h-1.5 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden;
}

.skill-bar {
  @apply h-full rounded-full transition-all duration-1000 ease-out;
  animation: growBar 1.5s ease-out forwards;
  transform-origin: left;
}

.skill-bar-frontend {
  @apply bg-gradient-to-r from-blue-400 to-blue-600;
}

.skill-bar-backend {
  @apply bg-gradient-to-r from-green-400 to-green-600;
}

.skill-bar-mobile {
  @apply bg-gradient-to-r from-purple-400 to-purple-600;
}

.skill-bar-cloud {
  @apply bg-gradient-to-r from-orange-400 to-orange-600;
}

@keyframes growBar {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

/* Scrollbar styling */
.scrollbar-thin::-webkit-scrollbar {
  width: 4px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  @apply bg-gray-100 dark:bg-gray-700 rounded-full;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  @apply bg-gray-300 dark:bg-gray-600 rounded-full;
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-400 dark:bg-gray-500;
}
</style>

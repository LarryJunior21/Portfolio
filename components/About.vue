<template>
  <section id="about" class="py-16 bg-gray-100 dark:bg-gray-800">
    <div class="container mx-auto px-4">
      <h2
        class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
      >
        About Me
      </h2>
      <div class="flex flex-col md:flex-row gap-8">
        <div class="md:w-1/2">
          <h3
            class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4"
          >
            Who I Am
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            I'm a passionate full-stack developer with 5+ years of experience
            building web applications.
          </p>
          <p class="text-gray-600 dark:text-gray-400">
            When I'm not coding, you can find me hiking, reading tech blogs, or
            experimenting with new technologies.
          </p>
        </div>
        <div class="md:w-1/2">
          <h3
            class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4"
          >
            My Skills
          </h3>
          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="(skill, index) in skills"
              :key="index"
              class="flex items-center gap-2"
            >
              <div
                class="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400"
              ></div>
              <span class="text-gray-700 dark:text-gray-300">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  'JavaScript',
  'TypeScript',
  'Vue.js',
  'Nuxt.js',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'HTML/CSS',
  'Tailwind CSS',
  'Git',
  'Docker',
  'AWS',
  'CI/CD',
  'RESTful APIs',
];
</script>

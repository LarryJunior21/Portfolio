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
            Who am I?
          </h3>

          <p class="text-gray-600 dark:text-gray-400 mb-4">
            I'm a software developer with 5+ years of experience, proficient in
            front end development
          </p>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            I prioritise clean and organised code in my work.
          </p>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            Collaboration is one of my strengths, and I value teamwork as it
            leads to successful project outcomes.
          </p>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            I've worked in both large and small teams on a variety of projects
            and have experience in doing functional work and dealing with the
            business related part of the project.
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
  'PHP',
  'Angular',
  'Vue.js',
  'Nuxt.js',
  'Next.js',
  'React',
  'React Native',
  'Node.js',
  'Adobe E-Commerce',
  'MongoDB',
  'PostgreSQL',
  'HTML/CSS',
  'Tailwind CSS',
  'Git',
  'Docker',
  'RESTful APIs',
  'GraphQL',
];
</script>

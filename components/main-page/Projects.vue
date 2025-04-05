<template>
  <section id="projects" class="py-16">
    <div class="container mx-auto px-4">
      <h2
        class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
      >
        My Projects
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
        >
          <component
            :is="project.image"
            :alt="project.title"
            class="w-full h-48 pt-6 object-cover"
          />
          <div class="p-6">
            <h3
              class="text-xl font-semibold text-gray-800 dark:text-white mb-2"
            >
              {{ project.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="(tech, techIndex) in project.technologies"
                :key="techIndex"
                class="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
              >
                {{ tech }}
              </span>
            </div>
            <div class="flex space-x-3">
              <a
                v-if="project?.demo"
                :href="project.demo"
                class="text-emerald-600 dark:text-emerald-400 hover:underline flex items-center"
              >
                <ExternalLinkIcon class="h-4 w-4 mr-1" />
                Demo
              </a>
              <a
                :href="project.github"
                class="text-emerald-600 dark:text-emerald-400 hover:underline flex items-center"
              >
                <GithubIcon class="h-4 w-4 mr-1" />
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management.',
    image: 'GithubIcon',
    technologies: ['Vue.js', 'Nuxt.js', 'Node.js', 'MongoDB'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Card game | Truco',
    description: 'A collaborative task management app with real-time updates.',
    image: 'GithubIcon',
    technologies: ['React Native', 'JavaScript', 'TypeScript', 'Node.js', 'Express'],
    github: 'https://github.com/LarryJunior21/trucoApp',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather application that displays forecast data.',
    image: 'GithubIcon',
    technologies: ['Vue.js', 'OpenWeather API', 'Chart.js'],
    demo: '#',
    github: '#',
  },
];
</script>

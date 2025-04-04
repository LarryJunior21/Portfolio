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
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-48 object-cover"
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
    image: '/placeholder.svg?height=300&width=500',
    technologies: ['Vue.js', 'Nuxt.js', 'Node.js', 'MongoDB'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management app with real-time updates.',
    image: '/placeholder.svg?height=300&width=500',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather application that displays forecast data.',
    image: '/placeholder.svg?height=300&width=500',
    technologies: ['Vue.js', 'OpenWeather API', 'Chart.js'],
    demo: '#',
    github: '#',
  },
];
</script>

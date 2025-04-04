<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Navigation -->
    <nav
      class="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm z-10 py-4 shadow-sm"
    >
      <div class="container mx-auto px-4 flex justify-between items-center">
        <div class="text-xl font-bold text-gray-800 dark:text-white">
          DevPortfolio
        </div>
        <div class="hidden md:flex space-x-6">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition"
          >
            {{ item.name }}
          </a>
        </div>
        <button
          @click="toggleMobileMenu"
          class="md:hidden text-gray-600 dark:text-gray-300"
        >
          <MenuIcon v-if="!mobileMenuOpen" class="h-6 w-6" />
          <XIcon v-else class="h-6 w-6" />
        </button>
      </div>
      <!-- Mobile menu -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden absolute w-full bg-white dark:bg-gray-800 shadow-md"
      >
        <div class="container mx-auto px-4 py-2">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            @click="mobileMenuOpen = false"
            class="block py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            {{ item.name }}
          </a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="pt-24 pb-16 md:pt-32 md:pb-24">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <h1
              class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Hi, I'm
              <span class="text-emerald-600 dark:text-emerald-400">Alex</span>
            </h1>
            <h2
              class="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6"
            >
              Full Stack Developer
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              I build modern web applications with a focus on performance,
              accessibility, and user experience.
            </p>
            <div class="flex space-x-4">
              <a
                href="#contact"
                class="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition shadow-lg hover:shadow-xl"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                class="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:border-emerald-600 dark:hover:border-emerald-500 text-gray-700 dark:text-gray-300 rounded-lg transition"
              >
                View Projects
              </a>
            </div>
          </div>
          <div class="md:w-1/2 flex justify-center">
            <div
              class="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-600 dark:border-emerald-500 shadow-xl"
            >
              <img
                alt="Developer portrait"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
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
              building web applications. I love solving complex problems and
              creating intuitive user experiences.
            </p>
            <p class="text-gray-600 dark:text-gray-400">
              When I'm not coding, you can find me hiking, reading tech blogs,
              or experimenting with new technologies.
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
                <span class="text-gray-700 dark:text-gray-300">{{
                  skill
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
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

    <!-- Contact Section -->
    <section id="contact" class="py-16 bg-gray-100 dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Get In Touch
        </h2>
        <div class="max-w-2xl mx-auto">
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  for="name"
                  class="block text-gray-700 dark:text-gray-300 mb-2"
                  >Name</label
                >
                <input
                  type="text"
                  id="name"
                  v-model="contactForm.name"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block text-gray-700 dark:text-gray-300 mb-2"
                  >Email</label
                >
                <input
                  type="email"
                  id="email"
                  v-model="contactForm.email"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
            </div>
            <div>
              <label
                for="subject"
                class="block text-gray-700 dark:text-gray-300 mb-2"
                >Subject</label
              >
              <input
                type="text"
                id="subject"
                v-model="contactForm.subject"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
            <div>
              <label
                for="message"
                class="block text-gray-700 dark:text-gray-300 mb-2"
                >Message</label
              >
              <textarea
                id="message"
                v-model="contactForm.message"
                rows="5"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:bg-gray-700 dark:text-white"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                class="w-full px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 bg-gray-900 text-gray-300">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0">
            <p class="text-lg font-semibold">DevPortfolio</p>
            <p class="text-sm">
              © {{ new Date().getFullYear() }} All Rights Reserved
            </p>
          </div>
          <div class="flex space-x-4">
            <a
              v-for="(social, index) in socials"
              :key="index"
              :href="social.url"
              class="text-gray-400 hover:text-white transition"
            >
              <component :is="social.icon" class="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  MenuIcon,
  XIcon,
  ExternalLinkIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
} from 'lucide-vue-next';

// Navigation
const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

// Mobile menu state
const mobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

// Skills
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

// Projects
const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with product management, cart, and checkout functionality.',
    image: '/placeholder.svg?height=300&width=500',
    technologies: ['Vue.js', 'Nuxt.js', 'Node.js', 'MongoDB'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates and team features.',
    image: '/placeholder.svg?height=300&width=500',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Weather Dashboard',
    description:
      'A weather application that displays current and forecasted weather data for any location.',
    image: '/placeholder.svg?height=300&width=500',
    technologies: ['Vue.js', 'OpenWeather API', 'Chart.js'],
    demo: '#',
    github: '#',
  },
];

// Contact form
const contactForm = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const submitForm = () => {
  // In a real application, you would send the form data to your backend
  console.log('Form submitted:', contactForm.value);
  alert('Thank you for your message! I will get back to you soon.');
  // Reset form
  contactForm.value = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
};

// Social media links
const socials = [
  { icon: GithubIcon, url: 'https://github.com/' },
  { icon: LinkedinIcon, url: 'https://linkedin.com/' },
  { icon: TwitterIcon, url: 'https://twitter.com/' },
  { icon: MailIcon, url: 'mailto:contact@example.com' },
];
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>

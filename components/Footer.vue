<template>
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
</template>

<script setup>
// Social media links
const socials = [
  { icon: 'GithubIcon', url: 'https://github.com/LarryJunior21' },
  { icon: 'LinkedinIcon', url: 'https://www.linkedin.com/in/larryjunior2121/' },
  { icon: 'MailIcon', url: 'mailto:larryjunior21@hotmail.com' },
];
</script>

<template>
  <footer class="py-8 bg-gray-900 text-gray-300 z-50 relative">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="flex mb-4 md:mb-0">
          <div
            class="flex flex-col items-center justify-center border-r-1 pr-2 mr-2"
          >
            <p
              class="text-[12px] xs:text-base sm:text-lg font-semibold text-nowrap"
            >
              Larry Junior | Developer
            </p>
            <p class="text-[10px] xs:text-sm sm:text-base">
              © {{ new Date().getFullYear() }} All Rights Reserved
            </p>
          </div>
          <div
            class="flex flex-col sm:flex-row md:mb-0 self-center items-center sm:gap-2"
          >
            <span>Built with</span>
            <img
              class="contain-content w-20 bg-gray-100 dark:bg-gray-600 rounded-md p-2"
              src="~/assets/images/nuxt_logo.png"
              alt="Nuxt Logo"
            />
          </div>
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
  { icon: "GithubIcon", url: "https://github.com/LarryJunior21" },
  { icon: "LinkedinIcon", url: "https://www.linkedin.com/in/larryjunior2121/" },
  { icon: "MailIcon", url: "mailto:larryjunior21@hotmail.com" },
];
</script>

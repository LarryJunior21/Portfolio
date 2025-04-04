<template>
  <section id="home" class="pt-24 pb-16 md:pt-32 md:pb-24">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-8 md:mb-0">
          <h1
            class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Hi, I'm
            <span class="text-emerald-600 dark:text-emerald-400">Larry</span>
          </h1>
          <h2
            class="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6"
          >
            Front End Developer
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
              src="~/assets/images/profile.png"
              alt="Portrait"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<template>
  <section id="projects" class="py-20 px-4 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-6xl mx-auto">
      <div class="scroll-animate text-center mb-16">
        <h2
          class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Featured Projects
        </h2>
        <div
          class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"
        ></div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="scroll-animate project-card"
          :style="{ 'animation-delay': `${index * 0.2}s` }"
        >
          <div class="project-image-container">
            <div v-if="project.imageType === 'component'">
              <component
                :is="project.image"
                :alt="project.title"
                class="w-full h-48 pt-6 object-cover"
              />
            </div>
            <div v-else>
              <NuxtImg
                loading="lazy"
                :src="project.image"
                class="w-full rounded-tr-xl rounded-t-xl h-48 object-cover"
              />
            </div>

            <div class="project-overlay">
              <div class="project-links">
                <a
                  v-if="project.demo"
                  :href="project.demo"
                  class="project-link"
                  target="_blank"
                >
                  <ExternalLinkIcon class="h-5 w-5" />
                </a>
                <a
                  v-if="project.github"
                  :href="project.github"
                  class="project-link"
                  target="_blank"
                >
                  <GithubIcon class="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {{ project.title }}
            </h3>
            <p
              class="text-gray-600 dark:text-gray-300 mb-4"
              v-html="project.description"
            ></p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { IMAGES } from "~/public/constants/images";

const { loadImage } = useImages();

const pokeImg = await loadImage(IMAGES.poke_preview);
const samsungImg = await loadImage(IMAGES.samsung_preview);
const tuvaluImg = await loadImage(IMAGES.tuvalu_preview);
const brickImg = await loadImage(IMAGES.brick_preview);
const compreImg = await loadImage(IMAGES.compre_preview);
const portfolioImg = await loadImage(IMAGES.portfolio_preview);
const pacificImg = await loadImage(IMAGES.pacific_preview);

const projects = [
  {
    title: "Pokemon card generator",
    description: "A page made using Nuxt.js using forms, images, UI and more!",
    image: pokeImg,
    imageType: "path",
    technologies: ["Nuxt.js", "Vue.js", "Tailwind"],
    demo: "/poke-gen",
    github:
      "https://github.com/LarryJunior21/Portfolio/blob/master/pages/poke-gen.vue",
  },
  {
    title: "Samsung Commerce Experience",
    description:
      "I worked on this project as a front end developer, being responsible for the <i>Samsung Care+</i>, <i>Extended Warranty</i> and key lead on <i>Trade-In</i> features on <b>Card and Checkout</b> pages. If you have a samsung store in your country we probably already did it :)",
    image: samsungImg,
    imageType: "path",
    technologies: [
      "Angular",
      "TypeScript",
      "RxJs",
      "SASS",
      "SAP | Spartacus",
      "Jira",
      "Confluence",
      "Github",
    ],
    demo: "https://shop.samsung.com/jp/cart",
  },
  {
    title: "Brick for a Cure",
    description:
      "We used a platform called Raisely, that uses React as a base, to implement a donation campaign in the fight against child cancer.",
    image: brickImg,
    imageType: "path",
    technologies: ["React.js", "Raisely", "JavaScript", "SASS", "CSS"],
    demo: "https://brickforacure.com.au/",
  },
  {
    title: "Tuvalu | The first digital country",
    description:
      "Being the lead developer in this project was a great learning experience, were I renovated the website for a whole country! (<i>Even if it's small it counts ok </i>😄)",
    image: tuvaluImg,
    imageType: "path",
    technologies: ["Next.js", "TypeScript", "SASS", "Tailwind"],
    demo: "https://tuvalu.tv/",
  },
  {
    title: "Pacific National Platform",
    description:
      "Front-end developer on the new employee platform for the Pacific National team, implemented core features such as Redux and Microfrontends for the monorepo",
    image: pacificImg,
    imageType: "path",
    technologies: [
      "Next.js",
      "TypeScript",
      "SASS",
      "Redux",
      "Microfrontends",
      "Storybook",
    ],
  },
  {
    title: "CompreAhora E-Commerce",
    description:
      "I worked as a full-stack developer to complete the UI design then support the Go-Live on backend, using React on the front-end then later Magento 2 (Adobe E-Commerce)",
    image: compreImg,
    imageType: "path",
    technologies: [
      "React.js",
      "PWA",
      "JavaScript",
      "CSS",
      "Docker",
      "Docker Compose",
      "Adobe Commerce",
    ],
    demo: "https://www.compreahora.com.ar/",
  },
  {
    title: "This Portfolio!",
    description:
      "I plan to implement every new idea here and try to integrate more technologies overtime",
    image: portfolioImg,
    imageType: "path",
    technologies: [
      "Nuxt.js",
      "Vue.js",
      "JavaScript",
      "TypeScript",
      "Tailwind",
      "DaisyUI",
      "@emailjs",
      "@nuxt/image",
      "@html2canvas",
    ],
    demo: "/",
    github: "https://github.com/LarryJunior21/Portfolio",
  },
  {
    title: "Card game | Truco",
    description: "A collaborative task management app with real-time updates.",
    image: "GithubIcon",
    imageType: "component",
    technologies: [
      "React Native",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express",
    ],
    github: "https://github.com/LarryJunior21/trucoApp",
  },
];
</script>

<style scoped>
@reference "tailwindcss";
.project-card {
  @apply bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105;
}

.project-image-container {
  position: relative;
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-card:hover .project-image {
  transform: scale(1.1);
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  @apply bg-white text-gray-900 p-3 rounded-full transition-all duration-300 hover:scale-110;
}

.tech-tag {
  @apply bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium;
}
</style>

<template>
  <div class="container py-12 md:py-20">
    <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-8 text-center">My Projects</h1>
    
    <div class="mb-8">
      <div class="flex flex-wrap gap-4 justify-center">
        <button class="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90">
          All
        </button>
        <button class="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80">
          Web Apps
        </button>
        <button class="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80">
          Mobile
        </button>
        <button class="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80">
          UI/UX
        </button>
      </div>
    </div>
    
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="i in 6" :key="i" class="group relative overflow-hidden rounded-lg border bg-background shadow-md transition-all hover:shadow-lg">
        <div class="aspect-video overflow-hidden">
          <img :src="`/placeholder.svg?height=400&width=600&text=Project ${i}`" :alt="`Project ${i}`" class="h-full w-full object-cover transition-all group-hover:scale-105" />
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold">Project Title {{ i }}</h3>
          <p class="mt-2 text-muted-foreground">A brief description of this amazing project and what technologies were used.</p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span class="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">Nuxt.js</span>
            <span class="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">Vue.js</span>
            <span class="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">Tailwind</span>
          </div>
          <div class="mt-4 flex items-center gap-4">
            <a href="#" class="text-sm font-medium text-primary hover:underline">View Project</a>
            <a href="#" class="text-sm font-medium text-muted-foreground hover:text-primary hover:underline">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


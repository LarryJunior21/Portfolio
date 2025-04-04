<template>
  <div class="container py-12 md:py-20">
    <section class="flex flex-col items-center gap-8 pb-12 md:flex-row md:gap-16 md:pb-24">
      <div class="flex-1 space-y-4">
        <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Hi, I'm <span class="text-primary">John Doe</span>
        </h1>
        <p class="text-xl text-muted-foreground">
          Full-Stack Developer specializing in building exceptional digital experiences.
        </p>
        <div class="flex gap-4">
          <a href="#contact" class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
            Contact Me
          </a>
          <a href="#projects" class="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
            View Projects
          </a>
        </div>
      </div>
      <div class="flex-1 flex justify-center">
        <img src="/placeholder.svg?height=400&width=400" alt="Developer Portrait" class="rounded-full h-64 w-64 object-cover border-4 border-primary shadow-lg" />
      </div>
    </section>

    <section id="skills" class="py-12 md:py-24">
      <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Skills & Technologies</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div class="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm border">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mb-4">
            <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
          </svg>
          <h3 class="font-bold">Vue.js</h3>
        </div>
        <div class="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm border">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mb-4">
            <path d="M2 3h20"></path>
            <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path>
            <path d="m7 21 5-5 5 5"></path>
          </svg>
          <h3 class="font-bold">Nuxt.js</h3>
        </div>
        <div class="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm border">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mb-4">
            <path d="M12 2H2v10h10V2Z"></path>
            <path d="M12 12H2v10h10V12Z"></path>
            <path d="M22 2h-10v10h10V2Z"></path>
            <path d="M12 12h10v10H12V12Z"></path>
          </svg>
          <h3 class="font-bold">TypeScript</h3>
        </div>
        <div class="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm border">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mb-4">
            <rect width="20" height="20" x="2" y="2" rx="2" ry="2"></rect>
            <path d="M9 22v-4h6v4"></path>
            <path d="M14 15h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-1"></path>
            <path d="M9 15v-6"></path>
          </svg>
          <h3 class="font-bold">Node.js</h3>
        </div>
      </div>
    </section>

    <section id="projects" class="py-12 md:py-24">
      <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Featured Projects</h2>
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div class="group relative overflow-hidden rounded-lg border bg-background shadow-md transition-all hover:shadow-lg">
          <div class="aspect-video overflow-hidden">
            <img src="/placeholder.svg?height=400&width=600" alt="Project 1" class="h-full w-full object-cover transition-all group-hover:scale-105" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold">E-Commerce Platform</h3>
            <p class="mt-2 text-muted-foreground">A full-featured online store built with Nuxt.js and Strapi.</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">Nuxt.js</span>
              <span class="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">Strapi</span>
              <span class="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">Tailwind</span>
            </div>
            <div class="mt-4 flex items-center gap-4">
              <a href="#" class="text-sm font-medium text-primary hover:underline">View Project</a>
              <a href="#" class="text-sm font-medium text-muted-foreground hover:text-primary hover:underline">GitHub</a>
            </div>
          </div>
        </div>
        <div class="group relative overflow-hidden rounded-lg border bg-background shadow-md transition-all hover:shadow-lg">
          <div class="aspect-video overflow-hidden">
            <img src="/placeholder.svg?height=400&width=600" alt="Project 2" class="h-full w-full object-cover transition-all group-hover:scale-105" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold">Task Management App</h3>
            <p class="mt-2 text-muted-foreground">A productivity app with drag-and-drop interface and real-time updates.</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">Vue.js</span>
              <span class="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">Firebase</span>
              <span class="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">Pinia</span>
            </div>
            <div class="mt-4 flex items-center gap-4">
              <a href="#" class="text-sm font-medium text-primary hover:underline">View Project</a>
              <a href="#" class="text-sm font-medium text-muted-foreground hover:text-primary hover:underline">GitHub</a>
            </div>
          </div>
        </div>
        <div class="group relative overflow-hidden rounded-lg border bg-background shadow-md transition-all hover:shadow-lg">
          <div class="aspect-video overflow-hidden">
            <img src="/placeholder.svg?height=400&width=600" alt="Project 3" class="h-full w-full object-cover transition-all group-hover:scale-105" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold">Weather Dashboard</h3>
            <p class="mt-2 text-muted-foreground">A beautiful weather app with location-based forecasts and animations.</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">Nuxt.js</span>
              <span class="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">OpenWeather API</span>
              <span class="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">GSAP</span>
            </div>
            <div class="mt-4 flex items-center gap-4">
              <a href="#" class="text-sm font-medium text-primary hover:underline">View Project</a>
              <a href="#" class="text-sm font-medium text-muted-foreground hover:text-primary hover:underline">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="py-12 md:py-24">
      <div class="grid gap-8 md:grid-cols-2">
        <div>
          <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">About Me</h2>
          <div class="space-y-4 text-muted-foreground">
            <p>
              I'm a passionate full-stack developer with over 5 years of experience building web applications. I specialize in Vue.js and Nuxt.js for frontend development, and Node.js for backend services.
            </p>
            <p>
              My journey in web development started when I built my first website for a local business. Since then, I've worked with startups and established companies to create responsive, user-friendly applications that solve real-world problems.
            </p>
            <p>
              When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new frameworks and libraries.
            </p>
          </div>
          <div class="mt-8">
            <a href="/resume.pdf" class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              Download Resume
            </a>
          </div>
        </div>
        <div class="space-y-6">
          <h3 class="text-2xl font-bold">Work Experience</h3>
          <div class="space-y-6">
            <div class="rounded-lg border p-6">
              <h4 class="font-bold">Senior Frontend Developer</h4>
              <p class="text-sm text-muted-foreground">TechCorp Inc. • 2020 - Present</p>
              <p class="mt-2">Led the development of a complex SPA using Vue.js and Nuxt.js, resulting in a 40% increase in user engagement.</p>
            </div>
            <div class="rounded-lg border p-6">
              <h4 class="font-bold">Full-Stack Developer</h4>
              <p class="text-sm text-muted-foreground">WebSolutions • 2018 - 2020</p>
              <p class="mt-2">Developed and maintained multiple client projects using Vue.js, Node.js, and MongoDB.</p>
            </div>
            <div class="rounded-lg border p-6">
              <h4 class="font-bold">Junior Developer</h4>
              <p class="text-sm text-muted-foreground">StartupXYZ • 2016 - 2018</p>
              <p class="mt-2">Assisted in building responsive web applications and implementing new features.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="py-12 md:py-24">
      <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Get In Touch</h2>
      <div class="mx-auto max-w-2xl rounded-lg border bg-card p-8 shadow">
        <form class="space-y-6">
          <div class="grid gap-6 md:grid-cols-2">
            <div class="space-y-2">
              <label for="name" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
              <input id="name" type="text" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="John Doe" />
            </div>
            <div class="space-y-2">
              <label for="email" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
              <input id="email" type="email" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="john@example.com" />
            </div>
          </div>
          <div class="space-y-2">
            <label for="subject" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Subject</label>
            <input id="subject" type="text" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Project Inquiry" />
          </div>
          <div class="space-y-2">
            <label for="message" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
            <textarea id="message" class="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Your message here..."></textarea>
          </div>
          <button type="submit" class="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
            Send Message
          </button>
        </form>
      </div>
    </section>
  </div>
</template>


<template>
  <section id="/" class="hero-shell relative min-h-[calc(100vh-72px)] overflow-hidden px-6 py-20 lg:px-14">
    <UiThreeScene />
    <div class="hero-grid" aria-hidden="true" />
    <div class="relative z-[1] mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div class="max-w-3xl" data-reveal>
        <p class="eyebrow mb-7">Independent developer · Sydney / remote</p>
        <h1 class="hero-title">Digital work with<br /><span>clear intent.</span></h1>
        <p class="hero-copy mt-8 max-w-xl">I&apos;m Larry Junior, a full-stack developer crafting useful interfaces, expressive systems, and web experiences that feel effortless to use.</p>
        <div class="mt-10 flex flex-wrap gap-4">
          <a href="#projects" class="hero-cta hero-cta--primary">Explore selected work <ArrowDownIcon data-icon="inline-end" /></a>
          <a href="#contact" class="hero-cta hero-cta--ghost">Start a conversation <ArrowUpRightIcon data-icon="inline-end" /></a>
        </div>
      </div>
      <div class="relative hidden min-h-[420px] lg:block" data-reveal data-reveal-delay="180">
        <div class="hero-note hero-note--top"><span>01 / 04</span><strong>Build with curiosity</strong></div>
        <div class="hero-note hero-note--bottom"><span>Currently exploring</span><strong>Three.js · Nuxt · motion</strong></div>
      </div>
    </div>
    <div class="hero-footer relative z-[1] mx-auto mt-24 flex max-w-7xl items-center justify-between" data-reveal>
      <span class="eyebrow">Scroll to inspect the work</span><span class="scroll-line" />
    </div>
  </section>
</template>

<script setup>
import { ArrowDownIcon, ArrowUpRightIcon } from 'lucide-vue-next';
</script>

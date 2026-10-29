<template>
  <div class="portfolio-page">
    <MainPageHero />
    <MainPageAbout />
    <MainPageProjects />
    <MainPageContact />
  </div>
</template>

<script setup>
onMounted(() => {
  const elements = document.querySelectorAll('[data-reveal]');
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  }), { threshold: 0.12, rootMargin: '0px 0px -60px' });
  elements.forEach((element) => observer.observe(element));
  onBeforeUnmount(() => observer.disconnect());
});
</script>

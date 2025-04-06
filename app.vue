<template>
  <NuxtLayout>
    <NuxtLoadingIndicator :throttle="0" :duration="8000" />
    <UApp>
      <NuxtPage />
    </UApp>
  </NuxtLayout>
</template>

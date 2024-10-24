<script setup lang="ts">
import CopyrightSection from './src/components/CopyrightSection.vue';
import NavBar from './src/components/NavBar.vue';
</script>
<template class="dark:bg-gray-950/95">
  <div class="h-full flex justify-center sm:h-full font-mono dark:text-indigo-50 dark:bg-gray-950/95 min-h-screen	">
    <div class="sm:w-9/12 max-w-5xl sm:bg-white/80 dark:bg-black/30  p-3 sm:h-full min-h-screen">
      <NavBar />
      <main id="page" class="content-center sm:content-none">
        <NuxtPage />
      </main>
      <CopyrightSection />
    </div>
  </div>
</template>

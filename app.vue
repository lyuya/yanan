<script setup lang="ts">
import NavBar from './src/components/NavBar.vue';
</script>
<template>
  <div class="flex sm:justify-center sm:h-full font-mono dark:text-indigo-100 dark:bg-gray-950/95">
    <div class="w-9/12 max-w-5xl bg-white sm:bg-white/80 dark:bg-black/50  p-3 sm:h-screen">
      <NavBar />
      <main id="page">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

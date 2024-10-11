<script setup lang="ts">
import { loadDarkMode } from './src';
import NavBar from './src/components/NavBar.vue';
if (process.client) {
  loadDarkMode()
}
</script>
<template>
  <div class="flex sm:justify-center sm:h-full font-mono dark:text-zinc-300 dark:bg-zinc-900/95">
    <div class="w-9/12 max-w-5xl bg-white sm:bg-white/80 dark:bg-black/50  p-3 sm:h-screen">
      <NavBar />
      <main id="page">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

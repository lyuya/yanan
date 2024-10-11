<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue';
</script>

<template>
    <header class="flex navbar">
        <div class="p-3 sm:h-full flex gap-2 ">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/resume">Resumé</NuxtLink>
            <NuxtLink to="/projects">Projects</NuxtLink>
        </div>
        <ThemeToggle />
    </header>
</template>
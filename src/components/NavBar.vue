<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue';
const route = useRoute();
const inactiveStyle = 'opacity-20 hover:opacity-50';
const activeStyle = 'opacity-100 underline';
</script>

<template>
    <header class="flex justify-between font-bold gap-8">
        <div class="p-3 sm:h-full flex gap-5">
            <NuxtLink to="/" :class="route.path === '/' ? activeStyle : inactiveStyle">Home</NuxtLink>
            <NuxtLink to="/resume" :class="route.path === '/resume' ? activeStyle : inactiveStyle">Resume</NuxtLink>
            <NuxtLink to="/projects" :class="route.path === '/projects' ? activeStyle : inactiveStyle">Projects
            </NuxtLink>
        </div>
        <ClientOnly>
            <ThemeToggle />
        </ClientOnly>
    </header>
</template>
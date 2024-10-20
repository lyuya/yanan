<script setup lang="ts">
import Tags from '~/src/components/Tags.vue';
</script>

<template>
    <div class="h-full flex">
        <div
            class="backdrop-blur-sm bg-white/20 backdrop-opacity-80 shadow rounded-xl sm:bg-transparent sm:backdrop-blur-none sm:shadow-none sm:rounded-none sm:items-center p-5 w-full content-center mx-5">
            <div class="p-5 text-sm space-y-4 ">
                <NuxtLink class="grid sm:flex gap-5 rounded-md p-5 dark:hover:bg-transparent hover:bg-neutral-100/50 dark:sm:hover:bg-gray-900/50 sm:justify-between"
                    to="https://listy-ecru.vercel.app/" target="_blank">
                    <div class="flex gap-2">
                        <Icon name="mdi:list-box-outline" class="my-auto" mode="svg" size="2em"></Icon>
                        <div>
                            <div class="text-lg">Listy</div>
                            <span>A simple task tracker for daily use</span>
                        </div>                        
                    </div>
                    <div class="content-center">
                        <Tags :items="['NextJS', 'React', 'Tailwind', 'Firebase', 'Vitest']" class="sm:justify-end"></Tags>
                    </div>
                </NuxtLink>
                <NuxtLink class="grid sm:flex gap-5 rounded-md p-5 dark:hover:bg-transparent hover:bg-neutral-100/50 dark:sm:hover:bg-gray-900/50 sm:justify-between"
                    to="https://github.com/lyuya/yanan" target="_blank">
                    <div class="flex gap-2">
                        <Icon name="mdi:robot-happy-outline" class="my-auto" mode="svg" size="2em"></Icon>
                        <div>
                            <div class="text-lg">yanan.me</div>
                            <span>My personal website</span>
                        </div>                        
                    </div>
                    <div class="content-center">
                        <Tags :items="['Nuxt', 'Vue', 'Tailwind']" class="sm:justify-end"></Tags>
                    </div>
                </NuxtLink>
                <NuxtLink class="grid sm:flex gap-5 rounded-md p-5 dark:hover:bg-transparent hover:bg-neutral-100/50 dark:sm:hover:bg-gray-900/50 sm:justify-between"
                    to="https://recipy-weld.vercel.app/" target="_blank">
                    <div class="flex gap-2">
                        <Icon name="mdi:food-outline" class="my-auto" mode="svg" size="2em"></Icon>
                        <div>
                            <div class="text-lg">Recipy</div>
                            <span>An AI based recipe search engine</span>
                        </div>                        
                    </div>
                    <div class="content-center">
                        <Tags :items="['NextJS', 'Tailwind', 'OpenAI API']" class="sm:justify-end"></Tags>
                    </div>
                </NuxtLink>
            </div>
        </div>        
    </div>
</template>
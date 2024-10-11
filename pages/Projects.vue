<template>
    <div class="p-5 text-sm space-y-4 w-max">
        <NuxtLink class="flex gap-5 rounded-md p-5 hover:bg-neutral-100/50 dark:hover:bg-gray-900/50"
            to="https://listy-ecru.vercel.app/">
            <Icon name="mdi:list-box-outline" class="my-auto" mode="svg" size="2em"></Icon>
            <div>
                <div class="text-lg">Listy</div>
                <span>A simple task tracker for daily use</span>
            </div>
        </NuxtLink>
        <NuxtLink class="flex gap-5 rounded-md p-5 hover:bg-neutral-100/50 dark:hover:bg-gray-900/50"
            to="https://github.com/lyuya/yanan">
            <Icon name="mdi:robot-happy-outline" class="my-auto" mode="svg" size="2em"></Icon>
            <div>
                <div class="text-lg">yanan.me</div>
                <span>My personal website</span>
            </div>
        </NuxtLink>
    </div>
</template>
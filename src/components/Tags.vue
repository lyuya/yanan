<script setup lang="ts">
defineProps(['items']);

</script>
<template>
    <div class="flex flex-wrap gap-2">
        <div class="font-semibold border border-gray-400 rounded-lg p-1 hover:bg-gray-100 dark:hover:bg-gray-800"
            v-for="item in items">
            {{ item }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark)
</script>
<template>
    <button class="my-auto" @click="toggleDark()">
        <Icon :name="isDark ? 'mdi:brightness-5' : 'mdi:brightness-4'" mode="svg" size="2em" />
    </button>
</template>
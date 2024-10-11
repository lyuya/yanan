<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark)
</script>
<template>
    <button class="my-auto" @click="toggleDark()">
        <Icon :name="isDark ? 'uil:sun' : 'uil:moon'" mode="svg" size="2em" />
    </button>
</template>
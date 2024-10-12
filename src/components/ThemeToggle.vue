<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark)
</script>
<template>
    <button class="my-auto" @click="toggleDark()">
    <Icon v-if="isDark" name="mdi:brightness-5" mode="svg" size="2em" />
    <Icon v-else name="mdi:brightness-4" mode="svg" size="2em" />
</button>
</template>
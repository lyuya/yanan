<script setup lang="ts">
import { toggleDark } from "../index.js"
</script>
<template>
    <button class="my-auto" @click="toggleDark">
        <Icon name="uil:sun" mode="svg" size="2em" />
        <!-- <Icon name="uil:moon" style="color: black" mode="svg" size="2em" /> -->
    </button>
</template>
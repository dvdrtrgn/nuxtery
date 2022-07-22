<script setup lang="ts">

import DefaultDev from './default-dev.vue';

</script>

<template>
    <div dev-template>
        <Script src="https://cdn.tailwindcss.com"></Script>

        <p class="text-center font-mono">
            <i>injecting cdn.tailwindcss.com</i>
        </p>

        <DefaultDev><slot></slot></DefaultDev>
    </div>
</template>

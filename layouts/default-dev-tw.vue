<script setup lang="ts">

import DefaultDevVue from './default-dev.vue';

</script>

<template>
    <div dev-template>
        <Script src="https://cdn.tailwindcss.com"></Script>
        <center><i>using cdn.tailwindcss.com</i></center>
        <DefaultDevVue><slot></slot></DefaultDevVue>
    </div>
</template>

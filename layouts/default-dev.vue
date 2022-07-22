<script setup lang="ts">

import DefaultVue from './default.vue';

</script>

<template>
    <div dev-template>
        <DevHeader></DevHeader>

        <DefaultVue><slot></slot></DefaultVue>

        <DevFooter></DevFooter>
    </div>
</template>

<style lang="scss">

html {
    $headerHeight: 7vh;
    $footerHeight: 5vh;

    body {
        margin: 0;
        margin-top: $headerHeight * 1;
        margin-bottom: $footerHeight * 1.2;
    }
    [dev-header], [dev-footer] {
        font-size: 80%;
        left: 0;
        position: fixed;
        width: 100%;
        z-index: 1;
    }

    [dev-header] {
        top: 0;
        height: $headerHeight;
    }
    [dev-footer] {
        bottom: 0;
        height: $footerHeight;
    }
}

</style>

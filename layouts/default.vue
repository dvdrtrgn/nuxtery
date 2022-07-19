<script setup lang="ts">
import '~/assets/styles/tailwind.css';
import DevHeader from '~~/components/DevHeader.vue';

useTitleHelper();

</script>

<template>
    <div default-template>
        <DevHeader></DevHeader>

        <slot></slot>

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
        left: 0;
        position: fixed;
        width: 100%;
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

<script setup lang="ts">
/* eslint-disable vue/singleline-html-element-content-newline */

</script>

<template>
    <AnnoText before="begin">DateSlug</AnnoText>

    <p class="v-notice my-3">
        <b>{{ new Date().toDateString() }}</b>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam voluptates quas corrupti
        maiores maxime commodi rerum, assumenda quia id quos, vero soluta alias dicta voluptate
        quisquam repellat minima ratione iure.
    </p>

    <AnnoText after="end">DateSlug</AnnoText>
</template>

<style lang="scss">

.v-notice {
    background-color: rgba(yellow, 0.2);
    margin: 0;
    padding: 1em;
}

</style>

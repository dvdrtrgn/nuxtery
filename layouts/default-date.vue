<script setup lang="ts">
/* eslint-disable vue/singleline-html-element-content-newline */
import DefaultDev from './default-dev.vue';

const toggle = ref(false);

</script>

<template>
    <div id="DateTemplate" :class="{ 'dev-active': toggle }">
        <DateSlug />

        <AnnoText before="begin">DefaultDev layout</AnnoText>
        <DefaultDev>
            <AnnoText before="begin">default slot</AnnoText>

            <slot></slot>

            <AnnoText after="end">default slot</AnnoText>
        </DefaultDev>
        <AnnoText after="end">DefaultDev layout</AnnoText>

        <AnnoToggle :init="toggle" @toggle="toggle = $event" />
    </div>
</template>

<style lang="scss">
    h1 {
        font-size: 2rem;
    }
    main {
        margin: 2em auto;
        max-width: 80%;
    }
</style>

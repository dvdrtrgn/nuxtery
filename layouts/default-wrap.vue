<script setup lang="ts">
/* eslint-disable vue/singleline-html-element-content-newline */
import DefaultVue from './default.vue';

import AnnoText from './components/AnnoText.vue';
import AnnoToggle from './components/AnnoToggle.vue';
import AlertSlug from './components/AlertSlug.vue';

const toggle = ref(false);
</script>

<template>
    <div id="DateTemplate" :class="{ 'dev-active': toggle }">
        <AlertSlug />

        <AnnoText before="begin">DefaultVue layout</AnnoText>
        <DefaultVue>
            <AnnoText before="begin">default slot</AnnoText>

            <slot />

            <AnnoText after="end">default slot</AnnoText>
        </DefaultVue>
        <AnnoText after="end">DefaultVue layout</AnnoText>

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

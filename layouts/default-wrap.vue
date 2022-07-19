<script setup lang="ts">
import { useStorage } from '@vueuse/core';
import DefaultVue from './default.vue';

const wrapPick = useStorage('wrap-pick', false);

</script>

<template>
    <div>
        <ClientOnly>
            <div id="DateTemplate" :class="{ 'dev-active': wrapPick }">
                <AlertSlug />

                <AnnoText before="begin">DefaultVue layout</AnnoText>
                <DefaultVue>
                    <AnnoText before="begin">default slot</AnnoText>

                    <slot></slot>

                    <AnnoText after="end">default slot</AnnoText>
                </DefaultVue>
                <AnnoText after="end">DefaultVue layout</AnnoText>

                <AnnoToggle :init="wrapPick" @toggle="wrapPick = $event" />
            </div>
        </ClientOnly>
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

<script setup lang="ts">
import ModTopnav from '~/modules/topnav/ModTopnav.vue';

// defineProps({});
const url = '/api/mock/article';
const articleData = ref(await $fetch(url) as any);

definePageMeta({ layout: 'default' });
useTitleHelper('TITLE: ' + articleData.value.title);
</script>

<template>
    <div>
        <ModTopnav :data="articleData"></ModTopnav>

        <ThemePicker></ThemePicker>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->

<script setup lang="ts">
import ModTopnav from '~/modules/topnav/ModTopnav.vue';

// defineProps({});
const url = '/api/article';
const articleData = ref(await $fetch(url) as any);

definePageMeta({ layout: 'default' });
useTitleHelper('TITLE: ' + articleData.value.title);
</script>

<template>
    <ModTopnav :data="articleData"></ModTopnav>
</template>

<!--
<style lang="scss">
</style>
-->

<script setup lang="ts">
import ModArticle from '~/modules/article/ModArticle.vue';

// defineProps({});
const url = '/api/article';
const articleData = ref(await $fetch(url) as any);

definePageMeta({ layout: 'default' });
useTitleHelper('TITLE: ' + articleData.value.title);
</script>

<template>
    <ModArticle :data="articleData"></ModArticle>
</template>

<!--
<style lang="scss">
</style>
-->

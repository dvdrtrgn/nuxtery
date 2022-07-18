<script setup lang="ts">
import ModArticle from '~/modules/article/ModArticle.vue';

const url = '/api/mock/article';
const articleData = ref(await $fetch(url) as any);

definePageMeta({ layout: 'default' });
useTitleHelper('TITLE: ' + articleData.value.title);
</script>

<template>
    <ModArticle :data="articleData"></ModArticle>
</template>

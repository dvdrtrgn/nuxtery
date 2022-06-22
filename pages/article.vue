<script setup lang="ts">
definePageMeta({ layout: 'default' });

const url = '/api/article';
const articleData = ref(await $fetch(url) as any);

const headData = {
    title: 'TITLE: ' + articleData.value.title,
};

useHead(headData);
</script>

<template>
    <div>
        <h1>Article Data</h1>

        <AuthorList :authors="articleData.authors" />

        <pre data-content>
            <h2>content</h2>
            {{ articleData.content }}
        </pre>
        <pre data-journal>
            <h2>journal</h2>
            {{ articleData.journal }}
        </pre>
        <pre data-leadins>
            <h2>leadins</h2>
            {{ articleData.leadins }}
        </pre>
        <pre data-market>
            <h2>market</h2>
            {{ articleData.market }}
        </pre>
        <pre data-metadata>
            <h2>metadata</h2>
            {{ articleData.metadata }}
        </pre>
    </div>
</template>

<style></style>

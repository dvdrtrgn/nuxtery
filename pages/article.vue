<script setup lang="ts">

const url = '/api/article';
const articleData = ref(await $fetch(url) as any);

</script>

<template>
    <div>
        <h1>Article</h1>
        <pre data-authors>
            <h2>authors</h2>
            {{ articleData.authors }}
        </pre>
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

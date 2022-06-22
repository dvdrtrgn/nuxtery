<script setup lang="ts">
import { makeListFromObject } from '~/utils';

const url = '/api/article';
const looseItems = ref([]);
const articleData = ref(await $fetch(url) as any);

definePageMeta({ layout: 'default' });

useHead({
    title: 'TITLE: ' + articleData.value.title,
});

onMounted(() => {
    looseItems.value = makeListFromObject(articleData.value);
});
</script>

<template>
    <div data-article>
        <h1>Article Data</h1>

        <div>
            <PreCollapse :data="articleData">
                Full object
            </PreCollapse>
        </div>

        <AuthorList :authors="articleData.authors">
            <h2>authors</h2>
        </AuthorList>

        <div>
            <h2>content</h2>
            <PreCollapse :data="articleData.content">
                ex. {{ articleData.content[0].content_html }}
            </PreCollapse>
        </div>
        <div>
            <h2>journal</h2>
            <PreCollapse :data="articleData.journal">
                ex. {{ articleData.journal.journal_name }}
            </PreCollapse>
        </div>
        <div>
            <h2>leadins</h2>
            <PreCollapse :data="articleData.leadins">
                ex. {{ articleData.leadins.data[0].group_class }}
            </PreCollapse>
        </div>
        <div>
            <h2>market</h2>
            <PreCollapse :data="articleData.market">
                ex. {{ articleData.market.market_name }}
            </PreCollapse>
        </div>
        <div>
            <h2>metadata</h2>
            <PreCollapse :data="articleData.metadata">
                # items {{ articleData.metadata.data.length }}
            </PreCollapse>
        </div>

        <div>
            <h2>randos</h2>
            <PreCollapse :data="looseItems">
                # items {{ looseItems.length }}
            </PreCollapse>
        </div>
    </div>
</template>

<style lang="scss">
[dev-grid] {
    align-items: center;
    display: grid;
    grid-auto-flow: column;
}
[data-article] {
    h2 {
        margin-bottom: 0;
        text-transform: capitalize;
    }
    .dev-inset {
        // border: 1px solid red;
        box-shadow: 0 0 0.5rem inset silver;
        // margin: 1em;
        overflow: scroll;
        padding: 1em;
    }
}
</style>

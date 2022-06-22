<script setup lang="ts">
import { makeListFromObject } from '~/utils';
definePageMeta({ layout: 'default' });

const url = '/api/article';
const articleData = ref(await $fetch(url) as any);

const headData = {
    title: 'TITLE: ' + articleData.value.title,
};

const looseItems = ref([]);
onMounted(() => {
    looseItems.value = makeListFromObject(articleData.value);
});

useHead(headData);
</script>

<template>
    <div data-article>
        <h1>Article Data</h1>

        <div data-all>
            <PreCollapse :data="articleData">
                Full object
            </PreCollapse>
        </div>

        <AuthorList :authors="articleData.authors">
            <h2>authors</h2>
        </AuthorList>

        <div data-content>
            <h2>content</h2>
            <PreCollapse :data="articleData.content">
                ex. {{ articleData.content[0].content_html }}
            </PreCollapse>
        </div>
        <div data-journal>
            <h2>journal</h2>
            <PreCollapse :data="articleData.journal">
                ex. {{ articleData.journal.journal_name }}
            </PreCollapse>
        </div>
        <div data-leadins>
            <h2>leadins</h2>
            <PreCollapse :data="articleData.leadins">
                ex. {{ articleData.leadins.data[0].group_class }}
            </PreCollapse>
        </div>
        <div data-market>
            <h2>market</h2>
            <PreCollapse :data="articleData.market">
                ex. {{ articleData.market.market_name }}
            </PreCollapse>
        </div>
        <div data-metadata>
            <h2>metadata</h2>
            <PreCollapse :data="articleData.metadata">
                items # {{ articleData.metadata.data.length }}
            </PreCollapse>
        </div>

        <div data-metadata>
            <h2>randos</h2>
            <PreCollapse :data="looseItems">
                items # {{ looseItems.length }}
            </PreCollapse>
        </div>
    </div>
</template>

<style lang="scss">
[data-article] {
    > div {
        // border: 1px solid red;
        margin: 1em;
        overflow: scroll;
        padding: 1em;
        box-shadow: 0 0 1em inset silver;
    }
}
</style>

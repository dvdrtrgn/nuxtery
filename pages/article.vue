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
        <div dev-flex>
            <h1>Article Data</h1>
            <div dev-inset>
                <PreCollapse :data="articleData">
                    <b>All Data</b>
                </PreCollapse>
            </div>
        </div>

        <h2>JOURNAL / MARKET</h2>
        <div dev-inset>
            <PreCollapse :data="articleData.journal">
                <b>journal: </b>
                ex. {{ articleData.journal.journal_name }}
            </PreCollapse>
            <PreCollapse :data="articleData.market">
                <b>market: </b>
                ex. {{ articleData.market.market_name }}
            </PreCollapse>
        </div>

        <!-- LEADINS -->
        <PreCollapse dev-inset :data="articleData.leadins">
            <b>leadins: </b>
            ex. {{ articleData.leadins.data[0].group_class }}
        </PreCollapse>

        <h2>AUTHORS / CONTENT </h2>
        <div dev-inset>
            <AuthorList :authors="articleData.authors" />
            <div dev-grid>
                <b>content: </b>
                <PreCollapse :data="articleData.content">
                    # items {{ articleData.content.length }}
                </PreCollapse>
            </div>
            <ContentDump :data="articleData.content" />
        </div>

        <h2>RANDOS / METADATA</h2>
        <div dev-inset>
            <PreCollapse :data="looseItems">
                <b>randos: </b>
                # items {{ looseItems.length }}
            </PreCollapse>
            <PreCollapse :data="articleData.metadata">
                <b>metadata: </b>
                # items {{ articleData.metadata.data.length }}
            </PreCollapse>
        </div>
    </div>
</template>

<style lang="scss">
[data-article] {
    h1,h2,h3 {
        margin: 1rem;
        text-align: center;
        text-transform: capitalize;
    }
}
</style>

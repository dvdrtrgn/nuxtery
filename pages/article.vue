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
        <div dev-inset>
            <PreCollapse :data="articleData">
                <b>All Data</b>
            </PreCollapse>
        </div>

        <!-- JOURNAL -->
        <div dev-inset>
            <PreCollapse :data="articleData.journal">
                <b>journal: </b>
                ex. {{ articleData.journal.journal_name }}
            </PreCollapse>
        </div>

        <!-- LEADINS -->
        <div dev-inset>
            <PreCollapse :data="articleData.leadins">
                <b>leadins: </b>
                ex. {{ articleData.leadins.data[0].group_class }}
            </PreCollapse>
        </div>

        <!-- MARKET -->
        <div dev-inset>
            <PreCollapse :data="articleData.market">
                <b>market: </b>
                ex. {{ articleData.market.market_name }}
            </PreCollapse>
        </div>

        <!-- AUTHORS -->
        <div dev-inset>
            <AuthorList :authors="articleData.authors">
                <h2>authors</h2>
            </AuthorList>
        </div>

        <!-- CONTENT -->
        <div dev-inset>
            <div dev-grid>
                <b>content: </b>
                <PreCollapse :data="articleData.content">
                    # items {{ articleData.content.length }}
                </PreCollapse>
            </div>
            <ContentDump :data="articleData.content">
                <!--  -->
            </ContentDump>
        </div>

        <h2>Other</h2>
        <!-- RANDOS -->
        <div dev-inset>
            <PreCollapse :data="looseItems">
                <b>randos: </b>
                # items {{ looseItems.length }}
            </PreCollapse>
        </div>
        <!-- METADATA -->
        <div dev-inset>
            <PreCollapse :data="articleData.metadata">
                <b>metadata: </b>
                # items {{ articleData.metadata.data.length }}
            </PreCollapse>
        </div>
    </div>
</template>

<style lang="scss">
[data-article] {
    h2 {
        margin: 0;
        text-transform: capitalize;
    }
    [dev-inset] {
        // border: 1px solid red;
        box-shadow: 0 0 0.5rem inset silver;
        // margin: 1em;
        overflow: scroll;
        padding: 1em;
    }
}
</style>

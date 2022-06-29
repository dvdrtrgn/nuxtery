<script setup lang="ts">

const url = '/api/tidy';

const articleData = ref(await $fetch(`${url}/article`) as any);
const businessData = ref(await $fetch(`${url}/business`) as any);
const leadinsData = ref(await $fetch(`${url}/leadins`) as any);
const metaData = ref(await $fetch(`${url}/metadata`) as any);
const randoData = ref(await $fetch(`${url}/randos`) as any);

const allData = {
    articleData,
    businessData,
    leadinsData,
    metaData,
    randoData,
};

definePageMeta({ layout: 'default' });
useTitleHelper('TITLE: ' + articleData.value.title);

</script>

<template>
    <div vue-article>
        <h1>Article Data</h1>
        <h2>BUSINESS</h2>
        <h3>Journal / Market</h3>
        <div dev-inset>
            <PreCollapse :data="businessData.journal">
                <b>journal: </b>
                ex. {{ businessData.journal.journal_name }}
            </PreCollapse>
            <PreCollapse :data="businessData.market">
                <b>market: </b>
                ex. {{ businessData.market.market_name }}
            </PreCollapse>
        </div>

        <h2>LEADINS </h2>
        <PreCollapse :data="leadinsData" dev-inset>
            <b>leadins: </b>
            ex. {{ leadinsData.data[0].group_class }}
        </PreCollapse>

        <h2>ARTICLE </h2>
        <h3>Authors / Content</h3>
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

        <h2>ETC</h2>
        <h3>Metadata / Randos</h3>
        <div dev-inset>
            <PreCollapse :data="metaData">
                <b>metadata: </b>
                # items {{ metaData.data.length }}
            </PreCollapse>
            <PreCollapse :data="randoData">
                <b>randos: </b>
            </PreCollapse>
        </div>

        <div dev-flex>
            <div dev-inset>
                <PreCollapse :data="allData">
                    <b>All Data</b>
                </PreCollapse>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
[vue-article] {
    h1,h2,h3 {
        margin: 1rem;
        text-align: center;
        text-transform: capitalize;
    }
}
</style>

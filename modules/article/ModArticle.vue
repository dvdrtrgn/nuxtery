<script setup lang="ts">
import { makeListFromObject } from '~/utils/makeListFromObject';

const props = defineProps({
    data: { type: Object, required: true },
});

//
// DATA
//
const data = props.data;
const htmlClass = useClassHelper(':root');
const looseItems = ref([]);
/*
HOOKS
*/
onMounted(() => {
    htmlClass.add('dev');
    // look for non-object entries (randos)
    looseItems.value = makeListFromObject(props.data);
});
onUnmounted(() => {
    htmlClass.remove('dev');
});

</script>

<template>
    <div vue-article>
        <ArticleHeader></ArticleHeader>

        <FeaturedMedia></FeaturedMedia>

        <ArticleAuthor></ArticleAuthor>

        <div class=" p-10 md:px-20 ">
            <ContentDump :data="data.content"></ContentDump>
        </div>

        <h1>Data</h1>

        <h2>JOURNAL / MARKET</h2>
        <div dev-inset>
            <PreCollapse :data="data.journal">
                <b>journal: </b>
                ex. {{ data.journal.journal_name }}
            </PreCollapse>
            <PreCollapse :data="data.market">
                <b>market: </b>
                ex. {{ data.market.market_name }}
            </PreCollapse>
        </div>

        <!-- LEADINS -->
        <PreCollapse :data="data.leadins" dev-inset>
            <b>leadins: </b>
            ex. {{ data.leadins.data[0].group_class }}
        </PreCollapse>

        <h2>AUTHORS / CONTENT </h2>
        <div dev-inset>
            <AuthorList :authors="data.authors" />
            <div dev-grid>
                <b>content: </b>
                <PreCollapse :data="data.content">
                    # items {{ data.content.length }}
                </PreCollapse>
            </div>
        </div>

        <h2>RANDOS / METADATA</h2>
        <div dev-inset>
            <PreCollapse :data="looseItems">
                <b>randos: </b>
                # items {{ looseItems.length }}
            </PreCollapse>
            <PreCollapse :data="data.metadata">
                <b>metadata: </b>
                # items {{ data.metadata.data.length }}
            </PreCollapse>
        </div>

        <div dev-flex>
            <h2>Article Data</h2>
            <div dev-inset>
                <PreCollapse :data="data">
                    <b>All Data</b>
                </PreCollapse>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
[vue-article] {
    h1,
    h2,
    h3 {
        margin: 1rem;
        text-align: center;
        text-transform: capitalize;
    }
}
</style>

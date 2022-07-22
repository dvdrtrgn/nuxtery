<script setup lang="ts">

import { makeListFromObject } from '~/utils/makeListFromObject';

const props = defineProps <{data:any}>();

//
// DATA
//
const data = ref(props.data);
const htmlClass = useClassHelper(':root');
const looseItems = ref([]); // convert random properties on the root data
//
// HOOKS
//
onMounted(() => {
    htmlClass.add('dev');
    // look for non-object entries (randos)
    looseItems.value = makeListFromObject(props.data);
});
onUnmounted(() => {
    htmlClass.remove('dev');
});

// test correction with ...
data.value.correction = 'Sometimes we make mistakes and need to correct them.';

</script>

<template>
    <div vue-article style="margin: auto; max-width: 1024px;">
        <ArticleHeader></ArticleHeader>

        <FeaturedMedia></FeaturedMedia>

        <ArticleAuthor></ArticleAuthor>

        <div class=" p-10 md:px-20 ">
            <ArticleContentDump :data="data.content">
                <!-- just the article itself -->
            </ArticleContentDump>

            <ArticleCorrection v-if="data.correction">
                {{ data.correction }}
            </ArticleCorrection>
        </div>

        <h1 class=" text-5xl font-bold font-serif bg-rose-100 ">
            Data
        </h1>

        <h2>JOURNAL / MARKET</h2>

        <PreCollapse :data="data.journal">
            <b>journal ex. {{ data.journal.journal_name }} </b>
        </PreCollapse>
        <PreCollapse :data="data.market">
            <b>market ex. {{ data.market.market_name }} </b>
        </PreCollapse>

        <h2>LEADINS</h2>

        <PreCollapse :data="data.leadins" dev-inset>
            <b>leadins (like {{ data.leadins.data[0].group_class }}): </b>
        </PreCollapse>

        <h2>RANDOS / METADATA</h2>

        <PreCollapse :data="looseItems">
            <b>randos # items {{ looseItems.length }}</b>
        </PreCollapse>
        <PreCollapse :data="data.metadata">
            <b>metadata # items {{ data.metadata.data.length }}</b>
        </PreCollapse>

        <h2>REMAINDER</h2>

        <PreCollapse :data="data">
            <b>All Data</b>
        </PreCollapse>
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

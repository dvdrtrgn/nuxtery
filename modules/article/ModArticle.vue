<script setup lang="ts">

import DevArticle from './DevArticle.vue';

const props = defineProps <{data:any}>();

//
// DATA
//
const data = ref(props.data);
data.value.correction = '';
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

        <DevArticle :data="data"></DevArticle>
    </div>
</template>

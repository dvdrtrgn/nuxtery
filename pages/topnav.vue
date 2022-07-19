<script setup lang="ts">

import ModTopnav from '~/modules/topnav/ModTopnav.vue';
import ModFooter from '~~/modules/footer/ModFooter.vue';

import topnav from '~/data/adhoc/topnav.js';
import footer from '~/data/adhoc/footer.js';

const url = '/api/mock/article';
const articleData = ref(await $fetch(url) as any);

definePageMeta({ layout: 'default' });
useTitleHelper('TITLE: ' + articleData.value.title);

</script>
<template>
    <div>
        <ModTopnav :data="topnav"></ModTopnav>

        <ModFooter :data="footer"></ModFooter>

        <ThemePicker></ThemePicker>
    </div>
</template>

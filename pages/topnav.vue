<script setup lang="ts">
import ModTopnav from '~/modules/topnav/ModTopnav.vue';
import topnav from '~/data/adhoc/topnav';

const url = '/api/mock/article';
const articleData = ref(await $fetch(url) as any);
const navData = ref({ topnav });

definePageMeta({ layout: 'default' });
useTitleHelper('TITLE: ' + articleData.value.title);
</script>

<template>
    <div>
        <ModTopnav :data="navData"></ModTopnav>

        <ThemePicker></ThemePicker>
    </div>
</template>

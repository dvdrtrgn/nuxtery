<script setup lang="ts">
/*
const props = defineProps({
    data: { type: Object, required: true },
});
*/
const props = {
    data: {
        channel: {
            primary: 'Banking & Financial Services',
            overline: 'Overlines are cool',
        },
        headlines: {
            main: 'A news headline that is set to grab your attention (Video)',
            sub: 'A subhead that may or may not show up in the frontend...',
        },
        social: {
            list: [
                'social',
                'social',
                'social',
                'social',
                'social',
            ],
        },
    },
};

</script>

<template>
    <div class="p-10 md:p-20 space-y-10">
        <div class=" mock-channel   flex flex-wrap gap-x-5   font-bold  ">
            <div class=" mock-primary   text-green-700 ">
                {{ props.data.channel.primary }}
            </div>
            <div class=" mock-overline ">
                {{ props.data.channel.overline }}
            </div>
        </div>
        <div
            class=" mock-headline   text-5xl font-bold font-serif "
        >
            {{ props.data.headlines.main }}
        </div>
        <div class=" mock-subhead   text-3xl font-bold font-serif text-neutral-500 ">
            {{ props.data.headlines.sub }}
        </div>

        <ArticleHeaderSocial></ArticleHeaderSocial>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->

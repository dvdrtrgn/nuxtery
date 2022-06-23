<script setup lang="ts">
const props = defineProps({
    data: { type: Array[''], required: true },
});

type Chunk = {
    content_html: string;
    content_type: string;
};
const LOOKUP = {
    paragraph: 'p',
};

const betterData = ref([]);

onBeforeMount(() => {
    betterData.value = props.data.map((e: Chunk) => {
        return {
            html: e.content_html,
            tag: LOOKUP[e.content_type] || 'div',
        };
    });
});

</script>

<!-- eslint-disable vue/no-v-html -->
<template>
    <article>
        <slot />
        <client-only>
            <component
                :is="item.tag"
                v-for="item in betterData"
                :key="item.html"
                v-html="item.html"
            />
        </client-only>
    </article>
</template>

<!-- <style lang="scss">
// foo
</style> -->

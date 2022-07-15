<script setup lang="ts">
const props = defineProps({
    data: { type: Object, required: true },
});

</script>

<template>
    <div class="marketSiteLinksBar">
        <ul class="flex">
            <li v-for="item in props.data.items" :key="item.uri">
                <a :href="item.uri">
                    {{ item.title ?? '|' }}
                </a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">

.marketSiteLinksBar {
    display: inline-block;
    overflow: hidden;
    width: 100%;

    ul {
        flex-wrap: wrap;
        width: 110%;
        a {
            display: inline-block;
            padding: 0.25em 1em;
            white-space: nowrap;
        }
    }
}

</style>

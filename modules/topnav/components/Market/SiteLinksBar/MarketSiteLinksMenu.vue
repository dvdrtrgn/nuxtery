<script setup lang="ts">

const props = defineProps({
    data: { type: Object, required: true },
});

</script>

<template>
    <div id="MarketSiteLinksMenu">
        <ul class="flexlist">
            <li v-for="item in props.data.items" :key="item.uri">
                <a :href="item.uri">
                    {{ item.title ?? '|' }}
                </a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
#MarketSiteLinksMenu {
    width: 100%;
    overflow: hidden;

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

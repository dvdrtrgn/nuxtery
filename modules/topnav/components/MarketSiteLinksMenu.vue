<script setup lang="ts">

const props = defineProps({
    data: { type: Object, required: true },
});

</script>

<template>
    <div id="MarketSiteLinksMenuDesktop">
        <ul>
            <li v-for="item in props.data.items" :key="item.uri">
                <a :href="item.uri">
                    {{ item.title ?? '|' }}
                </a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
#MarketSiteLinksMenuDesktop {
    width: 100%;
    overflow: hidden;

    ul {
        display: flex;
        padding: 0;
        width: 125%;
    }
    li {
        list-style: none;
        a {
            padding: 1em;
            text-decoration: none;
            &:hover {
                color: red;
            }
        }
    }
}
</style>

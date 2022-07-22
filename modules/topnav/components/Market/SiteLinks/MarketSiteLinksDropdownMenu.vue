<script setup lang="ts">

defineProps<{
    industries: object,
    sponsoredContent: object,
    events: object,
    products: object,
    publications: object,
}>();

</script>

<template>
    <div>
        <slot><!-- inside topNav --></slot>

        <MarketSiteLinksMenuGrid :data="industries">
            <b>Top sections / industries</b>
        </MarketSiteLinksMenuGrid>

        <MarketSiteLinksMenuGrid :data="sponsoredContent">
            <b>Top sections / sponsored_content</b>
        </MarketSiteLinksMenuGrid>

        <MarketSiteLinksMenuGrid :data="events">
            <b>Top sections / events</b>
        </MarketSiteLinksMenuGrid>

        <MarketSiteLinksMenuGrid :data="products">
            <b>Top sections / products</b>
        </MarketSiteLinksMenuGrid>

        <MarketSiteLinksMenuGrid :data="publications">
            <b>Top sections / publications</b>
        </MarketSiteLinksMenuGrid>
    </div>
</template>

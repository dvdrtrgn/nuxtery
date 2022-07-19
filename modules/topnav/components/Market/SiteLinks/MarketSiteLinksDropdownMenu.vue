<script setup lang="ts">

const props = defineProps({
    data: { type: Object, required: true },
});

</script>

<template>
    <div dev-inset>
        <slot>
            <!-- inside topNav -->
        </slot>
        <MarketSiteLinksMenuGrid :data="props.data.industries">
            <b>Top sections / industries</b>
        </MarketSiteLinksMenuGrid>

        <MarketSiteLinksMenuGrid :data="props.data.sponsored_content">
            <b>Top sections / sponsored_content</b>
        </MarketSiteLinksMenuGrid>

        <MarketSiteLinksMenuGrid :data="props.data.events">
            <b>Top sections / events</b>
        </MarketSiteLinksMenuGrid>

        <MarketSiteLinksMenuGrid :data="props.data.products">
            <b>Top sections / products</b>
        </MarketSiteLinksMenuGrid>

        <MarketSiteLinksMenuGrid :data="props.data.publications">
            <b>Top sections / publications</b>
        </MarketSiteLinksMenuGrid>
    </div>
</template>

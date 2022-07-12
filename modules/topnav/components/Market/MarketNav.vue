<script setup lang="ts">

const props = defineProps({
    data: { type: Object, required: true },
});

</script>

<template>
    <div id="MarketNav">
        <MarketBranding></MarketBranding>
        <MarketPromo></MarketPromo>
        <MarketSubOffer></MarketSubOffer>

        <MarketSiteLinksDropdown>
            <slot></slot>
        </MarketSiteLinksDropdown>

        <MarketSiteLinksBar
            :data="props.data"
        ></MarketSiteLinksBar>

        <MarketSearch></MarketSearch>
    </div>
</template>

<style lang="scss">
#MarketNav {
    border: 1px solid cyan;

    /* hookup area names */
    .chunk.g-content_1 { grid-area: Ga1; }
    .chunk.g-content_2 { grid-area: Ga2; }
    .chunk.g-content_3 { grid-area: Ga3; }
    .chunk.g-content_4 { grid-area: Ga4; }
    .chunk.g-content_5 { grid-area: Ga5; }
    .chunk.g-content_6 { grid-area: Ga6; }

    .layout {
        display: grid;
        gap: 1rem;
        grid-auto-columns: 1fr; /* make even width */
        grid-template-areas: 'Ga1' 'Ga2' 'Ga3' 'Ga4' 'Ga5' 'Ga6';
    }
}
</style>

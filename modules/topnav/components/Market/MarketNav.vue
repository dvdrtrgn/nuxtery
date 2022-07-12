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
    #MarketBranding { grid-area: Ga1; }
    #MarketPromo    { grid-area: Ga2; }
    #MarketSubOffer { grid-area: Ga3; }
    #MarketSiteLinksDropdown { grid-area: Ga4; }
    #MarketSiteLinksBar      { grid-area: Ga5; }
    #MarketSearch            { grid-area: Ga6; }

    display: grid;
    gap: 1rem;
    grid-auto-columns: 1fr; /* make even width */
    grid-template-areas:
    ' Ga1 Ga1 Ga2 Ga2 Ga2 Ga3 Ga3 . '
    ' Ga4 Ga5 Ga5 Ga5 Ga5 Ga5 Ga5 Ga6 '
}
</style>

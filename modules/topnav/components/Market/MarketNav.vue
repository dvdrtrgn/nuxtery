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
    border: 1px solid yellow;

    /* hookup area names */
    #MarketBranding          { grid-area: BR; border: 1px solid red; }
    #MarketPromo             { grid-area: PR; border: 1px solid green; }
    #MarketSubOffer          { grid-area: SO; border: 1px solid blue; }
    #MarketSiteLinksDropdown { grid-area: DD; border: 1px solid cyan; }
    #MarketSiteLinksBar      { grid-area: LB; border: 1px solid orange; }
    #MarketSearch            { grid-area: SR; border: 1px solid purple; }

    display: grid;
    gap: 1rem;
    // grid-auto-columns: 1fr; /* make even width */
    grid-template-areas: ' DD BR SR ' 'PR PR PR' ' LB LB LB ' ' SO SO SO';

    @media (min-width: 768px) {
        grid-template-areas:
        ' BR BR PR PR PR SO SO SO . '
        ' DD LB LB LB LB LB LB LB SR '
    }
}
</style>

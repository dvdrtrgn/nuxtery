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
    #MarketBranding          { grid-area: BRD; border: 1px solid red; }
    #MarketPromo             { grid-area: PRM; border: 1px solid green; display: none; }
    #MarketSubOffer          { grid-area: SOF; border: 1px solid blue; }
    #MarketSiteLinksDropdown { grid-area: DRD; border: 1px solid cyan; }
    #MarketSiteLinksBar      { grid-area: LKS; border: 1px solid orange; display: none; }
    #MarketSearch            { grid-area: SRH; border: 1px solid purple; }

    align-items: center;
    display: grid;
    gap: 1rem;
    // grid-auto-columns: 1fr; /* make even width */
    $SM: 640px;
    $MD: 768px;
    $LG: 1024px;
    $XL: 1280px;

    @media (min-width: 0px) {
        grid-template-areas:
        ' DRD BRD SRH '
        ' SOF SOF SOF '
    }
    @media (min-width: ($SM)) {
        grid-template-areas:
        ' DRD BRD SOF SRH '
    }
    @media (min-width: ($LG)) {
        #MarketPromo             { display: block; }
        #MarketSiteLinksBar      { display: block; }
        grid-template-areas:
        ' BRD BRD PRM PRM ... SOF SRH '
        ' DRD LKS LKS LKS LKS LKS LKS '
    }
    @media (min-width: ($XL)) {
        grid-template-areas:
        ' BRD BRD PRM PRM ... SOF SOF '
        ' DRD LKS LKS LKS LKS LKS SRH '
    }
}
</style>

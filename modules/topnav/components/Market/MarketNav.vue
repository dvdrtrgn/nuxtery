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

@import '~/modules/topnav/dev-defs.scss';

#MarketNav {
    /* hookup area names */
    #MarketBranding          { grid-area: BRD; @include devoutline(red); }
    #MarketPromo             { grid-area: PRM; @include devoutline(green); display: none; }
    #MarketSubOffer          { grid-area: SOF; @include devoutline(blue); }
    #MarketSiteLinksDropdown { grid-area: DRD; @include devoutline(cyan); }
    #MarketSiteLinksBar      { grid-area: LKS; @include devoutline(orange); display: none; }
    #MarketSearch            { grid-area: SRH; @include devoutline(purple); }

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
        ' BRD BRD PRM PRM ... SOF SOF '
        ' DRD LKS LKS LKS LKS LKS SRH '
    }
    @media (min-width: ($XL)) {
        grid-template-areas:
        ' BRD BRD PRM PRM ... SOF SOF '
        ' DRD LKS LKS LKS LKS LKS SRH '
    }
}

</style>

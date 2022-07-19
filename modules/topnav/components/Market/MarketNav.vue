<script setup lang="ts">

import suboffer from '~/data/adhoc/sub-offer';

const props = defineProps({
    data: { type: Object, required: true },
});

// DATA
const topnav = props.data;

</script>

<template>
    <div id="MarketNav">
        <MarketBranding></MarketBranding>
        <MarketPromo></MarketPromo>
        <MarketSubOffer
            :id="suboffer.id"
            :heading="suboffer.heading"
            :href="suboffer.href"
            :text="suboffer.text"
        ></MarketSubOffer>

        <MarketSiteLinks
            :top-items="topnav.topItems"
            :sections="topnav.sections"
        ></MarketSiteLinks>

        <MarketSearch></MarketSearch>
    </div>
</template>

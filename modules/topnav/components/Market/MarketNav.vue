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

        <MarketSiteLinks :data="props.data.topnav">
        </MarketSiteLinks>

        <MarketSearch></MarketSearch>
    </div>
</template>

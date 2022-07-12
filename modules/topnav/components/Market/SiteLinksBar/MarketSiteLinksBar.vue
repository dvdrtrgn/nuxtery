<script setup lang="ts">

const props = defineProps({
    data: { type: Object, required: true },
});

</script>

<template>
    <div id="MarketSiteLinksBar">
        <MarketSiteLinksMenu :data="props.data">
            <!-- mock -->
        </MarketSiteLinksMenu>
    </div>
</template>

<style lang="scss">
</style>

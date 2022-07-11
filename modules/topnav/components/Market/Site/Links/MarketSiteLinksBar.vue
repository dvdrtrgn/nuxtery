<script setup lang="ts">

const props = defineProps({
    data: { type: Object, required: true },
    flyoutOpen: { type: Boolean, required: true },
    searchOpen: { type: Boolean, required: true },
});

const emit = defineEmits(['flyoutFlip', 'searchFlip']);

function flyoutFlip () {
    emit('flyoutFlip', !props.flyoutOpen);
}
function searchFlip () {
    emit('searchFlip', !props.searchOpen);
}

</script>

<template>
    <div id="MarketSiteLinksBar" dev-flex>
        <MarketSiteLinksDropdownTrigger :open="props.flyoutOpen" @click="flyoutFlip">
            <!-- mock -->
        </MarketSiteLinksDropdownTrigger>

        <MarketSiteLinksMenu :data="props.data">
            <!-- mock -->
        </MarketSiteLinksMenu>

        <MarketSearch :open="props.searchOpen" @click="searchFlip">
            <!-- mock -->
        </MarketSearch>
    </div>
</template>

<style lang="scss">
</style>

<script setup lang="ts">

const props = defineProps({
    data: { type: Object, required: true },
});

// DATA
const flyoutOpen = ref(false);
const searchOpen = ref(false);

</script>

<template>
    <div id="MarketNav">
        <div dev-flex>
            <MarketBranding></MarketBranding>
            <MarketPromo></MarketPromo>
        </div>
        <MarketSiteLinksBar
            :data="props.data"
            :flyout-open="flyoutOpen"
            :search-open="searchOpen"
            @flyoutFlip="flyoutOpen = $event"
            @searchFlip="searchOpen = $event"
        ></MarketSiteLinksBar>

        <MarketSiteLinksDropdownMenu>
            <div v-if="flyoutOpen">
                <slot></slot>
            </div>
        </MarketSiteLinksDropdownMenu>
    </div>
</template>

<style lang="scss">
#MarketNav {
    border: 1px solid cyan;
}
</style>

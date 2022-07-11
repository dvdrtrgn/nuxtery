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

<!--
<style lang="scss">
</style>
-->

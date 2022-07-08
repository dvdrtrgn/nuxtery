<script setup lang="ts">

const props = defineProps({
    data: { type: Object, required: true },
});
const flyoutOpen = ref(false);
const searchOpen = ref(false);

</script>

<template>
    <div id="MarketNav">
        <div id="MarketSiteLinksBar" dev-flex>
            <MarketSiteLinksDropdownTrigger :open="flyoutOpen" @click="flyoutOpen = !flyoutOpen">
                <!-- mock -->
            </MarketSiteLinksDropdownTrigger>

            <MarketSiteLinksMenu :data="props.data">
                <!-- mock -->
            </MarketSiteLinksMenu>

            <MarketSearch :open="searchOpen" @click="searchOpen = !searchOpen">
                <!-- mock -->
            </MarketSearch>
        </div>
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

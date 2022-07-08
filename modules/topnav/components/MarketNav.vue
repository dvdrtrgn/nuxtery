<script setup lang="ts">

const props = defineProps({
    data: { type: Object, required: true },
});
const flyoutOpen = ref(false);

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

            <MarketSearch>
                <!-- mock -->
            </MarketSearch>
        </div>

        <MarketSiteLinksDropdownMenu>
            <div v-if="flyoutOpen">
                <p>MarketSiteLinksDropdownMenu</p>
                <p>MarketSiteLinksDropdownMenu</p>
                <p>MarketSiteLinksDropdownMenu</p>
                <p>MarketSiteLinksDropdownMenu</p>
                <p>MarketSiteLinksDropdownMenu</p>
            </div>
        </MarketSiteLinksDropdownMenu>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->

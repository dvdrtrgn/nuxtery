<script setup lang="ts">
const props = defineProps({
    data: { type: Object, required: true },
});

const { topnav } = props.data;
const dev = ref(true);

</script>
<template>
    <div :class="{dev: dev}">
        <div id="TopNav" dev-inset>
            <GlobalSiteNav>
            <!-- mock -->
            </GlobalSiteNav>

            <MarketNav :data="data">
            </MarketNav>
        </div>

        <PreCollapse v-show="dev" dev-inset :data="topnav">
            <b>All data</b>
        </PreCollapse>

        <button @click="dev = !dev">Toggle dev bondaries</button>
    </div>
</template>
<style lang="scss">
@import '~/modules/topnav/styles/';
</style>

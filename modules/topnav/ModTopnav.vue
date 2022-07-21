<script setup lang="ts">

const props = defineProps({
    data: { type: Object, required: true },
});

// DATA
const topnav = props.data;
const dev = useToggle();

// METHODS

</script>

<template>
    <div :class="{dev: dev.active}">
        <div id="TopNav" dev-inset>
            <GlobalSiteNav></GlobalSiteNav>

            <MarketNav :data="topnav"></MarketNav>
        </div>

        <PreCollapse v-show="dev.active" dev-inset :data="topnav">
            <b>All data</b>
        </PreCollapse>

        <button @click="dev.toggle">Toggle dev</button>
    </div>
</template>

<style lang="scss">
@import '~/modules/topnav/styles/';
</style>

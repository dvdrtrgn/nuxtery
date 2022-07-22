<script setup lang="ts">

const props = defineProps({
    data: { type: Object, required: true },
});

// DATA
const topnav = props.data;
const borders = useToggle();

// METHODS

</script>

<template>
    <div :class="{dev: borders.active}">
        <div id="TopNav">
            <GlobalSiteNav></GlobalSiteNav>

            <MarketNav :data="topnav"></MarketNav>
        </div>

        <button @click="borders.handle">Toggle borders</button>

        <BrowserDump label="Nav data">
            <b>All data</b>
            <pre>{{ topnav }}</pre>
        </BrowserDump>
    </div>
</template>

<style lang="scss">
@import '~/modules/topnav/styles/';
</style>

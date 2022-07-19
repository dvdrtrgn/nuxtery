<script setup lang="ts">

const props = defineProps({
    data: { type: Object, required: true },
});

// DATA
const topnav = props.data;
const dev = ref(false);

// METHODS
const toggle = () => (dev.value = !dev.value);

</script>

<template>
    <div :class="{dev: dev}">
        <div id="TopNav" dev-inset>
            <GlobalSiteNav></GlobalSiteNav>

            <MarketNav :data="topnav"></MarketNav>
        </div>

        <PreCollapse v-show="dev" dev-inset :data="topnav">
            <b>All data</b>
        </PreCollapse>

        <button @click="toggle">Toggle dev</button>
    </div>
</template>

<style lang="scss">
@import '~/modules/topnav/styles/';
</style>

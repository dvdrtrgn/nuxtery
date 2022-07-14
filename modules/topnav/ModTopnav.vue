<script setup lang="ts">

const props = defineProps({
    data: { type: Object, required: true },
});

// DATA
const { topnav } = props.data;
const dev = ref(true);

// METHODS
const toggle = () => (dev.value = !dev.value);

</script>

<template>
    <div :class="{dev: dev}">
        <div id="TopNav" dev-inset>
            <GlobalSiteNav></GlobalSiteNav>

            <MarketNav :data="data"></MarketNav>
        </div>

        <PreCollapse v-show="dev" dev-inset :data="topnav">
            <b>All data</b>
        </PreCollapse>

        <button @click="toggle">Toggle dev bondaries</button>
    </div>
</template>

<style lang="scss">
@import '~/modules/topnav/styles/';
</style>

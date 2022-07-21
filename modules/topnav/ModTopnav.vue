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

        <button @click="dev.toggle">Toggle borders</button>

        <BrowserDump label="topnav">
            <template #dev="{toggle, active}">
                {{ toggle }}                {{ active }}
            </template>
            <b>All data</b>
            {{ topnav }}
        </BrowserDump>
    </div>
</template>

<style lang="scss">
@import '~/modules/topnav/styles/';
</style>

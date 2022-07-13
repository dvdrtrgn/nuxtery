<script setup lang="ts">

// defineProps({});

</script>

<template>
    <div id="MarketSiteLinksDropdownMenu">
        <slot></slot>
    </div>
</template>

<style lang="scss">
#MarketSiteLinksDropdownMenu {
    background-color: #eee;
    padding: 1rem;
    position: absolute;
    width: 100%;
    z-index: 1;
}
</style>

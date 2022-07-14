<script setup lang="ts">

/*
DATA */
const dropdownOpen = ref(false);
const $parent = ref(null);

/*
METHODS */
onClickOutside($parent, () => (dropdownOpen.value = false));

</script>

<template>
    <div id="MarketSiteLinksDropdown" ref="$parent">
        <MarketSiteLinksDropdownTrigger
            :open="dropdownOpen"
            @dropdownFlip="dropdownOpen = $event"
        ></MarketSiteLinksDropdownTrigger>

        <MarketSiteLinksDropdownMenu v-if="dropdownOpen">
            <slot></slot>
        </MarketSiteLinksDropdownMenu>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->

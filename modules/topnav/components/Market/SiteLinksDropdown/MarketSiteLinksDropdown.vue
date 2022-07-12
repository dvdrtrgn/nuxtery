<script setup lang="ts">

// DATA
const dropdownOpen = ref(false);
const target = ref(null);
// METHODS
onClickOutside(target, () => (dropdownOpen.value = false));

</script>

<template>
    <div id="MarketSiteLinksDropdown" ref="target">
        <MarketSiteLinksDropdownTrigger
            :open="dropdownOpen"
            @dropdownFlip="dropdownOpen = $event"
        ></MarketSiteLinksDropdownTrigger>

        <MarketSiteLinksDropdownMenu>
            <div v-if="dropdownOpen">
                <slot></slot>
            </div>
        </MarketSiteLinksDropdownMenu>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->

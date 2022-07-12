<script setup lang="ts">

// DATA
const dropdownOpen = ref(false);

</script>

<template>
    <div id="MarketSiteLinksDropdown">
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

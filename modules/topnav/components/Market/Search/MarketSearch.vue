<script setup lang="ts">

// DATA
const dropdownOpen = ref(false);

</script>

<template>
    <div id="MarketSearch">
        <MarketSearchTrigger
            :open="dropdownOpen"
            @dropdownFlip="dropdownOpen = $event"
        ></MarketSearchTrigger>

        <MarketSearchDropdown
            :open="dropdownOpen"
        ></MarketSearchDropdown>
    </div>
</template>

<style lang="scss">
#MarketSearch {
    padding-left: 1em;
    form{
        position: absolute;
        right: 0;
    }
}
</style>

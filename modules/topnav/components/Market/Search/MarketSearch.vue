<script setup lang="ts">

// DATA
const dropdownOpen = ref(false);
const target = ref(null);
// METHODS
onClickOutside(target, () => (dropdownOpen.value = false));

</script>

<template>
    <div id="MarketSearch" ref="target">
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
    form{
        position: absolute;
        right: 0;
    }
}
</style>

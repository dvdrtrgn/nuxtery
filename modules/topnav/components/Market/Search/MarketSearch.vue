<script setup lang="ts">

// DATA
const dropdownOpen = ref(false);
const $parent = ref(null);
// METHODS
const setDropdown = bool => (dropdownOpen.value = bool);
onClickOutside($parent, () => setDropdown(false));

</script>

<template>
    <div id="MarketSearch" ref="$parent">
        <MarketSearchTrigger
            :open="dropdownOpen"
            @dropdownFlip="setDropdown"
        ></MarketSearchTrigger>

        <MarketSearchDropdown
            :open="dropdownOpen"
        ></MarketSearchDropdown>
    </div>
</template>

<!--
<style lang="scss">
#MarketSearch {

}
</style>
 -->

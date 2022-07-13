<script setup lang="ts">

// DATA
const dropdownOpen = ref(false);
const $parent = ref(null);
// METHODS
onClickOutside($parent, () => (dropdownOpen.value = false));

</script>

<template>
    <div id="MarketSearch" ref="$parent">
        <MarketSearchTrigger
            :open="dropdownOpen"
            @dropdownFlip="dropdownOpen = $event"
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

<script setup lang="ts">

// DATA

const dropdownOpen = ref(false);
const $parent = ref(null);

// METHODS

const setDropdown = (evt: boolean) => (dropdownOpen.value = evt);
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

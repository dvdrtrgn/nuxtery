<script setup lang="ts">

// defineProps({});

// DATA
const dropdownOpen = ref(false);
const $parent = ref(null);
// METHODS
const setDropdown = bool => (dropdownOpen.value = bool);
onClickOutside($parent, () => setDropdown(false));

</script>

<template>
    <div id="GlobalAccount" ref="$parent">
        <GlobalAccountTrigger
            :open="dropdownOpen"
            @dropdownFlip="setDropdown"
        ></GlobalAccountTrigger>

        <slot></slot>

        <GlobalAccountMenu
            :open="dropdownOpen"
        ></GlobalAccountMenu>
        <slot></slot>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->

<script setup lang="ts">

// DATA

const dropdownOpen = ref(false);
const $parent = ref(null);

// METHODS

const setDropdown = (evt: boolean) => (dropdownOpen.value = evt);
onClickOutside($parent, () => setDropdown(false));

</script>

<template>
    <div id="GlobalAccount" ref="$parent">
        <GlobalAccountTrigger
            :open="dropdownOpen"
            @dropdownFlip="setDropdown"
        ></GlobalAccountTrigger>

        <GlobalAccountMenu
            :open="dropdownOpen"
        ></GlobalAccountMenu>
    </div>
</template>

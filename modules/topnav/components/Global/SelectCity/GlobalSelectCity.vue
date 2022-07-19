<script setup lang="ts">

import citydata from '~/data/adhoc/city-dropdown';
// interface Props {}
// const props = defineProps<Props>();

// DATA

const dropdownOpen = ref(false);
const $parent = ref(null);

// METHODS

const setDropdown = (evt: boolean) => (dropdownOpen.value = evt);
onClickOutside($parent, () => setDropdown(false));

</script>

<template>
    <div id="SelectCity" ref="$parent">
        <GlobalSelectCityTrigger
            :open="dropdownOpen"
            @dropdownFlip="setDropdown"
        ></GlobalSelectCityTrigger>

        <GlobalSelectCityMenu
            :data="citydata"
            :open="dropdownOpen"
        ></GlobalSelectCityMenu>
    </div>
</template>

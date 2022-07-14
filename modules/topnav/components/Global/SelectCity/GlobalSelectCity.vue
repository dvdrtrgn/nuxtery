<script setup lang="ts">
import citydata from '~/data/adhoc/city-dropdown';
// interface Props {}
// const props = defineProps<Props>();

// DATA
const dropdownOpen = ref(false);
const $parent = ref(null);
// METHODS
const setDropdown = bool => (dropdownOpen.value = bool);
onClickOutside($parent, () => setDropdown(false));

</script>

<template>
    <div id="SelectCity" ref="$parent">
        <GlobalSelectCityTrigger
            :open="dropdownOpen"
            @dropdownFlip="setDropdown"
        ></GlobalSelectCityTrigger>

        <slot></slot>

        <GlobalSelectCityMenu
            :data="citydata"
            :open="dropdownOpen"
        ></GlobalSelectCityMenu>
    </div>
</template>

<style lang="scss">
#SelectCity {
    flex-basis: 66%;
}
</style>

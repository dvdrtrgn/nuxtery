<script setup lang="ts">
import citydata from '~/data/city-dropdown-data';
// interface Props {}
// const props = defineProps<Props>();

// DATA
const dropdownOpen = ref(false);
</script>

<template>
    <div id="SelectCity" class="pl-3 pl-sm-4">
        <GlobalSelectCityTrigger
            :open="dropdownOpen"
            @dropdownFlip="dropdownOpen = $event"
        ></GlobalSelectCityTrigger>

        <GlobalSelectCityDropdown
            :data="citydata"
            :open="dropdownOpen"
        ></GlobalSelectCityDropdown>
        <slot></slot>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->

<script setup lang="ts">

// defineProps({});
const dropdownOpen = ref(false);

</script>

<template>
    <div class="vue-dropdown dropdown nav-top-dropdown nav-top-account-dropdown">
        <GlobalAccountTrigger
            :open="dropdownOpen"
            @dropdownFlip="dropdownOpen = $event"
        ></GlobalAccountTrigger>
        <GlobalAccountDropdown
            :open="dropdownOpen"
        ></GlobalAccountDropdown>
        <slot></slot>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->

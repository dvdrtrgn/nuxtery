<script setup lang="ts">

// defineProps({});

// DATA
const dropdownOpen = ref(false);
const $parent = ref(null);
// METHODS
onClickOutside($parent, () => (dropdownOpen.value = false));

</script>

<template>
    <div id="GlobalAccount" ref="$parent">
        <GlobalAccountTrigger
            :open="dropdownOpen"
            @dropdownFlip="dropdownOpen = $event"
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

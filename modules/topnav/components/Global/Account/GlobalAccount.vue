<script setup lang="ts">

// defineProps({});

// DATA
const dropdownOpen = ref(false);
const target = ref(null);
// METHODS
onClickOutside(target, () => (dropdownOpen.value = false));

</script>

<template>
    <div id="GlobalAccount" ref="target">
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

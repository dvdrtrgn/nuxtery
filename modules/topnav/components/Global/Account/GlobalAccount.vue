<script setup lang="ts">

// defineProps({});
const dropdownOpen = ref(false);

</script>

<template>
    <div id="GlobalAccount">
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

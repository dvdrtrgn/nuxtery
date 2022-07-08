<script setup lang="ts">

defineProps({
    open: { type: Boolean, default: false },
});

</script>

<template>
    <div id="MarketSiteLinksDropdownTrigger">
        <button>FLYOUT {{ !open ? 'OPEN' : 'CLOSE' }}</button>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->

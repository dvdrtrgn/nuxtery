<script setup lang="ts">

const props = defineProps({
    open: { type: Boolean, default: false },
});

</script>

<template>
    <div id="MarketSiteLinksDropdownTrigger">
        <button>FLYOUT {{ !props.open ? 'OPEN' : 'CLOSE' }}</button>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->

<script setup lang="ts">

const props = defineProps({
    open: { type: Boolean, default: false },
});

const emit = defineEmits(['dropdownFlip']);
function dropdownFlip () {
    emit('dropdownFlip', !props.open);
}
</script>

<template>
    <div id="MarketSiteLinksDropdownTrigger">
        <button
            @click="dropdownFlip"
        >
            MENU
            <br />
            {{ !props.open ? 'OPEN' : 'CLOSE' }}
        </button>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->

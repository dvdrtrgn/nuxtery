<script setup lang="ts">
const props = defineProps({
    open: { type: Boolean, required: true },
});

const emit = defineEmits(['dropdownFlip']);
const dropdownFlip = () => emit('dropdownFlip', !props.open);

</script>

<template>
    <div id="MarketSearchTrigger">
        <button
            id="MarketSearchDropDownTrigger"
            @click="dropdownFlip"
        >
            SEARCH
            <br />
            {{ !props.open ? 'OPEN' : 'CLOSE' }}
        </button>
    </div>
</template>

<style lang="scss">
#MarketSearchTrigger {
    text-align: right;
}
</style>

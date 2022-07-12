<script setup lang="ts">
const props = defineProps({
    open: { type: Boolean, required: true },
});

const emit = defineEmits(['dropdownFlip']);

function dropdownFlip () {
    emit('dropdownFlip', !props.open);
}

</script>

<template>
    <div>
        <button
            id="MarketSearchDropDownTrigger"
            @click="dropdownFlip"
        >
            SEARCH
        </button>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->

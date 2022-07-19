<script setup lang="ts">

const props = defineProps({
    open: { type: Boolean, required: true },
});

// METHODS
const emit = defineEmits(['dropdownFlip']);
const dropdownFlip = () => emit('dropdownFlip', !props.open);

</script>

<template>
    <div>
        <button
            id="SelectCityDropdownTrigger"
            data-cy="nav-city-btn"
            data-toggle="dropdown"
            aria-haspopup="true"
            :aria-expanded="props.open"
            @click="dropdownFlip"
        >
            <b>Select a City</b>
            <br />
            {{ !props.open ? 'OPEN' : 'CLOSE' }}
        </button>
        <slot></slot>
    </div>
</template>

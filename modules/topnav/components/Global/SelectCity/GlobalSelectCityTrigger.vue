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
            id="SelectCityDropdownTrigger"
            data-cy="nav-city-btn"
            data-toggle="dropdown"
            aria-haspopup="true"
            :aria-expanded="props.open"
            class="dropdown-toggle dropdown-toggle-remove-bs-icon border-0 rounded-0"
            @click="dropdownFlip"
        >
            <span class="font-weight-bold">Select a City</span>
            <i class="bi bi-chevron-down px-1" style="font-size: 1rem;"></i>
        </button>
        <slot></slot>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->

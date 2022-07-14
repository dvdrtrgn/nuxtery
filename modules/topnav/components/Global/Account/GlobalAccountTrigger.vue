<script setup lang="ts">
const props = defineProps({
    open: { type: Boolean, required: true },
});

// METHODS
const emit = defineEmits(['dropdownFlip']);
const dropdownFlip = () => emit('dropdownFlip', !props.open);

</script>

<template>
    <div id="GlobalAccountTrigger">
        <button
            data-cy="nav-account-dropdown-activator"
            aria-haspopup="true"
            :aria-expanded="props.open"
            @click="dropdownFlip"
        >
            <b>Sign In</b>
            <br />
            {{ !props.open ? 'OPEN' : 'CLOSE' }}
        </button>
    </div>
</template>

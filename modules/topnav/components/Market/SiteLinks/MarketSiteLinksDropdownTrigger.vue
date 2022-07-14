<script setup lang="ts">

const props = defineProps({
    open: { type: Boolean, default: false },
});

const emit = defineEmits(['dropdownFlip']);
const dropdownFlip = () => emit('dropdownFlip', !props.open);

</script>

<template>
    <div class="marketSiteLinksDropdownTrigger">
        <button @click="dropdownFlip">
            MENU
            <br />
            {{ !props.open ? 'OPEN' : 'CLOSE' }}
        </button>
    </div>
</template>

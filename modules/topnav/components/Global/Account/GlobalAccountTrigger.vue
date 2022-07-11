
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
    <div class="vue-dropdown-trigger dropdown-trigger">
        <button
            data-cy="nav-account-dropdown-activator"
            aria-haspopup="true"
            :aria-expanded="props.open"
            tabindex="0"
            class="nav-top-btn nav-account-btn"
            @click="dropdownFlip"
        >
            <span>Sign In</span>
            <i class="icon-custom nav-account-icon"></i>
        </button>
        <slot></slot>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->

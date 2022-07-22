<script setup lang="ts">

const props = defineProps<{ label?: string }>();
const flipper = useToggle(props.label);
const data = {
    ...props,
    ...flipper,
};
</script>
<template>
    <ClientOnly>
        <button @click="flipper.handle">
            {{ label || 'toggle' }}
        </button>

        <div
            v-if="flipper.active"
            dev-inset
        >
            <slot v-bind="data"></slot>
        </div>
    </ClientOnly>
</template>

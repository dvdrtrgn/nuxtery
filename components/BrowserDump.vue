<script setup lang="ts">

const props = defineProps<{ label?: string | null }>();
//
const dev = useToggle(props.label);

</script>
<template>
    <ClientOnly>
        <button @click="dev.toggle">{{ label || 'toggle' }}</button>
        <pre v-if="dev.active"><slot></slot></pre>
    </ClientOnly>
</template>

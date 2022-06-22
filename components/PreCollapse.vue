<script setup lang="ts">

defineProps({
    data: { type: Object, required: true },
});

</script>

<template>
    <details class="dev-inset">
        <summary><slot /></summary>
        <pre>{{ data }}</pre>
    </details>
</template>

<style lang="scss">
//
</style>

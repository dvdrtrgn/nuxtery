<!--
    DEV ONLY: dump any data into into a collapseable element
-->

<script setup lang="ts">
defineProps({
    data: { type: Object, required: true },
});

</script>

<template>
    <details>
        <summary><slot></slot></summary>
        <pre>{{ data }}</pre>
    </details>
</template>

<!-- <style lang="scss">
// foo
</style> -->

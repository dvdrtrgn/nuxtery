<script setup lang="ts">
</script>

<template>
    <div default-template>
        <TheNav />
        <slot />
        <TheFooter />
    </div>
</template>

<style lang="scss">
body {
    margin: 0;
}
[dev-grid] {
    // align-items: center;
    border-bottom: 1px dotted silver;
    display: grid;
    grid-auto-flow: column;

    pre {
        border: 1px dashed silver;
    }
}
</style>

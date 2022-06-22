<script setup lang="ts">
const vitals = computed(() => {
    const { name, path, query } = useRoute();
    return { name, path, query };
});
</script>

<template>
    <footer>
        <code>{{ vitals }}</code>
    </footer>
</template>

<style lang="scss">
footer {
    background-color: #eee;
    box-shadow: 0 0 1em silver;
}
</style>

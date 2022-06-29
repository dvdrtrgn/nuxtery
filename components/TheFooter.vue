<script setup lang="ts">
const configJson = useRuntimeFED();
const vitals = computed(() => {
    const { name, path, query } = useRoute();
    return { name, path, query };
});
</script>

<template>
    <footer>
        <client-only>
            <code>runtime{{ configJson }} <br />route{{ vitals }} </code>
        </client-only>
    </footer>
</template>

<style lang="scss">
footer {
    background-color: #eee;
    box-shadow: 0 0 1em silver;
    overflow: scroll;
}
</style>

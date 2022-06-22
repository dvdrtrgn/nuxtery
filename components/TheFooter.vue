<script setup lang="ts">
const vitals = computed(() => {
    const { name, path, query } = useRoute();
    return { name, path, query };
});
</script>

<template>
    <footer>
        <p>{{ vitals }}</p>
    </footer>
</template>

<style lang="scss">
html {
    $footie: 7vh;

    body {
        margin-bottom: $footie * 2;
    }

    footer {
        background-color: white;
        box-shadow: 0 0 1em black;
        bottom: 0;
        height: $footie;
        left: 0;
        position: fixed;
        width: 100%;
    }
}
</style>

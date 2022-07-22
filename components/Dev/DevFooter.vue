<script setup lang="ts">

import useRuntimeFED from '~~/composables/useRuntimeFED';

const configJson = useRuntimeFED();
const vitals = computed(() => {
    const { name, path, query } = useRoute();
    return { name, path, query };
});

</script>

<template>
    <ClientOnly>
        <footer dev-footer>
            <code>runtime{{ configJson }} <br />route{{ vitals }} </code>
        </footer>
    </ClientOnly>
</template>

<style lang="scss">
[dev-footer] {
    background-color: #eee;
    box-shadow: 0 0 1em silver;
    overflow: scroll;
}
</style>

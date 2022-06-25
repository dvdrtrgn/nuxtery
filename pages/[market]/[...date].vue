<script setup lang="ts">
const route = useRoute();
definePageMeta({ samplePath: '/mpls/2022/02/01' });

const [year, month, day] = route.params.date;

</script>

<template>
    <div>
        <pre>Market: {{ $route.params.market }}</pre>

        <pre>Date: {{ { year, month, day } }}</pre>
    </div>
</template>

<!-- <style lang="scss">
// foo
</style> -->

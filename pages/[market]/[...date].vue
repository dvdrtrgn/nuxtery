<script setup lang="ts">
const route = useRoute();

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

<script setup lang="ts">

definePageMeta({
    samplePath: '/mpls/2022/02/01',
    layout: 'default-dev',
});

const route = useRoute();
const [year, month, day] = route.params.date;

</script>

<template>
    <div>
        <pre>Market: {{ $route.params.market }}</pre>

        <pre>Date: {{ { year, month, day } }}</pre>
    </div>
</template>

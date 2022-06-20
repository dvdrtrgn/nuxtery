<script setup lang="ts">

const route = useRoute();
const [year, month, day] = route.params.date;
const date = { year, month, day };

const { path, query, name } = route;
</script>

<template>
    <div>
        market: <b>{{ $route.params.market }}</b>
        <pre>Date: {{ date }}</pre>
        <pre>{{ { name,path, query } }}</pre>
        <p>params {{ route.params }}</p>
    </div>
</template>

<script setup lang="ts">

const pageXy = useMouse();
const clientXY = useMouseClient();
</script>

<template>
    <pre>
        <div>clientXY: {{ clientXY }}</div>
        <div>pageXY: {{ pageXy }}</div>
    </pre>
</template>

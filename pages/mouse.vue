<script setup lang="ts">

const pageXy = useMouse();
const clientXY = useMouseClient();
</script>

<template>
    <div>
        <code>pageXY: {{ pageXy }}</code>
        <br />
        <code>clientXY: {{ clientXY }}</code>
    </div>
</template>

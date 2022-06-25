<script setup lang="ts">
const pageXY = useMouse();
const clientXY = useMouseClient();
</script>

<template>
    <div>
        <code>pageXY: {{ pageXY }}</code>
        <br />
        <code>clientXY: {{ clientXY }}</code>
    </div>
</template>

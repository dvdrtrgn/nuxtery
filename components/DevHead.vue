<script setup lang="ts">
/*
const props = defineProps({
    data: { type: Object, required: true },
});
*/
</script>

<template>
    <div dev-head>
        v <slot></slot> v
    </div>
</template>

<style lang="scss">
[dev-head] {
    color: red;
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
}
</style>

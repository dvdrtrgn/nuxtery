<script setup lang="ts">
import { secondsToDate } from '../utils';

const props = defineProps({
    name: { type: String, required: true },
    desc: { type: String, required: true },
});

const descAsDate = computed(() => {
    return secondsToDate(props.desc).toLocaleDateString();
});

</script>

<template>
    <li show-line>
        <b>{{ name }}: </b>
        <span>{{ name !== 'updated' ? desc : descAsDate }}</span>
    </li>
</template>

<!-- <style lang="scss">
// foo
</style> -->

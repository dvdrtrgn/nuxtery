<script setup lang="ts">
import { debounceFilter } from '@vueuse/core';

const slow = debounceFilter(30, { maxWait: 333 });
const fast = debounceFilter(15, { maxWait: 333 });

const pageXY = useMouse();
const slowClient = useMouseClient({ eventFilter: slow });
const fastClient = useMouseClient({ eventFilter: fast });
</script>

<template>
    <div>
        <code>pageXY: {{ pageXY }}</code>
        <br />
        <br />
        <code>slowClient: {{ slowClient }}</code>
        <br />
        <code>fastClient: {{ fastClient }}</code>
    </div>
</template>

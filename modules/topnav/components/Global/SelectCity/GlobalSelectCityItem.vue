<script setup lang="ts">
/*
*/
const props = defineProps({
    data: { type: Object, required: true },
});
</script>

<template>
    <div>
        <a
            :href="props.data.href"
            data-ct="Nav : Select City : {{ props.data.name}}"
            data-cy="market-nav-{{ props.data.id}}"
            class="dropdown-item p-0 m-0"
        >
            {{ props.data.name }}
        </a>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->

<script setup lang="ts">

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
            class=""
        >
            {{ props.data.name }}
        </a>
    </div>
</template>

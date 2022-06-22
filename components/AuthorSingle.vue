<script setup lang="ts">

defineProps({
    author: { type: Object, required: true },
});

</script>

<template>
    <slot />
    <b>
        {{ author.data.contact_description }}
    </b>
    <pre>
        {{ author }}
    </pre>
</template>

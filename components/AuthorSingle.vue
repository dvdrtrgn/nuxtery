<script setup lang="ts">

defineProps({
    author: { type: Object, required: true },
});

</script>

<template>
    <slot />
    <PreCollapse :data="author">
        ex. <b>{{ author.data.contact_description }}</b>
    </PreCollapse>
</template>

<script setup lang="ts">

defineProps({
    author: { type: Object, required: true },
});

</script>

<template>
    <div dev-grid>
        <slot />
        <PreCollapse :data="author">
            ex. <b>{{ author.data.contact_description }}</b>
        </PreCollapse>
    </div>
</template>

<style lang="scss">
//
</style>

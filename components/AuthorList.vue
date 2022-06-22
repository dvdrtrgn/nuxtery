<script setup lang="ts">

defineProps({
    authors: { type: Object, required: true },
});

</script>

<template>
    <div>
        <slot />
        <AuthorSingle v-for="(author, id) in authors" :key="id" :author="author">
            <b>author: {{ id }}</b>
        </AuthorSingle>
    </div>
</template>

<style lang="scss">
//
</style>

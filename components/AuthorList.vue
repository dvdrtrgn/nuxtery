<script setup lang="ts">

defineProps({
    authors: { type: Object, required: true },
});

</script>

<template>
    <div>
        <h2>list authors</h2>
        <AuthorSingle v-for="(author, id) in authors" :key="id" :author="author">
            <h3>author {{ id }}</h3>
        </AuthorSingle>
    </div>
</template>

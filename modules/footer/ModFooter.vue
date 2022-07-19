<script setup lang="ts">

const props = defineProps({
    data: { type: Object, required: true },
});

</script>

<template>
    <footer class=" bg-neutral-100 ">
        <FooterHeader></FooterHeader>

        <FooterBody :data="props.data"></FooterBody>

        <FooterFooter></FooterFooter>
    </footer>
</template>

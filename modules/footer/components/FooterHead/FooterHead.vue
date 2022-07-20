<script setup lang="ts">

const props = defineProps({
    data: { type: Object, required: true },
});

</script>

<template>
    <header class="p-20 bg-neutral-200">
        <FooterHeadBack2top></FooterHeadBack2top>

        <FooterHeadNav :data="props.data"></FooterHeadNav>
    </header>
</template>

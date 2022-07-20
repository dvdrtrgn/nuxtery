<script setup lang="ts">

const props = defineProps({
    data: { type: Object, required: true },
});

</script>

<template>
    <div class="p-20 bg-neutral-200">
        <FooterHeaderBack2top></FooterHeaderBack2top>

        <FooterHeaderNav :data="props.data"></FooterHeaderNav>
    </div>
</template>

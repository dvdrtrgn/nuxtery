<script setup lang="ts">

const props = defineProps({
    data: { type: Object, required: true },
});

</script>

<template>
    <div class=" flex py-10 px-20 gap-12 ">
        <FooterBodySubscribers></FooterBodySubscribers>

        <FooterBodyAbout></FooterBodyAbout>

        <FooterBodyShare :data="props.data.social"></FooterBodyShare>

        <FooterBodyAcbj></FooterBodyAcbj>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->

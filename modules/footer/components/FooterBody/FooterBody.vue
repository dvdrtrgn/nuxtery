<script setup lang="ts">

const props = defineProps({
    data: { type: Object, required: true },
});

</script>

<template>
    <div class=" flex py-10 px-20 gap-10 ">
        <FooterBodySubscribers :data="props.data.subscribers"></FooterBodySubscribers>

        <FooterBodyAbout :data="props.data.about"></FooterBodyAbout>

        <FooterBodyShare :data="props.data.share"></FooterBodyShare>

        <FooterBodyAcbj :data="props.data.acbj"></FooterBodyAcbj>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->

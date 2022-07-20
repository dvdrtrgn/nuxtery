<script setup lang="ts">

const props = defineProps({
    data: { type: Object, required: true },
});

</script>

<template>
    <section
        class="
            p-10 gap-10
            md:flex md:px-20
        "
    >
        <FooterBodySubscribe :data="props.data.subscribers"></FooterBodySubscribe>

        <FooterBodyAbout :data="props.data.about"></FooterBodyAbout>

        <FooterBodyShare :data="props.data.share"></FooterBodyShare>

        <FooterBodyAcbj :data="props.data.acbj"></FooterBodyAcbj>
    </section>
</template>

<!--
<style lang="scss">
</style>
-->

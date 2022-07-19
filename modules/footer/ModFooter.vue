<script setup lang="ts">

const props = defineProps({
    data: { type: Object, required: true },
});

</script>

<template>
    <footer class="footer m-12 bg-slate-200">
        <FooterHeader></FooterHeader>

        <div class="footer__body flex gap-20">
            <FooterBodySubscribers></FooterBodySubscribers>

            <FooterBodyAbout></FooterBodyAbout>

            <FooterBodyShare :data="props.data.social"></FooterBodyShare>

            <FooterBodyAcbj></FooterBodyAcbj>
        </div>

        <FooterFooter></FooterFooter>
    </footer>
</template>

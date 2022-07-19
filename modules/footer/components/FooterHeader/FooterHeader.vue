<script setup lang="ts">
import FooterHeaderNav from './FooterHeaderNav.vue';
/*
const props = defineProps({
    data: { type: Object, required: true },
});
*/
</script>

<template>
    <div class="footer__header">
        <DevHead>Footer Header</DevHead>
        <div
            class="footer__back-to-top"
            data-ct="2016 Footer :  : Back to Top"
        >
            <a
                href="javascript:void(0);"
                onclick="window.scrollTo(0,0)"
            >
                Back to Top
                <i class="icon-up-dir"></i>
            </a>
        </div>

        <FooterHeaderNav></FooterHeaderNav>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->

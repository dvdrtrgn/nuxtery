<script setup lang="ts">
/*
const props = defineProps({
    data: { type: Object, required: true },
});
*/
</script>

<template>
    <div id="MarketBranding">
        <div
            role="link"
            class="order-0 flex-grow-1 flex-sm-grow-0 text-center header__logo"
        >
            <a
                href="bizjournals"
                data-ct="Logo"
                class="d-flex align-items-center text-center mx-auto h-100 logo-link"
            >
                <img
                    src="/assets/images/bizjournals-logo.svg"
                    alt="The Business Journals"
                    data-cy="nav-banner-brand-img"
                    onerror="this.onerror=null;this.src=this.src.replace('.svg','.png');"
                    class="nav-banner-brand-img m-auto"
                /></a>
        </div>
    </div>
</template>

<style lang="scss">
#MarketBranding {
    background-color: steelblue;
    width: 200px;
}
</style>

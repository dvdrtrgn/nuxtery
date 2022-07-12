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
            class=""
        >
            <a
                href="bizjournals"
                data-ct="Logo"
                class=""
            >
                <img
                    src="/assets/images/bizjournals-logo.svg"
                    alt="The Business Journals"
                    data-cy="nav-banner-brand-img"
                    onerror="this.onerror=null;this.src=this.src.replace('.svg','.png');"
                    class=""
                /></a>
        </div>
    </div>
</template>

<style lang="scss">
#MarketBranding {
    background-color: steelblue;
    padding: 0.5rem 1rem;
    width: 9rem;
}
</style>

<script setup lang="ts">
/*
const props = defineProps({
    data: { type: Object, required: true },
});
*/
const svg2png = 'this.onerror = null; this.src = this.src.replace(\'.svg\',\'.png\');'; // is this for old IE??
</script>

<template>
    <div id="MarketBranding">
        <a href="/" data-ct="Logo">
            <img
                src="/assets/images/bizjournals-logo.svg"
                alt="The Business Journals"
                data-cy="nav-banner-brand-img"
                :onerror="svg2png"
                class=""
            />
        </a>
    </div>
</template>

<style lang="scss">
#MarketBranding {
    background-color: var(--C-primary);
    background-image: url('/assets/images/stripes-12px.png');
    background-repeat: repeat;
    width: 18rem;

    a { display: block; }
    img { margin: 1rem 3rem; }
}
</style>

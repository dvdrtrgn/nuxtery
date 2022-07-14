<script setup lang="ts">

// DATA

// is this for old IE??
const svg2png = `this.onerror = null;
this.src = this.src.replace('.svg','.png');`;

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

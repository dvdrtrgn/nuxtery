<script setup lang="ts">
/*
const props = defineProps({
    data: { type: Object, required: true },
});
*/
</script>

<template>
    <ul class="footer__logo-and-nav-links flex gap-12">
        <li class="footer__logo">
            <a
                class="footer__logo-link" href="/"
                data-ct="2016 Footer : Logo"
            >
                <img
                    src="https://assets.bizjournals.com/static/img/logos/horizontal-black/bizjournals-logo.svg"
                    style="height: 2rem;"
                    alt=""
                    onerror="this.onerror=null;this.src=this.src.replace('.svg','.png');"
                    class="footer__logo-img"
                />
            </a>
        </li>
        <li
            class="hidden--xs hidden--sm"
            data-ct="2016 Footer : Home"
        >
            <a
                href="https://www.bizjournals.com"
            >Home</a>
        </li>
        <li
            class="hidden--xs hidden--sm"
            data-ct="2016 Footer : News"
        >
            <a
                href="https://www.bizjournals.com/news"
            >News</a>
        </li>
        <li
            class="hidden--xs hidden--sm"
            data-ct="2016 Footer : People"
        >
            <a
                href="https://www.bizjournals.com/potm"
            >People</a>
        </li>
        <li
            class="hidden--xs hidden--sm"
            data-ct="2016 Footer : Companies"
        >
            <a
                href="https://www.bizjournals.com/bizjournals/datacenter/companies"
            >Companies</a>
        </li>
        <li
            class="hidden--xs hidden--sm"
            data-ct="2016 Footer : Events"
        >
            <a
                href="https://www.bizjournals.com/calendar/bizjournals"
            >Events</a>
        </li>
        <li
            class="hidden--xs hidden--sm"
            data-ct="2016 Footer : Store"
        >
            <a
                href="https://promo.bizjournals.com/bizjournals/store/"
            >Store</a>
        </li>
    </ul>
</template>

<!--
<style lang="scss">
</style>
-->

<script setup lang="ts">

const data = [
    {
        ct: '2016 Footer : About The Business Journals',
        href: 'https://www.bizjournals.com/about-us/',
        text: ' About The Business Journals',
    },
    {
        ct: '2016 Footer : Advertise',
        href: 'https://advertise.bizjournals.com?ana=om_wb_dg_ftr',
        text: ' Advertise',
    },
    {
        ct: '2016 Footer : Help &amp; FAQs',
        href: 'https://support.bizjournals.com/en/',
        text: ' Help &amp; FAQs',
    },
    {
        ct: '2016 Footer : Circulation Sales Center Directory',
        href: 'https://www.bizjournals.com/about-us/call-center',
        text: 'Circulation Sales Center Directory',
    },
];

</script>

<template>
    <div>
        <div class="">
            <h4 class="link-list-title">
                About &amp; Contact
            </h4>
            <ul class="link-list">
                <li
                    v-for="item in data"
                    :key="item.text"
                    :data-ct="item.ct"
                >
                    <a :href="item.href">
                        <span class="link-list-item__title">
                            {{ item.text }}
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->

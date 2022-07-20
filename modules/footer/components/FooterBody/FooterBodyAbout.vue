<script setup lang="ts">

const props = {
    title: 'About & Contact',
    list: [
        {
            track: '2016 Footer : About The Business Journals',
            href: 'https://www.bizjournals.com/about-us/',
            text: 'About The Business Journals',
        },
        {
            track: '2016 Footer : Advertise',
            href: 'https://advertise.bizjournals.com?ana=om_wb_dg_ftr',
            text: 'Advertise',
        },
        {
            track: '2016 Footer : Help & FAQs',
            href: 'https://support.bizjournals.com/en/',
            text: 'Help & FAQs',
        },
        {
            track: '2016 Footer : Circulation Sales Center Directory',
            href: 'https://www.bizjournals.com/about-us/call-center',
            text: 'Circulation Sales Center Directory',
        },
    ],
};

</script>

<template>
    <div class="">
        <h4 class="link-list-title font-bold">
            {{ props.title }}
        </h4>
        <FooterListLinks :list="props.list"></FooterListLinks>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->

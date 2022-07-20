<script setup lang="ts">

const props = {
    title: 'ACBJ',
    list: [
        {
            track: '2016 Footer : American City Business Journals',
            href: 'http://www.acbj.com/',
            text: 'American City Business Journals',
        },
        {
            track: '2016 Footer : AmericanInno',
            href: 'https://www.bizjournals.com/inno',
            text: 'AmericanInno',
        },
        {
            track: '2016 Footer : BizEquity',
            href: 'https://www.bizequity.com/',
            text: 'BizEquity',
        },
        {
            track: '2016 Footer : BizLeads',
            href: 'https://www.bizleads.com/',
            text: 'BizLeads',
        },
        {
            track: '2016 Footer : Bizwomen',
            href: 'https://www.bizjournals.com/bizwomen',
            text: 'Bizwomen',
        },
        {
            track: '2016 Footer : Hemmings',
            href: 'http://www.hemmings.com/',
            text: 'Hemmings',
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

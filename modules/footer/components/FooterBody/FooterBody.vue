<script setup lang="ts">

const props = {
    subscribers: [
        {
            track: '2016 Footer : Manage your Account',
            href: '/myaccount?market=bizjournals',
            text: 'Manage your Account',
        },
        {
            track: '2016 Footer : Manage My Advertising',
            href: 'https://www.bizjournals.com/ads',
            text: 'Manage My Advertising',
        },
        {
            track: '2016 Footer : Book of Lists',
            href: 'https://www.bizjournals.com/book-of-lists',
            text: 'Book of Lists',
        },
    ],
    about: [
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
    share: {
        follow: [
            {
                href: 'https://twitter.com/MBJMemphis',
                cSlug: 'twitter',
                text: 'Twitter',
                track: '2016 Footer : Memphis : twt',
            },
            {
                href: 'http://www.linkedin.com/company/memphis-business-journal',
                cSlug: 'linkedin',
                text: 'LinkedIn',
                track: '2016 Footer : Memphis : lkn',
            },
            {
                href: 'http://www.facebook.com/pages/memphis-business-journal/106053621879',
                cSlug: 'facebook',
                text: 'Facebook',
                track: '2016 Footer : Memphis : fbk',
            },
            {
                href: 'https://instagram.com/mbjmemphis',
                cSlug: 'instagram',
                text: 'Instagram',
                track: '2016 Footer : Memphis : ins',
            },
        ],
        signup: [{
            track: '2016 Footer : Sign Up Now',
            href: 'https://www.bizjournals.com/account/bizjournals/newsletters',
            text: 'Sign Up Now',
        }],
    },
    acbj: [
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
    <div class=" flex py-10 px-20 gap-10 ">
        <FooterBodySubscribers :data="props.subscribers"></FooterBodySubscribers>

        <FooterBodyAbout :data="props.about"></FooterBodyAbout>

        <FooterBodyShare :data="props.share"></FooterBodyShare>

        <FooterBodyAcbj :data="props.acbj"></FooterBodyAcbj>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->

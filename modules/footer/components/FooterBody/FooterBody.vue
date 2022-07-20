<script setup lang="ts">

const props = {
    data: {
        social: [
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
    },
};

</script>

<template>
    <div class=" flex py-10 px-20 gap-10 ">
        <FooterBodySubscribers></FooterBodySubscribers>

        <FooterBodyAbout></FooterBodyAbout>

        <FooterBodyShare :data="props.data.social"></FooterBodyShare>

        <FooterBodyAcbj></FooterBodyAcbj>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->

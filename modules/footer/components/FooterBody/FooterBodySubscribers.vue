<script setup lang="ts">

const props = {
    title: 'Subscribers',
    list: [
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
};

</script>

<template>
    <div>
        <div class=" subscriber-promo ">
            <h4 class="link-list-title font-bold">
                {{ props.title }}
            </h4>
            <FooterListLinks :list="props.list"></FooterListLinks>
        </div>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->

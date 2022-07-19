<script setup lang="ts">
const data = [
    {
        href: '/useragreement',
        text: 'User Agreement',
    },
    {
        href: '/privacy',
        text: 'Privacy Policy',
    },
    {
        href: '/privacy#VII',
        text: 'Ad Choices',
    },
    {
        href: '/privacy#X',
        text: 'Your California Privacy Rights',
    },
    {
        href: '/useragreement',
        text: 'User Agreement',
    },
    {
        href: '/useragreement',
        text: 'User Agreement',
    },
];
</script>

<template>
    <div class="py-10 px-20  bg-neutral-50">
        <ul class="flex gap-10">
            <li v-for="item in data" :key="item.href">
                <a :href="item.href">
                    {{ item.text }}
                </a>
            </li>
        </ul>
        <p>
            © 2022 American City Business Journals. All rights reserved.
            Use of and/or registration on any portion
            of this site constitutes acceptance of our
            <a href="/useragreement">
                User Agreement
            </a>
            (updated January 1, 2021) and
            <a href="/privacy">
                Privacy Policy and Cookie Statement
            </a>
            (updated July 1, 2022).
            The material on this site may not be reproduced, distributed,
            transmitted, cached or otherwise used, except with the prior
            written permission of American City Business Journals.
        </p>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->

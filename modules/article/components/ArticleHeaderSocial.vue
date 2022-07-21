<script setup lang="ts">

const props = {
    list: [
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
};

</script>

<template>
    <ul class=" flex flex-wrap gap-5 pt-5 ">
        <li
            v-for="item in props.list"
            :key="item.text"
        >
            <a
                :href="item.href"
                class="btn btn--social btn--{{cSlug}}"
                target="_blank"
                rel="noopener"
                :data-ct="item.track"
            >
                <i class="bi-{{cSlug}}"></i>
                <span class="icon__hidden-text">
                    {{ item.text }}
                </span>
            </a>
        </li>
    </ul>
</template>

<!--
<style lang="scss">
</style>
-->

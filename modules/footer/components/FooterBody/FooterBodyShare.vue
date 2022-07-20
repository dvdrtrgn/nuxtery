<script setup lang="ts">

const props = defineProps({
    data: { type: Object, required: true },
});

</script>

<template>
    <div>
        <h4 class="link-list-title font-bold">
            Follow Us
        </h4>

        <FooterListSocials :list="props.data"></FooterListSocials>

        <hr class="my-5" />

        <div class="">
            <h4 class="link-list-title font-bold">
                Newsletters
            </h4>
            <FooterListLinks
                :list="[{
                    track: '2016 Footer : Sign Up Now',
                    href: 'https://www.bizjournals.com/account/bizjournals/newsletters',
                    text:'Sign Up Now'
                }]"
            ></FooterListLinks>
        </div>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->

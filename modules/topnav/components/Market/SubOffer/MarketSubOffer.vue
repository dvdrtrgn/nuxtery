<script setup lang="ts">

interface Props {
    heading: string,
    id?: string,
    href: string,
    text: string,
}
defineProps<Props>();

</script>

<template>
    <div id="MarketSubOffer" role="link">
        <div id="cxense_marketing_nav_sub_offer">
            <div class="sub_offer_heading">
                {{ heading }}
            </div>
            <div class="sub_offer_link">
                <a :id="id" :href="href" class="btn primary">
                    {{ text }}
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import data from '~/data/adhoc/sub-offer';

// defineProps({});

</script>

<template>
    <div id="MarketSubOffer" role="link">
        <div id="cxense_marketing_nav_sub_offer">
            <div class="sub_offer_heading">
                {{ data.heading }}
            </div>
            <div class="btn sub_offer_link">
                <a :id="data.id" :href="data.href">
                    {{ data.text }}
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
#MarketSubOffer {
    text-align: center;

    @media (min-width: 640px) {
        text-align: right;
    }
}
</style>

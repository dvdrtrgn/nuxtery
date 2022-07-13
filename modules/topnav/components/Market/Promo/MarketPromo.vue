<script setup lang="ts">
import data from '~/data/adhoc/market-promo';

</script>

<template>
    <div id="MarketPromo">
        <div role="link">
            <a :href="data.link">
                <div class="title">
                    {{ data.title }}
                </div>
                <div class="body">
                    {{ data.body }}
                    <span title="add a chevron">
                        ﹥
                    </span>
                </div>
            </a>
        </div>
    </div>
</template>

<style lang="scss">
#MarketPromo {
    text-emphasis: none;
    .title {
        font-size: x-small;
        font-weight: 100;
        text-transform: uppercase;
    }
    .body {
        font-size: small;
        font-weight: 600;
    }
}
</style>

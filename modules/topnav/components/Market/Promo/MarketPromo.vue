<script setup lang="ts">

// defineProps({});

</script>

<template>
    <div>
        <div id="MarketPromo" role="link" class="d-none d-sm-none order-sm-0 d-md-flex flex-sm-grow-1 align-items-center">
            <a href="/bizjournals/the-playbook" class="px-4 ml-2">
                <div class="promo-overline text-uppercase">
                    The Playbook
                </div> <div class="promo-title font-weight-bold">
                    What business owners need to know to grow and protect their businesses<i class="bi bi-chevron-right"></i>
                </div>
            </a>
        </div>
        <slot></slot>
    </div>
</template>

<style lang="scss">
#MarketPromo {
    border: 1px solid green;
    max-width: 20%;
}
</style>

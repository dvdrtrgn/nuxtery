<script setup lang="ts">

const props = defineProps({
    data: { type: Object, required: true },
});

</script>

<template>
    <div>
        <div class=" subscriber-promo ">
            <h4 class="link-list-title font-bold">
                Subscribers
            </h4>
            <FooterListLinks :list="props.data"></FooterListLinks>
        </div>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->

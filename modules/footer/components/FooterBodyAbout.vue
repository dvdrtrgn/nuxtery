<script setup lang="ts">

const props = defineProps({
    data: { type: Object, required: true },
});

</script>

<template>
    <div class="">
        <h4 class="link-list-title font-bold">
            About & Contact
        </h4>
        <FooterListLinks :list="props.data"></FooterListLinks>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->

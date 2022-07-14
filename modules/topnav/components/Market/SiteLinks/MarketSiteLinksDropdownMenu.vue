<script setup lang="ts">

const props = defineProps({
    data: { type: Object, required: true },
});

</script>

<template>
    <div dev-inset>
        <slot></slot>

        <PreCollapse :data="props.data.industries">
            <b>Top sections / industries</b>
        </PreCollapse>

        <PreCollapse :data="props.data.sponsored_content">
            <b>Top sections / sponsored_content</b>
        </PreCollapse>

        <PreCollapse :data="props.data.events">
            <b>Top sections / events</b>
        </PreCollapse>

        <PreCollapse :data="props.data.products">
            <b>Top sections / products</b>
        </PreCollapse>

        <PreCollapse :data="props.data.publications">
            <b>Top sections / publications</b>
        </PreCollapse>
    </div>
</template>

<style lang="scss">

#MarketSiteLinksDropdownMenu {
    background-color: #eee;
    padding: 1rem;
    position: absolute;
    width: 100%;
    z-index: 1;
}

</style>

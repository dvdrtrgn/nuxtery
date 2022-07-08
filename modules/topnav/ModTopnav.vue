<script setup lang="ts">
const props = defineProps({
    data: { type: Object, required: true },
});

const { topnav } = props.data;
const { topItems, sections } = topnav;

</script>

<template>
    <div>
        <MarketNav :data="topItems">
            <div dev-inset>
                <PreCollapse :data="sections.industries">
                    <b>Top sections / industries</b>
                </PreCollapse>

                <PreCollapse :data="sections.sponsored_content">
                    <b>Top sections / sponsored_content</b>
                </PreCollapse>

                <PreCollapse :data="sections.events">
                    <b>Top sections / events</b>
                </PreCollapse>

                <PreCollapse :data="sections.products">
                    <b>Top sections / products</b>
                </PreCollapse>

                <PreCollapse :data="sections.publications">
                    <b>Top sections / publications</b>
                </PreCollapse>
            </div>
        </MarketNav>

        <PreCollapse dev-inset :data="sections">
            <b>Top sections</b>
        </PreCollapse>
        <PreCollapse dev-inset :data="topnav">
            <b>All data</b>
        </PreCollapse>
    </div>
</template>

<style lang="scss">
#MarketNav {
    font-family: sans-serif;
}
</style>

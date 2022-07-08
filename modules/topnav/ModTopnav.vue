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
            <!-- mock -->
        </MarketNav>

        <div dev-flex>
            <div dev-inset>
                <h2>banner</h2>

                <PreCollapse :data="topItems.items">
                    <b>Top items / items</b>
                </PreCollapse>
            </div>
        </div>

        <div dev-inset>
            <h2>flyout</h2>

            <PreCollapse :data="topItems.items">
                <b>Top items / items</b>
            </PreCollapse>

            <PreCollapse :data="sections">
                <b>Top sections</b>
            </PreCollapse>

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
        <hr />
        <PreCollapse dev-inset :data="topnav">
            <b>All data</b>
        </PreCollapse>
    </div>
</template>

<style lang="scss">
#MarketNav {
    font-family: sans-serif;
}
#MarketSiteLinksDropdownMenu {
    background-color: #eee;
    position: absolute;
    width: 100%;
}
</style>

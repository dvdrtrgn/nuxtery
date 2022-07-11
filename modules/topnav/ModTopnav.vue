<script setup lang="ts">
const props = defineProps({
    data: { type: Object, required: true },
});

const { topnav } = props.data;
const { topItems, sections } = topnav;

</script>

<template>
    <div>
        <div id="TopNav">
            <GlobalSiteNav>
            <!-- mock -->
            </GlobalSiteNav>

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
        </div>

        <PreCollapse dev-inset :data="topnav">
            <b>All data</b>
        </PreCollapse>
    </div>
</template>

<style lang="scss">
#TopNav {
    border: 1px solid pink;
    font-family: sans-serif;
    margin-bottom: 9em;
}
</style>

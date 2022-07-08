<script setup lang="ts">
const props = defineProps({
    data: { type: Object, required: true },
});

const { topnav } = props.data;

</script>

<template>
    <div vue-article>
        <PreCollapse :data="topnav">
            <b>All data</b>
        </PreCollapse>

        <div dev-flex>
            <div dev-inset>
                <PreCollapse :data="topnav.topItems.items">
                    <b>Top items / items</b>
                </PreCollapse>

                <PreCollapse :data="topnav.sections">
                    <b>Top sections</b>
                </PreCollapse>

                <PreCollapse :data="topnav.sections.industries">
                    <b>Top sections / industries</b>
                </PreCollapse>

                <PreCollapse :data="topnav.sections.sponsored_content">
                    <b>Top sections / sponsored_content</b>
                </PreCollapse>

                <PreCollapse :data="topnav.sections.events">
                    <b>Top sections / events</b>
                </PreCollapse>

                <PreCollapse :data="topnav.sections.products">
                    <b>Top sections / products</b>
                </PreCollapse>

                <PreCollapse :data="topnav.sections.publications">
                    <b>Top sections / publications</b>
                </PreCollapse>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
[vue-article] {
    h1,
    h2,
    h3 {
        margin: 1rem;
        text-align: center;
        text-transform: capitalize;
    }
}
</style>

<script setup lang="ts">
const props = defineProps({
    data: { type: Object, required: true },
});

const { topnav } = props.data;
const { topItems, sections } = topnav;
const dev = ref(true);

const bodyClass = useClassHelper('body');

onMounted(() => {
    bodyClass.add('bizj');
});

</script>
<template>
    <div :class="{dev: dev}">
        <div id="TopNav" dev-inset>
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

        <PreCollapse v-show="dev" dev-inset :data="topnav">
            <b>All data</b>
        </PreCollapse>

        <ThemePicker></ThemePicker>

        <button @click="dev = !dev">Toggle dev bondaries</button>
    </div>
</template>
<style lang="scss">

@import '~/modules/topnav/styles/defs.scss';

#TopNav {
    font-family: sans-serif;
    margin-bottom: 9em;
    min-width: var(--S-basis);
    overflow: visible;
}

#SiteNav {
    @include devoutline(green, solid);
    position: relative;
}

#MarketNav {
    @include devoutline(red, solid);
    position: relative;
}

</style>

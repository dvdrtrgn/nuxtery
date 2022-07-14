<script setup lang="ts">

const props = defineProps({
    data: { type: Object, required: true },
});

// DATA
const { topItems, sections } = props.data;
const dropdownOpen = ref(false);
const $parent = ref(null);

// METHODS
const setDropdown = bool => (dropdownOpen.value = bool);
onClickOutside($parent, () => setDropdown(false));

</script>

<template>
    <div id="MarketSiteLinks" ref="$parent">
        <div dev-flex>
            <!-- keep these stuck together -->

            <MarketSiteLinksDropdownTrigger
                id="MarketSiteLinksDropdownTrigger"
                :open="dropdownOpen"
                @dropdownFlip="setDropdown"
            ></MarketSiteLinksDropdownTrigger>

            <MarketSiteLinksBar class="outside" :data="topItems">
            </MarketSiteLinksBar>
        </div>

        <MarketSiteLinksDropdownMenu
            v-if="dropdownOpen"
            id="MarketSiteLinksDropdownMenu"
            :data="sections"
        >
            <MarketSiteLinksBar class="inside" :data="topItems">
            </MarketSiteLinksBar>
        </MarketSiteLinksDropdownMenu>
    </div>
</template>

<style lang="scss">
</style>

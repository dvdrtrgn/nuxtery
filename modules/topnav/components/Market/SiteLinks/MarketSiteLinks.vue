<script setup lang="ts">
const props = defineProps({
    data: { type: Object, required: true },
});

// DATA
const { topItems, sections } = props.data;
const dropdownOpen = ref(false);
const $parent = ref(null);

// METHODS
const setDropdown = (evt: boolean) => (dropdownOpen.value = evt);
onClickOutside($parent, () => setDropdown(false));

</script>

<template>
    <div id="MarketSiteLinks" ref="$parent">
        <div style="align-items: center; display: flex;">
            <MarketSiteLinksDropdownTrigger
                id="MarketSiteLinksDropdownTrigger"
                :open="dropdownOpen"
                @dropdownFlip="setDropdown"
            ></MarketSiteLinksDropdownTrigger>

            <MarketSiteLinksBar
                class="outside" :data="topItems"
            ></MarketSiteLinksBar>
        </div>

        <MarketSiteLinksDropdownMenu
            v-if="dropdownOpen"
            id="MarketSiteLinksDropdownMenu"
            :data="sections"
        >
            <MarketSiteLinksBar
                class="inside" :data="topItems"
            ></MarketSiteLinksBar>
        </MarketSiteLinksDropdownMenu>
    </div>
</template>

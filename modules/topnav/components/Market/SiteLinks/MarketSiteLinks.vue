<script setup lang="ts">

defineProps<{
    topItems: {
        items: object[],
    },
    sections: {
        industries: object,
        sponsored_content: object,
        events: object,
        products: object,
        publications: object,
    },
}>();

// DATA
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
            :industries="sections.industries"
            :sponsored-content="sections.sponsored_content"
            :events="sections.events"
            :products="sections.products"
            :publications="sections.publications"
        >
            <MarketSiteLinksBar
                class="inside"
                :data="topItems"
            ></MarketSiteLinksBar>
        </MarketSiteLinksDropdownMenu>
    </div>
</template>

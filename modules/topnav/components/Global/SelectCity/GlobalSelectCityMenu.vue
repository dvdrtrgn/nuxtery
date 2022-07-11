<script setup lang="ts">

const props = defineProps({
    data: { type: Object, required: true },
    open: { type: Boolean, required: true },
});

</script>

<template>
    <div id="SelectCityDropdown">
        <div
            v-if="props.open"
            id="SelectCityDropdownMenu"
            aria-labelledby="SelectCityDropdownTrigger"
            class="dropdown-menu rounded-0 border-0 py-3 px-5 px-lg-4 m-0 shadow"
        >
            <GlobalSelectCityMenuItem
                v-for="item in props.data"
                :key="item.id"
                :data="item"
            ></GlobalSelectCityMenuItem>
        </div>
        <slot></slot>
    </div>
</template>

<style lang="scss">
#SelectCityDropdown > div {
    background: white;
    border: 1px solid gray;
    column-count: 4;
    left: 0;
    position: absolute;
    a {
        display: inline-block;
        padding: 0.5em 1em;
    }
}
</style>

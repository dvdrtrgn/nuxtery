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
            class=""
        >
            <GlobalSelectCityMenuItem
                v-for="item in props.data"
                :key="item.id"
                :data="item"
            ></GlobalSelectCityMenuItem>
        </div>
    </div>
</template>

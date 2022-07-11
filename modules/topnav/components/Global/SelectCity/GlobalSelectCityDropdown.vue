<script setup lang="ts">

const props = defineProps({
    data: { type: Object, required: true },
});
const toggle = ref(false);
</script>

<template>
    <div>
        <div id="SelectCityDropdown" class="pl-3 pl-sm-4">
            <button
                id="SelectCityDropdownTrigger"
                data-cy="nav-city-btn"
                data-toggle="dropdown"
                aria-haspopup="true"
                :aria-expanded="toggle"
                class="dropdown-toggle dropdown-toggle-remove-bs-icon border-0 rounded-0"
                @click="toggle = !toggle"
            >
                <span class="font-weight-bold">Select a City</span>
                <i class="bi bi-chevron-down px-1" style="font-size: 1rem;"></i>
            </button>

            <div
                v-if="toggle"
                id="SelectCityDropdownMenu"
                aria-labelledby="SelectCityDropdownTrigger"
                class="dropdown-menu rounded-0 border-0 py-3 px-5 px-lg-4 m-0 shadow"
            >
                <GlobalSelectCityItem
                    v-for="item in props.data"
                    :key="item.id"
                    :data="item"
                ></GlobalSelectCityItem>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->

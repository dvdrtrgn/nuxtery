<script setup lang="ts">

// const props = defineProps({
//     data: { type: Object, required: true },
// });

// DATA
import citydata from '~/data/city-dropdown-data';

</script>

<template>
    <div id="SiteNav" dev-flex>
        <GlobalSiteNavBranding></GlobalSiteNavBranding>

        <GlobalSelectCityDropdown
            :data="citydata"
        ></GlobalSelectCityDropdown>

        <GlobalAccountDropdown></GlobalAccountDropdown>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->

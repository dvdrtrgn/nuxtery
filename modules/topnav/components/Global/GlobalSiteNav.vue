<script setup lang="ts">

// const props = defineProps({
//     data: { type: Object, required: true },
// });

// DATA

</script>

<template>
    <div id="SiteNav">
        <GlobalSiteNavBranding></GlobalSiteNavBranding>

        <GlobalSelectCity></GlobalSelectCity>

        <GlobalAccount></GlobalAccount>
    </div>
</template>

<style lang="scss">
#SiteNav {
    align-items: center;
    background-color: #f1f1f1;
    display: flex;
    justify-content: space-between;
    min-height: 3rem;
}
</style>

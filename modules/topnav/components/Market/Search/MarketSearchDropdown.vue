<script setup lang="ts">
/*
*/
const props = defineProps({
    open: { type: Boolean, required: true },
});
const searchEl = ref(null);

watchEffect(() => {
    if (props.open) {
        nextTick(() => searchEl.value.focus());
    }
});

</script>

<template>
    <form v-show="props.open" id="MarketSearchDropDown" @submit.prevent>
        <input
            ref="searchEl"
            type="text"
            placeholder="add terms here"
        />
    </form>
</template>

<!--
<style lang="scss">
</style>
-->

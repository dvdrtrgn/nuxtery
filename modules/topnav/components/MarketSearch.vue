<script setup lang="ts">

const props = defineProps({
    open: { type: Boolean, default: false },
});

const searchEl = ref(null);

watchEffect(() => {
    if (props.open) {
        nextTick(() => searchEl.value.focus());
    }
});

</script>

<template>
    <div id="MarketSearch">
        <button>SEARCH</button>
        <form v-show="props.open" @submit.prevent>
            <input ref="searchEl" type="text" placeholder="add terms here" />
        </form>
    </div>
</template>

<style lang="scss">
#MarketSearch {
    form{
        position: absolute;
        right: 0;
    }
}
</style>

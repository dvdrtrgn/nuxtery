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
        <form v-show="props.open" @submit.prevent>
            <input ref="searchEl" type="text" placeholder="add terms here" />
        </form>
        <button>SEARCH</button>
    </div>
</template>

<style lang="scss">
#MarketSearch {
    padding-left: 1em;
    form{
        position: absolute;
        right: 0;
    }
}
</style>

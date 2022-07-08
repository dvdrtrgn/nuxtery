<script setup lang="ts">

const props = defineProps({
    open: { type: Boolean, default: false },
});

</script>

<template>
    <div id="MarketSearch">
        <button>SEARCH</button>
        <form v-if="props.open">
            <input type="text" placeholder="add terms here" />
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

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
    <div v-show="props.open" id="MarketSearchDropDown">
        <form @submit.prevent>
            <input
                ref="searchEl"
                type="text"
                placeholder="add terms here"
            />
        </form>
    </div>
</template>

<style lang="scss">
#MarketSearchDropDown {
    background-color: var(--C-primary);
    left: 0;
    padding: 1em;
    position: absolute;
    width: 100%;
    z-index: 1;

    form {
        display: flex;
        justify-content: center;
        width: 100%;
    }
    input {
        font-size: 2rem;
        margin: auto;
        width: 80%;
    }
}
</style>

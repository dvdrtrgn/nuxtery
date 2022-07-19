<script setup lang="ts">

const props = defineProps({
    open: { type: Boolean, required: true },
});

// DATA

const $searchEl = ref(null);

// WATCH

watchEffect(() => {
    if (props.open) {
        nextTick(() => $searchEl.value.focus());
    }
});

</script>

<template>
    <div v-show="props.open" id="MarketSearchDropDown">
        <form @submit.prevent>
            <input
                ref="$searchEl"
                type="text"
                placeholder="add terms here"
            />
        </form>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    open: false,
}>();

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
    <div v-show="open" id="MarketSearchDropDown">
        <form @submit.prevent>
            <input
                ref="$searchEl"
                type="text"
                placeholder="add terms here"
            />
        </form>
    </div>
</template>

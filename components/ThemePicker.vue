<script setup lang="ts">
import { useStorage } from '@vueuse/core';

interface ThemeOpts {
    value: string;
    text: string;
};

const props = defineProps({
    options: {
        type: Array<ThemeOpts>,
        default: () => {
            return [
                { value: '', text: 'Pick one' },
                { value: 'emerald', text: 'Emerald green' },
                { value: 'ruby', text: 'Ruby red' },
                { value: 'sapphire', text: 'Sapphire blue' },
            ] as ThemeOpts[];
        },
    },
});

const htmlClass = useClassHelper(':root');
const themePick = useStorage('theme-pick', 'sapphire');

onMounted(() => {
    watch(themePick, (nv, ov) => {
        if (nv) {
            htmlClass.add(nv);
        }
        if (ov) {
            htmlClass.remove(ov);
        }
        // console.log({ nv, ov, htmlClass, theme: themePick.value });
    }, { immediate: true });
});

</script>
<template>
    <span id="ThemePicker">
        <b>Theme picker:</b>
        <select v-model="themePick">
            <option
                v-for="option in props.options"
                :key="option.value"
                :value="option.value"
            >
                {{ option.text || option.value }}
            </option>
        </select>
    </span>
</template>
<style lang="scss">

#ThemePicker {
    background-color: var(--C-primary);
    color: white;
    display: inline-flex;
    gap: 1rem;
    font-family: sans-serif;
    padding: 1rem;
}

</style>

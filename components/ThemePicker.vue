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
                { value: 'sapphire', text: 'Sapphire blue' },
                { value: 'emerald', text: 'Emerald green' },
                { value: 'ruby', text: 'Ruby red' },
            ] as ThemeOpts[];
        },
    },
});

const docClass = useClassHelper(':root');
const themePick = useStorage('theme-pick', 'sapphire');

onMounted(() => {
    watch(themePick, (nv, ov) => {
        docClass.add(nv);
        docClass.remove(ov);
        // console.log({ nv, ov, docClass, theme: themePick.value });
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

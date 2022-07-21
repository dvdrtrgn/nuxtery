/*
# useToggle

Helper for "toggle" handler and "active" value.
Allows storage with label!
*/

import { useStorage } from '@vueuse/core';

export default function (storeId?: string, initial?: boolean) {
    let active = ref(initial || false);
    let toggle = () => (null);

    if (storeId) {
        active = useStorage(`toggle-${storeId}`, active);
    }
    toggle = () => (active.value = !active.value);

    return reactive({ active, toggle });
};

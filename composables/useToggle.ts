/*

# useToggle

Helper for simple switchable boolean.
    toggle "handler"
    value  "active"

With a label, it will provide local persistance.

*/
import { useStorage } from '@vueuse/core';

const safeLabel = (str: string) => str.replace(/[^a-z]*/gi, '');

export default function (label?: string, initial?: boolean) {
    let storeID = label;
    let active = ref(initial || false);

    const handle = () => (active.value = !active.value);

    if (label) {
        storeID = safeLabel(label).toLocaleLowerCase();
        active = useStorage(`tgl-${storeID}`, active);
    }

    return reactive({ active, handle, label, storeID });
};

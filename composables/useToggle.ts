
/*
# useToggle

Helper for "toggle" handler and "active" value.
*/

export default function () {
    const active = ref(false);
    const toggle = () => (active.value = !active.value);

    return reactive({ active, toggle });
};

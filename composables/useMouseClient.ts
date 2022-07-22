/*

# useMouseClient

Copy vueuse useMouse to experiment with throttling.

*/
export default function (options: any = {}) {
    const { eventFilter } = options;

    const x = ref(0);
    const y = ref(0);
    const calls = ref(1);
    const count = ref(1);
    const accuracy = computed(() => (count.value / calls.value * 100 | 0));

    function updateMouse (evt: MouseEvent) {
        x.value = evt.clientX;
        y.value = evt.clientY;
        count.value++;
    }

    function updateMouseWrapper (event: MouseEvent) {
        calls.value++;

        return eventFilter === undefined
            ? updateMouse(event)
            : eventFilter(() => updateMouse(event), {} as any);
    }

    onMounted(() => window.addEventListener('mousemove', updateMouseWrapper));
    onUnmounted(() => window.removeEventListener('mousemove', updateMouseWrapper));

    return { x, y, calls, count, accuracy };
}

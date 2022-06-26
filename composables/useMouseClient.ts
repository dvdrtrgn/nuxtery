import { ref, onMounted, onUnmounted } from 'vue';

export default function useMyMouse (options:any = {}) {
    const x = ref(0);
    const y = ref(0);
    const {
        eventFilter,
    } = options;
    const calls = ref(0);
    const count = ref(0);
    const accuracy = computed(
        () => (count.value / calls.value * 100) | 0,
    );

    function updateMouse (evt:MouseEvent) {
        x.value = evt.clientX;
        y.value = evt.clientY;
        count.value++;
    }

    const updateMouseWrapper = (event:MouseEvent) => {
        calls.value++;
        return eventFilter === undefined
            ? updateMouse(event)
            : eventFilter(() => updateMouse(event), {} as any);
    };

    onMounted(() => window.addEventListener('mousemove', updateMouseWrapper));
    onUnmounted(() => window.removeEventListener('mousemove', updateMouseWrapper));

    return { x, y, calls, count, accuracy };
}

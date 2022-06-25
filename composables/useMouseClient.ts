import { ref, onMounted, onUnmounted } from 'vue';

export default function useMyMouse () {
    const x = ref(0);
    const y = ref(0);

    function updateMouse (evt:MouseEvent) {
        x.value = evt.clientX;
        y.value = evt.clientY;
    }

    onMounted(() => window.addEventListener('mousemove', updateMouse));
    onUnmounted(() => window.removeEventListener('mousemove', updateMouse));

    return { x, y };
}

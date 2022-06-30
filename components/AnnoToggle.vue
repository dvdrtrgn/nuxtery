<!--
    Contract:
    - provide fancy dev helper button
    - consume initial boolean value
    - emit value when clicked
 -->
<script setup lang="ts">

const props = defineProps({ init: Boolean });
const flip = ref(props.init);

const emit = defineEmits(['toggle']);

function switchEmit () {
    flip.value = !flip.value;
    emit('toggle', flip.value);
}

</script>

<template>
    <button dev-toggle @click="switchEmit">
        <!--  -->
        {{ flip ? 'HIDE' : 'SHOW' }}<br />annotations
    </button>
</template>

<style lang="scss">
    $unit: 0.3rem;

    [dev-toggle] {
        bottom: $unit;
        right: $unit;
        position: fixed;
        z-index: 1;
        // end positioning
        background-color: white;
        border: 1px solid silver;
        box-shadow: 0 0 $unit silver;
        color: steelblue;
        font-size: 50%;
        font-weight: bold;
        line-height: 1;
        opacity: 0.7;
        padding: $unit 2 * $unit;

        &:hover {
            color: red;
        }
    }
</style>

<script setup lang="ts">

const props = defineProps<{ label?: string }>();
const flipper = useToggle(props.label);
const data = {
    ...toRefs(props),
    ...toRefs(flipper),
};

</script>

<template>
    <ClientOnly>
        <div class="browser-dump" :dev-active="flipper.active">
            <button @click="flipper.handle">
                {{ label || 'toggle' }}
            </button>

            <div v-if="flipper.active" dev-inset>
                <slot v-bind="data"></slot>
            </div>
        </div>
    </ClientOnly>
</template>

<style lang="scss">
.browser-dump {
    $color: steelblue;

    > button:hover {
        color: $color;
    }
    &[dev-active=false] {
        display: inline;
    }
    &[dev-active=true]  {
        display: block;
        > button {
            border: 1px solid $color;
            border-bottom: 1px solid white;
            border-radius: 7px 7px 0rem 0rem;
            color: $color;
            font-size: 80%;
            position: relative;
            z-index: 1;
        }
        > div {
            border: 1px solid $color;
            transform: translateY(-1px);
        }
    }
}
</style>

<!--
    Contract:
    - provide devs with fancy dividers to annotate sections
    - consume pre/post (props for pseudo content)
    - 1 slot
    - respond to ancestor `.dev-active`
 -->
<script setup lang="ts">
defineProps({
    after: { type: String, default: '' },
    before: { type: String, default: '' },
});
</script>

<template>
    <div :pre-text="before" :post-text="after" dev-only>
        |– <slot>??</slot> –|
    </div>
</template>

<style lang="scss">
div[dev-only] {
    display: none;
}
.dev-active div[dev-only] {
    background-color: rgba(steelblue, 0.1);
    color: gray;
    display: block;
    font-size: 80%;
    height: 1.2rem;
    position: relative;
    text-align: center;

    &:after {
        content: attr(post-text);
        color: red;
        position: absolute;
        right: 0;
    }
    &:before {
        content: attr(pre-text);
        color: red;
        position: absolute;
        left: 0;
    }
}
</style>

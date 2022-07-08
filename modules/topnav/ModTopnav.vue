<script setup lang="ts">
const props = defineProps({
    data: { type: Object, required: true },
});

const data = props.data;

</script>

<template>
    <div vue-article>
        <div dev-flex>
            <div dev-inset>
                <PreCollapse :data="data.topnav">
                    <b>Top nav</b>
                </PreCollapse>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
[vue-article] {
    h1,
    h2,
    h3 {
        margin: 1rem;
        text-align: center;
        text-transform: capitalize;
    }
}
</style>

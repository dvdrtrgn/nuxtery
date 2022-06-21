<script setup lang="ts">
import { listify } from '../utils';
import ShowLine from './ShowLine.vue';

defineProps({
    show: { type: Object, required: true },
});
</script>

<template>
    <div show-list>
        <img
            :src="show.image?.medium || './show.jpg'"
            :alt="show.name"
            height="295"
            width="210"
        >
        <ul>
            <ShowLine
                v-for="detail in listify(show)"
                :key="detail.order"
                :desc="detail.desc"
                :name="detail.name"
            />
        </ul>
    </div>
</template>

<style lang="scss">
[show-list] {
    border-bottom: 1px solid silver;
    display: flex;

    img {
        background: url(./show.jpg) no-repeat;
        float: left;
        margin: 1em;
    }
}
</style>

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
            :alt="show.name"
            :src="show.image?.medium || '/show.jpg'"
            width="210" height="295"
        />
        <ul>
            <ShowLine
                v-for="detail in listify(show)"
                :key="detail.index"
                :desc="detail.value"
                :name="detail.key"
            />
        </ul>
    </div>
</template>

<style lang="scss">
[show-list] {
    border-bottom: 1px solid silver;
    display: flex;

    img {
        background: url('/show.jpg') no-repeat;
        float: left;
        margin: 1em;
    }
}
</style>

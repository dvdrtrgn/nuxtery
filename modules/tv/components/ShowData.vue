<script setup lang="ts">
import listify from '../utils/makeListFromObject';
import ShowDataLine from './ShowDataLine.vue';

defineProps({
    show: { type: Object, required: true },
});
</script>

<template>
    <div data-show>
        <img
            :src="show.image?.medium || './show.jpg'"
            :alt="show.name"
            width="210"
            height="295"
        >
        <ul data-details>
            <ShowDataLine
                v-for="detail in listify(show)"
                :key="detail.order"
                :name="detail.name"
                :desc="detail.desc"
            />
        </ul>
        <hr>
    </div>
</template>

<style>
[data-show] img {
    background: url(./show.jpg) no-repeat;
    float: left;
    margin: 1em 2em 1em 1em;
}
</style>

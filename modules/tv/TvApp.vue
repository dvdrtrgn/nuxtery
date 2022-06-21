<script setup lang="ts">
import ShowList from './components/ShowList.vue';

const searchText = ref('');
const list = ref([]);

async function searchForStuff () {
    const url = `/api/proxy-tvmaze?search=${searchText.value}`;

    list.value = await $fetch(url);
}
</script>

<template>
    <div tv-app>
        <form @submit.prevent="searchForStuff">
            <input v-model="searchText">
            <button>Search For TV Shows</button>
        </form>

        <ShowList
            v-for="item in list"
            :key="item.show.id"
            show-list
            :show="item.show"
        />
    </div>
</template>

<style lang="scss">
[tv-app] {
    form {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 100px;
    }

    [show-list] {
        margin-top: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        /* flex-direction: column; */
        gap: 10px;
    }
}
</style>

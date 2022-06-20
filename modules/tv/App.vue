<script setup lang="ts">
import { ref } from 'vue';
import ShowData from './components/ShowData.vue';

const searchText = ref('');
const list = ref([]);

async function searchForStuff () {
    const data = await fetch(`/api/prx-tvmaze?search=${searchText.value}`);
    const json = await data.json();

    list.value = Array.isArray(json) ? json : [];
}
</script>

<template>
    <div data-index>
        <form class="form" @submit.prevent="searchForStuff">
            <input v-model="searchText" type="text">
            <button>Search For TV Shows</button>
        </form>

        <div class="stuff">
            <ShowData
                v-for="item in list"
                :key="item.show.id"
                :show="item.show"
            />
        </div>
    </div>
</template>

<style>
.stuff {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /* flex-direction: column; */
  gap: 10px;
}

.form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}
</style>

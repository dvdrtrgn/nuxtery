<script setup lang="ts">
import ShowList from './components/ShowList.vue';

const route = useRoute();
const router = useRouter();
const searchText = ref(route.query.show || '');
const showlist = ref([]);

async function searchForStuff () {
    const url = `/api/proxy-tvmaze?search=${searchText.value}`;

    router.replace({ query: { show: searchText.value } });
    showlist.value = await $fetch(url);
}

onMounted(() => {
    if (searchText.value) {
        searchForStuff();
    }
});
</script>

<template>
    <div tv-app>
        <form @submit.prevent="searchForStuff">
            <input v-model="searchText">
            <button>Search For TV Shows</button>
        </form>

        <ShowList
            v-for="item in showlist"
            :key="item.show.id"
            :show="item.show"
        />
    </div>
</template>

<style lang="scss">
[tv-app] {
    form {
        align-items: center;
        display: flex;
        justify-content: center;
        height: 10rem;
    }
}
</style>

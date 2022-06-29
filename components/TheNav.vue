<script setup lang="ts">
const nav = useRouteExtract();
</script>

<template>
    <nav the-nav>
        <NuxtLink
            v-for="item in nav" :key="item.path"
            :to="item.path"
        >
            {{ item.name }}
        </NuxtLink>
    </nav>
</template>

<style lang="scss">
[the-nav] {
    background-color: #eee;
    box-shadow: 0 0 1em silver;
    display: flex;
    flex-wrap: wrap;
    font-family: sans-serif;

    a {
        background-color: white;
        border: 1px solid silver;
        border-radius: 10%;
        padding: 0.2em 1em;
        text-decoration: none;
        text-transform: uppercase;
    }
}
</style>

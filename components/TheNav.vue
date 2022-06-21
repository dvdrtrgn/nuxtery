<script setup lang="ts">
</script>

<template>
    <nav the-nav>
        <NuxtLink to="/">
            home
        </NuxtLink>
        <NuxtLink to="/tv?foo">
            tv
        </NuxtLink>
        <NuxtLink to="/mpls/2022/02/01">
            market
        </NuxtLink>
    </nav>
</template>

<style lang="scss">
[the-nav] {
    background-color: #eee;
    display: flex;
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

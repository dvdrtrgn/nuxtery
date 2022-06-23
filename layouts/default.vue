<script setup lang="ts">
useHead({
});

</script>

<template>
    <div default-template>
        <header>
            <TheNav />
        </header>
        <slot />
        <TheFooter />
    </div>
</template>

<style lang="scss">
html {
    $headerHeight: 4vh;
    $footerHeight: 4vh;

    body {
        margin: 0;
        margin-top: $headerHeight * 1;
        margin-bottom: $footerHeight * 1.2;
    }
    header, footer {
        left: 0;
        position: fixed;
        width: 100%;
    }

    header {
        top: 0;
        height: $headerHeight;
    }
    footer {
        bottom: 0;
        height: $footerHeight;
    }
}
</style>

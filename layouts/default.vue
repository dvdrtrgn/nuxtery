<script setup lang="ts">
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
body {
    margin: 0;
}
[dev-flex] {
    align-items: center;
    display: flex;
    justify-content: center;
}
[dev-grid] {
    border-bottom: 1px dotted silver;
    display: grid;
    grid-auto-flow: column;

    pre {
        border: 1px dashed silver;
    }
}
[dev-inset] {
    box-shadow: 0 0 0.5rem inset silver;
    overflow: scroll;
    padding: 1em;
}
html {
    $headerHeight: 4vh;
    $footerHeight: 4vh;

    body {
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

<script setup lang="ts">

// METHODS
function back2top () {
    window.scrollTo(0, 0);
}

</script>

<template>
    <ClientOnly>
        <div
            class=" relative "
            data-ct="2016 Footer :  : Back to Top"
        >
            <button
                class="
                    absolute -top-10 -right-10
                " @click="back2top"
            >
                Back to Top
                <i class="icon-up-dir"></i>
            </button>
        </div>
    </ClientOnly>
</template>

<script setup lang="ts">

const props = defineProps({
    data: { type: Object, required: true },
});

</script>

<template>
    <div
        class="
            md:flex gap-40
        "
    >
        <div class="footer__logo">
            <a
                class="footer__logo-link"
                href="/"
                :data-ct="props.data.logo.track"
            >
                <img
                    :src="props.data.logo.src"
                    style="height: 2rem;"
                    :alt="props.data.logo.text"
                    class="footer__logo-img"
                />
            </a>
        </div>
        <div>
            <ul class=" md:flex gap-12 ">
                <li
                    v-for="item in props.data.list"
                    :key="item.text"
                    :data-ct="item.track"
                >
                    <a :href="item.href">
                        {{ item.text }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    list: { type: Object, required: true },
});

</script>

<template>
    <ul
        class=" social-follow-bizj
                mx-8 my-2 gap-x-2 gap-y-4
                grid grid-cols-2 "
    >
        <li
            v-for="item in props.list"
            :key="item.text"
        >
            <a
                :href="item.href"
                class="btn btn--social btn--{{cSlug}}"
                target="_blank"
                rel="noopener"
                :data-ct="item.track"
            >
                <i class="bi-{{cSlug}}"></i>
                <span class="icon__hidden-text">
                    {{ item.text }}
                </span>
            </a>
        </li>
    </ul>
</template>

<!--
<style lang="scss">
</style>
-->

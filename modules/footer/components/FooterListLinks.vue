<script setup lang="ts">

const props = defineProps({
    list: { type: Object, required: true },
});

</script>

<template>
    <ul class="link-list space-y-2">
        <li
            v-for="item in props.list"
            :key="item.text"
            :data-ct="item.track"
        >
            <a :href="item.href">
                <span class="link-list-item__title">
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

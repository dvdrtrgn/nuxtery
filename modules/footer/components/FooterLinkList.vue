<script setup lang="ts">

const props = defineProps({
    title: { type: Object, required: true },
    list: { type: Object, required: true },
});

</script>

<template>
    <div>
        <div class="">
            <h4 class="link-list-title">
                {{ props.title }}
            </h4>
            <ul class="link-list">
                <li
                    v-for="item in props.list"
                    :key="item.text"
                    :data-ct="item.ct"
                >
                    <a :href="item.href">
                        <span class="link-list-item__title">
                            {{ item.text }}
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->

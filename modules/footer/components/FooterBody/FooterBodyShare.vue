<script setup lang="ts">

const props = defineProps({
    data: { type: Object, required: true },
});

</script>

<template>
    <div>
        <h4 class="link-list-title">
            Follow Us
        </h4>
        <ul
            class=" social-follow-bizj
                    mx-8 my-2 gap-x-2 gap-y-4
                    grid grid-cols-2
                "
        >
            <li v-for="item in props.data" :key="item.text">
                <a
                    :href="item.link"
                    class="btn btn--social btn--{{cSlug}}"
                    target="_blank"
                    rel="noopener"
                    :data-ct="item.ct"
                >
                    <i class="bi-{{cSlug}}"></i>
                    <span class="icon__hidden-text">
                        {{ item.text }}
                    </span>
                </a>
            </li>
        </ul>
        <div class="multi_row_column">
            <h4 class="link-list-title">
                Newsletters
            </h4>
            <ul class="link-list">
                <li data-ct="2016 Footer : Sign Up Now">
                    <a
                        href="https://www.bizjournals.com/account/bizjournals/newsletters"
                    >
                        <span class="link-list-item__title">Sign Up
                            Now</span>
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

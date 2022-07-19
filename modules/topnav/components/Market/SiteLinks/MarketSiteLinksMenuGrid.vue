<script setup lang="ts">
import { ensureArray } from '~/modules/topnav/utils/ensureArray';

const props = defineProps({
    data: { type: Object, required: true },
});

const items = ensureArray(props.data.items);
const links = computed(() => items.filter(e => 'uri' in e));

</script>

<template>
    <div>
        <details class="m-2" open>
            <summary><b>{{ props.data.title }}</b></summary>
            <ul
                class="
                    mx-8 my-2
                    grid gap-x-2 gap-y-4
                    grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                "
            >
                <li
                    v-for="link in links"
                    :key="link.uri"
                >
                    <a :href="link.uri">
                        {{ link.title }}
                    </a>
                </li>
            </ul>
        </details>
    </div>
</template>

<!-- <style lang="scss">
// foo
</style> -->

<script setup lang="ts">

const props = defineProps({
    data: { type: Object, required: true },
});

</script>

<template>
    <div class="py-10 px-20  bg-neutral-50">
        <ul class="flex gap-20">
            <li v-for="item in props.data.list" :key="item.href">
                <a :href="item.href">
                    {{ item.text }}
                </a>
            </li>
        </ul>
        <p class="mt-10">
            © 2022 American City Business Journals. All rights reserved.
            Use of and/or registration on any portion
            of this site constitutes acceptance of our
            <a href="/useragreement">
                User Agreement
            </a>
            (updated January 1, 2021) and
            <a href="/privacy">
                Privacy Policy and Cookie Statement
            </a>
            (updated July 1, 2022).
            The material on this site may not be reproduced, distributed,
            transmitted, cached or otherwise used, except with the prior
            written permission of American City Business Journals.
        </p>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->

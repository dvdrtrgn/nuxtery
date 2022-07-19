<script setup lang="ts">

import ModFooter from '~~/modules/footer/ModFooter.vue';
import footer from '~/data/adhoc/footer.js';

definePageMeta({ layout: 'default-wrap' });

</script>

<template>
    <div>
        <h1>hello world</h1>

        <ModFooter :data="footer"></ModFooter>
    </div>
</template>

<!-- <style lang="scss">
// foo
</style> -->

<script setup lang="ts">

import ModFooter from '~~/modules/footer/ModFooter.vue';
import footer from '~/data/adhoc/footer.js';

definePageMeta({ layout: 'default-dev' });

</script>

<template>
    <div>
        <h1>hello mars</h1>

        <ModFooter :data="footer"></ModFooter>
    </div>
</template>

<!-- <style lang="scss">
// foo
</style> -->

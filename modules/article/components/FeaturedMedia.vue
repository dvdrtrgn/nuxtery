<script setup lang="ts">

const props = {
    data: {
        alt: 'burger',
        src: 'https://media.bizj.us/view/img/11432345/popeyes*660xx7216-4053-0-1051.jpg',
        caption: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dolorum, quidem quae culpa repellat non inventore at,
            illum pariatur quisquam totam in libero ad tempora.`,
    },
};

</script>

<template>
    <div class="px-10 md:px-20">
        <div
            class=" mock-media   bg-slate-400 mb-5   aspect-video  "
            style="max-height: 480px"
        >
            <img
                class=" object-fill "
                :src="props.data.src" :alt="props.data.alt"
            />
        </div>
        <div
            class=" mock-caption   text-sm text-neutral-500 "
        >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dolorum, quidem quae culpa repellat non inventore at,
            illum pariatur quisquam totam in libero ad tempora.
        </div>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->

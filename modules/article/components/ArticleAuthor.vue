<script setup lang="ts">
import DateUtil from '~/utils/dateUtil';

const props = {
    data: {
        'contact_name': 'Greg Ryan',
        'contact_title': 'Senior Reporter',
        'created_at': '2022-01-20 15:23:24',
        'updated_at': '2022-01-22 15:23:24',
        'photo_headshot_url': 'https://media.bizj.us/view/img/12231513/greg-ryan-11.jpg',
        'social1': 'https://twitter.com/BosBizGregRyan',
    },
};

</script>

<template>
    <div class="p-10 md:px-20 space-x-10 flex items-center ">
        <div class="mock-pic  bg-neutral-300">
            <img
                :src="props.data.photo_headshot_url"
                class=" aspect-square    w-24 h-24 "
                :alt="props.data.contact_name"
            />
        </div>
        <div class="mock-text">
            <div class="mock-line1">
                <span class="mock-name  ">
                    <a
                        :href="props.data.social1"
                        class="text-green-700"
                    >
                        {{ props.data.contact_name }}
                    </a>
                </span>
                –
                <span class="mock-title  ">
                    {{ props.data.contact_title }}
                </span>
            </div>
            <div class="mock-line2   flex flex-wrap gap-x-5">
                <div class="mock-date">
                    <time>{{ props.data.updated_at }}</time>
                </div>
                <div class="mock-update   ">
                    <b> Updated </b>
                    <time>{{ props.data.created_at }}</time>
                </div>
            </div>
        </div>
    </div>
    <BrowserDump>
        <b>DateUtil.specimen</b>
        {{ DateUtil.specimen }}
        <p>
            isAdvertorial || isNative <br />
            publish date only for sponsored content <br />
            publish date with relative revision time <br />
            base case, relative publish time
        </p>
    </BrowserDump>
</template>

<!--
<style lang="scss">
</style>
-->

<script setup lang="ts">

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

const { data } = props;

</script>

<template>
    <div class="px-10 md:p-20 space-x-10 flex">
        <div class="mock-pic bg-neutral-300">
            <img
                :src="data.photo_headshot_url"
                alt="person"
                style="height: 66px;"
            />
        </div>
        <div class="mock-text">
            <div class="mock-line1">
                <span class="mock-name">
                    <a
                        :href="data.social1" class="
                        text-green-700"
                    >
                        {{ data.contact_name }}
                    </a>
                </span>
                –
                <span class="mock-title">
                    {{ data.contact_title }}
                </span>
            </div>
            <div class="mock-line2">
                <span class="mock-date">
                    {{ data.updated_at }}
                </span>
                <span class="mock-update">
                    <b> Updated </b>
                    {{ data.created_at }}
                </span>
            </div>
        </div>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->

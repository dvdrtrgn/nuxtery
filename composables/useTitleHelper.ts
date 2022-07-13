/*
# useTitleHelper

Leverage VueUse to update page title to route name.
*/
import { useTitle } from '@vueuse/core';
import { RouteRecord } from 'vue-router';

const Orig = {
    router: null, // placeholder
    title: useTitle('Biz', { titleTemplate: '%s | Biz' }),
};

function watchRouter () {
    Orig.title.value = String(useRoute().name);

    Orig.router = useRouter();

    Orig.router.beforeEach((rr:RouteRecord) => {
        Orig.title.value = String(rr.name);
    });
}

export default function (override = '') {
    // console.log('useTitleHelper', Orig.title);
    if (!Orig.router) {
        watchRouter(); // fulfill placeholder
    }

    if (override) {
        Orig.title.value = override;
    }

    return Orig.title;
}

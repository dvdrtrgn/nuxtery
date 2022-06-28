import { useTitle } from '@vueuse/core';
import { RouteRecord } from 'vue-router';

const Orig = {
    router: null,
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
    if (!Orig.router) { watchRouter(); }

    if (override) { Orig.title.value = override; }

    return Orig.title;
}

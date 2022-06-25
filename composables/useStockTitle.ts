import { useTitle } from '@vueuse/core';
import { RouteRecord } from 'vue-router';

const Cf = {
    router: null,
    title: ref('TITLE'),
    options: { titleTemplate: '%s | Biz' },
};

function watchRouter () {
    if (!Cf.router) {
        Cf.router = useRouter();
        Cf.router.beforeEach((rr:RouteRecord) => {
            Cf.title.value = String(rr.name);
        });
    }
}

export default function (override = '') {
    const routeName = String(useRoute().name);

    Cf.title = useTitle(override || routeName, Cf.options);

    watchRouter();

    return Cf.title;
}

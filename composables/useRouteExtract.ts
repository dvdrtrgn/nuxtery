import { RouteRecord } from 'vue-router';

export default function () {
    const routes = useRouter().options.routes;

    type xRouteRecordRaw = {
       meta: { samplePath: string; }
    } & RouteRecord

    const extractor = (e: xRouteRecordRaw) => {
        return {
            name: e.name,
            path: e.meta?.samplePath || e.path,
        };
    };
    console.log('useRouteExtract');

    return ref(routes.map(extractor));
}

/*
# useRouteExtract

Extract top route paths for making a nav.
*/
import { RouteRecord, RouteRecordRaw } from 'vue-router';

type T = {
    meta: { samplePath:string; }
 } & RouteRecordRaw

const alphaCompare = (a:string, b:string) => a.localeCompare(b);
const routeCompare = (a:RouteRecord, b:RouteRecord) => alphaCompare(a.path, b.path);

function extractor (e:T) {
    return {
        name: e.name === 'index' ? 'home' : e.name,
        path: e.meta?.samplePath || e.path,
    };
};

export default function () {
    // console.log('useRouteExtract');

    const routes = useRouter().options.routes;
    const unsort = routes.map(extractor);
    const sorted = unsort.sort(routeCompare);

    return ref(sorted);
}

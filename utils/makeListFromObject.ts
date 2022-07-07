import { isPrimitive, sanitizeHTML } from './domOps';

export function makeListFromObject (obj:object) {
    const arr = Object.entries(obj);
    const strs = arr.filter((e) => {
        return e.every(isPrimitive);
    });

    const list = strs.map((e, i) => ({
        index: i,
        key: e[0],
        value: sanitizeHTML(e[1]),
    }));

    return list;
}

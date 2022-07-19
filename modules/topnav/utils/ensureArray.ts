export function ensureArray (obj: object) {
    if (Array.isArray(obj)) {
        return obj;
    }

    if (typeof obj === 'object') {
        const arr = Object.entries(obj);

        return arr.map(e => e[1]);
    }
}

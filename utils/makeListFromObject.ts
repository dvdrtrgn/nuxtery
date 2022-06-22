const PRIMITIVES = ['string', 'number', 'bigint', 'boolean', 'undefined', 'symbol', 'null'];
const isPrimitive = (arg: any) => PRIMITIVES.includes(typeof arg);

let SOMEDIV: HTMLDivElement; // make later

function sanitizeHTML (html: string) {
    SOMEDIV = SOMEDIV || window.document.createElement('div');
    SOMEDIV.innerHTML = html;

    return SOMEDIV.innerText;
}

export default function makeListFromObject (obj: object) {
    const arr = Object.entries(obj);
    const indexed = arr.map((e, i) => [...e, i]);
    const strs = indexed.filter((e) => {
        return e.every(isPrimitive);
    });

    return strs.map(e => ({
        index: e[2],
        key: sanitizeHTML(e[0]),
        value: sanitizeHTML(e[1]),
    }));
}

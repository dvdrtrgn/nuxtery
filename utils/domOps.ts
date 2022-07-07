let SOMEDIV: HTMLDivElement; // make later
const PRIMITIVES = ['string', 'number', 'bigint', 'boolean', 'undefined', 'symbol', 'null'];

export const isPrimitive = (arg:any) => PRIMITIVES.includes(typeof arg);

export function sanitizeHTML (html:string) {
    SOMEDIV = SOMEDIV || window.document.createElement('div');
    SOMEDIV.innerHTML = html;

    return SOMEDIV.innerText;
}

let SOMEDIV: HTMLDivElement; // make later

export function sanitizeHTML (html:string) {
    SOMEDIV = SOMEDIV || window.document.createElement('div');
    SOMEDIV.innerHTML = html;

    return SOMEDIV.innerText;
}

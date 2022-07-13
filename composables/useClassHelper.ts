/*
# useClassHelper

Ease access to root classList.
*/

export default function (selector:string|HTMLElement = ':root') {
    const config = {
        $ele: null,
        has: (className:string) => {
            if (allow(className)) {
                return config.$ele.value.classList.contains(className);
            }
        },
        add: (className:string) => {
            if (allow(className)) {
                config.$ele.value.classList.add(className);
            }
        },
        remove: (className:string) => {
            if (allow(className)) {
                config.$ele.value.classList.remove(className);
            }
        },
        toggle: (className:string) => {
            if (allow(className)) {
                if (config.has(className)) {
                    config.remove(className);
                } else {
                    config.add(className);
                }
            }
        },
    };

    function allow (className:string) {
        const ready = Boolean(config.$ele && className);
        if (!ready) {
            console.warn('cannot mod', { className, root: config.$ele.value, selector });
        }
        return ready;
    }

    onMounted(() => {
        if (selector) {
            if (typeof selector === 'string') {
                config.$ele = ref(document.querySelector(selector));
            } else {
                config.$ele = selector; // assume element?
            }
        }
        if (!config.$ele) {
            console.warn('no element');
        }
    });

    return config;
};

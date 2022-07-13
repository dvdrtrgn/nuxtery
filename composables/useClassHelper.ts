/*
# useClassHelper

Ease access to root classList.
*/
const $ele = null;

export default function (selector = ':root') {
    const config = {
        $ele,
        has: (className:string) => {
            if (className) {
                return config.$ele.value.classList.contains(className);
            }
        },
        add: (className:string) => {
            if (className) {
                config.$ele.value.classList.add(className);
            }
        },
        remove: (className:string) => {
            if (className) {
                config.$ele.value.classList.remove(className);
            }
        },
        toggle: (className:string) => {
            if (className) {
                if (config.has(className)) {
                    config.remove(className);
                } else {
                    config.add(className);
                }
            }
        },
    };

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

/*
# useRootClass

Ease access to root classList.
*/
const $root = ref(document.querySelector(':root'));

export default function () {
    console.log($root);
    return $root;
};

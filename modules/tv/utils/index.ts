export { makeListFromObject as listify } from '~/utils/makeListFromObject';

export function secondsToDate (str = '') {
    const num = Number(str + '000');

    return new Date(num || 0);
}

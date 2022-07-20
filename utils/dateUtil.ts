/*
# dateUtils

Ease converting Eastern time to UTC for frontend uses.
*/

function fixSafari (str: string) {
    return str.replace(/-/g, '/');
}

function isValidDate (date: Date) {
    return (date instanceof Date) && (date.toString() !== 'Invalid Date');
}

function makeDate (str: string | number | Date) {
    const date = new Date(str);

    if (isValidDate(date)) {
        return date;
    } else {
        return new Date(fixSafari(str.toString()));
    }
}

export function getOffset (date: string | number | Date) {
    return new Date(date).getTimezoneOffset() / 60; // hours from GMT
}

export function currentOffset () {
    return getOffset(null);
}

export function userZone () {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

export function fromBizj (date: string | number | Date) {
    const input = makeDate(date);

    input.setHours(input.getHours() + currentOffset());

    return input;
}

export function toBizj (date: string | number | Date) {
    const input = makeDate(date);

    input.setHours(input.getHours() - currentOffset());

    return input;
}

const now = new Date();
const y2k = makeDate('2000-01-01 00:00:01');
const dst = makeDate('2000-07-01 00:00:01');

export const sample = {
    zone: userZone(),
    inputs: { y2k, dst, now },
    outputs: {
        y2kOffset: getOffset(y2k),
        dstOffset: getOffset(dst),
        nowOffset: currentOffset(),
    },
    baseY2K: y2k.toLocaleString(),
    fromBizj: fromBizj(y2k).toLocaleString(),
    toBizj: toBizj(y2k).toLocaleString(),
};

const DateUtil = {
    fromBizj,
    toBizj,
    sample,
};

export default DateUtil;

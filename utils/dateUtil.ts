/*

# DateUtil

Ease converting Eastern time to UTC for frontend uses.

 */

const fixSafari = (str: string) => str.replace(/-/g, '/');
const isValid = (date: Date) => (date instanceof Date) && (`${date}` !== 'Invalid Date');
const userZone = () => Intl.DateTimeFormat().resolvedOptions().timeZone;

// BEGIN

const BIZJ_OFFSET = 5;
const current = new Date().toString();
const winter = safeDate('2000-01-01 00:00:00').toString();
const summer = safeDate('2022-07-01 00:00:00').toString();

const currentOffset = getOffset(current);
const standardOffset = getOffset(winter);
const daylightOffset = getOffset(summer);

function safeDate (arg: string | number | Date) {
    const date = new Date(arg);

    if (isValid(date)) {
        return date;
    } else {
        return new Date(fixSafari(arg.toString()));
    }
}

function getOffset (date: string | number | Date) {
    return safeDate(date).getTimezoneOffset() / 60; // hours from GMT
}

export function fromBizj (date: string | number | Date) {
    const input = safeDate(date);
    input.setHours(input.getHours() + BIZJ_OFFSET);
    return input;
}

export function toBizj (date: string | number | Date) {
    const input = safeDate(date);
    input.setHours(input.getHours() - BIZJ_OFFSET);
    return input;
}

export const sample = {
    zone: userZone(),
    inputs: { winter, summer, current },
    outputs: {
        standardOffset,
        daylightOffset,
        currentOffset,
    },
    baseStd: new Date(winter).toLocaleString(),
    fromBizj: fromBizj(winter).toLocaleString(),
    toBizj: toBizj(winter).toLocaleString(),
};

const DateUtil = {
    fromBizj,
    toBizj,
    sample,
};

export default DateUtil;

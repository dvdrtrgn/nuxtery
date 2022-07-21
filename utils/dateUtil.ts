/*

# DateUtil

Ease converting Eastern time to UTC for frontend uses.

 */

// GENERICS

const fixSafari = (str: string) => str.replace(/-/g, '/');
const isValid = (date: Date) => (date instanceof Date) && (`${date}` !== 'Invalid Date');
const userZone = () => Intl.DateTimeFormat().resolvedOptions().timeZone;

function safeDate (arg: string | number | Date) {
    const date = new Date(arg);

    if (isValid(date)) {
        return date;
    } else {
        // a DB string? ex: 2000-01-01 (safari needs slashes)
        arg = fixSafari(arg.toString());
        return new Date(arg);
    }
}

// SPECIFICS

const BIZJ_STD_OFFSET = 5;
const current = new Date().toString();
const daylight = safeDate('2022-07-01 00:00:00').toString();
const standard = safeDate('2000-01-01 00:00:00').toString();

function getOffset (date: string | number | Date) {
    return safeDate(date).getTimezoneOffset() / 60; // hours from GMT
}

export function bizj2utc (date: string | number | Date) {
    const input = safeDate(date);
    input.setHours(input.getHours() + BIZJ_STD_OFFSET);
    return input;
}

export function utc2bizj (date: string | number | Date) {
    const input = safeDate(date);
    input.setHours(input.getHours() - BIZJ_STD_OFFSET);
    return input;
}

export const specimen = {
    zone: userZone(),
    offsets: {
        currentOffset: getOffset(current),
        daylightOffset: getOffset(daylight),
        standardOffset: getOffset(standard),
    },
    inputs: { current, daylight, standard },
    outputs: {
        baseStd: new Date(standard).toLocaleString(),
        bizj2utc: bizj2utc(standard).toLocaleString(),
        utc2bizj: utc2bizj(standard).toLocaleString(),
    },
};

const DateUtil = {
    bizj2utc,
    utc2bizj,
    specimen,
};

export default DateUtil;

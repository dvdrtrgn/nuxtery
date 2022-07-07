export const PRIMITIVES = ['string', 'number', 'bigint', 'boolean', 'undefined', 'symbol', 'null'];

export const isPrimitive = (arg:any) => PRIMITIVES.includes(typeof arg);

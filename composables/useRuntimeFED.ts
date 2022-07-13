/*
# useRuntimeFED

Extract config for logging during dev.
*/
import { stringify } from '../utils/circular-json.mjs'; // stringify is probably unneccessary here

export default function () {
    const config = useRuntimeConfig();

    return stringify(config);
};

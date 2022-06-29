import { stringify } from '../utils/circular-json.mjs'; // stringify is probably unneccessary here

export default function () {
    console.log('Ready on', 'http://localhost:3000/');

    const config = useRuntimeConfig();
    return stringify(config);
};

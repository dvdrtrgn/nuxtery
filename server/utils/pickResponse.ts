import type { IncomingMessage, ServerResponse } from 'http';
// import { stringify } from '~~/utils/circular-json.mjs';

const stringify = JSON.stringify;

export default function (object: {}) {
    return (_req: IncomingMessage, res: ServerResponse) => {
        const string = stringify(object);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(string);
        res.end();
    };
};

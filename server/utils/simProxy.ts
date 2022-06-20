/* eslint-disable no-console */
import type { IncomingMessage, ServerResponse } from 'http';

export default function ({
    queryParam,
    baseUrl,
}) {
    return async (req: IncomingMessage, res: ServerResponse) => {
        const queryObject = new URL(req.url, 'x://x');
        const query = queryObject.searchParams.get(queryParam);

        let apiData = [];
        let dataStr = '[]';

        if (query) {
            try {
                apiData = await $fetch(`${baseUrl}${query}`);
                dataStr = JSON.stringify(apiData);
            } catch (err) {
                console.warn(err);
            }
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(dataStr);
        res.end();
    };
}

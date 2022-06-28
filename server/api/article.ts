/* eslint-disable no-console */
import type { IncomingMessage, ServerResponse } from 'http';
import data from '~/data/potentialfullreturn.json';

export default (_req: IncomingMessage, res: ServerResponse) => {
    const dataStr = JSON.stringify(data.article);
    // if (query) {
    //     try {
    //         apiData = await $fetch(`${baseUrl}${query}`);
    //     } catch (err) {
    //         console.warn(err);
    //     }
    // }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(dataStr);
    res.end();
};

import { IncomingMessage } from 'h3';

const DELAY = 88;
const sleep = () => new Promise(resolve => setTimeout(resolve, DELAY));

export default async (msg:IncomingMessage) => {
    console.log(`Sleep for ${DELAY}`, Date.now(), msg.url);
    await sleep();
};

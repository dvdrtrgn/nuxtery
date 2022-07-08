import authors from './article/authors.js';
import content from './article/content.js';
import leadins from './article/leadins.js';

import journal from './business/journal.js';
import market from './business/market.js';

import metadata from './other/metadata.js';
import randos from './other/randos.js';
import topnav from './other/topnav.js';

// match potentialfullreturn.json
export default {
    article: {
        authors,
        content,
        journal,
        market,
        leadins,
        metadata: {
            data: metadata,
        },
        topnav,
        ...randos,
    },
};

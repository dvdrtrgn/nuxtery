function calcVirtualLines (ele) {

}

export default {
    space_between_ad: 999,
    wiggle_room: -333,
    idealized_width_for_calcing_height: 1024,
    // calc based on virutal lines
    // round to nearest para and then chunk it
    // get content for article, and prepare chunks and where to insert ads
    pacing_pct_defaults: {
        'default': 0,
        'featured_video': 0.625,
        'featured_gallery': 0.7,
        'featured_image': 0.625,
        'byline': 0.1,
        'tagline': 0.1,
        'partner_tagline': 0.2,
        'paragraph': 'text_length',
        'list': 'text_length',
        'blockquote': 'text_length',
        'header': 'text_length',
        'horizontal_line': 0.071,
        'image': 0.5,
        'gallery': 0.5,
        'video': 0.5,
        'infographic': 1,
        'map': 1,
        'embed': 0.5,
        'csv_tables': 0.5,
        'top25list': 0.5,
        'pulse': 0.5,
        'collection': 0.5,
        'event': 0.25,
        'nomination': 0.25,
        'recirc': 'recirc_length',
        'recirc_item': 0.145,
        'special_section': 0.2,
        'correction_note': 0,
        'corrections': 0.071,
        'leads_promo': 0.25,
    },

    content_with_ads: [
        [
            {
                'content_html': "One of the Kansas City area's largest  — and oldest — women-owned businesses has sold.",
                'content_type': 'paragraph',
            },
            {
                'content_html': 'After nearly a century in business, Kansas City Electrical Supply Co. was acquired by Elliott Electric Supply in late April. The Lenexa-based company, which also had a location in Kansas City, had 49 employees as of August.',
                'content_type': 'paragraph',
            },
        ],
        {
            ad: 'c1', // statically inserted after "2 paragraphs"
        },
        [
            {
                'content_html': "KCES ranked No. 141 on <em>Electrical Wholesaling</em>'s Top 150 ranking in 2021 with $24.6 million in 2020 sales. Elliott Electric Supply ranked No. 9 on the industry publication's ranking in 2021 — the same position it holds in the magazine's <a href=\"https://cdn.baseplatform.io/files/base/ebm/ewweb/document/2022/05/EW_2022_Top_150_Ranking_and_A_Z_list.629650c280b74.pdf\" target=\"_blank\">recently released Top 150 ranking [PDF]</a>.",
                'content_type': 'paragraph',
            },
            {
                'content_html': "Founded in 1927, KCES was a distributor of electrical products. Led by owner and President Kaylin Crain, the 100% women-owned business ranked No. 15 on the <em>Kansas City Business Journal</em>'s most recent <a href=\"https://www.bizjournals.com/kansascity/subscriber-only/2021/09/10/kc-area-female-owned-businesses.html\" target=\"_blank\">Women-Owned Businesses List</a>.",
                'content_type': 'paragraph',
            },
            {
                'content_html': '"I want to thank each of you for choosing Kansas City Electrical Supply Co. and putting your trust in us over the last 95 years and bringing us to where we are today," Crain said in a letter to customers <a href="https://tedmag.com/elliott-electric-supply-acquires-kansas-city-electrical-supply/" target="_blank">obtained by the online magazine tED</a>. "We come to work every day for you and our commitment is stronger than ever to continue serving you."',
                'content_type': 'paragraph',
            },
        ],
        {
            ad: 'c2', //  dynamically inserted (calculated from the `space_between_ad` and last ad)
        },
        [
            {
                'content_html': 'Nacogdoches, Texas-based Elliott Electric Supply also is an electrical distributor. According to its website, the company currently has more than 170 locations and more than 2,100 employees. It reports more than $1.5 billion in annual sales.',
                'content_type': 'paragraph',
            },
            {
                'content_html': "Founded in 1972, Elliott Electric Supply is a family-owned business led by its founder, Bill Elliott, who remains the company's chairman.",
                'content_type': 'paragraph',
            },
        ],
    ],
};

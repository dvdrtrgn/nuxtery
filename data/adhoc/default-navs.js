const _defaultMarketNavigation = {
    'topItems': {
        'items': [
            {
                'title': 'Latest News',
                'uri': '/%%MARKET%%/news',
            },
            {
                'title': 'Commercial Real Estate',
                'uri': '/%%MARKET%%/news/commercial-real-estate',
            },
            {
                'title': 'Banking',
                'uri': '/%%MARKET%%/news/banking-and-financial-services',
            },
            {
                'title': 'Technology',
                'uri': '/%%MARKET%%/news/technology',
            },
            {
                'title': 'Health Care',
                'uri': '/%%MARKET%%/news/health-care',
            },
            {
                'title': 'Residential Real Estate',
                'uri': '/%%MARKET%%/news/residential-real-estate',
            },
            {
                'separator': '1',
            },
            {
                'title': 'Events',
                'uri': '/%%MARKET%%/event',
            },
            {
                'method': 'navItems',
                'options': {
                    'limit': 1,
                    'placement': 'top-event',
                },
            },
        ],
    },
    'sections': {
        'industries': {
            'title': 'Industries & Topics',
            'items': [
                {
                    'method': 'industries',
                    'options': {
                        'additional_topics': 'diversity-equity-and-inclusion',
                    },
                },
                {
                    'method': 'navItems',
                    'options': {
                        'placement': 'channel',
                    },
                },
            ],
            'columns': 4,
        },
        'sponsored_content': {
            'title': 'Sponsored Content',
            'items': [
                {
                    'title': 'All Partner Content',
                    'uri': '/%%MARKET%%/partner-content',
                },
                {
                    'method': 'navItems',
                    'options': {
                        'placement': 'native',
                    },
                },
                {
                    'separator': true,
                },
                {
                    'title': 'How To',
                    'uri': '/%%MARKET%%/news/how-to',
                },
            ],
            'columns': 4,
        },
        'events': {
            'title': 'Events',
            'items': [
                {
                    'title': '%%JOURNALABBREVIATION%% Events',
                    'uri': '/%%MARKET%%/event',
                },
                {
                    'title': 'Nominations',
                    'uri': '/%%MARKET%%/nomination',
                },
                {
                    'title': 'Event Photos',
                    'uri': '/%%MARKET%%/photo-center',
                },
                {
                    'title': 'Business Events Calendar',
                    'uri': '/%%MARKET%%/calendar',
                },
                {
                    'method': 'navItems',
                    'options': {
                        'limit': 4,
                        'placement': 'event',
                    },
                },
            ],
            'columns': 4,
        },
        'products': {
            'title': 'Products',
            'items': [
                {
                    'title': 'Book of Lists',
                    'uri': '/%%MARKET%%/datacenter/lists',
                },
                {
                    'title': 'Book of Lists Unlimited',
                    'uri': '/%%MARKET%%/datacenter/lists/book-of-lists-unlimited',
                },
                {
                    'title': 'People on the Move',
                    'uri': '/%%MARKET%%/potm',
                },
                {
                    'title': 'BizSpotlight',
                    'uri': '/%%MARKET%%/press-release',
                },
                {
                    'method': 'listingTypes',
                },
                {
                    'title': 'BizLeads',
                    'uri': 'https://www.bizjournals.com/bizleads',
                },
                {
                    'title': 'Store',
                    'uri': 'https://promo.bizjournals.com/%%MARKET%%/store/',
                },
                {
                    'title': 'Leads',
                    'uri': '/%%MARKET%%/datacenter/leads',
                },
                {
                    'title': 'Crane Watch',
                    'uri': '/%%MARKET%%/feature/crane-watch',
                },
                {
                    'title': 'Advertise With Us',
                    'uri': 'https://advertise.bizjournals.com/brands/%%MARKET%%/',
                },
                {
                    'title': 'Leadership Trust',
                    'uri': '/%%MARKET%%/news/leadership-trust',
                },
                {
                    'title': 'Market Intelligence',
                    'uri': '/business-intelligence',
                },
            ],
            'columns': 4,
        },
        'publications': {
            'title': 'Publications',
            'items': [
                {
                    'title': 'Newsletter Sign-Up',
                    'uri': '/account/%%MARKET%%/newsletters',
                },
                {
                    'title': 'Start a Subscription',
                    'uri': '/%%MARKET%%/subscribe',
                },
                {
                    'title': 'Subscriber-Only Content',
                    'uri': '/%%MARKET%%/news/subscribers',
                },
                {
                    'title': 'Weekly Digital Edition',
                    'uri_method': 'digitalEdition',
                },
                {
                    'title': 'Legal Notices',
                    'uri': '/%%MARKET%%/resources/legal-notices',
                },
            ],
            'columns': 4,
        },
    },
};
const _defaultNationalNavigation = {
    'topItems': {
        'items': [
            {
                'title': 'Latest News',
                'uri': '/news',
            },
            {
                'title': 'Commercial Real Estate',
                'uri': '/news/commercial-real-estate',
            },
            {
                'title': 'Banking',
                'uri': '/news/banking-and-financial-services',
            },
            {
                'title': 'Technology',
                'uri': '/news/technology',
            },
            {
                'title': 'Health Care',
                'uri': '/news/health-care',
            },
            {
                'title': 'Residential Real Estate',
                'uri': '/news/residential-real-estate',
            },
            {
                'title': 'American Inno',
                'uri': 'https://www.bizjournals.com/inno',
            },
            {
                'separator': '1',
            },
            {
                'title': 'Events',
                'uri': '/calendar',
            },
            {
                'method': 'navItems',
                'options': {
                    'limit': 1,
                    'placement': 'top-event',
                },
            },
        ],
    },
    'sections': {
        'industries': {
            'title': 'Industries & Topics',
            'items': [
                {
                    'method': 'industries',
                    'options': {
                        'additional_topics': 'diversity-equity-and-inclusion',
                    },
                },
                {
                    'title': 'American Inno',
                    'uri': 'https://www.bizjournals.com/inno',
                    'options': [],
                },
                {
                    'method': 'navItems',
                    'options': {
                        'placement': 'channel',
                    },
                },
            ],
            'columns': 4,
        },
        'sponsored_content': {
            'title': 'Sponsored Content',
            'items': [
                {
                    'title': 'Thought Leadership',
                    'uri': '/bizjournals/partner-content',
                },
                {
                    'title': 'Partner Insights',
                    'uri': '/bizjournals/partner-insights',
                },
                {
                    'method': 'navItems',
                    'options': {
                        'placement': 'native',
                    },
                },
                {
                    'separator': true,
                },
                {
                    'title': 'How To',
                    'uri': '/news/how-to',
                },
            ],
            'columns': 4,
        },
        'events': {
            'title': 'Events',
            'items': [
                {
                    'title': 'TBJ Events',
                    'uri': '/calendar',
                },
                {
                    'title': 'Nominations',
                    'uri': '/nominations',
                },
                {
                    'title': 'Business Events Calendar',
                    'uri': '/calendar/bizjournals',
                },
                {
                    'method': 'navItems',
                    'options': {
                        'limit': 4,
                        'placement': 'event',
                    },
                },
            ],
            'columns': 4,
        },
        'products': {
            'title': 'Products',
            'items': [
                {
                    'title': 'Book of Lists',
                    'uri': '/book-of-lists',
                },
                {
                    'title': 'People on the Move',
                    'uri': '/potm',
                },
                {
                    'title': 'BizLeads',
                    'uri': '/bizleads',
                },
                {
                    'method': 'listingTypes',
                },
                {
                    'title': 'Store',
                    'uri': 'https://promo.bizjournals.com/bizjournals/store/',
                },
                {
                    'title': 'Advertise With Us',
                    'uri': 'https://advertise.bizjournals.com',
                },
                {
                    'title': 'Leadership Trust',
                    'uri': '/bizjournals/news/leadership-trust',
                },
                {
                    'title': 'Market Intelligence',
                    'uri': '/business-intelligence',
                },
            ],
            'columns': 4,
        },
        'publications': {
            'title': 'Publications',
            'items': [
                {
                    'title': 'Newsletter Sign-Up',
                    'uri': '/account/bizjournals/newsletters',
                },
                {
                    'title': 'Start a Subscription',
                    'uri': '/bizjournals/subscribe/national',
                },
                {
                    'title': 'Subscriber-Only Content',
                    'uri': '/news/subscribers',
                },
            ],
            'columns': 4,
        },
    },
};

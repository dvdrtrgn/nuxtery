export default {
    'topItems': {
        'items': [
            {
                'title': 'Latest News',
                'uri': '/foo/news',
                'options': [],
            },
            {
                'title': 'Lists & Leads',
                'uri': '/foo/datacenter',
            },
            {
                'title': 'Commercial Real Estate',
                'uri': '/foo/news/commercial-real-estate',
                'options': [],
            },
            {
                'title': 'Banking',
                'uri': '/foo/news/banking-and-financial-services',
                'options': [],
            },
            {
                'title': 'Technology',
                'uri': '/foo/news/technology',
                'options': [],
            },
            {
                'title': 'Health Care',
                'uri': '/foo/news/health-care',
                'options': [],
            },
            {
                'title': 'Residential Real Estate',
                'uri': '/foo/news/residential-real-estate',
                'options': [],
            },
            {
                'title': 'North Texas Inno',
                'uri': 'https://www.bizjournals.com/dallas/inno',
                'options': [],
            },
            {
                'separator': '1',
            },
            {
                'title': 'Events',
                'uri': '/foo/event',
                'options': [],
            },
            {
                'method': 'navItems',
                'options': {
                    'placement': 'top-event',
                    'limit': 1,
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
                    'title': 'North Texas Inno',
                    'uri': 'https://www.bizjournals.com/dallas/inno',
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
            'group': 'group_1',
        },
        'sponsored_content': {
            'title': 'Partner Insights (Sponsored Content)',
            'items': {
                '0': {
                    'title': 'Partner Content',
                    'uri': '/foo/partner-content',
                    'options': [],
                },
                '2': {
                    'method': 'sponsoredContentItems',
                    'options': [],
                },
            },
            'group': 'group_2',
            'columns': 4,
        },
        'events': {
            'title': 'Events',
            'items': [
                {
                    'title': 'DBJ Events',
                    'uri': '/foo/event',
                    'options': [],
                },
                {
                    'title': 'Nominations',
                    'uri': '/foo/nomination',
                    'options': [],
                },
                {
                    'title': 'Business Events Calendar',
                    'uri': '/foo/calendar',
                    'options': [],
                },
                {
                    'method': 'eventHubs',
                    'options': {
                        'limit': 4,
                        'category': 401,
                    },
                },
                {
                    'method': 'navItems',
                    'options': {
                        'placement': 'event',
                    },
                },
            ],
            'group': 'group_2',
            'columns': 4,
        },
        'products': {
            'title': 'Marketing Solutions',
            'items': [
                {
                    'title': 'Book of Lists',
                    'uri': '/foo/datacenter/lists',
                    'options': [],
                },
                {
                    'title': 'Book of Lists Unlimited',
                    'uri': '/foo/datacenter/lists/book-of-lists-unlimited',
                    'options': [],
                },
                {
                    'title': 'People on the Move',
                    'uri': '/foo/potm',
                    'options': [],
                },
                {
                    'title': 'BizSpotlight',
                    'uri': '/foo/press-release',
                    'options': [],
                },
                {
                    'method': 'listingTypes',
                    'options': [],
                },
                {
                    'title': 'BizLeads',
                    'uri': 'https://www.bizjournals.com/bizleads',
                    'options': [],
                },
                {
                    'title': 'BizEquity',
                    'uri': 'https://www.bizequity.com/',
                    'options': [],
                },
                {
                    'title': 'Store',
                    'uri': 'https://promo.bizjournals.com/foo/store/',
                    'options': [],
                },
                {
                    'title': 'Leads',
                    'uri': '/foo/datacenter/leads',
                    'options': [],
                },
                {
                    'title': 'Crane Watch',
                    'uri': '/foo/feature/crane-watch',
                    'options': [],
                },
                {
                    'title': 'Advertise With Us',
                    'uri': 'https://advertise.bizjournals.com/brands/foo/',
                    'options': [],
                },
                {
                    'title': 'Leadership Trust',
                    'uri': '/foo/news/leadership-trust',
                    'options': [],
                },
                {
                    'title': 'Research Intelligence',
                    'uri': '/business-intelligence',
                    'options': [],
                },
                {
                    'method': 'navItems',
                    'options': {
                        'placement': 'product',
                    },
                },
            ],
            'columns': 4,
            'group': 'group_1',
        },
        'publications': {
            'title': 'Newsletters & Subscriptions',
            'items': [
                {
                    'title': 'Newsletter Sign-Up',
                    'uri': '/account/foo/newsletters',
                    'options': [],
                },
                {
                    'title': 'Start a Subscription',
                    'uri': '/foo/subscribe',
                    'options': [],
                },
                {
                    'title': 'Subscriber-Only Content',
                    'uri': '/foo/news/subscribers',
                    'options': [],
                },
                {
                    'title': 'Weekly Digital Edition',
                    'uri_method': 'digitalEdition',
                    'options': [],
                },
                {
                    'method': 'navItems',
                    'options': {
                        'placement': 'publication',
                    },
                },
            ],
            'group': 'group_2',
            'columns': 4,
        },
    },
};

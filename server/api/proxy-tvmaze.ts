import useProxy from '~/server/utils/simProxy';

export default useProxy({
    queryParam: 'search',
    baseUrl: 'https://api.tvmaze.com/search/shows?q=',
});

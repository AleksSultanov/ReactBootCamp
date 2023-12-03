import { baseApi } from '.';

export const comicsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getComics: builder.query({
            query: () => `/comics`,
        }),
        getComicsById: builder.query({
            query: (comicsId) => `/comics/${comicsId}`,
        }),
        getComicsByIdTr: builder.query({
            query: (comicsId) => `/comics/${comicsId}`,
            transformResponse: (response) => response.data.results[0],
        }),
    }),
});

export const {
    useGetComicsQuery,
    useGetComicsByIdQuery,
    useGetComicsByIdTrQuery,
    useLazyGetComicsByIdQuery,
} = comicsApi;

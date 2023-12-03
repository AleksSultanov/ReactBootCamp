import { baseApi } from '.';

export const comicsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getComics: builder.query({
      query: () => '/comics',
      transformResponse: (response) => response.data.results,
    }),
    getComicsById: builder.query({
      query: (comicsId) => `/comics/${comicsId}`,
      transformResponse: (response) => response.data.results[0],
    }),
  }),
});

export const {
  useGetComicsQuery,
  useGetComicsByIdQuery,
  useLazyGetComicsByIdQuery,
} = comicsApi;

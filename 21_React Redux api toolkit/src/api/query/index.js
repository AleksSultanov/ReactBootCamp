import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseUrl = 'https://gateway.marvel.com/v1/public';
const fakeUrl = 'https://jsonplaceholder.typicode.com';
const apiTs = '12';
const apiKey = '49bdaf1506ac22610fede96e3c7e694d';
const apiHash = '50ba9f3a4e322979804c4d8804c294b1';

function appendQueryStringParam(args, key, value) {
    let urlEnd = typeof args === 'string' ? args : args.url;

    if (urlEnd.indexOf('?') < 0) {
        urlEnd += '?';
    } else {
        urlEnd += '&';
    }

    urlEnd += `${key}=${value}`;

    return typeof args === 'string' ? urlEnd : { ...args, url: urlEnd };
}

const baseMarvelQuery = async (args, api, extraOptions) => {
    args = appendQueryStringParam(args, 'apikey', apiKey);
    args = appendQueryStringParam(args, 'ts', apiTs);
    args = appendQueryStringParam(args, 'hash', apiHash);

    return await fetchBaseQuery({ baseUrl })(args, api, extraOptions);
};

export const baseApi = createApi({
    reducerPath: 'marvel',
    baseQuery: baseMarvelQuery,
    endpoints: () => ({}),
});

// export const baseApi = createApi({
//     reducerPath: 'marvel',
//     baseQuery: fetchBaseQuery({
//         baseUrl,
//     }),
//     endpoints: () => ({}),
// });

// export const baseApi = createApi({
//     reducerPath: 'marvel',
//     baseQuery: fetchBaseQuery({
//         baseUrl,
//     }),
//     endpoints: (builder) => ({
//         getComics: builder.query({
//             query: () => `/comics?apikey=${apiKey}&ts=${apiTs}&hash=${apiHash}`,
//         }),
//     }),
// });

// export const { useGetComicsQuery } = baseApi;

export const fakeApi = createApi({
    reducerPath: 'fakeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: fakeUrl,
    }),
    endpoints: () => ({}),
});

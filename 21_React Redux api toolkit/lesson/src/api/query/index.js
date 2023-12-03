import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = `12077ea809e2bf0e7f6571f01e2e0765`;
const baseUrl = `https://gateway.marvel.com/v1/public`;

const baseMarvelQuery = async (args, api, extraOptions) => {
  args = appendQueryStringParam(args, 'apikey', apiKey);

  return await fetchBaseQuery({ baseUrl })(args, api, extraOptions);
};

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

export const baseApi = createApi({
  reducerPath: 'marvel',
  baseQuery: baseMarvelQuery,
  endpoints: () => ({}),
});

export const fakeApi = createApi({
  reducerPath: 'fakeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: () => ({}),
});

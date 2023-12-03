import { fakeApi } from '.';

export const usersApi = fakeApi.injectEndpoints({
    tagTypes: ['Users'],
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => '/users',
            providesTags: ['Users'],
        }),
        getUserById: builder.query({
            query: (id) => `/users/${id}`,
        }),
        addUser: builder.mutation({
            query: ({ ...payload }) => ({
                url: `/users`,
                method: 'POST',
                body: payload,
            }),
            invalidatesTags: ['Users'],
        }),
    }),
});

export const { useGetUsersQuery, useGetUserByIdQuery, useAddUserMutation } =
    usersApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Feed } from '../../types/feed.ts';
import { API_HOST } from '../../config/consts.ts';

const POSTS_PER_PAGE = 6;

export const feedApi = createApi({
  reducerPath: 'feedApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_HOST,
  }), endpoints: (builder) => ({
    fetchFeed: builder.query<Feed, number>({
      query: (skip) => `hw/feed.json?skip=${skip * POSTS_PER_PAGE}&limit=${POSTS_PER_PAGE}`,
    }),
    postImpression: builder.mutation<void, { postId: string }>({
      query: ({ postId }) => ({
        url: `?itemId=${postId}`,
      }),
    }),
  }),
});

export const { useFetchFeedQuery, usePostImpressionMutation } = feedApi;

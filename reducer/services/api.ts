import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiUrl: string = 'https://dragonball-api.com/api/';

export interface Character {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
      image: string;
  affiliation: string;
  deletedAt: string | null;
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
    getSayans: builder.query<{ characters: Character[] }, void>({
      query: () => 'characters?page=1&limit=40',
    }),
  }),
});

export const { useGetSayansQuery } = api;
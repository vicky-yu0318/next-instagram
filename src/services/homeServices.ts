// TODO: RTK Query 實作參考文件 https://redux-toolkit.js.org/rtk-query/overview
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IGPost {
  id: number;
  location: string;
  account: string;
  avatar: string;
  photo: string;
  likes: number;
  description: string;
  hashTags: string;
  createTime: string;
}

interface IGStory {
  id: number;
  name: string;
  avatar: string;
}

// TODO: 建立 api 實體 (會產出 reducer， 裡面有 pending, seccess, error 的狀態)，直接可調用
export const homeApi = createApi({
  reducerPath: "homeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    // TODO: 泛型首值： 是 "回傳return"  陣列，裡面是 IGPost 類型； 第二個值："傳入" 的參數如id； builder.query 是 createApi 所提供的 api
    getIGPosts: builder.query<IGPost[], number | "all">({
      query: (id) => {
        if (id !== "all") {
          return `api/posts?id=${id}`;
        } else {
          return "api/posts";
        }
      },
    }),

    getIGStories: builder.query<IGStory[], number | "all">({
      query: (id) => {
        if (id !== "all") {
          return `api/stories?id=${id}`;
        } else {
          return "api/stories";
        }
      },
    }),
  }),
});

export const { useGetIGPostsQuery, useGetIGStoriesQuery } = homeApi;

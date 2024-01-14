// TODO: RTK Query 實作參考文件 https://redux-toolkit.js.org/rtk-query/overview
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type TodoData = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

// TODO: 建立 api 實體 (會產出 reducer， 裡面有 pending, seccess, error 的狀態)，直接可調用
export const todoApiService = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    // TODO: 首值：return (any)(TodoData) 結果； 第二個值：傳入 string 的 input (就是以下的 id)，  builder.query 是 createApi 所提供的 api
    getTodoList: builder.query<TodoData, string>({
      query: (id) => `todos/${id}`,
    }),
  }),
});

export const { useGetTodoListQuery } = todoApiService;

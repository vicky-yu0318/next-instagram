import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "@/slices/todo";
import friendReducer from "@/slices/friendSlice";
import { todoApi } from "@/services/todoApi";
import { homeApi } from "@/services/homeServices";

const reducers = combineReducers({
  todoReducer,
  [todoApi.reducerPath]: todoApi.reducer,
  [homeApi.reducerPath]: homeApi.reducer,
  friendReducer,
});

const store = configureStore({
  reducer: reducers,

  // TODO: 加入 middleware 的寫法
  // TODO: configureStore 會自動將目前 middleware 寫進來
  middleware: (getCurrentMiddlewares) => {
    return getCurrentMiddlewares()
      .concat(todoApi.middleware)
      .concat(homeApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>; // ts 推斷類型
export type AppDispatch = typeof store.dispatch;

export default store;

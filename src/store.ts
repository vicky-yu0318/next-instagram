import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "@/slices/todo";
import { combineReducers } from "@reduxjs/toolkit";
import { todoApiService } from "@/services/todoApi";

const reducers = combineReducers({
  todoReducer,
  [todoApiService.reducerPath]: todoApiService.reducer, // 把他抽出來
});

const store = configureStore({
  // reducer: {
  //   todoReducer,
  // },
  reducer: reducers,

  // TODO: 加入 middleware 的寫法
  // TODO: configureStore 會自動將目前 middleware 寫進來
  middleware: (getCurrentMiddlewares) => {
    return getCurrentMiddlewares().concat(todoApiService.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>; // ts 推斷類型
export type AppDispatch = typeof store.dispatch;

export default store;

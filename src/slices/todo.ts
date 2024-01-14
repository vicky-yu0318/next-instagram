// TODO: redux 實作參考文件 https://redux.js.org/tutorials/typescript-quick-start

import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  todoList: Array<string>;
}

const initialState: InitialState = {
  todoList: ["todo..."],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // TODO: reducer 會因 toolkit 自動產生 action
    // TODO: state=> 當下狀態； action=> 對應的動作 (會帶 payload 和 type)
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    addTimestamp: (state) => {
      state.todoList.push(Date.now().toString());
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

// TODO: 寫好 action, 方便之後 dispatch 時調用
export const { addTodo, addTimestamp } = todoSlice.actions;

// TODO: 建立 store 時需要
export default todoSlice.reducer;

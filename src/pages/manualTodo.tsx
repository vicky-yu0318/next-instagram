import { useState } from "react";
import styled from "styled-components"; //https://www.npmjs.com/package/styled-components
import { useAppSelector, useAppDispatch } from "@/hooks";
import { addTodo, addTimestamp } from "@/slices/todo";
import { useGetTodoListQuery } from "@/services/todoApi";

function ManualTodo() {
  const todoReducer = useAppSelector((state) => state.todoReducer);
  const todoList = todoReducer.todoList;

  const dispatch = useAppDispatch();
  const [text, setText] = useState("");

  return (
    <div className="p-16">
      <div className="font-bold">TODO LIST</div>
      <input
        className="w-full h-[40px] text-blue-900 rounded outline pl-3"
        value={text}
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setText(e.target.value);
        }}
      />
      <div
        className="p-2 bg-cyan-500 active:bg-cyan-900 text-white rounded-xl mt-5 text-center"
        onClick={() => {
          // dispatch(addTodo("text"));
          if (!text) {
            alert("請輸入TODO內容");
            return;
          }
          dispatch(addTodo(text));
          setText("");
        }}
      >
        Submit
      </div>

      <div
        className="p-2 bg-cyan-500 active:bg-cyan-900 text-white rounded-xl mt-2 text-center"
        onClick={() => {
          dispatch(addTimestamp());
        }}
      >
        Record Timestamp
      </div>

      <div className="mt-3 bg-slate-200">
        {todoList.map((data, index) => {
          return (
            <div key={data}>
              <b>{index + 1}. </b>
              {data}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ManualTodo;

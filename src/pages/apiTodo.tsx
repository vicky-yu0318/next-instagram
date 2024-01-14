import { useGetTodoListQuery } from "@/services/todoApi";

function ApiTodo() {
  // api 打回的資料 ===============================================
  const { data, error, isLoading } = useGetTodoListQuery("2");
  const { userId = "空值", title = "空值" } = data || {};
  // =============================================================

  // TODO: 由於 ts 有提示 data 資料可能為 undefined, 因此需做處理
  // (法1) data?.userId
  // (法2) 『一開始』做處理，給空物件陣列

  return (
    <>
      <div className="bg-blue-100">
        {isLoading && <div>loading...</div>}
        {!isLoading && (
          <div>
            <p>Id : {userId}</p>
            <p>title: {title}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default ApiTodo;

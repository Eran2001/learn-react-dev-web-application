import React, { useEffect, useState, lazy } from "react";

import {
  useGetAllTodoQuery,
  useGetSingleTodoQuery,
} from "./queries/todos.querries";
import { isPending } from "@reduxjs/toolkit";

const Dashboard = lazy(() => import("./pages/dashboard"));

const App = () => {
  const [selectTodo, setSelectedTodo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    data: todoData,
    isPending: isTodoPending,
    isError: isTodoError,
  } = useGetAllTodoQuery();

  const {
    data: singleTodo,
    isPending: isSinglePending,
    isError: isSingleError,
  } = useGetSingleTodoQuery(selectTodo);

  const selectSingleTodo = (todo) => {
    setSelectedTodo(todo.id);
    setIsModalOpen(true);
  };

  return (
    <>
      <Dashboard />
      {isTodoPending ? (
        <div className="flex justify-center items-center min-h-[60vh]">
          Loading...
        </div>
      ) : isTodoError ? (
        <div className="flex justify-center items-center min-h-[60vh] text-red-500">
          There was an error
        </div>
      ) : (
        <>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
            {todoData?.map((todo) => (
              <li
                key={todo.id}
                className="border border-slate-300 rounded-lg p-4"
              >
                <div
                  className="flex items-center justify-between"
                  onClick={() => selectSingleTodo(todo)}
                >
                  <h3 className="text-xl md:max-w-50 max-w-40 truncate">
                    {todo.title}
                  </h3>
                  <p
                    className={`text-sm border rounded-xl px-2 ${todo.completed ? "text-green-500 bg-green-100" : "text-red-500 bg-red-100"}`}
                  >
                    {todo.completed ? "Done" : "Not done"}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {isModalOpen && (
            <div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
              onClick={() => setIsModalOpen(false)}
            >
              <div
                className="bg-white rounded-lg p-6 max-w-md w-full mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                {isSinglePending ? (
                  "Loading..."
                ) : (
                  <>
                    <h2 className="text-xl font-semibold mb-2">
                      {singleTodo?.title}
                    </h2>
                    <p>{singleTodo?.completed ? "Done" : "Not done"}</p>
                  </>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default App;

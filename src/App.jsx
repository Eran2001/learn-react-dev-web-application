import React, { useEffect, useState } from "react";

import { useGetAllTodoQuery } from "./queries/todos.querries";
import { isPending } from "@reduxjs/toolkit";

const App = () => {
  const {
    data: todoData,
    isPending: isTodoPending,
    isError: isTodoError,
  } = useGetAllTodoQuery();

  return (
    <>
      {/* <h1>App</h1> */}

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
                <div className="flex items-center justify-between">
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
        </>
      )}
    </>
  );
};

export default App;

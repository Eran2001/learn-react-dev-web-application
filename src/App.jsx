import React from "react";

import { useGetAllTodoQuery } from "./queries/todos.querries";
import { isPending } from "@reduxjs/toolkit";

const App = () => {
  const {
    data: todoData,
    isPending: isTodoPending,
    isError: isTodoError,
  } = useGetAllTodoQuery(2);

  return (
    <>
      <h1>App</h1>

      {isTodoPending ? (
        <div className="flex justify-center items-center min-h-[60vh]">
          Loading...
        </div>
      ) : isTodoError ? (
        <div className="flex justify-center items-center min-h-[60vh] text-red-500">
          There was an error
        </div>
      ) : (
        "Hello"
      )}
    </>
  );
};

export default App;

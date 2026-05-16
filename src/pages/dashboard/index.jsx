import React, { useState } from "react";

const Dashboard = () => {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber((prev) => prev + 1);
  };

  return (
    <div className="flex items-center justify-center min-h-screen flex-col gap-4">
      <div className="w-auto h-auto p-4 rounded-sm text-center bg-sky-500 overflow-hidden">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-lg">Number: {number}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={increment}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

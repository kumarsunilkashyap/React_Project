import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col mt-16">
      <main className="flex-1 p-4 pt-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold">Users</h2>
            <p className="mt-2">Total: 120</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold">Orders</h2>
            <p className="mt-2">Total: 75</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold">Revenue</h2>
            <p className="mt-2">$5,000</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold">Products</h2>
            <p className="mt-2">Total: 50</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

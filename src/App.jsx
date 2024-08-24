// src/App.jsx
import React, { useState } from 'react';
import Widget from './Widget';
import Dashboard from './Dashboard';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <aside className={`w-64 bg-gray-800 text-white p-4 fixed inset-y-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out md:relative md:translate-x-0`}>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        {/* Add sidebar navigation here */}
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center md:hidden">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <h1 className="text-xl">Dashboard</h1>
        </header>
        <main className="flex-1 bg-gray-100 p-4">
          {/* Add main content here */}
          <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Widget title="Widget 1" content="This is the content of widget 1" />
            <Widget title="Widget 2" content="This is the content of widget 2" />
            <Widget title="Widget 3" content="This is the content of widget 3" />
          </div>
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default App;

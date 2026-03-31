import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      <Header />
      <div className="flex">
        <Sidebar aria-label="Main navigation" />
        <main className="flex-1 lg:pl-64 pt-16 transition-all duration-300">
          <div className="max-w-7xl mx-auto min-h-[calc(100vh-64px)]">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;

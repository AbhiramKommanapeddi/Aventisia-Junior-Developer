import React from 'react';
import { Search, Bell, ChevronDown, Hexagon } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-secondary text-white border-b border-white/10 flex items-center justify-between px-6 z-50">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="bg-primary/20 p-2 rounded-lg">
            <Hexagon className="text-primary" size={24} fill="currentColor" />
          </div>
          <span className="text-xl font-bold tracking-tight">Worcspace</span>
        </div>

        <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-md text-sm font-medium cursor-pointer hover:bg-white/20 transition-all border border-white/10">
          <span>Worcspace 1</span>
          <ChevronDown size={14} />
        </div>
      </div>

      <div className="flex-1 max-w-xl mx-8 hidden md:block">
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
            <Search size={16} />
          </div>
          <input
            type="text"
            className="w-full bg-white/10 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-400"
            placeholder="Search..."
          />
          <div className="absolute inset-y-0 right-3 flex items-center text-gray-500 text-[10px] font-bold">
            <span className="bg-secondary/40 border border-white/20 px-1 rounded">⌘K</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-gray-300 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10">
          <Bell size={20} />
        </button>
        <div className="flex items-center gap-2 cursor-pointer hover:bg-white/10 p-1.5 rounded-lg transition-all">
          <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold ring-2 ring-white/20">
            GK
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import { Bell, Search, Settings } from 'lucide-react';
import Button from '../components/common/Button';

const DashboardLayout = ({ children, type = 'vendor' }) => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar type={type} activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 ml-72">
        {/* Header */}
        <header className="h-20 bg-white/70 backdrop-blur-md border-b border-slate-200 sticky top-0 z-30 px-8 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-display font-bold text-slate-900 capitalize">
              {activeTab.replace('_', ' ')}
            </h2>
            <p className="text-xs text-slate-500 font-medium">Welcome back, Apex Services Ltd.</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search leads, invoices..." 
                className="bg-slate-100 border-none rounded-xl pl-10 pr-4 py-2 text-sm w-64 focus:ring-2 focus:ring-primary-500/20"
              />
            </div>
            
            <button className="p-2.5 text-slate-500 hover:bg-slate-100 rounded-xl relative">
              <Bell size={20} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-accent-500 rounded-full border-2 border-white animate-pulse"></span>
            </button>

            <div className="h-10 w-px bg-slate-200 mx-2"></div>

            <div className="flex items-center gap-3 pl-2">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-bold text-slate-900">John Doe</div>
                <div className="text-[10px] font-bold text-primary-600 tracking-wider uppercase">Business Admin</div>
              </div>
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-primary-600 to-primary-400 border-2 border-white shadow-lg overflow-hidden flex items-center justify-center text-white font-bold text-lg">
                JD
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;

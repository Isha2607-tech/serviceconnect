import React, { useState, useEffect } from 'react';
import { Search, MapPin, Menu, X, Bell, User, LayoutGrid } from 'lucide-react';
import Button from '../common/Button';
import { cn } from '../../utils/cn';

const Navbar = ({ onSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
      isScrolled ? 'bg-white/80 backdrop-blur-lg border-slate-200 py-3' : 'bg-transparent border-transparent py-5'
    )}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0 cursor-pointer group">
          <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform shadow-lg shadow-primary-500/20">
            <LayoutGrid size={24} />
          </div>
          <span className="text-xl font-display font-bold tracking-tight text-slate-900 hidden sm:block">
            Service<span className="text-primary-600">Connect</span>
          </span>
        </div>

        {/* Desktop Search Bar (Simplified) */}
        <div className={cn(
          "hidden md:flex flex-1 max-w-2xl bg-slate-100/50 backdrop-blur-md border border-slate-200 rounded-2xl p-1 items-center transition-all duration-300",
          isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}>
          <div className="flex items-center gap-2 px-3 border-r border-slate-200 min-w-[140px]">
            <MapPin size={18} className="text-primary-500" />
            <input 
              type="text" 
              placeholder="Mumbai" 
              className="bg-transparent border-none focus:ring-0 text-sm font-medium w-full placeholder:text-slate-500"
            />
          </div>
          <div className="flex items-center flex-1 gap-2 px-4">
            <Search size={18} className="text-slate-400" />
            <input 
              type="text" 
              placeholder="Search services, businesses..." 
              className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-slate-500"
            />
          </div>
          <Button size="sm" className="rounded-xl px-4">Search</Button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <button className="p-2.5 text-slate-500 hover:bg-slate-100 rounded-xl transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-accent-500 rounded-full border-2 border-white"></span>
          </button>
          
          <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-slate-200">
            <Button variant="ghost" size="sm" className="text-slate-600 font-semibold">Post a Job</Button>
            <Button size="sm" className="rounded-xl px-5">Login</Button>
          </div>

          <button 
            className="md:hidden p-2.5 text-slate-500 hover:bg-slate-100 rounded-xl transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Preview */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-4 animate-in slide-in-from-top duration-300">
          <div className="space-y-4">
            <Button variant="ghost" className="w-full justify-start text-slate-700">Categories</Button>
            <Button variant="ghost" className="w-full justify-start text-slate-700">Top Vendors</Button>
            <Button variant="ghost" className="w-full justify-start text-slate-700">My Requests</Button>
            <hr className="border-slate-100" />
            <Button className="w-full">Sign In</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

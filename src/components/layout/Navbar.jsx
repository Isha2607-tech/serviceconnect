import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Menu, X, Bell, LayoutGrid, Zap, Sparkles, ChevronDown } from 'lucide-react';
import Button from '../common/Button';
import { cn } from '../../utils/cn';

const SEARCH_SUGGESTIONS = [
  { name: 'Plumbers', category: 'Category' },
  { name: 'Electricians', category: 'Category' },
  { name: 'Carpenters', category: 'Category' },
  { name: 'AC Repair', category: 'Category' },
  { name: 'Cleaning Services', category: 'Category' },
  { name: 'Painters', category: 'Category' },
  { name: 'Pest Control', category: 'Category' },
];

const LOCATION_SUGGESTIONS = [
  'Indore, Madhya Pradesh',
  'Vijay Nagar, Indore',
  'Palasia, Indore',
  'Bhawarkua, Indore',
  'Mumbai, Maharashtra',
  'Delhi, NCR'
];

const Navbar = ({ onSearch }) => {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showLocSuggestions, setShowLocSuggestions] = useState(false);
  
  const suggestionRef = useRef(null);
  const locRef = useRef(null);

  const filteredSuggestions = SEARCH_SUGGESTIONS.filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const filteredLocations = LOCATION_SUGGESTIONS.filter(item => 
    item.toLowerCase().includes(location.toLowerCase())
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleClickOutside = (event) => {
      if (suggestionRef.current && !suggestionRef.current.contains(event.target)) setShowSuggestions(false);
      if (locRef.current && !locRef.current.contains(event.target)) setShowLocSuggestions(false);
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelectSuggestion = (s) => {
    setQuery(s.name);
    setShowSuggestions(false);
  };

  const handleSelectLocation = (l) => {
    setLocation(l);
    setShowLocSuggestions(false);
  };

  const showGlassyNav = isScrolled || !isHomePage;

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b',
      showGlassyNav ? 'bg-[#D4F4FA]/90 backdrop-blur-xl border-cyan-100 py-2 shadow-md shadow-cyan-900/5' : 'bg-transparent border-transparent py-3',
      isHomePage ? "md:block hidden" : "block"
    )}>
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        {/* Logo (Desktop) / Location (Mobile) */}
        <div className="flex items-center gap-2 flex-shrink-0 cursor-pointer group">
          {/* Desktop Logo */}
          <div className="hidden md:flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform shadow-lg shadow-primary-500/20">
              <LayoutGrid size={24} />
            </div>
            <span className={cn(
              "text-xl font-display font-bold tracking-tight transition-colors duration-300",
              showGlassyNav ? "text-slate-900" : "text-white"
            )}>
              Service<span className="text-primary-500">Connect</span>
            </span>
          </div>

          {/* Mobile Location Header (Target Design) */}
          <div className="md:hidden flex items-center gap-3">
             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-cyan-500 shadow-sm border border-cyan-50">
                <MapPin size={22} fill="currentColor" fillOpacity={0.2} />
             </div>
             <div className="flex flex-col">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Your location</span>
                <div className="flex items-center gap-1">
                  <span className="text-base font-bold text-slate-800">San Antione, Tx</span>
                  <ChevronDown size={14} className="text-gray-400 stroke-[3px]" />
                </div>
             </div>
          </div>
        </div>

        {/* Desktop Search Bar */}
        <div className={cn(
          "hidden md:flex flex-1 max-w-2xl bg-white border border-slate-200 shadow-xl rounded-2xl p-1 items-center transition-all duration-300",
          showGlassyNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}>
          <div className="flex items-center gap-2 px-3 border-r border-slate-100 min-w-[140px] relative" ref={locRef}>
            <MapPin size={18} className="text-primary-500" />
            <input 
              type="text" 
              value={location}
              onChange={(e) => { setLocation(e.target.value); setShowLocSuggestions(true); }}
              onFocus={() => setShowLocSuggestions(true)}
              placeholder="Indore" 
              className="bg-transparent border-none focus:ring-0 focus:outline-none text-sm font-bold text-slate-700 w-full placeholder:text-slate-400"
            />
            {/* Location Dropdown */}
            <AnimatePresence>
              {showLocSuggestions && (
                <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:10}} className="absolute top-full left-0 mt-3 w-64 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50">
                  <div className="px-4 py-2 border-b border-slate-50 bg-slate-50/50">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Locations</span>
                  </div>
                  {filteredLocations.map((l, i) => (
                    <button key={i} onClick={() => handleSelectLocation(l)} className="w-full flex items-center gap-3 px-4 py-2 hover:bg-slate-50 text-left">
                      <MapPin size={14} className="text-slate-300" />
                      <span className="text-xs font-semibold text-slate-600">{l}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="flex items-center flex-1 gap-2 px-3 relative" ref={suggestionRef}>
            <Search size={18} className="text-primary-500" />
            <input 
              type="text" 
              value={query}
              onChange={(e) => { setQuery(e.target.value); setShowSuggestions(true); }}
              onFocus={() => setShowSuggestions(true)}
              placeholder="Search services..." 
              className="bg-transparent border-none focus:ring-0 focus:outline-none text-sm w-full placeholder:text-slate-400"
            />
            {/* Search Dropdown */}
            <AnimatePresence>
              {showSuggestions && (
                <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:10}} className="absolute top-full left-0 right-0 mt-3 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50">
                  <div className="px-5 py-3 border-b border-slate-50 bg-slate-50/50">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Trending Searches</span>
                  </div>
                  {filteredSuggestions.map((s, i) => (
                    <button key={i} onClick={() => handleSelectSuggestion(s)} className="w-full flex items-center gap-4 px-5 py-3 hover:bg-slate-50 text-left group">
                      <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
                        <Zap size={14} className="fill-current" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-700 group-hover:text-primary-600">{s.name}</span>
                        <span className="text-[11px] text-slate-400">{s.category}</span>
                      </div>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Button size="sm" className="rounded-xl px-6">Search</Button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <button className={cn(
            "rounded-full transition-all relative flex items-center justify-center",
            showGlassyNav ? "w-11 h-11 bg-white text-slate-700 shadow-sm border border-gray-100" : "p-2.5 rounded-xl text-white/80 hover:bg-white/10"
          )}>
            <Bell size={20} />
            <span className={cn(
              "absolute w-2 h-2 rounded-full border-2 border-white",
              showGlassyNav ? "top-3 right-3 bg-cyan-400" : "top-2.5 right-2.5 bg-accent-500"
            )}></span>
          </button>
          
          <div className={cn(
            "hidden sm:flex items-center gap-2 pl-2 border-l",
            showGlassyNav ? "border-slate-200" : "border-white/20"
          )}>
            <Button 
               onClick={() => setIsMobileMenuOpen(true)}
               variant="ghost" 
               className={cn(
                  "flex items-center gap-2 font-bold px-4",
                  showGlassyNav ? "text-slate-600" : "text-white hover:bg-white/10"
               )}
            >
               <Menu size={20} />
               Menu
            </Button>
            <Button size="sm" className="rounded-xl px-5 ml-2">Login</Button>
          </div>
        </div>
      </div>

      {/* Desktop Menu Drawer (Slides from Right) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[200]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-[350px] bg-white z-[210] shadow-2xl flex flex-col pt-10"
            >
               <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-6 left-6 p-2 rounded-xl text-slate-400 hover:bg-slate-50 transition-colors"
               >
                  <X size={24} />
               </button>

               <div className="px-8 mt-10 space-y-10">
                  <div className="flex items-center gap-4">
                     <div className="w-16 h-16 rounded-2xl bg-primary-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        JD
                     </div>
                     <div>
                        <h3 className="text-xl font-bold text-slate-900">Ishaan Tech</h3>
                        <p className="text-sm text-slate-400 font-medium">ishaan@tech.com</p>
                     </div>
                  </div>

                  <nav className="space-y-2">
                     {[
                        { label: 'Home', path: '/' },
                        { label: 'All Categories', path: '/categories' },
                        { label: 'Social Feed', path: '/social' },
                        { label: 'My Profile', path: '/profile' },
                        { label: 'Be a Vendor', path: '/vendor-panel' },
                        { label: 'Help & FAQ', path: '#' }
                     ].map((link, idx) => (
                        <button 
                           key={idx}
                           onClick={() => { window.location.href = link.path; setIsMobileMenuOpen(false); }}
                           className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-primary-50 text-slate-700 hover:text-primary-600 font-bold transition-all group"
                        >
                           {link.label}
                           <ChevronDown size={18} className="-rotate-90 text-slate-300 group-hover:text-primary-400 transition-transform" />
                        </button>
                     ))}
                  </nav>

                  <div className="pt-10 border-t border-slate-100">
                     <Button className="w-full rounded-2xl py-4 shadow-xl shadow-primary-500/20">Sign Out</Button>
                  </div>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

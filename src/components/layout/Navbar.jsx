import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Menu, X, Bell, LayoutGrid, Zap, Sparkles } from 'lucide-react';
import Button from '../common/Button';
import { cn } from '../../utils/cn';

const SEARCH_SUGGESTIONS = [
  { name: 'Dentists', category: 'Category' },
  { name: 'Real Estate Agents', category: 'Category' },
  { name: 'Interior Designers', category: 'Category' },
  { name: 'Banquet Halls', category: 'Category' },
  { name: 'Gynaecologist & Obstetrician Doctors', category: 'Category' },
  { name: 'Orthopaedic Doctors', category: 'Category' },
  { name: 'Astrologers', category: 'Category' },
  { name: 'Physiotherapists', category: 'Category' },
  { name: 'Caterers', category: 'Category' },
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

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
      isScrolled ? 'bg-white/80 backdrop-blur-lg border-slate-200 py-3' : 'bg-transparent border-transparent py-5'
    )}>
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0 cursor-pointer group">
          <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform shadow-lg shadow-primary-500/20">
            <LayoutGrid size={24} />
          </div>
          <span className={cn(
            "text-xl font-display font-bold tracking-tight hidden sm:block transition-colors duration-300",
            isScrolled ? "text-slate-900" : "text-white"
          )}>
            Service<span className="text-primary-500">Connect</span>
          </span>
        </div>

        {/* Desktop Search Bar (JustDial Inspired) */}
        <div className={cn(
          "hidden md:flex flex-1 max-w-2xl bg-white border border-slate-200 shadow-xl rounded-2xl p-1 items-center transition-all duration-300",
          isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
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
            "p-2.5 rounded-xl transition-colors relative",
            isScrolled ? "text-slate-500 hover:bg-slate-100" : "text-white/80 hover:bg-white/10"
          )}>
            <Bell size={20} />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-accent-500 rounded-full border-2 border-white"></span>
          </button>
          
          <div className={cn(
            "hidden sm:flex items-center gap-2 pl-2 border-l",
            isScrolled ? "border-slate-200" : "border-white/20"
          )}>
            <Button variant="ghost" size="sm" className={isScrolled ? "text-slate-600 font-semibold" : "text-white font-semibold hover:bg-white/10"}>Post a Job</Button>
            <Button size="sm" className="rounded-xl px-5">Login</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Sparkles, Star, ShieldCheck, Zap, ArrowRight, Utensils, Hotel, Scissors, Sofa, Heart, GraduationCap, Key, Building2, UserCog, Dog, Bed, Store, Activity, Dumbbell, Banknote, Calendar, CarFront, Truck, Send, Menu, Clock, LayoutGrid, Bell, ChevronDown, Mic, ArrowLeft, History, TrendingUp, X, Compass, Navigation } from 'lucide-react';
import { cn } from '../../utils/cn';
import UserLayout from '../../layouts/UserLayout';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import heroBg from '../../assets/homepage.jpg';

const CATEGORIES = [
  { id: 1, name: 'Restaurants', icon: 'https://img.icons8.com/3d-fluency/180/restaurant.png', color: 'bg-orange-50' },
  { id: 2, name: 'Hotels', icon: 'https://img.icons8.com/3d-fluency/180/office.png', color: 'bg-blue-50' },
  { id: 3, name: 'Beauty', icon: 'https://img.icons8.com/3d-fluency/180/cosmetic-brush.png', color: 'bg-pink-50' },
  { id: 4, name: 'Home', icon: 'https://img.icons8.com/3d-fluency/180/home.png', color: 'bg-indigo-50' },
  { id: 5, name: 'Wedding', icon: 'https://img.icons8.com/3d-fluency/180/diamond-ring.png', color: 'bg-rose-50' },
  { id: 6, name: 'Education', icon: 'https://img.icons8.com/3d-fluency/180/graduation-cap.png', color: 'bg-emerald-50' },
  { id: 7, name: 'Rent', icon: 'https://img.icons8.com/3d-fluency/180/key.png', color: 'bg-amber-50' },
  { id: 8, name: 'Hospitals', icon: 'https://img.icons8.com/3d-fluency/180/hospital.png', color: 'bg-red-50' },
  { id: 9, name: 'Contractors', icon: 'https://img.icons8.com/3d-fluency/180/hammer.png', color: 'bg-slate-100' },
  { id: 10, name: 'Pet', icon: 'https://img.icons8.com/3d-fluency/180/dog.png', color: 'bg-orange-100/50' },
  { id: 11, name: 'PG/Hostels', icon: 'https://img.icons8.com/3d-fluency/180/bed.png', color: 'bg-cyan-50' },
  { id: 12, name: 'Estate', icon: 'https://img.icons8.com/3d-fluency/180/commercial.png', color: 'bg-violet-50' },
  { id: 13, name: 'Dentists', icon: 'https://img.icons8.com/3d-fluency/180/tooth.png', color: 'bg-teal-50' },
  { id: 14, name: 'Gym', icon: 'https://img.icons8.com/3d-fluency/180/dumbbell.png', color: 'bg-slate-200' },
  { id: 15, name: 'Loans', icon: 'https://img.icons8.com/3d-fluency/180/money-bag.png', color: 'bg-emerald-100' },
  { id: 20, name: 'More', icon: Menu, color: 'bg-primary-50', isMenu: true },
];

const FEATURED_VENDORS = [
  { id: 1, name: 'AquaSmooth Plumbing', rating: 4.9, reviews: 1240, type: 'Premium', verified: true, image: 'https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 2, name: 'Apex Car Care', rating: 4.8, reviews: 3100, type: 'Featured', verified: true, image: 'https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 3, name: 'Zenith Home Spa', rating: 4.7, reviews: 890, type: 'Promoted', verified: false, image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 4, name: 'Glow Dental Clinic', rating: 5.0, reviews: 450, type: 'Top Rated', verified: true, image: 'https://images.pexels.com/photos/3845766/pexels-photo-3845766.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

const HOME_SERVICES = [
  { id: 1, name: 'AC REPAIR & SERVICE', image: 'https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 2, name: 'PAINTERS', image: 'https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 3, name: 'PEST CONTROL', image: 'https://images.pexels.com/photos/4064560/pexels-photo-4064560.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 4, name: 'PLUMBERS', image: 'https://images.pexels.com/photos/5691653/pexels-photo-5691653.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

const Home = () => {
  const navigate = useNavigate();
  const [isSearchFixed, setIsSearchFixed] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');

  const RECENT_SEARCHES = [
    'Gynaecologist & Obstetrician',
    'Real Estate Agents'
  ];

  const TRENDING_SEARCHES = [
    'Hostels For Women',
    'Car Rental',
    'Interior Designers',
    'Electricians'
  ];

  const TRENDING_AREAS = [
    'Vijay Nagar, Indore',
    'Vijay Nagar Road Vijay Nagar, Indore',
    'Bhawar Kuan, Indore',
    'Khajrana, Indore',
    'Sudama Nagar, Indore',
    'Mhow, Indore',
    'MG Road Indore, Indore',
    'New Palasia, Indore',
    'Kanadia, Indore',
    'Rau, Indore'
  ];

  const handleCategoryClick = (cat) => {
    if (cat.isMenu) {
      navigate('/categories');
      return;
    }
    
    const route = cat.name.toLowerCase() === 'hotels' ? '/hotels' : `/category/${cat.name.toLowerCase()}`;
    navigate(route);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSearchFixed(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <UserLayout>
      {/* Mobile-Only Home View (Sleek Modern) */}
      <div className="md:hidden">
        <div className="px-4 pt-6 pb-2 bg-gradient-to-b from-[#D4F4FA] to-[#F2FBFD]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3" onClick={() => setIsLocationOpen(true)}>
              <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center text-cyan-500 shadow-sm border border-cyan-50">
                <MapPin size={22} fill="currentColor" fillOpacity={0.2} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Your location</span>
                <div className="flex items-center gap-1">
                  <span className="text-base font-bold text-slate-800">San Antione, Tx</span>
                  <ChevronDown size={14} className="text-gray-400 stroke-[3px]" />
                </div>
              </div>
            </div>
            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-slate-700 shadow-sm border border-gray-100">
              <Bell size={20} />
            </div>
          </div>
        </div>

        {/* Sticky Mobile Search Bar Container */}
        <div className={cn(
          "z-[100] bg-[#F2FBFD]/95 backdrop-blur-md px-4 pt-0 pb-3 transition-all duration-300",
          isSearchFixed ? "fixed top-0 left-0 right-0 shadow-lg" : "sticky top-0"
        )} onClick={() => setIsSearchOpen(true)}>
          <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-1 flex items-center">
            <div className="flex items-center gap-3 px-4 flex-1">
              <Search className="text-gray-400" size={18} />
              <div className="w-full py-2 text-sm font-semibold text-slate-400">Restaurants near me</div>
              <Mic size={18} className="text-blue-400" />
            </div>
          </div>
        </div>

        {/* Mobile Full Screen Search Experience (Target Design) */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="fixed inset-0 z-[200] bg-white md:hidden overflow-y-auto"
            >
              {/* Overlay Header */}
              <div className="px-4 pt-6 pb-4 border-b border-gray-100 flex flex-col gap-4 sticky top-0 bg-white">
                <div className="flex items-center justify-between">
                  <button onClick={() => setIsSearchOpen(false)} className="p-1 -ml-1">
                    <ArrowLeft size={24} className="text-slate-800" />
                  </button>
                  <div className="flex items-center gap-1 cursor-pointer" onClick={() => setIsLocationOpen(true)}>
                    <MapPin size={18} className="text-slate-400" />
                    <span className="text-sm font-bold text-slate-800">Indore</span>
                    <ChevronDown size={14} className="text-slate-400" />
                  </div>
                  <Bell size={22} className="text-slate-800" />
                </div>

                <div className="bg-white border border-slate-300 rounded-lg p-1.5 flex items-center gap-3 shadow-sm">
                  <Search className="text-slate-400 ml-2" size={20} />
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search in Indore"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full py-1 focus:outline-none text-slate-800 font-medium placeholder:text-slate-400"
                  />
                  <Mic size={20} className="text-blue-500 mr-2" />
                </div>
              </div>

              {/* Suggestions List */}
              <div className="p-4 space-y-8 pb-20">
                {/* Recent Searches */}
                {!searchQuery && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase">Recent Searches</h4>
                      <button className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Clear All</button>
                    </div>
                    {RECENT_SEARCHES.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0 group">
                        <div className="flex items-center gap-4 flex-1">
                          <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
                            <Search size={18} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-slate-800">{item}</span>
                            <span className="text-[10px] text-slate-400 font-medium">Category</span>
                          </div>
                        </div>
                        <X size={16} className="text-slate-300" />
                      </div>
                    ))}
                  </div>
                )}

                {/* Trending Searches */}
                {!searchQuery && (
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase">Trending Searches</h4>
                    {TRENDING_SEARCHES.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 py-2 border-b border-gray-50 last:border-b-0" onClick={() => { setSearchQuery(item); navigate('/categories'); }}>
                        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
                          <TrendingUp size={18} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-800">{item}</span>
                          <span className="text-[10px] text-slate-400 font-medium">Category</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Live Filtering (when typing) */}
                {searchQuery && (
                  <div className="space-y-2">
                    {CATEGORIES.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase())).map((cat, idx) => (
                      <div key={idx} className="flex items-center gap-4 py-4 border-b border-gray-50" onClick={() => handleCategoryClick(cat)}>
                        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center bg-white shadow-sm border border-gray-50 overflow-hidden", cat.color)}>
                          {typeof cat.icon === 'string' ? (
                            <img src={cat.icon} alt={cat.name} className="w-8 h-8 object-contain" />
                          ) : (
                            <cat.icon size={20} className="text-primary-600" />
                          )}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-base font-bold text-slate-800">{cat.name}</span>
                          <span className="text-xs text-slate-400 font-medium tracking-tight">Best services available in Indore</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Full Screen Location Experience (Target Design) */}
        <AnimatePresence>
          {isLocationOpen && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="fixed inset-0 z-[300] bg-white md:hidden overflow-y-auto"
            >
              {/* Overlay Header */}
              <div className="px-4 pt-6 pb-4 border-b border-gray-100 flex flex-col gap-4 sticky top-0 bg-white">
                <div className="flex items-center justify-between">
                  <button onClick={() => setIsLocationOpen(false)} className="p-1 -ml-1">
                    <ArrowLeft size={24} className="text-slate-800" />
                  </button>
                  <h3 className="text-lg font-bold text-slate-800">Your Location</h3>
                  <Bell size={22} className="text-slate-800" />
                </div>

                <div className="bg-white border border-slate-300 rounded-lg p-1.5 flex items-center gap-3 shadow-sm">
                  <input
                    autoFocus
                    type="text"
                    placeholder="Start typing your location..."
                    value={locationQuery}
                    onChange={(e) => setLocationQuery(e.target.value)}
                    className="w-full py-1.5 px-3 focus:outline-none text-slate-800 font-medium placeholder:text-slate-400"
                  />
                  <Search className="text-slate-400 mr-2" size={20} />
                </div>
              </div>

              {/* Location Content */}
              <div className="p-4 space-y-6">
                {/* Detect Location */}
                <button className="flex items-center gap-3 text-primary-600 font-bold active:scale-95 transition-transform">
                  <div className="w-5 h-5 flex items-center justify-center border-2 border-primary-600 rounded-full">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </div>
                  <span>Detect my location</span>
                </button>

                {/* Anywhere option */}
                <div className="flex items-center gap-4 py-2 border-b border-gray-50 pb-4">
                  <MapPin size={20} className="text-slate-400" />
                  <span className="text-base font-bold text-slate-800">Anywhere in Indore</span>
                </div>

                {/* Trending Areas */}
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-slate-400 tracking-tight">Trending Areas</h4>
                  <div className="space-y-1">
                    {TRENDING_AREAS.filter(a => a.toLowerCase().includes(locationQuery.toLowerCase())).map((area, idx) => (
                      <div key={idx} className="flex items-center gap-4 py-4 border-b border-gray-50 last:border-0 active:bg-slate-50 transition-colors" onClick={() => setIsLocationOpen(false)}>
                        <MapPin size={18} className="text-slate-400 flex-shrink-0" />
                        <span className="text-base font-bold text-slate-800 leading-tight">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Categories (Premium Grid) */}
        <div className="px-6 relative z-10 pt-4 pb-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-extrabold text-slate-800 tracking-tight">Service categories</h2>
            <button 
              onClick={() => navigate('/categories')}
              className="text-xs font-bold text-cyan-600 flex items-center gap-1 group"
            >
              View all <ChevronDown size={14} className="-rotate-90 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
          
          <div className="overflow-x-auto no-scrollbar -mx-4 px-4 snap-x snap-mandatory">
            <div className="grid grid-rows-2 grid-flow-col gap-x-3 gap-y-3 min-w-max pb-4">
               {CATEGORIES.slice(0, 20).map((cat) => (
                 <div 
                   key={cat.id} 
                   className="bg-white rounded-xl p-2.5 flex items-center gap-3 shadow-[0_10px_25px_rgba(0,0,0,0.02)] border border-white active:scale-95 transition-all w-[180px] snap-start"
                   onClick={() => handleCategoryClick(cat)}
                 >
                   <div className="w-10 h-10 rounded-xl bg-[#F0F9FB] flex items-center justify-center shrink-0">
                      {typeof cat.icon === 'string' ? (
                         <img src={cat.icon} alt={cat.name} className="w-7 h-7 object-contain" />
                      ) : (
                         <cat.icon size={20} className="text-cyan-600" />
                      )}
                   </div>
                   <div className="flex items-center justify-between flex-1 min-w-0 pr-1">
                     <span className="text-[13px] font-bold text-slate-700 truncate">{cat.name}</span>
                     <ChevronDown size={14} className="-rotate-90 text-cyan-600/30 stroke-[3px]" />
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Mobile Promotional Banner - Now consistent with reference */}
        <div className="px-4 mb-4">
          <div className="bg-[#0D4D47] rounded-[24px] p-6 text-white relative overflow-hidden shadow-xl shadow-emerald-900/10">
            <div className="relative z-10 w-2/3">
              <h3 className="text-xl font-display font-bold mb-1 leading-tight uppercase tracking-tight">Your Solution, <br /> One Tap Away!</h3>
              <p className="text-white/70 text-[10px] font-medium mb-5 leading-tight">Seamless, Fast & Reliable <br /> Services at Your Fingertips</p>
              <button className="bg-white text-[#0D4D47] text-xs font-bold px-6 py-2.5 rounded-xl shadow-lg active:scale-95 transition-transform">Explore</button>
            </div>
            <div className="absolute right-[-10px] bottom-0 top-0 w-2/5 flex items-center justify-center">
              <img
                src="https://img.freepik.com/free-vector/professional-engineers-fixing-air-conditioner_23-2148560064.jpg?t=st=1713628461~exp=1713632061~hmac=6b9e5e7e0e7e1e8e9e7e6e5e4e3e2e1e0e9e8e7e6e5e4e3e2e1"
                alt="service"
                className="w-full h-full object-contain mix-blend-overlay opacity-80"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              {/* Fallback pattern if image fails */}
              <div className="absolute inset-0 bg-gradient-to-l from-white/10 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section (Desktop Only) */}
      <section
        className="hidden md:flex relative overflow-hidden pt-52 pb-44 px-6 min-h-[90vh] items-center justify-center border-b-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.2)), url(${heroBg})`
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center relative z-10">
          <Badge variant="primary" className="mb-6 backdrop-blur-md bg-white/20 border-white/20 text-white animate-bounce">
            <Sparkles size={14} className="mr-1 inline text-primary-300" />
            Empowering over 1M+ small businesses globally
          </Badge>

          <h1 className="text-7xl font-display font-bold leading-tight max-w-4xl mb-8 text-white drop-shadow-lg">
            Find the Best <span className="text-white relative">
              Services
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-white/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span> Near You
          </h1>

          <p className="text-lg text-white/90 max-w-2xl mb-12 drop-shadow">
            Instantly discover verified vendors, compare prices, and book the most trusted experts for your needs with AI-powered search.
          </p>

          {/* AI Search Box - Classic Style */}
          <div className="w-full max-w-2xl bg-white p-1.5 rounded-2xl shadow-2xl border border-white/20 flex flex-row items-center gap-1">
            <div className="flex-1 flex items-center gap-2 px-3 w-full">
              <Search className="text-primary-500 flex-shrink-0" size={20} />
              <input
                type="text"
                placeholder="Search for Services near me"
                className="w-full py-2.5 text-sm border-none focus:ring-0 focus:outline-none placeholder:text-slate-400 font-medium"
              />
            </div>

            <div className="w-px h-8 bg-slate-100 mx-1"></div>

            <div className="flex-shrink-0 flex items-center gap-2 px-3 w-64">
              <MapPin className="text-primary-500 flex-shrink-0" size={18} />
              <input
                type="text"
                placeholder="Indore"
                className="w-full py-2.5 border-none focus:ring-0 focus:outline-none text-slate-600 font-semibold text-sm placeholder:text-slate-400"
              />
            </div>

            <Button size="sm" className="w-auto rounded-xl px-10 py-3 shadow-lg shadow-primary-500/20">
              Discover
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white font-bold drop-shadow">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-emerald-400" />
              Verified Experts
            </div>
            <div className="flex items-center gap-2">
              <Zap size={18} className="text-amber-400" />
              Instant Booking
            </div>
            <div className="flex items-center gap-2">
              <Star size={18} className="text-primary-300" />
              4.8/5 Avg Rating
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid (Desktop) */}
      <section className="hidden md:block max-w-[1400px] mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Explore Popular Categories</h2>
            <p className="text-slate-500">Fast tracking your search for local experts</p>
          </div>
          <Button variant="ghost" className="hidden sm:flex items-center gap-2 text-primary-600 font-bold">
            See All Categories <ArrowRight size={18} />
          </Button>
        </div>

        <div className="grid grid-cols-10 gap-x-4 gap-y-10">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="flex flex-col items-center group cursor-pointer"
              onClick={() => handleCategoryClick(cat)}
            >
              <div className={cn(
                "w-16 h-16 rounded-2xl mb-3 flex items-center justify-center transition-all duration-300 border border-slate-100 shadow-sm group-hover:shadow-md group-hover:-translate-y-1 bg-white",
                cat.isMenu && "bg-primary-600 text-white border-primary-600 shadow-lg shadow-primary-500/20"
              )}>
                {typeof cat.icon === 'string' ? (
                   <img 
                     src={cat.icon} 
                     alt={cat.name} 
                     className="w-12 h-12 object-contain drop-shadow-md" 
                   />
                ) : (
                   <cat.icon size={cat.isMenu ? 28 : 24} className={!cat.isMenu ? "text-primary-600" : ""} />
                )}
              </div>
              <span className="text-[11px] md:text-sm font-bold text-slate-700 text-center leading-tight transition-colors group-hover:text-primary-600">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </section>
      
      {/* Home Services Quick Links */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-6 mb-12 mt-8 md:mt-10 md:mb-20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">Home services</h2>
          <ChevronDown size={24} className="-rotate-90 text-slate-400" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {HOME_SERVICES.map((s) => (
            <div 
              key={s.id} 
              className="relative aspect-square md:aspect-square rounded-2xl overflow-hidden group cursor-pointer active:scale-95 transition-all shadow-md"
              onClick={() => navigate('/categories')}
            >
              <img src={s.image} alt={s.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent flex items-end p-4 md:p-6">
                <span className="text-white text-[13px] md:text-xl font-extrabold uppercase leading-tight drop-shadow-md">{s.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Vendors */}
      <section className="bg-slate-100/50 pt-2 pb-4 md:py-24 px-4 md:px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-slate-900 mb-4">Handpicked Top Rated Experts</h2>
            <p className="text-slate-500 text-sm md:text-lg">We only feature vendors with proven track records and high customer satisfaction.</p>
          </div>

          <div className="flex md:grid overflow-x-auto md:overflow-visible no-scrollbar -mx-4 md:mx-0 px-4 md:px-0 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pb-4">
            {FEATURED_VENDORS.map((vendor) => (
              <Card key={vendor.id} className="overflow-hidden group flex flex-col shrink-0 w-[280px] md:w-auto border-slate-100 shadow-sm md:shadow-md">
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img src={vendor.image} alt={vendor.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4">
                    <Badge variant={vendor.type === 'Premium' ? 'primary' : 'neutral'} className="shadow-lg backdrop-blur-md">
                      {vendor.type}
                    </Badge>
                  </div>
                  {vendor.verified && (
                    <div className="absolute bottom-4 right-4 bg-white p-1 rounded-full shadow-lg">
                      <ShieldCheck size={20} className="text-primary-600" />
                    </div>
                  )}
                </div>
                <div className="p-4 md:p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-1 text-amber-500 mb-2">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm font-bold text-slate-900">{vendor.rating}</span>
                    <span className="text-xs text-slate-400 font-medium ml-1">({vendor.reviews} reviews)</span>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors cursor-pointer">{vendor.name}</h4>
                  <p className="text-xs md:text-sm text-slate-400 font-medium mb-4 md:mb-6">Professional service provider in your local area.</p>
                  <Button
                    variant="outline"
                    className="w-full mt-auto border-primary-100 text-primary-600 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-300 font-bold py-2.5 md:py-3 rounded-xl text-sm"
                  >
                    Get Quote
                  </Button>
                </div>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* Social Feed Preview Segment */}
      <section className="max-w-[1400px] mx-auto px-6 pt-10 pb-10 md:py-24 bg-white/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <Badge variant="primary" className="mb-4 px-4 py-1.5 bg-primary-50 text-primary-700">Social Discovery</Badge>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-8 leading-tight">
              See What's Trending <br />
              in <span className="text-primary-600">Your Community</span>
            </h2>
            <p className="text-slate-500 text-xl mb-10 leading-relaxed max-w-2xl">
              Stay updated with the latest service works, tips, and transformations posted by vendors near you. Like, comment, and save your favorites!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-5 p-5 rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">
                  <Sparkles size={28} />
                </div>
                <div>
                  <h5 className="font-bold text-lg text-slate-900">Real Work Samples</h5>
                  <p className="text-sm text-slate-500">Unfiltered photos and videos from actual service jobs.</p>
                </div>
              </div>
              <div className="flex items-center gap-5 p-5 rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 flex-shrink-0">
                  <Star size={28} />
                </div>
                <div>
                  <h5 className="font-bold text-lg text-slate-900">Community Reviews</h5>
                  <p className="text-sm text-slate-500">Read what your neighbors are saying about local vendors.</p>
                </div>
              </div>
            </div>
            <Button 
              size="lg" 
              className="mt-12 rounded-2xl w-full sm:w-auto px-12 py-4 text-lg shadow-lg shadow-primary-500/20"
              onClick={() => navigate('/social')}
            >
              Open Social Feed
            </Button>
          </div>

          <div className="lg:col-span-5 relative h-[500px] md:h-[650px] flex items-center justify-end group">
            {/* Background Decorative Element */}
            <div className="absolute inset-0 bg-primary-50 rounded-3xl blur-3xl opacity-30 transform scale-90 group-hover:scale-100 transition-transform duration-700"></div>

            <div className="relative w-full h-full flex items-center justify-end pr-10">
              {/* Bottom Card */}
              <motion.div
                initial={{ rotate: -8, x: -30, opacity: 0 }}
                whileInView={{ rotate: -8, x: -30, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute w-[280px] md:w-[320px] aspect-[4/5] bg-cover bg-center rounded-3xl shadow-2xl z-10 border-4 border-white overflow-hidden"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1528666336021-99c0d48149e3?auto=format&fit=crop&q=80&w=500")' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </motion.div>

              {/* Middle Card */}
              <motion.div
                initial={{ rotate: 3, x: 20, opacity: 0 }}
                whileInView={{ rotate: 3, x: 20, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="absolute w-[280px] md:w-[320px] aspect-[4/5] bg-cover bg-center rounded-3xl shadow-2xl z-20 border-4 border-white overflow-hidden"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1595206133361-b1fe343e5e23?auto=format&fit=crop&q=80&w=500")' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </motion.div>

              {/* Top Card (Main) */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-[300px] md:w-[350px] aspect-[4/5] bg-cover bg-center rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-30 border-4 border-white overflow-hidden cursor-pointer"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=500")' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full border-2 border-primary-400 bg-white shadow-lg flex items-center justify-center overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100" alt="avatar" />
                    </div>
                    <div>
                      <span className="text-white text-base font-bold block leading-none mb-1">Luxe Interior Studio</span>
                      <span className="text-primary-300 text-[10px] font-bold uppercase tracking-wider">Premium Artist</span>
                    </div>
                  </div>
                  <p className="text-white text-sm md:text-base font-medium line-clamp-2 leading-relaxed">
                    Just finished this beautiful minimalist living room transformation in Goregaon. Every corner tells a story! ✨ <span className="text-primary-400 font-bold">#interiordesign #minimalism</span>
                  </p>
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-white/60 text-xs">
                    <span>2k Likes</span>
                    <span>45 Comments</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </UserLayout>
  );
};

export default Home;

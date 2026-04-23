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
import hotelIcon from '../../assets/icons/hotel.png';
import beautyIcon from '../../assets/icons/beauty.png';
import LeadFormModal from '../../components/common/LeadFormModal';
import ServicesOverlay from '../../components/user/ServicesOverlay';
import AnimatedCategoriesOverlay from '../../components/user/AnimatedCategoriesOverlay';

const CATEGORIES = [
  { id: 1, name: 'Restaurants', icon: 'https://img.icons8.com/bubbles/180/restaurant.png', color: 'bg-primary-50/50' },
  { id: 2, name: 'Hotels', icon: hotelIcon, color: 'bg-primary-50/50' },
  { id: 3, name: 'Beauty', icon: beautyIcon, color: 'bg-primary-50/50' },
  { id: 4, name: 'Home', icon: 'https://img.icons8.com/bubbles/180/home.png', color: 'bg-primary-50/50' },
  { id: 5, name: 'Wedding', icon: 'https://img.icons8.com/bubbles/180/diamond-ring.png', color: 'bg-primary-50/50' },
  { id: 6, name: 'Education', icon: 'https://img.icons8.com/bubbles/180/education.png', color: 'bg-primary-50/50' },
  { id: 7, name: 'Rent', icon: 'https://img.icons8.com/bubbles/180/key.png', color: 'bg-primary-50/50' },
  { id: 8, name: 'Hospitals', icon: 'https://img.icons8.com/bubbles/180/hospital.png', color: 'bg-primary-50/50' },
  { id: 9, name: 'Contractors', icon: 'https://img.icons8.com/bubbles/180/hammer.png', color: 'bg-primary-50/50' },
  { id: 10, name: 'Pet', icon: 'https://img.icons8.com/bubbles/180/dog.png', color: 'bg-primary-50/50' },
  { id: 11, name: 'PG/Hostels', icon: 'https://img.icons8.com/bubbles/180/bed.png', color: 'bg-primary-50/50' },
  { id: 12, name: 'Estate', icon: 'https://img.icons8.com/bubbles/180/commercial.png', color: 'bg-primary-50/50' },
  { id: 13, name: 'Dentists', icon: 'https://img.icons8.com/bubbles/180/tooth.png', color: 'bg-primary-50/50' },
  { id: 14, name: 'Gym', icon: 'https://img.icons8.com/bubbles/180/dumbbell.png', color: 'bg-primary-50/50' },
  { id: 15, name: 'Loans', icon: 'https://img.icons8.com/bubbles/180/money-bag.png', color: 'bg-primary-50/50' },
  { id: 20, name: 'More', icon: Menu, color: 'bg-primary-700', isMenu: true },
];

const FEATURED_VENDORS = [
  { id: 1, name: 'AquaSmooth Plumbing', rating: 4.9, reviews: 1240, type: 'Premium', verified: true, image: 'https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 2, name: 'Apex Car Care', rating: 4.8, reviews: 3100, type: 'Featured', verified: true, image: 'https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 3, name: 'Zenith Home Spa', rating: 4.7, reviews: 890, type: 'Promoted', verified: false, image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 4, name: 'Glow Dental Clinic', rating: 5.0, reviews: 450, type: 'Top Rated', verified: true, image: 'https://images.pexels.com/photos/3845766/pexels-photo-3845766.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

const HOME_SERVICES = [
  { id: 1, name: 'AC REPAIR & SERVICE', image: 'https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&w=400', color: 'from-[#1A2B4B]' },
  { id: 2, name: 'PAINTERS', image: 'https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=400', color: 'from-[#9D446E]' },
  { id: 3, name: 'PEST CONTROL', image: 'https://images.pexels.com/photos/4064560/pexels-photo-4064560.jpeg?auto=compress&cs=tinysrgb&w=400', color: 'from-[#C59D3F]' },
  { id: 4, name: 'PLUMBERS', image: 'https://images.pexels.com/photos/5691653/pexels-photo-5691653.jpeg?auto=compress&cs=tinysrgb&w=400', color: 'from-[#E68D40]' },
];

const PREVIEW_CARDS = [
  {
    id: 0,
    user: 'Luxe Interior Studio',
    title: 'Minimalist Transformation',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
    likes: '2k',
    comments: '45',
    text: 'Just finished this beautiful minimalist living room transformation in Goregaon. Every corner tells a story! ✨'
  },
  {
    id: 1,
    user: 'Zenith Home Spa',
    title: 'Morning Wellness',
    image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=600',
    likes: '1.2k',
    comments: '28',
    text: 'Relaxing home spa session today. Peace begins with a healthy mind and body. 🧘‍♀️'
  },
  {
    id: 2,
    user: 'Apex Car Care',
    title: 'Extreme Detailing',
    image: 'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=600',
    likes: '800',
    comments: '15',
    text: 'Brought this vintage beauty back to life with our premium detailing package! 🚗✨'
  }
];

const Home = () => {
  const navigate = useNavigate();
  const [isSearchFixed, setIsSearchFixed] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPreviewStackOpen, setIsPreviewStackOpen] = useState(false); // Existing state check
  const [isCategoriesOverlayOpen, setIsCategoriesOverlayOpen] = useState(false);
  const moreButtonRef = useRef(null);
  const [previewStack, setPreviewStack] = useState([0, 1, 2]);

  const handleSwap = (id) => {
    const newStack = [id, ...previewStack.filter(item => item !== id)];
    setPreviewStack(newStack);
  };

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
      setIsCategoriesOverlayOpen(true);
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
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        className="md:hidden"
      >
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

        {/* Sticky Mobile Search Bar Container - INCREASED pt-4 for top space */}
        <div className={cn(
          "z-[100] bg-[#F2FBFD]/95 backdrop-blur-md px-4 pt-4 pb-3 transition-all duration-300",
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

                {/* Live Filtering (typing) */}
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
                <button className="flex items-center gap-3 text-primary-600 font-bold active:scale-95 transition-transform">
                  <div className="w-5 h-5 flex items-center justify-center border-2 border-primary-600 rounded-full">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </div>
                  <span>Detect my location</span>
                </button>

                <div className="flex items-center gap-4 py-2 border-b border-gray-50 pb-4">
                  <MapPin size={20} className="text-slate-400" />
                  <span className="text-base font-bold text-slate-800">Anywhere in Indore</span>
                </div>

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

        {/* Mobile Categories (JustDial Style Grid) */}
        <div className="bg-white px-3 pt-6 pb-4">
          <div className="grid grid-cols-4 gap-y-4 gap-x-1">
             {CATEGORIES.slice(0, 15).map((cat) => (
               <div 
                 key={cat.id} 
                 className="flex flex-col items-center gap-0 active:scale-90 transition-transform"
                 onClick={() => handleCategoryClick(cat)}
               >
                 <div className="w-14 h-12 bg-white flex items-center justify-center">
                    {typeof cat.icon === 'string' ? (
                       <img src={cat.icon} alt={cat.name} className="w-12 h-12 object-contain" />
                    ) : (
                       <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
                          <cat.icon size={22} />
                       </div>
                    )}
                 </div>
                 <span className="text-[11px] font-bold text-slate-800 text-center leading-tight h-5 flex items-center justify-center px-1">
                   {cat.name}
                 </span>
               </div>
             ))}
             
             <div 
               ref={moreButtonRef}
               className="flex flex-col items-center gap-0 active:scale-90 transition-transform cursor-pointer"
               onClick={() => setIsCategoriesOverlayOpen(true)}
             >
               <div className="w-14 h-12 flex items-center justify-center">
                  <div className="w-11 h-11 bg-primary-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-primary-600/20 active:rotate-180 transition-all duration-300">
                    <ChevronDown size={24} className="stroke-[3px]" />
                  </div>
               </div>
               <span className="text-[11px] font-bold text-slate-800 text-center leading-tight h-5 flex items-center justify-center">
                 More
               </span>
             </div>
          </div>
        </div>

        {/* Mobile Promotional Banner - Compacted */}
        <div className="px-4 mb-3">
          <div className="bg-[#0D4D47] rounded-xl py-4 px-5 text-white relative overflow-hidden shadow-xl shadow-emerald-900/10">
            <div className="relative z-10 w-2/3">
              <h3 className="text-lg font-display font-bold mb-1 leading-tight uppercase tracking-tight">Your Solution, <br /> One Tap Away!</h3>
              <p className="text-white/70 text-[10px] font-medium mb-3 leading-tight">Seamless, Fast & Reliable <br /> Services at Your Fingertips</p>
              <button className="bg-white text-[#0D4D47] text-[10px] font-bold px-5 py-2 rounded-lg shadow-lg active:scale-95 transition-transform">Explore</button>
            </div>
            <div className="absolute right-[-10px] bottom-0 top-0 w-2/5 flex items-center justify-center">
              <img
                src="https://img.freepik.com/free-vector/professional-engineers-fixing-air-conditioner_23-2148560064.jpg?t=st=1713628461~exp=1713632061~hmac=6b9e5e7e0e7e1e8e9e7e6e5e4e3e2e1e0e9e8e7e6e5e4e3e2e1"
                alt="service"
                className="w-full h-full object-contain mix-blend-overlay opacity-80"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-white/10 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
        
        {/* Bottom Nav Spacer - REDUCED h-1 */}
        <div className="h-1 md:h-20" />
      </motion.div>

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
                   <img src={cat.icon} alt={cat.name} className="w-12 h-12 object-contain drop-shadow-md" />
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
      <section className="max-w-[1400px] mx-auto px-4 md:px-6 mb-4 mt-4 md:mt-10 md:mb-20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">Home services</h2>
          <ChevronDown size={24} className="-rotate-90 text-slate-400" />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {HOME_SERVICES.map((s) => (
            <div 
              key={s.id} 
              className="relative aspect-[0.7/1] rounded-lg overflow-hidden group cursor-pointer active:scale-95 transition-all shadow-sm"
              onClick={() => navigate('/categories')}
            >
              <img src={s.image} alt={s.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              
              {/* Dynamic Bottom Gradient Overlay */}
              <div className={cn(
                "absolute inset-x-0 bottom-0 h-3/5 flex flex-col justify-end",
                "bg-gradient-to-t via-black/40 to-transparent",
                s.color
              )}></div>
              
              <div className="absolute inset-x-0 bottom-0 p-1.5 z-10">
                <span className="text-white text-[9px] md:text-[14px] font-black uppercase leading-[1.1] tracking-tighter block">
                  {s.name.split(' ').map((word, i) => (
                    <React.Fragment key={i}>
                      {word} {i === 1 && <br />}
                    </React.Fragment>
                  ))}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Vendors - Compacted */}
      <section className="bg-primary-50/30 pt-4 pb-4 md:py-24 px-4 md:px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-left mb-4 md:mb-16">
            <h2 className="text-lg md:text-2xl font-display font-bold text-slate-900 mb-1">Handpicked Top Rated Experts</h2>
            <p className="text-slate-500 text-xs md:text-lg leading-tight">Proven track records and high customer satisfaction.</p>
          </div>

          <div className="flex md:grid overflow-x-auto md:overflow-visible no-scrollbar -mx-4 md:mx-0 px-4 md:px-0 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 pb-4">
            {FEATURED_VENDORS.map((vendor) => (
              <Card key={vendor.id} className="overflow-hidden group flex flex-col shrink-0 w-[240px] md:w-auto border-slate-100 shadow-sm md:shadow-md">
                <div className="relative h-34 md:h-48 overflow-hidden">
                  <img src={vendor.image} alt={vendor.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-3 left-3">
                    <Badge variant={vendor.type === 'Premium' ? 'primary' : 'neutral'} className="shadow-lg backdrop-blur-md text-[9px] px-1.5 py-0.5">
                      {vendor.type}
                    </Badge>
                  </div>
                  {vendor.verified && (
                    <div className="absolute bottom-3 right-3 bg-white p-1 rounded-full shadow-lg border border-primary-50">
                      <ShieldCheck size={16} className="text-primary-600" />
                    </div>
                  )}
                </div>
                <div className="p-3 md:p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-1 text-amber-500 mb-1">
                    <Star size={12} fill="currentColor" />
                    <span className="text-xs font-bold text-slate-900">{vendor.rating}</span>
                    <span className="text-[10px] text-slate-400 font-medium ml-1">({vendor.reviews})</span>
                  </div>
                  <h4 className="text-base md:text-xl font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors cursor-pointer line-clamp-1">{vendor.name}</h4>
                  <p className="text-[10px] md:text-sm text-slate-400 font-medium mb-4 leading-tight line-clamp-1">Expert professional service in Indore.</p>
                  <Button
                    variant="outline"
                    onClick={() => { setSelectedVendor(vendor); setIsEnquiryOpen(true); }}
                    className="w-full mt-auto border-primary-100 text-primary-600 transition-all duration-300 font-bold py-2 rounded-xl text-xs"
                  >
                    Get Quote
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Discovery Segment - Compacted Padding */}
      <section className="max-w-[1400px] mx-auto px-6 pt-0 pb-12 bg-transparent">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <Badge variant="primary" className="mb-2 px-3 py-1 bg-primary-50 text-primary-700 text-[10px]">Social Discovery</Badge>
            <h2 className="text-2xl md:text-6xl font-display font-bold text-slate-900 mb-4 leading-tight">
              See What's Trending <br />
              in <span className="text-primary-600">Your Community</span>
            </h2>
            <p className="text-slate-500 text-sm md:text-xl mb-6 leading-relaxed max-w-2xl">
              Stay updated with the latest service works, tips, and transformations posted by vendors near you.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-4 p-3 rounded-2xl bg-white shadow-sm border border-slate-100">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-sm text-slate-900">Real Work Samples</h5>
                  <p className="text-[12px] text-slate-500 leading-tight">Unfiltered photos and videos from jobs.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 rounded-2xl bg-white shadow-sm border border-slate-100">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 flex-shrink-0">
                  <Star size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-sm text-slate-900">Community Reviews</h5>
                  <p className="text-[12px] text-slate-500 leading-tight">Read what your neighbors say.</p>
                </div>
              </div>
            </div>
            <Button 
              size="sm" 
              className="mt-6 rounded-xl w-full sm:w-auto px-8 py-3 text-sm shadow-lg shadow-primary-500/20"
              onClick={() => navigate('/social')}
            >
              Open Social Feed
            </Button>
          </div>

          <div className="lg:col-span-5 relative h-[380px] md:h-[650px] flex items-center justify-center group">
            <div className="absolute inset-0 bg-primary-50 rounded-3xl blur-3xl opacity-30 transform scale-90 group-hover:scale-100 transition-transform duration-700"></div>

            <div className="relative w-full h-full flex items-center justify-center">
              {previewStack.slice().reverse().map((cardId, index) => {
                const card = PREVIEW_CARDS.find(c => c.id === cardId);
                const stackPos = previewStack.indexOf(cardId);
                
                return (
                  <motion.div
                    key={cardId}
                    layout
                    initial={false}
                    animate={{
                      scale: 1 - stackPos * 0.05,
                      y: stackPos * 15,
                      x: stackPos === 1 ? -30 : stackPos === 2 ? 30 : 0,
                      rotate: stackPos === 1 ? -5 : stackPos === 2 ? 5 : 0,
                      zIndex: 30 - stackPos * 10,
                      opacity: 1
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    onClick={() => stackPos !== 0 && handleSwap(cardId)}
                    className={cn(
                      "absolute w-[280px] md:w-[350px] aspect-[4/5] bg-cover bg-center rounded-3xl shadow-2xl border-4 border-white overflow-hidden",
                      stackPos === 0 ? "cursor-default" : "cursor-pointer"
                    )}
                    style={{ backgroundImage: `url("${card.image}")` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <AnimatePresence>
                      {stackPos === 0 && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8"
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center overflow-hidden shrink-0">
                              <img src={card.avatar} alt="avatar" className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <span className="text-white text-lg font-bold block leading-none mb-1">{card.user}</span>
                              <span className="text-primary-300 text-[11px] font-bold uppercase tracking-wider">Verified Artist</span>
                            </div>
                          </div>
                          <p className="text-white text-sm md:text-lg font-medium line-clamp-3 leading-relaxed">
                            {card.text}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* Enquiry Form Modal */}
      <LeadFormModal 
        isOpen={isEnquiryOpen} 
        onClose={() => setIsEnquiryOpen(false)} 
        vendorName={selectedVendor?.name || "Expert"} 
      />

      {/* Services Full Screen Overlay (Original if needed) */}
      <ServicesOverlay 
        isOpen={isServicesOpen} 
        onClose={() => setIsServicesOpen(false)} 
      />

      {/* Premium Animated Categories Overlay */}
      <AnimatedCategoriesOverlay 
        isOpen={isCategoriesOverlayOpen}
        onClose={() => setIsCategoriesOverlayOpen(false)}
        triggerRef={moreButtonRef}
      />
    </UserLayout>
  );
};

export default Home;

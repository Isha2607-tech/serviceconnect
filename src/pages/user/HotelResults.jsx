import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserLayout from '../../layouts/UserLayout';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import { 
  ChevronRight, 
  Calendar, 
  ChevronDown, 
  Star, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Zap, 
  ThumbsUp, 
  CheckCircle,
  Clock,
  ExternalLink,
  ChevronLeft,
  X,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/cn';

const HOTEL_DATA = [
  {
    id: 1,
    name: 'Vink Lodge',
    rating: 3.5,
    reviews: 479,
    location: '90 Feet Road Dharavi, Mumbai',
    tags: ['24 Hour Concierge/Help Desk', 'Room Service', 'Laundry Service'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600',
    verified: false,
    responsive: false,
    highlight: 'High call pick up rate'
  },
  {
    id: 2,
    name: 'Astha Home',
    rating: 4.5,
    reviews: 189,
    location: 'Thakur Village Kandivali East, Mumbai',
    tags: ['WiFi', 'AC'],
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=600',
    verified: true,
    responsive: true,
    highlight: 'High call pick up rate',
    proximity: '3 minutes walk to Sai Dham Temple'
  },
  {
    id: 3,
    name: 'Marine Bay Resort',
    rating: 4.2,
    reviews: 1205,
    location: 'Marine Drive, Mumbai',
    tags: ['Sea Facing', 'WiFi', 'Restaurant'],
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=600',
    verified: true,
    responsive: true,
    highlight: 'High call pick up rate'
  },
  {
    id: 4,
    name: 'Sunshine Inn',
    rating: 3.8,
    reviews: 312,
    location: 'Andheri West, Mumbai',
    tags: ['Budget', '24 Hour Concierge', 'Laundry Service'],
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=600',
    verified: false,
    responsive: true,
    highlight: 'Instant response'
  },
  {
    id: 5,
    name: 'The Grand Palace',
    rating: 4.9,
    reviews: 2500,
    location: 'Colaba, Mumbai',
    tags: ['Luxury', 'Sea Facing', 'AC', 'Room Service'],
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=600',
    verified: true,
    responsive: true,
    highlight: 'High call pick up rate'
  },
  {
    id: 6,
    name: 'Green View Residency',
    rating: 4.0,
    reviews: 560,
    location: 'Powai, Mumbai',
    tags: ['Mountain View', 'WiFi', 'AC'],
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=600',
    verified: true,
    responsive: false,
    highlight: 'Peaceful location'
  },
  {
    id: 7,
    name: 'Blue Water Suites',
    rating: 4.4,
    reviews: 890,
    location: 'Juhu, Mumbai',
    tags: ['Beach Access', 'WiFi', 'Modern Amenities'],
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80&w=600',
    verified: true,
    responsive: true,
    highlight: 'High call pick up rate'
  }
];

const HotelResults = () => {
  const navigate = useNavigate();
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'sort', 'star', etc.
  const [checkIn, setCheckIn] = useState('22-04-2026');
  const [checkOut, setCheckOut] = useState('23-04-2026');

  const SORT_OPTIONS = ['Relevance', 'Rating', 'Popular', 'Distance', 'Highest Price', 'Lowest Price'];
  const STAR_OPTIONS = ['5 Star', '4 Star', '3 Star', '2 Star', '1 Star'];
  const BUDGET_OPTIONS = ['Rs 501 to Rs 1000', 'Rs 1001 to Rs 2000', 'Rs 2001 to Rs 3000', 'Rs 3001 to Rs 4000', 'Rs 4001 to Rs 5000', 'Rs 5001 to Rs 6000', 'Rs 6001 to Rs 7000', 'Rs 7001 to Rs 8000'];
  const VIEW_OPTIONS = ['Sea Facing', 'Mountain View', 'Lakeside View', 'Quiet Street View', 'City View', 'Beach Access'];

  return (
    <UserLayout>
      {/* Date Picker Modal */}
      <AnimatePresence>
        {isDatePickerOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setIsDatePickerOpen(false)}
               className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
             />
             <motion.div
               initial={{ opacity: 0, scale: 0.95, y: 10 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.95, y: 10 }}
               className="relative w-full max-w-[720px] bg-white rounded-2xl shadow-2xl overflow-hidden p-5"
             >
                <div className="flex justify-between items-center mb-4">
                   <button className="p-1.5 border border-slate-200 rounded text-slate-400 hover:bg-slate-50 transition-colors">
                     <ArrowLeft size={18} />
                   </button>
                   
                   <div className="flex-1 flex justify-around px-8">
                      <h3 className="text-lg font-bold text-slate-800">April 2026</h3>
                      <h3 className="text-lg font-bold text-slate-800">May 2026</h3>
                   </div>

                   <button className="p-1.5 border border-slate-200 rounded text-slate-400 hover:bg-slate-50 transition-colors">
                     <ArrowRight size={18} />
                   </button>
                </div>

                <div className="flex gap-6 justify-center">
                   {/* April Calendar */}
                   <div className="flex-1 max-w-[320px]">
                      <div className="grid grid-cols-7 border-l border-t border-slate-100">
                         {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                            <div key={d} className="text-center text-[10px] font-bold text-slate-400 py-3 border-r border-b border-slate-100 uppercase">{d}</div>
                         ))}
                         {/* Empty days for Wed start */}
                         <div className="p-2 border-r border-b border-slate-100 bg-slate-50/30"></div>
                         <div className="p-2 border-r border-b border-slate-100 bg-slate-50/30"></div>
                         <div className="p-2 border-r border-b border-slate-100 bg-slate-50/30"></div>
                         {[...Array(30)].map((_, i) => {
                            const day = i + 1;
                            const isSelected = day === 22 || day === 23;
                            return (
                               <div 
                                 key={i} 
                                 className={cn(
                                   "text-center p-3 text-xs font-bold cursor-pointer transition-all border-r border-b border-slate-100 aspect-square flex items-center justify-center",
                                   day > 0 && day < 22 && "text-slate-300",
                                   day >= 24 && "text-slate-800",
                                   isSelected ? "bg-[#0076d7] text-white border-[#0076d7]" : "hover:bg-slate-50"
                                 )}
                               >
                                 {day}
                               </div>
                            );
                         })}
                      </div>
                   </div>

                   {/* May Calendar */}
                   <div className="flex-1 max-w-[320px]">
                      <div className="grid grid-cols-7 border-l border-t border-slate-100">
                         {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                            <div key={d} className="text-center text-[10px] font-bold text-slate-400 py-3 border-r border-b border-slate-100 uppercase">{d}</div>
                         ))}
                         {/* Empty days for Fri start */}
                         <div className="p-2 border-r border-b border-slate-100 bg-slate-50/30"></div>
                         <div className="p-2 border-r border-b border-slate-100 bg-slate-50/30"></div>
                         <div className="p-2 border-r border-b border-slate-100 bg-slate-50/30"></div>
                         <div className="p-2 border-r border-b border-slate-100 bg-slate-50/30"></div>
                         <div className="p-2 border-r border-b border-slate-100 bg-slate-50/30"></div>
                         {[...Array(31)].map((_, i) => {
                            const day = i + 1;
                            return (
                               <div 
                                 key={i} 
                                 className={cn(
                                   "text-center p-3 text-xs font-bold cursor-pointer transition-all border-r border-b border-slate-100 aspect-square flex items-center justify-center",
                                   "text-slate-800 hover:bg-slate-50"
                                 )}
                               >
                                 {day}
                               </div>
                            );
                         })}
                      </div>
                   </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between px-2">
                   <div className="text-[15px] font-bold text-slate-900">
                     You Have Selected <span className="font-extrabold">1 Night</span>
                   </div>
                   <div className="flex items-center gap-12">
                      <button className="text-[#0076d7] font-bold text-[15px] hover:underline underline-offset-4">Reset</button>
                      <button 
                         onClick={() => setIsDatePickerOpen(false)}
                         className="bg-[#0076d7] text-white px-14 py-2.5 rounded-xl font-bold text-[15px] hover:bg-blue-700 transition shadow-xl shadow-blue-500/30 active:scale-95"
                      >
                         Apply
                      </button>
                   </div>
                </div>
             </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Lead Form Modal */}
      <AnimatePresence>
        {isLeadModalOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setIsLeadModalOpen(false)}
               className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
             />
             <motion.div
               initial={{ opacity: 0, scale: 0.9, y: 20 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.9, y: 20 }}
               className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden p-8"
             >
                <button 
                  onClick={() => setIsLeadModalOpen(false)}
                  className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X size={22} />
                </button>

                <h2 className="text-xl font-bold text-slate-900 mb-6">
                  Get the List of Top <span className="text-[#0076d7]">Hotels</span>
                </h2>

                <div className="space-y-5 mb-5 max-w-lg">
                   <div className="relative group">
                      <label className="absolute -top-2 left-3 bg-white px-1 text-[10px] font-medium text-slate-400 group-focus-within:text-[#0076d7] transition-colors">Name*</label>
                      <input 
                        type="text" 
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-[14px] focus:border-[#0076d7] focus:ring-1 focus:ring-[#0076d7] outline-none transition-all"
                      />
                   </div>
                   <div className="relative group">
                      <label className="absolute -top-2 left-3 bg-white px-1 text-[10px] font-medium text-slate-400 group-focus-within:text-[#0076d7] transition-colors">Mobile Number*</label>
                      <input 
                        type="text" 
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-[14px] focus:border-[#0076d7] focus:ring-1 focus:ring-[#0076d7] outline-none transition-all"
                      />
                   </div>
                </div>

                <p className="text-[10px] text-slate-400 mb-5">* Indicates mandatory fields</p>

                <div className="mb-6">
                   <p className="text-[14px] font-bold text-slate-900 mb-3">What type of Hotel are you looking for?</p>
                   <div className="flex items-center gap-8">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="modalHotelType" className="w-5 h-5 text-[#0076d7] focus:ring-[#0076d7]" defaultChecked />
                        <span className="text-[14px] font-medium text-slate-700">Budget</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="modalHotelType" className="w-5 h-5 text-[#0076d7] focus:ring-[#0076d7]" />
                        <span className="text-[14px] font-medium text-slate-700">Luxury</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="modalHotelType" className="w-5 h-5 text-[#0076d7] focus:ring-[#0076d7]" />
                        <span className="text-[14px] font-medium text-slate-700">Others</span>
                      </label>
                   </div>
                </div>

                <button 
                  className="w-full max-w-md bg-[#0076d7] text-white font-extrabold py-3.5 rounded-xl text-[18px] hover:bg-blue-700 transition shadow-xl shadow-blue-500/20 mb-6 uppercase tracking-widest"
                >
                  GET BEST DEAL
                </button>

                <div className="flex items-center gap-2 mb-6">
                   <input type="checkbox" className="w-4 h-4 text-[#0076d7] rounded focus:ring-[#0076d7]" defaultChecked />
                   <p className="text-[13px] text-slate-600 font-medium">
                     I Agree to <span className="text-slate-900 border-b border-slate-900">Terms and Conditions</span> <span className="text-slate-400 ml-1 underline transition-colors cursor-pointer hover:text-[#0076d7]">T&C's Privacy Policy</span>
                   </p>
                </div>

                <ul className="space-y-2">
                   {[
                     'Your requirement is sent to the selected relevant businesses',
                     'Businesses compete with each other to get you the Best Deal',
                     'You choose whichever suits you best',
                     'Contact info sent to you by SMS/Email'
                   ].map((item, idx) => (
                     <li key={idx} className="flex gap-3 text-[12px] text-slate-500 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                        {item}
                     </li>
                   ))}
                </ul>
             </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="max-w-[1400px] mx-auto px-6 py-4">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-4 py-1">
          <span className="hover:text-primary-600 cursor-pointer">Mumbai</span>
          <ChevronRight size={10} />
          <span className="hover:text-primary-600 cursor-pointer">Hotels in Mumbai</span>
          <ChevronRight size={10} />
          <span className="text-slate-400">14443+ Listings</span>
        </div>

        <h1 className="text-2xl font-bold text-slate-900 mb-6 font-display">Popular Hotels in Mumbai</h1>

        {/* Filters Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <div 
            onClick={() => setIsDatePickerOpen(true)}
            className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm bg-white cursor-pointer hover:border-primary-500 transition-colors shadow-sm"
          >
            <span className="font-bold text-slate-800">{checkIn}</span>
            <Calendar size={16} className="text-slate-400" />
          </div>
          <div 
            onClick={() => setIsDatePickerOpen(true)}
            className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm bg-white cursor-pointer hover:border-primary-500 transition-colors shadow-sm"
          >
            <span className="font-bold text-slate-800">{checkOut}</span>
            <Calendar size={16} className="text-slate-400" />
          </div>
          
          {/* Sort By Dropdown */}
          <div className="relative">
            <div 
              onClick={() => setActiveDropdown(activeDropdown === 'sort' ? null : 'sort')}
              className={cn(
                "flex items-center gap-2 px-4 py-2 border rounded-lg text-sm transition-all font-bold cursor-pointer",
                activeDropdown === 'sort' ? "border-primary-500 bg-white" : "border-slate-200 bg-slate-100/50 hover:bg-white hover:border-primary-500 text-slate-700"
              )}
            >
              Sort by
              <ChevronDown size={14} className={cn("text-slate-400 transition-transform", activeDropdown === 'sort' && "rotate-180")} />
            </div>
            
            <AnimatePresence>
              {activeDropdown === 'sort' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-slate-100 p-2 z-50"
                >
                  <div className="space-y-1">
                    {SORT_OPTIONS.map(opt => (
                      <button 
                        key={opt}
                        onClick={() => setActiveDropdown(null)}
                        className="w-full text-left px-4 py-2.5 text-[15px] font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-600 rounded-lg transition-colors"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-50">
                    <button 
                      onClick={() => setActiveDropdown(null)}
                      className="w-full py-2 text-primary-600 font-bold border border-primary-100 rounded-lg hover:bg-primary-50 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Star Rating Dropdown */}
          <div className="relative">
            <div 
              onClick={() => setActiveDropdown(activeDropdown === 'star' ? null : 'star')}
              className={cn(
                "flex items-center gap-2 px-4 py-2 border rounded-lg text-sm transition-all font-bold cursor-pointer",
                activeDropdown === 'star' ? "border-primary-500 bg-white" : "border-slate-200 bg-slate-100/50 hover:bg-white hover:border-primary-500 text-slate-700"
              )}
            >
              Star Rating
              <ChevronDown size={14} className={cn("text-slate-400 transition-transform", activeDropdown === 'star' && "rotate-180")} />
            </div>
            
            <AnimatePresence>
              {activeDropdown === 'star' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-slate-100 p-2 z-50"
                >
                  <div className="space-y-1">
                    {STAR_OPTIONS.map(opt => (
                      <button 
                        key={opt}
                        onClick={() => setActiveDropdown(null)}
                        className="w-full text-left px-4 py-2.5 text-[15px] font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-600 rounded-lg transition-colors"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-50">
                    <button 
                      onClick={() => setActiveDropdown(null)}
                      className="w-full py-2 text-primary-600 font-bold border border-primary-100 rounded-lg hover:bg-primary-50 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Budget Dropdown */}
          <div className="relative">
            <div 
              onClick={() => setActiveDropdown(activeDropdown === 'budget' ? null : 'budget')}
              className={cn(
                "flex items-center gap-2 px-4 py-2 border rounded-lg text-sm transition-all font-bold cursor-pointer",
                activeDropdown === 'budget' ? "border-primary-500 bg-white" : "border-slate-200 bg-slate-100/50 hover:bg-white hover:border-primary-500 text-slate-700"
              )}
            >
              Budget
              <ChevronDown size={14} className={cn("text-slate-400 transition-transform", activeDropdown === 'budget' && "rotate-180")} />
            </div>
            
            <AnimatePresence>
              {activeDropdown === 'budget' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-slate-100 p-2 z-50"
                >
                  <div className="space-y-1 overflow-y-auto max-h-[300px] no-scrollbar">
                    {BUDGET_OPTIONS.map(opt => (
                      <button 
                        key={opt}
                        onClick={() => setActiveDropdown(null)}
                        className="w-full text-left px-4 py-2.5 text-[15px] font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-600 rounded-lg transition-colors"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-50">
                    <button 
                      onClick={() => setActiveDropdown(null)}
                      className="w-full py-2 text-primary-600 font-bold border border-primary-100 rounded-lg hover:bg-primary-50 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Hotel View Dropdown */}
          <div className="relative">
            <div 
              onClick={() => setActiveDropdown(activeDropdown === 'view' ? null : 'view')}
              className={cn(
                "flex items-center gap-2 px-4 py-2 border rounded-lg text-sm transition-all font-bold cursor-pointer",
                activeDropdown === 'view' ? "border-primary-500 bg-white" : "border-slate-200 bg-slate-100/50 hover:bg-white hover:border-primary-500 text-slate-700"
              )}
            >
              Hotel View
              <ChevronDown size={14} className={cn("text-slate-400 transition-transform", activeDropdown === 'view' && "rotate-180")} />
            </div>
            
            <AnimatePresence>
              {activeDropdown === 'view' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-2xl border border-slate-100 p-2 z-50"
                >
                  <div className="space-y-1">
                    {VIEW_OPTIONS.map(opt => (
                      <button 
                        key={opt}
                        onClick={() => setActiveDropdown(null)}
                        className="w-full text-left px-4 py-2.5 text-[15px] font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-600 rounded-lg transition-colors"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-50">
                    <button 
                      onClick={() => setActiveDropdown(null)}
                      className="w-full py-2 text-primary-600 font-bold border border-primary-100 rounded-lg hover:bg-primary-50 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {['Pets Essential', 'User Ratings', 'Amenities'].map(filter => (
            <div key={filter} className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm bg-slate-100/50 cursor-pointer hover:bg-white hover:border-primary-500 transition-all font-bold text-slate-700">
              {filter}
              <ChevronDown size={14} className="text-slate-400" />
            </div>
          ))}

          <button className="flex items-center gap-2 px-4 py-2 border border-slate-900 rounded-lg text-sm bg-white font-bold hover:bg-slate-50 transition-all flex-shrink-0">
             <div className="flex flex-col gap-0.5 items-end">
                <div className="w-4 h-0.5 bg-slate-900"></div>
                <div className="w-3 h-0.5 bg-slate-900"></div>
                <div className="w-4 h-0.5 bg-slate-900"></div>
             </div>
             All Filters
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Listings */}
          <div className="lg:col-span-3 space-y-6">
            {HOTEL_DATA.map(hotel => (
              <Card key={hotel.id} className="p-4 flex flex-col md:flex-row gap-6 hover:shadow-xl transition-all duration-300 group border-slate-100">
                {/* Image Section */}
                <div 
                  onClick={() => navigate(`/hotels/${hotel.id}`)}
                  className="w-full md:w-72 h-56 relative rounded-xl overflow-hidden flex-shrink-0 cursor-pointer"
                >
                  <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-y-0 left-0 flex items-center px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={(e) => {e.stopPropagation();}} className="bg-black/30 backdrop-blur-md p-1.5 rounded-full text-white hover:bg-black/50"><ChevronLeft size={18} /></button>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={(e) => {e.stopPropagation();}} className="bg-black/30 backdrop-blur-md p-1.5 rounded-full text-white hover:bg-black/50"><ChevronRight size={18} /></button>
                  </div>
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                  </div>
                </div>

                {/* Details Section */}
                <div className="flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="space-y-1">
                      <div 
                        className="flex items-center gap-2 cursor-pointer group/title"
                        onClick={() => navigate(`/hotels/${hotel.id}`)}
                      >
                        <div className="bg-slate-900 text-white p-1 rounded-full"><Star size={10} fill="white" /></div>
                        <h3 className="text-xl font-bold text-slate-900 group-hover/title:text-[#0076d7] transition-colors">{hotel.name}</h3>
                      </div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <div className="bg-green-600 text-white px-2 py-0.5 rounded-md text-sm font-bold flex items-center gap-1">
                          {hotel.rating} <Star size={12} fill="currentColor" />
                        </div>
                        <span className="text-slate-400 text-sm font-medium">{hotel.reviews} Ratings</span>
                        {hotel.verified && (
                          <span className="flex items-center gap-1 text-primary-600 text-xs font-bold bg-primary-50 px-2 py-0.5 rounded border border-primary-100">
                             Verified
                          </span>
                        )}
                        {hotel.responsive && (
                          <span className="flex items-center gap-1 text-orange-600 text-xs font-bold bg-orange-50 px-2 py-0.5 rounded border border-orange-100">
                            <Zap size={12} fill="currentColor" /> Responsive
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-slate-600 text-sm mb-4 mt-2">
                    <MapPin size={16} className="text-slate-400" />
                    {hotel.location}
                  </div>

                  {hotel.proximity && (
                    <div className="flex items-center gap-2 text-slate-700 text-xs mb-4 font-bold bg-slate-50 self-start px-2 py-1 rounded">
                      <div className="w-1 h-1 bg-slate-900 rounded-full"></div>
                      {hotel.proximity}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {hotel.tags.map(tag => (
                      <span key={tag} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border border-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-3">
                    {hotel.highlight && (
                       <div className="flex items-center gap-1.5 text-orange-600 text-xs font-bold w-full mb-4">
                         <Zap size={14} fill="currentColor" />
                         {hotel.highlight}
                       </div>
                    )}
                    
                    <div className="flex items-center gap-2 w-full md:w-auto">
                      <button className="bg-[#008a00] text-white hover:bg-green-800 rounded-lg font-bold flex items-center gap-2 px-6 py-2 transition-all active:scale-95 text-sm">
                        <Phone size={16} fill="currentColor" />
                        09845258527
                      </button>
                      <button className="bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg font-bold flex items-center gap-2 px-6 py-2 transition-all active:scale-95 text-sm">
                        <div className="text-[#25d366]"><MessageSquare size={18} fill="currentColor" /></div>
                        WhatsApp
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => setIsLeadModalOpen(true)}
                      className="bg-[#0076d7] hover:bg-blue-700 text-white font-bold px-6 py-2 rounded-lg flex items-center gap-2 transition-all active:scale-95 text-sm shadow-md"
                    >
                      <Zap size={16} fill="currentColor" />
                      Get Best Deal
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24 border-slate-200 shadow-xl shadow-slate-200/50">
               <h4 className="text-base font-bold text-slate-900 mb-1 leading-tight">
                 Get the List of Top <span className="text-primary-600">Hotels</span>
               </h4>
               <p className="text-[11px] text-slate-400 mb-8">We'll send you contact details in seconds for free</p>

               <div className="space-y-6">
                  <div>
                    <p className="text-sm font-bold text-slate-900 mb-4">What type of Hotel are you looking for?</p>
                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input type="radio" name="hotelType" className="w-5 h-5 text-primary-600 focus:ring-primary-500 border-slate-300 transition-all" defaultChecked />
                        <span className="text-[13px] font-bold text-slate-700 group-hover:text-primary-600">Budget</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input type="radio" name="hotelType" className="w-5 h-5 text-primary-600 focus:ring-primary-500 border-slate-300 transition-all" />
                        <span className="text-[13px] font-bold text-slate-700 group-hover:text-primary-600">Luxury</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input type="radio" name="hotelType" className="w-5 h-5 text-primary-600 focus:ring-primary-500 border-slate-300 transition-all" />
                        <span className="text-[13px] font-bold text-slate-700 group-hover:text-primary-600">Others</span>
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <CheckCircle size={18} className="text-slate-900" />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Name"
                      className="block w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-xl text-[15px] font-medium placeholder:text-slate-400 focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all shadow-sm"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Phone size={18} className="text-slate-900" />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Mobile Number"
                      className="block w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-xl text-[15px] font-medium placeholder:text-slate-400 focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none transition-all shadow-sm"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="relative flex items-center pt-0.5">
                      <input type="checkbox" className="w-5 h-5 border-slate-300 rounded text-primary-600 focus:ring-primary-500 cursor-pointer" defaultChecked />
                    </div>
                    <span className="text-[11px] text-slate-500 leading-tight">
                      I Agree to <a href="#" className="text-primary-600 underline font-bold">T&C's Privacy Policy</a>
                    </span>
                  </div>

                  <button className="w-full bg-[#0076d7] hover:bg-blue-700 text-white font-bold py-3.5 rounded-lg flex items-center justify-center gap-2 group shadow-xl shadow-blue-500/10 transition-all active:scale-[0.98] text-[15px]">
                    Get Best Deal
                    <div className="flex -space-x-1 ml-1 overflow-hidden">
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform opacity-60" />
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform opacity-30" />
                    </div>
                  </button>
               </div>
            </Card>

          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default HotelResults;

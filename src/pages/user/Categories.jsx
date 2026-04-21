import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronDown, Search, Mic, MapPin, Bell } from 'lucide-react';
import { cn } from '../../utils/cn';

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
];

const CategoriesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-transparent pb-10">
      {/* Header */}
      <div className="px-4 pt-6 pb-4 bg-white sticky top-0 z-50 shadow-sm border-b border-cyan-50">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-xl hover:bg-slate-50 transition-colors">
            <ArrowLeft size={24} className="text-slate-800" />
          </button>
          <h1 className="text-xl font-bold text-slate-800">All Categories</h1>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 mt-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-1.5 flex items-center gap-3 shadow-sm">
          <Search className="text-slate-400 ml-2" size={20} />
          <input
            type="text"
            placeholder="Search categories..."
            className="w-full py-2 focus:outline-none text-slate-800 font-medium placeholder:text-slate-400"
          />
          <Mic size={20} className="text-blue-500 mr-2" />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="px-4 mt-8">
        <div className="grid grid-cols-2 gap-4">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              key={cat.id}
              className="bg-white rounded-xl p-3 flex items-center gap-3 shadow-[0_10px_25px_rgba(0,0,0,0.02)] border border-white active:scale-95 transition-all"
              onClick={() => {
                const route = cat.name.toLowerCase() === 'hotels' ? '/hotels' : `/category/${cat.name.toLowerCase()}`;
                navigate(route);
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#F0F9FB] flex items-center justify-center shrink-0">
                <img src={cat.icon} alt={cat.name} className="w-8 h-8 object-contain" />
              </div>
              <div className="flex items-center justify-between flex-1 min-w-0 pr-1">
                <span className="text-[14px] font-bold text-slate-700 truncate">{cat.name}</span>
                <ChevronDown size={14} className="-rotate-90 text-cyan-600/30 stroke-[3px]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;

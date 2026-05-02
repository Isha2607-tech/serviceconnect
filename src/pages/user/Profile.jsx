import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import UserLayout from '../../layouts/UserLayout';
import { 
  User, Mail, Phone, MapPin, Settings, ChevronRight, 
  ShoppingBag, Heart, Star, LogOut, Camera, ShieldCheck, 
  Calendar as CalIcon, Clock, Bell, Globe, Trash2, 
  History, CreditCard, HelpCircle, FileText, ArrowLeft,
  Download, Sparkles, Send, ChevronLeft, Package
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { storage } from '../../utils/storage';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';

// Dummy data for visual completeness
const DUMMY_FAVOURITES = [
  { name: 'Elegant Interiors', category: 'Home Decor', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'AquaSmooth Plumbing', category: 'Services', image: 'https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Zenith Home Spa', category: 'Wellness', image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=200' },
];

const DUMMY_BOOKINGS = [
  { itemName: 'Full House Cleaning', date: '25 May 2024', time: '10:00 AM', status: 'Scheduled' },
  { itemName: 'Car Detailing & Wash', date: '28 May 2024', time: '02:30 PM', status: 'Scheduled' }
];

const DUMMY_ENQUIRIES = [
  { vendorName: 'Glow Dental Clinic', service: 'Teeth Whitening', date: '02 May 2024', time: '11:45 AM', status: 'In Discussion' },
  { vendorName: 'Apex Car Care', service: 'Ceramic Coating', date: '01 May 2024', time: '04:00 PM', status: 'Responded' }
];

const Profile = () => {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(null);
  const [activeSubPage, setActiveSubPage] = useState(null);

  const user = {
    name: 'Ishaan Tech',
    handle: '@ishaantech_graphics',
    email: 'ishaan@tech.com',
    phone: '+91 9876543210',
    location: 'Mumbai, Maharashtra',
    memberSince: 'April 2024',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200'
  };

  // Combine real data with dummy data if real data is low
  const realBookings = storage.getBookings();
  const bookings = realBookings.length > 0 ? realBookings : DUMMY_BOOKINGS;
  
  const realOrders = storage.getOrders();
  const orders = realOrders; // Keep real orders as is for now

  const realEnquiries = storage.getEnquiries();
  const enquiries = realEnquiries.length > 0 ? realEnquiries : DUMMY_ENQUIRIES;

  const triggerToast = (msg) => {
    setShowToast(msg);
    setTimeout(() => setShowToast(null), 2000);
  };

  const handleClearCache = () => triggerToast("Cache cleared successfully");
  const handleClearHistory = () => triggerToast("History cleared successfully");

  const sections = [
    {
      title: "My Activity",
      items: [
        { icon: 'https://cdn-icons-gif.flaticon.com/9305/9305883.gif', label: 'Favourites', count: DUMMY_FAVOURITES.length, onClick: () => setActiveSubPage('Favourites') },
        { icon: 'https://cdn-icons-gif.flaticon.com/15164/15164822.gif', label: 'My Bookings', count: bookings.length, onClick: () => setActiveSubPage('Bookings') },
        { icon: 'https://cdn-icons-gif.flaticon.com/7994/7994366.gif', label: 'My Purchases', count: orders.length > 0 ? orders.length : 0, onClick: () => setActiveSubPage('Purchases') },
        { icon: 'https://cdn-icons-gif.flaticon.com/19015/19015985.gif', label: 'My Enquiries', count: enquiries.length, onClick: () => setActiveSubPage('Enquiries') },
      ]
    },
    {
      title: "Preferences",
      items: [
        { icon: 'https://cdn-icons-gif.flaticon.com/19021/19021674.gif', label: 'Location', value: user.location, onClick: () => setActiveSubPage('Location') },
        { icon: 'https://cdn-icons-gif.flaticon.com/8721/8721062.gif', label: 'Notifications', onClick: () => setActiveSubPage('Notifications') },
        { icon: 'https://cdn-icons-gif.flaticon.com/7994/7994375.gif', label: 'Subscription', value: 'Premium', onClick: () => setActiveSubPage('Subscription') },
      ]
    },
    {
      title: "Maintenance",
      items: [
        { icon: 'https://cdn-icons-gif.flaticon.com/17905/17905759.gif', label: 'Clear cache', onClick: handleClearCache, danger: false },
        { icon: 'https://cdn-icons-gif.flaticon.com/8722/8722577.gif', label: 'Clear history', onClick: handleClearHistory, danger: false },
      ]
    },
    {
      title: "Support",
      items: [
        { icon: 'https://cdn-icons-gif.flaticon.com/15370/15370741.gif', label: 'Help Center', onClick: () => setActiveSubPage('Help') },
        { icon: FileText, label: 'Terms & Privacy', onClick: () => setActiveSubPage('Privacy') },
        { icon: LogOut, label: 'Log out', onClick: () => triggerToast("Logged out successfully"), danger: true },
      ]
    }
  ];

  const renderSubPage = () => {
    const subPageTitle = activeSubPage;
    let content = null;

    if (activeSubPage === 'Bookings') {
      content = (
        <div className="space-y-4">
          {bookings.map((item, i) => (
            <Card key={i} className="p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-primary-600 flex items-center justify-center text-white shadow-lg shadow-primary-600/20">
                <CalIcon size={24} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 text-sm">{item.itemName}</h4>
                <div className="flex gap-3 text-[10px] text-slate-400 font-bold mt-1">
                  <span className="flex items-center gap-1"><CalIcon size={12} /> {item.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {item.time}</span>
                </div>
              </div>
              <span className="text-[9px] font-black uppercase text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-100">{item.status || 'Active'}</span>
            </Card>
          ))}
        </div>
      );
    } else if (activeSubPage === 'Enquiries') {
      content = (
        <div className="space-y-4">
          {enquiries.map((item, i) => (
            <Card key={i} className="p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-cyan-500 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
                <Send size={24} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 text-sm">{item.vendorName}</h4>
                <p className="text-[10px] text-slate-400 font-bold mt-1 uppercase tracking-wider">{item.service}</p>
              </div>
              <span className="text-[9px] font-black uppercase text-blue-600 bg-blue-50 px-2 py-1 rounded-lg border border-blue-100">{item.status || 'Sent'}</span>
            </Card>
          ))}
        </div>
      );
    } else if (activeSubPage === 'Favourites') {
      content = (
        <div className="grid grid-cols-2 gap-4">
          {DUMMY_FAVOURITES.map((item, i) => (
            <Card key={i} className="overflow-hidden group">
              <div className="h-28 overflow-hidden relative">
                <img src={item.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <button className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-md rounded-lg text-rose-500">
                  <Heart size={14} fill="currentColor" />
                </button>
              </div>
              <div className="p-3">
                <h4 className="font-bold text-slate-900 text-xs line-clamp-1">{item.name}</h4>
                <p className="text-[10px] text-slate-400 font-medium">{item.category}</p>
              </div>
            </Card>
          ))}
        </div>
      );
    } else if (activeSubPage === 'Purchases') {
      content = (
        <div className="py-20 text-center space-y-4">
          <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto text-slate-200">
            <Package size={40} />
          </div>
          <h3 className="text-lg font-bold text-slate-800">Your order list is empty</h3>
          <p className="text-slate-400 text-sm font-medium max-w-[200px] mx-auto">Items you buy will appear here for easy tracking.</p>
          <Button size="sm" onClick={() => navigate('/services')} className="rounded-xl px-8 mt-4">Start Shopping</Button>
        </div>
      );
    } else {
      content = (
        <div className="py-40 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-600 rounded-full border border-amber-100 font-bold text-xs mb-4">
             <Sparkles size={14} />
             Developer Mode
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-2">{activeSubPage} View</h2>
          <p className="text-slate-400 font-medium max-w-[250px] mx-auto leading-relaxed">
            This module is currently being finalized. <br /> Check back soon for the full experience!
          </p>
        </div>
      );
    }

    return (
      <motion.div 
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        className="fixed inset-0 z-[100] bg-white overflow-y-auto pb-20"
      >
        <div className="sticky top-0 bg-white/90 backdrop-blur-md px-6 pt-6 pb-4 flex items-center gap-4 z-10 border-b border-slate-50">
          <button onClick={() => setActiveSubPage(null)} className="p-2 -ml-2 rounded-full hover:bg-slate-50">
            <ArrowLeft size={24} className="text-slate-800" />
          </button>
          <h1 className="text-xl font-display font-bold text-slate-900">{subPageTitle}</h1>
        </div>
        <div className="px-6 py-6 max-w-2xl mx-auto">
          {content}
        </div>
      </motion.div>
    );
  };

  return (
    <UserLayout>
      <div className="min-h-screen bg-gradient-to-b from-[#D4F4FA] to-white pb-24 relative overflow-x-hidden">
        {/* Main Profile View */}
        <div className="px-6 pt-6 pb-4 flex items-center justify-between bg-transparent sticky top-0 z-50">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full active:bg-slate-100 transition-colors">
            <ArrowLeft size={24} className="text-slate-800" />
          </button>
          <h1 className="text-xl font-display font-bold text-slate-900">My Profile</h1>
          <button className="p-2 -mr-2 rounded-full active:bg-slate-100 transition-colors">
            <Settings size={22} className="text-slate-800" />
          </button>
        </div>

        <div className="px-6 max-w-2xl mx-auto pt-4">
          <div className="flex items-center gap-6 mb-10">
            <div className="relative">
              <div className="w-28 h-28 rounded-full overflow-hidden border-[3px] border-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] bg-slate-100">
                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border border-slate-50 text-slate-600">
                <Camera size={16} />
              </button>
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col mb-4">
                <h2 className="text-2xl font-display font-bold text-slate-900 leading-tight">{user.name}</h2>
                <span className="text-sm font-medium text-slate-400">{user.handle}</span>
              </div>
              <button className="bg-[#E13B3B] hover:bg-red-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-all shadow-lg shadow-red-500/20 active:scale-95">
                Edit Profile
              </button>
            </div>
          </div>

          <div className="space-y-8">
            {sections.map((section, sIdx) => (
              <div key={sIdx} className="space-y-1">
                <h3 className="px-2 text-[11px] font-bold text-slate-400 uppercase tracking-[2px] mb-3">{section.title}</h3>
                <div className="space-y-1">
                  {section.items.map((item, iIdx) => (
                    <button 
                      key={iIdx}
                      onClick={item.onClick}
                      className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 active:bg-slate-100 transition-all group text-left"
                    >
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center transition-colors shadow-sm overflow-hidden",
                          item.danger ? "bg-rose-50 text-rose-500" : "bg-white text-slate-600 border border-slate-100 group-hover:bg-primary-50 group-hover:text-primary-600 group-hover:border-primary-100"
                        )}>
                          {typeof item.icon === 'string' ? (
                            <img src={item.icon} alt={item.label} className="w-8 h-8 object-contain" />
                          ) : (
                            <item.icon size={20} />
                          )}
                        </div>
                        <div className="flex flex-col items-start">
                          <span className={cn(
                            "font-bold text-sm",
                            item.danger ? "text-rose-600" : "text-slate-700"
                          )}>{item.label}</span>
                          {item.value && (
                            <span className="text-[10px] font-medium text-slate-400">{item.value}</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        {item.count !== undefined && (
                          <span className="px-2 py-0.5 rounded-lg bg-slate-100 text-slate-500 text-[10px] font-black uppercase">
                            {item.count}
                          </span>
                        )}
                        <ChevronRight size={18} className="text-slate-300 group-hover:text-slate-400 transition-colors" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 mb-2">
                <Sparkles size={12} className="text-amber-500" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Version 2.4.0 (Stable)</span>
             </div>
             <p className="text-[11px] font-medium text-slate-300">© 2026 ServiceConnect. Crafted with ❤️ for Ishaan Tech</p>
          </div>
        </div>

        {/* Sub-page Detail Views */}
        <AnimatePresence>
          {activeSubPage && renderSubPage()}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-3 rounded-2xl shadow-2xl z-[200] font-bold text-sm flex items-center gap-3 border border-white/10"
          >
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            {showToast}
          </motion.div>
        )}
      </AnimatePresence>
    </UserLayout>
  );
};

export default Profile;

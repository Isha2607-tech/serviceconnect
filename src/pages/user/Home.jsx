import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Sparkles, Star, ShieldCheck, Zap, ArrowRight, Utensils, Hotel, Scissors, Sofa, Heart, GraduationCap, Key, Building2, UserCog, Dog, Bed, Store, Activity, Dumbbell, Banknote, Calendar, CarFront, Truck, Send, Menu, Clock, LayoutGrid, Bell } from 'lucide-react';
import { cn } from '../../utils/cn';
import UserLayout from '../../layouts/UserLayout';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import heroBg from '../../assets/homepage.jpg';

const CATEGORIES = [
  { id: 1, name: 'Restaurants', icon: Utensils, color: 'text-orange-500 bg-orange-50' },
  { id: 2, name: 'Hotels', icon: Hotel, color: 'text-blue-500 bg-blue-50' },
  { id: 3, name: 'Beauty Spa', icon: Scissors, color: 'text-pink-500 bg-pink-50' },
  { id: 4, name: 'Home Decor', icon: Sofa, color: 'text-indigo-500 bg-indigo-50' },
  { id: 5, name: 'Wedding Planning', icon: Heart, color: 'text-rose-500 bg-rose-50' },
  { id: 6, name: 'Education', icon: GraduationCap, color: 'text-emerald-500 bg-emerald-50' },
  { id: 7, name: 'Rent & Hire', icon: Key, color: 'text-amber-500 bg-amber-50' },
  { id: 8, name: 'Hospitals', icon: Building2, color: 'text-red-500 bg-red-50' },
  { id: 9, name: 'Contractors', icon: UserCog, color: 'text-slate-600 bg-slate-100' },
  { id: 10, name: 'Pet Shops', icon: Dog, color: 'text-brown-500 bg-orange-100' },
  { id: 11, name: 'PG/Hostels', icon: Bed, color: 'text-cyan-500 bg-cyan-50' },
  { id: 12, name: 'Estate Agent', icon: Store, color: 'text-violet-500 bg-violet-50' },
  { id: 13, name: 'Dentists', icon: Activity, color: 'text-teal-500 bg-teal-50' },
  { id: 14, name: 'Gym', icon: Dumbbell, color: 'text-slate-900 bg-slate-200' },
  { id: 15, name: 'Loans', icon: Banknote, color: 'text-emerald-600 bg-emerald-100' },
  { id: 16, name: 'Event Organisers', icon: Calendar, color: 'text-purple-500 bg-purple-50' },
  { id: 17, name: 'Driving Schools', icon: CarFront, color: 'text-sky-500 bg-sky-50' },
  { id: 18, name: 'Packers & Movers', icon: Truck, color: 'text-amber-600 bg-amber-100' },
  { id: 19, name: 'Courier Service', icon: Send, color: 'text-blue-600 bg-blue-100' },
  { id: 20, name: 'Popular Categories', icon: Menu, color: 'text-primary-600 bg-primary-50', isMenu: true },
];

const FEATURED_VENDORS = [
  { id: 1, name: 'AquaSmooth Plumbing', rating: 4.9, reviews: 1240, type: 'Premium', verified: true, image: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400' },
  { id: 2, name: 'Apex Car Care', rating: 4.8, reviews: 3100, type: 'Featured', verified: true, image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=400' },
  { id: 3, name: 'Zenith Home Spa', rating: 4.7, reviews: 890, type: 'Promoted', verified: false, image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=400' },
  { id: 4, name: 'Glow Dental Clinic', rating: 5.0, reviews: 450, type: 'Top Rated', verified: true, image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=400' },
];

const Home = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (cat) => {
    if (cat.name === 'Hotels') {
      navigate('/hotels');
    } else {
      navigate('/search');
    }
  };

  return (
    <UserLayout>
      {/* Mobile-Only Home View (JustDial Inspired) */}
      <div className="md:hidden pt-20 bg-primary-50/30 min-h-screen">
        {/* Mobile Header with Green Tint */}
        <div className="bg-primary-600 px-4 pt-4 pb-12 mb-[-32px] rounded-b-[40px] shadow-lg shadow-primary-500/20">
          <div className="flex items-center justify-between mb-6">
             <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/30">
                  <LayoutGrid size={22} />
                </div>
                <span className="text-white font-display font-bold text-xl drop-shadow-sm">ServiceConnect</span>
             </div>
             <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/10">
                <Bell size={18} />
             </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-3 flex items-center gap-3">
            <Search className="text-primary-400" size={20} />
            <input 
              type="text" 
              placeholder="What are you looking for?" 
              className="w-full text-sm font-bold focus:outline-none placeholder:text-gray-400 text-slate-700"
            />
          </div>
        </div>

        {/* Mobile Categories - Offset over top header */}
        <div className="px-4 relative z-10">
          <div className="grid grid-cols-4 gap-y-6 bg-white p-6 rounded-[24px] border border-primary-50 shadow-xl mb-6">
            {CATEGORIES.slice(0, 12).map((cat) => (
              <div 
                key={cat.id} 
                className="flex flex-col items-center group active:scale-95 transition-transform"
                onClick={() => handleCategoryClick(cat)}
              >
                <div className={cn(
                  "w-12 h-12 rounded-2xl mb-2 flex items-center justify-center transition-all duration-300",
                  cat.color.split(' ')[1] // Get actual BG color class
                )}>
                  <cat.icon size={22} className={cat.color.split(' ')[0]} />
                </div>
                <span className="text-[10px] font-bold text-gray-700 text-center leading-tight">
                  {cat.name.split(' ')[0]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Promotional Banner */}
        <div className="px-4 mb-8">
          <div className="bg-gradient-to-r from-primary-600 to-indigo-600 rounded-2xl p-6 text-white relative overflow-hidden shadow-lg shadow-primary-500/20">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Connect with <br/> 20 Crore+ Customers</h3>
              <p className="text-white/80 text-xs mb-4">List your business on ServiceConnect for FREE</p>
              <button className="bg-white text-primary-600 text-xs font-bold px-5 py-2 rounded-lg shadow-md">List My Business</button>
            </div>
            <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-30 flex items-center justify-center">
               <Zap size={80} className="text-white fill-white" />
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
                "w-16 h-16 rounded-2xl mb-3 flex items-center justify-center transition-all duration-300 border border-slate-100 shadow-sm group-hover:shadow-md group-hover:-translate-y-1",
                cat.color,
                cat.isMenu && "bg-primary-600 text-white border-primary-600 shadow-lg shadow-primary-500/20"
              )}>
                <cat.icon size={cat.isMenu ? 28 : 24} />
              </div>
              <span className="text-[11px] md:text-sm font-bold text-slate-700 text-center leading-tight transition-colors group-hover:text-primary-600">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Vendors */}
      <section className="bg-slate-100/50 py-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Handpicked Top Rated Experts</h2>
            <p className="text-slate-500 text-lg">We only feature vendors with proven track records and high customer satisfaction.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURED_VENDORS.map((vendor) => (
              <Card key={vendor.id} className="overflow-hidden group flex flex-col">
                <div className="relative h-48 overflow-hidden">
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
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-1 text-amber-500 mb-2">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm font-bold text-slate-900">{vendor.rating}</span>
                    <span className="text-xs text-slate-400 font-medium ml-1">({vendor.reviews} reviews)</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors cursor-pointer">{vendor.name}</h4>
                  <p className="text-sm text-slate-400 font-medium mb-6">Expert plumbing and sanitation solutions across Mumbai region.</p>
                  <Button
                    variant="outline"
                    className="w-full mt-auto border-primary-100 text-primary-600 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-300 font-bold py-3 rounded-xl"
                  >
                    Get Quote
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Button variant="secondary" className="px-10 rounded-2xl font-bold bg-white shadow-xl shadow-slate-200">
              Load More Verified Vendors
            </Button>
          </div>
        </div>
      </section>

      {/* Social Feed Preview Segment */}
      <section className="max-w-[1400px] mx-auto px-6 py-24 bg-white/50">
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
            <Button size="lg" className="mt-12 rounded-2xl w-full sm:w-auto px-12 py-4 text-lg shadow-lg shadow-primary-500/20">Open Social Feed</Button>
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

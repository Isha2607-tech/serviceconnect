import React, { useState } from 'react';
import UserLayout from '../../layouts/UserLayout';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import { Search, Map as MapIcon, List, Filter, Star, MapPin, Phone, MessageSquare, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { cn } from '../../utils/cn';

const FILTERS = ['Top Rated', 'Open Now', 'Verified Only', 'Within 5km', 'Best Price'];

const MOCK_RESULTS = [
  { id: 1, name: 'Crystal Clear Glazing', category: 'Glass & Windows', rating: 4.8, distance: '1.2 km', reviews: 450, price: '₹₹', image: 'https://images.unsplash.com/photo-1549443542-d66763595797?auto=format&fit=crop&q=80&w=400', verified: true, promoted: true },
  { id: 2, name: 'Mumbai Paint Pros', category: 'Home Painting', rating: 4.6, distance: '3.5 km', reviews: 1200, price: '₹', image: 'https://images.unsplash.com/photo-1589939705384-5185138a047a?auto=format&fit=crop&q=80&w=400', verified: true, promoted: false },
  { id: 3, name: 'Elite Security Systems', category: 'Security', rating: 4.9, distance: '0.5 km', reviews: 88, price: '₹₹₹', image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=400', verified: false, promoted: false },
  { id: 4, name: 'Green Leaf Gardeners', category: 'Landscaping', rating: 4.7, distance: '2.1 km', reviews: 310, price: '₹₹', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=400', verified: true, promoted: true },
];

const SearchResults = () => {
  const [view, setView] = useState('list');
  const [activeFilters, setActiveFilters] = useState(['Top Rated']);

  const toggleFilter = (f) => {
    setActiveFilters(prev => prev.includes(f) ? prev.filter(x => x !== f) : [...prev, f]);
  };

  return (
    <UserLayout>
       {/* Search Header */}
       <div className="bg-white border-b border-slate-200 sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
             <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold whitespace-nowrap">
                  <span className="text-slate-900 font-bold">142</span> Results for <span className="text-primary-600">"Home Services"</span>
                </div>
                <div className="h-6 w-px bg-slate-200 hidden md:block"></div>
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0">
                   {FILTERS.map((f) => (
                      <button
                        key={f}
                        onClick={() => toggleFilter(f)}
                        className={cn(
                          "px-4 py-1.5 rounded-full text-xs font-bold border transition-all whitespace-nowrap",
                          activeFilters.includes(f) 
                            ? "bg-primary-600 border-primary-600 text-white" 
                            : "bg-white border-slate-200 text-slate-600 hover:border-primary-400"
                        )}
                      >
                        {f}
                      </button>
                   ))}
                </div>
             </div>

             <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                <div className="flex bg-slate-100 p-1 rounded-xl">
                   <button 
                     onClick={() => setView('list')}
                     className={cn("p-2 rounded-lg transition-all", view === 'list' ? "bg-white shadow-sm text-primary-600" : "text-slate-500")}
                   >
                     <List size={20} />
                   </button>
                   <button 
                     onClick={() => setView('map')}
                     className={cn("p-2 rounded-lg transition-all", view === 'map' ? "bg-white shadow-sm text-primary-600" : "text-slate-500")}
                   >
                     <MapIcon size={20} />
                   </button>
                </div>
                <Button variant="secondary" className="rounded-xl px-4 flex items-center gap-2">
                  <SlidersHorizontal size={18} />
                  More Filters
                </Button>
             </div>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             {/* Results List */}
             <div className={cn("space-y-6 transition-all duration-500", view === 'map' ? "lg:col-span-1" : "lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 space-y-0")}>
                {MOCK_RESULTS.map((res) => (
                  <Card key={res.id} className={cn("overflow-hidden flex group", view === 'list' ? "flex-col" : "flex-col")}>
                     <div className={cn("relative overflow-hidden", view === 'map' ? "h-40" : "h-56")}>
                        <img src={res.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        {res.promoted && (
                          <div className="absolute top-4 left-4">
                            <Badge variant="primary" className="shadow-lg backdrop-blur-md bg-primary-600/90 text-white border-none">Promoted</Badge>
                          </div>
                        )}
                        <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-xl text-white hover:bg-white hover:text-accent-500 transition-all">
                           <Star size={20} />
                        </button>
                     </div>
                     <div className="p-6 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                           <div className="space-y-1">
                              <div className="text-[10px] uppercase font-bold tracking-widest text-primary-600">{res.category}</div>
                              <h4 className="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors uppercase">{res.name}</h4>
                           </div>
                           <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-2 py-1 rounded-lg">
                              <Star size={14} fill="currentColor" />
                              <span className="text-sm font-bold">{res.rating}</span>
                           </div>
                        </div>
                        
                        <div className="flex items-center gap-4 text-slate-500 text-sm font-medium mb-6">
                           <div className="flex items-center gap-1.5">
                              <MapPin size={16} className="text-primary-500" />
                              {res.distance}
                           </div>
                           <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                           <div>{res.reviews} Reviews</div>
                           <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                           <div className="font-bold text-slate-900">{res.price}</div>
                        </div>

                        <div className="mt-auto pt-6 border-t border-slate-100 flex items-center gap-3">
                           <Button size="icon" variant="ghost" className="text-primary-600 hover:bg-primary-50 border border-transparent hover:border-primary-100">
                              <Phone size={18} />
                           </Button>
                           <Button variant="secondary" className="flex-1 rounded-xl">Chat</Button>
                           <Button className="flex-1 rounded-xl">Get Quote</Button>
                        </div>
                     </div>
                  </Card>
                ))}
             </div>

             {/* Map Placeholder */}
             {view === 'map' && (
               <div className="lg:col-span-2 sticky top-36 h-[calc(100vh-160px)] rounded-3xl bg-slate-100 border-2 border-slate-200 overflow-hidden group">
                  <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center shadow-2xl animate-bounce">
                           <MapPin size={40} className="text-primary-600" />
                        </div>
                        <h4 className="text-lg font-bold text-slate-900">Interactive Map View</h4>
                        <p className="text-sm text-slate-500 max-w-xs mx-auto">See vendors in your exact neighborhood. Click on markers for instant details.</p>
                      </div>
                  </div>
                  {/* Decorative map elements */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
               </div>
             )}
          </div>
       </div>
    </UserLayout>
  );
};

export default SearchResults;

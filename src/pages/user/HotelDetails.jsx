import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserLayout from '../../layouts/UserLayout';
import Card from '../../components/common/Card';
import { 
  ChevronRight, 
  Star, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Send, 
  Share2, 
  Edit3, 
  Zap, 
  CheckCircle2, 
  Bookmark,
  Camera,
  Plus,
  ChevronDown,
  X,
  ThumbsUp
} from 'lucide-react';
import { cn } from '../../utils/cn';

const HotelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Overview');
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Hardcoded data for Vink Lodge as per screenshot
  const hotel = {
    name: 'Vink Lodge',
    rating: 3.5,
    reviews: 479,
    location: 'Dharavi, Mumbai',
    yearsInBusiness: 33,
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1555854817-5b2260d1bd63?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800',
    ]
  };

  const tabs = ['Overview', 'Services', 'Quick Info', 'Photos', 'Explore', 'Reviews'];

  return (
    <UserLayout>
      {/* Photo Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-[200] bg-white overflow-y-auto">
          <div className="max-w-[1400px] mx-auto px-6 py-10">
            <div className="flex items-center justify-between mb-8 sticky top-0 bg-white py-4 border-b border-slate-100 z-10">
              <h2 className="text-2xl font-bold text-slate-900">Photos of {hotel.name}</h2>
              <button 
                onClick={() => setIsGalleryOpen(false)}
                className="p-3 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {hotel.images.map((img, i) => (
                <div key={i} className="break-inside-avoid rounded-xl overflow-hidden shadow-md">
                   <img src={img} alt={`Gallery ${i}`} className="w-full h-auto hover:scale-105 transition-transform duration-700" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-[1400px] mx-auto px-6 py-4">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-4 whitespace-nowrap overflow-x-auto no-scrollbar">
          <span>Mumbai</span> <ChevronRight size={10} />
          <span>Lodging Services In Mumbai</span> <ChevronRight size={10} />
          <span>Lodging Services In Dharavi</span> <ChevronRight size={10} />
          <span className="text-slate-900 font-medium">Vink Lodge</span>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[360px] mb-8 rounded-2xl overflow-hidden shadow-sm">
          <div className="col-span-2 row-span-2 relative group cursor-pointer" onClick={() => setIsGalleryOpen(true)}>
            <img src={hotel.images[0]} alt="Main" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="col-span-1 row-span-1 relative group cursor-pointer" onClick={() => setIsGalleryOpen(true)}>
            <img src={hotel.images[1]} alt="Gallery 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="col-span-1 row-span-1 relative group cursor-pointer" onClick={() => setIsGalleryOpen(true)}>
            <img src={hotel.images[2]} alt="Gallery 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="col-span-1 row-span-1 relative group cursor-pointer" onClick={() => setIsGalleryOpen(true)}>
             <img src={hotel.images[3]} alt="Gallery 3" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white backdrop-blur-[2px] group-hover:bg-black/60 transition-all">
                <span className="text-2xl font-bold">+19</span>
                <span className="text-xs font-medium">More</span>
             </div>
          </div>
          <div className="col-span-1 row-span-1 relative group cursor-pointer" onClick={() => setIsGalleryOpen(true)}>
             <img src={hotel.images[4]} alt="Gallery 4" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white backdrop-blur-[2px] group-hover:bg-black/60 transition-all">
                <Camera size={24} className="mb-px" />
                <Plus size={14} className="absolute top-1/2 left-1/2 translate-x-1 translate-y-[-10px]" />
                <span className="text-xs font-bold mt-2">Add More Photo</span>
             </div>
          </div>
        </div>

        {/* Hotel Info Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-[32px] font-bold text-slate-900 leading-tight flex items-center gap-3">
                <div className="bg-slate-900 text-white rounded-md p-1.5"><Star size={20} fill="currentColor" /></div>
                {hotel.name}
              </h1>
              <div className="flex gap-2 ml-auto md:ml-0">
                <span className="bg-slate-50 text-slate-500 text-[11px] px-2 py-1 rounded">Lodging Services</span>
                <span className="bg-slate-50 text-slate-500 text-[11px] px-2 py-1 rounded">Hotels</span>
              </div>
              <button className="p-2 border border-slate-200 rounded-lg text-slate-400 hover:bg-slate-50 md:ml-2">
                <Bookmark size={20} />
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
              <div className="flex items-center gap-1.5">
                <div className="bg-[#008a00] text-white px-1.5 py-0.5 rounded text-[13px] font-bold flex items-center gap-1">
                  3.5 <Star size={10} fill="currentColor" />
                </div>
                <span className="text-slate-400 font-medium">479 Ratings</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-900 font-bold">
                 <CheckCircle2 size={16} fill="currentColor" className="text-slate-900" />
                 Claimed
              </div>
              <div className="flex items-center gap-1 text-slate-500">
                <MapPin size={16} className="text-slate-400" />
                {hotel.location}
              </div>
              <div className="text-slate-500 font-medium">• 33 Years in Business</div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
               <button className="bg-[#008a00] text-white px-6 py-2.5 rounded-lg flex items-center gap-3 font-bold text-[15px] shadow-lg shadow-green-500/10">
                 <Phone size={18} fill="currentColor" />
                 09845258527
               </button>
               <button className="bg-[#0076d7] text-white px-6 py-2.5 rounded-lg flex items-center gap-3 font-bold text-[15px] shadow-lg shadow-blue-500/10">
                 <Zap size={18} fill="currentColor" />
                 Best Deal
               </button>
               <button className="bg-white border border-slate-200 text-slate-700 px-6 py-2.5 rounded-lg flex items-center gap-3 font-bold text-[15px] hover:bg-slate-50 transition-colors">
                 <div className="text-[#25d366]"><MessageSquare size={20} fill="currentColor" /></div>
                 WhatsApp
               </button>
               <button className="bg-white border border-slate-200 text-slate-700 px-6 py-2.5 rounded-lg flex items-center gap-3 font-bold text-[15px] hover:bg-slate-50 transition-colors group relative">
                 <div className="bg-[#0076d7] text-white rounded-md p-1 group-hover:scale-110 transition-transform"><Send size={14} fill="currentColor" /></div>
                 Ask Anything
                 <span className="absolute -top-2 -right-1 bg-blue-50 text-[#0076d7] text-[9px] px-1.5 py-0.5 rounded-full font-extrabold uppercase border border-blue-100">Beta</span>
               </button>
               <button className="p-2.5 border border-slate-200 rounded-lg text-slate-400 hover:bg-slate-50">
                 <Share2 size={20} />
               </button>
               <button className="p-2.5 border border-slate-200 rounded-lg text-slate-400 hover:bg-slate-50">
                 <Edit3 size={20} />
               </button>

               <div className="flex-1 flex items-center justify-end gap-1 px-4 min-w-[200px]">
                  <span className="text-slate-500 text-xs font-bold mr-2">Click to Rate</span>
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-8 h-8 border border-slate-200 rounded flex items-center justify-center text-slate-300 hover:text-[#0076d7] hover:border-[#0076d7] cursor-pointer transition-all">
                      <Star size={18} />
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-slate-100 flex gap-10 mb-8 overflow-x-auto no-scrollbar">
          {tabs.map(tab => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              className={cn(
                "py-3 font-bold text-[15px] relative transition-colors whitespace-nowrap",
                activeTab === tab ? "text-[#0076d7]" : "text-slate-500 hover:text-slate-700"
              )}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0076d7] rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20">
          <div className="lg:col-span-2">
            <Card className="p-8 border-slate-100 shadow-sm relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-10">
                <div>
                   <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-4">
                     <CheckCircle2 size={16} className="text-slate-900" />
                     Facilities
                   </h3>
                   <div className="pl-6 text-sm text-slate-600 font-medium underline underline-offset-4 cursor-pointer hover:text-[#0076d7]">No Smoking Zone</div>
                </div>

                <div>
                   <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-4">
                     <CheckCircle2 size={16} className="text-slate-900" />
                     Amenities
                   </h3>
                   <div className="pl-6 text-sm text-slate-600 font-medium leading-relaxed">
                     Fan , Linens Provided <span className="text-[#0076d7]">+10</span>
                   </div>
                </div>

                <div>
                   <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-4">
                     <CheckCircle2 size={16} className="text-slate-900" />
                     Services
                   </h3>
                   <div className="pl-6 text-sm text-slate-600 font-medium leading-relaxed">
                     24 Hour Concierge/Help <br /> Desk , Room Service <span className="text-[#0076d7]">+1</span>
                   </div>
                </div>

                <div>
                   <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-4">
                     <CheckCircle2 size={16} className="text-slate-900" />
                     Safety & Security
                   </h3>
                   <div className="pl-6 text-sm text-slate-600 font-medium">Smoke Detector</div>
                </div>
              </div>
              
              <button className="mx-auto block px-10 py-2 border border-[#0076d7] text-[#0076d7] text-[13px] font-bold rounded hover:bg-blue-50 transition-colors">
                View all
              </button>
            </Card>

            {/* Ask Anything Section */}
            <div className="mt-8 relative p-[1.5px] rounded-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400">
              <div className="bg-white rounded-[15px] p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-50 text-[#0076d7] p-1.5 rounded-lg border border-blue-100">
                    <Send size={18} fill="currentColor" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">Ask anything about this place</h3>
                </div>

                <div className="space-y-6">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Ask anything..."
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-sm focus:bg-white focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {[
                      'What services do they specialize in?',
                      'What are the operating hours?',
                      'How can I book a service?'
                    ].map(q => (
                      <button key={q} className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-100 rounded-lg text-xs font-bold text-slate-700 hover:border-blue-300 hover:text-blue-600 transition-all group">
                        {q}
                        <ChevronRight size={14} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Information */}
            <div className="mt-12 mb-16">
               <h3 className="text-2xl font-bold text-slate-900 mb-8 font-display">Quick Information</h3>
               <div className="space-y-6">
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Year of Establishment</p>
                    <p className="text-slate-700 font-bold">1993</p>
                  </div>
               </div>
            </div>

            {/* Hotel Location Score */}
            <div className="mt-16">
               <h3 className="text-2xl font-bold text-slate-900 mb-8 font-display">Hotel Location Score</h3>
               <div className="mb-10 flex items-start gap-4">
                  <div className="bg-[#008a00] text-white p-3 rounded-lg text-2xl font-bold">3.6</div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Best Location overall</h4>
                    <p className="text-slate-400 text-sm">for sightseeing recreation, & getting around</p>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {[
                    { score: '3.4', label: 'GOOD', desc: 'for proximity to things to do', icon: <Camera size={24} /> },
                    { score: '3.8', label: 'BEST', desc: 'for proximity to transit', icon: <ChevronRight size={24} className="rotate-[-45deg]" /> },
                    { score: '3.2', label: 'GOOD', desc: 'for airport access', icon: <Zap size={24} /> }
                  ].map((card, i) => (
                    <div key={i} className="p-6 border border-slate-100 rounded-xl bg-slate-50/30">
                       <div className="flex items-center gap-6 mb-3">
                          <div className="text-slate-900">{card.icon}</div>
                          <div className="flex items-center gap-2">
                             <span className="text-xl font-bold text-slate-900">{card.score}</span>
                             <span className="text-xs font-bold text-[#008a00] px-1.5 py-0.5 bg-green-50 rounded italic">{card.label}</span>
                          </div>
                       </div>
                       <p className="text-slate-400 text-xs leading-relaxed">{card.desc}</p>
                    </div>
                  ))}
               </div>
               <p className="text-slate-400 text-[10px]">* Aggregated rating from popular sites on internet</p>
            </div>

            {/* You might want to explore */}
            <div className="mt-12 pb-6">
               <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 font-display">You might want to explore</h3>
                  <button className="text-[#0076d7] text-sm font-bold hover:underline">View all</button>
               </div>

               <div className="flex gap-3 mb-8 overflow-x-auto no-scrollbar">
                  {['Food & drinks', 'Attractions', 'Entertainment', 'Transportation'].map((tab, i) => (
                    <button key={tab} className={cn(
                      "px-6 py-2.5 rounded-lg text-sm font-bold transition-all whitespace-nowrap",
                      i === 0 ? "bg-blue-50 text-[#0076d7]" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                    )}>{tab}</button>
                  ))}
               </div>

               <h4 className="text-base font-bold text-slate-900 mb-6">Restaurants</h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { 
                      name: 'Hotel Theresa Veg And Non Veg', 
                      rating: 4.1, 
                      reviews: '994 Ratings', 
                      dist: '110 mts , Dharavi',
                      img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400'
                    },
                    { 
                      name: "Food Lee's Family Restaurant", 
                      rating: 4.3, 
                      reviews: '33 Ratings', 
                      dist: '370 mts , Dharavi',
                      img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=400'
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:shadow-lg transition-all group">
                       <div className="w-32 h-32 rounded-lg overflow-hidden shrink-0">
                          <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                       </div>
                       <div className="flex-1">
                          <h5 className="font-bold text-slate-900 mb-1 leading-snug">{item.name}</h5>
                          <div className="flex items-center gap-2 mb-2">
                             <div className="bg-[#008a00] text-white px-1.5 py-0.5 rounded text-[10px] font-bold flex items-center gap-1">{item.rating} <Star size={8} fill="currentColor" /></div>
                             <span className="text-slate-400 text-[11px] font-medium">{item.reviews}</span>
                          </div>
                          <p className="text-slate-500 text-xs mb-4">{item.dist}</p>
                          <div className="flex items-center gap-2">
                             <button className="flex-1 bg-[#008a00] text-white py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2">
                               <Phone size={14} fill="currentColor" /> Show Number
                             </button>
                             <button className="border border-slate-200 px-3 py-1.5 rounded-lg text-[#25d366] hover:bg-slate-50">
                               <MessageSquare size={16} fill="currentColor" />
                             </button>
                          </div>
                       </div>
                    </div>
                  ))}
               </div>
             </div>

            {/* Reviews & Ratings */}
            <div className="mt-8 pt-8 border-t border-slate-100">
               <h3 className="text-2xl font-bold text-slate-900 mb-8 font-display">Reviews & Ratings</h3>
               
               <div className="flex items-center gap-6 mb-10">
                  <div className="bg-[#008a00] text-white w-20 h-20 rounded-2xl flex items-center justify-center text-4xl font-bold">3.5</div>
                  <div>
                    <h4 className="text-[28px] font-bold text-slate-900 leading-tight">479 Ratings</h4>
                    <p className="text-slate-400 text-sm">Jd rating index based on 479 ratings across the web</p>
                  </div>
               </div>

               <div className="mb-12">
                  <p className="text-lg font-bold text-slate-900 mb-4">Start your Review</p>
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-12 h-12 border border-slate-300 rounded-xl flex items-center justify-center text-slate-500 hover:text-orange-400 hover:border-orange-400 cursor-pointer transition-all">
                        <Star size={24} />
                      </div>
                    ))}
                  </div>
               </div>

               <div className="mb-12">
                  <p className="text-sm font-bold text-slate-700 mb-6 uppercase tracking-wider">Recent rating trend</p>
                  <div className="flex flex-wrap gap-4">
                     {[5.0, 5.0, 2.0, 5.0, 1.0, 5.0, 5.0, 1.0, 2.0].map((r, i) => (
                       <div key={i} className="px-4 py-1.5 border border-slate-100 rounded-full bg-slate-50/50 flex items-center gap-2">
                          <span className="text-sm font-bold text-slate-900">{r.toFixed(1)}</span>
                          <Star size={12} fill="currentColor" className="text-orange-500" />
                       </div>
                     ))}
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                  {[
                    { source: 'Justdial', rating: 3.5, reviews: 479 },
                    { source: 'Google', rating: 3.5, reviews: 404 }
                  ].map((p, i) => (
                    <div key={i} className="p-8 border border-slate-100 rounded-2xl bg-white shadow-sm">
                       <p className={cn("text-xl font-bold mb-6", p.source === 'Justdial' ? "text-[#0076d7]" : "text-slate-900")}>{p.source}</p>
                       <div className="flex items-center gap-3 mb-4">
                          <div className="bg-[#008a00] text-white px-2 py-1 rounded-md font-bold text-lg">{p.rating}</div>
                          <span className="text-slate-400 font-medium">out of 5</span>
                       </div>
                       <p className="text-slate-900 font-bold">Based on {p.reviews} reviews</p>
                    </div>
                  ))}
               </div>

               {/* User Reviews Feed */}
               <div className="mt-16">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8 font-display">User Reviews</h3>
                  
                  <div className="flex items-center gap-4 mb-10 overflow-x-auto no-scrollbar py-2">
                     <button className="flex items-center gap-2 px-6 py-2.5 border border-slate-200 rounded-lg text-sm font-bold text-slate-700 bg-white">
                        Justdial <ChevronDown size={14} />
                     </button>
                     {['Relevant', 'Latest', 'High to Low'].map((f, i) => (
                       <button key={f} className={cn(
                        "px-6 py-2.5 rounded-lg text-sm font-bold transition-all whitespace-nowrap border border-slate-100",
                        i === 0 ? "bg-blue-50 text-[#0076d7] border-blue-100" : "bg-white text-slate-500 hover:bg-slate-50"
                       )}>{f}</button>
                     ))}
                  </div>

                  <div className="space-y-12">
                     {[
                       {
                         name: 'ASHISH',
                         date: '23 Feb',
                         rating: 5,
                         tag: 'Clean rooms',
                         text: '"I had a great stay at Vink Lodge! The rooms were very clean and tidy. I felt comfortable and relaxed. The staff was nice and helpful too. Every corner of the room was spotless, which made my stay even better. I really liked it here and would come back again! If you want clean rooms, Vink Lodge is the place to go!"',
                         response: 'Appreciate you highlighting the cleanliness and staff friendliness — that means a lot to us.',
                         img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150'
                       },
                       {
                         name: 'Sukananda S Salunke',
                         date: '24 Apr 2024',
                         rating: 5,
                         tag: 'Professional service',
                         text: 'Excellent service and very polite staff. The rooms are well maintained and the location is perfect for travelers.',
                         response: null,
                         img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150'
                       }
                     ].map((review, i) => (
                       <div key={i} className="pb-10 border-b border-slate-100 last:border-0 relative">
                          <button className="absolute top-0 right-0 p-2 text-slate-400 hover:text-slate-600"><Plus size={20} className="rotate-45" /></button>
                          
                          <div className="flex items-center gap-4 mb-3">
                             <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-slate-100">
                                <img src={review.img} alt={review.name} className="w-full h-full object-cover" />
                             </div>
                             <div className="flex-1">
                                <h5 className="font-bold text-slate-900 text-base">{review.name}</h5>
                                <p className="text-slate-400 text-xs">{review.date}</p>
                             </div>
                          </div>

                          <div className="flex items-center gap-1 mb-3">
                             {[...Array(5)].map((_, si) => (
                               <Star key={si} size={16} fill={si < review.rating ? "currentColor" : "none"} className={si < review.rating ? "text-orange-500" : "text-slate-200"} />
                             ))}
                          </div>

                          {review.tag && (
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-slate-600 text-xs font-bold rounded-lg border border-green-100 mb-6">
                               <ThumbsUp size={12} className="text-[#008a00]" />
                               {review.tag}
                            </div>
                          )}

                          <p className="text-[#333] text-[15px] leading-[1.8] font-medium mb-8">
                             {review.text}
                          </p>

                          {review.response && (
                            <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100 relative">
                               <div className="flex items-center gap-3 mb-4">
                                  <div className="w-8 h-8 rounded-lg overflow-hidden border border-slate-200">
                                     <img src={hotel.images[0]} alt="Vink Lodge" className="w-full h-full object-cover" />
                                  </div>
                                  <div>
                                    <h6 className="text-[13px] font-bold text-slate-900">Vink Lodge</h6>
                                    <div className="flex items-center gap-2">
                                       <span className="text-[11px] font-bold text-[#0076d7] bg-blue-50 px-1.5 py-0.5 rounded capitalize">Owner Response</span>
                                       <span className="text-[10px] text-slate-400">{review.date}</span>
                                    </div>
                                  </div>
                               </div>
                               <p className="text-slate-600 text-sm leading-relaxed">
                                  {review.response}
                               </p>
                            </div>
                          )}

                          <div className="flex items-center gap-10">
                             <button className="flex items-center gap-2.5 text-slate-500 font-bold text-[14px] hover:text-[#0076d7]">
                                <ThumbsUp size={18} /> Helpful
                             </button>
                             <button className="flex items-center gap-2.5 text-slate-500 font-bold text-[14px] hover:text-[#0076d7]">
                                <MessageSquare size={18} /> Comment (1)
                             </button>
                             <button className="flex items-center gap-2.5 text-slate-500 font-bold text-[14px] hover:text-[#0076d7]">
                                <Share2 size={18} /> Share
                             </button>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>

          {/* Sidebar Availability Card and Contact */}
          <div className="lg:col-span-1 space-y-6">
             {/* Lead Generation Card */}
             <Card className="p-8 border-slate-100 shadow-xl shadow-slate-100/30">
                <h4 className="text-lg font-bold text-slate-900 mb-2">Get the List of <span className="text-[#0076d7]">Hotels</span></h4>
                <p className="text-slate-400 text-[13px] font-medium mb-6 leading-relaxed">We'll send you contact details in seconds for free</p>
                
                <div className="space-y-6">
                   <p className="text-sm font-bold text-slate-900">What type of Hotel are you looking for?</p>
                   <div className="flex flex-wrap gap-6">
                      {['Budget', 'Luxury', 'Others'].map(type => (
                        <label key={type} className="flex items-center gap-3 cursor-pointer group">
                           <div className="w-5 h-5 border-2 border-slate-200 rounded-full flex items-center justify-center group-hover:border-blue-400 transition-colors">
                              {type === 'Budget' && <div className="w-2.5 h-2.5 bg-[#0076d7] rounded-full" />}
                           </div>
                           <span className="text-[14px] font-bold text-slate-700">{type}</span>
                        </label>
                      ))}
                   </div>

                   <div className="space-y-4">
                      <div className="relative">
                         <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><Edit3 size={16} /></div>
                         <input type="text" placeholder="Name" className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-4 text-sm outline-none focus:border-[#0076d7] transition-all" />
                      </div>
                      <div className="relative">
                         <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><Phone size={16} /></div>
                         <input type="text" placeholder="Mobile Number" className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-4 text-sm outline-none focus:border-[#0076d7] transition-all" />
                      </div>
                   </div>

                   <div className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#0076d7] rounded flex items-center justify-center shrink-0 mt-0.5">
                         <Plus size={14} className="text-white rotate-45" />
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                        I Agree to <span className="text-slate-700 underline underline-offset-2 cursor-pointer">T&C's Privacy Policy</span>
                      </p>
                   </div>

                   <button className="w-full bg-[#0076d7] text-white py-4 rounded-xl font-bold text-[15px] shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all flex items-center justify-center gap-2">
                      Get Best Deal <ChevronRight size={18} className="rotate-[0deg] stroke-[3]" />
                   </button>
                </div>
             </Card>

            <Card className="p-6 border-slate-100 shadow-xl shadow-slate-100/50 sticky top-24">
               <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-50">
                  <div className="p-2 bg-slate-50 rounded-lg"><Zap size={18} className="text-slate-400" /></div>
                  <span className="text-sm font-bold text-slate-500">GSTIN : 27AAAPU3195L1Z6</span>
               </div>

               <h3 className="text-lg font-bold text-slate-900 mb-8">Check Availability</h3>
               
               <div className="grid grid-cols-3 gap-x-4 mb-8">
                  <div>
                    <label className="block text-[13px] font-medium text-slate-400 mb-4">Check in</label>
                    <div className="text-[15px] font-bold text-slate-900 pb-2 border-b-2 border-slate-900">22 Apr</div>
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-slate-400 mb-4">Check Out</label>
                    <div className="text-[15px] font-bold text-slate-900 pb-2 border-b-2 border-slate-900">23 Apr</div>
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-slate-400 mb-4">Guests</label>
                    <div className="text-[15px] font-bold text-slate-900 pb-2 border-b border-slate-200 flex items-center justify-between cursor-pointer">
                      2 ADULTS <ChevronDown size={14} className="text-slate-400" />
                    </div>
                  </div>
               </div>

               <button className="w-full mb-8 flex items-center gap-3 text-slate-900 font-bold text-[15px] py-4 border-t border-slate-100">
                  <Phone size={18} className="text-[#0076d7]" />
                  Call for rates and availability
               </button>

               <div className="space-y-10 pt-4 border-t border-slate-50">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-6">Contact</h4>
                    <div className="flex items-center gap-3 text-[#0076d7] font-bold text-[15px] group cursor-pointer">
                       <Phone size={18} fill="currentColor" className="group-hover:scale-110 transition-transform" />
                       09845258527
                    </div>
                  </div>

                  <div className="relative">
                    <h4 className="text-lg font-bold text-slate-900 mb-6 font-display">Address</h4>
                    <p className="text-[14px] text-slate-600 font-medium leading-relaxed mb-4">
                      1st & 2nd Floor Plot No 50, Sunder Compound, Opposite Kamraj Chowk, 90 Feet Road, Dharavi, Mumbai-400017, Maharashtra
                    </p>
                    <div className="flex items-center gap-4 text-[#0076d7] font-bold text-sm">
                       <button className="flex items-center gap-1.5 hover:underline">
                         <div className="p-1 border border-blue-100 rounded bg-blue-50/50"><ChevronRight size={14} className="rotate-[-45deg]" /></div>
                         Get Directions
                       </button>
                       <button className="flex items-center gap-1.5 hover:underline ml-auto">
                         <div className="p-1 border border-blue-100 rounded bg-blue-50/50"><Edit3 size={14} /></div>
                         Copy
                       </button>
                    </div>
                  </div>

                  <div className="space-y-6 pt-6 border-t border-slate-100">
                    {[
                      { icon: <MessageSquare size={18} />, text: 'Send Enquiry by Email' },
                      { icon: <ThumbsUp size={18} />, text: 'Get info via SMS/Email' },
                      { icon: <Share2 size={18} />, text: 'Share' },
                      { icon: <Star size={18} />, text: 'Tap to rate' }
                    ].map((action, i) => (
                      <button key={i} className="flex items-center gap-4 w-full text-slate-700 font-bold text-[14px] hover:text-[#0076d7] transition-colors group">
                        <div className="text-[#0076d7] group-hover:scale-110 transition-transform">{action.icon}</div>
                        {action.text}
                      </button>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-slate-100">
                     <h4 className="text-lg font-bold text-slate-900 mb-6">Also listed in</h4>
                     <div className="flex flex-wrap gap-3">
                        {['Hotels', 'Lodging Services'].map(tag => (
                          <span key={tag} className="px-4 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-slate-500 text-xs font-bold">{tag}</span>
                        ))}
                     </div>
                  </div>
               </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-[150] shadow-[0_-4px_20px_rgba(0,0,0,0.05)] py-3 px-6 transform translate-y-0 transition-transform">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
           <div className="flex items-center gap-4 border-r border-slate-100 pr-8">
              <div className="flex items-center gap-2">
                <div className="bg-slate-900 text-white rounded p-0.5"><Star size={12} fill="currentColor" /></div>
                <span className="font-bold text-slate-900 text-base">Vink Lodge</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                 <div className="bg-[#008a00] text-white px-1.5 py-0.5 rounded flex items-center gap-1">3.5 <Star size={8} fill="currentColor" /></div>
                 <span>479 Ratings</span>
                 <span>• Claimed</span>
              </div>
           </div>

           <div className="flex-1 flex items-center justify-end gap-3">
              <button className="bg-[#008a00] text-white px-5 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 shadow-lg shadow-green-500/10">
                <Phone size={16} fill="currentColor" />
                09845258527
              </button>
              <button className="bg-[#0076d7] text-white px-5 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 shadow-lg shadow-blue-500/10">
                <Zap size={16} fill="currentColor" />
                Best Deal
              </button>
              <button className="border border-slate-200 text-slate-700 px-5 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-slate-50">
                <div className="text-[#25d366]"><MessageSquare size={18} fill="currentColor" /></div>
                WhatsApp
              </button>
              <div className="flex items-center gap-2 ml-2 pl-4 border-l border-slate-100">
                 <button className="p-2.5 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg"><Share2 size={18} /></button>
                 <button className="p-2.5 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg"><Bookmark size={18} /></button>
                 <button className="p-2.5 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg"><Edit3 size={18} /></button>
              </div>
           </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default HotelDetails;

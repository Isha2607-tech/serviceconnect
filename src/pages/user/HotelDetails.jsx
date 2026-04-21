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
import BestDealModal from '../../components/common/BestDealModal';

const HotelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Overview');
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isBestDealModalOpen, setIsBestDealModalOpen] = useState(false);

  // Hardcoded data for Vink Lodge as per screenshot
  const hotel = {
    name: 'Vink Lodge',
    rating: 3.5,
    reviews: 479,
    location: 'Dharavi, Mumbai',
    yearsInBusiness: 33,
    verified: true,
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

      <div className="max-w-[1400px] mx-auto px-6 pt-[4.4rem] md:pt-24 pb-4">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-2 whitespace-nowrap overflow-x-auto no-scrollbar">
          <span>Mumbai</span> <ChevronRight size={12} className="shrink-0" />
          <span>Lodging Services In Mumbai</span> <ChevronRight size={12} className="shrink-0" />
          <span>Lodging Services In Dharavi</span> <ChevronRight size={12} className="shrink-0" />
          <span className="text-slate-900 font-medium">Vink Lodge</span>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          {/* Desktop Grid Layout */}
          <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-3 h-[360px] rounded-2xl overflow-hidden shadow-sm">
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

          {/* Mobile Horizontal Scroll Layout (As per reference) */}
          <div className="md:hidden flex gap-2 overflow-x-auto no-scrollbar scroll-smooth">
            {hotel.images.slice(0, 5).map((img, i) => (
              <div key={i} className="min-w-[140px] h-[140px] rounded-xl overflow-hidden shrink-0 shadow-sm" onClick={() => setIsGalleryOpen(true)}>
                 <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
              </div>
            ))}
            
            {/* View More Card */}
            <div 
              onClick={() => setIsGalleryOpen(true)}
              className="min-w-[140px] h-[140px] rounded-xl bg-black relative shrink-0 overflow-hidden group cursor-pointer"
            >
               <img src={hotel.images[5]} alt="More" className="w-full h-full object-cover opacity-40" />
               <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <span className="text-2xl font-black">+51</span>
                  <span className="text-sm font-bold mt-1">View More</span>
               </div>
            </div>

            {/* Upload Photo Card */}
            <div className="min-w-[140px] h-[140px] rounded-xl bg-slate-100 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-500 shrink-0 cursor-pointer hover:bg-slate-200 transition-colors">
               <Camera size={32} className="mb-2 opacity-50" />
               <span className="text-[12px] font-bold text-center px-4 leading-tight">Upload Photos</span>
            </div>
          </div>
        </div>

        {/* Hotel Info Header */}
        <div className="mb-0">
          {/* Desktop Header */}
          <div className="hidden md:flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
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
                {hotel.verified && (
                  <div className="flex items-center gap-1.5 text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full font-bold text-[13px]">
                     <CheckCircle2 size={16} fill="currentColor" />
                     Verified
                  </div>
                )}
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
                 <button 
                   onClick={() => setIsBestDealModalOpen(true)}
                   className="bg-[#0076d7] text-white px-6 py-2.5 rounded-lg flex items-center gap-3 font-bold text-[15px] shadow-lg shadow-blue-500/10"
                 >
                   <Zap size={18} fill="currentColor" />
                   Best Deal
                 </button>
                 <button className="bg-white border border-slate-200 text-slate-700 px-6 py-2.5 rounded-lg flex items-center gap-3 font-bold text-[15px] hover:bg-slate-50 transition-colors">
                   <div className="text-[#25d366]"><MessageSquare size={20} fill="currentColor" /></div>
                   WhatsApp
                 </button>
              </div>
            </div>
          </div>

          {/* Mobile Header (As per reference design) */}
          <div className="md:hidden mt-2">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                 <div className="p-1 bg-slate-900 rounded-md text-white">
                   <Star size={16} fill="currentColor" />
                 </div>
                 <div className="flex items-center gap-1.5">
                   <h1 className="text-xl font-bold text-slate-900 tracking-tight">{hotel.name}</h1>
                   <div className="text-primary-600 bg-primary-50 rounded-full p-0.5">
                     <CheckCircle2 size={14} fill="currentColor" />
                   </div>
                 </div>
              </div>
              <Bookmark size={20} className="text-slate-300" />
            </div>

            <div className="flex items-center gap-2 mb-2">
              <div className="bg-[#008a00] text-white px-1.5 py-0.5 rounded font-bold flex items-center gap-1 text-[11px]">
                 3.5 <Star size={10} fill="currentColor" />
              </div>
              <span className="text-slate-500 text-[12px] font-medium">479 ratings</span>
            </div>

            <div className="flex items-center flex-wrap gap-x-2 gap-y-1 mb-3">
               <div className="flex items-center gap-1 text-slate-500 text-[13px] font-medium">
                  <MapPin size={14} className="text-slate-400 shrink-0" />
                  {hotel.location}
               </div>
               <span className="text-slate-300 ml-0.5">•</span>
               <div className="text-slate-900 text-[13px] font-bold tracking-tight">Hotels</div>
            </div>

            {/* Icon Buttons Row */}
            <div className="grid grid-cols-3 gap-4 mb-3">
               <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-primary-600 rounded-[1.25rem] flex items-center justify-center text-white shadow-lg shadow-primary-500/20 active:scale-95 transition-transform">
                     <Phone size={22} fill="currentColor" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-800">Call Now</span>
               </div>
               <div 
                 onClick={() => setIsBestDealModalOpen(true)}
                 className="flex flex-col items-center gap-2 cursor-pointer"
               >
                  <div className="w-12 h-12 bg-white border border-slate-200 rounded-[1.25rem] flex items-center justify-center text-slate-800 active:scale-95 transition-transform">
                     <MessageSquare size={22} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-800 text-center">Enquire Now</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-[#25d366] rounded-[1.25rem] flex items-center justify-center text-white shadow-lg shadow-green-500/20 active:scale-95 transition-transform">
                     <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                     </svg>
                  </div>
                  <span className="text-[10px] font-bold text-slate-800">Whatsapp</span>
               </div>
            </div>


          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-slate-100 flex gap-6 md:gap-10 mb-8 overflow-x-auto no-scrollbar">
          {tabs.map(tab => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              className={cn(
                "py-3 font-bold text-[14px] md:text-[15px] relative transition-colors whitespace-nowrap",
                activeTab === tab ? "text-slate-900" : "text-slate-500 hover:text-slate-700 font-medium"
              )}
            >
              <div className="flex items-center gap-1.5">
                {tab}
                {tab === 'Book' && <div className="w-1.5 h-1.5 bg-accent-500 rounded-full" />}
              </div>
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-slate-900 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20">
          <div className="lg:col-span-2">
            
            {activeTab === 'Overview' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <Card className="p-8 border-slate-100 shadow-sm">
                   <h3 className="text-xl font-bold text-slate-900 mb-4">About {hotel.name}</h3>
                   <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                      Vink Lodge is a premier lodging destination located in the heart of Dharavi, Mumbai. Established in 1993, we have been providing comfortable and affordable accommodation to travelers for over 3 decades. Our property is known for its cleanliness, professional staff, and strategic location that offers easy access to Mumbai's major landmarks.
                   </p>
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-slate-50">
                      <div>
                         <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider mb-1">Check-in</p>
                         <p className="text-slate-900 font-bold">12:00 PM</p>
                      </div>
                      <div>
                         <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider mb-1">Check-out</p>
                         <p className="text-slate-900 font-bold">11:00 AM</p>
                      </div>
                      <div>
                         <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider mb-1">Established</p>
                         <p className="text-slate-900 font-bold">1993</p>
                      </div>
                   </div>
                </Card>

                {/* Facilities Highlights in Overview */}
                <Card className="p-8 border-slate-100 shadow-sm relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    <div>
                      <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-4 text-base">
                        <CheckCircle2 size={16} className="text-slate-900" />
                        Facilities Highlights
                      </h3>
                      <div className="pl-6 text-sm text-slate-600 font-medium underline underline-offset-4 cursor-pointer hover:text-[#0076d7]">No Smoking Zone</div>
                    </div>
                    <div>
                      <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-4 text-base">
                        <CheckCircle2 size={16} className="text-slate-900" />
                        Top Amenities
                      </h3>
                      <div className="pl-6 text-sm text-slate-600 font-medium leading-relaxed">
                        Fan , Linens Provided
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {activeTab === 'Services' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <Card className="p-8 border-slate-100 shadow-sm">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8 font-display">Facilities & Services</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                    <div>
                       <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Facilities</h4>
                       <div className="space-y-4">
                          {['No Smoking Zone', '24 Hour Reception', 'Elevator', 'Free Parking'].map(f => (
                            <div key={f} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                               <CheckCircle2 size={14} className="text-primary-600" /> {f}
                            </div>
                          ))}
                       </div>
                    </div>
                    <div>
                       <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Amenities</h4>
                       <div className="space-y-4">
                          {['Fan', 'Linens Provided', 'CCTV', 'Power Backup', 'Wi-Fi'].map(a => (
                            <div key={a} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                               <CheckCircle2 size={14} className="text-primary-600" /> {a}
                            </div>
                          ))}
                       </div>
                    </div>
                    <div>
                       <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Services</h4>
                       <div className="space-y-4">
                          {['Room Service', 'Laundry Service', 'Concierge', 'Doctor on Call'].map(s => (
                            <div key={s} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                               <CheckCircle2 size={14} className="text-primary-600" /> {s}
                            </div>
                          ))}
                       </div>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {activeTab === 'Quick Info' && (
              <div className="space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <Card className="p-8 border-slate-100 shadow-sm">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8 font-display">Quick Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider mb-2">Year of Establishment</p>
                      <p className="text-slate-700 font-extrabold text-lg">1993</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider mb-2">Registration No.</p>
                      <p className="text-slate-700 font-extrabold text-lg">MH-400017-H</p>
                    </div>
                  </div>
                </Card>

                <div>
                   <h3 className="text-2xl font-bold text-slate-900 mb-8 font-display">Hotel Location Score</h3>
                   <div className="mb-10 flex items-start gap-4">
                      <div className="bg-[#008a00] text-white p-3 rounded-lg text-2xl font-bold">3.6</div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900">Best Location overall</h4>
                        <p className="text-slate-400 text-sm">for sightseeing recreation, & getting around</p>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        { score: '3.4', label: 'GOOD', desc: 'for proximity to things to do', icon: <Camera size={24} /> },
                        { score: '3.8', label: 'BEST', desc: 'for proximity to transit', icon: <ChevronRight size={24} className="rotate-[-45deg]" /> },
                        { score: '3.2', label: 'GOOD', desc: 'for airport access', icon: <Zap size={24} /> }
                      ].map((card, i) => (
                        <div key={i} className="p-6 border border-slate-100 rounded-xl bg-white shadow-sm">
                           <div className="flex items-center gap-6 mb-3">
                              <div className="text-slate-900">{card.icon}</div>
                              <div className="flex items-center gap-2">
                                 <span className="text-xl font-bold text-slate-900">{card.score}</span>
                                 <span className="text-xs font-bold text-[#008a00] px-1.5 py-0.5 bg-green-50 rounded italic">{card.label}</span>
                              </div>
                           </div>
                           <p className="text-slate-400 text-xs leading-relaxed font-medium">{card.desc}</p>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            )}

            {activeTab === 'Photos' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {hotel.images.map((img, i) => (
                    <div key={i} className={cn(
                      "rounded-xl overflow-hidden shadow-sm aspect-square cursor-pointer active:scale-95 transition-transform",
                      i === 0 && "col-span-2 row-span-2 aspect-auto h-full"
                    )} onClick={() => setIsGalleryOpen(true)}>
                       <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="bg-slate-100 rounded-xl flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-300">
                     <Camera size={28} className="text-slate-400 mb-2" />
                     <p className="text-xs font-bold text-slate-500 text-center">Upload Photo</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Explore' && (
               <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <div className="flex items-center justify-between mb-8">
                     <h3 className="text-2xl font-bold text-slate-900 font-display">Nearby Exploration</h3>
                     <button className="text-[#0076d7] text-sm font-bold hover:underline">View all</button>
                  </div>

                  <div className="flex gap-3 mb-8 overflow-x-auto no-scrollbar pb-2">
                     {['Food & drinks', 'Attractions', 'Entertainment', 'Transportation'].map((tab, i) => (
                       <button key={tab} className={cn(
                         "px-6 py-2.5 rounded-lg text-sm font-bold transition-all whitespace-nowrap",
                         i === 0 ? "bg-primary-600 text-white shadow-lg shadow-primary-500/20" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                       )}>{tab}</button>
                     ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {[
                       { 
                         name: 'Hotel Theresa Veg And Non Veg', 
                         rating: 4.1, 
                         img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400'
                       },
                       { 
                         name: "Food Lee's Family Restaurant", 
                         rating: 4.3, 
                         img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=400'
                       }
                     ].map((item, i) => (
                       <div key={i} className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:shadow-lg transition-all bg-white group">
                          <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                             <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                          </div>
                          <div className="flex-1">
                             <h5 className="font-bold text-slate-900 mb-1 leading-snug text-sm">{item.name}</h5>
                             <div className="flex items-center gap-2 mb-3">
                                <div className="bg-[#008a00] text-white px-1.5 py-0.5 rounded text-[10px] font-bold flex items-center gap-1">{item.rating} <Star size={8} fill="currentColor" /></div>
                             </div>
                             <button className="w-full border border-primary-600 text-primary-600 py-1.5 rounded-lg text-[11px] font-bold hover:bg-primary-50 transition-colors">View Details</button>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            )}

            {activeTab === 'Reviews' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                 <div className="flex items-center gap-6 mb-12">
                    <div className="bg-[#008a00] text-white w-20 h-20 rounded-2xl flex items-center justify-center text-4xl font-bold">3.5</div>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 leading-tight">479 Ratings</h4>
                      <p className="text-slate-400 text-[13px] font-medium italic mt-1">Based on 479 ratings across the web</p>
                    </div>
                 </div>

                 <div className="mb-12">
                    <p className="text-base font-bold text-slate-900 mb-4 tracking-tight">Tap to Rate</p>
                    <div className="flex items-center gap-3">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-12 h-12 border border-slate-200 rounded-[1rem] flex items-center justify-center text-slate-300 hover:text-orange-400 hover:border-orange-400 cursor-pointer active:scale-90 transition-all bg-white shadow-sm">
                          <Star size={24} />
                        </div>
                      ))}
                    </div>
                 </div>

                 <div className="space-y-10">
                    {[
                      {
                        name: 'ASHISH',
                        date: '23 Feb',
                        rating: 5,
                        text: '"I had a great stay at Vink Lodge! The rooms were very clean and tidy. I felt comfortable and relaxed. The staff was nice and helpful too."',
                        img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150'
                      },
                      {
                        name: 'Sukananda S Salunke',
                        date: '24 Apr 2024',
                        rating: 5,
                        text: 'Excellent service and very polite staff. The rooms are well maintained and the location is perfect for travelers.',
                        img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150'
                      }
                    ].map((review, i) => (
                      <div key={i} className="pb-8 border-b border-slate-50 last:border-0">
                         <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-slate-100">
                               <img src={review.img} alt={review.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                               <h5 className="font-bold text-slate-900 text-sm">{review.name}</h5>
                               <p className="text-slate-400 text-[10px] font-bold">{review.date}</p>
                            </div>
                            <div className="ml-auto flex items-center gap-1">
                               {[...Array(5)].map((_, si) => (
                                 <Star key={si} size={14} fill={si < review.rating ? "currentColor" : "none"} className={si < review.rating ? "text-orange-500" : "text-slate-200"} />
                               ))}
                            </div>
                         </div>
                         <p className="text-slate-600 text-[14px] leading-relaxed font-medium">
                            {review.text}
                         </p>
                      </div>
                    ))}
                 </div>
              </div>
            )}

          </div>

          {/* Sidebar */}
          <div className="hidden lg:block lg:col-span-1 space-y-8">
             <Card className="p-8 border-slate-100 shadow-xl shadow-slate-100/50">
                <h3 className="text-lg font-bold text-slate-900 mb-8 border-b border-slate-50 pb-4">Check Availability</h3>
                <div className="grid grid-cols-2 gap-6 mb-8">
                   <div>
                     <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Check in</label>
                     <div className="text-[17px] font-black text-slate-900">22 Apr</div>
                   </div>
                   <div>
                     <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Check Out</label>
                     <div className="text-[17px] font-black text-slate-900">23 Apr</div>
                   </div>
                </div>
                <button className="w-full bg-primary-600 text-white py-4 rounded-2xl font-bold text-[15px] shadow-lg shadow-primary-500/20 hover:bg-primary-700 transition-all active:scale-[0.98]">
                   Check Availability
                </button>
             </Card>

             <Card className="p-8 border-slate-100 shadow-xl shadow-slate-100/50">
                <h4 className="text-lg font-bold text-slate-900 mb-6">Contact Details</h4>
                <div className="space-y-6">
                   <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-50 rounded-lg text-primary-600"><Phone size={18} fill="currentColor" /></div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Phone</p>
                        <p className="text-[15px] font-black text-slate-900">09845258527</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-50 rounded-lg text-primary-600"><MapPin size={18} /></div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Address</p>
                        <p className="text-[13px] font-bold text-slate-600 leading-relaxed">
                          1st & 2nd Floor Plot No 50, Dharavi, Mumbai-400017
                        </p>
                      </div>
                   </div>
                </div>
             </Card>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar (Desktop Only) */}
      <div className="hidden md:block fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-[150] shadow-[0_-4px_20px_rgba(0,0,0,0.05)] py-3 px-6 transform translate-y-0 transition-transform">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
           <div className="flex items-center gap-4 border-r border-slate-100 pr-8">
              <div className="flex items-center gap-2">
                <div className="bg-slate-900 text-white rounded p-0.5"><Star size={12} fill="currentColor" /></div>
                <span className="font-bold text-slate-900 text-base">Vink Lodge</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                 <div className="bg-[#008a00] text-white px-1.5 py-0.5 rounded flex items-center gap-1">3.5 <Star size={8} fill="currentColor" /></div>
                 <span>479 Ratings</span>
              </div>
           </div>

           <div className="flex-1 flex items-center justify-end gap-3">
              <button className="bg-[#008a00] text-white px-5 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 shadow-lg shadow-green-500/10">
                <Phone size={16} fill="currentColor" /> 09845258527
              </button>
              <button 
                 onClick={() => setIsBestDealModalOpen(true)}
                 className="bg-[#0076d7] text-white px-5 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 shadow-lg shadow-blue-500/10"
               >
                 <Zap size={16} fill="currentColor" /> Best Deal
              </button>
              <div className="flex items-center gap-2 ml-2 pl-4 border-l border-slate-100">
                 <button className="p-2.5 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg"><Share2 size={18} /></button>
                 <button className="p-2.5 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg"><Bookmark size={18} /></button>
              </div>
           </div>
        </div>
      </div>
      <BestDealModal 
        isOpen={isBestDealModalOpen} 
        onClose={() => setIsBestDealModalOpen(false)} 
        categoryName="Hotels" 
      />
    </UserLayout>
  );
};

export default HotelDetails;

import React, { useState, useEffect } from 'react';
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
  ThumbsUp,
  ArrowLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/cn';
import { CATEGORIES_DATA } from '../../data/categoriesData';
import BestDealModal from '../../components/common/BestDealModal';

const CategoryDetails = () => {
  const { categoryName, id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Overview');
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isBestDealModalOpen, setIsBestDealModalOpen] = useState(false);

  // Data fetching logic
  const normalizedCategory = categoryName?.toLowerCase();
  const categoryList = CATEGORIES_DATA[normalizedCategory] || CATEGORIES_DATA.default;
  const item = categoryList.find(x => x.id === parseInt(id)) || categoryList[0];
  
  const displayCategory = categoryName ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1) : 'Service';

  const tabs = ['Overview', 'Photos', 'Reviews', 'Direction'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!item) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <UserLayout>
      {/* Photo Gallery Modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-white overflow-y-auto"
          >
            <div className="max-w-[1400px] mx-auto px-6 py-10">
              <div className="flex items-center justify-between mb-8 sticky top-0 bg-white py-4 border-b border-slate-100 z-10">
                <h2 className="text-2xl font-bold text-slate-900">Photos of {item.name}</h2>
                <button 
                  onClick={() => setIsGalleryOpen(false)}
                  className="p-3 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {item.images?.map((img, i) => (
                   <div key={i} className="break-inside-avoid rounded-xl overflow-hidden shadow-md">
                      <img src={img} alt={`Gallery ${i}`} className="w-full h-auto hover:scale-105 transition-transform duration-700" />
                   </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1400px] mx-auto px-6 pt-[4.4rem] md:pt-24 pb-4">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-4 whitespace-nowrap overflow-x-auto no-scrollbar">
          <span className="cursor-pointer hover:text-primary-600" onClick={() => navigate('/')}>Home</span> <ChevronRight size={12} className="shrink-0" />
          <span className="cursor-pointer hover:text-primary-600" onClick={() => navigate('/categories')}>Categories</span> <ChevronRight size={12} className="shrink-0" />
          <span className="cursor-pointer hover:text-primary-600 uppercase" onClick={() => navigate(`/category/${normalizedCategory}`)}>{displayCategory}</span> <ChevronRight size={12} className="shrink-0" />
          <span className="text-slate-900 font-medium">{item.name}</span>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          {/* Desktop Grid Layout */}
          <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-3 h-[360px] rounded-2xl overflow-hidden shadow-sm">
            <div className="col-span-2 row-span-2 relative group cursor-pointer" onClick={() => setIsGalleryOpen(true)}>
              <img src={item.images?.[0]} alt="Main" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="col-span-1 row-span-1 relative group cursor-pointer" onClick={() => setIsGalleryOpen(true)}>
              <img src={item.images?.[1]} alt="Gallery 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="col-span-1 row-span-1 relative group cursor-pointer" onClick={() => setIsGalleryOpen(true)}>
              <img src={item.images?.[2]} alt="Gallery 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="col-span-1 row-span-1 relative group cursor-pointer" onClick={() => setIsGalleryOpen(true)}>
               <img src={item.images?.[3]} alt="Gallery 3" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white backdrop-blur-[2px] group-hover:bg-black/60 transition-all">
                  <span className="text-2xl font-bold">+{Math.max(0, (item.images?.length || 0) - 3)}</span>
                  <span className="text-xs font-medium">More</span>
               </div>
            </div>
            <div className="col-span-1 row-span-1 relative group cursor-pointer" onClick={() => setIsGalleryOpen(true)}>
               <img src={item.images?.[4]} alt="Gallery 4" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white backdrop-blur-[2px] group-hover:bg-black/60 transition-all">
                  <Camera size={20} className="mb-px" />
                  <span className="text-[10px] font-bold mt-1 text-center px-2">Photos</span>
               </div>
            </div>
          </div>

          {/* Mobile Horizontal Scroll Layout (As per reference) */}
          <div className="md:hidden flex gap-2 overflow-x-auto no-scrollbar scroll-smooth">
            {item.images?.slice(0, 5).map((img, i) => (
              <div key={i} className="min-w-[140px] h-[140px] rounded-xl overflow-hidden shrink-0 shadow-sm" onClick={() => setIsGalleryOpen(true)}>
                 <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
              </div>
            ))}
            
            {/* View More Card */}
            {(item.images?.length > 5) && (
              <div 
                onClick={() => setIsGalleryOpen(true)}
                className="min-w-[140px] h-[140px] rounded-xl bg-black relative shrink-0 overflow-hidden group cursor-pointer"
              >
                 <img src={item.images[5]} alt="More" className="w-full h-full object-cover opacity-40" />
                 <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <span className="text-2xl font-black">+{item.images.length - 5}</span>
                    <span className="text-sm font-bold mt-1">View More</span>
                 </div>
              </div>
            )}

            {/* Upload Photo Card */}
            <div className="min-w-[140px] h-[140px] rounded-xl bg-slate-100 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-500 shrink-0 cursor-pointer hover:bg-slate-200 transition-colors">
               <Camera size={32} className="mb-2 opacity-50" />
               <span className="text-[12px] font-bold text-center px-4 leading-tight">Upload Photos</span>
            </div>
          </div>
        </div>

        {/* Business Info Header */}
        <div className="mb-0">
          {/* Desktop Header */}
          <div className="hidden md:flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl md:text-[32px] font-bold text-slate-900 leading-tight flex items-center gap-3">
                  <div className="bg-slate-900 text-white rounded-md p-1.5"><Star size={20} fill="currentColor" /></div>
                  {item.name}
                </h1>
                <div className="hidden md:flex gap-2">
                  <span className="bg-slate-50 text-slate-500 text-[11px] px-2 py-1 rounded">{displayCategory}</span>
                </div>
                <button className="p-2 border border-slate-200 rounded-lg text-slate-400 hover:bg-slate-50 ml-auto md:ml-2">
                  <Bookmark size={20} />
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
                <div className="flex items-center gap-1.5">
                  <div className="bg-[#008a00] text-white px-1.5 py-0.5 rounded text-[13px] font-bold flex items-center gap-1">
                    {item.rating} <Star size={10} fill="currentColor" />
                  </div>
                  <span className="text-slate-400 font-medium">{item.reviewsCount} Ratings</span>
                </div>
                {item.verified && (
                  <div className="flex items-center gap-1.5 text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full font-bold text-[13px]">
                     <CheckCircle2 size={16} fill="currentColor" />
                     Verified
                  </div>
                )}
                <div className="flex items-center gap-1 text-slate-500">
                  <MapPin size={16} className="text-slate-400" />
                  {item.location}
                </div>
                <div className="text-slate-500 font-medium">• {item.yearsInBusiness} Years in Business</div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                 <button className="bg-[#008a00] text-white px-6 py-2.5 rounded-lg flex items-center gap-3 font-bold text-[14px] md:text-[15px] shadow-lg shadow-green-500/10 active:scale-95 transition-all">
                   <Phone size={18} fill="currentColor" />
                   {item.phone}
                 </button>
                  <button 
                    onClick={() => setIsBestDealModalOpen(true)}
                    className="bg-[#0076d7] text-white px-6 py-2.5 rounded-lg flex items-center gap-3 font-bold text-[14px] md:text-[15px] shadow-lg shadow-blue-500/10 active:scale-95 transition-all"
                  >
                    <Zap size={18} fill="currentColor" />
                    Enquire Now
                  </button>
                 <button className="bg-white border border-slate-200 text-slate-700 px-6 py-2.5 rounded-lg flex items-center gap-3 font-bold text-[14px] md:text-[15px] hover:bg-slate-50 transition-colors active:scale-95">
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
                   <h1 className="text-xl font-bold text-slate-900 tracking-tight">{item.name}</h1>
                   {item.verified && (
                     <div className="text-primary-600 bg-primary-50 rounded-full p-0.5">
                       <CheckCircle2 size={14} fill="currentColor" />
                     </div>
                   )}
                 </div>
              </div>
              <Bookmark size={20} className="text-slate-300" />
            </div>

            <div className="flex items-center gap-2 mb-2">
              <div className="bg-[#008a00] text-white px-1.5 py-0.5 rounded font-bold flex items-center gap-1 text-[11px]">
                 {item.rating} <Star size={10} fill="currentColor" />
              </div>
              <span className="text-slate-500 text-[12px] font-medium">{item.reviewsCount} ratings</span>
            </div>

            <div className="flex items-center flex-wrap gap-x-2 gap-y-1 mb-3">
               <div className="flex items-center gap-1 text-slate-500 text-[13px] font-medium">
                  <MapPin size={14} className="text-slate-400 shrink-0" />
                  {item.location}
               </div>
               <span className="text-slate-300 ml-0.5">•</span>
               <div className="text-slate-900 text-[13px] font-bold tracking-tight">{displayCategory}</div>
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
          {['Overview', 'Services', 'Quick Info', 'Photos', 'Reviews'].map(tab => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              className={cn(
                "py-3 font-bold text-[14px] md:text-[15px] relative transition-colors whitespace-nowrap",
                activeTab === tab ? "text-[#0076d7]" : "text-slate-500 hover:text-slate-700"
              )}
            >
              {tab}
              {activeTab === tab && (
                <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0076d7] rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20">
          <div className="lg:col-span-2">
            
            {activeTab === 'Overview' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <Card className="p-8 border-slate-100 shadow-sm">
                   <h3 className="text-xl font-bold text-slate-900 mb-4">About {item.name}</h3>
                   <p className="text-slate-600 leading-relaxed font-medium">
                      {item.name} is a leading provider of {displayCategory.toLowerCase()} services in {item.location}. With over {item.yearsInBusiness || 5} years of experience, they have established themselves as a trusted name in the industry, known for their quality service and professional approach.
                   </p>
                </Card>


              </motion.div>
            )}

            {activeTab === 'Services' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <Card className="p-6 md:p-8 border-slate-100 shadow-sm h-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                    <div>
                       <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">
                         <CheckCircle2 size={16} className="text-primary-600" />
                         Facilities
                       </h3>
                       <div className="pl-6 flex flex-wrap gap-2">
                         {item.facilities?.length > 0 ? (
                           item.facilities.map(f => (
                             <span key={f} className="text-sm text-slate-600 font-bold bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">{f}</span>
                           ))
                         ) : (
                           <span className="text-sm text-slate-400 italic">No specific facilities listed</span>
                         )}
                       </div>
                    </div>

                    <div>
                       <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">
                         <CheckCircle2 size={16} className="text-primary-600" />
                         Amenities
                       </h3>
                       <div className="pl-6 flex flex-wrap gap-2">
                         {item.amenities?.length > 0 ? (
                           item.amenities.map(a => (
                             <span key={a} className="text-sm text-slate-600 font-bold bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">{a}</span>
                           ))
                         ) : (
                           <span className="text-sm text-slate-400 italic">No specific amenities listed</span>
                         )}
                       </div>
                    </div>

                    <div className="md:col-span-2">
                       <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">
                         <CheckCircle2 size={16} className="text-primary-600" />
                         Full Service List
                       </h3>
                       <div className="pl-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                         {item.services?.length > 0 ? (
                           item.services.map(s => (
                             <div key={s} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                               <div className="w-1.5 h-1.5 bg-primary-400 rounded-full shrink-0" />
                               {s}
                             </div>
                           ))
                         ) : (
                           <span className="text-sm text-slate-400 italic col-span-full">Comprehensive list coming soon</span>
                         )}
                       </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}

            {activeTab === 'Quick Info' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <Card className="p-8 border-slate-100 shadow-sm">
                   <h3 className="text-2xl font-bold text-slate-900 mb-8 font-display">Business Snapshot</h3>
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6">
                      <div>
                        <p className="text-slate-400 text-[11px] mb-2 uppercase tracking-widest font-black">Establishment</p>
                        <p className="text-slate-900 font-extrabold text-lg">{new Date().getFullYear() - (item.yearsInBusiness || 5)}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-[11px] mb-2 uppercase tracking-widest font-black">Status</p>
                        <div className="flex items-center gap-2">
                           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                           <p className="text-slate-900 font-extrabold text-lg">Verified</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-slate-400 text-[11px] mb-2 uppercase tracking-widest font-black">Category</p>
                        <p className="text-slate-900 font-extrabold text-lg">{displayCategory}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-[11px] mb-2 uppercase tracking-widest font-black">GSTIN</p>
                        <p className="text-slate-900 font-extrabold mb-1">{item.gstin || 'Not Available'}</p>
                        {item.gstin && <span className="text-[10px] text-green-600 font-bold bg-green-50 px-1.5 py-0.5 rounded">Active</span>}
                      </div>
                      <div>
                        <p className="text-slate-400 text-[11px] mb-2 uppercase tracking-widest font-black">Ownership</p>
                        <p className="text-slate-900 font-extrabold text-lg">Private</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-[11px] mb-2 uppercase tracking-widest font-black">Experience</p>
                        <p className="text-slate-900 font-extrabold text-lg">{item.yearsInBusiness || 5} Years</p>
                      </div>
                   </div>
                </Card>
              </motion.div>
            )}

            {activeTab === 'Photos' && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
              >
                  {item.images?.map((img, i) => (
                    <div key={i} className={cn(
                      "rounded-xl overflow-hidden shadow-sm aspect-square cursor-pointer active:scale-95 transition-transform",
                      i === 0 && "col-span-2 row-span-2 aspect-auto h-full"
                    )} onClick={() => setIsGalleryOpen(true)}>
                       <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="bg-slate-100 rounded-xl flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-300">
                     <Camera size={28} className="text-slate-400 mb-2" />
                     <p className="text-xs font-bold text-slate-500 text-center uppercase tracking-tighter">Add Photo</p>
                  </div>
              </motion.div>
            )}

            {activeTab === 'Reviews' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                 <div className="flex items-center gap-6 mb-12">
                    <div className="bg-[#008a00] text-white w-20 h-20 rounded-[2rem] flex items-center justify-center text-3xl font-black">{item.rating}</div>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 leading-tight">{item.reviewsCount} Ratings</h4>
                      <p className="text-slate-400 text-[13px] font-medium mt-1">Verified reviews from authentic customers</p>
                    </div>
                 </div>

                 <div className="space-y-6">
                    {item.userReviews?.length > 0 ? (
                      item.userReviews.map((review, i) => (
                        <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-50 shadow-xl shadow-slate-200/20">
                          <div className="flex items-center gap-4 mb-5">
                            <div className="w-12 h-12 rounded-2xl bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-lg">
                              {review.name.charAt(0)}
                            </div>
                            <div className="flex-1">
                              <h5 className="font-bold text-slate-900 text-base">{review.name}</h5>
                              <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider">{review.date}</p>
                            </div>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, si) => (
                                <Star key={si} size={14} fill={si < Math.floor(review.rating) ? "currentColor" : "none"} className={si < Math.floor(review.rating) ? "text-orange-500" : "text-slate-200"} />
                              ))}
                            </div>
                          </div>
                          <p className="text-slate-600 text-[15px] leading-relaxed font-medium italic">"{review.text}"</p>
                          <div className="mt-6 pt-6 border-t border-slate-50 flex gap-6">
                             <button className="flex items-center gap-2 text-slate-400 font-bold text-xs hover:text-primary-600 transition-colors"><ThumbsUp size={14} /> Helpful</button>
                             <button className="flex items-center gap-2 text-slate-400 font-bold text-xs hover:text-primary-600 transition-colors"><MessageSquare size={14} /> Reply</button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-10 text-center bg-slate-50 rounded-3xl border border-dashed border-slate-200 text-slate-400">
                         No reviews yet. Be the first to share your experience!
                      </div>
                    )}
                 </div>
              </motion.div>
            )}

          </div>

          {/* Sidebar */}
          <div className="hidden lg:block lg:col-span-1 space-y-6">
             <Card className="p-8 border-slate-100 shadow-xl shadow-slate-100/30">
                <h4 className="text-xl font-bold text-slate-900 mb-8 font-display">Service <span className="text-primary-600">Details</span></h4>
                <div className="space-y-8">
                   <div className="flex items-start gap-4">
                      <div className="p-2.5 bg-blue-50 rounded-xl text-primary-600"><Phone size={20} fill="currentColor" /></div>
                      <div>
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Phone Number</label>
                        <p className="text-base font-black text-slate-900">{item.phone}</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="p-2.5 bg-blue-50 rounded-xl text-primary-600"><MapPin size={20} /></div>
                      <div>
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Address</label>
                        <p className="text-sm font-bold text-slate-600 leading-relaxed">{item.address}</p>
                      </div>
                   </div>
                </div>
                
                <button 
                  onClick={() => setIsBestDealModalOpen(true)}
                  className="w-full bg-primary-600 text-white mt-10 py-4 rounded-2xl font-bold text-base shadow-lg shadow-primary-500/20 active:scale-[0.98] transition-all hover:bg-primary-700"
                >
                   Get Instant Quote <ChevronRight size={20} className="stroke-[3]" />
                </button>

                <div className="mt-8 pt-8 border-t border-slate-50 space-y-4">
                   {['Share Service', 'Report Business', 'Rate Company'].map(action => (
                     <button key={action} className="w-full text-left text-slate-400 font-bold text-xs hover:text-primary-600 transition-all flex items-center justify-between group">
                        {action}
                        <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                     </button>
                   ))}
                </div>
             </Card>

             <Card className="p-4 bg-slate-50 border-slate-100 sticky top-24 overflow-hidden group">
                <div className="bg-slate-200 rounded-2xl aspect-[4/3] flex items-center justify-center text-slate-400 relative overflow-hidden">
                   <div className="text-center relative z-10">
                      <MapPin size={32} className="mx-auto mb-2 opacity-30" />
                      <span className="text-[10px] uppercase font-black tracking-[0.2em]">Map Explore</span>
                   </div>
                   <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent group-hover:scale-110 transition-transform duration-1000" />
                </div>
             </Card>
          </div>
        </div>
      </div>

      {/* Sticky Action Footer (Desktop Only) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-slate-100 z-[100] shadow-2xl py-4 px-6 hidden md:block">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
           <div className="flex items-center gap-10">
              <div>
                <h4 className="text-sm font-black text-slate-900 mb-0.5">{item.name}</h4>
                <div className="flex items-center gap-2">
                   <div className="bg-green-600 text-white px-1.5 py-0.5 rounded text-[10px] font-bold flex items-center gap-1">{item.rating} <Star size={8} fill="currentColor" /></div>
                   <span className="text-[10px] font-bold text-slate-400">{item.reviewsCount} Ratings</span>
                </div>
              </div>
              <div className="h-8 w-px bg-slate-100" />
              <div className="flex items-center gap-2 text-slate-600 font-bold text-xs">
                 <MapPin size={14} className="text-primary-600" />
                 {item.location}
              </div>
           </div>

           <div className="flex items-center gap-4">
              <button className="bg-[#008a00] text-white px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-green-500/10">
                <Phone size={18} fill="currentColor" /> {item.phone}
              </button>
               <button 
                 onClick={() => setIsBestDealModalOpen(true)}
                 className="bg-primary-600 text-white px-8 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-xl shadow-primary-500/20 active:scale-95 transition-all"
               >
                 <Zap size={18} fill="currentColor" /> Enquire Now
               </button>
              <button className="p-3 bg-white border border-slate-200 rounded-xl text-[#25d366] hover:bg-slate-50 transition-colors">
                <MessageSquare size={20} fill="currentColor" />
              </button>
           </div>
        </div>
      </div>
      <BestDealModal 
        isOpen={isBestDealModalOpen} 
        onClose={() => setIsBestDealModalOpen(false)} 
        categoryName={displayCategory} 
      />
    </UserLayout>
  );
};

export default CategoryDetails;

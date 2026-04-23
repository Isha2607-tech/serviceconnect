import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserLayout from '../../layouts/UserLayout';
import Card from '../../components/common/Card';
import { 
  Plus,
  ChevronDown,
  X,
  ThumbsUp,
  ArrowLeft,
  ChevronRight,
  MapPin,
  Phone,
  MessageSquare,
  Share2,
  Bookmark,
  Camera,
  Star,
  Zap,
  CheckCircle2,
  Sparkles
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
  const [direction, setDirection] = useState(0);
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const [selectedPhotoCategory, setSelectedPhotoCategory] = useState('All');
  
  const tabsRef = useRef(null);
  const scrollRef = useRef(null);
  const mobileContainerRef = useRef(null);

  // Refs for each section for the mobile continuous scroll
  const sectionRefs = {
    'Overview': useRef(null),
    'Services': useRef(null),
    'Quick Info': useRef(null),
    'Photos': useRef(null),
    'Reviews': useRef(null),
    'Direction': useRef(null),
    'Explore': useRef(null)
  };

  // Data fetching logic
  const normalizedCategory = categoryName?.toLowerCase();
  const categoryList = CATEGORIES_DATA[normalizedCategory] || CATEGORIES_DATA.default;
  const rawItem = categoryList.find(x => x.id === id) || categoryList[0];
  
  const item = {
    ...rawItem,
    images: rawItem.images?.map((img, i) => {
      if (typeof img === 'string') {
        const cats = ['Exterior', 'Interior', 'By User'];
        return { url: img, category: cats[i % cats.length] };
      }
      return img;
    }) || [{ url: rawItem.image, category: 'All' }]
  };
  
  const displayCategory = categoryName ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1) : 'Service';
  const tabs = ['Overview', 'Services', 'Quick Info', 'Photos', 'Reviews', 'Direction', 'Explore'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Sync active tab with scroll position on mobile
  useEffect(() => {
    const container = mobileContainerRef.current;
    if (!container || window.innerWidth >= 768) return;

    const handleMobileScroll = () => {
      const scrollPos = container.scrollTop + 100; // Offset for detection

      for (const tab of tabs) {
        const element = sectionRefs[tab].current;
        if (element) {
          const { offsetTop } = element;
          if (scrollPos >= offsetTop) {
            setActiveTab(tab);
          }
        }
      }
    };

    container.addEventListener('scroll', handleMobileScroll);
    return () => container.removeEventListener('scroll', handleMobileScroll);
  }, []);

  const handleTabChange = (tab) => {
    const newIndex = tabs.indexOf(tab);
    const oldIndex = tabs.indexOf(activeTab);
    setDirection(newIndex > oldIndex ? 1 : -1);
    setActiveTab(tab);

    if (window.innerWidth < 768) {
      const element = sectionRefs[tab].current;
      const container = mobileContainerRef.current;
      if (element && container) {
        // Special case for Overview - scroll to very top
        if (tab === 'Overview') {
          container.scrollTo({ top: 0, behavior: 'smooth' });
          setActiveTab('Overview');
          return;
        }

        const yOffset = element.offsetTop - 95; // 95px = 49px(tabs) + 46px(sticky header)
        container.scrollTo({ top: yOffset, behavior: 'smooth' });
      }
    } else {
      if (tabsRef.current) {
        const yOffset = tabsRef.current.offsetTop - 53;
        window.scrollTo({ top: yOffset, behavior: 'smooth' });
      }
    }
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '5%' : '-5%',
      opacity: 0
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction < 0 ? '5%' : '-5%',
      opacity: 0
    })
  };

  if (!item) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <UserLayout>
      {/* Photo Gallery Modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] bg-white overflow-y-auto">
            <div className="max-w-[1400px] mx-auto px-6 py-10">
              <div className="flex items-center justify-between mb-8 sticky top-0 bg-white py-4 border-b border-slate-100 z-10">
                <h2 className="text-2xl font-bold text-slate-900">Photos of {item.name}</h2>
                <button onClick={() => setIsGalleryOpen(false)} className="p-3 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
                  <X size={24} />
                </button>
              </div>
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {item.images?.map((img, i) => (
                   <div key={i} className="break-inside-avoid rounded-xl overflow-hidden shadow-md">
                      <img src={img.url} alt={`Gallery ${i}`} className="w-full h-auto hover:scale-105 transition-transform duration-700" />
                   </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Container */}
      <div 
        ref={mobileContainerRef}
        className="h-screen md:h-auto overflow-y-auto md:overflow-visible overflow-x-hidden md:max-w-[1400px] md:mx-auto md:px-6 pt-0 md:pt-20 pb-0 md:pb-4 scroll-smooth"
      >
        {/* Mobile Header (Fixed) */}
        <div className="md:hidden sticky top-0 left-0 right-0 bg-[#f0fdfa]/95 backdrop-blur-md z-[100] px-4 py-3 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-slate-600 active:scale-95 transition-transform">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h2 className="text-sm font-bold text-slate-900 leading-none mb-0.5">{item.name}</h2>
              <div className="flex items-center gap-1">
                <div className="bg-[#008a00] text-white px-1 py-0.2 rounded-[3px] text-[8px] font-bold">{item.rating} ★</div>
                <span className="text-[10px] font-bold text-slate-400">{item.reviewsCount} ratings</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 text-slate-600">
            <Share2 size={18} className="mx-2" />
            <Bookmark size={18} />
          </div>
        </div>

        {/* Global Content Padding for Mobile */}
        <div className="px-4 md:px-0">
          
          {/* Gallery Section */}
          <div className="md:mt-0 mt-4">
            <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-3 h-[360px] rounded-2xl overflow-hidden shadow-sm mb-8">
              <div className="col-span-2 row-span-2 relative group cursor-pointer" onClick={() => setIsGalleryOpen(true)}>
                <img src={item.images?.[0]?.url} alt="Main" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="col-span-1 row-span-1 relative group cursor-pointer" onClick={() => setIsGalleryOpen(true)}>
                <img src={item.images?.[1]?.url || item.images?.[0]?.url} alt="G1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="col-span-1 row-span-1 relative group cursor-pointer" onClick={() => setIsGalleryOpen(true)}>
                <img src={item.images?.[2]?.url || item.images?.[0]?.url} alt="G2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="col-span-1 row-span-1 relative group cursor-pointer" onClick={() => setIsGalleryOpen(true)}>
                 <img src={item.images?.[3]?.url || item.images?.[0]?.url} alt="G3" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white backdrop-blur-[2px]">
                    <span className="text-xl font-bold">+{Math.max(0, (item.images?.length || 0) - 3)}</span>
                 </div>
              </div>
              <div className="col-span-1 row-span-1 relative group cursor-pointer" onClick={() => setIsGalleryOpen(true)}>
                 <img src={item.images?.[1]?.url} alt="G4" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white backdrop-blur-[2px]">
                    <Camera size={18} />
                 </div>
              </div>
            </div>

            <div className="md:hidden -mx-4 mb-6 relative">
              <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar">
                {item.images?.map((img, i) => (
                  <div key={i} className="min-w-full snap-center relative aspect-[16/10] overflow-hidden" onClick={() => setIsGalleryOpen(true)}>
                    <img src={img.url} alt={`G${i}`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                ))}
              </div>
              <button className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white px-3 py-1.5 rounded-full flex items-center gap-1 text-[10px] font-bold border border-white/20 active:scale-95">
                 <Plus size={12} /> Add Your
              </button>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
                {item.images?.slice(0, 6).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/50" />
                ))}
              </div>
            </div>
          </div>

          {/* Business Info Header */}
          <div className="mb-0 md:flex flex-col md:flex-row md:items-start justify-between gap-6 md:mb-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <div className="hidden md:flex bg-slate-900 text-white rounded-md p-1.5"><Star size={20} fill="currentColor" /></div>
                <h1 className="text-2xl md:text-[32px] font-bold text-slate-900 leading-tight">{item.name}</h1>
                
                {/* Verified Badge next to name on Mobile */}
                {item.verified && (
                  <div className="md:hidden flex items-center gap-1 text-[#20594e] bg-[#20594e]/10 px-2 py-0.5 rounded-full font-bold text-[12px] shrink-0">
                     <CheckCircle2 size={14} fill="currentColor" /> Verified
                  </div>
                )}

                <button className="hidden md:block p-2 border border-slate-200 rounded-lg text-slate-400 hover:bg-slate-50">
                  <Bookmark size={20} />
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-sm mb-6">
                <div className="hidden md:flex bg-[#008a00] text-white px-1.5 py-0.5 rounded text-[13px] font-bold items-center gap-1">{item.rating} ★</div>
                <span className="hidden md:block text-slate-400 font-medium">{item.reviewsCount} Ratings</span>
                {item.verified && (
                  <div className="hidden md:flex items-center gap-1 text-[#20594e] bg-[#20594e]/10 px-2 py-0.5 rounded-full font-bold text-[12px]">
                     <CheckCircle2 size={14} fill="currentColor" /> Verified
                  </div>
                )}
                <div className="flex items-center gap-1 text-slate-500 font-medium"><MapPin size={14} />{item.location}</div>
                <div className="text-slate-500 font-medium">• {item.yearsInBusiness || 5} Years Exp</div>
              </div>

              {/* Desktop Action Buttons */}
              <div className="hidden md:flex flex-wrap items-center gap-3 mb-4 md:mb-0">
                 <button className="bg-[#008a00] text-white px-6 py-2.5 rounded-lg flex items-center gap-3 font-bold text-[14px] shadow-lg shadow-green-500/10 active:scale-95 transition-all">
                   <Phone size={18} fill="currentColor" /> {item.phone}
                 </button>
                  <button onClick={() => setIsBestDealModalOpen(true)} className="bg-[#20594e] text-white px-6 py-2.5 rounded-lg flex items-center gap-3 font-bold text-[14px] shadow-lg shadow-[#20594e]/10 active:scale-95 transition-all">
                    <Zap size={18} fill="currentColor" /> Enquire Now
                  </button>
                 <button className="bg-white border border-slate-200 text-slate-700 px-6 py-2.5 rounded-lg flex items-center gap-3 font-bold text-[14px]">
                   <div className="text-[#25d366]"><MessageSquare size={20} fill="currentColor" /></div> WhatsApp
                 </button>
              </div>
            </div>
          </div>

          <div className="md:hidden flex items-center justify-around mb-6 px-2">
             <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-[#20594e] rounded-[1.25rem] flex items-center justify-center text-white shadow-lg shadow-[#20594e]/10 active:scale-95 transition-all"><Phone size={18} fill="currentColor" /></div>
                <span className="text-[10px] font-bold text-slate-800 uppercase">Call Now</span>
             </div>
             <div onClick={() => setIsBestDealModalOpen(true)} className="flex flex-col items-center gap-2 cursor-pointer">
                <div className="w-10 h-10 bg-white border border-slate-200 rounded-[1.25rem] flex items-center justify-center text-slate-800 active:scale-95 transition-all"><MessageSquare size={18} /></div>
                <span className="text-[10px] font-bold text-slate-800 uppercase">Enquire</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-[#25d366] rounded-[1.25rem] flex items-center justify-center text-white shadow-lg shadow-green-500/10 active:scale-95 transition-all">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <span className="text-[10px] font-bold text-slate-800 uppercase">Whatsapp</span>
             </div>
          </div>

          {/* Sticky Tab Bar */}
          <div ref={tabsRef} className="sticky top-[49px] md:relative bg-[#f0fdfa]/95 md:bg-transparent z-[90] -mx-4 px-4 md:mx-0 md:px-0 border-b border-slate-100 flex gap-6 md:gap-10 md:mb-14 mb-0 overflow-x-auto no-scrollbar">
            {tabs.map(tab => (
              <button key={tab} onClick={() => handleTabChange(tab)} className={cn("py-3.5 font-bold text-[14px] relative transition-colors whitespace-nowrap", activeTab === tab ? "text-[#20594e]" : "text-slate-500")}>
                {tab}
                {activeTab === tab && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#20594e] rounded-full" />}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:mt-10 md:pb-20">
            <div className="lg:col-span-2">
              
              {/* CONTENT SECTIONS - Mobile Continuous Scroll / Desktop Tabbed */}
              <div className="md:block hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div key={activeTab} custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.2 }} className="relative">
                    {renderSectionContent(activeTab)}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="md:hidden block">
                {tabs.map((tab) => (
                  <div key={tab} ref={sectionRefs[tab]} className="pt-2 mb-4 scroll-mt-[95px]">
                    <div className="sticky top-[95px] bg-white z-[85] -mx-4 px-4 py-2.5 border-b border-slate-100 mb-4 shadow-sm">
                       <h4 className="text-[11px] font-black uppercase tracking-widest text-[#20594e] flex items-center gap-2">
                         <div className="w-1 h-3 bg-[#20594e] rounded-full" />
                         {tab}
                       </h4>
                    </div>
                    {renderSectionContent(tab)}
                  </div>
                ))}
                {/* Scroll Spacer: Allows even the last section to reach the top sticky position */}
                <div className="h-[75vh] bg-gradient-to-b from-white to-slate-50/50" />
              </div>
            </div>

            {/* Sidebar (Desktop) */}
            <div className="hidden lg:block lg:col-span-1">
              <Card className="p-8 sticky top-24 border-slate-200 shadow-xl shadow-slate-900/5 bg-white/50 backdrop-blur-md">
                 <h4 className="text-xl font-bold text-slate-900 mb-6 font-display">Get Fast Quotes</h4>
                 <div className="space-y-6">
                    <input type="text" placeholder="Your Name" className="w-full px-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold outline-none focus:bg-white focus:border-[#20594e] transition-all" />
                    <input type="text" placeholder="Mobile Number" className="w-full px-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold outline-none focus:bg-white focus:border-[#20594e] transition-all" />
                    <button className="w-full bg-[#20594e] text-white font-extrabold py-4 rounded-xl shadow-lg active:scale-95 transition-all text-sm uppercase">Submit Enquiry</button>
                 </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <BestDealModal isOpen={isBestDealModalOpen} onClose={() => setIsBestDealModalOpen(false)} itemName={item.name} />
    </UserLayout>
  );

  // Componentizes the content for cleaner switching
  function renderSectionContent(tab) {
    switch(tab) {
      case 'Overview':
        return (
          <div className="space-y-6">
            <Card className="p-6 bg-transparent md:bg-white border-none md:border-slate-100 shadow-none md:shadow-premium -mx-4 md:mx-0">
               <h3 className="text-xl font-bold text-slate-900 mb-4">About {item.name}</h3>
               <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">
                  {item.name} is a leading provider in {item.location} with {item.yearsInBusiness || 5} years of expertise. {item.highlight}.
               </p>
            </Card>
            {item.facilities && (
              <Card className="p-6 bg-transparent md:bg-white border-none md:border-slate-100 shadow-none md:shadow-premium -mx-4 md:mx-0">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase mb-3 flex items-center gap-1.5"><Sparkles size={14} /> Features</h4>
                    <div className="space-y-1.5 text-slate-700 font-bold text-sm">
                      {item.facilities?.slice(0, 3).map(f => <div key={f}>• {f}</div>)}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase mb-3 flex items-center gap-1.5"><CheckCircle2 size={14} /> Perks</h4>
                    <div className="space-y-1.5 text-slate-700 font-bold text-sm">
                      {item.amenities?.slice(0, 3).map(a => <div key={a}>• {a}</div>)}
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </div>
        );
      case 'Services':
        return (
          <Card className="p-6 bg-transparent md:bg-white border-none md:border-slate-100 shadow-none md:shadow-premium -mx-4 md:mx-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase mb-4">Core Facilities</h4>
                  <div className="space-y-3">
                    {(item.facilities || ['WiFi', 'Parking', 'AC']).map(f => (
                      <div key={f} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                         <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center"><CheckCircle2 size={12} /></div>
                         {f}
                      </div>
                    ))}
                  </div>
               </div>
               <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase mb-4">Special Expertise</h4>
                  <div className="space-y-3">
                    {(item.services || ['Expert Team', 'Quality Check']).map(s => (
                      <div key={s} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                         <div className="w-5 h-5 rounded-full bg-[#20594e]/10 text-[#20594e] flex items-center justify-center"><Zap size={12} fill="currentColor" /></div>
                         {s}
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </Card>
        );
      case 'Quick Info':
        return (
          <Card className="p-6 bg-transparent md:bg-white border-none md:border-slate-100 shadow-none md:shadow-premium -mx-4 md:mx-0">
             <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                {[
                  { l: 'Founded', v: `${2024 - (item.yearsInBusiness || 5)}` },
                  { l: 'GSTIN', v: item.gstin || 'AVAILABLE' },
                  { l: 'Work Hours', v: 'Open 24/7' },
                  { l: 'Accepted', v: 'UPI, Cash' },
                  { l: 'Experience', v: `${item.yearsInBusiness || 5} Years` },
                  { l: 'Certified', v: 'Yes' }
                ].map(q => (
                  <div key={q.l}>
                    <p className="text-[10px] font-black uppercase text-slate-400 mb-1">{q.l}</p>
                    <p className="text-[13px] font-extrabold text-slate-900">{q.v}</p>
                  </div>
                ))}
             </div>
          </Card>
        );
      case 'Photos':
        const photoCats = [
          { label: 'All', count: item.images.length, img: item.images[0].url },
          { label: 'Exterior', count: item.images.filter(x => x.category === 'Exterior').length, img: item.images.find(x => x.category === 'Exterior')?.url },
          { label: 'Interior', count: item.images.filter(x => x.category === 'Interior').length, img: item.images.find(x => x.category === 'Interior')?.url },
          { label: 'By User', count: item.images.filter(x => x.category === 'By User').length, img: item.images.find(x => x.category === 'By User')?.url }
        ];

        return (
          <div className="space-y-4">
             {/* Photo Filter Bar */}
             <div className="flex items-center gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 py-2 bg-[#f0fdfa]/50 md:bg-transparent">
              {photoCats.filter(c => c.count > 0 || c.label === 'All').map((cat, i) => (
                <button 
                  key={i} 
                  onClick={() => setSelectedPhotoCategory(cat.label)}
                  className={cn(
                    "flex-shrink-0 flex items-center gap-2 px-1.5 py-1 border rounded-lg bg-white shadow-sm pr-3 transition-all active:scale-95",
                    selectedPhotoCategory === cat.label ? "border-[#20594e] ring-1 ring-[#20594e]" : "border-slate-100"
                  )}
                >
                  <div className="w-8 h-8 rounded-md overflow-hidden bg-slate-100 italic">
                    <img src={cat.img} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="text-left">
                    <p className={cn("text-[10px] font-bold leading-none mb-0.5", selectedPhotoCategory === cat.label ? "text-[#20594e]" : "text-slate-800")}>{cat.label}</p>
                    <p className="text-[8px] font-bold text-slate-400">{cat.count}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {item.images
                ?.filter(img => selectedPhotoCategory === 'All' || img.category === selectedPhotoCategory)
                .map((img, i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden bg-slate-100 cursor-pointer" onClick={() => setIsGalleryOpen(true)}>
                  <img src={img.url} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              ))}
            </div>
          </div>
        );
      case 'Reviews':
        return (
          <Card className="p-6 border-none md:border-slate-100 shadow-none -mx-4 md:mx-0">
            <div className="space-y-8">
              {(item.userReviews?.length > 0 ? item.userReviews : [
                { name: 'Sameer K.', rating: 5, date: 'Apr 2026', text: 'Highly satisfied!' },
                { name: 'Ritu S.', rating: 4, date: 'Mar 2026', text: 'Prompt service.' }
              ]).map((rev, i) => (
                <div key={i} className="pb-8 border-b border-slate-50 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-bold text-slate-900 text-sm">{rev.name}</p>
                    <div className="bg-[#008a00] text-white px-2 py-0.5 rounded text-[10px] font-bold">{rev.rating} ★</div>
                  </div>
                  <p className="text-slate-600 text-[13px] leading-relaxed italic">"{rev.text}"</p>
                </div>
              ))}
            </div>
          </Card>
        );
      case 'Direction':
        return (
          <div className="aspect-[16/9] bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 flex items-center justify-center relative group">
             <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-60" alt="" />
             <div className="absolute bg-white/90 backdrop-blur px-5 py-2 rounded-full font-bold shadow-xl border border-white text-[#20594e]">Open Map Location</div>
          </div>
        );
      case 'Explore':
        return (
          <div className="grid grid-cols-1 gap-4">
             {categoryList.slice(0, 4).filter(x => x.id !== item.id).map(sib => (
                <div key={sib.id} className="p-3 bg-white border border-slate-50 rounded-xl flex gap-3 shadow-sm" onClick={() => navigate(`/category/${normalizedCategory}/${sib.id}`)}>
                   <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0"><img src={sib.image} className="w-full h-full object-cover" alt="" /></div>
                   <div className="flex-1">
                      <h4 className="font-bold text-slate-900 text-xs mb-1">{sib.name}</h4>
                      <div className="bg-[#008a00] text-white px-1.5 py-0.5 rounded text-[9px] font-bold w-fit mb-1">{sib.rating} ★</div>
                      <span className="text-[#20594e] text-[10px] font-bold">View Detail</span>
                   </div>
                </div>
             ))}
          </div>
        );
      default: return null;
    }
  }
};

export default CategoryDetails;

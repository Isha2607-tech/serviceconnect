import React, { useState, useEffect } from 'react';
import { ChevronRight, Heart } from 'lucide-react';
import { cn } from '../../utils/cn';
import { 
  PRODUCT_CATEGORIES_SIDEBAR, 
  RECOMMENDATIONS, 
  TOP_DEALS,
  FULL_PRODUCT_LIST
} from '../../data/marketplaceData';

const MarketplacePreview = () => {
  const [activeBanner, setActiveBanner] = useState(0);

  const banners = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: <>SAVE 30% ON ALL<br />PREMIUM SERVICES</>,
      subtitle: 'Exclusive yearly offer',
      buttonText: 'CLAIM NOW',
      bgClass: 'bg-primary-900',
      textColor: 'text-white',
      btnClass: 'bg-white text-primary-900',
      showTag: true,
      overlay: true,
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: <>HOT PICKS</>,
      subtitle: 'Top rated gadgets & tech',
      buttonText: 'View more',
      bgClass: 'bg-[#b8d4f2]',
      textColor: 'text-[#061936]',
      btnClass: 'bg-[#061936] text-white',
      showTag: false,
      overlay: false,
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: <>FASHION<br />WEEKEND SALE</>,
      subtitle: 'Trending apparel up to 50% off',
      buttonText: 'Shop Now',
      bgClass: 'bg-orange-900',
      textColor: 'text-white',
      btnClass: 'bg-white text-orange-900',
      showTag: false,
      overlay: true,
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBanner((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-6 mb-6 md:mb-10">
      <div className="grid grid-cols-2 lg:flex lg:flex-row gap-3 lg:overflow-x-visible pb-2 md:pb-0">
        
        {/* Sidebar - Categories (Further Shortened) */}
        <div className="hidden lg:flex flex-col w-[260px] bg-slate-50/80 rounded-2xl border border-slate-100 overflow-hidden shrink-0">
          <div className="flex-1 overflow-y-auto custom-scrollbar p-2.5 space-y-0.5 max-h-[260px]">
            {PRODUCT_CATEGORIES_SIDEBAR.map((cat) => (
              <div key={cat.id} className="flex items-center justify-between p-1.5 rounded-xl hover:bg-white hover:shadow-sm transition-all cursor-pointer group">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-white flex items-center justify-center text-slate-400 group-hover:text-primary-600 transition-colors shadow-sm">
                    <cat.icon size={14} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-600 group-hover:text-slate-900">{cat.name}</span>
                </div>
                <ChevronRight size={10} className="text-slate-300 group-hover:text-primary-400" />
              </div>
            ))}
          </div>
          <div className="p-2.5 bg-slate-50/50 border-t border-slate-100">
            <button className="text-[9px] font-black text-primary-600 hover:underline uppercase tracking-widest w-full text-center">
              All Categories
            </button>
          </div>
        </div>

        {/* Card 1: Browsing History (Extra Compact) */}
        <div className="w-full lg:w-[220px] bg-white rounded-2xl border border-slate-100 p-2 shrink-0 lg:flex-[0.85] flex flex-col gap-2 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-[11px] font-black text-slate-900 px-1">Browsing history</h3>
          <div className="relative flex-1 aspect-square rounded-xl overflow-hidden group">
            <img 
              src={FULL_PRODUCT_LIST[9].image} 
              alt="History" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute bottom-1.5 left-1.5 bg-white/95 backdrop-blur-md px-1.5 py-0.5 rounded-lg shadow-sm border border-slate-100">
              <span className="text-[8px] font-black text-slate-900">₹3,406.31</span>
            </div>
            <button className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors shadow-sm">
              <Heart size={10} />
            </button>
          </div>
        </div>

        {/* Card 2: Keep looking for (Stickers) (Extra Compact) */}
        <div className="w-full lg:w-[220px] bg-white rounded-2xl border border-slate-100 p-2 shrink-0 lg:flex-[0.85] flex flex-col gap-1.5 shadow-sm hover:shadow-md transition-shadow">
          <div className="px-1">
            <h3 className="text-[11px] font-black text-slate-900 leading-tight">Keep looking for</h3>
            <p className="text-[7px] font-bold text-slate-400">Decorative Stickers</p>
          </div>
          <div className="grid grid-cols-2 gap-1 flex-1">
            {RECOMMENDATIONS.slice(0, 4).map((item, idx) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="aspect-square rounded-lg overflow-hidden bg-slate-50 border border-slate-100 mb-0.5">
                  <img src={item.image} alt="item" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="bg-slate-50 rounded px-1 py-0.5 w-fit border border-slate-100">
                  <span className="text-[7px] font-black text-slate-900">₹{idx === 0 ? '8.68' : idx === 1 ? '9.64' : idx === 2 ? '14.46' : '11.57'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card 3: Keep looking for (Electronics) (Extra Compact) */}
        <div className="hidden lg:flex w-full lg:w-[220px] bg-white rounded-2xl border border-slate-100 p-2 shrink-0 lg:flex-[0.85] flex-col gap-1.5 shadow-sm hover:shadow-md transition-shadow">
          <div className="px-1">
            <h3 className="text-[11px] font-black text-slate-900 leading-tight">Keep looking for</h3>
            <p className="text-[7px] font-bold text-slate-400">Audio & Electronics</p>
          </div>
          <div className="grid grid-cols-2 gap-1 flex-1">
            {TOP_DEALS.slice(0, 4).map((item, idx) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="aspect-square rounded-lg overflow-hidden bg-slate-50 border border-slate-100 mb-0.5">
                  <img src={item.image} alt="item" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="bg-slate-50 rounded px-1 py-0.5 w-fit border border-slate-100">
                  <span className="text-[7px] font-black text-slate-900">₹{idx === 0 ? '187.91' : idx === 1 ? '7,997.84' : idx === 2 ? '123.35' : '190.80'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card 4: Promotional Banner Slider (Extra Compact) */}
        <div className="col-span-2 lg:col-span-1 w-full lg:w-[340px] rounded-2xl overflow-hidden shrink-0 lg:flex-[1.4] relative shadow-sm hover:shadow-md transition-shadow bg-slate-100 min-h-[160px]">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={cn(
                "absolute inset-0 transition-opacity duration-1000",
                index === activeBanner ? "opacity-100 z-10" : "opacity-0 z-0",
                banner.bgClass
              )}
            >
              <img 
                src={banner.image} 
                alt="Promotion" 
                className={cn(
                  "w-full h-full object-cover transition-transform duration-[4000ms] ease-linear",
                  index === activeBanner ? "scale-105" : "scale-100",
                  banner.overlay ? "opacity-20 mix-blend-overlay" : "opacity-40 mix-blend-multiply"
                )} 
              />
              <div className="absolute inset-0 p-4 flex flex-col justify-between z-10">
                <div className={cn("space-y-1.5", banner.showTag ? "" : "pt-4")}>
                  {banner.showTag && (
                    <div className="flex items-center gap-1">
                      <div className="bg-white px-1.5 py-0.5 rounded-[4px] text-[7px] font-black text-primary-900">Nexora</div>
                      <span className="text-white/40 text-[9px]">×</span>
                      <span className="text-white font-black text-[8px] tracking-widest">PREMIUM</span>
                    </div>
                  )}
                  <h3 className={cn("text-lg md:text-xl font-black leading-[1.1]", banner.textColor)}>
                    {banner.title}
                  </h3>
                  <p className={cn("text-[8px] font-bold", banner.textColor, "opacity-80")}>{banner.subtitle}</p>
                </div>
                
                <div className="space-y-2 mb-2">
                  <button className={cn("w-full font-black py-2 rounded-xl text-[10px] transition-all active:scale-95 shadow-xl uppercase tracking-widest", banner.btnClass)}>
                    {banner.buttonText}
                  </button>
                </div>
              </div>
              {banner.overlay && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              )}
            </div>
          ))}
          
          {/* Dots Indicator */}
          <div className="absolute bottom-2.5 left-0 right-0 flex justify-center gap-1 z-20">
            {banners.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setActiveBanner(idx)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300", 
                  idx === activeBanner ? "bg-[rgba(255,255,255,0.9)] w-4" : "bg-[rgba(255,255,255,0.4)] w-1.5 hover:bg-[rgba(255,255,255,0.6)]"
                )} 
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default MarketplacePreview;

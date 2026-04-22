import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronDown, Search, Mic, MapPin, Bell } from 'lucide-react';
import { cn } from '../../utils/cn';

import { GROUPED_CATEGORIES } from '../../data/groupedCategories';


const CategoriesPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState('daily');
  const sectionRefs = React.useRef({});
  const tabContainerRef = React.useRef(null);

  // Forced Scroll to top on mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ScrollSpy Logic
  React.useEffect(() => {
    const options = {
      rootMargin: '-180px 0px -75% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    }, options);

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Sync tab scroll
  React.useEffect(() => {
    if (tabContainerRef.current) {
      const activeEl = tabContainerRef.current.querySelector('[data-active="true"]');
      if (activeEl) {
        activeEl.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [activeTab]);

  const scrollToSection = (id) => {
    const element = sectionRefs.current[id];
    if (element) {
      const offset = 135;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-transparent pb-[60vh]">
      {/* Sticky Top Section */}
      <div className="sticky top-0 z-[100] bg-white shadow-sm overflow-x-hidden">
        {/* Header */}
        <div className="px-4 pt-3 pb-1 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-xl hover:bg-slate-50 transition-colors">
               <ArrowLeft size={20} className="text-slate-800" />
             </button>
             <span className="text-lg font-display font-bold tracking-tight text-primary-600">
                Service<span className="text-slate-900">Connect</span>
             </span>
          </div>
          <Bell size={20} className="text-slate-400" />
        </div>

        {/* Search Bar */}
        <div className="px-4 pb-2">
          <div className="bg-[#F0F5F6] border border-transparent rounded-2xl p-1 flex items-center gap-2 focus-within:bg-white focus-within:border-primary-500/30 transition-all">
            <Search className="text-slate-400 ml-2" size={16} />
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full py-1.5 bg-transparent focus:outline-none text-slate-800 font-semibold placeholder:text-slate-500 text-xs"
            />
            <Mic size={16} className="text-[#FF5722] mr-2" />
          </div>
        </div>

        {/* Horizontal Navigation Tabs */}
        <div ref={tabContainerRef} className="flex overflow-x-auto gap-0.5 px-4 pb-1 no-scrollbar scroll-smooth">
          {GROUPED_CATEGORIES.map((group) => (
            <button
              key={group.id}
              onClick={() => scrollToSection(group.id)}
              data-active={activeTab === group.id}
              className={cn(
                "whitespace-nowrap px-3 py-1.5 text-[13px] font-bold transition-all duration-300 relative shrink-0",
                activeTab === group.id 
                  ? "text-primary-600" 
                  : "text-slate-500"
              )}
            >
              {group.title}
              {activeTab === group.id && (
                <motion.div 
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary-600 rounded-full"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="px-4 mt-6 space-y-8">
        {GROUPED_CATEGORIES.map((group) => (
          <div 
            key={group.id} 
            id={group.id}
            ref={el => sectionRefs.current[group.id] = el}
            className="scroll-mt-32"
          >
            <h2 className="text-base font-bold text-slate-900 mb-3">{group.title}</h2>
            <div className="flex flex-wrap gap-3">
              {group.items.map((item) => (
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  key={item.id}
                  className="bg-transparent rounded-full pl-1.5 pr-3 py-1 flex items-center gap-1.5 border border-slate-300 active:bg-slate-100 transition-colors cursor-pointer min-w-max"
                  onClick={() => {
                    const name = item.name.toLowerCase();
                    const route = name.includes('hotels') ? '/hotels' : `/category/${name.replace(/ /g, '-')}`;
                    navigate(route);
                  }}
                >
                  <div className="w-7 h-7 flex items-center justify-center overflow-hidden">
                    <img src={item.icon} alt={item.name} className="w-7 h-7 object-contain" />
                  </div>
                  <span className="text-[12px] font-bold text-slate-800 whitespace-nowrap">
                    {item.name}
                  </span>
                </motion.div>
              ))}
              
              {/* Ellipsis button for extra feeling */}
              <div className="bg-transparent rounded-full px-5 py-1 flex items-center justify-center border border-slate-300 min-w-[60px] h-9">
                <div className="flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                  <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                  <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;

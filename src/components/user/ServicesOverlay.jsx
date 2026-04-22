import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Mic, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../utils/cn';
import { GROUPED_CATEGORIES } from '../../data/groupedCategories';

const ServicesOverlay = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(GROUPED_CATEGORIES[0]?.id);
  const sectionRefs = useRef({});
  const isScrollingRef = useRef(false);

  // Smooth scroll to section
  const scrollToSection = (id) => {
    isScrollingRef.current = true;
    setActiveTab(id);
    const element = sectionRefs.current[id];
    if (element) {
      const headerOffset = 130; // Adjust for sticky header + tabs
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Reset scrolling flag after animation finishes
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    }
  };

  // Scroll spy / Intersection Observer
  useEffect(() => {
    if (!isOpen) return;

    const observerOptions = {
      root: null,
      rootMargin: '-140px 0px -70% 0px',
      threshold: 0
    };

    const handleIntersect = (entries) => {
      if (isScrollingRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    GROUPED_CATEGORIES.forEach((group) => {
      const element = sectionRefs.current[group.id];
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [isOpen]);

  // Lock body scroll when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur/Dim */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[998]"
            onClick={onClose}
          />

          {/* Full Screen Overlay with Morphing Animation */}
          <motion.div
            initial={{ 
              clipPath: 'circle(0% at 85% 65%)',
              opacity: 0,
              scale: 0.95
            }}
            animate={{ 
              clipPath: 'circle(150% at 85% 65%)',
              opacity: 1,
              scale: 1
            }}
            exit={{ 
              clipPath: 'circle(0% at 85% 65%)',
              opacity: 0,
              scale: 0.95
            }}
            transition={{ 
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1] // Custom refined bezier
            }}
            className="fixed inset-0 z-[999] bg-[#F5F7F9] flex flex-col pt-safe origin-center"
          >
            {/* Sticky Header Wrapper */}
            <div className="sticky top-0 z-[1001] bg-white shadow-sm">
              <div className="px-4 pt-3 pb-1 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button onClick={onClose} className="p-2 -ml-2 rounded-xl hover:bg-slate-50 transition-colors">
                    <X size={24} className="text-slate-800" />
                  </button>
                  <span className="text-lg font-display font-bold tracking-tight text-primary-600">
                    Service<span className="text-slate-900">Connect</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                   <span className="text-xs font-bold text-slate-400">SERVICES</span>
                </div>
              </div>

              {/* Search Bar */}
              <div className="px-4 pb-2">
                <div className="bg-[#F0F5F6] border border-transparent rounded-2xl p-1 flex items-center gap-2 focus-within:bg-white focus-within:border-primary-500/30 transition-all">
                  <Search className="text-slate-400 ml-2" size={16} />
                  <input
                    type="text"
                    placeholder="Search all services..."
                    className="w-full py-1.5 bg-transparent focus:outline-none text-slate-800 font-semibold placeholder:text-slate-500 text-xs"
                  />
                  <Mic size={16} className="text-[#FF5722] mr-2" />
                </div>
              </div>

              {/* Horizontal Scroll Nav Tabs */}
              <div className="flex overflow-x-auto gap-0.5 px-4 pb-1 no-scrollbar scroll-smooth border-t border-slate-50">
                {GROUPED_CATEGORIES.map((group) => (
                  <button
                    key={group.id}
                    onClick={() => scrollToSection(group.id)}
                    className={cn(
                      "whitespace-nowrap px-3 py-2 text-[13px] font-bold transition-all duration-300 relative",
                      activeTab === group.id
                        ? "text-primary-600 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-primary-600"
                        : "text-slate-500"
                    )}
                  >
                    {group.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto w-full px-4 pt-6 pb-24 no-scrollbar">
              <div className="space-y-8 max-w-2xl mx-auto">
                {GROUPED_CATEGORIES.map((group) => (
                  <div
                    key={group.id}
                    id={group.id}
                    ref={(el) => (sectionRefs.current[group.id] = el)}
                    className="scroll-mt-32"
                  >
                    <h2 className="text-base font-bold text-slate-900 mb-3">{group.title}</h2>
                    <div className="flex flex-wrap gap-3">
                      {group.items.map((item) => (
                        <motion.div
                          whileTap={{ scale: 0.95 }}
                          key={item.id}
                          className="bg-white rounded-full pl-1.5 pr-3 py-1 flex items-center gap-1.5 border border-slate-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)] active:bg-slate-50 transition-colors cursor-pointer min-w-max"
                          onClick={() => {
                            const name = item.name.toLowerCase();
                            const route = name.includes('hotels') ? '/hotels' : `/category/${name.replace(/ /g, '-')}`;
                            navigate(route);
                            onClose(); // Close overlay on navigation
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
                      
                      {/* More placeholder */}
                      <div className="bg-white rounded-full px-5 py-1 flex items-center justify-center border border-slate-200/40 min-w-[60px] h-9">
                        <div className="flex gap-1">
                          <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                          <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                          <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ServicesOverlay;

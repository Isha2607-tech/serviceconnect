import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, Star, Clock } from 'lucide-react';
import { cn } from '../../utils/cn';
import UserLayout from '../../layouts/UserLayout';
import FeaturedVendors from '../../components/user/FeaturedVendors';
import SocialDiscovery from '../../components/user/SocialDiscovery';
import LeadFormModal from '../../components/common/LeadFormModal';
import { FULL_PRODUCT_LIST, PRODUCT_LIST_TABS } from '../../data/marketplaceData';

const Marketplace = () => {
  const navigate = useNavigate();
  const [activeProductTab, setActiveProductTab] = useState('All');
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedVendor, setSelectedVendor] = useState(null);

  return (
    <UserLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-screen bg-white pt-6 md:pt-20"
      >
        <div className="max-w-[1400px] mx-auto px-6 pb-20">
          {/* Header */}
          <div className="flex items-center gap-4 mb-4 md:mb-8">
            <button
              onClick={() => navigate('/')}
              className="w-10 h-10 rounded-full hover:bg-slate-50 flex items-center justify-center text-slate-400 transition-all"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Products on ServiceConnect</h1>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-6 border-b border-slate-100 mb-4 md:mb-8 overflow-x-auto no-scrollbar scroll-smooth">
            {PRODUCT_LIST_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveProductTab(tab)}
                className={cn(
                  'whitespace-nowrap pb-4 text-sm font-bold transition-all relative',
                  activeProductTab === tab ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'
                )}
              >
                {tab}
                {activeProductTab === tab && (
                  <motion.div layoutId="activeProdTab" className="absolute bottom-0 left-0 right-0 h-1 bg-slate-900 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {FULL_PRODUCT_LIST.map((prod) => (
              <div
                key={prod.id}
                className="group cursor-pointer"
                onClick={() => navigate(`/marketplace/product/${prod.id}`)}
              >
                <div className="aspect-square rounded-2xl overflow-hidden bg-[#F7F8FA] mb-4 border border-slate-100 transition-all group-hover:shadow-xl group-hover:border-primary-100">
                  <img src={prod.image} alt={prod.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-[13px] font-medium text-slate-700 line-clamp-2 leading-snug group-hover:text-primary-600 transition-colors">{prod.name}</h3>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-black text-slate-900">{prod.price}</span>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">MOQ: {prod.moq}</span>
                    </div>
                    {prod.badge && (
                      <div className="flex items-center gap-1.5 text-[#E31E24]">
                        <Zap size={10} fill="currentColor" />
                        <span className="text-[10px] font-bold tracking-tight italic">{prod.badge}</span>
                      </div>
                    )}
                    {prod.rating && (
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star size={10} fill="currentColor" />
                        <span className="text-[10px] font-black text-slate-900">{prod.rating}</span>
                      </div>
                    )}
                    {prod.delivery && (
                      <div className="flex items-center gap-1 text-green-600">
                        <Clock size={10} />
                        <span className="text-[10px] font-bold">{prod.delivery}</span>
                      </div>
                    )}
                    {prod.sold && (
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{prod.sold}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Common Sections */}
        <FeaturedVendors onEnquiry={(vendor) => { setSelectedVendor(vendor); setIsEnquiryOpen(true); }} />
        <SocialDiscovery />
      </motion.div>

      <LeadFormModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        vendorName={selectedVendor?.name || 'Expert'}
      />
    </UserLayout>
  );
};

export default Marketplace;

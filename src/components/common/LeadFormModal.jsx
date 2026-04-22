import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, MessageSquare, ShieldCheck, MapPin, Send, Settings, Zap } from 'lucide-react';
import Button from '../common/Button';
import Input from '../common/Input';
import { cn } from '../../utils/cn';

const LeadFormModal = ({ isOpen, onClose, vendorName }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex md:items-center md:justify-center md:p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm hidden md:block"
        />

        {/* Modal Body */}
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          className="relative w-full max-w-xl bg-white md:rounded-3xl shadow-2xl overflow-hidden h-full md:h-auto md:max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="bg-primary-600 p-5 md:p-8 text-white relative flex-shrink-0">
             <button 
               onClick={onClose}
               className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
             >
               <X size={18} />
             </button>
             <div className="flex items-center gap-2 mb-1 md:mb-2 font-bold uppercase tracking-widest text-[9px] text-primary-200">
               <ShieldCheck size={12} />
               Secure Lead Submission
             </div>
             <h3 className="text-xl md:text-2xl font-display font-bold">Request a Quote</h3>
          </div>

          {/* Form - Full height on mobile */}
          <div className="p-5 md:p-8 space-y-4 md:space-y-6 overflow-y-auto no-scrollbar flex-1">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <Input 
                   label="Service Needed" 
                   placeholder="Ex: AC Deep Cleaning"
                   leftIcon={<Settings size={18} />}
                   className="text-sm"
                />
                <Input 
                   label="Estimated Budget" 
                   placeholder="₹ 500 - 2000"
                   leftIcon={<Zap size={18} />}
                   className="text-sm"
                />
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <Input 
                   label="Preferred Date" 
                   type="date"
                   leftIcon={<Calendar size={18} />}
                   className="text-sm"
                />
                <Input 
                   label="Preferred Time" 
                   type="time"
                   leftIcon={<Clock size={18} />}
                   className="text-sm"
                />
             </div>

             <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700 ml-1 flex items-center gap-2">
                   <MessageSquare size={16} className="text-primary-500" />
                   Describe Requirements
                </label>
                <textarea 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 transition-all outline-none resize-none h-20 placeholder:text-slate-400"
                  placeholder="Need specific details..."
                />
             </div>

             <div className="bg-slate-50 p-3 rounded-2xl flex items-center gap-3">
                <MapPin size={18} className="text-primary-600 flex-shrink-0" />
                <div className="flex-1">
                   <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Service Location</div>
                   <div className="text-[11px] font-bold text-slate-900 line-clamp-1">12th Floor, Apex Tower, Andheri East</div>
                </div>
                <Button size="xs" variant="ghost" className="text-primary-600 font-bold px-1 text-[10px]">Change</Button>
             </div>

             {/* Bottom Nav Spacer for Mobile */}
             <div className="h-20 md:hidden" />
          </div>

          {/* Fixed Footer for Mobile */}
          <div className="sticky bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-100 flex items-center justify-between gap-4 md:relative md:p-8 md:bg-transparent md:border-none">
             <div className="text-[10px] text-slate-400 font-medium leading-tight">
                By submitting, it's <a href="#" className="text-primary-600 underline">Lead Policy</a>.
             </div>
             <Button className="rounded-xl px-5 py-2.5 shadow-lg shadow-primary-500/30 font-bold flex items-center gap-2 text-xs">
                Send Request
                <Send size={14} />
             </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LeadFormModal;

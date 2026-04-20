import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, MessageSquare, ShieldCheck, MapPin, Send } from 'lucide-react';
import Button from '../common/Button';
import Input from '../common/Input';
import { cn } from '../../utils/cn';

const LeadFormModal = ({ isOpen, onClose, vendorName }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Body */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-primary-600 p-8 text-white relative">
             <button 
               onClick={onClose}
               className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
             >
               <X size={20} />
             </button>
             <div className="flex items-center gap-2 mb-2 font-bold uppercase tracking-widest text-[10px] text-primary-200">
               <ShieldCheck size={14} />
               Secure Lead Submission
             </div>
             <h3 className="text-2xl font-display font-bold">Request a Quote</h3>
             <p className="text-primary-100 text-sm mt-1">Get custom pricing and expert advice from <span className="font-bold underline">{vendorName}</span></p>
          </div>

          {/* Form */}
          <div className="p-8 space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                   label="Service Needed" 
                   placeholder="Ex: AC Deep Cleaning"
                   leftIcon={<Settings size={18} />}
                />
                <Input 
                   label="Estimated Budget" 
                   placeholder="₹ 500 - 2000"
                   leftIcon={<Zap size={18} />}
                />
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                   label="Preferred Date" 
                   type="date"
                   leftIcon={<Calendar size={18} />}
                />
                <Input 
                   label="Preferred Time" 
                   type="time"
                   leftIcon={<Clock size={18} />}
                />
             </div>

             <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700 ml-1 flex items-center gap-2">
                   <MessageSquare size={16} className="text-primary-500" />
                   Describe Your Requirement
                </label>
                <textarea 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 transition-all outline-none resize-none h-24 placeholder:text-slate-400"
                  placeholder="Tell the vendor about the issue, square footage, or specific needs..."
                />
             </div>

             <div className="bg-slate-50 p-4 rounded-2xl flex items-center gap-3">
                <MapPin size={20} className="text-primary-600" />
                <div className="flex-1">
                   <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Service Location</div>
                   <div className="text-xs font-bold text-slate-900">12th Floor, Apex Tower, Andheri East, Mumbai</div>
                </div>
                <Button size="sm" variant="ghost" className="text-primary-600 font-bold px-2">Change</Button>
             </div>

             <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="text-xs text-slate-400 font-medium max-w-[200px]">
                   By submitting, you agree to our <a href="#" className="text-primary-600 underline">Lead Policy</a>.
                </div>
                <Button className="rounded-2xl px-8 shadow-xl shadow-primary-500/30 font-bold flex items-center gap-2">
                   Send Request
                   <Send size={18} />
                </Button>
             </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LeadFormModal;

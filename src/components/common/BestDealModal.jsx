import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { cn } from '../../utils/cn';

const BestDealModal = ({ isOpen, onClose, categoryName = "Restaurants" }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
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
          className="relative w-full max-w-[420px] bg-white rounded-[32px] shadow-2xl overflow-hidden p-8"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-1 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X size={24} />
          </button>

          {/* Title */}
          <div className="text-center mb-8">
             <h2 className="text-[22px] font-bold text-slate-900 leading-tight">
               Get the List of Top <span className="text-primary-600 capitalize">{categoryName}</span>
             </h2>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Name Input */}
            <div className="relative group">
              <label className="absolute -top-2.5 left-4 bg-white px-2 text-[12px] font-bold text-slate-400 group-focus-within:text-primary-600 transition-all">
                Name*
              </label>
              <input 
                type="text" 
                placeholder=""
                className="w-full border border-slate-200 rounded-xl px-5 py-3.5 text-base font-bold text-slate-900 focus:border-primary-600 focus:ring-0 outline-none transition-all placeholder:text-slate-300"
              />
            </div>

            {/* Mobile Number Input */}
            <div className="relative group">
              <label className="absolute -top-2.5 left-4 bg-white px-2 text-[12px] font-bold text-slate-400 group-focus-within:text-primary-600 transition-all">
                Mobile Number*
              </label>
              <input 
                type="text" 
                placeholder=""
                className="w-full border border-slate-200 rounded-xl px-5 py-3.5 text-base font-bold text-slate-900 focus:border-primary-600 focus:ring-0 outline-none transition-all placeholder:text-slate-300"
              />
            </div>

            <p className="text-[11px] font-bold text-slate-400 mt-2">* Indicates mandatory fields</p>

            {/* Submit Button */}
            <button className="w-full bg-primary-600 text-white py-4 rounded-[18px] font-black text-lg shadow-xl shadow-primary-600/30 active:scale-[0.98] transition-all hover:bg-primary-700 uppercase tracking-wider">
               Get Best Deal
            </button>

            {/* Terms */}
            <div className="flex items-center gap-3">
               <div className="w-5 h-5 rounded bg-primary-600 flex items-center justify-center text-white shrink-0">
                  <Check size={14} className="stroke-[4]" />
               </div>
               <p className="text-[13px] font-bold text-slate-600">
                  I Agree to <span className="text-primary-600 underline underline-offset-2">Terms and Conditions</span>
               </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BestDealModal;

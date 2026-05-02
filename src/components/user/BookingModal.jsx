import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar as CalIcon, Clock, CheckCircle2, ArrowRight, MapPin, Star } from 'lucide-react';
import { cn } from '../../utils/cn';
import { storage } from '../../utils/storage';

const BookingModal = ({ isOpen, onClose, item, type = 'booking' }) => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = () => {
    setIsProcessing(true);
    // Simulate API delay
    setTimeout(() => {
      const data = {
        itemName: item.name,
        itemLocation: item.location,
        itemImage: item.images?.[0]?.url || item.image,
        date: selectedDate,
        time: selectedTime,
        type: type
      };
      
      if (type === 'shopping') {
        storage.saveOrder(data);
      } else {
        storage.saveBooking(data);
      }
      
      setIsProcessing(false);
      setStep(3); // Success step
    }, 1500);
  };

  const dates = [
    { day: 'Mon', date: '15 May' },
    { day: 'Tue', date: '16 May' },
    { day: 'Wed', date: '17 May' },
    { day: 'Thu', date: '18 May' },
    { day: 'Fri', date: '19 May' },
  ];

  const times = ['10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM', '06:00 PM', '08:00 PM'];

  return (
    <div className="fixed inset-0 z-[1000] flex items-end md:items-center justify-center p-0 md:p-4 bg-black/60 backdrop-blur-sm">
      <motion.div 
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        className="bg-white w-full max-w-lg rounded-t-[32px] md:rounded-[32px] overflow-hidden shadow-2xl relative"
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div>
            <h3 className="text-xl font-black text-slate-900 font-display">
              {type === 'shopping' ? 'Complete Purchase' : 'Book Your Slot'}
            </h3>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">
              Step {step} of 3
            </p>
          </div>
          <button onClick={onClose} className="p-2 bg-white rounded-full shadow-sm border border-slate-100 active:scale-90 transition-all">
            <X size={20} className="text-slate-400" />
          </button>
        </div>

        <div className="p-6">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                {/* Item Brief */}
                <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shadow-md">
                    <img src={item.images?.[0]?.url || item.image} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900">{item.name}</h4>
                    <div className="flex items-center gap-1.5 text-slate-400 text-[11px] mt-1 font-bold">
                       <MapPin size={12} /> {item.location}
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="text-[12px] font-black text-slate-900 uppercase mb-4 flex items-center gap-2">
                    <CalIcon size={14} className="text-[#20594e]" /> Select Date
                  </h5>
                  <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                    {dates.map((d, i) => (
                      <button 
                        key={i}
                        onClick={() => setSelectedDate(d.date)}
                        className={cn(
                          "flex-shrink-0 w-20 py-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-1",
                          selectedDate === d.date ? "bg-[#20594e] border-[#20594e] text-white shadow-lg shadow-[#20594e]/30" : "bg-white border-slate-100 text-slate-400 hover:border-slate-200"
                        )}
                      >
                        <span className="text-[10px] font-bold uppercase">{d.day}</span>
                        <span className="text-sm font-black">{d.date.split(' ')[0]}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  disabled={!selectedDate}
                  onClick={() => setStep(2)}
                  className="w-full bg-[#20594e] disabled:opacity-50 text-white py-4 rounded-2xl font-black text-sm shadow-xl shadow-[#20594e]/20 flex items-center justify-center gap-2 active:scale-[0.98] transition-all"
                >
                  Continue <ArrowRight size={18} />
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <h5 className="text-[12px] font-black text-slate-900 uppercase mb-4 flex items-center gap-2">
                    <Clock size={14} className="text-[#20594e]" /> Preferred Time
                  </h5>
                  <div className="grid grid-cols-3 gap-3">
                    {times.map((t, i) => (
                      <button 
                        key={i}
                        onClick={() => setSelectedTime(t)}
                        className={cn(
                          "py-3 rounded-xl border transition-all text-[12px] font-black",
                          selectedTime === t ? "bg-slate-900 border-slate-900 text-white shadow-lg shadow-slate-900/20" : "bg-slate-50 border-slate-100 text-slate-600 hover:bg-white"
                        )}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
                  <p className="text-[11px] font-bold text-amber-700 leading-relaxed">
                    By clicking confirm, you agree to the service terms. No immediate payment required.
                  </p>
                </div>

                <div className="flex gap-3">
                   <button onClick={() => setStep(1)} className="px-6 py-4 rounded-2xl border-2 border-slate-100 font-black text-slate-400 text-sm active:scale-95 transition-all">Back</button>
                   <button 
                    disabled={!selectedTime || isProcessing}
                    onClick={handleConfirm}
                    className="flex-1 bg-[#20594e] text-white py-4 rounded-2xl font-black text-sm shadow-xl shadow-[#20594e]/20 flex items-center justify-center gap-2 active:scale-[0.98] transition-all"
                  >
                    {isProcessing ? 'Processing...' : 'Confirm Now'}
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="py-10 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={48} className="text-emerald-500" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Success!</h3>
                <p className="text-slate-500 font-medium mb-8">
                  Your {type} has been saved locally. You can view it in your profile history.
                </p>
                <button 
                  onClick={onClose}
                  className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-sm shadow-xl active:scale-95 transition-all"
                >
                  Close & Explore
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default BookingModal;

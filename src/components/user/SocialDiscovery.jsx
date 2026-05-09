import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { cn } from '../../utils/cn';
import { PREVIEW_CARDS } from '../../data/marketplaceData';

const SocialDiscovery = () => {
  const navigate = useNavigate();
  const [previewStack, setPreviewStack] = useState([0, 1, 2]);

  const handleSwap = (id) => {
    const newStack = [id, ...previewStack.filter(item => item !== id)];
    setPreviewStack(newStack);
  };

  return (
    <section className="max-w-[1400px] mx-auto px-6 pt-0 pb-12 bg-transparent">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7">
          <Badge variant="primary" className="mb-2 px-3 py-1 bg-primary-50 text-primary-700 text-[10px]">Social Discovery</Badge>
          <h2 className="text-2xl md:text-6xl font-display font-bold text-slate-900 mb-4 leading-tight">
            See What's Trending <br />
            in <span className="text-primary-600">Your Community</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-xl mb-6 leading-relaxed max-w-2xl">
            Stay updated with the latest service works, tips, and transformations posted by vendors near you.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-4 p-3 rounded-2xl bg-white shadow-sm border border-slate-100">
              <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">
                <Sparkles size={20} />
              </div>
              <div>
                <h5 className="font-bold text-sm text-slate-900">Real Work Samples</h5>
                <p className="text-[12px] text-slate-500 leading-tight">Unfiltered photos and videos from jobs.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-2xl bg-white shadow-sm border border-slate-100">
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 flex-shrink-0">
                <Star size={20} />
              </div>
              <div>
                <h5 className="font-bold text-sm text-slate-900">Community Reviews</h5>
                <p className="text-[12px] text-slate-500 leading-tight">Read what your neighbors say.</p>
              </div>
            </div>
          </div>
          <Button 
            size="sm" 
            className="mt-6 rounded-xl w-full sm:w-auto px-8 py-3 text-sm shadow-lg shadow-primary-500/20"
            onClick={() => navigate('/services')}
          >
            Open Social Feed
          </Button>
        </div>

        <div className="lg:col-span-5 relative h-[380px] md:h-[500px] flex items-center justify-center lg:justify-end mt-4 lg:mt-0 px-4">
          <div className="relative w-[280px] md:w-[350px] h-[350px] md:h-[437px] flex items-center justify-center md:ml-0 z-0">
            {PREVIEW_CARDS.map((card) => {
              const cardId = card.id;
              const stackPos = previewStack.indexOf(cardId);
              
              return (
                <motion.div
                  key={cardId}
                  layout
                  initial={false}
                  animate={{
                    scale: 1 - stackPos * 0.05,
                    y: stackPos * 10,
                    x: stackPos === 1 ? -45 : stackPos === 2 ? 45 : 0,
                    rotate: stackPos === 1 ? -3 : stackPos === 2 ? 3 : 0,
                    zIndex: 30 - stackPos * 10,
                    opacity: 1
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  onClick={() => stackPos !== 0 && handleSwap(cardId)}
                  className={cn(
                    "absolute w-[280px] md:w-[350px] aspect-[4/5] bg-cover bg-center rounded-3xl shadow-2xl border-4 border-white overflow-hidden",
                    stackPos === 0 ? "cursor-default" : "cursor-pointer"
                  )}
                  style={{ backgroundImage: `url("${card.image}")` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <AnimatePresence>
                    {stackPos === 0 && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center overflow-hidden shrink-0">
                            <img src={card.avatar} alt="avatar" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <span className="text-white text-lg font-bold block leading-none mb-1">{card.user}</span>
                            <span className="text-primary-300 text-[11px] font-bold uppercase tracking-wider">Verified Artist</span>
                          </div>
                        </div>
                        <p className="text-white text-sm md:text-lg font-medium line-clamp-3 leading-relaxed">
                          {card.text}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialDiscovery;

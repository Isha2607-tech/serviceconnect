import React from 'react';
import { ShieldCheck, Star } from 'lucide-react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { FEATURED_VENDORS } from '../../data/marketplaceData';

const FeaturedVendors = ({ onEnquiry }) => {
  return (
    <section className="md:max-w-[1400px] md:mx-auto bg-primary-50/30 pt-4 pb-4 md:pt-8 md:pb-4 px-4 md:px-6">
      <div className="text-left mb-4 md:mb-8">
        <h2 className="text-lg md:text-2xl font-display font-bold text-slate-900 mb-1">Handpicked Top Rated Experts</h2>
        <p className="text-slate-500 text-xs md:text-lg leading-tight">Proven track records and high customer satisfaction.</p>
      </div>

      <div className="flex md:grid overflow-x-auto md:overflow-visible no-scrollbar -mx-4 md:mx-0 px-4 md:px-0 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 pb-4">
        {FEATURED_VENDORS.map((vendor) => (
          <Card key={vendor.id} className="overflow-hidden group flex flex-col shrink-0 w-[240px] md:w-auto border-slate-100 shadow-sm md:shadow-md">
            <div className="relative h-34 md:h-48 overflow-hidden">
              <img src={vendor.image} alt={vendor.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute top-3 left-3">
                <Badge variant={vendor.type === 'Premium' ? 'primary' : 'neutral'} className="shadow-lg backdrop-blur-md text-[9px] px-1.5 py-0.5">
                  {vendor.type}
                </Badge>
              </div>
              {vendor.verified && (
                <div className="absolute bottom-3 right-3 bg-white p-1 rounded-full shadow-lg border border-primary-50">
                  <ShieldCheck size={16} className="text-primary-600" />
                </div>
              )}
            </div>
            <div className="p-3 md:p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-1 text-amber-500 mb-1">
                <Star size={12} fill="currentColor" />
                <span className="text-xs font-bold text-slate-900">{vendor.rating}</span>
                <span className="text-[10px] text-slate-400 font-medium ml-1">({vendor.reviews})</span>
              </div>
              <h4 className="text-base md:text-xl font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors cursor-pointer line-clamp-1">{vendor.name}</h4>
              <p className="text-[10px] md:text-sm text-slate-400 font-medium mb-4 leading-tight line-clamp-1">Expert professional service in Indore.</p>
              <Button
                variant="outline"
                onClick={() => onEnquiry(vendor)}
                className="w-full mt-auto border-primary-100 text-primary-600 transition-all duration-300 font-bold py-2 rounded-xl text-xs"
              >
                Get Quote
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturedVendors;

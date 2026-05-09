import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Send, Zap, Star, Truck, Package, ArrowLeft, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { cn } from '../../utils/cn';
import UserLayout from '../../layouts/UserLayout';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import { ALL_PRODUCTS, RECOMMENDATIONS, KEY_ATTRIBUTES, DUMMY_REVIEWS } from '../../data/marketplaceData';
import productVideo from '../../assets/20260508-1214-47.6450010.mp4';

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = ALL_PRODUCTS.find(p => p.id === id) || null;

  const [activeMedia, setActiveMedia] = useState('photo');
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [activePdpTab, setActivePdpTab] = useState('Attributes');

  const productImages = product ? [
    product.image,
    'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=600',
  ] : [];

  if (!product) {
    return (
      <UserLayout>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-slate-400 font-medium">Product not found.</p>
        </div>
      </UserLayout>
    );
  }

  return (
    <UserLayout>
      {/* Sticky Header (Mobile Only) */}
      <div className="md:hidden sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-400 hover:text-slate-600 transition-all shadow-sm border border-slate-100">
            <ArrowLeft size={20} />
          </button>
          <div className="hidden md:block">
            <h2 className="text-sm font-bold text-slate-900 line-clamp-1">{product.name}</h2>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Store:</span>
              <span className="text-[10px] font-bold text-primary-600">Verified Manufacturer</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-red-500 hover:border-red-100 transition-all"><Heart size={20} /></button>
          <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary-600 transition-all"><Send size={18} /></button>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 pt-4 md:pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Left: Images */}
          <div className="lg:col-span-6 flex flex-col md:flex-row-reverse gap-3 md:sticky md:top-28 h-fit">
            <div className="flex-1 aspect-square md:aspect-auto md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 relative group/main">
              {activeMedia === 'photo' ? (
                <img key={activeImgIndex} src={productImages[activeImgIndex]} className="w-full h-full object-cover" />
              ) : (
                <video src={productVideo} autoPlay muted loop className="w-full h-full object-cover" />
              )}
              {activeMedia === 'photo' && (
                <>
                  <button onClick={() => setActiveImgIndex(prev => (prev - 1 + productImages.length) % productImages.length)} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-800 shadow-xl opacity-0 group-hover/main:opacity-100 transition-all border border-slate-100 z-20"><ChevronLeft size={24} /></button>
                  <button onClick={() => setActiveImgIndex(prev => (prev + 1) % productImages.length)} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-800 shadow-xl opacity-0 group-hover/main:opacity-100 transition-all border border-slate-100 z-20"><ChevronRight size={24} /></button>
                </>
              )}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex bg-white/80 backdrop-blur-md p-1 rounded-full shadow-lg border border-white/50">
                <button onClick={() => setActiveMedia('photo')} className={cn('px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all', activeMedia === 'photo' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400')}>Photos</button>
                <button onClick={() => setActiveMedia('video')} className={cn('px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all', activeMedia === 'video' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400')}>Video</button>
              </div>
            </div>

            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto no-scrollbar py-4 md:py-0 h-auto md:h-[500px] lg:h-[600px] shrink-0">
              {productImages.map((img, i) => (
                <div key={i} onClick={() => { setActiveImgIndex(i); setActiveMedia('photo'); }} className={cn('w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden border-2 cursor-pointer transition-all flex-shrink-0', activeImgIndex === i && activeMedia === 'photo' ? 'border-emerald-600 shadow-md' : 'border-slate-100 opacity-60 hover:opacity-100')}>
                  <img src={img} className="w-full h-full object-cover" />
                </div>
              ))}
              <div onClick={() => setActiveMedia('video')} className={cn('w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden border-2 cursor-pointer transition-all flex-shrink-0 bg-slate-800 flex items-center justify-center', activeMedia === 'video' ? 'border-emerald-600' : 'border-slate-100 opacity-80')}>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center"><Play size={10} fill="white" className="text-white ml-0.5" /></div>
              </div>
            </div>
          </div>

          {/* Right: Details */}
          <div className="lg:col-span-6 space-y-5">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-1.5">
                <Badge className="bg-slate-900 text-white border-none rounded-md text-[9px] px-2 py-0.5">Stickers</Badge>
                <Badge variant="outline" className="text-[9px] font-bold px-2 py-0.5">Manufacturer</Badge>
              </div>
              <h1 className="text-lg md:text-2xl font-black text-slate-900 leading-tight">{product.name} - Professional High-End Grade</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <div className="flex text-amber-400">{[1,2,3,4,5].map(s => <Star key={s} size={12} fill="currentColor" />)}</div>
                  <span className="text-xs font-bold text-slate-900">4.9</span>
                  <span className="text-[10px] text-slate-400 font-bold underline cursor-pointer">(1,428 reviews)</span>
                </div>
                <div className="h-3 w-[1px] bg-slate-200"></div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">189 Sold</span>
              </div>
            </div>

            <div className="bg-[#F7F8FA] rounded-xl p-4 md:p-5 space-y-4 border border-slate-100">
              <div className="flex gap-6 border-b border-slate-200 pb-2">
                <button className="text-[11px] font-black text-slate-900 relative pb-2">Wholesale<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full" /></button>
                <button className="text-[11px] font-bold text-slate-400 pb-2 hover:text-slate-600">Customization</button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">50 - 4,999 units</div>
                  <div className="text-2xl font-black text-slate-900">{product.price}</div>
                </div>
                <div>
                  <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">&gt;= 5,000 units</div>
                  <div className="text-2xl font-black text-slate-900">₹13.50</div>
                </div>
              </div>
              <div className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md text-[9px] font-bold w-fit flex items-center gap-1.5"><Zap size={10} fill="currentColor" /> Lower priced than similar items</div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Variations</span>
                  <button className="text-[9px] font-bold text-primary-600 hover:underline">Select now</button>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[1,2,3,4,5,6].map(i => (<div key={i} className={cn('w-10 h-10 rounded-md overflow-hidden border-2 cursor-pointer transition-all', i === 1 ? 'border-emerald-600' : 'border-slate-100 opacity-60 hover:opacity-100')}><img src={product.image} className="w-full h-full object-cover" /></div>))}
                  <div className="w-10 h-10 rounded-md bg-slate-50 border border-slate-100 flex items-center justify-center text-[9px] font-black text-slate-400">+12</div>
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Size</span>
                <div className="flex flex-wrap gap-1.5">
                  {['30mm*1m','50mm*2m','100mm*5m'].map((s,i) => (<button key={s} className={cn('px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all', i === 0 ? 'bg-emerald-600 text-white shadow-md' : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-400')}>{s}</button>))}
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-3 md:p-4 border border-slate-100 space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-emerald-600 shadow-sm"><Truck size={14} /></div>
                  <div><span className="text-[10px] font-black text-slate-900 block">Shipping: Standard</span><span className="text-[9px] font-bold text-slate-400 leading-none">Del: 14 - 18 Jun</span></div>
                </div>
                <ChevronRight size={14} className="text-slate-300" />
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <span className="text-[9px] font-bold text-slate-500">Fee: ₹3,132.38 for 50 units</span>
                <button className="text-[9px] font-black text-emerald-600 uppercase tracking-widest">Details</button>
              </div>
            </div>

            <div className="hidden md:grid grid-cols-3 gap-3 pt-2">
              <Button className="py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-xs font-black shadow-lg shadow-emerald-500/20">Start Order</Button>
              <Button variant="outline" className="py-3 rounded-xl border-slate-200 text-xs font-black hover:bg-slate-50">Add to cart</Button>
              <Button variant="outline" className="py-3 rounded-xl border-slate-200 text-xs font-black hover:bg-slate-50">Chat now</Button>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-16 space-y-6">
          <h2 className="text-xl font-black text-slate-900">Other recommendations for your business</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {RECOMMENDATIONS.map((item) => (
              <div key={item.id} className="group cursor-pointer" onClick={() => navigate(`/marketplace/product/${item.id}`)}>
                <div className="aspect-square rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 mb-3 relative">
                  <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-400 opacity-0 group-hover:opacity-100 transition-all shadow-sm"><Heart size={16} /></div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-[11px] font-bold text-slate-600 line-clamp-2 leading-relaxed">{item.name}</h3>
                  <div className="text-lg font-black text-slate-900">{item.price}</div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] text-slate-400 font-bold">MOQ: {item.moq}</span>
                    <span className="text-[10px] text-emerald-600 font-black">Delivery by {item.delivery}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16 bg-white rounded-3xl overflow-hidden">
          <div className="flex border-b border-slate-100 px-2 md:px-0 gap-8 overflow-x-auto no-scrollbar">
            {['Attributes','Reviews','Supplier','Description'].map((tab) => (
              <button key={tab} onClick={() => setActivePdpTab(tab)} className={cn('py-5 px-4 text-sm font-black relative transition-all whitespace-nowrap', activePdpTab === tab ? 'text-emerald-600' : 'text-slate-400 hover:text-slate-600')}>
                {tab}
                {activePdpTab === tab && <motion.div layoutId="pdpTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full" />}
              </button>
            ))}
          </div>
          <div className="py-8 space-y-8">
            {activePdpTab === 'Attributes' && (
              <div className="space-y-6">
                <h3 className="text-lg font-black text-slate-900">Key attributes</h3>
                <div className="overflow-x-auto rounded-xl border border-slate-100">
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      {KEY_ATTRIBUTES.map((row, idx) => (
                        <tr key={idx} className="border-b border-slate-50 last:border-none">
                          <td className="py-2.5 px-3 bg-slate-50/50 w-1/4 text-[10px] md:text-[11px] font-bold text-slate-500 leading-tight align-top">{row.label}</td>
                          <td className="py-2.5 px-3 w-1/4 text-[10px] md:text-[11px] font-black text-slate-900 leading-tight align-top">{row.value}</td>
                          <td className="py-2.5 px-3 bg-slate-50/50 w-1/4 text-[10px] md:text-[11px] font-bold text-slate-500 border-l border-slate-50 leading-tight align-top">{row.label2}</td>
                          <td className="py-2.5 px-3 w-1/4 text-[10px] md:text-[11px] font-black text-slate-900 leading-tight align-top">{row.value2}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {activePdpTab === 'Reviews' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-black text-slate-900">Customer Reviews (1,428)</h3>
                  <div className="flex items-center gap-1.5"><div className="flex text-amber-400">{[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}</div><span className="text-sm font-black text-slate-900">4.9 / 5.0</span></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {DUMMY_REVIEWS.map((review) => (
                    <div key={review.id} className="p-5 rounded-2xl border border-slate-100 bg-slate-50/30 space-y-3">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-black text-xs">{review.avatar}</div><div><p className="text-xs font-black text-slate-900">{review.user}</p><p className="text-[10px] text-slate-400 font-bold">{review.date}</p></div></div>
                        <div className="flex text-amber-400">{[...Array(review.rating)].map((_,i) => <Star key={i} size={10} fill="currentColor" />)}</div>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">{review.comment}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full py-4 rounded-2xl text-xs font-black border-slate-200">View All Reviews</Button>
              </div>
            )}
            {activePdpTab === 'Supplier' && (
              <div className="space-y-6">
                <div className="bg-emerald-900 rounded-3xl p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                  <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="flex items-center gap-5">
                      <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center font-black text-3xl">NS</div>
                      <div className="space-y-1"><h3 className="text-xl font-black">Nexora Solutions Co., Ltd.</h3><div className="flex items-center gap-2"><Badge className="bg-emerald-500 text-white border-none text-[9px] font-black px-2">Verified</Badge><span className="text-xs font-bold text-emerald-200">12 Years Manufacturer</span></div></div>
                    </div>
                    <div className="flex gap-3"><Button className="bg-white text-emerald-900 hover:bg-emerald-50 px-8 py-3 rounded-xl font-black text-xs">Follow</Button><Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-xl font-black text-xs">Visit Store</Button></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[{label:'Response Time',value:'≤ 3h',sub:'Fast Response'},{label:'On-time Delivery',value:'98.5%',sub:'Highly Reliable'},{label:'Store Rating',value:'4.8/5',sub:'Excellent Quality'},{label:'Followers',value:'124K+',sub:'Trusted Choice'}].map((stat,i) => (
                    <div key={i} className="p-5 rounded-2xl border border-slate-100 bg-white space-y-2"><p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p><p className="text-xl font-black text-slate-900">{stat.value}</p><p className="text-[10px] font-black text-emerald-600">{stat.sub}</p></div>
                  ))}
                </div>
              </div>
            )}
            {activePdpTab === 'Description' && (
              <div className="space-y-8">
                <div className="space-y-4"><h3 className="text-lg font-black text-slate-900">Product Overview</h3><p className="text-sm text-slate-600 leading-loose font-medium">Our Professional High-End Grade {product.name} are engineered for durability and visual impact. Using state-of-the-art UV varnishing technology and premium adhesive vinyl, we ensure each piece maintains its color vibrance and structural integrity even in harsh conditions.</p></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4"><h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">Key Features</h4><ul className="space-y-3">{['Waterproof and Weather-resistant','Premium UV Varnishing for high-gloss finish','Custom Die-cut shapes as per requirement','Industrial grade adhesive for long-lasting stick','Eco-friendly non-toxic materials'].map((f,i) => (<li key={i} className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5"><Zap size={10} fill="currentColor" /></div><span className="text-xs font-bold text-slate-600">{f}</span></li>))}</ul></div>
                  <div className="rounded-2xl overflow-hidden border border-slate-100"><img src={product.image} className="w-full h-48 object-cover" /><div className="p-4 bg-slate-50"><p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Quality Assurance</p><p className="text-xs font-bold text-slate-600 mt-1">Certified for industrial and promotional use under ISO 9001 standards.</p></div></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 p-4 z-50 flex gap-3 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <Button className="flex-1 py-4 rounded-2xl bg-emerald-600 text-xs font-black">Start Order</Button>
        <div className="flex gap-2">
          <button className="w-12 h-12 rounded-2xl border border-slate-200 flex items-center justify-center text-slate-600"><Package size={20} /></button>
          <button className="w-12 h-12 rounded-2xl border border-slate-200 flex items-center justify-center text-slate-600"><Send size={20} /></button>
        </div>
      </div>
    </UserLayout>
  );
};

export default ProductDetail;

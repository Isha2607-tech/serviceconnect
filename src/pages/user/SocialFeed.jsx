import React from 'react';
import UserLayout from '../../layouts/UserLayout';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, ShieldCheck, Zap, Sparkles } from 'lucide-react';

const FEED_ITEMS = [
  {
    id: 1,
    vendor: 'Elegant Interiors',
    avatar: 'EI',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600',
    caption: 'Modern luxury living room transformation in Bandra. We used warm tones and minimal furniture to create space. ✨ #interiordesign #mumbaihomes',
    likes: '1.2k',
    comments: '88',
    time: '2 hours ago',
    verified: true
  },
  {
    id: 2,
    vendor: 'Pro Auto Detailing',
    avatar: 'PA',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d59085?auto=format&fit=crop&q=80&w=600',
    caption: 'Ceramic coating session for this beauty! Total protection from dust and UV. Book your slot today for 20% off. #carcare #detailing #mumbai',
    likes: '850',
    comments: '42',
    time: '4 hours ago',
    verified: true
  },
  {
    id: 3,
    vendor: 'Green Roots Landscaping',
    avatar: 'GR',
    image: 'https://images.unsplash.com/photo-1558905612-1d54020a101b?auto=format&fit=crop&q=80&w=600',
    caption: 'Vertical garden installation for a compact balcony in Powai. Nature meets city living. 🌿 #verticalgarden #powai #greenliving',
    likes: '420',
    comments: '15',
    time: '1 day ago',
    verified: false
  }
];

const VENDOR_STORIES = [
  { name: 'Luxe Salon', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=150' },
  { name: 'Apex Car Detailing', image: 'https://images.unsplash.com/photo-1507133366044-c99f27311516?auto=format&fit=crop&q=80&w=150' },
  { name: 'Pet Paradise', image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=150' },
  { name: 'Gourmet Kitchen', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=150' },
  { name: 'Inner Peace Yoga', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=150' },
  { name: 'Spark Cleaners', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=150' },
  { name: 'Modern Interiors', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=150' }
];

const SocialFeed = () => {
  return (
    <UserLayout>
       <div className="max-w-7xl mx-auto px-4 md:px-6 pt-24 md:pt-12 pb-12 flex flex-col lg:flex-row gap-12">
          {/* Main Feed */}
          <div className="flex-1 max-w-2xl mx-auto w-full space-y-8">
            <div className="flex items-center justify-between mb-6 px-1">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 tracking-tight">Social Discovery</h2>
              <div className="flex gap-2">
                <Badge variant="primary">Trending</Badge>
              </div>
            </div>

            {/* Stories/Vendor Shorts Row */}
            <div className="mb-10 -mx-4 md:mx-0 overflow-x-auto no-scrollbar scroll-smooth flex items-center gap-5 px-4 md:px-0">
               {VENDOR_STORIES.map((v, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer shrink-0">
                     <div className="w-20 h-20 rounded-3xl p-1 border-2 border-primary-500 bg-white shadow-lg active:scale-95 transition-transform">
                        <div className="w-full h-full rounded-2xl bg-slate-100 overflow-hidden relative">
                           <img 
                              src={v.image} 
                              alt={v.name} 
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                           />
                           <div className="absolute inset-0 bg-primary-600/10 mix-blend-overlay"></div>
                        </div>
                     </div>
                     <span className="text-[10px] font-bold text-slate-700 max-w-[80px] break-words text-center leading-tight">{v.name}</span>
                  </div>
               ))}
            </div>

             {FEED_ITEMS.map((post) => (
                <Card key={post.id} className="overflow-hidden border-slate-100 shadow-sm md:shadow-md -mx-4 md:mx-0 rounded-none md:rounded-3xl mb-8 md:mb-12">
                   {/* Post Header */}
                   <div className="p-3 md:p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-primary-600 flex items-center justify-center text-white font-bold text-xs md:text-sm border-2 border-primary-50">
                            {post.avatar}
                         </div>
                         <div>
                            <div className="flex items-center gap-1.5">
                               <span className="font-bold text-sm md:text-base text-slate-900 leading-none">{post.vendor}</span>
                               {post.verified && <ShieldCheck size={14} className="text-primary-600" />}
                            </div>
                            <span className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{post.time}</span>
                         </div>
                      </div>
                      <button className="p-2 text-slate-400 hover:text-slate-600 rounded-lg">
                         <MoreHorizontal size={20} />
                      </button>
                   </div>

                   {/* Post Image */}
                   <div className="aspect-square bg-slate-50 overflow-hidden relative group">
                      <img src={post.image} className="w-full h-full object-cover" />
                   </div>

                   {/* Post Actions */}
                   <div className="p-4">
                      <div className="flex items-center justify-between mb-3 md:mb-4">
                         <div className="flex items-center gap-5">
                            <button className="flex items-center gap-1.5 text-slate-700">
                               <Heart size={26} strokeWidth={2} />
                               <span className="text-xs font-bold">{post.likes}</span>
                            </button>
                            <button className="flex items-center gap-1.5 text-slate-700">
                               <MessageCircle size={26} strokeWidth={2} />
                               <span className="text-xs font-bold">{post.comments}</span>
                            </button>
                            <button className="text-slate-700">
                               <Send size={26} strokeWidth={2} />
                            </button>
                         </div>
                         <button className="text-slate-700">
                            <Bookmark size={26} strokeWidth={2} />
                         </button>
                      </div>
                      
                      <div className="space-y-1">
                         <p className="text-sm text-slate-700 leading-relaxed line-clamp-2 md:line-clamp-none">
                            <span className="font-bold mr-2 text-slate-900">{post.vendor}</span>
                            {post.caption}
                         </p>
                      </div>
                      
                      <button className="mt-5 w-full py-4 bg-slate-50 border border-slate-100 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-slate-500 active:bg-primary-50 active:text-primary-600 transition-all font-display">
                         Visit Business Profile
                      </button>
                   </div>
                </Card>
             ))}
          </div>

          {/* Right Sidebar - Trending */}
          <div className="hidden lg:block w-80 space-y-8">
             <Card className="p-6">
                <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                   <Sparkles size={18} className="text-primary-600" />
                   Featured Offers
                </h4>
                <div className="space-y-4">
                   {[1, 2].map((i) => (
                      <div key={i} className="group cursor-pointer">
                         <div className="h-32 bg-slate-100 rounded-2xl mb-3 overflow-hidden relative">
                            <img src={i === 1 ? 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=300' : 'https://images.unsplash.com/photo-1517646287270-a5a5cc916910?auto=format&fit=crop&q=80&w=300'} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                            <div className="absolute top-2 right-2 bg-accent-600 text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                               30% OFF
                            </div>
                         </div>
                         <h5 className="font-bold text-sm text-slate-900 leading-tight mb-1 group-hover:text-primary-600 transition-colors">
                            {i === 1 ? 'Summer AC Servicing Pack' : 'Festive Home Deep Cleaning'}
                         </h5>
                         <p className="text-[10px] font-bold text-slate-400 uppercase">Valid for 2 days</p>
                      </div>
                   ))}
                </div>
             </Card>

             <Card className="p-6 bg-primary-600 text-white overflow-hidden relative">
                <div className="relative z-10">
                   <Zap size={32} fill="currentColor" className="mb-4" />
                   <h4 className="text-xl font-bold mb-2">Grow Your Business</h4>
                   <p className="text-sm text-primary-100 mb-6">Promote your work samples in the social feed today.</p>
                   <button className="w-full py-3 bg-white text-primary-600 font-bold rounded-xl text-sm shadow-xl">Promote Post</button>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
             </Card>
          </div>
       </div>
    </UserLayout>
  );
};

export default SocialFeed;

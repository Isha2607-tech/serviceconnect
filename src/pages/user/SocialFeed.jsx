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

const SocialFeed = () => {
  return (
    <UserLayout>
       <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
          {/* Main Feed */}
          <div className="flex-1 max-w-2xl mx-auto space-y-10">
             <div className="flex items-center justify-between mb-8">
               <h2 className="text-3xl font-display font-bold text-slate-900">Social Discovery</h2>
               <div className="flex gap-2">
                  <Badge variant="primary">Trending</Badge>
                  <Badge variant="neutral">New</Badge>
               </div>
             </div>

             {FEED_ITEMS.map((post) => (
                <Card key={post.id} className="overflow-hidden border-slate-200">
                   {/* Post Header */}
                   <div className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center text-white font-bold text-sm border-2 border-primary-50">
                            {post.avatar}
                         </div>
                         <div>
                            <div className="flex items-center gap-1.5">
                               <span className="font-bold text-slate-900 leading-none">{post.vendor}</span>
                               {post.verified && <ShieldCheck size={14} className="text-primary-600" />}
                            </div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{post.time}</span>
                         </div>
                      </div>
                      <button className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
                         <MoreHorizontal size={20} />
                      </button>
                   </div>

                   {/* Post Image */}
                   <div className="aspect-square bg-slate-100 overflow-hidden relative group">
                      <img src={post.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 transition-transform duration-300">
                        <button className="p-3 bg-white/20 backdrop-blur-md rounded-2xl text-white hover:bg-white hover:text-primary-600 transition-all shadow-xl">
                           <Bookmark size={20} />
                        </button>
                      </div>
                   </div>

                   {/* Post Actions */}
                   <div className="p-4">
                      <div className="flex items-center justify-between mb-4">
                         <div className="flex items-center gap-4">
                            <button className="flex items-center gap-1.5 text-slate-600 hover:text-accent-500 transition-colors">
                               <Heart size={24} />
                               <span className="text-sm font-bold">{post.likes}</span>
                            </button>
                            <button className="flex items-center gap-1.5 text-slate-600 hover:text-primary-600 transition-colors">
                               <MessageCircle size={24} />
                               <span className="text-sm font-bold">{post.comments}</span>
                            </button>
                            <button className="text-slate-600 hover:text-primary-600 transition-colors">
                               <Send size={24} />
                            </button>
                         </div>
                         <button className="text-slate-600 hover:text-primary-600 transition-colors">
                            <Bookmark size={24} />
                         </button>
                      </div>
                      
                      <div className="space-y-2">
                         <p className="text-sm text-slate-700 leading-relaxed">
                            <span className="font-bold mr-2 text-slate-900">{post.vendor}</span>
                            {post.caption}
                         </p>
                      </div>
                      
                      <button className="mt-6 w-full py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold uppercase tracking-widest text-slate-500 hover:bg-primary-50 hover:text-primary-600 transition-all">
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

import React from 'react';
import { Search, MapPin, Sparkles, Star, ShieldCheck, Zap, ArrowRight, Utensils, Hotel, Scissors, Sofa, Heart, GraduationCap, Key, Building2, UserCog, Dog, Bed, Store, Activity, Dumbbell, Banknote, Calendar, CarFront, Truck, Send, Menu } from 'lucide-react';
import { cn } from '../../utils/cn';
import UserLayout from '../../layouts/UserLayout';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import heroBg from '../../assets/homepage.jpg';

const CATEGORIES = [
  { id: 1, name: 'Restaurants', icon: Utensils, color: 'text-orange-500 bg-orange-50' },
  { id: 2, name: 'Hotels', icon: Hotel, color: 'text-blue-500 bg-blue-50' },
  { id: 3, name: 'Beauty Spa', icon: Scissors, color: 'text-pink-500 bg-pink-50' },
  { id: 4, name: 'Home Decor', icon: Sofa, color: 'text-indigo-500 bg-indigo-50' },
  { id: 5, name: 'Wedding Planning', icon: Heart, color: 'text-rose-500 bg-rose-50' },
  { id: 6, name: 'Education', icon: GraduationCap, color: 'text-emerald-500 bg-emerald-50' },
  { id: 7, name: 'Rent & Hire', icon: Key, color: 'text-amber-500 bg-amber-50' },
  { id: 8, name: 'Hospitals', icon: Building2, color: 'text-red-500 bg-red-50' },
  { id: 9, name: 'Contractors', icon: UserCog, color: 'text-slate-600 bg-slate-100' },
  { id: 10, name: 'Pet Shops', icon: Dog, color: 'text-brown-500 bg-orange-100' },
  { id: 11, name: 'PG/Hostels', icon: Bed, color: 'text-cyan-500 bg-cyan-50' },
  { id: 12, name: 'Estate Agent', icon: Store, color: 'text-violet-500 bg-violet-50' },
  { id: 13, name: 'Dentists', icon: Activity, color: 'text-teal-500 bg-teal-50' },
  { id: 14, name: 'Gym', icon: Dumbbell, color: 'text-slate-900 bg-slate-200' },
  { id: 15, name: 'Loans', icon: Banknote, color: 'text-emerald-600 bg-emerald-100' },
  { id: 16, name: 'Event Organisers', icon: Calendar, color: 'text-purple-500 bg-purple-50' },
  { id: 17, name: 'Driving Schools', icon: CarFront, color: 'text-sky-500 bg-sky-50' },
  { id: 18, name: 'Packers & Movers', icon: Truck, color: 'text-amber-600 bg-amber-100' },
  { id: 19, name: 'Courier Service', icon: Send, color: 'text-blue-600 bg-blue-100' },
  { id: 20, name: 'Popular Categories', icon: Menu, color: 'text-primary-600 bg-primary-50', isMenu: true },
];

const FEATURED_VENDORS = [
  { id: 1, name: 'AquaSmooth Plumbing', rating: 4.9, reviews: 1240, type: 'Premium', verified: true, image: 'https://images.unsplash.com/photo-1581578731522-7411bc4c8038?auto=format&fit=crop&q=80&w=400' },
  { id: 2, name: 'Apex Car Care', rating: 4.8, reviews: 3100, type: 'Featured', verified: true, image: 'https://images.unsplash.com/photo-1530046339160-ce3e5b0c7a2f?auto=format&fit=crop&q=80&w=400' },
  { id: 3, name: 'Zenith Home Spa', rating: 4.7, reviews: 890, type: 'Promoted', verified: false, image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=400' },
  { id: 4, name: 'Glow Dental Clinic', rating: 5.0, reviews: 450, type: 'Top Rated', verified: true, image: 'https://images.unsplash.com/photo-1629909613654-28717ee44bb6?auto=format&fit=crop&q=80&w=400' },
];

const Home = () => {
  return (
    <UserLayout>
      {/* Hero Section */}
      <section 
        className="relative overflow-hidden pt-20 pb-32 px-6 min-h-[80vh] flex items-center justify-center border-b border-slate-100 bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(32, 89, 78, 0.1), rgba(255, 255, 255, 0.6), white), url(${heroBg})` }}
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <Badge variant="primary" className="mb-6 backdrop-blur-md bg-white/50 border-primary-200 text-primary-700 animate-bounce">
            <Sparkles size={14} className="mr-1 inline" />
            Empowering over 1M+ small businesses globally
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight max-w-4xl mb-8">
            Find the Best <span className="text-primary-600 relative">
              Services
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary-300" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span> Near You
          </h1>
          
          <p className="text-lg text-slate-500 max-w-2xl mb-12">
            Instantly discover verified vendors, compare prices, and book the most trusted experts for your needs with AI-powered search.
          </p>

          {/* AI Search Box */}
          <div className="w-full max-w-3xl bg-white p-2 rounded-3xl shadow-2xl border border-slate-100 flex flex-col md:flex-row items-center gap-2">
            <div className="flex-1 flex items-center gap-3 px-4 w-full">
              <Search className="text-primary-500 flex-shrink-0" size={24} />
              <input 
                type="text" 
                placeholder="Ex. 'Best AC repair in Mumbai' or 'Electricians near me'"
                className="w-full py-4 text-lg border-none focus:ring-0 placeholder:text-slate-400 font-medium"
              />
            </div>
            <div className="hidden md:block w-px h-10 bg-slate-100 mx-2"></div>
            <div className="flex-shrink-0 flex items-center gap-3 px-4 w-full md:w-auto">
              <MapPin className="text-slate-400 flex-shrink-0" size={20} />
              <input 
                type="text" 
                placeholder="Current Location"
                className="w-full py-4 border-none focus:ring-0 text-slate-600 font-semibold"
              />
            </div>
            <Button size="lg" className="w-full md:w-auto rounded-2xl shadow-xl shadow-primary-500/30">
              Discover Now
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-emerald-500" />
              Verified Experts
            </div>
            <div className="flex items-center gap-2">
              <Zap size={18} className="text-amber-500" />
              Instant Booking
            </div>
            <div className="flex items-center gap-2">
              <Star size={18} className="text-primary-500" />
              4.8/5 Avg Rating
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Explore Popular Categories</h2>
            <p className="text-slate-500">Fast tracking your search for local experts</p>
          </div>
          <Button variant="ghost" className="hidden sm:flex items-center gap-2 text-primary-600 font-bold">
            See All Categories <ArrowRight size={18} />
          </Button>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-10 gap-x-4 gap-y-10">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="flex flex-col items-center group cursor-pointer">
              <div className={cn(
                "w-16 h-16 rounded-2xl mb-3 flex items-center justify-center transition-all duration-300 border border-slate-100 shadow-sm group-hover:shadow-md group-hover:-translate-y-1",
                cat.color,
                cat.isMenu && "bg-primary-600 text-white border-primary-600 shadow-lg shadow-primary-500/20"
              )}>
                <cat.icon size={cat.isMenu ? 28 : 24} />
              </div>
              <span className="text-[11px] md:text-xs font-bold text-slate-700 text-center leading-tight transition-colors group-hover:text-primary-600">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Vendors */}
      <section className="bg-slate-100/50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Handpicked Top Rated Experts</h2>
            <p className="text-slate-500 text-lg">We only feature vendors with proven track records and high customer satisfaction.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURED_VENDORS.map((vendor) => (
              <Card key={vendor.id} className="overflow-hidden group flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img src={vendor.image} alt={vendor.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4">
                    <Badge variant={vendor.type === 'Premium' ? 'primary' : 'neutral'} className="shadow-lg backdrop-blur-md">
                      {vendor.type}
                    </Badge>
                  </div>
                  {vendor.verified && (
                    <div className="absolute bottom-4 right-4 bg-white p-1 rounded-full shadow-lg">
                      <ShieldCheck size={20} className="text-primary-600" />
                    </div>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-1 text-amber-500 mb-2">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm font-bold text-slate-900">{vendor.rating}</span>
                    <span className="text-xs text-slate-400 font-medium ml-1">({vendor.reviews} reviews)</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors cursor-pointer">{vendor.name}</h4>
                  <p className="text-sm text-slate-400 font-medium mb-6">Expert plumbing and sanitation solutions across Mumbai region.</p>
                  <Button variant="outline" className="w-full overflow-hidden group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-300">
                    Get Quote
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
             <Button variant="secondary" className="px-10 rounded-2xl font-bold bg-white shadow-xl shadow-slate-200">
               Load More Verified Vendors
             </Button>
          </div>
        </div>
      </section>

      {/* Social Feed Preview Segment */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          <div className="lg:col-span-1">
            <Badge variant="primary" className="mb-4">Social Discovery</Badge>
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6 leading-tight">
              See What's Trending in Your Community
            </h2>
            <p className="text-slate-500 text-lg mb-8">
              Stay updated with the latest service works, tips, and transformations posted by vendors near you. Like, comment, and save your favorites!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">Real Work Samples</h5>
                  <p className="text-sm text-slate-500">Unfiltered photos and videos from actual service jobs.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
                  <Star size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">Community Reviews</h5>
                  <p className="text-sm text-slate-500">Read what your neighbors are saying about local vendors.</p>
                </div>
              </div>
            </div>
            <Button size="lg" className="mt-10 rounded-2xl w-full sm:w-auto">Open Social Feed</Button>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 p-1 bg-slate-200 rounded-3xl">
             <Card className="aspect-[4/5] bg-cover bg-center rounded-2xl relative overflow-hidden" 
               style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1595206133361-b1fe343e5e23?auto=format&fit=crop&q=80&w=400")' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
                    <span className="text-white text-sm font-bold">Luxe Interior Studio</span>
                  </div>
                  <p className="text-white/80 text-sm line-clamp-2">Just finished this beautiful minimalist living room transform in Goregaon. #interiordesign</p>
                </div>
             </Card>
             <Card className="aspect-[4/5] bg-cover bg-center rounded-2xl relative overflow-hidden hidden sm:block mt-6" 
               style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1528666336021-99c0d48149e3?auto=format&fit=crop&q=80&w=400")' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
                    <span className="text-white text-sm font-bold">AutoShine Pros</span>
                  </div>
                  <p className="text-white/80 text-sm line-clamp-2">Ceramic coating done for this beast! ✨ #carcleaning #mumbai</p>
                </div>
             </Card>
          </div>
        </div>
      </section>
    </UserLayout>
  );
};

export default Home;

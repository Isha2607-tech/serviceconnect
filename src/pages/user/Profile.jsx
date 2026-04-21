import React from 'react';
import UserLayout from '../../layouts/UserLayout';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { User, Mail, Phone, MapPin, Settings, ChevronRight, ShoppingBag, Heart, Star, LogOut, Camera, ShieldCheck } from 'lucide-react';
import { cn } from '../../utils/cn';

const Profile = () => {
  const user = {
    name: 'Ishaan Tech',
    email: 'ishaan@tech.com',
    phone: '+91 9876543210',
    location: 'Mumbai, Maharashtra',
    memberSince: 'April 2024',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200'
  };

  const menuItems = [
    { icon: ShoppingBag, label: 'My Bookings', count: 12, color: 'bg-blue-50 text-blue-600' },
    { icon: Heart, label: 'Saved Vendors', count: 45, color: 'bg-rose-50 text-rose-600' },
    { icon: Star, label: 'Reviews', count: 8, color: 'bg-amber-50 text-amber-600' },
  ];

  const infoFields = [
    { icon: User, label: 'Full Name', value: user.name },
    { icon: Mail, label: 'Email Address', value: user.email },
    { icon: Phone, label: 'Phone Number', value: user.phone },
    { icon: MapPin, label: 'Default Location', value: user.location },
  ];

  return (
    <UserLayout>
      <div className="min-h-screen pb-20 md:pb-10">
        {/* Header/Cover */}
        <div className="h-48 md:h-64 bg-gradient-to-r from-primary-600 to-primary-400 relative">
          <div className="absolute inset-0 bg-black/10 opacity-50"></div>
          <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-xl text-white hover:bg-white/40 transition-colors">
            <Camera size={20} />
          </button>
        </div>

        <div className="max-w-4xl mx-auto px-4 -mt-16 relative z-10">
          {/* Main Profile Info */}
          <Card className="p-6 md:p-8 mb-6 border-slate-100 shadow-xl shadow-slate-200/50">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
              <div className="relative group">
                <div className="w-32 h-32 rounded-3xl overflow-hidden border-4 border-white shadow-2xl relative">
                  <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <Camera size={24} className="text-white" />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-emerald-500 p-2 rounded-xl text-white border-4 border-white">
                  <ShieldCheck size={16} />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                  <h1 className="text-3xl font-display font-bold text-slate-900">{user.name}</h1>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-[10px] font-bold uppercase tracking-wider">Verified User</span>
                </div>
                <p className="text-slate-500 font-medium mb-4">ServiceConnect member since {user.memberSince}</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  {menuItems.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center md:items-start">
                      <div className={cn("px-4 py-2 rounded-xl flex items-center gap-3", item.color)}>
                        <item.icon size={18} />
                        <span className="font-bold text-sm tracking-tight">{item.count} {item.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden md:block">
                 <Button className="rounded-xl px-8 py-3">Edit Profile</Button>
              </div>
            </div>

            {/* Profile Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 pt-8 border-t border-slate-50">
              {infoFields.map((field, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 shrink-0">
                    <field.icon size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">{field.label}</span>
                    <span className="text-sm font-bold text-slate-800">{field.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Actions */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 px-1">Account & Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-primary-200 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600">
                    <Settings size={20} />
                  </div>
                  <span className="font-bold text-slate-700">General Settings</span>
                </div>
                <ChevronRight size={18} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-primary-200 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white">
                    <LogOut size={20} />
                  </div>
                  <span className="font-bold text-slate-700">Logout Account</span>
                </div>
                <ChevronRight size={18} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default Profile;

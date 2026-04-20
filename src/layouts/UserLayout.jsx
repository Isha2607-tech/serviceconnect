import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import { Home, Mail, Handshake, Scan, Newspaper, MoreHorizontal } from 'lucide-react';
import { cn } from '../utils/cn';

const UserLayout = ({ children }) => {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';
  
  const bottomNavItems = [
    { icon: Home, label: 'Home', active: isHomePage },
    { icon: Mail, label: 'Leads', badge: 14 },
    { icon: Handshake, label: 'B2B' },
    { icon: Scan, label: 'Pay' },
    { icon: Newspaper, label: 'News', badge: 1 },
    { icon: MoreHorizontal, label: 'More' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className={cn(
        "pb-20 md:pb-0",
        !isHomePage && "pt-20"
      )}>
        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-2 py-2 flex items-center justify-around z-[100] shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        {bottomNavItems.map((item, idx) => (
          <button 
            key={idx} 
            className={cn(
              "flex flex-col items-center gap-1 min-w-[60px] relative transition-colors",
              item.active ? "text-primary-600" : "text-slate-400 hover:text-slate-600"
            )}
          >
            <div className="relative">
              <item.icon size={22} strokeWidth={item.active ? 2.5 : 2} />
              {item.badge && (
                <span className="absolute -top-1.5 -right-2.5 bg-accent-500 text-white text-[10px] font-bold px-1 min-w-[18px] h-[18px] rounded-full flex items-center justify-center border-2 border-white">
                  {item.badge}
                </span>
              )}
            </div>
            <span className={cn(
              "text-[10px] font-bold tracking-tight",
              item.active ? "text-primary-600" : "text-slate-500"
            )}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
      
      {/* Premium Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10 mt-20">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white">
                <span className="text-xl font-bold">S</span>
              </div>
              <span className="text-2xl font-display font-bold tracking-tight">
                Service<span className="text-primary-400">Connect</span>
              </span>
            </div>
            <p className="text-white/70 leading-relaxed">
              The ultimate marketplace to find the best local services and service providers near you. Verified, trusted, and fast.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-4 text-white/90">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Home Services</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Automotive</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Health & Wellness</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Professional Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-4 text-white/90">
              <li><a href="#" className="hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Register as Vendor</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Get App</h4>
            <div className="space-y-4">
              <div className="bg-slate-800 p-4 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-slate-700 transition-colors border border-slate-700">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <span className="text-slate-900 text-xs font-bold font-mono">App</span>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest leading-none">Download on</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </div>
              <div className="bg-slate-800 p-4 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-slate-700 transition-colors border border-slate-700">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <span className="text-slate-900 text-xs font-bold">Play</span>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest leading-none">Get it on</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 mt-20 pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm">© 2026 ServiceConnect Platform. All rights reserved.</p>
          <div className="flex gap-8 text-white/50 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UserLayout;

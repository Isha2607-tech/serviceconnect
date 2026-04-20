import React from 'react';
import Navbar from '../components/layout/Navbar';

const UserLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      
      {/* Premium Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10 mt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white">
                <span className="text-xl font-bold">S</span>
              </div>
              <span className="text-2xl font-display font-bold tracking-tight">
                Service<span className="text-primary-400">Connect</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              The ultimate marketplace to find the best local services and service providers near you. Verified, trusted, and fast.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Home Services</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Automotive</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Health & Wellness</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Professional Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Register as Vendor</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Get App</h4>
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
        
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">© 2026 ServiceConnect Platform. All rights reserved.</p>
          <div className="flex gap-8 text-slate-500 text-sm font-medium">
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

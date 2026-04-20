import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/user/Home'));
const SearchResults = lazy(() => import('./pages/user/SearchResults'));
const HotelResults = lazy(() => import('./pages/user/HotelResults'));
const HotelDetails = lazy(() => import('./pages/user/HotelDetails'));
const SocialFeed = lazy(() => import('./pages/user/SocialFeed'));
const VendorDashboard = lazy(() => import('./pages/vendor/Dashboard'));
const AdminDashboard = lazy(() => import('./pages/admin/Dashboard'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-primary-100 border-t-primary-600 rounded-full animate-spin"></div>
            <p className="text-slate-400 font-semibold animate-pulse text-sm">Perfecting your experience...</p>
          </div>
        </div>
      }>
        <Routes>
          {/* User Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<HotelResults />} />
          <Route path="/hotels/:id" element={<HotelDetails />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/vendor/:id" element={<div className="p-20 text-center">Vendor Details Page Coming Soon</div>} />
          <Route path="/social" element={<SocialFeed />} />
          <Route path="/my-requests" element={<div className="p-20 text-center">My Requests Page Coming Soon</div>} />

          {/* Vendor/Admin Routes */}
          <Route path="/vendor-panel" element={<VendorDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          
          {/* Default Redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;

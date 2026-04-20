import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import { Users, Inbox, DollarSign, TrendingUp, ShieldCheck, AlertCircle, Map, PieChart, Activity, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';

const ADMIN_STATS = [
  { label: 'Total Leads', val: '4,281', trend: '+18%', icon: Inbox, color: 'bg-primary-100 text-primary-600' },
  { label: 'Active Vendors', val: '520', trend: '+5%', icon: Users, color: 'bg-blue-100 text-blue-600' },
  { label: 'Gross Revenue', val: '₹12.5L', trend: '+12%', icon: DollarSign, color: 'bg-emerald-100 text-emerald-600' },
  { label: 'SLA Breaches', val: '24', trend: '-10%', icon: AlertCircle, color: 'bg-accent-100 text-accent-600' },
];

const RECENT_VENDORS = [
  { id: 1, name: 'Urban Fixers', category: 'Plumbing', status: 'Pending Verification', country: 'India' },
  { id: 2, name: 'DriveReady', category: 'Auto', status: 'Active', country: 'India' },
  { id: 3, name: 'PureAqua', category: 'Cleaning', status: 'Suspended', country: 'India' },
];

const AdminDashboard = () => {
  return (
    <DashboardLayout type="admin">
      <div className="space-y-8">
        {/* Global Analytics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADMIN_STATS.map((stat, idx) => (
             <Card key={idx} className="p-6">
                <div className="flex items-center justify-between mb-4">
                   <div className={cn("p-2.5 rounded-xl", stat.color)}>
                      <stat.icon size={20} />
                   </div>
                   <Badge variant={stat.trend.startsWith('+') ? 'success' : 'danger'} className="text-[10px]">
                      {stat.trend}
                   </Badge>
                </div>
                <h3 className="text-3xl font-display font-bold text-slate-900 mb-1">{stat.val}</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
             </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* Distribution Health */}
           <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                 <h3 className="text-xl font-display font-bold text-slate-900 flex items-center gap-2">
                   <Activity size={20} className="text-primary-600" />
                   Distribution Rules Health
                 </h3>
                 <Button variant="secondary" size="sm" className="font-bold">Manage Rules</Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <Card className="p-6 bg-slate-900 text-white border-none relative overflow-hidden">
                    <div className="relative z-10">
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Lead Broadcast Mode</p>
                       <h4 className="text-xl font-bold mb-4">Active: Parallel Broadcast</h4>
                       <div className="flex items-center gap-2 mb-6">
                          <Badge className="bg-emerald-500/20 text-emerald-400 border-none">Optimal Efficiency</Badge>
                       </div>
                       <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                          <div className="text-center">
                             <div className="text-lg font-bold">84%</div>
                             <div className="text-[10px] text-slate-400 font-bold uppercase">Acceptance</div>
                          </div>
                          <div className="w-px h-8 bg-white/10"></div>
                          <div className="text-center">
                             <div className="text-lg font-bold">12s</div>
                             <div className="text-[10px] text-slate-400 font-bold uppercase">Avg Response</div>
                          </div>
                       </div>
                    </div>
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                       <Map size={80} />
                    </div>
                 </Card>

                 <Card className="p-6 border-dashed border-2 flex flex-col items-center justify-center text-center">
                    <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-4 animate-pulse">
                       <PieChart size={24} />
                    </div>
                    <h5 className="font-bold text-slate-900 mb-1">Regional Performance</h5>
                    <p className="text-xs text-slate-500 mb-4">Analyze lead heatmaps to identify service gaps.</p>
                    <Button variant="ghost" size="sm" className="text-primary-600 font-bold">View Heatmap</Button>
                 </Card>
              </div>

              <Card className="overflow-hidden">
                 <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <h4 className="font-bold text-slate-900">Pending Vendor Verifications</h4>
                    <span className="text-xs font-bold text-slate-400">12 Pending</span>
                 </div>
                 <div className="divide-y divide-slate-100">
                    {RECENT_VENDORS.map((v) => (
                       <div key={v.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                          <div className="flex items-center gap-3">
                             <div className="w-10 h-10 bg-slate-200 rounded-xl flex items-center justify-center font-bold text-slate-500">
                                {v.name[0]}
                             </div>
                             <div>
                                <div className="font-bold text-slate-900 text-sm">{v.name}</div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase">{v.category} • {v.country}</div>
                             </div>
                          </div>
                          <div className="flex items-center gap-4">
                             <Badge variant={v.status === 'Active' ? 'success' : v.status === 'Suspended' ? 'danger' : 'warning'}>
                                {v.status}
                             </Badge>
                             <button className="text-slate-400 hover:text-slate-900 transition-colors">
                                <ChevronRight size={20} />
                             </button>
                          </div>
                       </div>
                    ))}
                 </div>
                 <button className="w-full py-4 text-xs font-bold text-primary-600 bg-slate-50 hover:bg-white transition-all uppercase tracking-widest border-t border-slate-100">
                    Manage All Vendors
                 </button>
              </Card>
           </div>

           {/* Quick Operations Sidebar */}
           <div className="space-y-8">
              <Card className="p-6">
                 <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <ShieldCheck size={18} className="text-emerald-500" />
                    Security Overview
                 </h4>
                 <div className="space-y-4">
                    <div className="p-3 bg-red-50 rounded-xl border border-red-100 flex items-center gap-3">
                       <AlertCircle size={18} className="text-red-500" />
                       <div className="text-xs font-bold text-red-700">Flagged: 4 Fake Profiles detected</div>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl flex items-center gap-3 border border-slate-100">
                       <Users size={18} className="text-slate-400" />
                       <div className="text-xs font-bold text-slate-600">Pending KYC: 18 Documents</div>
                    </div>
                 </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
                 <div className="flex items-center justify-between mb-4">
                    <DollarSign size={28} className="text-white/50" />
                    <TrendingUp size={20} className="text-emerald-400" />
                 </div>
                 <h4 className="text-xl font-bold mb-1">₹8.4L Payouts</h4>
                 <p className="text-xs text-primary-200 mb-6 font-medium tracking-wide">Next cycle: April 25, 2026</p>
                 <Button className="w-full bg-white text-primary-900 hover:bg-slate-100 font-bold">Process Payouts</Button>
              </Card>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;

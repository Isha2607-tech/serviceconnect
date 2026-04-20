import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import { Inbox, Zap, TrendingUp, Clock, PhoneCall, MessageSquare, ChevronRight, Filter } from 'lucide-react';
import { cn } from '../../utils/cn';

const KPIS = [
  { label: 'New Leads', value: '12', trend: '+4 today', icon: Inbox, color: 'bg-primary-100 text-primary-600' },
  { label: 'Total Revenue', value: '₹4.2k', trend: '+12%', icon: TrendingUp, color: 'bg-emerald-100 text-emerald-600' },
  { label: 'Active Promos', value: '3', trend: '2 expiring', icon: Zap, color: 'bg-amber-100 text-amber-600' },
  { label: 'Avg. Response', value: '14m', trend: '-2m improvement', icon: Clock, color: 'bg-purple-100 text-purple-600' },
];

const RECENT_LEADS = [
  { id: 'LD-9201', user: 'Amit Sharma', service: 'AC Repair', budget: '₹500-1500', time: '10 mins ago', type: 'Instant Broadcast', status: 'Priority' },
  { id: 'LD-9202', user: 'Priya Patel', service: 'Kitchen Cleaning', budget: '₹2000+', time: '25 mins ago', type: 'Direct Quote', status: 'New' },
  { id: 'LD-9203', user: 'Rahul Varma', service: 'Deep Sanitization', budget: '₹3000', time: '1h ago', type: 'Booking', status: 'Seen' },
];

const VendorDashboard = () => {
  return (
    <DashboardLayout type="vendor">
      <div className="space-y-8">
        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {KPIS.map((kpi, idx) => (
            <Card key={idx} className="p-6 flex items-start justify-between">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{kpi.label}</p>
                <h3 className="text-3xl font-display font-bold text-slate-900 mb-1">{kpi.value}</h3>
                <p className="text-xs font-semibold text-emerald-500 flex items-center gap-1">
                  {kpi.trend}
                </p>
              </div>
              <div className={cn('p-3 rounded-xl', kpi.color)}>
                <kpi.icon size={24} />
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Lead Feed */}
          <div className="lg:col-span-2 space-y-6">
             <div className="flex items-center justify-between">
                <h3 className="text-xl font-display font-bold text-slate-900 flex items-center gap-2">
                  <Zap size={20} className="text-amber-500 fill-amber-500" />
                  Live Lead Feed
                </h3>
                <Button variant="ghost" size="sm" className="text-primary-600 font-bold">View Inbox</Button>
             </div>

             <div className="space-y-4">
                {RECENT_LEADS.map((lead) => (
                  <Card key={lead.id} className="p-5 flex items-center justify-between group cursor-pointer hover:border-primary-200">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
                        <MessageSquare size={24} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                           <span className="font-bold text-slate-900">{lead.user}</span>
                           <Badge variant={lead.status === 'Priority' ? 'danger' : 'primary'} className="scale-75">
                             {lead.status}
                           </Badge>
                        </div>
                        <p className="text-sm font-medium text-slate-500">Requested: <span className="text-slate-900">{lead.service}</span> • {lead.budget}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="text-right hidden sm:block">
                        <p className="text-xs font-bold text-slate-400 uppercase">{lead.type}</p>
                        <p className="text-xs font-semibold text-slate-900">{lead.time}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="icon" variant="secondary" className="rounded-xl border-emerald-100 hover:bg-emerald-50 text-emerald-600">
                          <PhoneCall size={18} />
                        </Button>
                        <Button size="sm" className="rounded-xl px-4">Respond</Button>
                      </div>
                    </div>
                  </Card>
                ))}
             </div>

             <Card className="p-8 text-center bg-slate-50/50 border-dashed border-2">
                <p className="text-slate-400 text-sm font-medium">Looking for more leads? Boost your profile visibility.</p>
                <Button variant="ghost" className="mt-2 text-primary-600 font-bold">View Promotion Plans</Button>
             </Card>
          </div>

          {/* Sidebar Widgets */}
          <div className="space-y-8">
             <Card className="p-6 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12">
                   <Zap size={80} className="text-primary-600 outline-none" fill="currentColor" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Upgrade to Pro</h4>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">Get 3x more leads and priority placement in category results.</p>
                <Button className="w-full shadow-lg shadow-primary-500/30">Get Started</Button>
             </Card>

             <Card className="p-6">
                <h4 className="font-bold text-slate-900 mb-6 flex items-center justify-between">
                  Recent Analytics
                  <Filter size={16} className="text-slate-400" />
                </h4>
                <div className="space-y-6">
                   {[
                     { label: 'Profile Views', val: '2.4k', perc: 85 },
                     { label: 'Call Clicks', val: '142', perc: 45 },
                     { label: 'Conversion', val: '12%', perc: 30 }
                   ].map((stat, i) => (
                     <div key={i} className="space-y-2">
                       <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                         <span className="text-slate-400">{stat.label}</span>
                         <span className="text-slate-900">{stat.val}</span>
                       </div>
                       <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                         <div className="h-full bg-primary-500 rounded-full" style={{ width: `${stat.perc}%` }}></div>
                       </div>
                     </div>
                   ))}
                </div>
             </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default VendorDashboard;

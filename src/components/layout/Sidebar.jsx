import React from 'react';
import { 
  BarChart3, 
  Inbox, 
  UserCircle, 
  Settings, 
  CreditCard, 
  Users, 
  FileText, 
  Zap,
  TrendingUp,
  LayoutDashboard,
  LogOut,
  ChevronRight
} from 'lucide-react';
import { cn } from '../../utils/cn';

const SidebarItem = ({ icon: Icon, label, active, onClick, badge }) => (
  <button
    onClick={onClick}
    className={cn(
      'w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group',
      active 
        ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25' 
        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
    )}
  >
    <div className="flex items-center gap-3">
      <Icon size={20} className={cn(active ? 'text-white' : 'text-slate-400 group-hover:text-primary-600 transition-colors')} />
      <span className="font-semibold text-sm">{label}</span>
    </div>
    {badge && (
      <span className={cn(
        'px-2 py-0.5 rounded-full text-[10px] font-bold uppercase',
        active ? 'bg-white/20 text-white' : 'bg-primary-50 text-primary-700'
      )}>
        {badge}
      </span>
    )}
    {!badge && <ChevronRight size={14} className={cn('opacity-0 group-hover:opacity-100 transition-opacity', active ? 'text-white/50' : 'text-slate-400')} />}
  </button>
);

const Sidebar = ({ type = 'vendor', activeTab = 'dashboard', setActiveTab }) => {
  const menus = {
    vendor: [
      { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
      { id: 'leads', label: 'Lead Inbox', icon: Inbox, badge: 'New' },
      { id: 'analytics', label: 'Performance', icon: BarChart3 },
      { id: 'profile', label: 'Business Profile', icon: UserCircle },
      { id: 'promotions', label: 'Promotions', icon: Zap },
      { id: 'payments', label: 'Billing/History', icon: CreditCard },
      { id: 'team', label: 'Manage Team', icon: Users },
      { id: 'reports', label: 'Daily Reports', icon: FileText },
    ],
    admin: [
      { id: 'overview', label: 'Overview', icon: TrendingUp },
      { id: 'leads_mgmt', label: 'Manage Leads', icon: Inbox },
      { id: 'vendors', label: 'Vendors Hub', icon: Users },
      { id: 'rules', label: 'Distribution Rules', icon: Settings },
      { id: 'finance', label: 'Finance Hub', icon: CreditCard },
    ]
  };

  const currentMenu = menus[type] || menus.vendor;

  return (
    <div className="w-72 h-screen fixed left-0 top-0 bg-white border-r border-slate-200 p-6 flex flex-col items-center">
      {/* Brand */}
      <div className="flex items-center gap-2 mb-10 w-full px-2">
        <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white">
          <Zap size={18} fill="currentColor" />
        </div>
        <span className="text-xl font-display font-bold tracking-tight text-slate-900">
          Admin<span className="text-primary-600">Pro</span>
        </span>
      </div>

      <nav className="flex-1 w-full space-y-1 overflow-y-auto no-scrollbar">
        {currentMenu.map((item) => (
          <SidebarItem
            key={item.id}
            {...item}
            active={activeTab === item.id}
            onClick={() => setActiveTab(item.id)}
          />
        ))}
      </nav>

      <div className="w-full pt-6 border-t border-slate-100 mt-6 space-y-2">
        <SidebarItem icon={Settings} label="System Settings" />
        <button className="flex items-center gap-3 px-4 py-3 w-full text-accent-600 hover:bg-accent-50 rounded-xl transition-colors font-semibold text-sm">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

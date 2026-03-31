import React from 'react';
import { 
  Bot, 
  Cpu, 
  Library, 
  Send, 
  Monitor, 
  ListTodo, 
  Zap, 
  Briefcase, 
  CheckSquare, 
  Shield, 
  Database, 
  Key, 
  Building2, 
  Replace, 
  LayoutDashboard
} from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, active = false }) => (
  <div className={`flex items-center gap-3 px-4 py-2 text-sm font-medium transition-all cursor-pointer ${
    active 
      ? 'text-primary bg-indigo-50 border-r-4 border-primary' 
      : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
  }`}>
    <Icon size={18} />
    <span>{label}</span>
  </div>
);

const SidebarGroup = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="px-4 mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase">
      {title}
    </h3>
    <div className="space-y-1">
      {children}
    </div>
  </div>
);

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-[64px] bottom-0 w-64 bg-white border-r border-gray-200 overflow-y-auto custom-scrollbar z-40 hidden lg:block">
      <div className="py-6">
        <SidebarGroup title="MY PROJECTS">
          <SidebarItem icon={Bot} label="Agents" />
          <SidebarItem icon={Cpu} label="AI Models" />
          <SidebarItem icon={Library} label="Library" />
        </SidebarGroup>

        <SidebarGroup title="ORCHESTRATOR">
          <SidebarItem icon={Send} label="Published" />
          <SidebarItem icon={Monitor} label="Machines" />
          <SidebarItem icon={ListTodo} label="Queues" />
          <SidebarItem icon={Zap} label="Triggers" />
          <SidebarItem icon={Briefcase} label="Jobs" />
          <SidebarItem icon={CheckSquare} label="Executions" />
          <SidebarItem icon={Shield} label="Vault" />
          <SidebarItem icon={Database} label="Knowledge Base" active={true} />
          <SidebarItem icon={Key} label="Key Store" />
        </SidebarGroup>

        <SidebarGroup title="ADMIN">
          <SidebarItem icon={Building2} label="Tenant" />
          <SidebarItem icon={Replace} label="Integrations" />
          <SidebarItem icon={LayoutDashboard} label="Health Monitoring" />
        </SidebarGroup>
      </div>
    </aside>
  );
};

export default Sidebar;

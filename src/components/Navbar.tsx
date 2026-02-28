import { Zap, LayoutDashboard, Store, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';
import type { TabType } from '../App';

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Zap },
    { id: 'market', label: 'Marketplace', icon: Store },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  ] as const;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F4F0EA] border-b-4 border-[#111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setActiveTab('home')}
          >
            <div className="w-10 h-10 bg-[#CCFF00] brutal-border flex items-center justify-center brutal-shadow-sm group-hover:bg-[#FF3366] transition-colors">
              <Zap className="w-6 h-6 text-[#111] group-hover:text-white" />
            </div>
            <span className="font-display font-black text-2xl tracking-tighter text-[#111] uppercase">
              Tro<span className="text-[#FF3366]">Energy</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-5 py-2 font-bold uppercase tracking-wide border-2 border-[#111] transition-all flex items-center gap-2 ${
                    isActive 
                      ? 'bg-[#00E5FF] shadow-[4px_4px_0px_#111] translate-x-[2px] translate-y-[2px]' 
                      : 'bg-white hover:bg-[#CCFF00] hover:shadow-[4px_4px_0px_#111] hover:-translate-x-[2px] hover:-translate-y-[2px]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Connect Wallet / Profile */}
          <div className="hidden md:flex items-center gap-4">
            <div className="text-right mr-2 bg-white border-2 border-[#111] px-3 py-1 shadow-[2px_2px_0px_#111]">
              <div className="text-[10px] text-[#111] font-mono font-bold uppercase">Balance</div>
              <div className="text-sm font-black text-[#FF3366] font-mono">2,450 kWh</div>
            </div>
            <button 
              onClick={() => setActiveTab('login')}
              className="bg-[#FF3366] hover:bg-[#111] text-white px-6 py-2 font-black uppercase tracking-wider border-2 border-[#111] brutal-shadow"
            >
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#111] p-2 border-2 border-[#111] bg-white brutal-shadow-sm"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#F4F0EA] border-b-4 border-[#111]"
        >
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-4 font-black uppercase tracking-wider border-2 border-[#111] transition-all ${
                    isActive 
                      ? 'bg-[#00E5FF] shadow-[4px_4px_0px_#111]' 
                      : 'bg-white hover:bg-[#CCFF00]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </button>
              );
            })}
            <div className="pt-4 mt-4">
              <button 
                onClick={() => {
                  setActiveTab('login');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-[#FF3366] text-white px-4 py-4 font-black uppercase tracking-wider border-2 border-[#111] brutal-shadow"
              >
                Sign In
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

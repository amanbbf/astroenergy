import { useState } from 'react';
import { motion } from 'motion/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { Battery, Zap, DollarSign, Leaf, Activity, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const data = [
  { name: 'Mon', generated: 4000, consumed: 2400, traded: 1600 },
  { name: 'Tue', generated: 3000, consumed: 1398, traded: 1602 },
  { name: 'Wed', generated: 2000, consumed: 9800, traded: -7800 },
  { name: 'Thu', generated: 2780, consumed: 3908, traded: -1128 },
  { name: 'Fri', generated: 1890, consumed: 4800, traded: -2910 },
  { name: 'Sat', generated: 2390, consumed: 3800, traded: -1410 },
  { name: 'Sun', generated: 3490, consumed: 4300, traded: -810 },
];

const StatCard = ({ title, value, unit, icon: Icon, trend, trendValue, colorClass }: any) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="bg-white border-4 border-[#111] p-6 shadow-[8px_8px_0px_#111] relative overflow-hidden group hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_#111] transition-all"
  >
    <div className={`absolute -right-6 -top-6 w-24 h-24 ${colorClass} border-4 border-[#111] rounded-full opacity-50 group-hover:scale-150 transition-transform`} />
    <div className="flex justify-between items-start mb-6 relative z-10">
      <div className={`p-3 ${colorClass} border-2 border-[#111] shadow-[4px_4px_0px_#111]`}>
        <Icon className="w-8 h-8 text-[#111]" />
      </div>
      <div className={`flex items-center gap-1 text-sm font-black uppercase border-2 border-[#111] px-2 py-1 shadow-[2px_2px_0px_#111] ${trend === 'up' ? 'bg-[#CCFF00] text-[#111]' : 'bg-[#FF3366] text-white'}`}>
        {trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
        {trendValue}
      </div>
    </div>
    <div className="relative z-10">
      <h3 className="text-[#111] text-sm font-black uppercase tracking-widest mb-2">{title}</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-4xl font-black text-[#111]">{value}</span>
        <span className="text-lg text-[#FF3366] font-mono font-bold">{unit}</span>
      </div>
    </div>
  </motion.div>
);

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h2 className="text-5xl font-black uppercase tracking-tighter text-[#111] bg-white inline-block px-4 py-2 border-4 border-[#111] shadow-[6px_6px_0px_#111] -rotate-1 mb-4">Portfolio</h2>
          <p className="text-xl font-bold text-[#111] bg-white inline-block px-3 py-1 border-2 border-[#111]">Track your green energy generation, consumption, and trades.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-6 py-3 bg-white text-[#111] border-4 border-[#111] font-black uppercase tracking-wider hover:bg-[#CCFF00] transition-colors shadow-[4px_4px_0px_#111]">
            Withdraw
          </button>
          <button className="px-6 py-3 bg-[#FF3366] text-white border-4 border-[#111] font-black uppercase tracking-wider hover:bg-[#111] transition-colors shadow-[4px_4px_0px_#111]">
            Sell Energy
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Balance" 
          value="$1,245" 
          unit=".80" 
          icon={DollarSign} 
          trend="up" 
          trendValue="+12.5%" 
          colorClass="bg-[#CCFF00]" 
        />
        <StatCard 
          title="Energy Generated" 
          value="450" 
          unit="kWh" 
          icon={Zap} 
          trend="up" 
          trendValue="+5.2%" 
          colorClass="bg-[#00E5FF]" 
        />
        <StatCard 
          title="Energy Consumed" 
          value="320" 
          unit="kWh" 
          icon={Battery} 
          trend="down" 
          trendValue="-2.1%" 
          colorClass="bg-[#FF3366]" 
        />
        <StatCard 
          title="Carbon Offset" 
          value="1.2" 
          unit="Tons" 
          icon={Leaf} 
          trend="up" 
          trendValue="+18.4%" 
          colorClass="bg-[#B026FF]" 
        />
      </div>

      {/* Charts & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white border-4 border-[#111] shadow-[12px_12px_0px_#111] p-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black uppercase tracking-wider text-[#111] flex items-center gap-3">
              <Activity className="w-8 h-8 text-[#FF3366]" />
              Energy Flow
            </h3>
            <select className="bg-white border-4 border-[#111] px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#111] focus:outline-none shadow-[4px_4px_0px_#111]">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="0" stroke="#111" vertical={true} />
                <XAxis dataKey="name" stroke="#111" fontSize={14} fontWeight="bold" tickLine={false} axisLine={{ strokeWidth: 4 }} />
                <YAxis stroke="#111" fontSize={14} fontWeight="bold" tickLine={false} axisLine={{ strokeWidth: 4 }} tickFormatter={(value) => `${value/1000}k`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '4px solid #111', boxShadow: '6px 6px 0px #111', borderRadius: '0', color: '#111', fontWeight: 'bold' }}
                  itemStyle={{ color: '#111', fontWeight: '900' }}
                />
                <Area type="step" dataKey="generated" stroke="#111" strokeWidth={4} fillOpacity={1} fill="#CCFF00" />
                <Area type="step" dataKey="consumed" stroke="#111" strokeWidth={4} fillOpacity={1} fill="#00E5FF" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white border-4 border-[#111] shadow-[12px_12px_0px_#111] p-6 flex flex-col">
          <h3 className="text-2xl font-black uppercase tracking-wider text-[#111] mb-6">Recent Trades</h3>
          <div className="flex-1 overflow-y-auto pr-2 space-y-4">
            {[
              { id: 1, type: 'sell', amount: '50 kWh', price: '+$6.00', to: 'Grid', time: '2h ago' },
              { id: 2, type: 'buy', amount: '120 kWh', price: '-$10.80', to: 'SolarFarm Alpha', time: '5h ago' },
              { id: 3, type: 'sell', amount: '30 kWh', price: '+$3.60', to: 'Grid', time: '1d ago' },
              { id: 4, type: 'buy', amount: '200 kWh', price: '-$18.00', to: 'WindValley Co.', time: '2d ago' },
              { id: 5, type: 'sell', amount: '80 kWh', price: '+$9.60', to: 'Grid', time: '3d ago' },
            ].map((tx) => (
              <div key={tx.id} className="flex items-center justify-between p-4 bg-[#F4F0EA] border-2 border-[#111] hover:bg-[#CCFF00] transition-colors cursor-pointer shadow-[2px_2px_0px_#111]">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 border-2 border-[#111] flex items-center justify-center shadow-[2px_2px_0px_#111] ${tx.type === 'sell' ? 'bg-[#CCFF00] text-[#111]' : 'bg-[#00E5FF] text-[#111]'}`}>
                    {tx.type === 'sell' ? <ArrowUpRight className="w-5 h-5" /> : <ArrowDownRight className="w-5 h-5" />}
                  </div>
                  <div>
                    <div className="text-sm font-black uppercase text-[#111]">{tx.type === 'sell' ? 'Sold to' : 'Bought from'} {tx.to}</div>
                    <div className="text-xs font-bold text-[#111] opacity-70">{tx.time}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-base font-mono font-black ${tx.type === 'sell' ? 'text-[#FF3366]' : 'text-[#111]'}`}>{tx.price}</div>
                  <div className="text-xs font-bold text-[#111] font-mono">{tx.amount}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 bg-[#111] text-white font-black uppercase tracking-wider border-2 border-[#111] hover:bg-[#FF3366] transition-colors shadow-[4px_4px_0px_#111]">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}

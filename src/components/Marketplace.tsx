import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, Zap, Sun, Wind, Leaf, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const MOCK_LISTINGS = [
  { id: '1', producer: 'SolarFarm Alpha', type: 'solar', capacity: '500 kWh', price: '0.12', location: 'California, US', rating: 4.9, status: 'active' },
  { id: '2', producer: 'WindValley Co.', type: 'wind', capacity: '1.2 MWh', price: '0.09', location: 'Texas, US', rating: 4.8, status: 'active' },
  { id: '3', producer: 'BioGreen Energy', type: 'biogas', capacity: '250 kWh', price: '0.15', location: 'Oregon, US', rating: 4.7, status: 'active' },
  { id: '4', producer: 'SunnyRoof Home', type: 'solar', capacity: '15 kWh', price: '0.11', location: 'Nevada, US', rating: 5.0, status: 'active' },
  { id: '5', producer: 'Coastal Wind', type: 'wind', capacity: '800 kWh', price: '0.10', location: 'Washington, US', rating: 4.6, status: 'active' },
  { id: '6', producer: 'EcoWaste Plant', type: 'biogas', capacity: '400 kWh', price: '0.14', location: 'Colorado, US', rating: 4.8, status: 'active' },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'solar': return <Sun className="w-6 h-6 text-[#111]" />;
    case 'wind': return <Wind className="w-6 h-6 text-[#111]" />;
    case 'biogas': return <Leaf className="w-6 h-6 text-white" />;
    default: return <Zap className="w-6 h-6 text-[#111]" />;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'solar': return 'bg-[#CCFF00] text-[#111]';
    case 'wind': return 'bg-[#00E5FF] text-[#111]';
    case 'biogas': return 'bg-[#B026FF] text-white';
    default: return 'bg-white text-[#111]';
  }
};

export default function Marketplace() {
  const [filter, setFilter] = useState('all');

  const filteredListings = filter === 'all' 
    ? MOCK_LISTINGS 
    : MOCK_LISTINGS.filter(l => l.type === filter);

  return (
    <div className="space-y-8">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-5xl font-black uppercase tracking-tighter text-[#111] bg-white inline-block px-4 py-2 border-4 border-[#111] shadow-[6px_6px_0px_#111] -rotate-1">Live Market</h2>
            <div className="flex items-center gap-2 px-3 py-2 bg-[#FF3366] border-2 border-[#111] shadow-[4px_4px_0px_#111] rotate-2">
              <span className="animate-pulse w-3 h-3 bg-white rounded-full border border-[#111]"></span>
              <span className="text-xs font-black text-white uppercase tracking-widest">Live</span>
            </div>
          </div>
          <p className="text-xl font-bold text-[#111] bg-white inline-block px-3 py-1 border-2 border-[#111]">Buy green energy directly from local producers.</p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#111]" />
            <input 
              type="text" 
              placeholder="Search producers..." 
              className="w-full bg-white border-4 border-[#111] py-3 pl-12 pr-4 text-base font-bold text-[#111] focus:outline-none shadow-[4px_4px_0px_#111] placeholder:text-zinc-400"
            />
          </div>
          <button className="p-3 bg-white border-4 border-[#111] text-[#111] hover:bg-[#CCFF00] transition-colors shadow-[4px_4px_0px_#111]">
            <Filter className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {['all', 'solar', 'wind', 'biogas'].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-6 py-3 text-sm font-black uppercase tracking-wider border-4 border-[#111] transition-all ${
              filter === type 
                ? 'bg-[#111] text-white shadow-[4px_4px_0px_#FF3366] translate-x-[-2px] translate-y-[-2px]' 
                : 'bg-white text-[#111] hover:bg-[#CCFF00] shadow-[4px_4px_0px_#111]'
            }`}
          >
            {type === 'all' ? 'All Sources' : type}
          </button>
        ))}
      </div>

      {/* Data Grid */}
      <div className="bg-white border-4 border-[#111] shadow-[12px_12px_0px_#111] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-4 border-[#111] bg-[#F4F0EA]">
                <th className="p-5 text-sm font-black text-[#111] uppercase tracking-widest border-r-4 border-[#111]">Producer</th>
                <th className="p-5 text-sm font-black text-[#111] uppercase tracking-widest border-r-4 border-[#111]">Source</th>
                <th className="p-5 text-sm font-black text-[#111] uppercase tracking-widest border-r-4 border-[#111]">Available</th>
                <th className="p-5 text-sm font-black text-[#111] uppercase tracking-widest border-r-4 border-[#111]">Price/kWh</th>
                <th className="p-5 text-sm font-black text-[#111] uppercase tracking-widest border-r-4 border-[#111]">Location</th>
                <th className="p-5 text-sm font-black text-[#111] uppercase tracking-widest text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y-4 divide-[#111]">
              {filteredListings.map((listing, i) => (
                <motion.tr 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={listing.id} 
                  className="group hover:bg-[#CCFF00] transition-colors cursor-pointer"
                >
                  <td className="p-5 border-r-4 border-[#111]">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 border-2 border-[#111] flex items-center justify-center shadow-[2px_2px_0px_#111] ${getTypeColor(listing.type)}`}>
                        {getTypeIcon(listing.type)}
                      </div>
                      <div>
                        <div className="font-bold text-[#111] text-lg flex items-center gap-2">
                          {listing.producer}
                          <CheckCircle2 className="w-4 h-4 text-[#FF3366]" />
                        </div>
                        <div className="text-sm font-bold text-[#111] bg-white inline-block px-1 border border-[#111] mt-1">
                          ★ {listing.rating} Rating
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-5 border-r-4 border-[#111]">
                    <span className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-black uppercase border-2 border-[#111] shadow-[2px_2px_0px_#111] ${getTypeColor(listing.type)}`}>
                      {listing.type}
                    </span>
                  </td>
                  <td className="p-5 font-mono font-bold text-lg text-[#111] border-r-4 border-[#111]">{listing.capacity}</td>
                  <td className="p-5 font-mono font-black text-xl text-[#00E5FF] border-r-4 border-[#111] drop-shadow-[1px_1px_0px_#111]">${listing.price}</td>
                  <td className="p-5 text-base font-bold text-[#111] border-r-4 border-[#111]">{listing.location}</td>
                  <td className="p-5 text-center">
                    <button className="inline-flex items-center justify-center w-10 h-10 bg-[#FF3366] text-white border-2 border-[#111] brutal-shadow group-hover:bg-white group-hover:text-[#111]">
                      <ArrowUpRight className="w-6 h-6" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

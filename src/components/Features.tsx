import { motion } from 'motion/react';
import { Sun, Wind, Leaf, Home, TrendingUp, Zap, Globe, Users } from 'lucide-react';

const ROLES = [
  { icon: Sun, title: 'Solar Owners', desc: 'Sell excess rooftop solar energy.', color: 'bg-[#CCFF00]', text: 'text-[#111]' },
  { icon: Leaf, title: 'Biogas Plants', desc: 'Monetize organic waste energy.', color: 'bg-[#B026FF]', text: 'text-white' },
  { icon: Wind, title: 'Wind Farms', desc: 'Distribute wind power locally.', color: 'bg-[#00E5FF]', text: 'text-[#111]' },
  { icon: Home, title: 'Consumers', desc: 'Buy cheap, green power directly.', color: 'bg-[#FF3366]', text: 'text-white' },
  { icon: TrendingUp, title: 'Investors', desc: 'Fund community green projects.', color: 'bg-white', text: 'text-[#111]' },
];

const OBJECTIVES = [
  { 
    icon: Zap, 
    title: 'Decentralized Exchange', 
    desc: 'Allow individuals and small producers to sell surplus electricity directly, bypassing traditional utility monopolies.',
    color: 'bg-[#CCFF00]'
  },
  { 
    icon: Users, 
    title: 'Peer-to-Peer Trading', 
    desc: 'Consumers can buy green energy straight from local producers instead of relying on centralized, fossil-heavy grids.',
    color: 'bg-[#00E5FF]'
  },
  { 
    icon: Globe, 
    title: 'Community Sustainability', 
    desc: 'Support local green initiatives, drastically reduce carbon footprints, and build resilient, self-sustaining microgrids.',
    color: 'bg-[#FF3366]'
  },
];

export default function Features() {
  return (
    <div className="pt-32 pb-20 space-y-32">
      {/* The Network / Roles Section */}
      <section>
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#111] bg-white inline-block px-6 py-3 border-4 border-[#111] shadow-[8px_8px_0px_#111] rotate-1"
          >
            The <span className="text-[#00E5FF]">Tro Energy</span> Network
          </motion.h2>
          <div className="mt-8 flex justify-center">
            <p className="text-xl font-bold text-[#111] max-w-2xl bg-white border-2 border-[#111] px-4 py-2 shadow-[4px_4px_0px_#111] -rotate-1">
              Connecting every player in the green energy ecosystem.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {ROLES.map((role, i) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${role.color} ${role.text} border-4 border-[#111] p-6 shadow-[8px_8px_0px_#111] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_#111] transition-all group`}
              >
                <div className="w-12 h-12 border-4 border-[#111] bg-white flex items-center justify-center mb-4 shadow-[4px_4px_0px_#111] group-hover:rotate-12 transition-transform">
                  <Icon className="w-6 h-6 text-[#111]" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-wider mb-2">{role.title}</h3>
                <p className="font-bold opacity-90">{role.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Core Objectives Section */}
      <section>
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#111] bg-white inline-block px-6 py-3 border-4 border-[#111] shadow-[8px_8px_0px_#111] -rotate-1"
          >
            Our <span className="text-[#FF3366]">Core</span> Objectives
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {OBJECTIVES.map((obj, i) => {
            const Icon = obj.icon;
            return (
              <motion.div
                key={obj.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white border-4 border-[#111] p-8 shadow-[12px_12px_0px_#111] relative overflow-hidden group"
              >
                <div className={`absolute -right-10 -top-10 w-40 h-40 ${obj.color} border-4 border-[#111] rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500`} />
                
                <div className={`w-16 h-16 ${obj.color} border-4 border-[#111] flex items-center justify-center mb-6 shadow-[6px_6px_0px_#111] relative z-10 group-hover:-rotate-12 transition-transform`}>
                  <Icon className="w-8 h-8 text-[#111]" />
                </div>
                
                <h3 className="text-2xl font-black uppercase tracking-tighter text-[#111] mb-4 relative z-10">
                  {obj.title}
                </h3>
                
                <p className="text-lg font-bold text-[#111] relative z-10 leading-relaxed">
                  {obj.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

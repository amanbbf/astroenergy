import { motion } from 'motion/react';
import { Zap, ArrowRight } from 'lucide-react';

export default function Login({ onNavigate }: { onNavigate: (tab: 'register' | 'dashboard') => void }) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - just redirect to dashboard
    onNavigate('dashboard');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-white border-4 border-[#111] shadow-[12px_12px_0px_#111] p-8 relative">
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#CCFF00] border-4 border-[#111] shadow-[4px_4px_0px_#111] flex items-center justify-center rotate-12">
            <Zap className="w-6 h-6 text-[#111]" />
          </div>

          <h2 className="text-4xl font-black uppercase tracking-tighter text-[#111] mb-2">Welcome Back</h2>
          <p className="text-[#111] font-bold mb-8">Ready to trade some green energy?</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-black uppercase tracking-wider text-[#111]">Email Address</label>
              <input 
                type="email" 
                defaultValue="user@troenergy.com"
                className="w-full bg-[#F4F0EA] border-4 border-[#111] p-4 font-bold text-[#111] focus:outline-none focus:bg-[#CCFF00] transition-colors shadow-[4px_4px_0px_#111]"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-black uppercase tracking-wider text-[#111]">Password</label>
              <input 
                type="password" 
                defaultValue="password123"
                className="w-full bg-[#F4F0EA] border-4 border-[#111] p-4 font-bold text-[#111] focus:outline-none focus:bg-[#CCFF00] transition-colors shadow-[4px_4px_0px_#111]"
                required
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-[#FF3366] text-white border-4 border-[#111] p-4 font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#111] hover:text-white transition-colors shadow-[6px_6px_0px_#111] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#111]"
            >
              Sign In <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-8 pt-6 border-t-4 border-[#111] text-center">
            <p className="font-bold text-[#111]">
              Don't have an account?{' '}
              <button 
                onClick={() => onNavigate('register')}
                className="text-[#00E5FF] font-black uppercase underline decoration-4 underline-offset-4 hover:text-[#FF3366] transition-colors"
              >
                Register
              </button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

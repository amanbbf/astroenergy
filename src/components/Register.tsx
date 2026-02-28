import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  UserPlus, ArrowRight, ArrowLeft, Sun, Home, TrendingUp, 
  Wind, Leaf, Building, Factory, DollarSign, Zap, CheckCircle,
  MapPin, UploadCloud, ShieldCheck
} from 'lucide-react';

type Role = 'consumer' | 'producer' | 'investor' | '';

export default function Register({ onNavigate }: { onNavigate: (tab: 'login' | 'dashboard') => void }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '' as Role,
    // Producer specifics
    energySource: '',
    capacity: '',
    // Consumer specifics
    propertyType: '',
    monthlyUsage: '',
    // Investor specifics
    investmentRange: '',
    preferredTech: '',
    // KYC & Location
    location: '',
    idUploaded: false,
    termsAccepted: false
  });

  const handleNext = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setStep(s => s + 1);
  };

  const handlePrev = () => {
    setStep(s => s - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock API call / registration completion
    onNavigate('dashboard');
  };

  const updateForm = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        
        {/* Progress Bar */}
        <div className="mb-8 flex items-center justify-between relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-2 bg-[#111] -z-10"></div>
          {[1, 2, 3, 4].map((num) => (
            <div 
              key={num} 
              className={`w-12 h-12 border-4 border-[#111] flex items-center justify-center font-black text-xl transition-colors ${
                step >= num ? 'bg-[#CCFF00] text-[#111] shadow-[4px_4px_0px_#111]' : 'bg-[#F4F0EA] text-[#111]'
              }`}
            >
              {step > num ? <CheckCircle className="w-6 h-6" /> : num}
            </div>
          ))}
        </div>

        <div className="bg-white border-4 border-[#111] shadow-[12px_12px_0px_#111] p-8 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#00E5FF] border-4 border-[#111] shadow-[4px_4px_0px_#111] flex items-center justify-center -rotate-12">
            <UserPlus className="w-8 h-8 text-[#111]" />
          </div>

          <AnimatePresence mode="wait">
            {/* STEP 1: BASIC INFO */}
            {step === 1 && (
              <motion.form 
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleNext}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-4xl font-black uppercase tracking-tighter text-[#111] mb-2">Join Tro Energy</h2>
                  <p className="text-[#111] font-bold mb-8">Step 1: Let's get your basic details.</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-black uppercase tracking-wider text-[#111]">Full Name</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => updateForm('name', e.target.value)}
                      placeholder="e.g. Alex Green"
                      className="w-full bg-[#F4F0EA] border-4 border-[#111] p-4 font-bold text-[#111] focus:outline-none focus:bg-[#CCFF00] transition-colors shadow-[4px_4px_0px_#111]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-black uppercase tracking-wider text-[#111]">Email Address</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => updateForm('email', e.target.value)}
                      placeholder="alex@example.com"
                      className="w-full bg-[#F4F0EA] border-4 border-[#111] p-4 font-bold text-[#111] focus:outline-none focus:bg-[#CCFF00] transition-colors shadow-[4px_4px_0px_#111]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-black uppercase tracking-wider text-[#111]">Password</label>
                    <input 
                      type="password" 
                      value={formData.password}
                      onChange={(e) => updateForm('password', e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-[#F4F0EA] border-4 border-[#111] p-4 font-bold text-[#111] focus:outline-none focus:bg-[#CCFF00] transition-colors shadow-[4px_4px_0px_#111]"
                      required
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full mt-8 bg-[#00E5FF] text-[#111] border-4 border-[#111] p-4 font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#111] hover:text-white transition-colors shadow-[6px_6px_0px_#111] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#111]"
                >
                  Continue <ArrowRight className="w-5 h-5" />
                </button>
                
                <div className="pt-4 text-center">
                  <p className="font-bold text-[#111]">
                    Already have an account?{' '}
                    <button type="button" onClick={() => onNavigate('login')} className="text-[#FF3366] font-black uppercase underline decoration-4 underline-offset-4 hover:text-[#00E5FF] transition-colors">
                      Sign In
                    </button>
                  </p>
                </div>
              </motion.form>
            )}

            {/* STEP 2: ROLE SELECTION */}
            {step === 2 && (
              <motion.form 
                key="step2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleNext}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-4xl font-black uppercase tracking-tighter text-[#111] mb-2">Choose Your Role</h2>
                  <p className="text-[#111] font-bold mb-8">Step 2: How will you participate in the network?</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button
                    type="button"
                    onClick={() => updateForm('role', 'consumer')}
                    className={`p-6 border-4 border-[#111] font-black uppercase tracking-wider flex flex-col items-center gap-4 transition-all ${
                      formData.role === 'consumer' 
                        ? 'bg-[#FF3366] text-white shadow-[6px_6px_0px_#111] -translate-y-2' 
                        : 'bg-[#F4F0EA] text-[#111] hover:bg-white hover:shadow-[4px_4px_0px_#111]'
                    }`}
                  >
                    <Home className="w-12 h-12" />
                    <span className="text-center">Consumer<br/><span className="text-xs normal-case font-bold opacity-90">I want to buy green energy</span></span>
                  </button>

                  <button
                    type="button"
                    onClick={() => updateForm('role', 'producer')}
                    className={`p-6 border-4 border-[#111] font-black uppercase tracking-wider flex flex-col items-center gap-4 transition-all ${
                      formData.role === 'producer' 
                        ? 'bg-[#CCFF00] text-[#111] shadow-[6px_6px_0px_#111] -translate-y-2' 
                        : 'bg-[#F4F0EA] text-[#111] hover:bg-white hover:shadow-[4px_4px_0px_#111]'
                    }`}
                  >
                    <Sun className="w-12 h-12" />
                    <span className="text-center">Producer<br/><span className="text-xs normal-case font-bold opacity-90">I generate green energy</span></span>
                  </button>

                  <button
                    type="button"
                    onClick={() => updateForm('role', 'investor')}
                    className={`p-6 border-4 border-[#111] font-black uppercase tracking-wider flex flex-col items-center gap-4 transition-all ${
                      formData.role === 'investor' 
                        ? 'bg-[#B026FF] text-white shadow-[6px_6px_0px_#111] -translate-y-2' 
                        : 'bg-[#F4F0EA] text-[#111] hover:bg-white hover:shadow-[4px_4px_0px_#111]'
                    }`}
                  >
                    <TrendingUp className="w-12 h-12" />
                    <span className="text-center">Investor<br/><span className="text-xs normal-case font-bold opacity-90">I want to fund projects</span></span>
                  </button>
                </div>

                <div className="flex gap-4 pt-8">
                  <button 
                    type="button"
                    onClick={handlePrev}
                    className="w-1/3 bg-white text-[#111] border-4 border-[#111] p-4 font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#F4F0EA] transition-colors shadow-[4px_4px_0px_#111]"
                  >
                    <ArrowLeft className="w-5 h-5" /> Back
                  </button>
                  <button 
                    type="submit"
                    disabled={!formData.role}
                    className="w-2/3 bg-[#00E5FF] text-[#111] border-4 border-[#111] p-4 font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#111] hover:text-white transition-colors shadow-[6px_6px_0px_#111] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.form>
            )}

            {/* STEP 3: ROLE SPECIFICS */}
            {step === 3 && (
              <motion.form 
                key="step3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleNext}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-4xl font-black uppercase tracking-tighter text-[#111] mb-2">Final Details</h2>
                  <p className="text-[#111] font-bold mb-8">Step 3: Tell us more about your {formData.role} profile.</p>
                </div>

                {/* PRODUCER FIELDS */}
                {formData.role === 'producer' && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-black uppercase tracking-wider text-[#111]">Energy Source</label>
                      <div className="grid grid-cols-3 gap-2">
                        {['Solar', 'Wind', 'Biogas'].map(source => (
                          <button
                            key={source}
                            type="button"
                            onClick={() => updateForm('energySource', source)}
                            className={`p-3 border-4 border-[#111] font-black uppercase text-sm transition-all ${
                              formData.energySource === source ? 'bg-[#111] text-white' : 'bg-[#F4F0EA] text-[#111] hover:bg-[#CCFF00]'
                            }`}
                          >
                            {source}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-black uppercase tracking-wider text-[#111]">Installed Capacity (kW)</label>
                      <input 
                        type="number" 
                        placeholder="e.g. 50"
                        className="w-full bg-[#F4F0EA] border-4 border-[#111] p-4 font-bold text-[#111] focus:outline-none focus:bg-[#CCFF00] shadow-[4px_4px_0px_#111]"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* CONSUMER FIELDS */}
                {formData.role === 'consumer' && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-black uppercase tracking-wider text-[#111]">Property Type</label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'residential', icon: Home, label: 'Home' },
                          { id: 'commercial', icon: Building, label: 'Office' },
                          { id: 'industrial', icon: Factory, label: 'Industry' }
                        ].map(type => (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => updateForm('propertyType', type.id)}
                            className={`p-3 border-4 border-[#111] font-black uppercase text-xs flex flex-col items-center gap-2 transition-all ${
                              formData.propertyType === type.id ? 'bg-[#111] text-white' : 'bg-[#F4F0EA] text-[#111] hover:bg-[#FF3366] hover:text-white'
                            }`}
                          >
                            <type.icon className="w-6 h-6" />
                            {type.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-black uppercase tracking-wider text-[#111]">Est. Monthly Usage (kWh)</label>
                      <input 
                        type="number" 
                        placeholder="e.g. 900"
                        className="w-full bg-[#F4F0EA] border-4 border-[#111] p-4 font-bold text-[#111] focus:outline-none focus:bg-[#FF3366] focus:text-white shadow-[4px_4px_0px_#111]"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* INVESTOR FIELDS */}
                {formData.role === 'investor' && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-black uppercase tracking-wider text-[#111]">Investment Range</label>
                      <select 
                        className="w-full bg-[#F4F0EA] border-4 border-[#111] p-4 font-bold text-[#111] focus:outline-none focus:bg-[#B026FF] focus:text-white shadow-[4px_4px_0px_#111] appearance-none"
                        required
                      >
                        <option value="">Select a range...</option>
                        <option value="small">$1,000 - $10,000</option>
                        <option value="medium">$10,000 - $50,000</option>
                        <option value="large">$50,000+</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-black uppercase tracking-wider text-[#111]">Preferred Technology</label>
                      <div className="grid grid-cols-3 gap-2">
                        {['Solar', 'Wind', 'Any'].map(tech => (
                          <button
                            key={tech}
                            type="button"
                            onClick={() => updateForm('preferredTech', tech)}
                            className={`p-3 border-4 border-[#111] font-black uppercase text-sm transition-all ${
                              formData.preferredTech === tech ? 'bg-[#111] text-white' : 'bg-[#F4F0EA] text-[#111] hover:bg-[#B026FF] hover:text-white'
                            }`}
                          >
                            {tech}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-4 pt-8">
                  <button 
                    type="button"
                    onClick={handlePrev}
                    className="w-1/3 bg-white text-[#111] border-4 border-[#111] p-4 font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#F4F0EA] transition-colors shadow-[4px_4px_0px_#111]"
                  >
                    <ArrowLeft className="w-5 h-5" /> Back
                  </button>
                  <button 
                    type="submit"
                    className="w-2/3 bg-[#00E5FF] text-[#111] border-4 border-[#111] p-4 font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#111] hover:text-white transition-colors shadow-[6px_6px_0px_#111]"
                  >
                    Continue <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.form>
            )}

            {/* STEP 4: KYC & VERIFICATION */}
            {step === 4 && (
              <motion.form 
                key="step4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-4xl font-black uppercase tracking-tighter text-[#111] mb-2">KYC & Verification</h2>
                  <p className="text-[#111] font-bold mb-8">Step 4: Secure the grid. Verify your identity and location.</p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-black uppercase tracking-wider text-[#111]">Service Location / Address</label>
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        value={formData.location}
                        onChange={(e) => updateForm('location', e.target.value)}
                        placeholder="Enter your full address"
                        className="w-full bg-[#F4F0EA] border-4 border-[#111] p-4 font-bold text-[#111] focus:outline-none focus:bg-[#CCFF00] shadow-[4px_4px_0px_#111]"
                        required
                      />
                      <button 
                        type="button"
                        onClick={() => updateForm('location', '123 Green Ave, Eco City, EC 90210')}
                        className="bg-[#CCFF00] border-4 border-[#111] p-4 flex items-center justify-center hover:bg-[#111] hover:text-white transition-colors shadow-[4px_4px_0px_#111]"
                        title="Auto-detect location (Mock)"
                      >
                        <MapPin className="w-6 h-6" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-black uppercase tracking-wider text-[#111]">Government ID Upload</label>
                    <div 
                      onClick={() => updateForm('idUploaded', 'true')}
                      className={`border-4 border-dashed border-[#111] p-8 text-center cursor-pointer transition-all ${
                        formData.idUploaded 
                          ? 'bg-[#00E5FF] shadow-[4px_4px_0px_#111]' 
                          : 'bg-[#F4F0EA] hover:bg-[#CCFF00]'
                      }`}
                    >
                      {formData.idUploaded ? (
                        <div className="flex flex-col items-center text-[#111]">
                          <ShieldCheck className="w-12 h-12 mb-2" />
                          <span className="font-black uppercase tracking-wider">ID Verified Successfully</span>
                          <span className="text-xs font-bold mt-1">(Mock Data)</span>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center text-[#111]">
                          <UploadCloud className="w-12 h-12 mb-2" />
                          <span className="font-black uppercase tracking-wider">Click to Upload ID</span>
                          <span className="text-xs font-bold mt-1">Passport, Driver's License, or National ID</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <label className="flex items-start gap-4 p-4 border-4 border-[#111] bg-white shadow-[4px_4px_0px_#111] cursor-pointer hover:bg-[#F4F0EA] transition-colors">
                    <input 
                      type="checkbox" 
                      checked={formData.termsAccepted}
                      onChange={(e) => updateForm('termsAccepted', e.target.checked ? 'true' : '')}
                      className="w-6 h-6 mt-1 border-4 border-[#111] appearance-none checked:bg-[#FF3366] relative checked:after:content-['✓'] checked:after:absolute checked:after:text-white checked:after:left-1 checked:after:-top-1 checked:after:text-lg checked:after:font-black"
                      required
                    />
                    <span className="font-bold text-sm text-[#111]">
                      I agree to the <span className="underline decoration-2 underline-offset-2">P2P Energy Trading Terms & Conditions</span> and consent to the KYC verification process.
                    </span>
                  </label>
                </div>

                <div className="flex gap-4 pt-8">
                  <button 
                    type="button"
                    onClick={handlePrev}
                    className="w-1/3 bg-white text-[#111] border-4 border-[#111] p-4 font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#F4F0EA] transition-colors shadow-[4px_4px_0px_#111]"
                  >
                    <ArrowLeft className="w-5 h-5" /> Back
                  </button>
                  <button 
                    type="submit"
                    disabled={!formData.idUploaded || !formData.termsAccepted}
                    className="w-2/3 bg-[#FF3366] text-white border-4 border-[#111] p-4 font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#111] transition-colors shadow-[6px_6px_0px_#111] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Complete <Zap className="w-5 h-5 fill-current" />
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

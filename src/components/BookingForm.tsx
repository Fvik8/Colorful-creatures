import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Users, Mail, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

export const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: '',
    tickets: 1,
    email: '',
    name: ''
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  return (
    <section id="booking" className="py-24 px-6">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold uppercase italic tracking-tighter mb-4">Book Your <span className="text-gradient">Journey</span></h2>
          <p className="text-white/40 text-sm font-medium uppercase tracking-[0.2em]">Exhibition Entry Tickets</p>
        </div>

        <div className="glass rounded-[32px] overflow-hidden relative shadow-2xl">
          <div className="absolute -top-3 -right-3 z-20 bg-warning text-dark px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest rotate-6 shadow-lg">
            Limited Dates
          </div>
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/5">
            <motion.div 
              className="h-full bg-primary shadow-[0_0_10px_#10B981]"
              initial={{ width: '0%' }}
              animate={{ width: `${(step / 4) * 100}%` }}
            />
          </div>

          <div className="p-10 md:p-12">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold">1</div>
                    <span className="text-xs font-bold uppercase tracking-widest text-white/60">Select Your Date</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {['May 15', 'May 16', 'May 17', 'May 18'].map(date => (
                      <button 
                        key={date}
                        onClick={() => { setFormData({...formData, date}); nextStep(); }}
                        className={`p-6 rounded-2xl border transition-all text-left group ${formData.date === date ? 'border-primary bg-primary/10' : 'border-white/5 hover:border-white/20 bg-white/5'}`}
                      >
                         <Calendar className={`w-5 h-5 mb-3 ${formData.date === date ? 'text-primary' : 'text-white/20'}`} />
                         <span className="block text-sm font-bold uppercase tracking-widest">{date}</span>
                         <span className="text-[10px] text-white/40">Open 10:00 - 18:00</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <button onClick={prevStep} className="hover:text-primary transition-colors"><ArrowLeft className="w-5 h-5" /></button>
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold">2</div>
                    <span className="text-xs font-bold uppercase tracking-widest text-white/60">How Many Tickets?</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-8 py-12">
                      <button 
                        onClick={() => setFormData({...formData, tickets: Math.max(1, formData.tickets - 1)})}
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5"
                      >-</button>
                      <span className="text-6xl font-display font-medium">{formData.tickets}</span>
                      <button 
                         onClick={() => setFormData({...formData, tickets: formData.tickets + 1})}
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5"
                      >+</button>
                    </div>
                  </div>

                  <button 
                    onClick={nextStep}
                    className="w-full py-5 bg-primary text-dark rounded-2xl font-bold uppercase tracking-widest text-sm"
                  >Continue</button>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <button onClick={prevStep} className="hover:text-primary transition-colors"><ArrowLeft className="w-5 h-5" /></button>
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold">3</div>
                    <span className="text-xs font-bold uppercase tracking-widest text-white/60">Contact Information</span>
                  </div>
                  
                  <div className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="YOUR FULL NAME"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-sm uppercase tracking-widest focus:outline-none focus:border-primary transition-colors"
                    />
                    <input 
                      type="email" 
                      placeholder="EMAIL ADDRESS"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-sm uppercase tracking-widest focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <button 
                    onClick={nextStep}
                    disabled={!formData.name || !formData.email}
                    className="w-full py-5 bg-primary text-dark rounded-2xl font-bold uppercase tracking-widest text-sm disabled:opacity-50"
                  >Confirm Booking</button>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div 
                  key="step4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-display font-bold uppercase italic mb-4">Tickets Sent!</h3>
                  <p className="text-white/50 text-sm font-light mb-8 max-w-sm mx-auto">
                    Check your email for the spectral QR code. We can't wait to see you at the Natural History Museum.
                  </p>
                  <button 
                    onClick={() => setStep(1)}
                    className="px-8 py-4 glass rounded-2xl font-bold uppercase tracking-widest text-[10px]"
                  >Back to Start</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export const AttenboroughSection = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden glass rounded-[60px] p-12 md:p-24 flex flex-col md:flex-row items-center gap-16"
      >
        {/* Background glow */}
        <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[100px] rounded-full" />
        
        <div className="relative z-10 w-full md:w-1/2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/20 mb-8">
            <Star className="w-3 h-3 text-primary fill-primary" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Special Guest Appearances</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-6xl font-bold italic mb-8 uppercase tracking-[0.1em] leading-none">
            Sir David <br /> <span className="text-accent">Attenborough</span>
          </h2>
          
          <div className="relative">
            <Quote className="absolute -top-4 -left-8 w-12 h-12 text-white/5" />
            <p className="text-2xl md:text-3xl font-display font-light text-white/80 leading-tight mb-8 pl-4">
              "Never before have we seen the secret rainbow of the animal kingdom in such vivid, scientific detail."
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="px-6 py-2 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
              Limited Dates: June 15 - 20
            </div>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto h-full min-h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-transparent z-10 md:hidden" />
          <img 
            src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1000&auto=format&fit=crop" 
            alt="Nature" 
            className="w-full h-full object-cover rounded-[40px] opacity-60 grayscale hover:grayscale-0 transition-all duration-700" 
          />
          
          {/* David Portrait Placeholder */}
          <div className="absolute inset-x-8 bottom-8 p-8 glass rounded-3xl z-20">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-display font-bold text-dark">DA</div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-widest">Live Q&A Sessions</div>
                  <div className="text-xs text-white/40">Exclusive to VIP Ticket Holders</div>
                </div>
             </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

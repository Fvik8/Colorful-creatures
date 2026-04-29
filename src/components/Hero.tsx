import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 text-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-5xl"
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/80">Launching May 2026</span>
        </motion.div>

        <h1 className="font-display text-7xl md:text-[110px] leading-[0.85] font-black uppercase tracking-tighter mb-8 italic">
          <span className="block text-accent">Colourful</span>
          <span className="block text-white">Creatures</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 font-light mb-12">
          Experience the natural world in neon. An immersive journey through the science of spectral evolution at the <span className="text-white font-medium">Natural History Museum</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-10 py-5 bg-white text-dark rounded-2xl font-black uppercase tracking-widest text-sm overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book Your Journey <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-primary/10 translate-y-[101%] group-hover:translate-y-0 transition-transform" />
          </motion.button>
          
          <button className="px-10 py-5 glass rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all">
            View Trailer
          </button>
        </div>
      </motion.div>

      {/* Chameleon Image - Using Unsplash Fallback */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
        animate={{ opacity: 0.4, scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute bottom-[-10%] right-[-5%] w-[80%] md:w-[50%] aspect-square pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=1000&auto=format&fit=crop" 
          alt="Chameleon" 
          className="w-full h-full object-contain filter grayscale invert brightness-200 contrast-200"
          style={{ mixBlendMode: 'screen' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
      </motion.div>
    </section>
  );
};

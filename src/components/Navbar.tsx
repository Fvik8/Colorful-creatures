import { motion } from 'motion/react';
import { Calendar, Info, MapPin } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass rounded-full px-8 py-3 flex items-center gap-12"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border-2 border-white flex items-center justify-center font-display text-sm font-black">NHM</div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-70">Natural History Museum</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-white/60">
          <a href="#about" className="hover:text-primary transition-colors">Exhibition</a>
          <a href="#science" className="hover:text-primary transition-colors">Science</a>
          <a href="#booking" className="hover:text-primary transition-colors">Booking</a>
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-primary text-dark px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
        >
          Book Now
        </motion.button>
      </motion.div>
    </nav>
  );
};

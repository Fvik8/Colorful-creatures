import { motion } from 'motion/react';
import { Microscope, Play, Users, Zap } from 'lucide-react';

const cards = [
  {
    title: "Science of Color",
    desc: "Discover how nature creates structural color without pigments, from peacock feathers to butterfly wings.",
    icon: Microscope,
    color: "bg-primary",
  },
  {
    title: "VR Safari",
    desc: "Plunge into a 360° virtual landscape and see the world through the UV-sensitive eyes of a dragon.",
    icon: Play,
    color: "bg-neon-blue",
  },
  {
    title: "Family Biology",
    desc: "Interactive workstations designed for young explorers to build their own spectral creatures.",
    icon: Users,
    color: "bg-accent",
  }
];

export const InfoGrid = () => {
  return (
    <section id="science" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group glass p-10 rounded-[40px] hover:bg-white/10 transition-all duration-500"
          >
            <div className={`w-14 h-14 ${card.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
              <card.icon className="w-6 h-6 text-dark" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-4 uppercase tracking-tight italic">{card.title}</h3>
            <p className="text-white/50 leading-relaxed font-light">{card.desc}</p>
            
            <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                <span className={`w-1 h-1 rounded-full ${card.color}`} />
                {idx + 1 < 10 ? `0${idx + 1}` : idx + 1} / {card.title}
              </span>
              <Zap className="w-3 h-3 text-white/20 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

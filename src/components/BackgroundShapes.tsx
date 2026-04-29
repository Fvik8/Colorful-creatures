import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export const BackgroundShapes = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" ref={containerRef}>
      {/* Mesh Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[10%] w-[60%] h-[60%] bg-primary/20 blur-[150px] rounded-full invisible md:visible" />
      <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-warning/10 blur-[100px] rounded-full" />

      {/* Floating Shapes */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute top-[15%] right-[15%] w-32 h-32 border border-white/5 rounded-3xl"
      />
      <motion.div 
        style={{ y: y2, rotate: -rotate }}
        className="absolute top-[60%] left-[10%] w-48 h-48 border border-white/5 rounded-full"
      />
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[40%] right-[30%] w-20 h-20 border border-white/5 rotate-45"
      />
    </div>
  );
};

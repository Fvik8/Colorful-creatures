import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 23,
    minutes: 45,
    seconds: 12
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const Unit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="text-4xl md:text-6xl font-mono font-bold tracking-tighter md:w-32">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/30 pt-2 border-t border-white/5 w-full text-center">
        {label}
      </div>
    </div>
  );

  return (
    <section className="py-24 flex flex-col items-center">
      <div className="glass rounded-[40px] p-12 md:p-16 flex gap-8 md:gap-16">
        <Unit value={timeLeft.days} label="Days" />
        <Unit value={timeLeft.hours} label="Hours" />
        <Unit value={timeLeft.minutes} label="Minutes" />
        <Unit value={timeLeft.seconds} label="Seconds" />
      </div>
      <p className="mt-8 text-white/40 text-sm font-medium uppercase tracking-[0.2em]">Exhibition Launch Countdown</p>
    </section>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { InfoGrid } from './components/InfoGrid';
import { AttenboroughSection } from './components/AttenboroughSection';
import { BookingForm } from './components/BookingForm';
import { BackgroundShapes } from './components/BackgroundShapes';

export default function App() {
  return (
    <main className="relative min-h-screen">
      <BackgroundShapes />
      <Navbar />
      
      <Hero />
      <Countdown />
      <InfoGrid />
      <AttenboroughSection />
      <BookingForm />

      <footer className="py-12 border-t border-white/5 text-center mt-24">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-8 mb-8">
             <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Natural_History_Museum_logo.svg" alt="NHM Logo" className="h-8 opacity-40 grayscale invert" />
          </div>
          <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/20">
            © 2026 Natural History Museum • South Kensington, London
          </p>
          <div className="flex gap-6 mt-4">
            {['Twitter', 'Instagram', 'TikTok'].map(social => (
              <a key={social} href="#" className="text-[10px] uppercase font-medium tracking-widest text-white/40 hover:text-primary transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}

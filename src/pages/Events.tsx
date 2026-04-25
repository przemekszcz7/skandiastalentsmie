
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Filter, MapPin, Search } from 'lucide-react';
import { REGIONS } from '../constants';

export default function Events() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-20 pb-20">
      <header className="space-y-8 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-slate-900">Aktualne <span className="text-blue-600">wydarzenia</span></h1>
        <p className="text-2xl text-sky-600 max-w-4xl leading-relaxed font-serif italic">
          Aktualny kalendarz warsztatów, kiermaszy i spotkań w całej Norwegii. Dołącz do nas i twórz na żywo!
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-[3rem] border border-blue-50 shadow-sm">
        <div className="flex-1 w-full relative">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
          <input type="text" placeholder="Szukaj wydarzenia..." className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-blue-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 font-serif italic" />
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <Filter size={20} className="text-blue-600" />
          <select className="w-full md:w-64 bg-slate-50 border border-blue-100 px-6 py-4 rounded-2xl text-sm font-bold text-slate-600 focus:outline-none cursor-pointer font-serif italic">
            <option>Wszystkie regiony</option>
            {REGIONS.map(r => <option key={r.id}>{r.name}</option>)}
          </select>
        </div>
      </div>

      <div className="space-y-16 py-24 text-center border-t border-dashed border-blue-100 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
           <Calendar size={400} />
        </div>
        <div className="relative z-10 space-y-8">
          <h3 className="text-4xl md:text-6xl font-serif font-bold text-slate-900">Kalendarz w przygotowaniu</h3>
          <p className="text-2xl text-sky-600 font-serif italic leading-relaxed max-w-2xl mx-auto">
            "Cierpliwość rzemieślnika to połowa sukcesu. Pracujemy nad wdrożeniem pełnego kalendarza na rok 2026."
          </p>
          <div className="pt-8">
             <div className="inline-block px-10 py-4 bg-blue-50 text-blue-600 border border-blue-100 rounded-full font-serif font-bold italic shadow-sm italic not-italic">Wkrótce nowe terminy</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

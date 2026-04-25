
import React from 'react';
import { motion } from 'framer-motion';
import { REGIONS } from '../constants';
import { Link } from 'react-router-dom';
import { MapPin, ChevronRight, Building2 } from 'lucide-react';

export default function Branches() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="space-y-24 pb-20"
    >
      <header className="space-y-8 text-center md:text-left">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-slate-50 text-red-700 border border-slate-100 rounded-full text-xs font-bold uppercase tracking-widest">
          <Building2 size={16} /> Struktura stowarzyszenia
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-slate-900 leading-tight">
          Nasze <span className="text-red-700">Filie i Oddziały</span>
        </h1>
        <p className="text-2xl text-blue-900 max-w-4xl leading-relaxed font-serif italic">
          Skandias Talentsmie to ogólnonorweska „Kuźnia Matka”, pod której skrzydłami działa 12 wyspecjalizowanych oddziałów regionalnych. Znajdź swoją najbliższą filię! 🇳🇴
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {REGIONS.map((region, idx) => (
          <motion.div
            key={region.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="group relative"
          >
            <Link 
              to={`/filia/${region.id}`}
              className="block bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-red-700 border border-slate-100 group-hover:bg-red-700 group-hover:text-white transition-colors duration-500">
                  <MapPin size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif font-bold text-slate-900 group-hover:text-red-700 transition-colors">
                    {region.name}
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Skandias Talentsmie Branch</p>
                </div>
                <p className="text-slate-500 font-serif italic text-sm leading-relaxed">
                  Skupia artystów z miast: <span className="text-slate-900 font-bold">{region.cities}</span>.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-red-700 uppercase tracking-widest">Odkryj filię</span>
                <ChevronRight size={16} className="text-red-700 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <section className="bg-blue-950 text-white p-12 md:p-24 rounded-[4rem] relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
          <Building2 size={400} />
        </div>
        <div className="max-w-3xl relative z-10 space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold italic leading-tight">
            Nie widzisz swojego regionu? 
          </h2>
          <p className="text-xl text-slate-300 font-serif italic leading-relaxed">
            Stale rośniemy! Jeśli chciałbyś zostać koordynatorem w nowym miejscu lub pomóc w rozwoju istniejącej filii – napisz do nas. Razem możemy więcej.
          </p>
          <div className="pt-4">
            <Link 
              to="/czlonkostwo" 
              className="w-full sm:w-auto inline-flex justify-center px-8 sm:px-12 py-5 bg-red-700 text-white rounded-full font-bold text-base sm:text-lg hover:scale-105 transition-all shadow-xl shadow-red-900/40"
            >
              Dowiedz się o koordynatorach
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}


import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { REGIONS } from '../constants';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Image as ImageIcon, Users, Info, Sparkles } from 'lucide-react';

export default function BranchPage() {
  const { id } = useParams();
  const region = REGIONS.find(r => r.id === id);

  if (!region) return (
    <div className="text-center py-20">
      <h1 className="text-2xl font-bold">Filia nie została znaleziona</h1>
      <Link to="/" className="text-blue-600 underline mt-4 block">Wróć do strony głównej</Link>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-16 pb-20"
    >
      <header className="space-y-6">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-slate-50 text-blue-600 border border-blue-100 rounded-full text-xs font-bold uppercase tracking-widest">
          <MapPin size={14} /> Region: {region.name}
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-slate-900 leading-tight">
          {region.name} <span className="text-blue-600">Skandias Talentsmie</span>
        </h1>
        <p className="text-2xl text-sky-600 max-w-2xl leading-relaxed font-serif italic">
          Nasza filia w regionie {region.name} to miejsce spotkań artystów i rzemieślników z miast: {region.cities}.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <section className="bg-white p-12 rounded-[4rem] border border-blue-50 shadow-sm space-y-8 transform hover:-translate-y-1 transition-all duration-500">
          <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 border border-blue-100">
            <Info size={32} />
          </div>
          <h2 className="text-3xl font-serif font-bold text-slate-900">O działalności</h2>
          <p className="text-slate-600 leading-relaxed font-serif text-lg italic">
            W województwie {region.name} skupiamy się na jednoczeniu lokalnej społeczności Słowian poprzez warsztaty rzemieślnicze i wystawy. Promujemy lokalne talenty i pomagamy artystom w budowaniu ich rozpoznawalności w Norwegii.
          </p>
        </section>

        <section className="bg-white p-12 rounded-[4rem] border border-blue-50 shadow-sm space-y-8 transform hover:-translate-y-1 transition-all duration-500">
          <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 border border-sky-100">
            <Calendar size={32} />
          </div>
          <h2 className="text-3xl font-serif font-bold text-slate-900">Wydarzenia w regionie</h2>
          <div className="space-y-6">
            <div className="p-6 bg-slate-50 rounded-3xl border border-blue-50 border-l-8 border-l-blue-600">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Nadchodzące spotkanie</span>
              <p className="font-serif font-bold text-xl text-slate-900 mt-1 italic">Spotkanie zapoznawcze - {region.name}</p>
              <p className="text-sm text-sky-600 mt-2 font-medium">Miejsce: Lokalne centrum kultury / Online</p>
            </div>
            <p className="text-sm text-slate-400 italic font-serif">Brak innych zaplanowanych wydarzeń w najbliższym czasie.</p>
          </div>
        </section>
      </div>

      <section className="space-y-10">
        <div className="flex items-center justify-between px-4">
          <h2 className="text-3xl font-serif font-bold flex items-center gap-4 text-slate-900">
            <ImageIcon className="text-blue-600" /> Galeria z eventów
          </h2>
          <button className="text-xs font-bold text-blue-600 uppercase tracking-widest hover:underline decoration-2 underline-offset-8">Zobacz wszystkie</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-[4/5] bg-slate-50 rounded-[2.5rem] overflow-hidden group relative cursor-pointer border border-blue-50 shadow-sm">
              <img 
                src={`https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=400&h=400&auto=format&fit=crop`} 
                alt="Craft" 
                className="w-full h-full object-cover sepia-[0.3] group-hover:sepia-0 transition-all duration-700 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <span className="text-white text-xs font-bold uppercase tracking-[0.2em] text-center px-4 font-serif italic">Podgląd prac</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-blue-600 text-white p-16 md:p-24 rounded-[4rem] text-center space-y-8 relative overflow-hidden shadow-2xl shadow-blue-900/20">
        <div className="absolute -top-10 -right-10 w-64 h-64 opacity-5 pointer-events-none rotate-12">
            <Sparkles size={300} />
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold italic relative z-10">Chcesz działać w {region.name}?</h2>
        <p className="text-xl text-blue-50 max-w-2xl mx-auto relative z-10 font-serif italic">
          Szukamy wolontariuszy, artystów i osób, które pomogą nam rozwijać filię w {region.name}. Każda pomoc i każdy talent są na wagę złota.
        </p>
        <div className="pt-6 relative z-10">
          <Link 
            to="/kontakt" 
            className="inline-block bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl active:translate-y-1"
          >
            Skontaktuj się z nami
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

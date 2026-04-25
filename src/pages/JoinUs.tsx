
import React from 'react';
import { motion } from 'framer-motion';
import { CATEGORIES } from '../constants';
import * as Icons from 'lucide-react';
import { ArrowRight, CheckCircle, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function JoinUs() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-24 pb-20">
      <header className="space-y-8 text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-slate-900">Dołącz do <span className="text-blue-600">naszej kuźni</span>! 📢</h1>
        <p className="text-2xl text-sky-600 max-w-4xl mx-auto leading-relaxed font-serif italic">
          Masz duszę artysty? Tworzysz coś wyjątkowego własnymi rękami?
          Skandias Talentsmie to przestrzeń dla wszystkich, którzy chcą rozwijać swoje pasje i dzielić się nimi z innymi.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {CATEGORIES.map((cat, idx) => {
          const IconComponent = (Icons as any)[cat.icon];
          return (
            <div key={idx} className="bg-white p-8 rounded-[3rem] border border-blue-50 shadow-sm transform hover:-translate-y-2 transition-all duration-500 flex flex-col group">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {IconComponent && <IconComponent size={24} />}
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-slate-900">{cat.title}</h3>
              <ul className="space-y-3 flex-1">
                {cat.items.map((item, i) => (
                  <li key={i} className="text-sm text-slate-600 flex items-start gap-3 leading-snug font-serif italic">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <section className="bg-slate-50 p-12 rounded-[4rem] border border-blue-50 space-y-10 shadow-inner">
          <h2 className="text-4xl font-serif font-bold flex items-center gap-4 text-slate-900">
            <Icons.Lightbulb className="text-blue-600" size={32} /> Dlaczego warto?
          </h2>
          <div className="space-y-6">
            {[
              'Twoja pasja stanie się widoczna – pokaż światu swój talent.',
              'Pomożesz innym – unikatowe rzeczy są coraz bardziej poszukiwane.',
              'Znajdziesz klientów i współpracowników.',
              'Docenią Twoją pracę – rękodzieło z duszą wygrywa z masówką.'
            ].map((text, i) => (
              <div key={i} className="flex gap-4">
                <Icons.CheckCircle className="text-sky-600 flex-shrink-0 mt-1" size={24} />
                <p className="text-slate-700 text-lg font-serif italic leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white p-12 rounded-[4rem] border border-blue-50 space-y-10 shadow-sm transform rotate-1">
          <h2 className="text-4xl font-serif font-bold flex items-center gap-4 text-slate-900">
            <Icons.Gift className="text-blue-600" size={32} /> Co oferujemy?
          </h2>
          <div className="space-y-6 font-serif italic">
            {[
              'Promocję twórców i pomoc w docieraniu do odbiorców.',
              'Organizację warsztatów i wydarzeń regionalnych.',
              'Budowanie społeczności, w której każdy może się rozwijać.',
              'Wspieranie pasjonatów in budowaniu rozpoznawalności.'
            ].map((text, i) => (
              <div key={i} className="flex gap-4">
                <Icons.Sparkles className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <p className="text-slate-700 text-lg leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="bg-blue-600 text-white p-16 md:p-24 rounded-[5rem] text-center space-y-12 shadow-2xl shadow-blue-900/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none -rotate-12 scale-150">
           <Heart size={400} className="mx-auto" />
        </div>
        <div className="relative z-10 space-y-4">
          <h2 className="text-5xl md:text-7xl font-serif font-bold italic">Zostań częścią kuźni</h2>
          <p className="text-2xl text-blue-50 max-w-2xl mx-auto font-serif italic">
            Stań się częścią społeczności, która łączy kreatywne dusze i twórcze ręce w Norwegii.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
          <Link to="/kontakt" className="px-14 py-5 bg-white text-blue-600 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-xl">
            Dołącz jako członek
          </Link>
          <Link to="/kontakt" className="px-14 py-5 border-2 border-white/30 text-white rounded-full font-bold text-xl hover:bg-white/10 transition-all">
            Zostań koordynatorem
          </Link>
        </div>
        <div className="pt-16 border-t border-white/20 flex flex-col items-center gap-10 relative z-10">
          <div className="flex flex-col items-center gap-4">
            <Icons.Mail size={24} className="opacity-60" />
            <p className="text-sm opacity-80 uppercase tracking-widest font-bold">Skontaktuj się z nami</p>
            <a href="mailto:post@skandiatalentsmie.no" className="text-3xl font-serif font-bold hover:text-blue-200 transition-colors italic">post@skandiatalentsmie.no</a>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 w-full max-w-3xl">
            <a 
              href="https://www.facebook.com/SkandiiKuzniaTalentow" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 p-10 rounded-[2.5rem] flex flex-col items-center gap-4 transition-all group"
            >
              <Icons.Facebook size={32} className="group-hover:scale-110 transition-transform" />
              <div className="text-center space-y-1">
                <p className="text-[10px] uppercase tracking-widest opacity-60 font-bold">Strona Facebook</p>
                <p className="text-xl font-serif font-bold italic">Skandii Kuźnia Talentów</p>
              </div>
            </a>
            <a 
              href="https://www.facebook.com/groups/2466069263743964" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 p-10 rounded-[2.5rem] flex flex-col items-center gap-4 transition-all group"
            >
              <Icons.Users size={32} className="group-hover:scale-110 transition-transform" />
              <div className="text-center space-y-1">
                <p className="text-[10px] uppercase tracking-widest opacity-60 font-bold">Grupa Facebook</p>
                <p className="text-xl font-serif font-bold italic">Dołącz do grupy</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

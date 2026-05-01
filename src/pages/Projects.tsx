
import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, FileText, Banknote, PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-24 pb-20">
      <header className="space-y-8 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-slate-900">{t('projects.title').split(' ')[0]} <span className="text-blue-600">{t('projects.title').split(' ').slice(1).join(' ')}</span></h1>
        <p className="text-2xl text-sky-600 max-w-4xl leading-relaxed font-serif italic">
          {t('projects.subtitle')}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <section className="bg-white p-8 sm:p-12 rounded-[4rem] border border-blue-50 space-y-10 shadow-sm transform -rotate-1">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-slate-50 border border-blue-50 rounded-3xl flex items-center justify-center text-blue-600 flex-shrink-0">
              <PlusCircle size={40} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">{t('projects.addTitle')}</h2>
          </div>
          <p className="text-slate-600 leading-relaxed font-serif text-lg italic">
            {t('projects.addDesc')}
          </p>
          <Link to="/kontakt" className="block w-full py-5 bg-blue-600 text-white rounded-full font-bold text-base sm:text-lg shadow-xl shadow-blue-900/20 hover:scale-[1.02] transition-all whitespace-normal px-4 text-center">
            {t('projects.addBtn')}
          </Link>
        </section>

        <section className="bg-sky-600 text-white p-8 sm:p-12 rounded-[4rem] border border-blue-100 space-y-10 shadow-2xl shadow-sky-900/10 transform rotate-1">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-white/10 border border-white/20 rounded-3xl flex items-center justify-center text-white flex-shrink-0">
              <Banknote size={40} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold italic">{t('projects.grantsTitle')}</h2>
          </div>
          <p className="text-blue-50 leading-relaxed font-serif text-lg italic">
            {t('projects.grantsDesc')}
          </p>
          <Link 
            to="/projekty/info" 
            className="block w-full py-5 bg-white text-sky-600 rounded-full font-bold text-base sm:text-lg text-center hover:scale-[1.02] transition-all shadow-lg shadow-sky-900/20"
          >
            {t('projects.grantsBtn')}
          </Link>
        </section>
      </div>

      <section className="bg-white p-16 md:p-24 rounded-[4rem] border border-blue-50 space-y-12 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none rotate-45 transform translate-x-1/2 -translate-y-1/2">
           <Lightbulb size={300} className="text-blue-600" />
        </div>
        <h2 className="text-4xl font-serif font-bold italic flex items-center gap-4 text-slate-900">
          <Lightbulb className="text-blue-600" /> {t('projects.planningTitle')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[t('projects.list.1'), t('projects.list.2'), t('projects.list.3')].map((p, i) => (
            <div key={i} className="p-10 bg-slate-50 border border-blue-50 rounded-[2.5rem] relative shadow-sm group hover:border-blue-200 transition-all hover:-translate-y-1">
              <span className="text-[9px] uppercase font-bold text-blue-600 tracking-[0.2em] block mb-4 italic">{t('projects.activeTag')}</span>
              <p className="text-xl font-serif font-bold text-slate-900 group-hover:text-blue-600 transition-colors italic">{p}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}


import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { REGIONS } from '../constants';
import { motion } from 'motion/react';
import { MapPin, Calendar, Info, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function BranchPage() {
  const { t } = useLanguage();
  const { id } = useParams();
  const region = REGIONS.find(r => r.id === id);

  if (!region) return (
    <div className="text-center py-20">
      <h1 className="text-2xl font-bold">{t('branch.notFound')}</h1>
      <Link to="/" className="text-blue-600 underline mt-4 block">{t('branch.backHome')}</Link>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-16 pb-20"
    >
      <header className="space-y-6">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-slate-50 text-red-700 border border-slate-100 rounded-full text-xs font-bold uppercase tracking-widest">
          <MapPin size={14} /> {t('branch.region')} {region.name}
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-slate-900 leading-tight">
          {region.name} <span className="text-red-700">Skandias Talentsmie</span>
        </h1>
        <p className="text-2xl text-blue-900 max-w-2xl leading-relaxed font-serif italic">
          {t('branch.gatheringDesc').replace('{name}', region.name).replace('{cities}', region.cities)}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <section className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-8 transform hover:-translate-y-1 transition-all duration-500">
          <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-red-700 border border-slate-100">
            <Info size={32} />
          </div>
          <h2 className="text-3xl font-serif font-bold text-slate-900">{t('branch.aboutTitle')}</h2>
          <p className="text-slate-600 leading-relaxed font-serif text-lg italic">
            {t('branch.description').replace('{name}', region.name)}
          </p>
        </section>

        <section className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-8 transform hover:-translate-y-1 transition-all duration-500">
          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-900 border border-blue-100">
            <Calendar size={32} />
          </div>
          <h2 className="text-3xl font-serif font-bold text-slate-900">{t('branch.eventsTitle')}</h2>
          <div className="space-y-6">
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 border-l-8 border-l-red-700">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">{t('branch.upcomingMeeting')}</span>
              <p className="font-serif font-bold text-xl text-slate-900 mt-1 italic">{t('branch.meetingName')} - {region.name}</p>
              <p className="text-sm text-blue-900 mt-2 font-medium">{t('branch.locationLabel')} {t('branch.online')}</p>
            </div>
            <p className="text-sm text-slate-400 italic font-serif">{t('branch.noEvents')}</p>
          </div>
        </section>
      </div>

      <div className="bg-blue-950 text-white p-16 md:p-24 rounded-[4rem] text-center space-y-8 relative overflow-hidden shadow-2xl shadow-blue-900/20">
        <div className="absolute -top-10 -right-10 w-64 h-64 opacity-5 pointer-events-none rotate-12">
            <Sparkles size={300} />
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold italic relative z-10">{t('branch.actionTitle')}</h2>
        <p className="text-xl text-slate-100 max-w-2xl mx-auto relative z-10 font-serif italic">
          {t('branch.actionDesc')}
        </p>
        <div className="pt-6 relative z-10">
          <Link 
            to="/kontakt" 
            className="inline-block bg-white text-red-700 px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl active:translate-y-1"
          >
            {t('branch.contactBtn')}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

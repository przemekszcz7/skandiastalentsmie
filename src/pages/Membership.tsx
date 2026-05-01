
import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, UserPlus, Map, Check, ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Membership() {
  const { t } = useLanguage();

  const memberBenefits = [
    t('membership.benefits.1'),
    t('membership.benefits.2'),
    t('membership.benefits.3'),
    t('membership.benefits.4'),
    t('membership.benefits.5'),
    t('membership.benefits.6'),
    t('membership.benefits.7'),
    t('membership.benefits.8'),
    t('membership.benefits.9'),
    t('membership.benefits.10'),
    t('membership.benefits.11'),
    t('membership.benefits.12')
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-24 pb-20">
      <header className="space-y-8 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold tracking-tight text-slate-900">
          {t('membership.title').split(' i ')[0]} i <span className="text-red-700">{t('membership.title').split(' i ')[1]}</span>
        </h1>
        <p className="text-2xl text-blue-900 max-w-4xl leading-relaxed font-serif italic">
          {t('membership.subtitle')}
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <section className="space-y-10 bg-white p-12 md:p-16 rounded-[4rem] border border-slate-100 shadow-sm transform -rotate-1">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-slate-50 text-red-700 border border-slate-100 rounded-full text-xs font-bold uppercase tracking-widest">
            <UserPlus size={16} /> {t('membership.benefits.subtitle')}
          </div>
          <h2 className="text-4xl font-serif font-bold italic text-slate-900">{t('membership.benefits.title')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
            {memberBenefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-4 group">
                <div className="mt-1 flex-shrink-0">
                  <Check size={18} className="text-red-700 group-hover:scale-125 transition-transform" />
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-serif italic">{benefit}</p>
              </div>
            ))}
          </div>
          <div className="pt-8 flex justify-center md:justify-start">
            <Link to="/kontakt" className="w-full sm:w-auto inline-flex items-center justify-center gap-4 px-8 sm:px-12 py-5 bg-red-700 text-white rounded-full font-bold text-base sm:text-lg hover:scale-105 transition-all shadow-xl shadow-red-900/20">
              {t('membership.joinBtn')} <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        <section className="space-y-12">
          <div className="space-y-10 bg-blue-950 text-white p-12 md:p-16 rounded-[4rem] shadow-2xl shadow-blue-900/10 relative overflow-hidden">
            <Map className="absolute -top-10 -right-10 opacity-10" size={200} />
            <div className="relative z-10 space-y-10">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/20 text-white rounded-full text-xs font-bold uppercase tracking-widest">
                <Map size={16} /> {t('membership.coordinator.subtitle')}
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold italic text-white/95">{t('membership.coordinator.title')}</h2>
              <p className="text-xl text-slate-100 leading-relaxed italic font-serif">
                {t('membership.coordinator.desc')}
              </p>
              <div className="space-y-6 pt-6 border-t border-white/20">
                <h3 className="text-2xl font-serif font-bold italic">{t('membership.coordinator.role.title')}</h3>
                <ul className="text-lg space-y-4 opacity-90 font-serif italic" >
                  <li className="flex gap-4"><span>❧</span> {t('membership.coordinator.role.1')}</li>
                  <li className="flex gap-4"><span>❧</span> {t('membership.coordinator.role.2')}</li>
                  <li className="flex gap-4"><span>❧</span> {t('membership.coordinator.role.3')}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 border border-slate-100 rounded-[4rem] space-y-8 shadow-sm">
            <h3 className="text-2xl font-serif font-bold flex items-center gap-4 text-slate-900">
              <ShieldCheck className="text-red-700 flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10" /> {t('membership.support.title')}
            </h3>
            <p className="text-lg text-slate-500 italic font-serif leading-relaxed">{t('membership.support.desc')}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-serif font-bold text-slate-600 italic">
              <li className="bg-slate-50 p-5 rounded-2xl border border-slate-100">❦ {t('membership.support.1')}</li>
              <li className="bg-slate-50 p-5 rounded-2xl border border-slate-100">❦ {t('membership.support.2')}</li>
              <li className="bg-slate-50 p-5 rounded-2xl border border-slate-100">❦ {t('membership.support.3')}</li>
              <li className="bg-slate-50 p-5 rounded-2xl border border-slate-100">❦ {t('membership.support.4')}</li>
            </ul>
          </div>
        </section>
      </div>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-slate-50 p-12 md:p-20 rounded-[4rem] border border-slate-100 text-center space-y-10"
      >
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">{t('membership.steps.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { step: "1", text: t('membership.steps.1') },
            { step: "2", text: t('membership.steps.2') },
            { step: "3", text: t('membership.steps.3') }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-4 group">
              <div className="w-12 h-12 bg-white text-red-700 rounded-2xl flex items-center justify-center font-bold text-xl shadow-sm border border-slate-100 group-hover:bg-red-700 group-hover:text-white transition-all">
                {item.step}
              </div>
              <p className="text-lg font-serif font-bold italic text-slate-700">{item.text}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <section className="bg-white p-16 md:p-32 rounded-[5rem] text-center space-y-12 border border-slate-100 shadow-2xl shadow-slate-900/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none -rotate-45 transform translate-x-1/2">
           <Heart size={400} className="text-red-700" />
        </div>
        <div className="relative z-10 space-y-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900">{t('membership.volunteers.title')}</h2>
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-serif italic">
            {t('membership.volunteers.desc')}
          </p>
          <div className="flex flex-col items-center gap-6">
            <p className="text-sm text-red-700 uppercase tracking-[0.4em] font-bold">{t('membership.volunteers.tagline')}</p>
            <Link to="/kontakt" className="w-full sm:w-auto inline-flex justify-center px-8 sm:px-12 py-5 border-4 border-red-700 text-red-700 rounded-full font-bold text-base sm:text-lg hover:bg-red-700 hover:text-white transition-all shadow-md active:translate-y-1">
              {t('membership.volunteers.btn')}
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

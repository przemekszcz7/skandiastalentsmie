import React from 'react';
import { motion } from 'motion/react';
import { SLAVIC_COUNTRIES } from '../constants';
import { Users, Target, Heart, Sparkles, Globe, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-32 pb-20">
      {/* Narrative Section */}
      <section className="relative overflow-hidden pt-20">
        <div className="max-w-4xl mx-auto space-y-16 relative z-10">
          <header className="space-y-6 text-center">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm block">{t('about.narrative.subtitle')}</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-tight">
              {t('about.narrative.title')}
            </h1>
          </header>

          <div className="space-y-12 max-w-3xl mx-auto">
            <div className="relative p-12 bg-white rounded-[4rem] border border-blue-50 shadow-sm italic font-serif text-2xl text-slate-700 leading-relaxed text-center">
              <Quote className="absolute -top-6 left-1/2 -translate-x-1/2 text-blue-100 w-20 h-20" />
              <p className="mb-6 relative z-10">
                {t('about.narrative.quote1')}
              </p>
              <p className="relative z-10">
                {t('about.narrative.quote2')}
              </p>
            </div>

            <div className="space-y-12">
              <div className="space-y-8 text-center">
                <p className="text-2xl text-sky-600 font-serif italic font-bold">
                  {t('about.narrative.highlight')}
                </p>
                <div className="p-10 bg-slate-50 rounded-[4rem] border border-slate-100 space-y-6 max-w-xl mx-auto">
                  <h3 className="font-bold text-slate-900 uppercase tracking-widest text-sm underline decoration-blue-200 underline-offset-8">{t('about.narrative.origin')}</h3>
                  <ul className="space-y-4 text-slate-600 font-serif italic text-lg">
                    <li className="flex items-start justify-center gap-3"><span>❧</span> {t('about.narrative.originList1')}</li>
                    <li className="flex items-start justify-center gap-3"><span>❧</span> {t('about.narrative.originList2')}</li>
                    <li className="flex items-start justify-center gap-3"><span>❧</span> {t('about.narrative.originList3')}</li>
                    <li className="flex items-start justify-center gap-3"><span>❧</span> {t('about.narrative.originList4')}</li>
                  </ul>
                </div>
                <p className="text-3xl font-serif font-bold text-blue-600 italic">
                   {t('about.narrative.conclusion')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-32 -mx-4 sm:-mx-8 px-8">
        <div className="max-w-4xl mx-auto text-center space-y-20">
          <div className="space-y-10">
            <div className="space-y-6">
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm block">{t('about.who.subtitle')}</span>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 italic">{t('about.who.title')}</h2>
            </div>
            <div className="space-y-8 text-2xl text-slate-600 font-serif italic leading-relaxed max-w-3xl mx-auto">
              <p>
                {t('about.who.desc1')}
              </p>
              <p>
                {t('about.who.desc2')}
              </p>
            </div>
            <div className="p-12 bg-white rounded-[4rem] border border-blue-50 shadow-md space-y-10 max-w-3xl mx-auto relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
               <div className="relative z-10 space-y-8">
                <h3 className="font-bold text-slate-900 uppercase tracking-widest text-sm">{t('about.for.subtitle')}</h3>
                <p className="text-3xl md:text-4xl font-serif font-bold text-slate-900 leading-tight">
                  {t('about.for.title')}
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  {[t('about.for.item1'), t('about.for.item2'), t('about.for.item3'), t('about.for.item4'), t('about.for.item5')].map((item, idx) => (
                    <span key={idx} className="px-8 py-4 bg-slate-50 text-slate-700 rounded-2xl font-serif italic border border-slate-100 text-lg shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slavic Countries Grid */}
      <section className="max-w-7xl mx-auto px-8 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-serif font-bold text-slate-900">{t('about.slavic.title')}</h2>
          <p className="text-slate-500 font-serif italic text-lg">{t('about.slavic.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {SLAVIC_COUNTRIES.map((group, idx) => (
            <div key={idx} className="p-10 bg-white rounded-[3rem] border border-blue-50 space-y-6 hover:border-blue-200 transition-all shadow-sm">
              <h3 className="text-xs uppercase font-bold text-red-700 tracking-[0.2em]">
                {t('about.slavic.group')} {group.group}
              </h3>
              <p className="text-slate-700 font-serif font-bold text-xl italic">
                {group.countries.join(', ')}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Quote */}
      <section className="max-w-3xl mx-auto text-center px-8 border-t border-slate-100 pt-20">
        <p className="text-2xl md:text-4xl font-serif font-bold text-red-700 italic leading-tight">
          {t('about.footer.quote')}
        </p>
      </section>
    </motion.div>
  );
}

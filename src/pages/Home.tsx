
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Star, Users, Palette, Heart, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  const news = [
    { title: t('home.news.item1.title'), date: '24.04.2026', tag: t('home.news.item1.tag') },
    { title: t('home.news.item2.title'), date: '21.04.2026', tag: t('home.news.item2.tag') },
    { title: t('home.news.item3.title'), date: '15.04.2026', tag: t('home.news.item3.tag') },
  ];

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative py-12 md:py-24 text-center space-y-12 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-block"
        >
          <div className="w-32 h-32 md:w-48 md:h-48 overflow-hidden rounded-full mx-auto mb-12 shadow-2xl shadow-blue-900/10 rotate-2 border-8 border-white p-2 bg-white">
            <img 
              src="https://i.ibb.co/HD7kNWNg/logo.png" 
              alt="Skandias Talentsmie Logo" 
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        <div className="space-y-6 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold tracking-tight text-slate-900 font-serif"
          >
            Skandias <span className="text-red-700">Talentsmie</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl text-blue-900 font-serif italic"
          >
            {t('home.subtitle')}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/40 backdrop-blur-sm p-10 rounded-[3rem] border border-red-50 mt-12 max-w-4xl mx-auto shadow-sm"
          >
            <p className="text-xl text-slate-700 leading-relaxed font-serif italic">
              {t('home.quote')}
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-8 pt-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/dolacz" 
              className="w-full sm:w-auto bg-red-600 text-white px-8 sm:px-12 py-5 rounded-full font-bold text-base sm:text-lg shadow-xl shadow-red-900/20 hover:scale-105 transition-all flex items-center justify-center gap-3"
            >
              {t('nav.join')} <ArrowRight size={20} />
            </Link>
            <Link 
              to="/o-nas" 
              className="w-full sm:w-auto bg-white text-blue-900 border border-blue-100 px-8 sm:px-12 py-5 rounded-full font-bold text-base sm:text-lg hover:bg-blue-50 transition-all shadow-sm flex items-center justify-center"
            >
              {t('home.missionBtn')}
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="https://www.facebook.com/groups/2466069263743964" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#1877F2] text-white rounded-full font-bold shadow-lg hover:scale-105 transition-all"
            >
              <Facebook size={20} /> {t('home.fbGroup')}
            </a>
            <a 
              href="https://www.facebook.com/SkandiiKuzniaTalentow" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1877F2] border border-[#1877F2]/20 rounded-full font-bold shadow-sm hover:scale-105 transition-all"
            >
              <Facebook size={20} /> {t('home.fbFollow')}
            </a>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 text-red-600/5 pointer-events-none blur-md">
          <Palette size={400} />
        </div>
      </section>

      {/* Feature Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <Heart className="text-red-600" />, title: t('home.features.passion.title'), desc: t('home.features.passion.desc') },
          { icon: <Users className="text-blue-900" />, title: t('home.features.community.title'), desc: t('home.features.community.desc') },
          { icon: <Star className="text-green-500" />, title: t('home.features.growth.title'), desc: t('home.features.growth.desc') },
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -8 }}
            className="p-10 bg-white border border-slate-100 shadow-sm rounded-[3rem] hover:shadow-xl transition-all duration-500"
          >
            <div className="mb-6 p-4 bg-slate-50 w-fit rounded-2xl">{item.icon}</div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-slate-900">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed font-serif italic text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Mini News Section */}
      <section className="space-y-12">
        <div className="flex items-center justify-between px-4">
          <h2 className="text-4xl font-serif font-bold flex items-center gap-4">
            <span className="w-2 h-10 bg-red-600 rounded-full inline-block"></span>
            {t('home.news.title')}
          </h2>
          <Link to="/wydarzenia" className="text-xs font-bold uppercase tracking-[0.2em] text-blue-900 hover:underline decoration-2 underline-offset-8">{t('home.news.more')}</Link>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {news.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex flex-col md:flex-row md:items-center justify-between p-10 bg-white border border-slate-100 rounded-[3rem] hover:border-red-200 transition-all cursor-pointer group shadow-sm hover:shadow-md"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-xs font-serif italic text-slate-400">
                  <span className="px-3 py-1 bg-red-50 text-red-700 border border-red-100 text-[10px] font-bold uppercase rounded-lg tracking-wider italic not-italic">{item.tag}</span>
                  <span>{item.date}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 group-hover:text-red-700 transition-colors">{item.title}</h3>
              </div>
              <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 group-hover:bg-blue-900 group-hover:text-white group-hover:border-blue-900 transition-all transform group-hover:translate-x-2">
                <ArrowRight size={20} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote/Vision */}
      <section className="bg-blue-900 text-white p-16 md:p-32 rounded-[4rem] text-center relative overflow-hidden shadow-2xl shadow-blue-900/10">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 text-[20rem] font-serif leading-none italic select-none">“</div>
        </div>
        <div className="relative z-10 space-y-10 max-w-4xl mx-auto">
          <p className="text-3xl md:text-5xl font-serif italic leading-tight">
            {t('home.vision')}
          </p>
          <div className="flex justify-center gap-6 pt-4">
             <Link to="/dolacz" className="px-12 py-4 bg-red-600 text-white rounded-full font-bold hover:scale-105 transition-all shadow-lg shadow-red-900/20">{t('home.joinCommunity')}</Link>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">{t('home.branches.title')} <span className="text-red-700 whitespace-nowrap">{t('home.branches.norway')}</span></h2>
          <p className="text-xl text-blue-900 font-serif italic">{t('home.branches.subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'Agder', 'Akershus', 'Buskerud', 'Innlandet', 
            'Møre og Romsdal', 'Nordland', 'Oslo', 'Rogaland',
            'Telemark + Vestfold', 'Troms + Finnmark', 'Trøndelag', 'Vestland + Østfold'
          ].map((name, i) => (
            <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-3xl text-center group hover:bg-white hover:shadow-xl transition-all duration-500">
               <p className="text-sm font-serif font-bold text-slate-900 group-hover:text-red-700 transition-colors uppercase tracking-wider">{name}</p>
            </div>
          ))}
        </div>
        <div className="text-center pt-8">
          <Link 
            to="/filie" 
            className="inline-flex items-center gap-3 text-red-700 font-bold uppercase tracking-widest text-sm hover:underline decoration-2 underline-offset-8"
          >
            {t('home.branches.more')} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

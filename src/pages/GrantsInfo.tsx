import React from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  ShieldCheck, 
  Heart, 
  Lightbulb, 
  Zap, 
  Users, 
  Target, 
  TrendingUp, 
  Calendar,
  Gem,
  Award,
  ArrowLeft,
  Banknote,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const GrantsInfo: React.FC = () => {
  const { t } = useLanguage();

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="space-y-24 pb-20 max-w-5xl mx-auto"
    >
      <header className="space-y-8">
        <Link to="/projekty" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all group">
          <ArrowLeft size={20} /> <span className="group-hover:underline underline-offset-4">{t('grants.back')}</span>
        </Link>
        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-slate-900 leading-tight">
          {t('grants.title').split(' ')[0]} <span className="text-blue-600">{t('grants.title').split(' ').slice(1).join(' ')}</span>
        </h1>
        <p className="text-2xl text-sky-600 leading-relaxed font-serif italic">
          {t('grants.subtitle')}
        </p>
      </header>

      {/* Section 1: Location */}
      <section className="bg-white p-8 sm:p-12 md:p-16 rounded-[4rem] border border-blue-50 shadow-sm space-y-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.03] pointer-events-none transform translate-x-1/2 -translate-y-1/2">
          <MapPin size={300} />
        </div>
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 border border-blue-100">
            <MapPin size={32} />
          </div>
          <h2 className="text-3xl font-serif font-bold text-slate-900">{t('grants.geo.title')}</h2>
        </div>
        <div className="space-y-6 text-slate-600 font-serif italic text-lg leading-relaxed">
          <p>
            {t('grants.geo.desc1')}
          </p>
          <p>
            {t('grants.geo.desc2')}
          </p>
          <p className="p-8 bg-blue-50 rounded-3xl border border-blue-100 italic">
            {t('grants.geo.quote')}
          </p>
        </div>
      </section>

      {/* Section 2: Formal Criteria */}
      <section className="space-y-12">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 border border-sky-100">
            <ShieldCheck size={32} />
          </div>
          <h2 className="text-3xl font-serif font-bold text-slate-900">{t('grants.formal.title')}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-[3rem] border border-blue-50 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-widest flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">1</span> {t('grants.formal.status.title')}
            </h3>
            <ul className="space-y-4 text-slate-600 font-serif italic">
              <li className="flex gap-3"><span>❧</span> {t('grants.formal.status.list1')}</li>
              <li className="flex gap-3"><span>❧</span> {t('grants.formal.status.list2')}</li>
              <li className="flex gap-3"><span>❧</span> {t('grants.formal.status.list3')}</li>
            </ul>
          </div>

          <div className="bg-white p-10 rounded-[3rem] border border-blue-50 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-widest flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">2</span> {t('grants.formal.contribution.title')}
            </h3>
            <ul className="space-y-4 text-slate-600 font-serif italic">
              <li className="flex gap-3"><span>❧</span> {t('grants.formal.contribution.list1')}</li>
              <li className="flex gap-3"><span>❧</span> {t('grants.formal.contribution.list2')}</li>
              <li className="flex gap-3"><span>❧</span> {t('grants.formal.contribution.list3')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Volunteers - The Heart */}
      <section className="bg-sky-600 text-white p-8 sm:p-12 md:p-20 rounded-[5rem] space-y-12 shadow-2xl shadow-sky-900/20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <Heart size={400} className="mx-auto translate-y-1/4" />
        </div>
        <div className="max-w-3xl space-y-8 relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold italic">{t('grants.volunteers.title')}</h2>
          <p className="text-xl text-blue-50 leading-relaxed font-serif italic">
            {t('grants.volunteers.desc')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
            <div className="p-8 bg-white/10 rounded-3xl border border-white/20">
              <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-xs">{t('grants.volunteers.fund.title')}</h4>
              <p className="text-blue-50 text-sm italic font-serif">{t('grants.volunteers.fund.desc')}</p>
            </div>
            <div className="p-8 bg-white/10 rounded-3xl border border-white/20">
              <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-xs">{t('grants.volunteers.academy.title')}</h4>
              <p className="text-blue-50 text-sm italic font-serif">{t('grants.volunteers.academy.desc')}</p>
            </div>
            <div className="p-8 bg-white/10 rounded-3xl border border-white/20">
              <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-xs">{t('grants.volunteers.workshop.title')}</h4>
              <p className="text-blue-50 text-sm italic font-serif">{t('grants.volunteers.workshop.desc')}</p>
            </div>
            <div className="p-8 bg-white/10 rounded-3xl border border-white/20">
              <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-xs">{t('grants.volunteers.coordination.title')}</h4>
              <p className="text-blue-50 text-sm italic font-serif">{t('grants.volunteers.coordination.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Real Assets & Action */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-10">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 border border-blue-100">
              <Gem size={32} />
            </div>
            <h2 className="text-3xl font-serif font-bold text-slate-900">{t('grants.assets.title')}</h2>
          </div>
          <div className="space-y-6 text-slate-600 font-serif italic text-lg leading-relaxed">
            <p>
              {t('grants.assets.desc')}
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4 p-6 bg-white rounded-3xl border border-blue-50 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 font-bold">A</div>
                <p>{t('grants.assets.a')}</p>
              </li>
              <li className="flex gap-4 p-6 bg-white rounded-3xl border border-blue-50 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 font-bold">B</div>
                <p>{t('grants.assets.b')}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-10">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 border border-sky-100">
              <Zap size={32} />
            </div>
            <h2 className="text-3xl font-serif font-bold text-slate-900">{t('grants.action.title')}</h2>
          </div>
          <div className="space-y-8">
            <div className="p-10 bg-white border border-blue-50 rounded-[3rem] shadow-sm relative overflow-hidden group hover:border-blue-200 transition-all">
              <div className="absolute top-0 right-0 p-6 text-blue-100 opacity-20 group-hover:opacity-40 transition-opacity">
                <Calendar size={80} />
              </div>
              <h4 className="text-xl font-serif font-bold italic text-slate-900 mb-4">{t('grants.action.jarmark.title')}</h4>
              <p className="text-slate-600 font-serif italic leading-relaxed">
                {t('grants.action.jarmark.desc')}
              </p>
            </div>
            <div className="p-10 bg-white border border-blue-50 rounded-[3rem] shadow-sm relative overflow-hidden group hover:border-blue-200 transition-all">
              <div className="absolute top-0 right-0 p-6 text-blue-100 opacity-20 group-hover:opacity-40 transition-opacity">
                <Users size={80} />
              </div>
              <h4 className="text-xl font-serif font-bold italic text-slate-900 mb-4">{t('grants.action.collab.title')}</h4>
              <p className="text-slate-600 font-serif italic leading-relaxed">
                {t('grants.action.collab.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Goals & Numbers */}
      <section className="bg-slate-50 p-8 sm:p-12 md:p-20 rounded-[5rem] border border-blue-100 space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-slate-900">{t('grants.results.title')}</h2>
          <p className="text-sky-600 font-serif italic text-lg">{t('grants.results.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center space-y-2 p-6 bg-white/40 rounded-3xl border border-blue-50 break-words">
            <span className="text-4xl md:text-5xl font-serif font-bold text-blue-600 block">500+</span>
            <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest leading-relaxed">{t('grants.results.participants')}</p>
          </div>
          <div className="text-center space-y-2 p-6 bg-white/40 rounded-3xl border border-blue-50 break-words">
            <span className="text-4xl md:text-5xl font-serif font-bold text-blue-600 block">100+</span>
            <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest leading-relaxed">{t('grants.results.works')}</p>
          </div>
          <div className="text-center space-y-2 p-6 bg-white/40 rounded-3xl border border-blue-50 break-words">
            <span className="text-4xl md:text-5xl font-serif font-bold text-blue-600 block">60%</span>
            <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest leading-relaxed">{t('grants.results.wellbeing')}</p>
          </div>
          <div className="text-center space-y-2 p-6 bg-white/40 rounded-3xl border border-blue-50 break-words">
            <span className="text-4xl md:text-5xl font-serif font-bold text-blue-600 block">20+</span>
            <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest leading-relaxed">{t('grants.results.partnerships')}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold italic text-slate-900 underline decoration-blue-200 underline-offset-8">{t('grants.enable.title')}</h3>
            <ul className="space-y-4 text-slate-600 font-serif italic text-lg leading-snug">
              <li className="flex gap-4"><span>❧</span> {t('grants.enable.list1')}</li>
              <li className="flex gap-4"><span>❧</span> {t('grants.enable.list2')}</li>
              <li className="flex gap-4"><span>❧</span> {t('grants.enable.list3')}</li>
              <li className="flex gap-4"><span>❧</span> {t('grants.enable.list4')}</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold italic text-slate-900 underline decoration-blue-200 underline-offset-8">{t('grants.why.title')}</h3>
            <ul className="space-y-4 text-slate-600 font-serif italic text-lg leading-snug">
              <li className="flex gap-4"><span>❧</span> {t('grants.why.list1')}</li>
              <li className="flex gap-4"><span>❧</span> {t('grants.why.list2')}</li>
              <li className="flex gap-4"><span>❧</span> {t('grants.why.list3')}</li>
              <li className="flex gap-4"><span>❧</span> {t('grants.why.list4')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 6: Budget Summary */}
      <section className="bg-white p-8 sm:p-12 md:p-20 rounded-[5rem] border border-blue-50 shadow-sm space-y-12">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 border border-blue-100">
            <Award size={32} />
          </div>
          <h2 className="text-3xl font-serif font-bold text-slate-900">{t('grants.budget.title')}</h2>
        </div>
        
        <div className="space-y-8">
          <p className="text-xl text-slate-600 font-serif italic leading-relaxed">
            {t('grants.budget.desc')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-[2.5rem] border border-blue-50 space-y-4 flex flex-col min-h-0 break-words">
              <h4 className="text-sm uppercase font-bold text-slate-400 tracking-widest flex-shrink-0">{t('grants.budget.item1.title')}</h4>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 flex-shrink-0">300.000 NOK</p>
              <p className="text-xs text-slate-500 font-serif italic leading-relaxed">{t('grants.budget.item1.desc')}</p>
            </div>
            <div className="bg-slate-50 p-6 sm:p-8 rounded-[2.5rem] border border-blue-50 space-y-4 flex flex-col min-h-0 break-words">
              <h4 className="text-sm uppercase font-bold text-slate-400 tracking-widest flex-shrink-0">{t('grants.budget.item2.title')}</h4>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 flex-shrink-0">300.000 NOK</p>
              <p className="text-xs text-slate-500 font-serif italic leading-relaxed">{t('grants.budget.item2.desc')}</p>
            </div>
            <div className="bg-slate-50 p-6 sm:p-8 rounded-[2.5rem] border border-blue-50 space-y-4 flex flex-col min-h-0 break-words">
              <h4 className="text-sm uppercase font-bold text-slate-400 tracking-widest flex-shrink-0">{t('grants.budget.item3.title')}</h4>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 flex-shrink-0">150.000 NOK</p>
              <p className="text-xs text-slate-500 font-serif italic leading-relaxed">{t('grants.budget.item3.desc')}</p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-dashed border-blue-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-400 font-serif italic text-sm text-center md:text-left">
            {t('grants.budget.quote')}
          </p>
          <a 
            href="#oplaty" 
            className="w-full sm:w-auto px-10 py-4 bg-blue-600 text-white rounded-full font-bold shadow-xl shadow-blue-900/20 hover:scale-105 transition-all text-center"
          >
            {t('grants.support.btn')}
          </a>
        </div>
      </section>

      {/* Section 7: Membership & Fees */}
      <section id="oplaty" className="bg-white p-8 sm:p-12 md:p-20 rounded-[5rem] border border-blue-50 shadow-sm space-y-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          <div className="space-y-8 flex-1 w-full">
            <h2 className="text-4xl font-serif font-bold italic text-slate-900 flex items-center gap-4">
              <Banknote className="text-blue-600 flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12" /> {t('grants.membership.title')}
            </h2>
            <div className="p-10 bg-blue-600 text-white rounded-[4rem] shadow-xl shadow-blue-900/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                <ShieldCheck size={120} />
              </div>
              <div className="space-y-6 relative z-10">
                <div className="space-y-1">
                  <p className="text-sm uppercase font-bold tracking-widest opacity-80">{t('grants.membership.fee.label')}</p>
                  <h3 className="text-5xl md:text-6xl font-serif font-bold">{t('grants.membership.fee.value')}</h3>
                </div>
                
                <div className="space-y-4">
                  <p className="text-xl font-serif font-bold italic border-b border-white/20 pb-4">
                    {t('grants.membership.thanks')}
                  </p>
                  <p className="text-lg font-serif italic text-blue-50">
                    {t('grants.membership.access')}
                  </p>
                  <ul className="space-y-3 font-serif italic text-blue-50">
                    <li className="flex gap-3"><span>•</span> {t('grants.membership.list1')},</li>
                    <li className="flex gap-3"><span>•</span> {t('grants.membership.list2')},</li>
                    <li className="flex gap-3"><span>•</span> {t('grants.membership.list3')},</li>
                    <li className="flex gap-3"><span>•</span> {t('grants.membership.list4')}.</li>
                  </ul>
                  <p className="text-sm font-bold bg-white/10 p-4 rounded-2xl border border-white/10 inline-block">
                    {t('grants.membership.symbolic')}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-10 bg-slate-50 rounded-[4rem] border border-blue-100 space-y-6">
              <h3 className="text-2xl font-serif font-bold text-slate-900">{t('grants.payment.title')}</h3>
              <div className="space-y-4 font-serif italic text-slate-600">
                <p><span className="font-bold text-slate-900 not-italic">{t('grants.payment.recipient')}</span> Skandias Talentsmie</p>
                <div className="flex items-center gap-4">
                  <div className="px-4 py-2 bg-[#ff5b24] text-white rounded-xl font-bold not-italic">{t('grants.payment.vipps')} #968883</div>
                </div>
                <div className="pt-4 border-t border-blue-100">
                  <p className="font-bold text-slate-900 not-italic mb-1">{t('grants.payment.bank')}</p>
                  <p className="text-xl text-slate-900 font-bold not-italic">1520 23 71008</p>
                </div>
                <p className="p-4 bg-blue-50 rounded-2xl border border-blue-100 text-sm">
                  <span className="font-bold text-blue-600 not-italic">{t('grants.payment.titleLabel')}</span><br />
                  {t('grants.payment.titleValue')}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8 flex-1 w-full">
            <h3 className="text-3xl font-serif font-bold text-slate-900 flex items-center gap-4">
               {t('grants.how.title')}
            </h3>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: t('grants.how.step1.title'),
                  desc: t('grants.how.step1.desc'),
                  details: t('grants.how.step1.details')
                },
                {
                  step: "2",
                  title: t('grants.how.step2.title'),
                  desc: t('grants.how.step2.desc'),
                  contact: t('grants.how.step2.contact')
                },
                {
                  step: "3",
                  title: t('grants.how.step3.title'),
                  desc: t('grants.how.step3.desc')
                }
              ].map((item, idx) => (
                <div key={idx} className="p-8 bg-white border border-blue-50 rounded-[3rem] shadow-sm space-y-4 hover:border-blue-200 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-900/20">
                      {item.step}
                    </div>
                    <h4 className="text-xl font-serif font-bold text-slate-900">{item.title}</h4>
                  </div>
                  <p className="text-slate-600 font-serif italic">{item.desc}</p>
                  {item.details && (
                    <pre className="text-xs bg-slate-50 p-4 rounded-2xl font-mono text-slate-700 whitespace-pre-wrap leading-relaxed border border-slate-100">
                      {item.details}
                    </pre>
                  )}
                  {item.contact && (
                    <div className="text-sm bg-blue-50 p-4 rounded-2xl font-bold text-blue-600 italic border border-blue-100 whitespace-pre-wrap">
                      {item.contact}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="p-10 bg-slate-900 text-white rounded-[4rem] text-center space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.2),transparent)] pointer-events-none"></div>
              <p className="text-lg font-serif italic leading-relaxed relative z-10">
                {t('grants.footer.joinNow')}
              </p>
              <Link to="/kontakt" className="inline-block px-10 py-4 bg-blue-600 text-white rounded-full font-bold text-sm sm:text-base hover:scale-105 transition-all shadow-xl shadow-blue-900/40 relative z-10">
                {t('grants.footer.contactBtn')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default GrantsInfo;

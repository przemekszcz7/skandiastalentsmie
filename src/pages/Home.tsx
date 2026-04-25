
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star, Users, Palette, Heart, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const news = [
    { title: 'Pierwsza filia Agder już działa!', date: '24.04.2026', tag: 'Ważne' },
    { title: 'Warsztaty makramy w Oslo - zapisy otwarte', date: '21.04.2026', tag: 'Warsztaty' },
    { title: 'Nowy projekt "Słowiańska Kuźnia" 13x13', date: '15.04.2026', tag: 'Projekt' },
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
              src="https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/561789674_122142308822877648_8151444745707376127_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=vDwSNfzKtxEQ7kNvwF7X7NW&_nc_oc=AdrhR3UyoomnCy9X6YptbZv0C3O0fkwFQQ30FRKbJx8_YvT_Wk5sHyENjJBwL7s5FMk&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=yrhmPex5imFPqU64XijZjQ&oh=00_Af179rYN69irUD-1wuWoo1ZHilYCMxwIHdkvBYNjd7e6Lw&oe=69F1327F" 
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
            Skandias <span className="text-blue-600">Talentsmie</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl text-sky-600 font-serif italic"
          >
            Skandii kuźnia talentów
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/40 backdrop-blur-sm p-10 rounded-[3rem] border border-blue-50 mt-12 max-w-4xl mx-auto shadow-sm"
          >
            <p className="text-xl text-slate-700 leading-relaxed font-serif italic">
              „Stowarzyszenie, które łączy kreatywne dusze i twórcze ręce w Norwegii. Promujemy talenty, wspieramy rękodzielników, artystów i pasjonatów. Jeśli tworzysz – pokaż to światu razem z nami!”
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
              className="w-full sm:w-auto bg-blue-600 text-white px-12 py-5 rounded-full font-bold text-lg shadow-xl shadow-blue-900/20 hover:scale-105 transition-all flex items-center justify-center gap-3"
            >
              Dołącz do nas <ArrowRight size={20} />
            </Link>
            <Link 
              to="/o-nas" 
              className="w-full sm:w-auto bg-white text-blue-600 border border-blue-100 px-12 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-sm"
            >
              Odkryj naszą misję
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="https://www.facebook.com/groups/2466069263743964" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#1877F2] text-white rounded-full font-bold shadow-lg hover:scale-105 transition-all"
            >
              <Facebook size={20} /> Grupa na Facebooku
            </a>
            <a 
              href="https://www.facebook.com/SkandiiKuzniaTalentow" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1877F2] border border-[#1877F2]/20 rounded-full font-bold shadow-sm hover:scale-105 transition-all"
            >
              <Facebook size={20} /> Śledź nas na FB
            </a>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 text-sky-600/10 pointer-events-none blur-md">
          <Palette size={400} />
        </div>
      </section>

      {/* Feature Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <Heart className="text-blue-600" />, title: 'Pasja', desc: 'Wierzymy, że każdy ma w sobie iskrę twórczości. Każde dzieło to osobna historia.' },
          { icon: <Users className="text-blue-600" />, title: 'Wspólnota', desc: 'Razem budujemy życie społeczne w Norwegii. Silni więziami, połączeni kulturą.' },
          { icon: <Star className="text-blue-600" />, title: 'Rozwój', desc: 'Wspieramy pasjonatów w budowaniu rozpoznawalności i szlifowaniu talentu.' },
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -8 }}
            className="p-10 bg-white border border-blue-50 shadow-sm rounded-[3rem] hover:shadow-xl transition-all duration-500"
          >
            <div className="mb-6 p-4 bg-blue-50/50 w-fit rounded-2xl">{item.icon}</div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-slate-900">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed font-serif italic text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Mini News Section */}
      <section className="space-y-12">
        <div className="flex items-center justify-between px-4">
          <h2 className="text-4xl font-serif font-bold flex items-center gap-4">
            <span className="w-2 h-10 bg-blue-600 rounded-full inline-block"></span>
            Aktualności
          </h2>
          <Link to="/wydarzenia" className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 hover:underline decoration-2 underline-offset-8">Więcej aktualności</Link>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {news.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex flex-col md:flex-row md:items-center justify-between p-10 bg-white border border-blue-50 rounded-[3rem] hover:border-blue-200 transition-all cursor-pointer group shadow-sm hover:shadow-md"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-xs font-serif italic text-slate-400">
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 border border-blue-100 text-[10px] font-bold uppercase rounded-lg tracking-wider italic not-italic">{item.tag}</span>
                  <span>{item.date}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{item.title}</h3>
              </div>
              <div className="w-12 h-12 rounded-full border border-blue-100 flex items-center justify-center text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:translate-x-2">
                <ArrowRight size={20} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote/Vision */}
      <section className="bg-blue-600 text-white p-16 md:p-32 rounded-[4rem] text-center relative overflow-hidden shadow-2xl shadow-blue-900/10">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 text-[20rem] font-serif leading-none italic select-none">“</div>
        </div>
        <div className="relative z-10 space-y-10 max-w-4xl mx-auto">
          <p className="text-3xl md:text-5xl font-serif italic leading-tight">
            "Kultura to nie tylko piękne przedmioty, to przede wszystkim więzi, które tworzymy, pracując ramie w ramie."
          </p>
          <div className="flex justify-center gap-6 pt-4">
             <Link to="/dolacz" className="px-12 py-4 bg-white text-blue-600 rounded-full font-bold hover:scale-105 transition-all">Dołącz do wspólnoty</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

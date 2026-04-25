
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, FileText, Banknote, PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-24 pb-20">
      <header className="space-y-8 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-slate-900">Projekty i <span className="text-blue-600">pomysły</span></h1>
        <p className="text-2xl text-sky-600 max-w-4xl leading-relaxed font-serif italic">
          Skandias Talentsmie to miejsce, gdzie Twój pomysł może stać się rzeczywistością. Zgłoś swoją inicjatywę! Razem przekujemy marzenia w czyn.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <section className="bg-white p-12 rounded-[4rem] border border-blue-50 space-y-10 shadow-sm transform -rotate-1">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-slate-50 border border-blue-50 rounded-3xl flex items-center justify-center text-blue-600">
              <PlusCircle size={40} />
            </div>
            <h2 className="text-3xl font-serif font-bold text-slate-900">Dodaj swój pomysł</h2>
          </div>
          <p className="text-slate-600 leading-relaxed font-serif text-lg italic">
            Masz wizję na nowe warsztaty? Chciałbyś zorganizować kiermasz w swoim mieście? Wypełnij krótki formularz, a my pomożemy Ci to zrealizować.
          </p>
          <button className="w-full py-5 bg-blue-600 text-white rounded-full font-bold text-lg shadow-xl shadow-blue-900/20 hover:scale-[1.02] transition-all">
            Formularz zgłoszeniowy
          </button>
        </section>

        <section className="bg-sky-600 text-white p-12 rounded-[4rem] border border-blue-100 space-y-10 shadow-2xl shadow-sky-900/10 transform rotate-1">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-white/10 border border-white/20 rounded-3xl flex items-center justify-center text-white">
              <Banknote size={40} />
            </div>
            <h2 className="text-3xl font-serif font-bold italic">Granty i wsparcie</h2>
          </div>
          <p className="text-blue-50 leading-relaxed font-serif text-lg italic">
            Pomagamy naszym członkom w uzyskiwaniu dofinansowań i grantów na cele artystyczno-kulturalne. Nasz zespół finansowy służy wsparciem w formalnościach.
          </p>
          <Link 
            to="/projekty/info" 
            className="block w-full py-5 bg-white text-sky-600 rounded-full font-bold text-lg text-center hover:scale-[1.02] transition-all shadow-lg shadow-sky-900/20"
          >
            Dowiedz się więcej
          </Link>
        </section>
      </div>

      <section className="bg-white p-16 md:p-24 rounded-[4rem] border border-blue-50 space-y-12 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none rotate-45 transform translate-x-1/2 -translate-y-1/2">
           <Lightbulb size={300} className="text-blue-600" />
        </div>
        <h2 className="text-4xl font-serif font-bold italic flex items-center gap-4 text-slate-900">
          <Lightbulb className="text-blue-600" /> Co obecnie planujemy?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['13 x 13: Sieć 13 filii regonanych', 'Centrum Songe: Przebudowa pracowni', 'Słowiański Jarmark Julemarked'].map((p, i) => (
            <div key={i} className="p-10 bg-slate-50 border border-blue-50 rounded-[2.5rem] relative shadow-sm group hover:border-blue-200 transition-all hover:-translate-y-1">
              <span className="text-[9px] uppercase font-bold text-blue-600 tracking-[0.2em] block mb-4 italic">Projekt Aktywny ❦</span>
              <p className="text-xl font-serif font-bold text-slate-900 group-hover:text-blue-600 transition-colors italic">{p}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

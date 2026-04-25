
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Facebook, MapPin, MessageSquare, ExternalLink } from 'lucide-react';

export default function Contact() {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeIcjPJ2fMTNAJ_OBLWE7Wjjyq0hDRt8ZW_I0Y44U3enj5XPA/viewform";

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-24 pb-20">
      <header className="space-y-8 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-slate-900">Napisz <span className="text-red-700">do nas</span></h1>
        <p className="text-2xl text-blue-900 max-w-4xl leading-relaxed font-serif italic">
          Masz pytania? Chcesz do nas dołączyć? Wypełnij nasz formularz zgłoszeniowy lub skontaktuj się z nami bezpośrednio.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-12">
          <section className="space-y-10">
            <h2 className="text-3xl font-serif font-bold flex items-center gap-4 text-slate-900">
              <MessageSquare className="text-red-700" /> Formularz kontaktu
            </h2>
            
            <div className="bg-white p-8 sm:p-10 md:p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-8 text-center sm:text-left">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-slate-900 italic">Dołącz do nas!</h3>
                <p className="text-slate-600 font-serif italic leading-relaxed text-lg">
                  Najszybszym sposobem na kontakt z nami i zgłoszenie chęci dołączenia jest nasz oficjalny formularz Google. Kliknij poniższy przycisk, aby go otworzyć.
                </p>
              </div>
              
              <a 
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full bg-red-700 text-white py-6 px-4 rounded-full font-bold text-base sm:text-xl shadow-xl shadow-red-900/20 hover:scale-[1.02] active:scale-[0.98] transition-all group"
              >
                Otwórz formularz zgłoszeniowy <ExternalLink size={20} className="sm:w-6 sm:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              
              <p className="text-xs text-slate-400 font-serif italic">
                Formularz otworzy się w nowej karcie (Google Forms).
              </p>
            </div>
          </section>
        </div>

        <div className="space-y-12">
          <section className="bg-white p-8 sm:p-12 rounded-[4rem] border border-slate-100 space-y-10 shadow-sm transform rotate-1">
            <h2 className="text-3xl font-serif font-bold text-slate-900">Informacje</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-red-700 flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase font-bold text-slate-400 tracking-[0.2em] mb-1">Główny e-mail</p>
                  <a href="mailto:post@skandiatalentsmie.no" className="text-xl sm:text-2xl font-serif font-bold text-slate-900 hover:text-red-700 transition-colors italic break-all">post@skandiatalentsmie.no</a>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-red-700 flex-shrink-0">
                  <Facebook size={24} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase font-bold text-slate-400 tracking-[0.2em] mb-1">Facebook</p>
                  <a href="https://www.facebook.com/SkandiiKuzniaTalentow" target="_blank" rel="noopener noreferrer" className="text-xl sm:text-2xl font-serif font-bold text-slate-900 hover:text-red-700 transition-colors italic underline decoration-1 underline-offset-8">Odwiedź nas</a>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-red-700 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase font-bold text-slate-400 tracking-[0.2em] mb-1">Adres główny</p>
                  <p className="text-xl sm:text-2xl font-serif font-bold text-slate-900 italic leading-tight">Agder (Kristiansand / Arendal / Songe)</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-blue-950 text-white p-8 sm:p-12 rounded-[3rem] space-y-8 shadow-2xl shadow-blue-900/10">
            <h3 className="text-2xl font-serif font-bold italic">E-maile filii i działów:</h3>
            <ul className="text-sm space-y-4 opacity-90 font-serif italic">
              <li className="flex gap-4"><span>❧</span> Członkostwo: medlemskap@skandiatalentsmie.no</li>
              <li className="flex gap-4"><span>❧</span> Finanse: okonomi@skandiatalentsmie.no</li>
              <li className="flex gap-4"><span>❧</span> Projekty: prosjekt@skandiatalentsmie.no</li>
              <li className="pt-4 border-t border-white/20 opacity-60">Dla każdego województwa: [wojewodztwo]@skandiatalentsmie.no</li>
            </ul>
          </section>
        </div>
      </div>
    </motion.div>
  );
}

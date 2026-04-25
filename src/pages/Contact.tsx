
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Facebook, MapPin, Send, MessageSquare, Loader2 } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    const formData = new FormData(formRef.current);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
      createdAt: serverTimestamp(),
    };

    try {
      await addDoc(collection(db, 'messages'), data);
      setSent(true);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'messages');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-24 pb-20">
      <header className="space-y-8 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-slate-900">Napisz <span className="text-blue-600">do nas</span></h1>
        <p className="text-2xl text-sky-600 max-w-4xl leading-relaxed font-serif italic">
          Masz pytania? Chcesz do nas dołączyć? Napisz do nas lub odwiedź nas w mediach społecznościowych. Czekamy na każde słowo.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-12">
          <section className="space-y-10">
            <h2 className="text-3xl font-serif font-bold flex items-center gap-4 text-slate-900">
              <MessageSquare className="text-blue-600" /> Formularz kontaktu
            </h2>
            {sent ? (
              <div className="p-12 bg-blue-50/50 border border-blue-100 rounded-[3rem] text-center space-y-6 shadow-sm rotate-1">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full mx-auto flex items-center justify-center shadow-lg shadow-blue-900/20">
                  <Send size={24} />
                </div>
                <h3 className="text-3xl font-serif font-bold text-slate-900 italic">Wiadomość wysłana!</h3>
                <p className="text-lg text-slate-600 font-serif italic">Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.</p>
                <button onClick={() => setSent(false)} className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] pt-4 hover:underline underline-offset-8">Wyślij kolejną</button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 bg-white p-10 md:p-12 rounded-[4rem] border border-blue-50 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-slate-400 px-1 tracking-widest">Imię i nazwisko</label>
                    <input name="name" type="text" required className="w-full bg-slate-50 border border-blue-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all font-serif italic" placeholder="Twoje imię" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-slate-400 px-1 tracking-widest">E-mail</label>
                    <input name="email" type="email" required className="w-full bg-slate-50 border border-blue-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all font-serif italic" placeholder="twoj@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-slate-400 px-1 tracking-widest">Wiadomość</label>
                  <textarea name="message" required rows={5} className="w-full bg-slate-50 border border-blue-100 rounded-3xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all font-serif italic" placeholder="W czym możemy pomóc?"></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-blue-600 text-white py-5 rounded-full font-bold text-lg shadow-xl shadow-blue-900/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={24} />
                      Wysyłanie...
                    </>
                  ) : (
                    'Wyślij wiadomość'
                  )}
                </button>
              </form>
            )}
          </section>
        </div>

        <div className="space-y-12">
          <section className="bg-white p-12 rounded-[4rem] border border-blue-50 space-y-10 shadow-sm transform rotate-1">
            <h2 className="text-3xl font-serif font-bold text-slate-900">Informacje</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-50 border border-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-slate-400 tracking-[0.2em] mb-1">Główny e-mail</p>
                  <a href="mailto:post@skandiatalentsmie.no" className="text-2xl font-serif font-bold text-slate-900 hover:text-blue-600 transition-colors italic">post@skandiatalentsmie.no</a>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-50 border border-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                  <Facebook size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-slate-400 tracking-[0.2em] mb-1">Facebook</p>
                  <a href="https://www.facebook.com/SkandiiKuzniaTalentow" target="_blank" rel="noopener noreferrer" className="text-2xl font-serif font-bold text-slate-900 hover:text-blue-600 transition-colors italic underline decoration-1 underline-offset-8">Odwiedź nas</a>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-50 border border-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-slate-400 tracking-[0.2em] mb-1">Adres główny</p>
                  <p className="text-2xl font-serif font-bold text-slate-900 italic leading-tight">Agder (Kristiansand / Arendal / Songe)</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-sky-600 text-white p-12 rounded-[3rem] space-y-8 shadow-2xl shadow-sky-900/10">
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

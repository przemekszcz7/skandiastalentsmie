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
  Banknote
} from 'lucide-react';
import { Link } from 'react-router-dom';

const GrantsInfo: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="space-y-24 pb-20 max-w-5xl mx-auto"
    >
      <header className="space-y-8">
        <Link to="/projekty" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all group">
          <ArrowLeft size={20} /> <span className="group-hover:underline underline-offset-4">Powrót do projektów</span>
        </Link>
        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-slate-900 leading-tight">
          Granty i <span className="text-blue-600">wsparcie</span>
        </h1>
        <p className="text-2xl text-sky-600 leading-relaxed font-serif italic">
          Szczegółowe informacje o celach, lokalizacji i wpływie społecznym Skandias Talentsmie.
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
          <h2 className="text-3xl font-serif font-bold text-slate-900">Geografia i lokalizacja</h2>
        </div>
        <div className="space-y-6 text-slate-600 font-serif italic text-lg leading-relaxed">
          <p>
            Stowarzyszenie Skandias Talentsmie jest formalnie zarejestrowane w <span className="text-slate-900 font-bold not-italic">Grimstad</span>, czyli w regionie Agder, a od dnia 16 października 2025 roku przejmie nową, stałą siedzibę w <span className="text-slate-900 font-bold not-italic">Songe (Sliperikleiva 2, gmina Tvedestrand, Agder)</span>.
          </p>
          <p>
            Dzięki temu projekt będzie realizowany w pełni na obszarze objętym programem – <span className="text-slate-900 font-bold not-italic">Agder i Telemark</span>. Nasza lokalizacja spełnia więc wszystkie wymagania geograficzne i zapewnia, że działania będą dostępne zarówno dla mieszkańców Agder, jak i dla społeczności z sąsiedniego regionu Telemark.
          </p>
          <p className="p-8 bg-blue-50 rounded-3xl border border-blue-100 italic">
            "Posiadanie własnej nieruchomości w Songe daje nam gwarancję trwałości i ciągłości działań, a jednocześnie mocno osadza projekt w lokalnej społeczności regionu Agder."
          </p>
        </div>
      </section>

      {/* Section 2: Formal Criteria */}
      <section className="space-y-12">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 border border-sky-100">
            <ShieldCheck size={32} />
          </div>
          <h2 className="text-3xl font-serif font-bold text-slate-900">Spełnienie kryteriów formalnych</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-[3rem] border border-blue-50 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-widest flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">1</span> Status prawny
            </h3>
            <ul className="space-y-4 text-slate-600 font-serif italic">
              <li className="flex gap-3"><span>❧</span> Jesteśmy stowarzyszeniem (forening) zarejestrowanym w Brønnøysundregistrene – Enhetsregisteret.</li>
              <li className="flex gap-3"><span>❧</span> Posiadamy własny numer organizacyjny i działamy zgodnie z Frivillighetsregisterloven.</li>
              <li className="flex gap-3"><span>❧</span> Jesteśmy organizacją non-profit – całość środków jest przeznaczana na cele statutowe.</li>
            </ul>
          </div>

          <div className="bg-white p-10 rounded-[3rem] border border-blue-50 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-widest flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">2</span> Unikalny wkład
            </h3>
            <ul className="space-y-4 text-slate-600 font-serif italic">
              <li className="flex gap-3"><span>❧</span> Brak powielania zadań sektora publicznego (nie zastępujemy szkół ani NAV).</li>
              <li className="flex gap-3"><span>❧</span> Oferujemy aktywności kulturalne i integracyjne, które są dobrowolne i dodatkowe.</li>
              <li className="flex gap-3"><span>❧</span> Tworzymy sieć synergii między organizacjami w regionie.</li>
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
          <h2 className="text-4xl md:text-6xl font-serif font-bold italic">Serce projektu: Wolontariusze</h2>
          <p className="text-xl text-blue-50 leading-relaxed font-serif italic">
            Bez wolontariuszy Skandias Talentsmie nie miałoby sensu. To oni malują pierwsze dekoracje, szykują sale, uczą innych, dzielą się swoją wiedzą i czasem.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
            <div className="p-8 bg-white/10 rounded-3xl border border-white/20">
              <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-xs">Fundusz Godzin i Dojazdów</h4>
              <p className="text-blue-50 text-sm italic font-serif">Zwroty kosztów, by nikt nie musiał dopłacać z własnej kieszeni.</p>
            </div>
            <div className="p-8 bg-white/10 rounded-3xl border border-white/20">
              <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-xs">Akademia Wolontariatu</h4>
              <p className="text-blue-50 text-sm italic font-serif">Szkolenia, certyfikacja i nowe kompetencje na lata.</p>
            </div>
            <div className="p-8 bg-white/10 rounded-3xl border border-white/20">
              <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-xs">Wyposażenie pracowni</h4>
              <p className="text-blue-50 text-sm italic font-serif">Profesjonalne narzędzia i bezpieczne stanowiska pracy.</p>
            </div>
            <div className="p-8 bg-white/10 rounded-3xl border border-white/20">
              <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-xs">Koordynacja i opieka</h4>
              <p className="text-blue-50 text-sm italic font-serif">Spójny system wsparcia, by nikt nie "zginął w tłumie".</p>
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
            <h2 className="text-3xl font-serif font-bold text-slate-900">Realna baza i stabilność</h2>
          </div>
          <div className="space-y-6 text-slate-600 font-serif italic text-lg leading-relaxed">
            <p>
              Zakupiliśmy nieruchomość w Songe ze środków własnych członków. To inwestycja, która pokazuje naszą wiarę w długofalowy rozwój.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4 p-6 bg-white rounded-3xl border border-blue-50 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 font-bold">A</div>
                <p>Nowy budynek z 2009 roku (dawne przedszkole) – centrum warsztatowe.</p>
              </li>
              <li className="flex gap-4 p-6 bg-white rounded-3xl border border-blue-50 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 font-bold">B</div>
                <p>Stary dom z 1900 roku – przestrzeń inspiracji łącząca tradycję z nowoczesnością.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-10">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 border border-sky-100">
              <Zap size={32} />
            </div>
            <h2 className="text-3xl font-serif font-bold text-slate-900">Co już robimy?</h2>
          </div>
          <div className="space-y-8">
            <div className="p-10 bg-white border border-blue-50 rounded-[3rem] shadow-sm relative overflow-hidden group hover:border-blue-200 transition-all">
              <div className="absolute top-0 right-0 p-6 text-blue-100 opacity-20 group-hover:opacity-40 transition-opacity">
                <Calendar size={80} />
              </div>
              <h4 className="text-xl font-serif font-bold italic text-slate-900 mb-4">Jarmark Bożonarodzeniowy</h4>
              <p className="text-slate-600 font-serif italic leading-relaxed">
                Wydarzenie w filii Landvik Skomle z ogromnym zainteresowaniem lokalnej społeczności.
              </p>
            </div>
            <div className="p-10 bg-white border border-blue-50 rounded-[3rem] shadow-sm relative overflow-hidden group hover:border-blue-200 transition-all">
              <div className="absolute top-0 right-0 p-6 text-blue-100 opacity-20 group-hover:opacity-40 transition-opacity">
                <Users size={80} />
              </div>
              <h4 className="text-xl font-serif font-bold italic text-slate-900 mb-4">Współpraca instytucjonalna</h4>
              <p className="text-slate-600 font-serif italic leading-relaxed">
                Regularnie współpracujemy z instytucjami publicznymi, budując sieć partnerstw.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Goals & Numbers */}
      <section className="bg-slate-50 p-8 sm:p-12 md:p-20 rounded-[5rem] border border-blue-100 space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-slate-900">Mierzalne rezultaty (Rok 1)</h2>
          <p className="text-sky-600 font-serif italic text-lg">Nasze cele na najbliższy czas są konkretne i ambitne.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center space-y-2 p-6 bg-white/40 rounded-3xl border border-blue-50 break-words">
            <span className="text-4xl md:text-5xl font-serif font-bold text-blue-600 block">500+</span>
            <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest leading-relaxed">Uczestników warsztatów</p>
          </div>
          <div className="text-center space-y-2 p-6 bg-white/40 rounded-3xl border border-blue-50 break-words">
            <span className="text-4xl md:text-5xl font-serif font-bold text-blue-600 block">100+</span>
            <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest leading-relaxed">Wystawionych prac</p>
          </div>
          <div className="text-center space-y-2 p-6 bg-white/40 rounded-3xl border border-blue-50 break-words">
            <span className="text-4xl md:text-5xl font-serif font-bold text-blue-600 block">60%</span>
            <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest leading-relaxed">Wzrost dobrostanu</p>
          </div>
          <div className="text-center space-y-2 p-6 bg-white/40 rounded-3xl border border-blue-50 break-words">
            <span className="text-4xl md:text-5xl font-serif font-bold text-blue-600 block">20+</span>
            <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest leading-relaxed">Partnerstw lokalnych</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold italic text-slate-900 underline decoration-blue-200 underline-offset-8">Co umożliwiamy?</h3>
            <ul className="space-y-4 text-slate-600 font-serif italic text-lg leading-snug">
              <li className="flex gap-4"><span>❧</span> Scena i widoczność dla twórców (wystawy, jarmarki).</li>
              <li className="flex gap-4"><span>❧</span> Kompetencje twórcze i „okołozawodowe” (wycena, marketing).</li>
              <li className="flex gap-4"><span>❧</span> Most pokoleń: seniorzy jako mistrzowie tradycji.</li>
              <li className="flex gap-4"><span>❧</span> „Norweski w ruchu”: nauka języka przy rzemiośle.</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold italic text-slate-900 underline decoration-blue-200 underline-offset-8">Dlaczego my?</h3>
            <ul className="space-y-4 text-slate-600 font-serif italic text-lg leading-snug">
              <li className="flex gap-4"><span>❧</span> Federacyjność: model Agder to pilotaż dla całej Norwegii.</li>
              <li className="flex gap-4"><span>❧</span> Etyka i ekologia: recykling i naprawa.</li>
              <li className="flex gap-4"><span>❧</span> Godność twórcy: uświadamianie wartości pracy rąk.</li>
              <li className="flex gap-4"><span>❧</span> Trwałość: własna siedziba gwarantuje ciągłość.</li>
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
          <h2 className="text-3xl font-serif font-bold text-slate-900">Budżet i finansowanie (3 lata)</h2>
        </div>
        
        <div className="space-y-8">
          <p className="text-xl text-slate-600 font-serif italic leading-relaxed">
            Całkowity budżet projektu wynosi <span className="text-slate-900 font-bold not-italic">750.000 NOK</span>. Każda korona jest inwestycją w trwały mechanizm zmiany społecznej.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-[2.5rem] border border-blue-50 space-y-4 flex flex-col min-h-0 break-words">
              <h4 className="text-sm uppercase font-bold text-slate-400 tracking-widest flex-shrink-0">Adaptacja przestrzeni</h4>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 flex-shrink-0">300.000 NOK</p>
              <p className="text-xs text-slate-500 font-serif italic leading-relaxed">Remont sali głównej, wyposażenie pracowni, kuchni i altan w ogrodzie.</p>
            </div>
            <div className="bg-slate-50 p-6 sm:p-8 rounded-[2.5rem] border border-blue-50 space-y-4 flex flex-col min-h-0 break-words">
              <h4 className="text-sm uppercase font-bold text-slate-400 tracking-widest flex-shrink-0">Program Wolontariatu</h4>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 flex-shrink-0">300.000 NOK</p>
              <p className="text-xs text-slate-500 font-serif italic leading-relaxed">Fundusz dojazdów, Akademia Wolontariatu, ubezpieczenia i koordynacja.</p>
            </div>
            <div className="bg-slate-50 p-6 sm:p-8 rounded-[2.5rem] border border-blue-50 space-y-4 flex flex-col min-h-0 break-words">
              <h4 className="text-sm uppercase font-bold text-slate-400 tracking-widest flex-shrink-0">Program kulturalny</h4>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 flex-shrink-0">150.000 NOK</p>
              <p className="text-xs text-slate-500 font-serif italic leading-relaxed">Organizacja jarmarków (2/rok) oraz cyklu warsztatów i wystaw.</p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-dashed border-blue-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-400 font-serif italic text-sm text-center md:text-left">
            "Inwestując w wolontariuszy, inwestujecie w trwały system zmiany. Każda godzina wsparcia zamienia się w godziny nauki i dobra wspólnego."
          </p>
          <a 
            href="#oplaty" 
            className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold shadow-xl shadow-blue-900/20 hover:scale-105 transition-all text-center whitespace-nowrap"
          >
            Wesprzyj naszą misję
          </a>
        </div>
      </section>

      {/* Section 7: Membership & Fees */}
      <section id="oplaty" className="bg-white p-8 sm:p-12 md:p-20 rounded-[5rem] border border-blue-50 shadow-sm space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-8 flex-1">
            <h2 className="text-4xl font-serif font-bold italic text-slate-900 flex items-center gap-4">
              <Banknote className="text-blue-600" /> Opłata i członkostwo
            </h2>
            <div className="p-10 bg-blue-600 text-white rounded-[3rem] shadow-xl shadow-blue-900/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                <ShieldCheck size={120} />
              </div>
              <p className="text-sm uppercase font-bold tracking-widest opacity-80 mb-2">Roczna składka</p>
              <h3 className="text-5xl font-serif font-bold mb-4">500 NOK</h3>
              <p className="text-lg font-serif italic text-blue-50">
                Członkostwo odnawia się automatycznie co 12 miesięcy (subskrypcja), gwarantując ciągłość wsparcia dla stowarzyszenia.
              </p>
              <div className="mt-8 pt-8 border-t border-white/20 space-y-2 text-sm opacity-90 italic">
                <p>❧ Rezygnacja jest możliwa w każdej chwili.</p>
                <p>❧ Opłata jest przeznaczona w całości na cele statutowe.</p>
              </div>
            </div>
          </div>

          <div className="space-y-8 flex-1">
            <h3 className="text-2xl font-serif font-bold text-slate-900">Instrukcja płatności</h3>
            <div className="space-y-6">
              <div className="p-8 bg-slate-50 border border-blue-100 rounded-3xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-widest">Vipps - Autopłatność</h4>
                </div>
                <p className="text-slate-600 font-serif italic">Najszybsza metoda. Płatność będzie pobierana automatycznie co rok.</p>
                <a href="#" className="inline-block px-8 py-3 bg-[#ff5b24] text-white rounded-full font-bold shadow-lg hover:scale-105 transition-all">
                  Aktywuj przez Vipps
                </a>
              </div>

              <div className="p-8 bg-slate-50 border border-blue-100 rounded-3xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-200 text-slate-600 rounded-full flex items-center justify-center font-bold">2</div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-widest">Przelew tradycyjny</h4>
                </div>
                <p className="text-slate-600 font-serif italic leading-relaxed">
                  Numer konta: <span className="font-bold not-italic text-slate-900">1234.56.78901</span><br />
                  Tytuł: „Składka – [Twoje Imię i Nazwisko]”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default GrantsInfo;

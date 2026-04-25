
import React from 'react';
import { motion } from 'framer-motion';
import { SLAVIC_COUNTRIES } from '../constants';
import { Users, Target, History, Heart, Sparkles, Clock, Globe, ShieldCheck } from 'lucide-react';

export default function About() {
  const goals = [
    "Przeciwdziałać samotności i izolacji społecznej.",
    "Budować realną integrację między kulturą słowiańską i skandynawską – bez konfliktu, z szacunkiem i dumą.",
    "Wzmacniać zdrowie psychiczne poprzez relacje, sprawczość i poczucie sensu.",
    "Wydobywać i promować talenty rzemieślników, rękodzielników i twórców — tych „z cienia”.",
    "Tworzyć most międzypokoleniowy: starsi przekazują tradycję, młodzi wnoszą kompetencje cyfrowe i energię.",
    "Budować sieć miejsc w Norwegii, gdzie kultura i twórczość stają się narzędziem wspólnoty."
  ];

  const societyBenefits = [
    { title: "Mniej samotności", desc: "Mniej kryzysów psychicznych w regionie." },
    { title: "Więcej relacji", desc: "Większe bezpieczeństwo społeczne i zaufanie." },
    { title: "Integracja w praktyce", desc: "Lepsze funkcjonowanie migrantów w lokalnej społeczności." },
    { title: "Aktywizacja", desc: "Większa samodzielność i sprawczość osób wykluczonych." },
    { title: "Przestrzeń dla talentów", desc: "Rozwój kultury i lokalnej kreatywności." },
    { title: "Mosty międzypokoleniowe", desc: "Młodzi nie tracą korzeni, starsi odzyskują sens." }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-32 pb-20">
      {/* Narrative Intro */}
      <section className="space-y-12">
        <header className="space-y-6">
          <h2 className="text-red-700 font-bold uppercase tracking-[0.3em] text-[10px]">Opowieść o nas</h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight font-serif text-slate-900">
            Skandias <span className="text-red-700">Talentsmie</span> — Kim jesteśmy i dlaczego jesteśmy potrzebni
          </h1>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-xl text-gray-700 leading-relaxed font-serif italic">
            <p>
              "W Norwegii można żyć bezpiecznie, pracować uczciwie, płacić podatki, być „samowystarczalnym” — i jednocześnie każdego dnia czuć się samotnym, niewidzialnym, jakby się stało na korytarzu między dwoma światami."
            </p>
            <p>
              "Tego nie widać w statystykach. Ale to widać w oczach ludzi, którzy po pracy nie mają dokąd pójść, z kim porozmawiać, komu powiedzieć: „jest mi ciężko”."
            </p>
            <div className="p-10 bg-red-700 text-white rounded-[3rem] not-italic font-sans shadow-2xl shadow-red-900/20">
              <p className="text-2xl font-serif italic font-bold">
                I właśnie tam — w tej cichej, codziennej samotności — narodziło się Skandias Talentsmie.
              </p>
            </div>
          </div>
          <div className="space-y-8 bg-white p-12 rounded-[3rem] border border-red-50 shadow-sm transform rotate-1">
            <p className="text-slate-600 text-lg font-serif">
              Nie z pomysłu „na organizację”. Tylko z potrzeby. Z serca. Z życia.
            </p>
            <ul className="space-y-6 text-sm text-slate-500 font-medium tracking-wide">
              <li className="flex gap-4">
                <span className="text-red-700 font-bold">❧</span> Z rozmów z kobietami, które dźwigają wszystko same.
              </li>
              <li className="flex gap-4">
                <span className="text-red-700 font-bold">❧</span> Z wiadomości od ludzi, którzy nie mają tu rodziny.
              </li>
              <li className="flex gap-4">
                <span className="text-red-700 font-bold">❧</span> Z seniorów, którzy zostali w Norwegii na dłużej, niż planowali.
              </li>
              <li className="flex gap-4">
                <span className="text-red-700 font-bold">❧</span> Z mężczyzn pracujących fizycznie, którym brakuje sensu w ciszy domu.
              </li>
            </ul>
            <p className="font-bold text-blue-900 pt-6 border-t border-slate-100 text-xl font-serif italic">
              Skandias Talentsmie powstało po to, żeby człowiek przestał być sam.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <div className="space-y-8">
          <div className="flex items-center gap-3 text-blue-950 font-bold uppercase tracking-widest text-[10px]">
            <Users size={18} /> Kim jesteśmy
          </div>
          <h2 className="text-4xl font-serif font-bold text-slate-900">Wspólnota Słowian w Agder</h2>
          <p className="text-slate-600 leading-relaxed font-serif text-lg italic">
            Jesteśmy stowarzyszeniem non-profit, zbudowanym przez osoby pochodzenia słowiańskiego mieszkające w Norwegii — w szczególności w regionie Agder (Grimstad, Arendal, Tvedestrand).
          </p>
          <p className="text-slate-600 leading-relaxed font-serif text-lg italic">
            Łączymy ludzi z Polski, Ukrainy, Czech, Słowacji, Bułgarii, Białorusi i krajów bałkańskich. To społeczność ogromna, a jednocześnie często „niewidzialna”.
          </p>
        </div>
        <div className="space-y-8 bg-white p-12 rounded-[3rem] border border-slate-100">
          <div className="flex items-center gap-3 text-red-700 font-bold uppercase tracking-widest text-[10px]">
            <Target size={18} /> Dla kogo to robimy
          </div>
          <h2 className="text-3xl font-serif font-bold text-slate-900">Dla tych, którzy nie krzyczą o pomoc</h2>
          <ul className="grid grid-cols-1 gap-4">
            {[
              "Osoby doświadczające samotności i izolacji",
              "Samotnie wychowujący dzieci",
              "Opiekunowie bliskich i seniorzy",
              "Osoby po traumie i przymusowej migracji",
              "Młodzież wychowująca się między kulturami"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-5 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium text-slate-700 hover:border-red-300 transition-colors group">
                <Heart size={16} className="text-red-700" /> {item}
              </div>
            ))}
          </ul>
        </div>
      </section>

      {/* Why it Matters */}
      <section className="bg-white p-12 md:p-24 rounded-[4rem] border border-slate-100 relative overflow-hidden shadow-sm">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-red-700 font-bold uppercase tracking-widest text-[10px]">Dlaczego to jest ważne</h2>
            <h3 className="text-5xl font-serif font-bold text-slate-900">Ręce i serce pracują razem</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <p className="text-2xl text-slate-700 leading-relaxed font-serif italic">
                "Największe dramaty w bogatych krajach dzieją się po cichu. Nie w braku chleba — tylko w braku człowieka obok."
              </p>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                Samotność, wykluczenie i rozpad więzi to nie jest „miękki temat”. To kosztuje społeczeństwo zdrowie psychiczne i poczucie bezpieczeństwa.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-xl text-slate-600 leading-relaxed font-serif">
                W kulturach słowiańskich rzemiosło to język, który przechodzi ponad barierą słów. Kiedy trzymasz w ręku glinę, igłę lub pędzel — łatwiej zaczynasz mówić.
              </p>
              <p className="text-2xl font-serif font-bold text-blue-900 italic underline decoration-1 underline-offset-8">A kiedy zaczynasz mówić — przestajesz być sam.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="space-y-12">
        <div className="flex items-center gap-3 text-blue-900 font-bold uppercase tracking-widest text-xs">
          <ShieldCheck size={18} /> Nasze cele
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((goal, idx) => (
            <div key={idx} className="p-8 bg-slate-50 border border-slate-100 rounded-3xl space-y-4">
              <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xs">{idx + 1}</span>
              <p className="font-bold text-gray-800 leading-snug">{goal}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats / Effort */}
      <section className="bg-blue-950 text-white p-12 md:p-24 rounded-[4rem] relative overflow-hidden shadow-2xl shadow-blue-900/20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest">
              <Clock size={16} /> Nasz wkład
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight italic">
              Nie jesteśmy „organizacją na papierze”. Jesteśmy ruchem ludzi.
            </h2>
            <p className="text-slate-100 leading-relaxed text-xl italic font-serif">
              Przy około 95 aktywnościach rocznie, nasi wolontariusze wkładają ponad 5 700 godzin pracy społecznej. To energia społeczna — największy kapitał regionu.
            </p>
          </div>
          <div className="space-y-8 sm:space-y-10 w-full lg:max-w-md ml-auto">
            {[
              { val: "69", label: "Członków Składkowych", icon: Users },
              { val: "1000+", label: "Sympatyków", icon: Heart },
              { val: "30", label: "Aktywnych Wolontariuszy", icon: Sparkles },
              { val: "5700", label: "Godzin Społecznych", icon: Clock }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-6 sm:gap-8 group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white border border-white/20 group-hover:scale-110 transition-transform flex-shrink-0">
                  <stat.icon size={28} className="text-sky-400" />
                </div>
                <div className="space-y-2 min-w-0">
                  <p className="text-4xl md:text-5xl font-serif font-bold leading-none">{stat.val}</p>
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] opacity-60 font-bold">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Society Benefits */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-red-700 font-bold uppercase tracking-widest text-[10px]">Wpływ Społeczny</h2>
          <h3 className="text-4xl font-serif font-bold text-slate-900">Co region Agder ma z naszych działań?</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {societyBenefits.map((benefit, idx) => (
            <div key={idx} className="space-y-3 group p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all">
              <h4 className="text-xl font-serif font-bold text-red-700 group-hover:translate-x-1 transition-transform duration-300">❦ {benefit.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-serif italic">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Now? */}
      <section className="max-w-4xl mx-auto text-center space-y-10">
        <h2 className="text-4xl font-serif font-bold italic text-slate-900">Dlaczego jesteśmy potrzebni teraz?</h2>
        <p className="text-xl text-slate-600 leading-relaxed font-serif italic">
          Bo Agder — jak cała Norwegia — zmienia się. Coraz więcej ludzi żyje obok siebie, a coraz mniej ze sobą. Coraz więcej ciszy w domach.
        </p>
        <div className="p-12 bg-white border border-slate-100 rounded-[3rem] shadow-lg shadow-blue-900/5 rotate-1">
          <p className="text-3xl font-serif font-bold text-blue-900 italic leading-tight">
            "A my robimy coś, co jest dziś bezcenne: przywracamy człowiekowi miejsce przy stole."
          </p>
        </div>
      </section>

      {/* Vision & Slavic Countries */}
      <section className="space-y-24">
        <div className="bg-blue-950 text-white p-16 md:p-24 rounded-[4rem] text-center space-y-8 relative overflow-hidden shadow-2xl shadow-blue-900/10">
          <Globe className="absolute -top-10 -right-10 opacity-5" size={400} />
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-serif font-bold italic">Nasza Wizja</h2>
            <p className="text-2xl text-slate-100 leading-relaxed italic font-serif">
               Centrum Sztuki i Integracji Skandias Talentsmie w Songe. Chcemy stworzyć ogólnonorweską sieć miejsc, gdzie kultura i wspólnotą będą ratować przed samotnością.
            </p>
          </div>
        </div>

        <div className="space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-serif font-bold italic text-slate-900">Kraje Słowiańskie w naszej społeczności</h2>
            <p className="text-blue-900 font-serif italic text-lg">Razem tworzymy wspólnotę, w której każdy talent ma swoje miejsce</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SLAVIC_COUNTRIES.map((group, idx) => (
              <div key={idx} className="p-10 bg-white border border-slate-100 rounded-[2.5rem] text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <h3 className="text-red-700 font-bold text-[10px] uppercase tracking-widest mb-6">Słowianie {group.group}</h3>
                <p className="text-slate-700 font-serif font-bold text-lg">
                  {group.countries.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Summary */}
      <footer className="text-center pt-24 border-t border-slate-100">
        <p className="text-2xl md:text-4xl font-serif font-bold text-red-700 italic max-w-4xl mx-auto leading-tight">
          "Skandias Talentsmie istnieje po to, by talent stał się widoczny, a człowiek przestał być sam — a dzięki temu społeczeństwo staje się zdrowsze."
        </p>
      </footer>
    </motion.div>
  );
}


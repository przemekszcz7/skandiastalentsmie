import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Filter, MapPin, Search, Clock, X, ImageIcon, ZoomIn, ArrowRight } from 'lucide-react';
import { REGIONS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

import { Event, EventImage } from '../types/event';

export const events: Event[] = [
    {
      id: 'sushi-nas-kusi-2026',
      title: 'Sushi nas kusi',
      date: '9 maja 2026',
      time: '17:00–21:00',
      location: 'Grimstad',
      address: 'Grimstad, Norwegia',
      region: 'Agder',
      description: 'Odkryj smaki Japonii w sercu Agder. Warsztaty kulinarne, podczas których nauczysz się przygotowywać perfekcyjne sushi od podstaw.',
      images: [
        { url: 'https://iili.io/Bt51ROG.md.jpg', title: '', desc: '' }
      ]
    },
    {
      id: 'wianki-na-ganki-grimstad-2026',
      title: 'WIANKI NA GANKI – KOBIECY WIECZÓR, KTÓRY ZOSTAJE W SERCU',
      date: '18 kwietnia 2026',
      time: 'Wydarzenie plenerowe',
      location: 'Grimstad',
      address: 'Grimstad, Norwegia',
      region: 'Agder',
      description: `🌿✨ WIANKI NA GANKI – KOBIECY WIECZÓR, KTÓRY ZOSTAJE W SERCU ✨🌿
Są takie spotkania, które trudno nazwać „warsztatami”.
Bo dzieje się tam coś więcej niż nauka.
To był właśnie taki wieczór.
„Wianki na ganki” w Grimstad stały się przestrzenią, w której natura spotkała się z kobiecą energią, kreatywnością i autentyczną obecnością.
⸻
🌸 CZAS, KTÓRY BYŁ NAPRAWDĘ „DLA SIEBIE”
W codzienności tak często brakuje miejsca na zatrzymanie.
Na oddech.
Na bycie tu i teraz.
Na rozmowę bez pośpiechu.
Ten wieczór był właśnie taki.
Od momentu, kiedy zaczęłyście się pojawiać, było czuć, że tworzy się coś wyjątkowego.
Nie wydarzenie.
Nie „zajęcia”.
Tylko przestrzeń.
Bez ocen.
Bez presji.
Z uważnością.
⸻
🌿 TWORZENIE, KTÓRE JEST CZYMŚ WIĘCEJ NIŻ TECHNIKĄ
Na stołach pojawiły się naturalne materiały –
wiklina, mech, suszone kwiaty, dodatki, tekstury, kolory.
Na początku były tylko elementy.
A potem… zaczęła się magia.
Każda z Was tworzyła swój własny wianek.
Bez porównywania.
Bez „czy to jest dobrze”.
Z intuicji.
Z wyczucia.
Z serca.
I właśnie dlatego każdy z tych wianków był inny.
Niepowtarzalny.
Prawdziwy.
Dokładnie taki jak osoba, która go stworzyła.
⸻
✨ KREATYWNOŚĆ, KTÓRA PRZERASTA OCZEKIWANIA
To, co powstało tego wieczoru, było absolutnie wyjątkowe.
Formy, kompozycje, kolory, detale – wszystko miało w sobie lekkość i naturalność, której nie da się zaplanować.
Wasza kreatywność przerosła nasze oczekiwania.
Ale tak naprawdę…
to nie powinno dziwić.
Bo kiedy kobieta dostaje przestrzeń do tworzenia –
powstają rzeczy piękne.
⸻
💛 ENERGIA, KTÓREJ NIE DA SIĘ PODROBIĆ
Był śmiech.
Były rozmowy.
Były momenty ciszy i skupienia.
Były spojrzenia pełne satysfakcji, kiedy coś „wyszło”.
I te małe zachwyty:
„jak to pięknie wygląda…”
To była energia, której nie da się zaplanować w harmonogramie.
Ona po prostu się pojawia,
kiedy spotykają się właściwi ludzie.
⸻
🤍 WDZIĘCZNOŚĆ ZA OBECNOŚĆ
Dziękujemy Wam – każdej z osobna.
Za to, że przyszłyście.
Za to, że chciałyście tworzyć.
Za to, że podzieliłyście się sobą – swoją energią, swoją historią, swoją historią, swoim czasem.
Dziękujemy tym, które były z nami pierwszy raz –
za zaufanie i otwartość.
I tym, które wracają –
bo to znaczy, że to, co robimy… ma sens.
⸻
🤍 KOBIETY, KTÓRE TRZYMAJĄ TO WSZYSTKO W RYDZACH
Ogromne podziękowania dla naszych niezastąpionych kobiet –
tych, które pomagały przed, w trakcie i po warsztatach.
To dzięki Wam wszystko było dopięte.
To dzięki Wam można było skupić się na tym, co najważniejsze.
Wasza obecność, zaangażowanie i uważność to coś, czego nie da się przecenić.
Jesteście fundamentem tego, co tworzymy.
⸻
🌿 COŚ SIĘ TU BUDUJE
Patrząc na ten wieczór, czujemy jedno.
To nie są pojedyncze spotkania.
To jest coś, co rośnie.
Społeczność kobiet, które chcą:
tworzyć,
spotykać się,
rozmawiać,
być razem.
Bez udawania.
Bez presji.
Prawdziwie.
⸻
✨ TO NIE BYŁ KONIEC
To był piękny wieczór.
Ale nie ostatni.
Bo już wiemy, że chcemy więcej takich spotkań.
Więcej przestrzeni.
Więcej tworzenia.
I już dziś zapraszamy Was na kolejne warsztaty…
Bo czujemy, że to dopiero początek czegoś naprawdę wyjątkowego. 🌸✨`,
      images: [
        { url: 'https://iili.io/Bt5MniQ.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt72umx.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt72I5b.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt72oge.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt72RzQ.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt725XV.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt72XXp.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt72OrX.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt721dg.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt72wBI.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt72N1t.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt73JEP.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7333F.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt72mTx.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt73d41.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt73Aan.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt73enV.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt73Lnp.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt73g8g.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt736AJ.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7FfK7.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7FYUF.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7FoAb.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7FAiB.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7FjUX.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7K129.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7K2ea.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7KTes.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7KKzv.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7KWIj.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7KNEB.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7K8kg.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7f0nR.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7fHCl.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7fvP2.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7fBTb.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7fh9n.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7fMFI.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7q9Ag.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7f6Au.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7fDKB.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7qAil.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7qQbs.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7q0Ou.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7qjUP.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7BCqQ.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7BorB.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7Bumg.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7BqLx.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7CFaI.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7BXhG.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7CKvt.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7Cxnf.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7C33N.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7Cbl2.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7n5fR.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7Cwwg.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7CLoG.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7nYUN.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7nNJS.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7nGxs.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7ns5P.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7n8zu.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7nkbe.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7n40Q.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7nbLJ.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7npqv.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7o3mX.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7oKIn.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7ofXs.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7oCBf.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7ohQa.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7o7Lb.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7oXhg.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7oGkP.md.jpg', title: '', desc: '' }
      ]
    },
    {
      id: 'wielka-sobota-grimstad-2026',
      title: 'POŚCIG ZA WIELKANOCNYM ZAJĄCEM – DZIEŃ PEŁEN MAGII, KTÓRA DZIAŁA SIĘ NAPRAWDĘ',
      date: '4 kwietnia 2026',
      time: 'Wydarzenie plenerowe',
      location: 'Grimstad',
      address: 'Grimstad, Norwegia',
      region: 'Agder',
      description: `🐣✨ POŚCIG ZA WIELKANOCNYM ZAJĄCEM – DZIEŃ PEŁEN MAGII, KTÓRA DZIAŁA SIĘ NAPRAWDĘ ✨🐰
Są takie dni, które zaczynają się jak zwykłe wydarzenie…
a kończą jako wspomnienie, do którego chce się wracać.
4 kwietnia w Grimstad wydarzyło się coś wyjątkowego.
„Pościg za Wielkanocnym Zającem” nie był tylko zabawą dla dzieci.
Był spotkaniem ludzi, śmiechu, kolorów i tej niezwykłej energii, która pojawia się wtedy, gdy tworzymy coś razem.
⸻
🥚 POSZUKIWANIE, KTÓRE BYŁO CZYMŚ WIĘCEJ NIŻ ZABAWĄ
Dzieci wyruszyły na poszukiwanie jajeczek.
Z ekscytacją.
Z błyskiem w oczach.
Z tą dziecięcą radością, której nie da się udawać.
Każde znalezione jajko było małym zwycięstwem.
Każdy uśmiech – dowodem, że magia naprawdę istnieje.
Ale tak naprawdę nie chodziło tylko o jajka.
Chodziło o przygodę.
O ruch, śmiech i wspólne przeżywanie chwili.
O to, żeby przez chwilę zapomnieć o wszystkim innym i po prostu być tu i teraz.
⸻
🎨 TWORZENIE, KTÓRE DAJE RADOŚĆ
W środku czekał świat kolorów.
Warsztaty, przy których dzieci siadały z ciekawością…
a wstawały z dumą.
Powstawały wielkanocne dekoracje, ozdoby, małe dzieła sztuki.
Każde inne. Każde wyjątkowe.
Ręce były brudne od farb, kleju i materiałów.
Ale oczy świeciły.
Bo nie ma nic piękniejszego niż dziecko, które tworzy coś własnego –
i wie, że to jest jego.
⸻
🧺 RĘKODZIEŁO, KTÓRE MA DUSZĘ
W przestrzeni wydarzenia pojawili się także twórcy.
Ludzie, którzy tworzą nie „produkty”…
ale rzeczy z historią.
Można było się zatrzymać.
Popatrzeć.
Porozmawiać.
Zainspirować się.
Zobaczyć, ile talentu jest wokół nas.
To było spotkanie światów – dziecięcej kreatywności i dojrzałego rzemiosła.
I oba były równie ważne.
⸻
🍰 SMAKI, KTÓRE TWORZĄ ATMOSFERĘ
Zapach domowych wypieków unosił się w powietrzu.
Kawa, herbata, słodkości.
Proste rzeczy, które tworzą klimat.
Ludzie zatrzymywali się przy stołach.
Rozmawiali.
Śmiali się.
I właśnie wtedy powstaje coś najważniejszego –
poczucie wspólnoty.
⸻
💛 DZIEŃ, KTÓRY MIAŁ SENS
To wydarzenie pokazało nam, dlaczego robimy to, co robimy.
Bo chcemy tworzyć miejsca,
w których ludzie mogą się spotkać.
Bez względu na wiek.
Bez względu na język.
Bez względu na to, skąd są.
Miejsca, w których każdy może być sobą.
I coś stworzyć.
⸻
🙏 WDZIĘCZNOŚĆ, KTÓRA PŁYNIE PROSTO Z SERCA
Dziękujemy wszystkim, którzy byli z nami.
Za obecność.
Za śmiech.
Za zaangażowanie.
Dziękujemy dzieciom – za ich energię i radość.
Dziękujemy dorosłym – za czas i otwartość.
I dziękujemy naszym wolontariuszom oraz twórcom –
bo to dzięki Wam to wszystko mogło się wydarzyć.
⸻
🤝 WSPARCIE, KTÓRE DAJE MOŻLIWOŚCI
Szczególne podziękowania kierujemy do
Regionalt kulturfond Agder –
za wsparcie, zaufanie i wiarę w to, co robimy.
To dzięki takim partnerstwom możemy tworzyć wydarzenia, które mają znaczenie.
⸻
✨ TO NIE KONIEC
Patrząc na ten dzień, wiemy jedno.
To nie był finał.
To był początek.
Początek kolejnych spotkań.
Kolejnych historii.
Kolejnych momentów, które będziemy tworzyć razem.
I już nie możemy się doczekać, co będzie dalej. 💫`,
      images: [
        { url: 'https://iili.io/Bt5XFRt.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt71mAu.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt71ytj.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7EqHF.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7EJMQ.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7EYRn.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7EnDJ.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7EAlI.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7EzVR.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaU6FI.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaUZwG.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtagaPp.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaUttf.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtagPiQ.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtagjV4.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaggDb.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtagelS.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtagQUP.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btarqen.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtarnzG.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtarHsR.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtarT12.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btar7ee.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtarRd7.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtarEqQ.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtarYmu.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btar0Lx.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtarG1V.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtarWdP.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtarhkF.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtarD42.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bta4zTg.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btar4kX.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bta49pe.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bta4vwu.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bta4TZJ.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bta4aaI.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bta48Zb.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bta4Unj.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bta4i8P.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bta4mMv.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bta6qoG.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bta6BVf.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bta6OfR.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bta6wiv.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bta6jWJ.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bta6GHP.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaPoXa.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bta6tJS.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaPKdB.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaPugp.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaP6p1.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaPcIn.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaPSrQ.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaPX7S.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaP8Ex.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaiRGj.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btai1u1.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btaic8B.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtailyP.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtasRDX.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtairPf.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaiiS2.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btai6F4.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btas3AP.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaszSp.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btas7xn.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtasOfj.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btas1Ul.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtasMRS.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtasS5B.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btas8JV.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btase0x.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtasPsa.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtassqJ.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btasgb1.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtasQgR.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaLHss.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btasmbt.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtasyzX.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaLYmP.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaLhkN.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaLvBs.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaLurx.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaLMrv.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaLOhX.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaLg24.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaQFCg.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaQ9yB.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaQVne.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaQGt9.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaQgMg.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaZCiu.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaZYWF.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaQUoF.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaQL9p.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaZVON.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btat3rJ.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtatXYx.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btat4vR.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaD9yl.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtabCiX.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtabVOQ.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaDJu2.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btap9yv.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtapRM7.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtapkAv.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtayKDQ.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btayhzl.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btaye19.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtapQRf.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtayOq7.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btaymmv.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc9Ypj.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtaybkJ.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc9R2e.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc9K2n.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc921t.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcHBF1.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc9eQp.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcH8Dx.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcHacX.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcHiUF.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcJ3Rs.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcHvNj.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcJUes.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcJkgt.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcJPLl.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btcd5YX.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcdECl.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcJyIj.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btcdhve.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btcdjyu.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcdW37.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcdD6N.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcdLZv.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc2Jus.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btcdpat.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc2KMl.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc2BFS.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc2fP2.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc2nS9.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc2YKB.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc2Iwb.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc2acP.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc21Ag.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc2GDJ.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc2WVR.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc2gV4.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc2vNs.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc2ril.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc2iU7.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc2PlS.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc3H0B.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc2LJ9.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc2piQ.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc335F.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc39fV.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc3PLv.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc3CsR.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc3qzJ.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc38dP.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc37zG.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc3YXf.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc3S71.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcF342.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc3yIs.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc3mpn.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcFHQf.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcF0ZJ.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcFGGR.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcFXaI.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcF487.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcFiue.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcKdwg.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcKFoJ.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcKAoG.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcKzAX.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcK1R9.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcKal2.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcKkR1.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcKwlV.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcfTdB.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcKPlp.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcfzgV.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcqICG.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btcfoqx.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btcqh8B.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btcf822.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcfUk7.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btcqojn.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcqtMG.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcBfPj.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcqP9I.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcqswX.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcqmF4.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcBENt.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcBGDX.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcBKMb.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcBYKv.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcBcSp.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcBNUl.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcBeJ2.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcBLJV.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcBUxe.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcB8b9.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcCH0v.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcCu72.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcBZOP.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcCJgR.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcC1rx.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcCVkB.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcCeEJ.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcChI1.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcCS7p.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btcn7vp.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcCt24.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcCbv2.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcCyT7.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btcnw92.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btcn5aR.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btcnpcv.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btcn48Q.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcoJAN.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btco2tt.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtconS4.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcoYKb.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btco1RV.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcocUx.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcxeEu.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtczdCX.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcoP0G.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btcxoqg.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtczK3G.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btcx6hP.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcxyTN.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtczIn9.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btcznu2.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtczTGe.md.jpg', title: '', desc: '' }
      ]
    },
    {
      id: 'levende-slavisk-handverk-arendal',
      title: 'NIEDZIELA PALMOWA W ARENDAL – SPOTKANIE, KTÓRE MIAŁO DUSZĘ',
      date: 'Niedziela Palmowa',
      time: 'Wydarzenie plenerowe',
      location: 'Arendal',
      address: 'Arendal, Norwegia',
      region: 'Agder',
      description: `🌿✨ NIEDZIELA PALMOWA W ARENDAL – SPOTKANIE, KTÓRE MIAŁO DUSZĘ ✨🌿
Są wydarzenia, które można zaplanować.
I są takie, które po prostu się dzieją… bo spotykają się właściwi ludzie, w odpowiednim miejscu, z właściwą intencją.
„Levende slavisk håndverk – otwarte spotkanie z tradycją i procesem tworzenia” było właśnie takim wydarzeniem.
To nie był zwykły jarmark.
To nie była tylko wystawa rękodzieła.
To było spotkanie.
Prawdziwe.
⸻
🌼 LUDZIE, KTÓRZY TWORZĄ – I TWORZENIE, KTÓRE ŁĄCZY
Już od pierwszych chwil było czuć coś wyjątkowego.
Stoły wypełnione rękodziełem.
Kolory, faktury, detale.
Prace, które nie powstały „dla sprzedaży”… ale z pasji, cierpliwości i serca.
Każdy wystawca wniósł coś swojego.
Coś niepowtarzalnego.
Nie było dwóch takich samych rzeczy.
Nie było dwóch takich samych historii.
Były za to dziesiątki talentów.
Dziesiątki osobowości.
Dziesiątki powodów, żeby się zatrzymać, spojrzeć, zapytać… i zachwycić.
To właśnie w takich momentach widać, jak ogromną wartość ma rękodzieło.
Bo za każdym przedmiotem stoi człowiek.
⸻
☕ ROZMOWY, KTÓRE MAJĄ ZNACZENIE
To, co wydarzyło się między stołami, było równie ważne jak to, co leżało na nich.
Rozmowy.
Wymiana doświadczeń.
Poznawanie się.
Bez pośpiechu.
Bez napięcia.
Bez „muszę”.
Było miejsce na zatrzymanie się.
Na wypicie kawy.
Na kawałek ciasta.
Na zwykłe, ludzkie bycie razem.
I właśnie w tym była siła tego dnia.
⸻
🌿 TRADYCJA SPOTYKA SIĘ Z TERAZ
Niedziela Palmowa to czas szczególny.
I dzięki otwartości parafii oraz St. Franciskus kirke mogliśmy połączyć coś, co rzadko spotyka się w tak naturalny sposób:
duchowy wymiar święta
z kulturą, rękodziełem i spotkaniem ludzi.
To stworzyło przestrzeń, która była spokojna, ciepła i pełna sensu.
Dziękujemy za tę otwartość.
Za zaufanie.
Za możliwość bycia razem – w sposób, który naprawdę coś wnosi.
⸻
🤍 WSPARCIE, KTÓRE MA REALNE ZNACZENIE
Takie wydarzenia nie dzieją się same.
Dziękujemy szkole przy kościele za gościnność i przestrzeń, która stała się miejscem spotkania.
Dziękujemy Caritas Arendal – Wasza obecność i wsparcie mają ogromną wartość. To nie są tylko działania – to realna pomoc i realna zmiana w życiu ludzi.
Dziękujemy Arendal kommune za zaufanie i wsparcie, które pozwala rozwijać inicjatywy łączące ludzi i budujące społeczność.
⸻
🤍 WOLONTARIUSZE – SERCE, KTÓRE BIJE W TLE
I teraz najważniejsze.
Są ludzie, których nie zawsze widać na zdjęciach.
Nie stoją na pierwszym planie.
Nie szukają uwagi.
Ale to dzięki nim wszystko działa.
Nasi wolontariusze.
To oni byli wcześniej niż wszyscy.
I zostali najdłużej.
To oni zadbali o detale:
kawę, talerzyki, kubeczki, porządek, organizację.
To oni przynosili, wynosili, rozkładali i pakowali.
To oni pilnowali, sprawdzali, reagowali.
To oni mieli oczy dookoła głowy – i serce na właściwym miejscu.
To nie jest „pomoc”.
To jest fundament wszystkiego, co robimy.
Nie da się tego zastąpić.
Nie da się tego kupić.
Nie da się tego nauczyć w jeden dzień.
To jest zaangażowanie.
To jest odpowiedzialność.
To jest prawdziwa obecność.
Dziękujemy Wam.
Z całego serca.
Naprawdę.
⸻
🌿 SPOŁECZNOŚĆ, KTÓRA SIĘ TWORZY
To wydarzenie pokazało coś bardzo ważnego.
Że mamy wokół siebie ludzi, którzy chcą tworzyć.
Którzy chcą być razem.
Którzy chcą budować coś więcej niż pojedyncze wydarzenia.
To nie jest tylko inicjatywa.
To zaczyna być społeczność.
Żywa.
Prawdziwa.
Potrzebna.
⸻
✨ TO DOPIERO POCZĄTEK
Patrząc na ten dzień, wiemy jedno:
To dopiero początek.
Dziękujemy każdej osobie, która była częścią tego wydarzenia –
wystawcom, gościom, partnerom i wszystkim, którzy dołożyli swoją cegiełkę.
Dziękujemy za obecność.
Za rozmowy.
Za energię.
Za to, że tworzymy to razem.
Do zobaczenia na kolejnych spotkaniach.
Bo czujemy, że to, co się zaczęło… ma przed sobą piękną drogę`,
      images: [
        { url: 'https://iili.io/Bt5XU7I.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7tMBa.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7tuqb.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7t1hF.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7tELg.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7tLT7.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7tj7p.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7twkN.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Bt7Dla4.md.jpg', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/660093679_122166890924877648_4574275223973456620_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=67B9BxCaz8MQ7kNvwH88RXj&_nc_oc=AdpdhNvYMcVjS1G1yO7sbF5P5lItXVAEGVxaGpqtfU1HybKJZBenmCdrUmhwdffQSOo&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=7xBTW1NhDp6arlttF33Dlg&_nc_ss=7b2a8&oh=00_Af1t9ijeFst5KX7o7J8lWLb_7sCEWofYHULXu4TVxHKcHA&oe=69F51EE7', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/660464674_122166896696877648_7696857035109213932_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=zwXiJeip_cQQ7kNvwFjCY4Q&_nc_oc=AdqUliSEtECIWu_aHFBo8spbvmNDR7QYi21AAzxUBkWFVTqE9givijNl4XIGlxk3oI8&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=cECRMBLCTsZOieVEU-xSOg&_nc_ss=7b2a8&oh=00_Af0KGZtWdhL_Fke-HdtsgFj4sTdwpat55NE-h04s-oEt3g&oe=69F50FD8', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/661711759_122166898118877648_8084973445443317978_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=JLd5Cc-IHF0Q7kNvwFm5hM4&_nc_oc=AdpOr4u8goQtU19zlcpyH03UBLGPzBcFmHRnCQcJlLxvpeBefSfDuigsLclNr3TSiKo&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=cwcQKYa_EURvowrvcKNo8Q&_nc_ss=7b2a8&oh=00_Af2oQb8l4Ry2KKtKx5atacwXDFZl31PXQYjIhext10Retg&oe=69F51A70', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/659094383_122166893480877648_2253002403708847575_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=8pTPIDYmrdsQ7kNvwGqXiao&_nc_oc=AdqU2WS1Dtb_k54Mye1GqjhikrwBJXVE7x5gUfe_rmY35e7Ulslic0gs8LR7W19uyn8&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=sBdNd2SwQImSVhw1hWQ-FQ&_nc_ss=7b2a8&oh=00_Af3Ut3KmCQbzVM0_FyBozI78n6Cq3trCCh5kaCCEPQ9a0A&oe=69F5254A', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/658987193_122166893180877648_2674343727329466875_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=A0Q09hXYmWoQ7kNvwFbWtvi&_nc_oc=Adq1Agnuf4zqe_L7oXyImSE56ViYX6BLDtApEikQJhipas4BA6cWd9HwJGuqRF0hlfo&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=AyFDufqo6tYd9tvkFsjKNA&_nc_ss=7b2a8&oh=00_Af0YEBN41ijSaDg9mPOZLBxmCIt3bEb5-tBhzXUXlWlxBQ&oe=69F5296D', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/660975219_122166892886877648_3337222034620543585_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=5iRwcAlzaDUQ7kNvwHY43k4&_nc_oc=AdoVOShCXE_xbOaBYTX_EAbTQ4b74nOThfm311ANu0fXSdta9pM7VcyY6mpw01rLHxo&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=CWtbOExAg4Ffe6xBkgZNmA&_nc_ss=7b2a8&oh=00_Af1ACpnjzB3_Q3mDQzvYM-yCR7vzSFtsMLdieyiXp2au9A&oe=69F535A9', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/658323783_122166891560877648_8422836795498923458_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=3gMGuJP-gqgQ7kNvwEpktth&_nc_oc=Adr7Y4Nb4tuyEBXQ9GCKtajPo2EeFs13Z7nGz5hvKgpAmzcj5F805nIDpPrDAsk0DNE&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=zowm0U_pc2l1m3X6e_kjpQ&_nc_ss=7b2a8&oh=00_Af2BclAGqSRFbAP2f8j1YlGl8pSSKSplCbb-QelPXEnH4g&oe=69F505C2', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/659944110_122166891266877648_4435411966815873600_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=FUse14ecjD4Q7kNvwGReJ4-&_nc_oc=Adqn2jNF1wuAfnQoMFz0GxPCZxTHocQ67eP9tWOFGILi1hLLn2NdW_XIIytoRjvPTdk&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=Ud6K-TP8K0wWVCsFhNTqGg&_nc_ss=7b2a8&oh=00_Af28je9WlB3DOFu9kPKRvTqASWT-zCdxRHP2eeG4zYting&oe=69F533B3', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/660550282_122166898088877648_3442494970516065203_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=vv5YjnMIElsQ7kNvwHdlW30&_nc_oc=Adq8tUNx1XLIxhfVj7dE2fEGxINvNu7e1Ic-CnXsI7OWZHeGgJYNGYCkvm-ilX1X7FA&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=wOK-uv_CK-2PI3C0bTlVRg&_nc_ss=7b2a8&oh=00_Af3jI-QyboLB1G3krtvqh4GcKK3I4zeWZSEGn4JnuZI4yA&oe=69F5356A', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/660240478_122166896144877648_4697666375777680036_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Ml5Q2_GKoz0Q7kNvwE9xTk-&_nc_oc=AdoqPdP8lTqZICSuODGcoWLSoTZNDK9mwgb_V-AXZQZFGpuEU0COVniJ3N3-JS5gUC4&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=oeVavraw21F0PuC--XepYw&_nc_ss=7b2a8&oh=00_Af0VGG5zhB8uKtFrHXIhJN4ZJ3vldLio2y1aYT3T7waaig&oe=69F53191', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/658935469_122166892286877648_5430544094911157069_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=TribvNCO1isQ7kNvwE-gaXA&_nc_oc=Adr2OUhjuhMHfwgdnsyeapBskzqI4gco4GjI6uh8_hPsQH3oF7EZcE2sKplvLTcFVno&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=RlU8mNTGVjMlY7UNrvCtyQ&_nc_ss=7b2a8&oh=00_Af0GaIAevAENC36gXCEffB0dCpw8ELqCEiDB5RURHxbMWA&oe=69F52B3A', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/660490186_122166897362877648_7032386335053079618_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=1BUpNcHJUmoQ7kNvwEGQ3aw&_nc_oc=Adp-wxBIE1tutODp18FBgq_oy6CAFKVjFpkhiPXAJhB4EFuZ64k4ETgUK3D7-1_MyzA&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=ANLABWxTwBWaKj5py8LifQ&_nc_ss=7b2a8&oh=00_Af16pYNf6o9ca7V8_k8ca1DE0atwJarnPQ-oo7flojFheA&oe=69F51729', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/663160740_122166895172877648_2648187886918610517_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=TLVGXqdeCr0Q7kNvwEItcIP&_nc_oc=Adpoq04dANtFU_Z9RLwG40blwtCzQG7VotsIZJKexLZ_rJ9Qh6G4YCWEd2jLsj0CtwI&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=uzc1fILihX-OfajFWC9Cyw&_nc_ss=7b2a8&oh=00_Af3YP3vMGYfDGyq99PunVXqM5syrq5lauZOclJL0-KifWg&oe=69F53894', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/659749563_122166896768877648_5554384752445000288_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=4N09lY3f2aoQ7kNvwFGt8uQ&_nc_oc=AdpMvhyNVbX8D4Z2CNg6q4C19ShEwzwTtW3yZqWZMeyS6ThBQg7VYCHkvePQltHsM0g&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=N71_pAI-TvKQkTylZ98d3w&_nc_ss=7b2a8&oh=00_Af3gc7Offn2g3CUVzFRksj0HIaia7CHT8B1_0yW2OQVgFw&oe=69F53BAE', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/662948552_122166897908877648_7643529233007032267_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=EKqJZHB1mwkQ7kNvwFetNCP&_nc_oc=AdrhVKA-HMUy8IVqgJucjlVInvcGhcxBqFMLxZgWnY7U1sYRD6Uyu1Z9n6YpkXCGM0g&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=QqZliAXrBOT5DBcHUSm6eg&_nc_ss=7b2a8&oh=00_Af2mJqCySuSgt2sO38XHTzrdFyaeBApRMArKkZzq5iyZ8Q&oe=69F51594', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/660114952_122166895130877648_5590058930142874557_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Gu6tpU0B-E0Q7kNvwFOhgjR&_nc_oc=AdqkjvrBCdAEkzlQTVVMMOrsXO8F0W2K0iVxECb6Zg5YiUz4IruhlQIi6QIva4qLvrY&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=ssXut9CBR_1kmojNTFqUuQ&_nc_ss=7b2a8&oh=00_Af0XHAHHW7nADeggE-eZbLGIQpPmVjAVcWgVyuKfAQr0kw&oe=69F52199', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/660461418_122166895376877648_4239651588970354831_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=K0cMCrr0jcgQ7kNvwFt_YF8&_nc_oc=AdoXQwt67TF_r2Ex3fSNzMHKIlyYNCfe-2CC9cHwWAfsF1QcqhHX4qwXqtWf13Vk7K0&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=4n5ikQJSrl3ANEnqGiC-OA&_nc_ss=7b2a8&oh=00_Af2IeoWJUwBsJRcRtOnLVMnpOa_VGTrtcKe_Nj_S0ebrRA&oe=69F5150C', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/661582099_122166897086877648_6715163584395511265_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=SZfI0Jg4T5IQ7kNvwET1A4z&_nc_oc=Adrb_iArAPMfLknSbDoeGh5nAI2BkJSf_mccbib81YGFneqh_jJEWqHkdP9oxFq4nIU&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=l2QzAUrEvlfjwxJleBJGEA&_nc_ss=7b2a8&oh=00_Af2fMcZvSc8ZpMU81ofZBFwvhyedpfGNZbGWAwd4y9TRow&oe=69F5342F', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/662595350_122166892232877648_8155284520398857444_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=v6Te-9m66JgQ7kNvwFpXZBq&_nc_oc=Ado8Qj574V9cwic3Jr_4JABidFT80Xpc3rgKiDVmHZr6HUM9TaoIi-1xjOQUbVUZenc&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=uELdEzdt9zAvlaFm_6o9kA&_nc_ss=7b2a8&oh=00_Af370uxsEaiTVTNrDdTxg0Wr8Z3wHmAyf3M5ADkCviI_2A&oe=69F51981', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/659877254_122166897494877648_4521541968950457027_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=WpsSvnDbObwQ7kNvwETlnw2&_nc_oc=Adorz-kxQxPh43PNsz3asXm7DPHYic-snTPvB6OuVX2FVJMYVTF6tP3lZOmY-rdjgmo&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=_Qi4K168sJVrRC291ycFEQ&_nc_ss=7b2a8&oh=00_Af0yJ5fWoHECuYqbV9zC_QHo4w5BIgLpByq4ecHUR-VH9g&oe=69F51D5C', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/659778564_122166898070877648_8298250590377173282_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=l02sB_FqLssQ7kNvwE33Bmr&_nc_oc=Adq5a0IueytIyUaohvtbS6_wiLvnDPCgqKZcfFrDWQn8QlgjMzcHvgMB171L5AHErII&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=6jd13c71NDckioikmn4Gkw&_nc_ss=7b2a8&oh=00_Af1-X4PyLSlQr3tZmtZqbpKmh5DJUiVYqXTTPbDpt6ncZg&oe=69F5235A', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/659915463_122166897704877648_7998608438361781977_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=v6u5aHi4ATwQ7kNvwEP97g1&_nc_oc=Adql9GGHIgy7kG6M4cU_HJIRnhPgz4H2RJDkDr763aWh0aDTZ0ftFCWZsRdFwt3AAzQ&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=KqFl68eKc89eDAIdR5DWCQ&_nc_ss=7b2a8&oh=00_Af0HwJwWV86Md4Qny_DY5M9rHviiNikcEgJt7Bpg24f9QQ&oe=69F50BE5', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/662478103_122166898052877648_8118272059898267015_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=VDwqG6b21NAQ7kNvwGqjRb9&_nc_oc=AdrwMvoEs4IIJv7h7-uq5Bia9RX0xwb1qs73b2aZEdvMTXgJaVnzuZdjOe-MimZWsaU&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=3Z5HQZxeaJY-5rH6par5bg&_nc_ss=7b2a8&oh=00_Af1_TVcA1ds2xIs4sRZ8Sjdsh4YIeIbKeOt1kTsYM43xLw&oe=69F51313', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/661091281_122166897452877648_5940047480531392867_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=K91r73KYPNsQ7kNvwH4Svao&_nc_oc=AdpkX3uIeX4z_MbixB6QZMju27OB2kG1e08UeF4_6o1c3qX2EeyElDeAes_RQz999yk&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=xFfy8iW59ksjJUfODoiw9A&_nc_ss=7b2a8&oh=00_Af2eQWOYKE5SX4fSDshMyeVUwlPr_LHYkcBKq0vzkLrTUQ&oe=69F52DC3', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/658071139_122166894086877648_647413595509904780_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=p1vB98Ie-iAQ7kNvwG1w65d&_nc_oc=Adp3mK1vUqWpbe9r0f33Y4g0OUn8J_YyLptJzInFmXv5PZ-2_Qh2O397nZpIAs7pY3g&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=uK28DofD2Z90aT9WfN7Eog&_nc_ss=7b2a8&oh=00_Af2_tG8qZ6_w_R5O8m9v6S0Lh0uH2S5b_m1V3H_U_4Gv2g&oe=69F53B78', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/660873052_122166896261877648_7678502392476561117_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=27l4A7u0E9AQ7kNvwG5B5Vn&_nc_oc=Adp_lI0C6y_Q_uJ3B-y9iC9u_TfS2L0qO5kS6X8V_yS5kU0gYs5e5_S1yv4qV_0yL7o&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=5C29c8e8D-cW9_rS_3V6FQ&_nc_ss=7b2a8&oh=00_Af3C6d_O7y_Y1u_E-L_Z0_m8T_S7J9R1u_8L5_C_1E_2A&oe=69F521B2', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/660582336_122166896201877648_2910769412140502157_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Wl2d7eN3j5IQ7kNvwFv3W0j&_nc_oc=Adqr7E4tQ-yU_K7eXf-p9m4N_mC_U_q2J_T4fR_mS_G-G_w-Xm-Q6T-vO7Fp_Q7Ld6o&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=X7-Y-E-k2gW7pS-Y3_T6Sg&_nc_ss=7b2a8&oh=00_Af3yX5_F_o_U1_l-O_W0_m8T_S7J9R1u_8L5_C_1E_2A&oe=69F53860', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/660458122_122166898490877648_7621946399066440620_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=w6Yj5Caz6_EQ7kNvwG5uW-e&_nc_oc=Adp_lI0C6y_Q_uJ3B-y9iC9u_TfS2L0qO5kS6X8V_yS5kU0gYs5e5_S1yv4qV_0yL7o&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=5C29c8e8D-cW9_rS_3V6FQ&_nc_ss=7b2a8&oh=00_Af3C6d_O7y_Y1u_E-L_Z0_m8T_S7J9R1u_8L5_C_1E_2A&oe=69F517F7', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/660348972_122166898850877648_4570072046897141571_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Wl2d7eN3j5IQ7kNvwFv3W0j&_nc_oc=Adqr7E4tQ-yU_K7eXf-p9m4N_mC_U_q2J_T4fR_mS_G-G_w-Xm-Q6T-vO7Fp_Q7Ld6o&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=X7-Y-E-k2gW7pS-Y3_T6Sg&_nc_ss=7b2a8&oh=00_Af3yX5_F_o_U1_l-O_W0_m8T_S7J9R1u_8L5_C_1E_2A&oe=69F51F26', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/662630118_122166897998877648_6141315998131346059_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=EKqJZHB1mwkQ7kNvwFetNCP&_nc_oc=AdrhVKA-HMUy8IVqgJucjlVInvcGhcxBqFMLxZgWnY7U1sYRD6Uyu1Z9n6YpkXCGM0g&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=QqZliAXrBOT5DBcHUSm6eg&_nc_ss=7b2a8&oh=00_Af2mJqCySuSgt2sO38XHTzrdFyaeBApRMArKkZzq5iyZ8Q&oe=69F5234A', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/660497185_122166898436877648_8595954627196020584_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=8v7mNfR7wDsQ7kNvwGf7F-&_nc_oc=Adp_lI0C6y_Q_uJ3B-y9iC9u_TfS2L0qO5kS6X8V_yS5kU0gYs5e5_S1yv4qV_0yL7o&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=5C29c8e8D-cW9_rS_3V6FQ&_nc_ss=7b2a8&oh=00_Af3C6d_O7y_Y1u_E-L_Z0_m8T_S7J9R1u_8L5_C_1E_2A&oe=69F51B98', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/660738378_122166898556877648_4570072046897141571_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Wl2d7eN3j5IQ7kNvwFv3W0j&_nc_oc=Adqr7E4tQ-yU_K7eXf-p9m4N_mC_U_q2J_T4fR_mS_G-G_w-Xm-Q6T-vO7Fp_Q7Ld6o&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=X7-Y-E-k2gW7pS-Y3_T6Sg&_nc_ss=7b2a8&oh=00_Af3yX5_F_o_U1_l-O_W0_m8T_S7J9R1u_8L5_C_1E_2A&oe=69F507F6', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/659795188_122166898730877648_6141315998131346059_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=EKqJZHB1mwkQ7kNvwFetNCP&_nc_oc=AdrhVKA-HMUy8IVqgJucjlVInvcGhcxBqFMLxZgWnY7U1sYRD6Uyu1Z9n6YpkXCGM0g&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=QqZliAXrBOT5DBcHUSm6eg&_nc_ss=7b2a8&oh=00_Af2mJqCySuSgt2sO38XHTzrdFyaeBApRMArKkZzq5iyZ8Q&oe=69F519C1', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/660505505_122166891620877648_7621946399066440620_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=w6Yj5Caz6_EQ7kNvwG5uW-e&_nc_oc=Adp_lI0C6y_Q_uJ3B-y9iC9u_TfS2L0qO5kS6X8V_yS5kU0gYs5e5_S1yv4qV_0yL7o&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=5C29c8e8D-cW9_rS_3V6FQ&_nc_ss=7b2a8&oh=00_Af3C6d_O7y_Y1u_E-L_Z0_m8T_S7J9R1u_8L5_C_1E_2A&oe=69F516C1', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/658367687_122166894578877648_7678502392476561117_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=27l4A7u0E9AQ7kNvwG5B5Vn&_nc_oc=Adp_lI0C6y_Q_uJ3B-y9iC9u_TfS2L0qO5kS6X8V_yS5kU0gYs5e5_S1yv4qV_0yL7o&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=5C29c8e8D-cW9_rS_3V6FQ&_nc_ss=7b2a8&oh=00_Af3C6d_O7y_Y1u_E-L_Z0_m8T_S7J9R1u_8L5_C_1E_2A&oe=69F518B0', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/660768665_122166896261877648_5430544094911157069_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=TribvNCO1isQ7kNvwE-gaXA&_nc_oc=Adr2OUhjuhMHfwgdnsyeapBskzqI4gco4GjI6uh8_hPsQH3oF7EZcE2sKplvLTcFVno&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=RlU8mNTGVjMlY7UNrvCtyQ&_nc_ss=7b2a8&oh=00_Af0GaIAevAENC36gXCEffB0dCpw8ELqCEiDB5RURHxbMWA&oe=69F515E0', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/662808376_122166898850877648_2910769412140502157_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Wl2d7eN3j5IQ7kNvwFv3W0j&_nc_oc=Adqr7E4tQ-yU_K7eXf-p9m4N_mC_U_q2J_T4fR_mS_G-G_w-Xm-Q6T-vO7Fp_Q7Ld6o&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=X7-Y-E-k2gW7pS-Y3_T6Sg&_nc_ss=7b2a8&oh=00_Af3yX5_F_o_U1_l-O_W0_m8T_S7J9R1u_8L5_C_1E_2A&oe=69F527E6', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/661001005_122166898490877648_8595954627196020584_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=8v7mNfR7wDsQ7kNvwGf7F-&_nc_oc=Adp_lI0C6y_Q_uJ3B-y9iC9u_TfS2L0qO5kS6X8V_yS5kU0gYs5e5_S1yv4qV_0yL7o&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=5C29c8e8D-cW9_rS_3V6FQ&_nc_ss=7b2a8&oh=00_Af3C6d_O7y_Y1u_E-L_Z0_m8T_S7J9R1u_8L5_C_1E_2A&oe=69F517F5', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/657893231_122166893786877648_8422836795498923458_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=3gMGuJP-gqgQ7kNvwEpktth&_nc_oc=Adr7Y4Nb4tuyEBXQ9GCKtajPo2EeFs13Z7nGz5hvKgpAmzcj5F805nIDpPrDAsk0DNE&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=zowm0U_pc2l1m3X6e_kjpQ&_nc_ss=7b2a8&oh=00_Af2BclAGqSRFbAP2f8j1YlGl8pSSKSplCbb-QelPXEnH4g&oe=69F50BA6', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/662076950_122166892286877648_7696857035109213932_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=zwXiJeip_cQQ7kNvwFjCY4Q&_nc_oc=AdqUliSEtECIWu_aHFBo8spbvmNDR7QYi21AAzxUBkWFVTqE9givijNl4XIGlxk3oI8&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=cECRMBLCTsZOieVEU-xSOg&_nc_ss=7b2a8&oh=00_Af0KGZtWdhL_Fke-HdtsgFj4sTdwpat55NE-h04s-oEt3g&oe=69F5234F', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/659714120_122166896144877648_6115930834369471728_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=pCusyp6vXQ8Q7kNvwG8hunr&_nc_oc=Adqmd2OwjeiV6j7avvwifTOUsjvhbvXa5G7BHjpl88HOS4ScdgiTEjELAhXiByFePII&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=zM80ulaqjIYDDlex6xHX3A&_nc_ss=7b2a8&oh=00_Af3pUAz2lJ3DxpPDEZAFv6t0-TsWZ_PFNkMZ7APe4Y3uDg&oe=69F5366D', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/661999941_122166897086877648_6015222712615698064_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=WLEt3dtmFu8Q7kNvwEeBM1E&_nc_oc=Adpedv47Z5X9Zz9m2ykF5JrJg9UGOJbJKJe3Km_PncxzXj7U28ztt10b5y2mEG4VqhY&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=rHr93DvxmfyDcBFu2CN6ug&_nc_ss=7b2a8&oh=00_Af0WO4bRFckdF7uJXlMbDsK4azGuS59CdxYp870S-991f8&oe=69F53896', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/659715750_122166896696877648_6115930834369471728_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=pCusyp6vXQ8Q7kNvwG8hunr&_nc_oc=Adqmd2OwjeiV6j7avvwifTOUsjvhbvXa5G7BHjpl88HOS4ScdgiTEjELAhXiByFePII&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=zM80ulaqjIYDDlex6xHX3A&_nc_ss=7b2a8&oh=00_Af3pUAz2lJ3DxpPDEZAFv6t0-TsWZ_PFNkMZ7APe4Y3uDg&oe=69F5234F', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/658878724_122166891560877648_2674343727329466875_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=A0Q09hXYmWoQ7kNvwFbWtvi&_nc_oc=Adq1Agnuf4zqe_L7oXyImSE56ViYX6BLDtApEikQJhipas4BA6cWd9HwJGuqRF0hlfo&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=AyFDufqo6tYd9tvkFsjKNA&_nc_ss=7b2a8&oh=00_Af0YEBN41ijSaDg9mPOZLBxmCIt3bEb5-tBhzXUXlWlxBQ&oe=69F52618', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/662080416_122166897362877648_1025032900981124046_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=RuJAk6padKAQ7kNvwG0Ewc6&_nc_oc=AdppA7GoIMudTIQHtFPx5sOLwSDe66Y92-D8QyLq7PEBL45cqnQ0HSgHHdHyMOBC8lc&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=MRZVb0Rz3SMPf8At7f0vcg&_nc_ss=7b2a8&oh=00_Af3_WbWOoEJwf1A48bjXPTRjfODVEyOR0hjF0VTLgfqeMQ&oe=69F52573', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/659969286_122166896768877648_7032386335053079618_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=1BUpNcHJUmoQ7kNvwEGQ3aw&_nc_oc=Adp-wxBIE1tutODp18FBgq_oy6CAFKVjFpkhiPXAJhB4EFuZ64k4ETgUK3D7-1_MyzA&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=ANLABWxTwBWaKj5py8LifQ&_nc_ss=7b2a8&oh=00_Af16pYNf6o9ca7V8_k8ca1DE0atwJarnPQ-oo7flojFheA&oe=69F53538', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/661297383_122166898118877648_1881027054771949056_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd6889&_nc_ohc=eaP7j7TvoygQ7kNvwHG2DEI&_nc_oc=AdobTTs-tnna9nZPr26YtufcTMW7tDIDmQ00gy6lU59xr8DuvsODocFwV6ZrEN7dP6g&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=yrmu-CrJTYC7Vq_EdCofjQ&_nc_ss=7b2a8&oh=00_Af0z7uT7RJ0Q0jiJFDJQzlV7OFhHv9UU4zsE0tg5o2Vo-g&oe=69F521B1', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/660193787_122166897908877648_8802009730807724558_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd6889&_nc_ohc=mId8-m_qGQQQ7kNvwEwgMFA&_nc_oc=AdorWMK3u2hplKMT6F3bMsCnTKFd_ZICmo6irZfJLq63l_Xqa_uh4TARBeYBVN5rKZw&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=BclZ2XMGrCk8TRQDM5AnNA&_nc_ss=7b2a8&oh=00_Af12nokvTLLNESZRogOEoakOJA_jGOxX41CysRce6yw77Q&oe=69F51B30', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/660461418_122166895376877648_4239651588970354831_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=K0cMCrr0jcgQ7kNvwFt_YF8&_nc_oc=AdoXQwt67TF_r2Ex3fSNzMHKIlyYNCfe-2CC9cHwWAfsF1QcqhHX4qwXqtWf13Vk7K0&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=4n5ikQJSrl3ANEnqGiC-OA&_nc_ss=7b2a8&oh=00_Af2IeoWJUwBsJRcRtOnLVMnpOa_VGTrtcKe_Nj_S0ebrRA&oe=69F5150C', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/659085974_122166893480877648_2253002403708847575_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=8pTPIDYmrdsQ7kNvwGqXiao&_nc_oc=AdqU2WS1Dtb_k54Mye1GqjhikrwBJXVE7x5gUfe_rmY35e7Ulslic0gs8LR7W19uyn8&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=sBdNd2SwQImSVhw1hWQ-FQ&_nc_ss=7b2a8&oh=00_Af3Ut3KmCQbzVM0_FyBozI78n6Cq3trCCh5kaCCEPQ9a0A&oe=69F515F0', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/658948204_122166892286877648_5430544094911157069_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=TribvNCO1isQ7kNvwE-gaXA&_nc_oc=Adr2OUhjuhMHfwgdnsyeapBskzqI4gco4GjI6uh8_hPsQH3oF7EZcE2sKplvLTcFVno&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=RlU8mNTGVjMlY7UNrvCtyQ&_nc_ss=7b2a8&oh=00_Af0GaIAevAENC36gXCEffB0dCpw8ELqCEiDB5RURHxbMWA&oe=69F5233A', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/660497818_122166897086877648_1025032900981124046_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=RuJAk6padKAQ7kNvwG0Ewc6&_nc_oc=AdppA7GoIMudTIQHtFPx5sOLwSDe66Y92-D8QyLq7PEBL45cqnQ0HSgHHdHyMOBC8lc&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=MRZVb0Rz3SMPf8At7f0vcg&_nc_ss=7b2a8&oh=00_Af3_WbWOoEJwf1A48bjXPTRjfODVEyOR0hjF0VTLgfqeMQ&oe=69F5234A', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/660931639_122166897452877648_5940047480531392867_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=K91r73KYPNsQ7kNvwH4Svao&_nc_oc=AdpkX3uIeX4z_MbixB6QZMju27OB2kG1e08UeF4_6o1c3qX2EeyElDeAes_RQz999yk&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=xFfy8iW59ksjJUfODoiw9A&_nc_ss=7b2a8&oh=00_Af2eQWOYKE5SX4fSDshMyeVUwlPr_LHYkcBKq0vzkLrTUQ&oe=69F52DC3', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/660432346_122166897704877648_7998608438361781977_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=v6u5aHi4ATwQ7kNvwEP97g1&_nc_oc=Adql9GGHIgy7kG6M4cU_HJIRnhPgz4H2RJDkDr763aWh0aDTZ0ftFCWZsRdFwt3AAzQ&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=KqFl68eKc89eDAIdR5DWCQ&_nc_ss=7b2a8&oh=00_Af0HwJwWV86Md4Qny_DY5M9rHviiNikcEgJt7Bpg24f9QQ&oe=69F50B3A', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/659928743_122166897998877648_6141315998131346059_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=EKqJZHB1mwkQ7kNvwFetNCP&_nc_oc=AdrhVKA-HMUy8IVqgJucjlVInvcGhcxBqFMLxZgWnY7U1sYRD6Uyu1Z9n6YpkXCGM0g&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=QqZliAXrBOT5DBcHUSm6eg&_nc_ss=7b2a8&oh=00_Af2mJqCySuSgt2sO38XHTzrdFyaeBApRMArKkZzq5iyZ8Q&oe=69F5234A', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/659901703_122166898070877648_8298250590377173282_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=l02sB_FqLssQ7kNvwE33Bmr&_nc_oc=Adq5a0IueytIyUaohvtbS6_wiLvnDPCgqKZcfFrDWQn8QlgjMzcHvgMB171L5AHErII&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=6jd13c71NDckioikmn4Gkw&_nc_ss=7b2a8&oh=00_Af1-X4PyLSlQr3tZmtZqbpKmh5DJUiVYqXTTPbDpt6ncZg&oe=69F5235A', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/658170500_122166895376877648_4239651588970354831_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=K0cMCrr0jcgQ7kNvwFt_YF8&_nc_oc=AdoXQwt67TF_r2Ex3fSNzMHKIlyYNCfe-2CC9cHwWAfsF1QcqhHX4qwXqtWf13Vk7K0&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=4n5ikQJSrl3ANEnqGiC-OA&_nc_ss=7b2a8&oh=00_Af2IeoWJUwBsJRcRtOnLVMnpOa_VGTrtcKe_Nj_S0ebrRA&oe=69F5150C', title: '', desc: '' },
        { url: 'https://iili.io/BtcALdu.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcAWWN.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcAgX2.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcAP19.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcR2dg.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcAZej.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcRH11.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcRsCN.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcRCLN.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcRu7s.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcRPQp.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcRk41.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcRQ4t.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcRLGI.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcRt3X.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc59j4.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc5Byb.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcRyuf.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc52GS.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc5q8u.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc5LDx.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc5u6P.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc578g.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc5rl9.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc5DiB.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc5WFt.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc7RWl.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc5yUF.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc7HHg.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc7edF.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc7YfS.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc7FxR.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc7Gbj.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc7Zes.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc7w0P.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcYoBV.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcYH1S.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc7igt.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcYJr7.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcYzrP.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcYRpa.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcYCLQ.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcYVvn.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcYuYF.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcY7TJ.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcYOCl.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcY14I.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcYMYX.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcYSa9.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcYhTG.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcYsCQ.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcYgyu.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcY4Tb.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcY6jj.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcYQ6B.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcadnR.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcYt3P.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btca2Gp.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcaKFI.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcYyua.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btca36N.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btca7S9.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btcaxtf.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcaowG.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcaTMl.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btca5c7.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btcaa9e.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcawHF.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btca0tj.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcaiRn.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcaONa.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcahS1.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcasNs.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtccFxj.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtccJRe.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtccnUP.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtccKWx.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtccBfV.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtccYfp.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcccgI.md.jpg', title: '', desc: '' }
      ]
    },
    {
      id: 'pierwszy-dzien-wiosny-2026',
      title: 'WIELKIE POWITANIE WIOSNY – DZIEŃ, KTÓRY STAŁ SIĘ WSPÓLNYM ŚWIĘTEM RADOŚCI',
      date: '21 marca 2026',
      time: 'Wydarzenie plenerowe',
      location: 'Grimstad',
      address: 'Grimstad, Norwegia',
      region: 'Agder',
      description: `WIELKIE POWITANIE WIOSNY – DZIEŃ, KTÓRY STAŁ SIĘ WSPÓLNYM ŚWIĘTEM RADOŚCI ✨🌷
Są takie dni, które nie kończą się wraz z zachodem słońca.
Zostają w nas na dłużej – w uśmiechach dzieci, w rozmowach, w zdjęciach, w sercu.
Taki właśnie był nasz wspólny Pierwszy Dzień Wiosny w Grimstad.
To nie było zwykłe wydarzenie.
To było spotkanie ludzi, którzy przyszli nie tylko „uczestniczyć”…
ale być razem. Tworzyć. Śmiać się. Przeżywać.
Już od pierwszych chwil było czuć, że dzieje się coś wyjątkowego.
Kolory, śmiech dzieci, rozmowy dorosłych, zapach ogniska i świeżego powietrza – wszystko zaczęło układać się w jedną, piękną całość.
To był dzień, w którym naprawdę obudziliśmy wiosnę.
⸻
🎨 WIOSNA NAMALOWANA WSPÓLNIE
Najpierw powstał mural.
Nie „zorganizowany projekt”.
Nie „zadanie do wykonania”.
Ale żywe, wspólne dzieło.
Dzieci, rodzice, znajomi – wszyscy chwycili za pędzle.
Na ścianach zaczęły pojawiać się kwiaty, słońca, kolory, symbole radości i nadziei.
Nie było zasad.
Nie było ograniczeń.
Była wolność tworzenia.
Każdy mógł zostawić swój ślad.
I właśnie dlatego ten mural jest tak wyjątkowy –
bo nie należy do jednej osoby.
Należy do nas wszystkich.
⸻
🔥 OGNISKO, KTÓRE POŁĄCZYŁO LUDZI
Na zewnątrz płonął ogień.
Dzieci piekły kiełbaski, ziemniaki, śmiały się, biegały.
Dorośli zatrzymywali się na chwilę – przy rozmowie, przy kawie, przy cieple ognia.
To były proste momenty.
But właśnie w tej prostocie było wszystko.
Bliskość.
Spokój.
Prawdziwe bycie razem.
⸻
🔥❄️ POŻEGNANIE ZIMY – SYMBOL, KTÓRY ŁĄCZY POKOLENIA
Wspólnie stworzyliśmy Marzannę.
Nie jako „atrakcję”.
Ale jako tradycję, która niesie znaczenie.
Dzieci tworzyły ją własnymi rękami – z ciekawością, z radością, z zaangażowaniem.
A potem… przyszedł moment pożegnania.
Symboliczne spalenie Marzanny było czymś więcej niż zwyczajem.
Było wspólnym gestem – zamknięciem zimy i otwarciem się na coś nowego.
Na światło.
Na ciepło.
Na życie.
⸻
🌱 SZUKANIE WIOSNY – TAM, GDZIE ZACZYNA SIĘ WYOBRAŹNIA
Wyruszyliśmy szukać pierwszych oznak wiosny.
Czy znaleźliśmy przebiśniegi?
Może tak. Może nie.
Ale znaleźliśmy coś ważniejszego.
Radość odkrywania.
Uważność.
I dziecięcą wyobraźnię, która potrafi stworzyć wiosnę nawet wtedy, gdy natura jeszcze śpi.
Bo czasem najpiękniejsze rzeczy nie rosną na łące –
tylko w głowie i w sercu.
⸻
👑 BAL, KTÓRY ZAMKNĄŁ DZIEŃ… I OTWORZYŁ COŚ NOWEGO
Na zakończenie – bal.
Kolorowy. Głośny. Radosny.
Pełen tańca, śmiechu i dziecięcej energii.
Były konkursy.
Były nagrody.
Była wspólna zabawa.
I był moment, kiedy patrzyliśmy na to wszystko i wiedzieliśmy jedno:
To nie jest „wydarzenie”.
To jest wspólnota.
⸻
🤍 DZIĘKUJEMY – ALE TO SŁOWO TO ZA MAŁO
Dziękujemy, że byliście.
Nie tylko obecni –
ale prawdziwie zaangażowani.
Bo prawda jest taka:
to Wy jesteście naszą siłą.
To dzięki Wam mamy odwagę robić więcej.
Tworzyć więcej.
Budować coś, co ma sens.
⸻
🤍 NASI WOLONTARIUSZE – SERCE TEGO WSZYSTKIEGO
Są też ludzie, bez których to wszystko by się nie wydarzyło.
Nasi wolontariusze.
Nie zawsze na pierwszym planie.
Często niewidoczni.
Ale obecni wszędzie tam, gdzie trzeba.
To oni są wcześniej niż wszyscy.
I zostają najdłużej.
To oni widzą więcej.
Reagują szybciej.
Dbają o detale, które tworzą całość.
To nie jest „pomoc”.
To jest fundament.
Dziękujemy Wam – nie za to, co zrobiliście.
Ale za to, kim jesteście w tym wszystkim.
⸻
🌷 TO DOPIERO POCZĄTEK
Patrząc na ten dzień, czujemy jedno.
To dopiero początek.
Początek miejsca, w którym ludzie chcą być.
Początek przestrzeni, w której dzieci mogą rosnąć.
Początek społeczności, która ma sens.
Dziękujemy, że jesteście częścią tej historii.
I… do zobaczenia. ✨`,
      images: [
        { url: 'https://iili.io/Bt5h9Ie.md.jpg', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/657259762_122165742926877648_6597782063289027035_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=WAP15LoGaaoQ7kNvwGMq9En&_nc_oc=Adou4UFW1LwTUCSsfpDEluVl25sJqPHYMj5wD1FyC0nGVr4WNSGf00pl0AYDe3wZVx4&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=d4z3_Sb-VY1HbT-cFB60FA&_nc_ss=7b2a8&oh=00_Af1A-W1V3csGLeXyZInUjn19U-_g4EO-m4Z7coNc62l_Sw&oe=69F50D8A', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/656763800_122165744486877648_1335466965038010010_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=WdmmYDicOhgQ7kNvwHVJHNo&_nc_oc=AdqKmD0fcGt0XPq_IsLLOHR8N8vbLEVzFxBjyRJSBVqUIVUSnwJefniNkpp73n1O4hk&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=0ReXF4Pe6bb-2q_6o0Ct8w&_nc_ss=7b2a8&oh=00_Af10kLI7Ru0W5oWgxa2H7WvDtwgtC0KnxWbFGsn3onb6fQ&oe=69F50A34', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/654879149_122165740796877648_7408273299030839327_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=v5VqUmBZzSMQ7kNvwFgVvKe&_nc_oc=Adoc0DMqfgQcumBX97nIgGuMOhbMm8I48NkXPUpCisMNx_UxQhOjyF-HWRwL99J3chQ&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=2xT5i_QOPK6GQNqBgrC-pA&_nc_ss=7b2a8&oh=00_Af1WB3NZJPD75-zR_SFsSL0jLl5C0qq9PJIUgu9tZ4YRdQ&oe=69F50D0B', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/654427605_122165741432877648_3830252769789957699_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=WxjoM_zWhtoQ7kNvwEJ5sHa&_nc_oc=AdrkvuDF7M_IgFuJfyS4BS9GRT4S1CaIh_zuxRWvPXnCH7jZ25Iom7gNGZBi3qwUmZE&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=R38SbyHWPeSMbeX7lQR0gA&_nc_ss=7b2a8&oh=00_Af0GfuWlGcDTYgAg9n4HhEOTRnJd3yg_aOloZcbE90l02A&oe=69F51B18', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/653464627_122165739086877648_4348935188232994164_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=H5sKBR9XeU0Q7kNvwGipt-Q&_nc_oc=Adq0Ppd4jU4pM6gxF9F4GwSc_D9QUfXJHrBxJ7d-OkJJ5aVdJNloGpIxvlmAgsYcxdI&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=vG8GFyFRKhzIJLrVxFidTw&_nc_ss=7b2a8&oh=00_Af3_JRaOEo7ksSb9SusnIOEozbHb21fuLOWHBDcBFL5vyg&oe=69F531E4', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/656480458_122165743538877648_6096800602893286635_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=97lVC0g7YY8Q7kNvwFwHy2t&_nc_oc=AdrdVgmQHsbG1rQV_kVieC75-YDfRXdX-X3D05y3Nr3WdhxpT5ZEUS7MNwO2mxkj9dY&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=bIfg7xNVHfs8ijnnD99NZA&_nc_ss=7b2a8&oh=00_Af2T3k6truglXP0lG--vxSLWYIGqpJG8u8qSi7mEVqzKoA&oe=69F53679', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/657350645_122165743820877648_7802243301279451380_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=MXq1zcvKheYQ7kNvwFKQ5Tf&_nc_oc=AdrV0S4HXBLI0_o-beondfwIjYE2rC_noNY751snST0F9t5PT3Wi76buhrgmeksTN6k&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=zEeMN4v5wV8mfjcUCKX_zw&_nc_ss=7b2a8&oh=00_Af3aBYNkgKLNCaEX9x74GHwX6GxQu0P_jRPEnDecVzK_tw&oe=69F50B93', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/656296734_122165744246877648_2905957860458507693_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=hMu8_JrI_h0Q7kNvwH9h-IW&_nc_oc=AdrMI6DGjs-ZdAWfHv1nNor-cmVIlwI4nxjI7gTKF5SkViwh21EEwIWjzZVMC4qwnTY&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=DNW4I_1zrwOWMyKwLKMevA&_nc_ss=7b2a8&oh=00_Af37gyfZSTRN5tYhaL9nMybzeGVTltKYDrSB8FCXJq---g&oe=69F51014', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/656226936_122165742908877648_7836040900622518519_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=ZTCes2NTl4AQ7kNvwEcQYFi&_nc_oc=AdoAnXF6tVcCZqNgBmICsyfmo9MEOh3OpqkDqZKqMhJ0MsuUFZ2PmpK8CQFCMgCNcU8&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=hfvJZJEjyu7uBuvgAYMFWw&_nc_ss=7b2a8&oh=00_Af2vvvTfJgi1R5qU4O0yRBDmXiERJPAAHgRdWuyOqJPmlg&oe=69F50B2D', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/656686135_122165744366877648_5674522017316881829_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=MmTiULE7QwwQ7kNvwFqvCL6&_nc_oc=AdrBQAi6o5H0bvz7thj2N5FTDicvtubc1Ck1QxwFJIpz-KQA6jBOLRmF_vcZX_3sw3E&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=KrUHWJMH45Lx9IN2UxBKZQ&_nc_ss=7b2a8&oh=00_Af1fvIXVchwyV1_HTrRjA2lg7mEvD8P5Je9eqkI6ptUxhA&oe=69F50A5E', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/656172150_122165743022877648_693117255705433960_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=5ZWF84MZVOEQ7kNvwHOk-sk&_nc_oc=Adqgai2VyPI30wUxJOp6E2AJpqjitEF0oJKi-ZMgRKegrXZKJzIEdpiRaDSB6T78x0o&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=bzIU1t_4S9OWtUrf1e0_jQ&_nc_ss=7b2a8&oh=00_Af3ko1HdCKHCOYl-GMeQrk0tiXyTOHGSAY9f8P86LYjZ-g&oe=69F52910', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/656316189_122165743328877648_2008053418558019151_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=8taWn78B0SoQ7kNvwFjEqsq&_nc_oc=AdqHkVZia-xZRfd3-l3QtqvznbeANvxbp_C09n2rder9CTXAr9pfbru4stooM7Vpty4&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=iReeZXD_tssUdA20luDnbw&_nc_ss=7b2a8&oh=00_Af1R7ByI5AdQ3phy6-2AYgAhQRN-Y8Q7S7wlg-g7rS_Wag&oe=69F52799', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/656711063_122165739536877648_3345189950913522563_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Wr3n6-ElfX8Q7kNvwFn3Sr0&_nc_oc=AdrSxunl83YyIfkly7WvsGQkVFVCo2huc4UlLYp0EVvIVupT3dGwbkAmSw0nzdZ9ZAc&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=SaUQRLQfxHazfAZejdW3bg&_nc_ss=7b2a8&oh=00_Af0WKFKAeNz0GXTOBzdlBgiDJdr35B5dbgAsf_AGsQd8Rw&oe=69F50AF2', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/656691609_122165739032877648_6177527750712460797_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=cbEqc3SFafkQ7kNvwHWEhz3&_nc_oc=AdrGO-iAnVaYujhJDBJTRhhkxF-XIPu0NCKO3Odtyfrc9ra5TwS-82o2IMqJXo-OoDA&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=qMwx5kMXM6-6U2jA64X3RA&_nc_ss=7b2a8&oh=00_Af2_g7-xlxpa7OE4JCPEOvTXz64pWKmEE2-d1O0w_BwqHw&oe=69F51666', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/656188924_122165743970877648_2476755114887746159_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=vE1m3MWKwVAQ7kNvwF3znH3&_nc_oc=AdrH3bzbFjfxERNqCghQJ2hW1flt7Jo0oWo_RUM6jdKXQDvyizPPx3gqqqFRqFAa5Qk&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=50WX2XrNI8f_LxwkO5uh6A&_nc_ss=7b2a8&oh=00_Af1v-AQK96mWMK4EjCX54DjgjG6Uy2Xvm3HvEc_Z-tDcBQ&oe=69F50D81', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/651412783_122165739632877648_4369735576097484247_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=TIzTV5a2nbgQ7kNvwFexyI9&_nc_oc=Adp80_x4U87DdeYsM07XqlTf-jvatYXz52YYEbivINFMwlildfeCF73GolxqUvfkxfU&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=gpuOYsnlQUF7UoAH4kN4gQ&_nc_ss=7b2a8&oh=00_Af1W4KQg7kpBTMocmUrujTHClzbzCNNTzQ1lU_HHDlgbUg&oe=69F52D13', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/655816858_122165739716877648_3715490211307085079_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=NIpvKSCvhOkQ7kNvwHJ4ceb&_nc_oc=AdqSYy1uaALjCjVTk6OZ4Yoj7vvN2SPgFwCVR42NOqEM3L-k9826lO7u4dFjEsZTcdQ&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=aJdmswnlYXf10gn-6Qs9tw&_nc_ss=7b2a8&oh=00_Af1QRe3UgjkcwdFAMgnVFuJKzUTeAdJdnCANMqYLGEl3tw&oe=69F53A75', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/655878229_122165740592877648_1349839314801993805_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=-QZRgIfNsvcQ7kNvwGx2A7q&_nc_oc=AdrqcSI0-Q5zoIZokASLF4nS_toHtGk5i6h2tR4EwRM-qzkjhu-1yj3M5ifLBm6hVK8&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=DWF6BeLQ7AB94uovIdQNtg&_nc_ss=7b2a8&oh=00_Af1Y1GYo-tbqv-g8Bm4ZOsrSMOL0KOWIPgpoS9eWy47OPQ&oe=69F51803', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/654348031_122165738834877648_7862125889665940436_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=SWThxe9lO0QQ7kNvwG1ASDP&_nc_oc=Adr3ZS9Rtcg24CoRPt0GMBLdyxjay-n7Sou2q34w1lsS2KinLcGmDdh3T3HwPyQjR_s&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=noahr-DTbZZk-gAxbmDY7Q&_nc_ss=7b2a8&oh=00_Af0wC7y_wXz0j1wo5N93PCcEPIwMGnTzIwf1lBg1mtFsfg&oe=69F52D1C', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/655816858_122165739458877648_7219964880893297673_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=K43eSKKG1CYQ7kNvwHmU33C&_nc_oc=AdoNj_uAPfBR3EdTH_3c9MqM60UEJXAcdj69W-uciflvwBrJNm8gggINV4oxesTWCMk&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=6Dufut0lqNMfZco1tj1WKQ&_nc_ss=7b2a8&oh=00_Af0yKc26bVowUpw1szlWmOPufvZawsWVt63-_wEcbIye2g&oe=69F50B59', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/656763692_122165744198877648_4966940685288197284_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=4MyLubpmc6YQ7kNvwGcwucb&_nc_oc=AdpDBh6j1T7ybjtqicNECnvU0B09M6i7Rc93AJPXJwTcqTD3zOiXs9qtlrd22qosGx8&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=3AzAW4S-d3tApfxBw9tjug&_nc_ss=7b2a8&oh=00_Af2GLHxoMqxUeDcLz2KwoUeoMMAQjX4FpY2HlheNErd8ow&oe=69F5287D', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/653707836_122165740250877648_5912300997317605196_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=zYO4ByQ6VCQQ7kNvwEbqRYz&_nc_oc=AdrKUHcwMReVVsIQPfYXBOWqpch8UUaP6L6l9UfGrUS8Q7lNUJ0sYuM7Jqk6Sil1nYs&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=uEuBnWiwbVFjF-ayTgU0Zg&_nc_ss=7b2a8&oh=00_Af2Clc0jsct3RKj9sOFzKbPca2ue4luGPiEOx7-YexzcHw&oe=69F52AB8', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/654813029_122165738672877648_2796398314755668827_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=2uYvMIkgyWsQ7kNvwEYaiAv&_nc_oc=AdoPDrHY0Pywq6Haql9kWOEWmtnRqMx6BLu_9GiiV-PqzbntfZz8PB95ZV804QRKvbw&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=AN3LWof7asmJ9Zch7y7gow&_nc_ss=7b2a8&oh=00_Af0wM8_yp1Zp4eT_VNDIsJaHvHscwtXF8WZUTg16fdwVyA&oe=69F52979', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/650073534_122165741258877648_3116183009448235496_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=89zZW4lVTRAQ7kNvwEnI2mw&_nc_oc=Adq7IBH8Tsu5A8GMc4qzCPqdUqmwLJL9XAt8sW3sAz-6FbniwONo7FvkYnUhNMsRMPk&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=pirijFZY9mSYigaG9lbGRQ&_nc_ss=7b2a8&oh=00_Af3IA7biqzSO6yuVDq47I_yMhZryapmkaVIWplK4OlB5dg&oe=69F52832', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/656859991_122165743088877648_4781261537785410352_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Vn91qwuCoLsQ7kNvwGKF5UF&_nc_oc=AdqH5y37xrIySC8iua6_eoOpXylkeqPWrnfUDQFpgNi1sLOJiR9V7VWgpfSVkVLVDm8&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=CQYTinLJP1GMkCGkKcdTDw&_nc_ss=7b2a8&oh=00_Af0i5AaD0SJyX0ikIG-vboLO_FI3s5QpVowwYZSAJIm2iA&oe=69F528BF', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/656976356_122165744114877648_3784545422078882574_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=6VQjsVU7hvwQ7kNvwHcWGOf&_nc_oc=AdowOKQ0pTXf1WNUHP4tZdbnD80Zy6W0XfjYfIcXvWIRVxbxbGVYay6szR9gmIwwTAg&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=66kvG1BVBEi-RI-E-ctv_Q&_nc_ss=7b2a8&oh=00_Af12eAlbnRTYzLeNhWWFxsdSTItj_QxvPJd61jx6kN64AA&oe=69F52C0B', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/657795241_122165742938877648_7953850682725194720_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=zAF1wMHHDLAQ7kNvwHkcJgR&_nc_oc=AdqBQWXLznR9wl-TtHiO-yfa0M7u-Ro6AoxO6M_mW-6mqRUXOZTm96BeWHcgvBtrvE0&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=IYdoHu1mm99t1vGblrKo5A&_nc_ss=7b2a8&oh=00_Af2Zotvg6w1GO3Dm2_sdg7loryRTERI6ki168YK9oRpJ4w&oe=69F51D44', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/656150230_122165744396877648_2340852662543089269_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=b9i-A5MZDN4Q7kNvwGkyzxF&_nc_oc=AdqTQ7jAH9f6acqcUykRKHXyeqwOTIwftyM1CXP9jK1HWL2bmAj1eZAD9f9Q0APovuQ&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=miRho6RHdjGfxr6JU1uhRg&_nc_ss=7b2a8&oh=00_Af2kT87Q48YzJdHBNl_TR5mSrLLMjuoaQetObWiqm5sxfw&oe=69F52A6A', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/657596173_122165742986877648_7374457570931493688_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=srI-GUAf8rEQ7kNvwHk6eOL&_nc_oc=Adre4wtmFf4IEKVOXFcwiFpDu2wMAeF-5HsKPn8kUG3aSvGG2SGEPllbu44Qu4BiDdI&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=ZlI0aHZ7GnooGbtxMpqIbA&_nc_ss=7b2a8&oh=00_Af0ioTp0yskkpYEZc4_h8zV_6sWHJmuZfZ7xTy03baXpKQ&oe=69F52A00', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/656902512_122165744318877648_6527956177756808264_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=LU-eC9zU3N8Q7kNvwHUzt37&_nc_oc=Adp8Q9ZnFDdKlta6Xmb7W6ty9QTt4E43f_y9Al8oposjgBI5-gyHfH-XiuJ1i3MkwqM&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=v0lYe9KofQ-QdEvUESSdPA&_nc_ss=7b2a8&oh=00_Af1sWatSGjquT3JwLSUC8LiRaMnVs92fvvsCopt84X82gg&oe=69F517B3', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/657144044_122165744102877648_7340898971601481637_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=5g4KWtdZGLUQ7kNvwHSr868&_nc_oc=AdoHKBZdfIQPRHoKGr39Igca8h88OG9uz7nwR4MQxJyUPehvdWdO6VJCVY3EBCKhXIg&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=yW4OzBuQqbtoxYyInlMb2w&_nc_ss=7b2a8&oh=00_Af1ROce833c8Yfbwiqv_RooNwQJgXH1_cI15diI4De98fA&oe=69F53C2C', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/653707748_122165740754877648_3893207622107530638_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=FBA8xPxNDwkQ7kNvwHQ6s-m&_nc_oc=AdrkrxxvnZk5_iQddEAuoS3i3ROx4nUlfkvofbnK3bAFlb5GPbZzw1-LCVe68sioPFg&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=oa5aghJVIW6OtgmyirUryg&_nc_ss=7b2a8&oh=00_Af2_4S5mKkkgNKi_t8teIK7QUVRw5x2Icxtzi61yWy-WWw&oe=69F50578', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/654310696_122165740508877648_8199571578107098932_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=DmKwI0OenRMQ7kNvwEVe96B&_nc_oc=AdrR0Wy_8_-H4wcmD-LHEiyGOWHXPX4vFTW_9oh1YMQeWauxwJEnidHVWEuAPf0NPnk&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=eLdNi3sJ69tvPC_mtTDdvw&_nc_ss=7b2a8&oh=00_Af0_IrvUK32AqcNKePm2KNMPtQBUzpM5aHxzctACMq3nFQ&oe=69F534D5', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/656023574_122165743256877648_5885864655298280522_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Vdp2iGcxv_QQ7kNvwERo7gK&_nc_oc=AdojTApRMNOZPT15kBazGv6NjBGiGoOF-CTCdfKVgXraKp2Ngumr2WDiuQdHlFzM9F8&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=grNxAL3Ffu3cCRgkxfXkHA&_nc_ss=7b2a8&oh=00_Af0AZpUOd1f1-oQnnyUgH64lH9lSimOo-VLjL6sW5SrO7w&oe=69F50643', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/656042355_122165744450877648_4292669384353695323_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=j1reLXG9ObgQ7kNvwEYgaR5&_nc_oc=Adrpb2xw8eBWG9o2gmiq9oh6zCMDgMykIeNDq8eatvSQXiU8hU9BUGota_fRojEjYt4&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=IrL7AIGKi21C5r_smZX2sQ&_nc_ss=7b2a8&oh=00_Af13Vji4PFsQtFbxwVmIAp9ahoGb6uFQBBpPH7GaJw6tYQ&oe=69F51978', title: '', desc: '' },
        { url: 'https://iili.io/BtclT2S.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btcl0EQ.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtclAv9.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcllCx.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btcl14V.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtclhTg.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtclOCv.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btcl4un.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtclSaI.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtclgyX.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btcl6js.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btclsnf.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtclLG4.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcltF2.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtclDaS.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btclp99.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc09wu.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc0uPR.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc036Q.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc0nAF.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc0EoG.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc0xta.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc00ts.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc0a9t.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc0lNn.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc0ONe.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc0eDu.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc0vob.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc0Six.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc0PHP.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc0mfR.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc0tWJ.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc1HJI.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc1dOX.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc1fsf.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc1edN.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc1xJS.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc1cgV.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc18mX.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc1WXa.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc1rLG.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc1tp9.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc1Q7S.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/Btc1Zk7.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcEqTF.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcEKp1.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcEWy7.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcEFkP.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcET2p.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcEuYN.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcEhu9.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcEVvS.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcEMa2.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcEsna.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcEk6x.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcESaV.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcEeGj.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcEtFR.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcE6wF.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcEDap.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcGEog.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcGfcl.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcGC9S.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcGGVa.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcGhSp.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcGtWu.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcG4Ul.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcMC0v.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcGLb9.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcGmfj.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcMdOP.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcMBqJ.md.jpg', title: '', desc: '' },
        { url: 'https://iili.io/BtcMfsa.md.jpg', title: '', desc: '' }
      ]
    },
    {
      id: 'vinterferie-2026',
      title: '5 DNI ROBIENIA PREZENTÓW Z SERCEM – zimowa magia, która zostaje na całe życie',
      date: '20-26 lutego 2026',
      time: 'Warsztaty całodniowe',
      location: 'Grimstad',
      address: 'Grimstad, Norwegia',
      region: 'Agder',
      description: `5 DNI ROBIENIA PREZENTÓW Z SERCEM – zimowa magia, która zostaje na całe życie
Są takie chwile w życiu dziecka, które nie są tylko wspomnieniem jednego dnia…
ale stają się początkiem czegoś większego – wiary w siebie, odkrycia własnych możliwości i radości tworzenia.
Takimi właśnie chwilami były nasze zimowe warsztaty
„5 dni robienia prezentów z sercem”.
To nie były zwykłe zajęcia plastyczne.
To była pięciodniowa podróż do świata wyobraźni, kreatywności i dziecięcej radości – świata, w którym każda para rąk mogła stworzyć coś wyjątkowego.
Już od pierwszego dnia przestrzeń, w której się spotkaliśmy, zaczęła żyć własnym rytmem. Stoły wypełniły się kolorami, formami, masami plastycznymi, narzędziami… ale przede wszystkim – energią dzieci, które z ciekawością i ekscytacją zaczynały swoją twórczą przygodę.
⸻
Każdy dzień był inny.
Każdy dzień odkrywał coś nowego.
Dzieci pracowały z różnymi materiałami – od mas cukrowych, przez modelinę, aż po glinę. Uczyły się nie tylko techniki, ale także cierpliwości, skupienia i odwagi w tworzeniu. Z każdą godziną ich ruchy stawały się pewniejsze, pomysły odważniejsze, a uśmiechy – coraz szersze.
Powstawały małe dzieła sztuki:
kolorowe muffinki, dekorowane z niezwykłą precyzją,
ramki na zdjęcia pełne osobistych historii,
ozdobne kubeczki, które nabierały charakteru,
biżuteria tworzona z wyobraźni,
magnesy i drobne upominki – przygotowywane z myślą o kimś bliskim.
But najpiękniejsze było to, czego nie widać na pierwszy rzut oka.
To momenty, w których dziecko mówi:
„Zrobiłem to sam”
i naprawdę w to wierzy.
To chwile, kiedy dzieci pomagają sobie nawzajem, podpowiadają, śmieją się, dzielą pomysłami.
To budowanie relacji, które powstają naturalnie – przy jednym stole, nad wspólną pracą.
To także przestrzeń, w której każde dziecko było ważne.
Widziane.
Docenione.
Warsztaty były prowadzone w spokojnej, bezpiecznej atmosferze – takiej, w której można próbować, popełniać błędy i zaczynać od nowa. Bez presji. Z uważnością. Z szacunkiem do każdego etapu nauki.
Ogromnym wsparciem była również współpraca z Beatus Cras Agder, dzięki której mogliśmy stworzyć warunki sprzyjające rozwojowi, kreatywności i dobremu samopoczuciu dzieci.
Przez cały tydzień dzieci nie tylko tworzyły – ale także doświadczały.
Zapachów, kolorów, faktur.
Smaków wspólnych chwil przy stole.
Radości bycia razem.
A potem przyszedł finał.
Sobota – dzień wyjątkowy.
Dzień, w którym rodzice mogli zobaczyć efekty tej pięciodniowej podróż.
Wystawa prac dzieci nie była zwykłą prezentacją.
Była opowieścią.
Opowieścią o każdym dziecku, o jego drodze, jego pomyśle, jego odwadze.
Na stołach pojawiły się dziesiątki prac – każda inna, każda piękna na swój sposób.
Do tego wspólne chwile przy kawie, herbacie i słodkościach przygotowanych przez dzieci.
Rozmowy, uśmiechy, wzruszenia.
To był moment dumy.
Nie tylko dla dzieci.
Także dla rodziców.
I dla nas.
Bo właśnie wtedy widzimy, że to ma sens.
Że tworzymy coś więcej niż warsztaty.
Tworzymy przestrzeń, w której dzieci rosną – nie tylko w umiejętnościach, ale także w pewności siebie, odwadze i poczuciu własnej wartości.
„5 dni robienia prezentów z sercem” to nie był tylko projekt.
To było doświadczenie, które zostaje.
W rękach dzieci – w postaci ich prac.
W sercach – w postaci emocji i wspomnień.
I w nas – jako dowód, że warto tworzyć takie miejsca.
Dziękujemy wszystkim dzieciom za ich zaangażowanie, otwartość i niesamowitą energię.
Dziękujemy rodzicom za zaufanie.
Dziękujemy każdej osobie, która była częścią tego wydarzenia.
To właśnie dzięki Wam powstaje społeczność, która ma sens.`,
      images: [
        { url: 'https://iili.io/Bt5jRou.md.jpg', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/641759562_122162526614877648_1881027054771949056_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd6889&_nc_ohc=eaP7j7TvoygQ7kNvwHG2DEI&_nc_oc=AdobTTs-tnna9nZPr26YtufcTMW7tDIDmQ00gy6lU59xr8DuvsODocFwV6ZrEN7dP6g&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=yrmu-CrJTYC7Vq_EdCofjQ&_nc_ss=7b2a8&oh=00_Af0z7uT7RJ0Q0jiJFDJQzlV7OFhHv9UU4zsE0tg5o2Vo-g&oe=69F53771', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/642163128_122162526794877648_1119737361768446864_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd6889&_nc_ohc=yRvKOo2qzM8Q7kNvwF8ZGl8&_nc_oc=AdpzcMTQSXmhuoANTJPWSZKtq4mU8g3uQgBQZdURO9gdgEWL4RewjUU9p8VlNFJOD7U&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=G_zvHquzAFd0DgIo3e91OA&_nc_ss=7b2a8&oh=00_Af3-iUxKCf004XakNvlv8pN800Opv_ta2njdZGI55sFqew&oe=69F51F30', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/641802504_122162526914877648_7785159644277296225_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd6889&_nc_ohc=HbFhNoBonPcQ7kNvwGZ35pT&_nc_oc=AdrsDh_LpNU8tUglNlsoKfW0Lp5GevfBe4bGX-rLAjMD-wyXKMDsQBybvIdO6LLkQfI&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=N-pc6JxdbFSekIBlkwo0sQ&_nc_ss=7b2a8&oh=00_Af2DS6_vsU46cw08tQTFhC-xU-3jSVdMQSD48g_G4mA4qA&oe=69F505A4', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/641184603_122162526968877648_3754971916196015399_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd6889&_nc_ohc=b3nEzBX93CcQ7kNvwFZLpbz&_nc_oc=AdpeK4TgJRYAWHnt42hOfnspt2eH2XoVboUiqbcXkyXhhEbbhDZZHrdJRLmVhEhqfqk&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=r_nQ89JvX0eIcqIrRO1zVA&_nc_ss=7b2a8&oh=00_Af2o5Pq5rZEcIWNvtRgIPzFDJ0K-c3xsHcd4_kPMy8pgPA&oe=69F517A7', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/642389279_122162527226877648_5759367907555510638_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd6889&_nc_ohc=Wjudl5g_YzUQ7kNvwEEL5N7&_nc_oc=AdrVt95AUzu-F51kHfOWNd_x54yuh6JqnHCTzhX2udi9guFnt8uAevDdE2eM2Sw8SZM&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=boZa6GEvmR0bec2O1oqKkQ&_nc_ss=7b2a8&oh=00_Af0D7qacmolP5NTWV0C2f7z7HsGBkfEXY6aJAOeAv79QbQ&oe=69F51ECE', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/640534451_122162527280877648_7003751656951240295_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd6889&_nc_ohc=-e3ERS_q2OkQ7kNvwHuh9CI&_nc_oc=AdpW0R8nynVeBwE89yOTRd8BjXAAGfR9rd9Q_AocwMqBsIhuYFo9bChx95-tGEhBNtQ&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=0DqiyUE50SMHFJy9zpsBaw&_nc_ss=7b2a8&oh=00_Af1_DTnv18Q-6zTxN-dSGay_az7tn1uTLGW96IFooF_75g&oe=69F50C8F', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/641484862_122162527334877648_8501115028744599513_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd6889&_nc_ohc=knk40VWkfdkQ7kNvwFLHSGu&_nc_oc=AdrNPnwyjhA_tER9M4_FAw5b9SqMvHeJ29le6n3H036XU5OWfKHnA0hgq6ONpoKM5fE&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=RZesjNmz8Es3ZZq68__L8w&_nc_ss=7b2a8&oh=00_Af0LbzRXxWHnYdSx5kjdC9SECrB4J7I0Zx3LYKKSExA9ow&oe=69F50C84', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/641444083_122162527388877648_5581327494676416617_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd6889&_nc_ohc=BgHSgj-66lsQ7kNvwGgFw1Z&_nc_oc=AdoMTMZgh7_B2sDL-l8aZy7N-vOpN6BvRQouLVI5S-tQd98UApylrRBQBZDJ5qumjnc&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=EQ-_ukXdmOLRTSVT22VQZg&_nc_ss=7b2a8&oh=00_Af27xXLp9lcv8VY3XzAgMX8U37gH84dI8PaiAnXz0SG5bA&oe=69F5380D', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/640338461_122162527442877648_1166852385018161165_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd6889&_nc_ohc=KYoqKaFjdmMQ7kNvwE0JVj9&_nc_oc=AdqBDNj03AHez7DGpzUHLMOvHyaqZth8tWHLwSPG6xzra_iOzZjaN5m1ngICwXXpUrk&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=ypaYpV9b-lIq5LHx9saV6w&_nc_ss=7b2a8&oh=00_Af1gEPbQzwRm_IsXlkZvoTNDHnXJTlH-OaxWnT67-tM7cg&oe=69F525E5', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/641295486_122162527496877648_1387346963956846113_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd6889&_nc_ohc=KZFcUF8Bct0Q7kNvwEsz3cj&_nc_oc=Adr6AJYnKS_xi9mIXcE9WHUx5fMyQHhvZ-fBmFKNlcZwe-cwkuu1xnikySCMJLRXNT8&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=ykgHHU-oRXrhYY0EHDQqcA&_nc_ss=7b2a8&oh=00_Af2Nrkboddd0owIjxh2zeH-8hgZJFZn_tshK1YQtLSMvMQ&oe=69F522DB', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/641767274_122162527604877648_3791063421939315438_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd6889&_nc_ohc=yxBWSaosS4IQ7kNvwG9eMaQ&_nc_oc=AdoBWkAUfoIJcQQ11uyaUBAolineVU-skqUqiyMcNOfuPB-W_9Y6jvIzczEwfWRLWDo&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=v5SbqB7QDyki7bu6RBh0QA&_nc_ss=7b2a8&oh=00_Af31RX6x2RnhsvHnaNVpGkCY6AqcILicKIZRrkdmU48h5w&oe=69F51836', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/640522522_122162527772877648_1301793488831444198_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd6889&_nc_ohc=XIhzCoGrh2IQ7kNvwGmuSAU&_nc_oc=AdqQ4K2YQg2toiRq61RUvKkY_svvXMF0lIFhj_SApwST4gvZOocOXbtLJKHf0RjRXgU&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=E-S0V_oFDXnT-y-5A8MZOA&_nc_ss=7b2a8&oh=00_Af2sL0fIdKqG2d9aK9E5kfMQ49UAoTNZUIs3qS6W_tZIKw&oe=69F51215', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/641473815_122162528090877648_7976567752797433717_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd6889&_nc_ohc=lhuTudDVUl4Q7kNvwHMZtor&_nc_oc=AdpAfMu1664Y1LOw2bJ3k2LoMC0ZTtxTkthbjHgDGyXmw2fK9hp0uzp1DQSf32FI2KU&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=mKXSYCkBimPLJOh04SiapA&_nc_ss=7b2a8&oh=00_Af3XDCSJzVmmhXCpRlXK0PDxsOcfmQ2f7ad9A94M2YVj7g&oe=69F51587', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/639234054_122162528156877648_8938451322445085983_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd6889&_nc_ohc=qtvsd7lfz54Q7kNvwGoIO2i&_nc_oc=AdoUtOuYGhnFSGqCQ2Zqe7iYhvxwtFjNOYi2QJYDjvt_FLIjPfeIzZERhIs36Uv_fes&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=oBJkoSaApDGgVpyuVKf9cQ&_nc_ss=7b2a8&oh=00_Af2vFjex3TtEqj94QK37kV8rBFiQEOa6S9hnkwo9KWsVAw&oe=69F5092B', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/641149426_122162583278877648_792801339276621300_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=dd6889&_nc_ohc=bYrgcgWhLDgQ7kNvwGMOcF2&_nc_oc=AdochQ1hYZ4Z_ihr-mBd5Jq3hoWVrFH54Y_BHFUaRzlRvxm6J9spsOhXn2aqY-CtAlw&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=vXpxxstHxpNx8iFKnOR_Dg&_nc_ss=7b2a8&oh=00_Af21OY72N6Ok--n-83zaUuTQ1AkbeXOtVPNZrIH4ouKAng&oe=69F53817', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/641255202_122162583200877648_5618036452468585365_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=dd6889&_nc_ohc=7mhct9GKpEAQ7kNvwH-c8sK&_nc_oc=Adpf0hq4Kn7Xoqjv61-1Hpc1mNw1rd9H7DO-TkH72_4Si4qYpRKRWVzBw5SCpd4FYEc&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=WsP7TBk27r1TS5WfsKOJiQ&_nc_ss=7b2a8&oh=00_Af1ie7wDThXHl2ekQ_G5cLW6M_GfUXH7syXjhu6RAiljgg&oe=69F508A4', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/639974028_122162586140877648_2435710784461826751_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=dd6889&_nc_ohc=pSwemiDCnqMQ7kNvwGysPOO&_nc_oc=AdoNhSu7_ZGX-VNd7tZW2zrDqV-hG8zWiS1ybDkmu3x3AGqF4-EnVoJuWeR8chjrGwk&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=ui5E1XKtvNpF-NA1Etn7_w&_nc_ss=7b2a8&oh=00_Af3JkKYBv4lkJNkxnsJ37Gk4v_njHJx6v-4OKPozOMXTvw&oe=69F530FC', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/641026702_122162586362877648_3279765200392179127_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=dd6889&_nc_ohc=VVvm4gl6cZIQ7kNvwHbYgBd&_nc_oc=Adoa1Oa3fduKNQvI7G9spOnxOsgXc8kx3mCoyovg4y8bjJIrIgKsEl_cjziuLq7qK-k&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=H9Zf4CoQDqsirnUMS9z5Sg&_nc_ss=7b2a8&oh=00_Af0FVQux73Rgimp-YeCLGwGJ0PrTrDIFXOmMqeFk_kJyVQ&oe=69F505BF', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/641253065_122162588720877648_1966075852587931904_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=dd6889&_nc_ohc=o8N3gaRXc-gQ7kNvwETpqOk&_nc_oc=AdplMK8zcfbP0lP40AV-HdS8-g9vgRkpskybOhJtLZ4Al2pSUdn2MnlTyY_FobdJMLU&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=vGZmFU9wtR9dQUb3q3q-Ww&_nc_ss=7b2a8&oh=00_Af171wljuhmQ4qQ8tsz5HO-DliA81u19LkD0_MGeFcxvNA&oe=69F52BEC', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/641364435_122162586704877648_3990484408268363884_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=dd6889&_nc_ohc=FFnPTRARSFYQ7kNvwF6Zegh&_nc_oc=AdpgLKfBhkX4wWd4ge7YPpJX-w1CKCvdKk3QsXAPOGfvp9AmwB8siMwPZtLZIP1xxfI&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=-NcHsRRZHVCS1SoTrVFTTA&_nc_ss=7b2a8&oh=00_Af0OOtJuk1XB-m_uLtvQ9F3ygjlTSW_P5azAOjGEqkCR3A&oe=69F50C9A', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/641270181_122162587130877648_3520965785309669370_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=dd6889&_nc_ohc=G83GgeYFnSYQ7kNvwGUdw7E&_nc_oc=Adp3KUp3VTqheB6RCfAbdD4aHKuNtl6x_davwKSkAiZG5LWtmLL4k7we7Obmfa3ogtc&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=cHxFwaTEND9pS5PW6RN96g&_nc_ss=7b2a8&oh=00_Af3A7OxSu68R0FZ_uoryeRYJDTGvXHctBgpSRLrg69dLmA&oe=69F50F74', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/642714112_122162587214877648_1971337226750887350_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=dd6889&_nc_ohc=WjowTJf0jtIQ7kNvwEwd5KH&_nc_oc=Adqm3Q_9J-LwdiP39_R54mVYCzDA2OdSyEiVtJb7Px1cvy1-JueBBkMsL_DEKK2jAt8&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=TmyDNk_l4G5DO5JMd7iEMg&_nc_ss=7b2a8&oh=00_Af2oYtWaaE91hdB3LoCEiXMjbWtZA2XH3lI10kYT4tTkKQ&oe=69F530F4', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/641323087_122162586482877648_4990227783325655550_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=dd6889&_nc_ohc=MTIqDTZLHfQQ7kNvwHvh2ov&_nc_oc=AdqFQ24W-U-rIs_3AxtTfOa_z7QNZkt8kPRaZWjvVHNepnAnT_FJnkVYFI6zdRArZwY&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=0U8z4DUx7948Z6LLiUGu7Q&_nc_ss=7b2a8&oh=00_Af3NX-XRNjo7E9_fGgVp0YI3oBcW14witL6b2TOm0Dgr7g&oe=69F50EC3', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/641290412_122162586224877648_3727324532437692914_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=dd6889&_nc_ohc=mGfvNginYNQQ7kNvwGFZbR0&_nc_oc=AdqXn5Mcr1FS0TLnE-rSRGb_m7m-bBTnjv-3cCFRJWcutdIzHlvLsETI_H7Kmh9gthI&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=wr4lU0t5rkNeUxlYLuqm-w&_nc_ss=7b2a8&oh=00_Af2TM4G4drYwuFlOzjxiEONCo5lkJnsmAXtV22rhBBXa-g&oe=69F5139B', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/641275829_122162588108877648_6946103792729748516_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=dd6889&_nc_ohc=W1_GWqzihXkQ7kNvwG21RKy&_nc_oc=AdpNkVZtNiCKkVx1nWR05hbunC9Xn3LEptq3AXJh1vJt_gXbP6USCMk4colJfsjThAA&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=uxckiySvd4-ehmlfDyLW_g&_nc_ss=7b2a8&oh=00_Af1BvlMo8nzrk4hPtSvuW0LPUeDY3ucgeJkaJ4ogqxFnyg&oe=69F508AE', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/641262926_122162587724877648_549208961199393242_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=dd6889&_nc_ohc=D9GwwLW9itQQ7kNvwFCyf0t&_nc_oc=AdpNi55V5RIyNlJqUy2z313tAMSn7d_rhbEvyb6gcOzBMo_zeYPoks_mEIST0sNndSM&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=b4giN4Hb9zG0NpIhGGsWEA&_nc_ss=7b2a8&oh=00_Af3T0d_st9iwgAuQNYODlRzO2XQ7zplIzp8TFEz6DgbMvw&oe=69F534F1', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/641257498_122162586200877648_8992664927681584547_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=dd6889&_nc_ohc=2K7Y8vlbtQsQ7kNvwFhtPCm&_nc_oc=AdoK-NzBKSbRuC-6WtLlkAWkV6QAATIxIgS4Qi7iyyM17KDmIlBwFUKbqJahU1xc5b4&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=1QNHqtTUV6GoGnxJGuP77w&_nc_ss=7b2a8&oh=00_Af1tmfDHOiyT5wk38SS2iZLh34Gw4KlIzdJNrbqg2bHmbA&oe=69F50E18', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/640054062_122162587256877648_4590991530091647405_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=dd6889&_nc_ohc=eQEdZX9Ss1MQ7kNvwGIV9Kw&_nc_oc=AdqPTTNspgdNd0VKGiWoQVFWv89JaJVNAst70URgoqXNpnB1TtkeicIo0LEAnOLI368&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=2oKCOq5EzzJoSz5x2SY7hA&_nc_ss=7b2a8&oh=00_Af1DzMcplyoNgkQ375DO2aEBjb4h8T71af8B4MnLOMjftg&oe=69F52B81', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/640061800_122162586056877648_1666039395710308229_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=dd6889&_nc_ohc=ahym0xIrB1IQ7kNvwH02MF6&_nc_oc=AdrIEJhuZDqezsO4Ix2tdPu97s0V-YsonKr_n-Pu606lEvTlrlwhOlPF0Wb86JS-uC4&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=TfFBh9O0iEbDHbZ_13C9OA&_nc_ss=7b2a8&oh=00_Af2P7UC1EOpOxYKt7ZbBy6_Dza9FNnQN_ZWBbgVPrl6zHw&oe=69F51F6C', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/641429755_122162588552877648_7961168356251217903_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=dd6889&_nc_ohc=Ax103R44AzQQ7kNvwFBLqPE&_nc_oc=Adqp5NlG_mLJtVPzaIRyMlI0eP2lw01u1ASh9WoadvW2r78ZwCJUPWhfXU8ifhm50Zk&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=5E2VK17je3YsMG77dHmqqg&_nc_ss=7b2a8&oh=00_Af3FXAHkeJAy2XKWZLwHYzqjmeFPtLUexGBAfIJuXS2KLA&oe=69F51313', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/641608383_122162598182877648_4906359869224819078_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=dd6889&_nc_ohc=pQuNai46trcQ7kNvwFlJY0p&_nc_oc=AdqfVU_RGeienMfGeV3Z8L5RlUMNmd-xb7gd0xgQPLyz1cUpLLjpaDMMlnjZi_zh_-E&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=VAU8W6D0bXo3e3rpvumwhA&_nc_ss=7b2a8&oh=00_Af35Sw1E_G7GLV5FgO0AL8eH4oz01ZDmarMeUVgNXsV6zw&oe=69F522CA', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/641619571_122162598260877648_1181471769554331160_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=dd6889&_nc_ohc=RnYoCN63SugQ7kNvwGd63sn&_nc_oc=AdqsWvgmIIiaJ8RaMLsSH4cbU9zZjp8eoucXU4Tvo-9uioiMEjQC3kHd-qnFEt9ZWoU&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=L-QHfb8E_gNeQ_hh2qS_nQ&_nc_ss=7b2a8&oh=00_Af0Hgfy87q8rhURzliAsXweOD43RE4miEeWlvMXcHoglQA&oe=69F52821', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/641636100_122162598176877648_7245574960701968151_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=dd6889&_nc_ohc=jDwyZGx6g_kQ7kNvwERFNW_&_nc_oc=AdoUhmupCqngkyWRAS4cypTlTFdfpiAWptz4Y3vBTur5orbswWrFq0b-90gqJI2P8CE&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=alZWbHaFsvLQtkLUusLwJg&_nc_ss=7b2a8&oh=00_Af3ZKzI8VDRpHvy3nY7hMygYy3yuOKKxJfpCZ6u1ryzy-w&oe=69F536E4', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/641627668_122162598362877648_1461137247880270138_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=dd6889&_nc_ohc=MbmtUv6O4zIQ7kNvw_GcmYxV&_nc_oc=Adroim9N24zEBS-LZ2tTnYU-JTcF30YUF3GudUK7wqhP5W0wULBoJqWxyBtZtf5leVs&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=Nsphx9KyWq592Ue9c629Vg&_nc_ss=7b2a8&oh=00_Af0dYczmbsuCCla5XBWTdRKW5gKHJ8JCqdMy9v2uTY_yhA&oe=69F528F4', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/641619586_122162632946877648_1044693869281011516_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=dd6889&_nc_ohc=FkvlhZs1N6wQ7kNvwEzqbxs&_nc_oc=AdrHKvpUspFhOttCXBmkqa_ojMMcM8sC-cv9TqIQrcxeGzRDjJFOj9O4BeZSV6HYwCw&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=bczpfnCB5zmR1AN0FwAVeQ&_nc_ss=7b2a8&oh=00_Af0OXMweJslbG4kpzG7Tf0O4SB2TAomE54Ppjr8DfLBSYQ&oe=69F52B6D', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/643423379_122162632724877648_8998275202075105235_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=dd6889&_nc_ohc=80CxEJKex_YQ7kNvwFoQTaD&_nc_oc=AdoSfdatczwrotNeXcMaCADZ-ASabiMzY9xmx7nhmWUFCmc9WP2-ZPyUzjrMgPfPzI4&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=5Fweo1aIqNMhNmvVF8C_aA&_nc_ss=7b2a8&oh=00_Af2L-YYSjpAEdBJoYPtmhRgkaVodR1tsdkob0LvZlEZ3Qw&oe=69F5255E', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/642478805_122162627672877648_4963706181011870503_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=dd6889&_nc_ohc=nSvpJ5SE3aYQ7kNvwGupBe1&_nc_oc=AdrHU7Vbo9u5lAFmXzpO88_n73J_tg7xACODWflNzOufeQtX-_oyclUrTK7gu8gc8d4&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=HotBhKaKhM8fmOHbsQcp6A&_nc_ss=7b2a8&oh=00_Af2zT-bPCyIw1o1mtaE0YWzohgBtiHGKnSRsV08YpDTq5w&oe=69F516C7', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/641611249_122162632058877648_7820183017011374710_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=dd6889&_nc_ohc=KcEfcDcyjxoQ7kNvwHwbjev&_nc_oc=AdqkrVZj86oFYBu23LHLTabdsP-GpURp8C9x3BV-Ek_6TmmDxKrXr6-rV12Ac2LoGr0&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=GWB_oTOqoAOmBvT0umaT9g&_nc_ss=7b2a8&oh=00_Af0M7YUbhlDupbPl7IRmodEmVFDqI5nADZeQ1wGg-I9Kew&oe=69F53AFA', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/641270451_122162633288877648_2829508520830575872_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=dd6889&_nc_ohc=cqn7CvWgctUQ7kNvwF4nYcc&_nc_oc=AdrbxTyW8E0eWO5uYzE5T44JAuOwu5f6VCx-2iTgTHuPjiqI9BZJEqqGbw6IbTSprs8&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=cwMawVWWtkP9qj6gOKhWow&_nc_ss=7b2a8&oh=00_Af1an7ST7lukPHreLtY440lX-7CLxg2ZATFFUpRGkkF_yw&oe=69F50C65', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/641273247_122162634104877648_775034630597865765_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=dd6889&_nc_ohc=6tHSP_L_C1QQ7kNvwEBlYYY&_nc_oc=AdrxDbSnwT22H6dJV6hLfY6FQ65IUQEyU-eBS3SBr9SQpzrjSNqhu6rFT6XmXzdhauU&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=LcVdMRJKBwkjUz-FZ9SuXA&_nc_ss=7b2a8&oh=00_Af0DMFIfUdrCxzP9ZXkxk0fL_lcnOLNInkcnBqB172MTag&oe=69F52052', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/641619472_122162637782877648_6826965624863374233_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=dd6889&_nc_ohc=C_pqV0PqZv4Q7kNvwFkVxOn&_nc_oc=Adpk5CJvlLva4-f9wjR9rJWgPi9R1QtgTO4VPr4klAznp4waJOfHEEKUNkRY5iqdskw&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=iUTsco1bsAxsHlHeWmeUSg&_nc_ss=7b2a8&oh=00_Af1OuFp_4B_X5snCyVBV-w9eUjEuD4KkLMJH6a7nIKRz1g&oe=69F5332B', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/641613196_122162638844877648_8836352251425219131_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=dd6889&_nc_ohc=Y-dffK-TJ4MQ7kNvwGYVUVB&_nc_oc=AdrY0gTRoOHGZABU5CeuAQomrE_qnAJQRLyWB-IglVUXPM2MVb5ECsTKzNdgObyOmbQ&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=Ew6_-Xg58UGzyDrvVHkkKA&_nc_ss=7b2a8&oh=00_Af33Y43Nl2q8PlMFCCtwhdjY-dx9QLchs8F-SrAf0nlb7w&oe=69F52E7C', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/641616487_122162637860877648_3524887664645951954_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=dd6889&_nc_ohc=YRfQzTRadRMQ7kNvwEJi927&_nc_oc=Adpy6KR3GAVaZ6vv_pqfTkej84hJC2TU_yfXduttKrRIZh7d-TFMPPbNi2IxiWJt56A&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=tEXMiAwLnS3y8TJ-b7j7ig&_nc_ss=7b2a8&oh=00_Af2QctNpzdCMTX6593muhMzTsfrdq2gz92Aho67DvU7fvQ&oe=69F52A9E', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/641739079_122162638946877648_2849346723810887542_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=dd6889&_nc_ohc=vo2rNqJlO3sQ7kNvwFAMbaA&_nc_oc=AdpS3ApItvVYCllkNPrQkiDdOCDsPzAbdf9uHER6dMudES_haXw5p4H5hfz0VED762I&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=nHYHR9aunfGP2ufGxXtUHA&_nc_ss=7b2a8&oh=00_Af29IRM1pNgDssdpgoE8sgL4impP2hoFiX31CckClpqw5w&oe=69F5280C', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/641680835_122162639252877648_7430869625364734131_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=dd6889&_nc_ohc=LkGDzfytuXQQ7kNvwHdziEB&_nc_oc=AdrfrRhwXPMdpJvV_GxDY2kD9CUTWhTMy1H3hBbxXE80p7Lq9a5di-jhO0I-U5_Z0KE&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=QKn5FG0x6DnyymSzC2jWbQ&_nc_ss=7b2a8&oh=00_Af1BSOWbn-SgZvlMtsjzKao8PsJ7Ni-3spf_AJdOoNIwGw&oe=69F53368', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/643448372_122162662382877648_5895136994486872465_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=dd6889&_nc_ohc=-zc0PkuxyAoQ7kNvwGpcCjq&_nc_oc=Adq_vRbDmEhmnoHH-McH8yiPL983ESxJBCX_bwaxP1DhA6DaNtL_T02xeicZ5VJldwU&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=o_LRuZQlSPRcINH1IIp2Vw&_nc_ss=7b2a8&oh=00_Af0W3Cg5Z90dWTgQNit9H-FaSAuE9dSXIRDc4nxNH2jSHQ&oe=69F525F7', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/641610784_122162662250877648_888450141316435417_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=dd6889&_nc_ohc=ebs5bQwhmCgQ7kNvwFcHPmG&_nc_oc=AdplCyfjNge_9ACe7dWaM3Ds_xBgoV_-Z7M9GMQx6Z-36XPY6k1yNa9uvf9I_xrSXKo&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=77PgUiqaEaxFkSH8YdQwuw&_nc_ss=7b2a8&oh=00_Af2sJA6tCgnEwBWWbgClmfNdHR2AujvbfRnfpbM9a6UICQ&oe=69F50BD3', title: '', desc: '' },
        { url: 'https://i.postimg.cc/5tSTKhqT/photo-122162527490877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/KYDwp6r6/photo-122162527544877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/9fYKg6YH/photo-122162527598877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/DzPHp9Pk/photo-122162527652877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/k5vzY0vd/photo-122162528978877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/k5vzY0vX/photo-122162546978877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/zfF62sFD/photo-122162547596877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/yNytpMy8/photo-122162547674877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/26jJs00R/photo-122162547704877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/509Ghss1/photo-122162547752877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/pTV7wssM/photo-122162548262877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/Jn7gfppL/photo-122162548298877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/Y92V5ddr/photo-122162585468877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/0Q53TVV9/photo-122162585498877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/rmybBff8/photo-122162585546877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/RFC8kggZ/photo-122162585582877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/Jn7gfppn/photo-122162585636877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/yd65MLLW/photo-122162585666877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/QtNP2ffH/photo-122162585720877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/Jn7gfppy/photo-122162585936877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/xCj7w66N/photo-122162585978877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/C1Mt3ccB/photo-122162586278877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/wvxPCwws/photo-122162586302877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/PxfcgSSw/photo-122162586356877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/509Ghss8/photo-122162586392877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/mDZqvmmQ/photo-122162587166877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/85k32ZZd/photo-122162587202877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/zBdM8TQL/photo-122162587250877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/tTRfKBBt/photo-122162587286877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/cHDj0fzt/photo-122162587340877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/bJ6Mp152/photo-122162587370877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/xCs7nLZM/photo-122162587430877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/85y3NLYL/photo-122162587448877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/SsZ5kcPW/photo-122162587514877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/85y3NLYb/photo-122162587934877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/nzd5pqWK/photo-122162588054877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/4d8Msp0Q/photo-122162588102877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/hjCwcVYs/photo-122162588312877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/zBdM8TQ2/photo-122162588354877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/26HJrntg/photo-122162588456877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/W39KT0yf/photo-122162588480877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/fLHFDYPp/photo-122162588546877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/prpSTpNG/photo-122162588600877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/ZnCQRCks/photo-122162597354877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/HnVNxVGh/photo-122162597384877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/5y6r06cr/photo-122162597468877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/MHvLTvkg/photo-122162597522877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/yxkGdkqw/photo-122162597558877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/7hfR6fvF/photo-122162597630877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/qqzFRzVV/photo-122162597696877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/QCHztHGs/photo-122162597780877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/QCHztHGj/photo-122162600558877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/1Xfdtfhs/photo-122162600582877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/rsKHmKXT/photo-122162600654877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/zvVQBVZ3/photo-122162628056877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/4yqShssX/photo-122162628086877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/wMZGsggg/photo-122162628140877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/cC2b800x/photo-122162628182877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/pr46nRR2/photo-122162628230877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/SR3vzkks/photo-122162628248877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/4yqShss3/photo-122162628314877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/RhyDn44h/photo-122162628332877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/C5XQfSSn/photo-122162628398877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/zv6cR88b/photo-122162628428877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/RhyDn44t/photo-122162628662877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/C5XQfSSk/photo-122162628686877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/mkJ5FBBM/photo-122162628746877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/MHNFjqq1/photo-122162628770877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/6qgmGttf/photo-122162628830877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/j2mFJttv/photo-122162628860877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/T1F4WffC/photo-122162628920877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/7PWcRM7j/photo-122162629100877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/VsVThBMx/photo-122162630084877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/J72gFcZV/photo-122162630126877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/XNzhPcd6/photo-122162630168877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/MZF4LbV8/photo-122162630210877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/9XnSktZh/photo-122162630258877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/gcT57q8p/photo-122162630282877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/bYBM5Hk8/photo-122162630342877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/DfMDNdLn/photo-122162630366877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/sfN8L97j/photo-122162630426877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/HWhKN4Xj/photo-122162630450877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/8k03YBMz/photo-122162630516877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/J72gFcZ0/photo-122162630528877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/FFBq6g3Y/photo-122162630594877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/jqF91QP7/photo-122162630624877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/h45wYbT7/photo-122162630678877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/CMQt2Hkk/photo-122162630708877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/xj47ZyMH/photo-122162633486877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/DfMDNdL1/photo-122162633528877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/pX57MhJT/photo-122162633576877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/9FwSHRYz/photo-122162633618877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/yY35Cgyg/photo-122162633666877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/8Pf3gJmr/photo-122162634344877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/qM6YHhx3/photo-122162634374877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/bNSMfD9n/photo-122162634434877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/BQPyfLB5/photo-122162634452877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/zXHMYbFd/photo-122162634554877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/gkL5bXHB/photo-122162634590877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/5NQGWYSG/photo-122162634632877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/P5G7XXSM/photo-122162634668877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/Njhnssd4/photo-122162634740877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/qvfFJJ1Q/photo-122162634782877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/P5G7XXS6/photo-122162634830877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/y8qG11LL/photo-122162634878877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/YCcPrrdD/photo-122162634920877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/L8dW99x0/photo-122162634962877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/jSV1xxMF/photo-122162635010877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/T38sddtF/photo-122162635052877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/K8XWGG0V/photo-122162635094877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/qvfFJJ1P/photo-122162635118877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/Sx0PSSZp/photo-122162635178877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/jSV1xx8t/photo-122162635220877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/QdLz8863/photo-122162635250877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/Z5kQbbfZ/photo-122162635304877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/qvfFJJmB/photo-122162635346877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/BnWzSShn/photo-122162635394877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/rwSPzBb2/photo-122162635436877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/t40cqqrg/photo-122162635616877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/t4hM7KfH/photo-122162635640877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/rwSPzBbT/photo-122162635694877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/Gmk59WNc/photo-122162640098877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/zGnc3sMB/photo-122162640134877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/HkQhjqKk/photo-122162640182877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/dV8xDbXQ/photo-122162640200877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/ht95hkwG/photo-122162640266877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/Nj1zL3Vr/photo-122162640302877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/nhvPMy5s/photo-122162640368877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/13pj4kTn/photo-122162640398877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/W1MHtBKk/photo-122162641616877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/BnxVtry2/photo-122162641688877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/bwQBd7M0/photo-122162641730877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/VkjV5xTj/photo-122162641778877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/cLQb6pjB/photo-122162641814877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/6pdmTkSh/photo-122162641850877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/3wYbGL5G/photo-122162641880877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/SKkt9ZF7/photo-122162641934877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/8CNnvyQd/photo-122162641958877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/zf8PhdZF/photo-122162642030877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/KYxsT9SQ/photo-122162642054877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/jjtkf80g/photo-122162642108877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/xdnFmsD4/photo-122162642126877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/JhMdXTCV/photo-122162642192877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/N0BPXNvh/photo-122162642690877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/pdCcJDR0/photo-122162644826877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/0NnX0pPX/photo-122162644856877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/43P2QzsD/photo-122162644916877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/nL2SGvn8/photo-122162644952877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/k5sYvx7d/photo-122162652302877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/yNjpyF7H/photo-122162652344877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/YSRDz1tt/photo-122162652380877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/FKpCVjhF/photo-122162652434877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/ZqHsxrJb/photo-122162652458877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/FKpCVjhs/photo-122162652518877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/mDrXXtrD/photo-122162652554877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/50t776tx/photo-122162652770877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/QtM44HMj/photo-122162652812877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/gJ0SSn0j/photo-122162652860877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/wvBff7B7/photo-122162652908877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/mDrXXtr1/photo-122162652944877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/V6NGGdNt/photo-122162652986877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/sX266v27/photo-122162653034877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/NM0JJ50T/photo-122162653070877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/mDrXXtrY/photo-122162653118877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/tTgSSYg5/photo-122162653148877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/d10HHL09/photo-122162653202877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/ZRDf149P/photo-122162653226877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/Pxq33PqK/photo-122162653286877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/85nyqNFh/photo-122162653310877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/bJF6KpGR/photo-122162653376877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/Kzs9dxKf/photo-122162653400877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/fLgH6D3K/photo-122162653454877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/ydrfwsJn/photo-122162653478877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/JndT9My6/photo-122162653544877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/gJBMfmwQ/photo-122162653568877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/B6whd48y/photo-122162653628877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/Y9yXJM4s/photo-122162653652877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/qRZm94hH/photo-122162653718877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/50kPZbYV/photo-122162653742877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/50kPZbYJ/photo-122162653802877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/B6whd4L4/photo-122162653826877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/tTmrLpZ9/photo-122162656916877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/7hGB4d7j/photo-122162656940877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/yxgfKt95/photo-122162657000877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/sxQnzq7C/photo-122162657330877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/vTgPykfy/photo-122162657366877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/yxgfKtcB/photo-122162657426877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/L5YySwLm/photo-122162657462877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/6q2HKgnp/photo-122162657510877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/zvbdN6Kf/photo-122162657528877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/4y78GqVK/photo-122162657588877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/Kjk9bwBg/photo-122162657612877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/yxgfKtcZ/photo-122162657672877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/kG6jCzK8/photo-122162657702877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/D09xw6Pz/photo-122162657762877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/wMCwj2QM/photo-122162657954877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/BbrmnpBX/photo-122162658008877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/gjCg2sHr/photo-122162658038877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/VvxKkgWr/photo-122162658098877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/4yDWxPQ9/photo-122162658128877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/kG0Tgsv8/photo-122162658182877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/fyG8RCfm/photo-122162658212877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/ZnGw5Hx6/photo-122162658260877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/j2pMSc4H/photo-122162658296877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/gjCg2sHD/photo-122162658350877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/GtWXmKxX/photo-122162658380877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/SRBgxdfV/photo-122162658434877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/ZnGw5Hxs/photo-122162658452877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/prwsLCJ6/photo-122162658518877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/fyG8RCfg/photo-122162658542877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/Y05dCRzV/photo-122162658602877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/59X1jtmV/photo-122162658632877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/zDy53fk5/photo-122162658680877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/SQnqjKGm/photo-122162658722877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/c1vZ6JcL/photo-122162658764877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/h4XghG0G/photo-122162658794877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/44YZn31d/photo-122162658848877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/668wTQhT/photo-122162658878877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/nVXZML19/photo-122162659388877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/jqDKCjhJ/photo-122162659448877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/Vs2wtc7t/photo-122162659466877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/G36RD1MT/photo-122162659538877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/bY4Pnj6Q/photo-122162659568877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/dQgFCKWR/photo-122162659622877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/qBWrKdms/photo-122162659646877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/SQH49pZ7/photo-122162659700877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/gc1phPMH/photo-122162659742877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/NGZtXwNp/photo-122162659784877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/J7S8XWTx/photo-122162659814877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/kMLCSdjp/photo-122162659868877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/qBWrKdmP/photo-122162659904877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/CLDgH6tc/photo-122162659946877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/gkRWqB5T/photo-122162659988877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/zXWrSPMM/photo-122162660036877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/rFWkCYb3/photo-122162660078877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/pX8HY17w/photo-122162660126877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/wTJpcbZp/photo-122162660162877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/NfTc7PSw/photo-122162660204877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/rFWkCY3T/photo-122162660240877648.jpg', title: '', desc: '' }
      ]
    },
    {
      id: 'jarmark-2025',
      title: 'Jarmark Bożonarodzeniowy',
      date: 'Niedziela 21 grudnia 2025',
      time: '12:00 - 21:00',
      location: 'Grimstad',
      address: 'Solvang, Gjærbrøndveien 247',
      region: 'Agder',
      description: `21 grudnia w Grimstad wydarzyło się coś, czego nie da się zamknąć jedynie w słowach ani na zdjęciach. Nasz pierwszy Jarmark Bożonarodzeniowy – organizowany przez Skandias Talentsmie – nie był tylko wydarzeniem. Był doświadczeniem. Był emocją. Był spotkaniem ludzi, którzy – często po raz pierwszy – poczuli, że są częścią czegoś prawdziwego.
Już od pierwszych chwil, gdy drzwi Solvang-salen się otworzyły, powietrze wypełniło się ciepłem, zapachem domowych potraw i czymś jeszcze… czymś, czego nie da się kupić ani zaplanować – autentyczną, ludzką obecnością.
Sala, którą przygotowywaliśmy z sercem przez wiele dni, zamieniła się w prawdziwą świąteczną przestrzeń – pełną światła, kolorów i detali, które opowiadały historię. Każdy stół, każda dekoracja, każde światełko było częścią tej opowieści. Opowieści o wspólnocie.
Frekwencja przerosła nasze najśmielsze oczekiwania. Ludzie przychodzili całymi rodzinami, z dziećmi, przyjaciółmi, sąsiadami. Jedni zostawali na chwilę, inni na wiele godzin. Ale każdy, kto przekroczył próg, zostawiał tu cząstkę siebie… i zabierał coś więcej niż tylko jedzenie czy rękodzieło.
Zapach bigosu, pierogów, barszczu i gulaszu mieszał się z aromatem zimowej herbaty i świeżych wypieków. To były smaki, które nie tylko rozgrzewały ciało, ale budziły wspomnienia – często bardzo dalekie, często bardzo osobiste.
Na stołach pojawiły się rękodzieło tworzone z pasją – rzeczy, które miały duszę. Niepowtarzalne. Tak jak ludzie, którzy je tworzyli.
Na zewnątrz płonął grill, a w środku – rozmowy. Śmiech. Wzruszenia. Spotkania po latach i zupełnie nowe znajomości. Dzieci biegały, pozowały do zdjęć, tworzyły swoje własne małe święta. Dorośli zatrzymywali się na chwilę – może pierwszy raz od dawna – żeby po prostu być.
To wydarzenie było stworzone przez ludzi i dla ludzi. Przez wolontariuszy, twórców, osoby zaangażowane całym sercem. Każdy dołożył swoją cegiełkę – czas, energię, uśmiech, obecność.
I właśnie dlatego było tak wyjątkowe.
To nie był „idealny event”.
To było coś prawdziwego.
Były emocje, było życie, była energia, której nie da się wyreżyserować. Była wspólnota, która narodziła się naturalnie – między stołami, przy herbacie, w spojrzeniach i rozmowach.
Dla nas – jako stowarzyszenia – to wydarzenie miało jeszcze głębszy wymiar.
To był początek.
Początek drogi, którą chcemy iść razem z ludźmi.
Początek przestrzeni, w której każdy może znaleźć swoje miejsce.
Początek historii, którą dopiero zaczynamy pisać.
Dziękujemy każdej osobie, która była z nami tego dnia.
Za obecność.
Za zaufanie.
Za energię, którą wnieśliście.
To dzięki Wam to wydarzenie stało się czymś więcej niż jarmarkiem.
Stało się doświadczeniem, które zostaje w sercu.
I wiemy jedno – to dopiero początek. ✨`,
      images: [
        { url: 'https://iili.io/Bt5NhaR.md.jpg', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/605719997_122154122618877648_8962514213776731956_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=ctxRI-u703gQ7kNvwEhHElw&_nc_oc=AdoHbnM0KkA11K0Gd_zh3WNdO1vOuJQ_ZLmxGikW6qwCk2LqDTFfEOejMXCbeMbzSNY&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=0m8XMQDQvXR-t8PMAfYiEA&_nc_ss=7b2a8&oh=00_Af292lsEP_mxPxSV3WXK4SJGkPJL_n9ReQorKdYF0ZD5dQ&oe=69F50CFA', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/602395863_122154121622877648_5549627188373709515_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=wufkG8ifn8sQ7kNvwHBwKIn&_nc_oc=AdrIQSuBCnwkN-QY_uPPDpQm8HFcOqing5iRhlwF6rdw0YoYYvWKupYYQmDMBRBsqTU&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=kcuLRuQORonknQcMMmR-jQ&_nc_ss=7b2a8&oh=00_Af3wxbAFiN2xkPffdcl_Uvdw4WlQ0f7KNfw9ux9dd_5lbQ&oe=69F5286F', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/605370935_122154120974877648_8439350797055125383_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=NjfbbVqhKXUQ7kNvwFgxa5a&_nc_oc=AdoPgGlQ9v3V6LgScLmV8y_jSFApd0NBoj8xrxAS4TUBdodmTkidL7iqaYGRo3t0x6k&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=ckEkHJIaJkS_sqlfftkmjQ&_nc_ss=7b2a8&oh=00_Af0dHY7W7XzfyoubuuGwPXmQhXqQCY9XVTvAmOhW4sHZHw&oe=69F50FA6', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/604616193_122154121046877648_4292889334041617637_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=jXTjhq813pUQ7kNvwG74N9M&_nc_oc=AdplyPl68pYlWCGAN-sBwgHcx_1z8NblwITvYCFCEmqCOMa5KB1ZdgwbEWjHr1Nc6_U&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=pNOU0_Xu4waFCdFUk23eDw&_nc_ss=7b2a8&oh=00_Af3mIaOzKAunzn3Rw2zud0mWXnsRtcXQSzVkZK2-RaWCgQ&oe=69F52BB6', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/605040455_122154123146877648_6956187092740818047_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=7fpHA4Wub9AQ7kNvwFo78sw&_nc_oc=AdrA7Y2iaVbdQZX6WzR_Whub-12-BLC39CUtYecVCwrLm_cwXkFWbwYTGRGOqCWqtcY&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=V_rNZXIPwzu2fO-xmyodXA&_nc_ss=7b2a8&oh=00_Af2tPhcQqavMFehWusVelTRDxNyQ7ZzSsaX99KEismZTZg&oe=69F52B95', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/602339550_122154120932877648_1217932044105961665_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=un3BgLdiAZ0Q7kNvwFjCUtW&_nc_oc=Adri-LcStvaXb5i6INY5RWrBrbSWymRLWrBrK3Qhd8ubAIDE5TLZ7hKt4SAAmrbPRMY&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=n7Z--LSjYAaNAP-PowxO5g&_nc_ss=7b2a8&oh=00_Af1RItnJjUOkjgSV1O7mdkjZxm-4oAF7nLFzXc0S_u7K6A&oe=69F5316D', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/605584279_122154123476877648_6130819370253160307_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=fOjDLI8WC50Q7kNvwFHlbff&_nc_oc=AdruT-oZI_vYbtHfVKpDZn0lz0-mf-pg2nqlSXaCSxS-Mctyfv7sElJ58kHCRBJYHj8&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=VVelATgZiEpVDczMqIwvuA&_nc_ss=7b2a8&oh=00_Af1wMylVK5Mgwjd3ouxYfuIMb7rH10XfT00uHlnjxGqLXg&oe=69F5025A', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/605527239_122154123200877648_4502303298430942122_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=8PdA7NTytxsQ7kNvwHedt8v&_nc_oc=AdrLS-m-sIpFa_J0yzcXRkYbaIZEFhXUCj7OlQbCU_NMZj_4rcPDR_a3D4brd0BYdGs&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=4nC8HslFgwx9Ut-EHvxZxQ&_nc_ss=7b2a8&oh=00_Af2Z3MvYCMulrtygjBMKXBI3qv0EzopXD9B3_sytFVOW_g&oe=69F5373B', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/604687650_122154123188877648_7715169596389399764_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=YzzfUTqP71cQ7kNvwGLCBZy&_nc_oc=Ado95otqljumYlU5EpEj_6Yymwyt7z4D5Y6awcm-hBpEWelLMLN03VZZGUQif6FTB04&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=LzxKCwJoAnmfJ-sm5aYaNQ&_nc_ss=7b2a8&oh=00_Af3NSPD-Bu1Qs9gmRSjbQ33Zp8XGzwSEBFYByi9zx3mLUA&oe=69F53667', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/603873285_122154121130877648_2816147907960380401_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=baIk3ggRj3kQ7kNvwHTlrZ4&_nc_oc=AdrUvSkbXgtWz2SRBO_9dCG6gN0VeEzwPgb26B6K5bNrDZHQrIhG0lOSot7xdBud58g&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=GZqUQQak4ThmZleQAd10qw&_nc_ss=7b2a8&oh=00_Af0QGXBWSHW3QbI5KLTGmWbwePy0kh05IP9QgQtUIIkDFA&oe=69F515B9', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/605613482_122154123134877648_3010204158909985304_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=G7-ca8d7GyIQ7kNvwF2b76a&_nc_oc=AdoB1E2Qpd_H2onKAYyHIAM9rCvw0tLVQNckZKu8JS3jWJM5WNLvpFLzke3elubLE4vI&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=xQ-5SQutSV08d6Hhsbu8sQ&_nc_ss=7b2a8&oh=00_Af2FsddI8AvKEGyHuKKaYALfS_69-mDjX1xdsrtevWtxOQ&oe=69F51A5D', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/603958256_122154121820877648_1313508668463925327_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=bExiKKescNQQ7kNvwEBVXSp&_nc_oc=Adr_YcMyFZMrd3_8GhCMG9GoMiqqpkPS_rVc5ujbo2Jt1zI5UDmIKd1r2dBYlTpoJEI&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=oHXx8lMQsQli30F8Et7TyQ&_nc_ss=7b2a8&oh=00_Af1ebY-uOLJYdxQHQYkGjsZFjxQyDRGB8BQFeelg6Zvknw&oe=69F53269', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/605479376_122154123632877648_7290317997509288626_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=8GjaKtAzWwUQ7kNvwFbnSi1&_nc_oc=Ado1aXShofrNvGI1hqrjnNreUft0slOw8W2rm6QBUwj5sJU94TJEgtwt-jU-LedBNl4&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=hZT65wOCx0U9Qy4ghao-YQ&_nc_ss=7b2a8&oh=00_Af3FsceDck0esGjoFIoF39PMZOJeDgNEr6Ue8HXPdcQF7Q&oe=69F51FFC', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/604884485_122154121286877648_6786172523705956201_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=eN8QtuCWssQQ7kNvwHoK8Ej&_nc_oc=AdqQwJhAIdF5JPJJtVJ_UPCCUxVWVJEIOu4MDYrOZ5mte-saQAK_ofWRleRdiCFvhiU&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=9AvGhWoUhh8PPJovtiTgoQ&_nc_ss=7b2a8&oh=00_Af1jrwP5kVE4a__fQXCiAJ9hnIRczL9BV70QGJbAhoI2Sg&oe=69F5276C', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/604809404_122154120770877648_2740410608452988658_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=un3BgLdiAZ0Q7kNvwFjCUtW&_nc_oc=Adri-LcStvaXb5i6INY5RWrBrbSWymRLWrBrK3Qhd8ubAIDE5TLZ7hKt4SAAmrbPRMY&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=n7Z--LSjYAaNAP-PowxO5g&_nc_ss=7b2a8&oh=00_Af1RItnJjUOkjgSV1O7mdkjZxm-4oAF7nLFzXc0S_u7K6A&oe=69F5316D', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/604689823_122154121226877648_4764021133600461773_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=7vLmvYBOZgQQ7kNvwHE-Qmw&_nc_oc=AdoiD6wzsIcpPrnlabtSwbsKI9cjxLyLVbBbLFundOrt0T-eeXH5auwEfYj2j7C68y4&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=BOEM92QYB8rebMEm2W8rwA&_nc_ss=7b2a8&oh=00_Af2zcxfLyPgvJqqAZbJFi9I_ihxMCZtSg4ekXMGjbk36ig&oe=69F53225', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/603845643_122154120560877648_1988442083187413258_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=8WCG_-h2N5UQ7kNvwGMlpF7&_nc_oc=Adq8bBDyxBbvuBCMJs2d34sWXx5HtFWwvyaAsslv4zEUyd_RZMdUko_gtdGuOctRaO0&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=1ANRVqwp2VxTAn8H67pJdg&_nc_ss=7b2a8&oh=00_Af0MrUVH31MOEjSd8Y7sQgVphp1NSxczRKLjb5DLQ0FxAQ&oe=69F50A3A', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/605828384_122154122654877648_1230917170291077644_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=kA5hu1KjMkgQ7kNvwHieWxl&_nc_oc=AdpWFnGTGHjQXb5qh3iwu-6H8ThJBwFKYVEyV2GxDxRus6n8m_4rAek1goDdntnYqjQ&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=LOsmOX2tkUhvTdfKY0a8Og&_nc_ss=7b2a8&oh=00_Af1-VQU_nqKMX_nWVhqFjT2jK8Nr2A6IhyREnCkhd1QHAQ&oe=69F50531', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/605816982_122154123524877648_8812828288256323077_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=NYfQfd-bgxIQ7kNvwFpUcH3&_nc_oc=AdoovLPuj7S2yDlM0vJbXPd9Ti-H2AfJY5kf-xmhiM8vgYyT75ECz7PhqeTwIy8GUpU&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=AQf75T9EMneEmLid9r-wsQ&_nc_ss=7b2a8&oh=00_Af1dlZTLNjsxEJTbUjdcn8p2qxgS4Q6WQGagJayFRTMWdw&oe=69F53363', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/603842825_122154120896877648_2066459843533750990_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=6Qm1zpqpIcUQ7kNvwESrWhp&_nc_oc=AdotmSCHgTPkdz3PPfDc6BFKkp20NBe99f8oHwf24TSWO7QnYYpjFH0CCDuF6E2dBMQ&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=ovdTs6LOiHgrfQjql_sRJg&_nc_ss=7b2a8&oh=00_Af37hVwz2pOYvOP76HOqxKGJhl2YuKw7MCDHAysh5WQerg&oe=69F51F15', title: '', desc: '' },
        { url: 'https://i.postimg.cc/DwMPvBfQ/photo-122148359330877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/cJtMrw6f/photo-122148359498877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/9fwtrZzG/photo-122148359516877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/7LJMf0b1/photo-122148359582877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/q76XzygX/photo-122148359606877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/vmxLcfDq/photo-122148359654877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/8CfBjMs0/photo-122148359684877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/43HbmVn0/photo-122148359750877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/3w0CdmW6/photo-122148359774877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/FKkg731M/photo-122148359834877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/B6W5Db1k/photo-122149227914877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/DZVQs0bt/photo-122149885904877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/C1yCD5qT/photo-122149885934877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/V6y9MvCc/photo-122149885988877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/XJMKFqC7/photo-122149886018877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/3RMjpNvK/photo-122149886072877648.jpg', title: '', desc: '' }
      ]
    },
    {
      id: 'bajkowy-tort-marzen-2026',
      title: 'Bajkowy Tort Marzeń – weekendowe warsztaty pieczenia i zdobienia',
      date: 'Sobota 7 lutego 2026',
      time: '14:00 - 20:00',
      location: 'Grimstad',
      address: 'Grimstad, Norwegia',
      region: 'Agder',
      description: `BAJKOWY TORT MARZEŃ – warsztaty, które otworzyły drzwi do całorocznej kreatywnej przygody
To wydarzenie powstało z marzenia, aby stworzyć przestrzeń, w której ludzie mogą nie tylko nauczyć się czegoś nowego, ale także poczuć radość tworzenia, wspólnotę i prawdziwą magię rękodzieła.
Weekendowe warsztaty „Bajkowy Tort Marzeń” były czymś znacznie więcej niż nauką pieczenia i dekorowania tortów. Były zaproszeniem do świata wyobraźni, kolorów, smaków i twórczej odwagi. Od pierwszego momentu chcieliśmy, aby każdy uczestnik poczuł, że nie musi być profesjonalistą, żeby stworzyć coś pięknego. Wystarczy ciekawość, otwarte serce i chęć spróbowania.
Podczas warsztatów uczestnicy przechodzili przez cały proces tworzenia tortu – krok po kroku, od podstaw aż po bajkowy efekt końcowy. Uczyli się pieczenia biszkoptu, przygotowywania kremów, składania tortu, obkładania go masą i planowania własnego projektu. Najpiękniejszym momentem było jednak to, gdy zwykłe składniki zaczynały zamieniać się w małe dzieła sztuki.
Na stołach pojawiły się kolory, figurki, kwiaty, bajkowe dekoracje i pomysły, które z każdą chwilą nabierały kształtu. Każdy tort był inny – tak jak inna była wyobraźnia osoby, która go tworzyła. Jedne były delikatne i romantyczne, inne pełne dziecięcej radości, bajkowych postaci i odważnych kolorów. Każdy miał swoją historię.
Najważniejsze było jednak nie tylko to, co powstało na końcu, ale cała droga: rozmowy przy wspólnym stole, wzajemna pomoc, śmiech, pierwsze niepewne próby, zachwyt nad własnym efektem i ta wyjątkowa chwila, gdy uczestnik patrzy na swoje dzieło i mówi: „Naprawdę zrobiłam/zrobiłem to samodzielnie”.
To właśnie dla takich chwil istnieje Skandias Talentsmie.
Warsztaty „Bajkowy Tort Marzeń” pokazały, jak ogromna siła drzemie w twórczych spotkaniach. Pokazały, że rękodzieło i kreatywność mogą lączyć ludzi ponad wiekiem, językiem i doświadczeniem. Przy jednym stole spotykają się osoby, które wcześniej się nie znały, a po kilku godzinach rozmawiają, pomagają sobie, inspirują się i tworzą wspomnienia.
Dla naszego stowarzyszenia to wydarzenie ma szczególne znaczenie, ponieważ otwiera całoroczny projekt „12 warsztatów w 12 miesięcy”. Każdy miesiąc będzie nową okazją do odkrywania talentów, uczenia się praktycznych umiejętności, spotykania ludzi z pasją i budowania społeczności, w której każdy może znaleźć swoje miejsce.
Chcemy, aby Skandias Talentsmie było miejscem, gdzie talent nie musi być doskonały, żeby był ważny. Gdzie pomysł może stać się początkiem działania. Gdzie ktoś, kto dziś przychodzi jako uczestnik, jutro może poprowadzić własne warsztaty, pokazać swoje prace albo zainspirować innych.
„Bajkowy Tort Marzeń” to symboliczny początek tej drogi. Słodki, kolorowy, pełen energii i wiary w ludzi. To wydarzenie przypomina nam, że magia naprawdę powstaje wtedy, gdy spotykają się ręce gotowe do pracy, serca otwarte na innych i wyobraźnia, której nikt nie ogranicza.
Dziękujemy wszystkim, którzy stali się częścią tego wyjątkowego wydarzenia. To dzięki Wam ten projekt nabiera życia, sensu i piękna.
Razem tworzymy coś więcej niż warsztaty.
Tworzymy przestrzeń, w której ludzie mogą rosnąć, uczyć się, poznawać siebie nawzajem i odkrywać, że w każdym z nas jest talent wart zauważenia.`,
      images: [
        { url: 'https://iili.io/Bt5jtO7.md.jpg', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/632301990_122160681956877648_6015222712615698064_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=WLEt3dtmFu8Q7kNvwEeBM1E&_nc_oc=Adpedv47Z5X9Zz9m2ykF5JrJg9UGOJbJKJe3Km_PncxzXj7U28ztt10b5y2mEG4VqhY&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=rHr93DvxmfyDcBFu2CN6ug&_nc_ss=7b2a8&oh=00_Af0WO4bRFckdF7uJXlMbDsK4azGu_qcD__nlHRXGoqq3Bw&oe=69F5171C', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/631283006_122160681386877648_1167373214001537595_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=49HuSY6KhZQQ7kNvwHXLser&_nc_oc=Adr4QvyaR1TyOQgK_a_VF-wdWo9gw2Ez63nk5SnSOGQJClPZWb4ep0zkIiiwEfsv2zM&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=w2T_1R_cKs43aBjtKbQHKg&_nc_ss=7b2a8&oh=00_Af3wyaKSC8OVQgaIdCF4Upd1yKsK43LNs-1_z6yZVnJ7ZA&oe=69F506E4', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/631683235_122160681968877648_1464647480679755591_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=71WkpgTJLCkQ7kNvwG1Uztv&_nc_oc=AdoZICatN7VBsTdaWCW1vdAVjxv6lBzqFVdPKFZmL8PfbPpa6vQ-yfxhWSalw-zzBxk&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=8rsV69WqoeaBWB_hPl_Oug&_nc_ss=7b2a8&oh=00_Af3rHph7bPRtQQnodHUvbAKI9C2M1OKFRg0APMPVzx6lsQ&oe=69F5316B', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/631144161_122160674558877648_7639223490379172621_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=yVngkOnwf2oQ7kNvwGSrUo0&_nc_oc=AdqZ_-rLHQAH8rqPAlYRLE6zGDtxUuzTkGbVCeNH5zT4p7rBevB3uGfUenxtbWKtiS0&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=4qw0ODcJZNzZbWxzuQItww&_nc_ss=7b2a8&oh=00_Af2JgmHArfynfE9ih1fqYMHCV06-otbWLIaNKL3tg5pRsA&oe=69F50585', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/630903071_122160682016877648_2543901408120433309_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=SiLAP_rjBeQQ7kNvwEmyhdO&_nc_oc=AdpVWAoNsuf0ArBlmKbXyekh7lr304p3eZxb-GYz4gyyouJsfc2cOgYebe_UOW6_bo0&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=5E1p-BDK_gDgwT747c390Q&_nc_ss=7b2a8&oh=00_Af2W2Ng63vzRTKYj4wbTrFfMqO8HLEeD0dpa537EpXVc_Q&oe=69F5232A', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/632734321_122160681752877648_8183552553811761647_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=SNsWlRUbhRkQ7kNvwHRHKGH&_nc_oc=Adppeqv4Qw4kDSIxglSi57EHLwRWRVq81rPNrOY-2qNa_PfZBGrsZqDb21F_-ANCCQ&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=MzQGlkDmWjmHxAu7TnM7dQ&_nc_ss=7b2a8&oh=00_Af2XBMidx8dx0xqvRUuUGD15jufxY3r_DBG0IaZGqzUmiQ&oe=69F53417', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/630970123_122160681674877648_1121799506592199885_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=6vU9jHYYWpoQ7kNvwHu8on7&_nc_oc=AdpHysh548q0TzcWBs93raYbn6wavR-W5rrAVZ6XlHFBNZ5OupLT7am9730gw5Ik5V0&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=Du-vVnPmLlWBbcBiynBrFg&_nc_ss=7b2a8&oh=00_Af2BRbvcoPj393TwscDgeGRxa4UNnN_mMCDMVjiVdkHnWQ&oe=69F52365', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/631867264_122160681422877648_6310137379421018080_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=w2AEMJH1EU0Q7kNvwGS1wVg&_nc_oc=AdpDzoyJ5UAD-zrhlO4MhMA7nx639O-wLXWie3Pye730UBWcErFjIQ5yzhFm1zrLDP4&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=00rGTabuOosbuK0LUwNo3A&_nc_ss=7b2a8&oh=00_Af3xrOROXNk0_3aLR2L-BNIwmJw83T_hoRFbJp1wG8ry0w&oe=69F5098D', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/631632116_122160681524877648_8722239305121389400_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=6czHPQcNDVUQ7kNvwE9OJ0Q&_nc_oc=AdpszSVAmhKCFvEinHu6lAgtHVjL-X905xFCKjyHsjUGARmk_6Oyx8dAL4-dcO_Vy6k&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=K9E-LEITo90vlIHpyMEEkA&_nc_ss=7b2a8&oh=00_Af2My3kxPXjfr6JgTx1I3No44s7yKUN-BmKQDM1n4EDQ2A&oe=69F504F5', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/632900419_122160681656877648_2749254722446477234_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=pj2ZcNbzBmQQ7kNvwEhFvp_&_nc_oc=Adp9EVWNoZ8Br9bhulLZOmpYzgsI9RgUCdTbxzLpLJ_Wwp_7-0E4Ck-sRUJjd79To6g&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=XJYIEV8BQvMQR2BFF_gYUg&_nc_ss=7b2a8&oh=00_Af1US_xonmvjedmvYz95UYRoogmPb4O20A3H7KZvvb3pCQ&oe=69F5022A', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/631699560_122160675146877648_7813571469328498389_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=ZIupmCeOTpgQ7kNvwEHtMkx&_nc_oc=AdrxvWuk4lnUSZ1wm4hZW_fvvuG1vwElTcwSiHwnuTXi4KLsHXHoCWt_xZ5B3vX9I3g&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=EfQmneX3cHQmoL6iRqNrmA&_nc_ss=7b2a8&oh=00_Af2sXjL0ynEklAfiZ1WFm5h9b81MNegoaO5rc3rIftOrJg&oe=69F53839', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/630732319_122160681824877648_2961923769400161257_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=J-jAFo8wEusQ7kNvwGX1RYX&_nc_oc=Ado7fZ7DjPFCO5Ar7MH3f9rBV1pTR9aGKDdTQa1Zm7zZWvluorZjPNZiKBpBUZpMQNs&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=gVi6nFI4LMUBh91pj7CvPA&_nc_ss=7b2a8&oh=00_Af0fbUoEfTHK445stURnDAOowKhweRSEy5xjxcZQavSIUg&oe=69F52E88', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/631378692_122160681506877648_3147864441914745564_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=C-RVQgsCQeMQ7kNvwHP-a1M&_nc_oc=AdoUyncM4FeIBskgTzYVH9Pd53QMJW_GAgOMcwdeXp2KNduW641gcxwTOYa-JoDAvlM&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=_B_daSB9PsXzlES13zhyig&_nc_ss=7b2a8&oh=00_Af3ilxmxePo3-_9WYu-uwD1G7S03eBRC6pH9OJDYLyYEjg&oe=69F517CA', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/631471275_122160681704877648_7083616937936117488_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=MNfB1NDZgVkQ7kNvwFElyJT&_nc_oc=Adrfldo_DXLG3IWh6Te6Ftr3M30fIjhfL18-vt3lH6MmQmlMKY8wDp8fSz3TPwjA-u0&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=2wS6Yy5nGat8-ZJd6tmD3w&_nc_ss=7b2a8&oh=00_Af1mba57pc9omXzN4A5umFh90tm6QjW1Usmo3smSQR619Q&oe=69F52738', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/631471278_122160681944877648_8418660036769970458_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=AlyVOlLknQMQ7kNvwGKMhqd&_nc_oc=AdoPsp1KFLGa7EzMrtodMIadgPI5cvFDz60qaORU5jokXxpahJqABskH-jtV2Ervq30&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=9Ti5TIzSAKDWQ4BGmZDSoA&_nc_ss=7b2a8&oh=00_Af21P9kig-66aylsKwa9i-Q_byPtt9kuDxwlPWAMlzrxBA&oe=69F5276C', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/631123801_122160676400877648_7890299893857685233_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Quu1eSvcAg0Q7kNvwF4yfb4&_nc_oc=Adre5Lf8uMmI7wxhcD7e2Z0Me8J0ACWo7gqoR3B9mx_ldGGi-epJMitXjuVUT8NUpk8&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=Y4Ebeh9MReUCPbFWEvDWSg&_nc_ss=7b2a8&oh=00_Af1gLDCqiwV7eqFYpFU6uTtI-Yu3czLbnKNwNtYfnJJa9w&oe=69F52FD1', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/630747368_122160675872877648_2275071908504879719_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=AtAlteFb0K8Q7kNvwFcAeUd&_nc_oc=Adq0OAtybdOgivVP_MnkdQwpVl-lnDz8LpTmt7e1ywMKVaSYDnmYjknVR0qg_vTKt7E&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=xdsGW4dtnXkIvEdvlUnfXQ&_nc_ss=7b2a8&oh=00_Af0Gw16XzT0fTAN1FC1YX3lQ53WNyBe8vPZZX3owJJHl0w&oe=69F51EB3', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/632384595_122160673952877648_5738823124696005168_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=2rriy9ni6PYQ7kNvwHz4lKn&_nc_oc=Ado7aW-YOX7g0G2msGuWuD6rFC7ntcgg9D7p5oNom6jvDgssggIp2qn2O3IRi2oaQYM&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=YCqMON5o9Pm2s2jkrDM1iw&_nc_ss=7b2a8&oh=00_Af25McwBZVmGkFggFezKqQeJ9y6zkrQc0rup6bNOsYWiFA&oe=69F52422', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/631580102_122160675770877648_4315059553176130870_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=-JlgG9A88pMQ7kNvwGnggBC&_nc_oc=AdotaL8QZpn_dR8XqTcz0L-MnKVdYVkkWxIXVd-ldxegbOEqaG4d7BJWUI_e9YScs00&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=PG-dbBwEqWNCO5PWGlhSWg&_nc_ss=7b2a8&oh=00_Af14d_aZbRku9GO9QuIDdbAQ6X3kTYdvLvShqNtejERA6A&oe=69F52D55', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/631187796_122160676046877648_2242489610082272662_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=NkyfnFyU_FcQ7kNvwF_zrk7&_nc_oc=AdrOKjwZW_61RLYxkh3tAxelzBrYmi-yrp4rq71xXmzBL-bfYEKCpjfNx05a7_FWrbc&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=kXz7QgNtppF6cqDrdOgkGg&_nc_ss=7b2a8&oh=00_Af1fB16RgyhVXc9hfzQD0ASZLhxMEL2cshOElZ0kUSiY1Q&oe=69F53534', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/633158801_122160675062877648_4593673261567408009_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=866aKY29bDoQ7kNvwFpP3rv&_nc_oc=Adreg4gPdoPw02jravmd6EywpQ0oSHoS5iIr1DF1SAKovtPrWuJ8XxlBGBSpWixg9ac&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=5sxIh2NU79YjXmkhF2G-8A&_nc_ss=7b2a8&oh=00_Af1y_gTKqQ36i1C4w5YKXNSodmu0N-x9DGhh6KMhwdPSUg&oe=69F52BAA', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/631554077_122160675488877648_8512496312151822922_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=zjCXRVk_FvsQ7kNvwGkhkro&_nc_oc=AdpPKpX9zYGT1DF-wsHPDUkEyUQF1BmAJuwEfoSJKvLBUQl6_SAByEPJrOFHsf6w2Hg&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=qkHG_Lun7fyFK_WCI04LxQ&_nc_ss=7b2a8&oh=00_Af3iNGFypPGz-yzZaGvYMu233NuavkXTUEuC9D4NinkTIw&oe=69F51CA7', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/631236366_122160681716877648_5974759197482290932_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Z4BVSmKjrowQ7kNvwEI0lPh&_nc_oc=AdrTQtEXkxSJwhsTT22joat8ThJAW0IQL_l62SFfqlJuxPJ0sLDA7wMVwq-aZYcfXeQ&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=SaCPPnhUJw5--TiMMiDV1g&_nc_ss=7b2a8&oh=00_Af163F109-VA3-0epPYTWG3FZ335tzeU-BBldHOiHcuAUg&oe=69F5095B', title: '', desc: '' },
        { url: 'https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/631481476_122160674054877648_6698708422631115513_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=uznJbNrZISAQ7kNvwF5m9Po&_nc_oc=AdrO1Uq62-KQObEeYEYX8E2bWrEUBTanU-mBJNU9myr9qKLxcBG4Y8DWDbyYkBvKWcM&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=3bb_NMUombMDp7UuUhXKkw&_nc_ss=7b2a8&oh=00_Af3u96VdNAG6_fMq3INSek7OyKztigLD5s1s2uqTJ4RuXA&oe=69F537B8', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/632249870_122160681770877648_3270765847480745709_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=iVVzMcvvHcQQ7kNvwFeXRu4&_nc_oc=AdoJqiXCEum4fHQTGXhsFRHsbKnI9xyg_o10lkwA41bApENc3B7bE1GjGesQU8ghr_k&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=knbD92kC0aO44ElaCZ-AAw&_nc_ss=7b2a8&oh=00_Af1_a6ESMBBtsSzUy3xzZMm3bazwIbvD_g-LjFIEGsgkeQ&oe=69F50C9A', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/631728056_122160676118877648_6335081993931967565_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=BXQ4k4AEMjEQ7kNvwESv6Fx&_nc_oc=AdpqSt-0GH1qBhc4yNpJGNwvYIUTLuxhmY5KhcZKq-OwU4vIVZ5SLbYPnEC8JBeq_tY&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=30_vIi48Mh1W2O-g9E0XlA&_nc_ss=7b2a8&oh=00_Af1Vq-ZbmAr_uiq0wmV5BwV0396KC6k8RAhbcexOSUQDrw&oe=69F51EAA', title: '', desc: '' },
        { url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/631036649_122160674642877648_914511394868885201_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Yz4q25BcggEQ7kNvwF4-loX&_nc_oc=Adomt4LHpnP2pBhiux5NVqMpdo5Hdytl6YNGH8BFJT3EU8G_cufSILRm05kxPbG63ZI&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=y5uYTif0YB8gyUal4Ja12A&_nc_ss=7b2a8&oh=00_Af2tWFZhzkePT4h4JM9Mk_gDKpEOkK-rbjVHSsK26PFTHA&oe=69F51425', title: '', desc: '' },
        { url: 'https://i.postimg.cc/VsqgqqgD/photo-122155207496877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/RC7d77dp/photo-122155207514877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/KcPfPPfs/photo-122155207580877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/T2V0VV0k/photo-122155207604877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/SQ6d66dT/photo-122155207664877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/FFypyyp2/photo-122155207694877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/ZY8H88HX/photo-122155207748877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/v8rhrrhJ/photo-122155207778877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/Y26R668c/photo-122155207838877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/NG6D66bq/photo-122155207862877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/qBswssQH/photo-122155207922877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/v8rhrrXd/photo-122155207946877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/pVfCffkH/photo-122155208000877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/qBswssQ0/photo-122155208018877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/gcVsVV4m/photo-122155208090877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/2jQGQQTC/photo-122155208108877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/m2Tw8PpK/photo-122155208210877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/gkGDNxtf/photo-122155208258877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/ZKJcVWsG/photo-122155208312877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/c4dmXv5q/photo-122155208342877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/zXqj0yPZ/photo-122155208390877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/15yHJ8YQ/photo-122155208414877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/gkGDNxBP/photo-122155208474877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/9FcpJDN2/photo-122155208504877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/BQJgMjw4/photo-122155208576877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/c4dmXv5d/photo-122155208582877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/hPKrpX3S/photo-122155208648877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/MKzDdnrZ/photo-122155208684877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/CLwNmR6L/photo-122155208738877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/3J3Bnkbx/photo-122155208762877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/Dy7gBSYz/photo-122155208822877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/5Nf3nXk0/photo-122155208852877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/28Cw21Xy/photo-122155208906877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/J4RqPsdt/photo-122155208930877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/tC952smY/photo-122155208996877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/bNqT3ZFG/photo-122155209008877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/4NX5BYFH/photo-122155209062877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/WbsnXdfk/photo-122155209104877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/yY7PvDrR/photo-122155209164877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/X7n8QrDF/photo-122155209182877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/15yHJ8Yw/photo-122155209242877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/FsGxqh21/photo-122155209272877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/PrKMcdBP/photo-122155209332877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/jdvh9RGW/photo-122155209356877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/sDKJ83tQ/photo-122155209416877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/FsGxqh2L/photo-122155209440877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/4Nw1MXrc/photo-122155209506877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/NfbxVQWT/photo-122155209530877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/yYnT57wc/photo-122155209590877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/8Pwb3TqR/photo-122155209620877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/QxSqPjRp/photo-122155209674877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/tCDzf9Lt/photo-122155209704877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/BQNCyJd5/photo-122155209758877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/PrKMcdB4/photo-122155209782877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/CLJ4twW7/photo-122155209842877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/RVGT8vjs/photo-122155209866877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/gk4K5GfT/photo-122155209926877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/kXwyZ7kH/photo-122155209950877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/xTgP79W7/photo-122155210010877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/W137cQv7/photo-122155210040877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/htj0RHBr/photo-122155210100877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/Cx14pWgm/photo-122155210130877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/RZFTxjBd/photo-122155210184877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/T3wcvZ6t/photo-122155210208877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/g2JKbfWM/photo-122155210274877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/vZBvwpsq/photo-122155210304877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/T3wcvZ6H/photo-122155210358877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/sgXJCtrN/photo-122155210388877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/NjMxvWcn/photo-122155210442877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/x1CPVW27/photo-122155210466877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/Bn6Cfd0k/photo-122155210532877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/dV19czFM/photo-122155210556877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/MpTYJhw2/photo-122155210616877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/520mWZJM/photo-122155210646877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/4xd1RrGG/photo-122155210706877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/L8XVFrS2/photo-122155210730877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/bwJRfKPy/photo-122155210790877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/QdtqZRDN/photo-122155210826877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/nhz1f6xc/photo-122155210874877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/g2JKbfp2/photo-122155215368877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/fRLvQ6sL/photo-122155215422877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/13jrmJR1/photo-122155215452877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/8z0mptkD/photo-122155215506877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/SxvfSDQm/photo-122155215536877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/nhPGF0VF/photo-122155215590877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/zGcFz0DD/photo-122155215614877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/zGcFz0DX/photo-122155215674877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/Jz25rP7z/photo-122155215698877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/DwMPvBf0/photo-122155215770877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/QdyJ80Nt/photo-122155215788877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/4xSQfB4K/photo-122155215860877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/FHBVrDFk/photo-122155215878877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/9QnYmJXq/photo-122155215944877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/Jz25rP7k/photo-122155215974877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/9QnYmJXy/photo-122155216028877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/pL6JWqVf/photo-122155216052877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/cLbBxX1M/photo-122155216112877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/P5RQX2fM/photo-122155216136877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/GpTJHG98/photo-122155216220877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/6Q4LynT4/photo-122155216244877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/5tQq6LjC/photo-122155216304877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/3w0CdmWp/photo-122155216310877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/BvPcXHtF/photo-122155216388877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/PqvzPYNY/photo-122155216406877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/5tQq6Ljn/photo-122155216466877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/YSLfhYjd/photo-122155216502877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/W4q6hgt9/photo-122155216550877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/MGfbvVX3/photo-122155216604877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/wBRc7L3Z/photo-122155216640877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/1zVcfw4b/photo-122155216676877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/43HbmVnr/photo-122155216730877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/pd5YpzpM/photo-122155216766877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/LXdkf5Z7/photo-122155216820877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/Ss0L8RzB/photo-122155216856877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/LXdkf51d/photo-122155216904877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/858dWc6g/photo-122155216952877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/RFr1fhHB/photo-122155216988877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/0QgGmjwx/photo-122155217024877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/xCrGH8zQ/photo-122155217072877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/xCrGH8z8/photo-122155217108877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/FRtbczLY/photo-122155217156877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/sXFPSxhB/photo-122155217198877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/9M3PT07R/photo-122155217240877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/j5zHhTHx/photo-122155217276877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/SsW6G46s/photo-122155217330877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/RFc7Tm7h/photo-122155217384877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/50wBmJB6/photo-122155217420877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/JnbNQ8Ny/photo-122155217456877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/zBnCkNCT/photo-122155217516877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/SsW6G466/photo-122155217570877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/tTh3zb3h/photo-122155217618877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/G2kFjRFx/photo-122155217684877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/nrpvRW2K/photo-122155217720877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/FzNjW6pg/photo-122155217780877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/rsMSnHjJ/photo-122155217822877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/fyDx2PC8/photo-122155217864877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/T1fr7s0N/photo-122155217888877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/2yr4ctGK/photo-122155217942877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/brpQC5gM/photo-122155217978877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/tJphSckw/photo-122155218020877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/nrpvRW26/photo-122155218074877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/FzNjW6GX/photo-122155218110877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/PJTm37Kk/photo-122155218152877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/MHqyPLtw/photo-122155218200877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/6qtdjPzB/photo-122155218236877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/T10nZcNF/photo-122155218284877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/7h9SpNtj/photo-122155218302877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/sxm5tJ0F/photo-122155218368877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/Wz80Q7fV/photo-122155218404877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/yxj0wTrB/photo-122155218452877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/zv7T9kPJ/photo-122155218500877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/rsj5v9Yy/photo-122155218536877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/7h9SpNQY/photo-122155218590877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/4yPpr1F3/photo-122155218626877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/j2cyGhkC/photo-122155218668877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/Bbp2dCwj/photo-122155218692877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/QCmcRqnW/photo-122155218752877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/HnzbftPM/photo-122155218776877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/Y2zNGp23/photo-122155221854877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/y6yhgV6j/photo-122155221872877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/9XYPRWX1/photo-122155224866877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/BZB5LqZh/photo-122155225250877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/T2JjLR2s/photo-122155676594877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/G3xP8c3Z/photo-122155676618877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/G3xP8c3V/photo-122155676672877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/v8t7gQHR/photo-122156336234877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/CMsCBFLS/photo-122156360618877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/J753D148/photo-122156360636877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/pVJQh2X2/photo-122156360696877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/MZm0MWK6/photo-122156361182877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/RCL16MVF/photo-122157294458877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/gkcV3fnm/photo-122157294482877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/9FXdyvrc/photo-122157294548877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/vH8r5pc8/photo-122157294572877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/Dyfr1t80/photo-122157294632877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/dtQ2GzL1/photo-122157294656877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/xTjvLWcX/photo-122157294722877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/L64tjrnq/photo-122157294746877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/28jQnPVW/photo-122157294824877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/5N9B8Z6L/photo-122157294842877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/8PkRLqjB/photo-122157294908877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/8PkRLqjb/photo-122157294956877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/m2dQj8HF/photo-122157294986877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/ZKfrHVd3/photo-122157295034877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/DyCq6BXr/photo-122157295076877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/28H4G2Zx/photo-122157295106877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/ncdv20Dk/photo-122157295166877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/m2dQj8Hj/photo-122157295196877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/DyCq6BXj/photo-122157295250877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/yYfFjvZf/photo-122157295286877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/tCrhk2xc/photo-122157295328877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/28H4G2Zg/photo-122157295370877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/c4DQhX3N/photo-122157295418877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/RZNwDK7s/photo-122157295448877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/cLrfbwRk/photo-122157295502877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/9QrynZdN/photo-122159146760877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/nhCqPBK8/photo-122159265662877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/dVLGxr2z/photo-122159375240877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/CxzbQkCp/photo-122159379740877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/8zjL0MdV/photo-122159759246877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/BnX2VH5n/photo-122160144110877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/wj7DGL5B/photo-122160144122877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/fRJYrm7L/photo-122160144194877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/bws1Bk0s/photo-122160144212877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/7ZdS8hXP/photo-122160144272877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/7ZdS8hXH/photo-122160144314877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/XYm9SqxY/photo-122160144356877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/DwH1k050/photo-122160144398877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/CxXbT5JZ/photo-122160144422877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/7ZdS8hX2/photo-122160144488877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/132DhXMn/photo-122160673760877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/mgJ7fkV7/photo-122160673784877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/4xqpkywv/photo-122160673850877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/2SMnRyT7/photo-122160673868877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/K8wtSjQN/photo-122160673940877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/NjSRqFbd/photo-122160673964877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/bwW1crL6/photo-122160674030877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/d0CrqFS8/photo-122160674042877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/R0tKMmbP/photo-122160674108877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/JhXZ18d6/photo-122160674132877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/YSFYp7ys/photo-122160674192877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/fbdmwsgG/photo-122160674216877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/fbdmwsr4/photo-122160674276877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/3wGmKhcQ/photo-122160674294877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/zfhKJNcr/photo-122160674354877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/DZKs0NtH/photo-122160674378877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/tg6WXbMX/photo-122160674444877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/hjqxvYkB/photo-122160674468877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/DZKs0N93/photo-122160674534877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/G21YtfW2/photo-122160674546877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/85VWcY2c/photo-122160674618877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/W3PrzyBD/photo-122160674630877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/XJ0FqPR5/photo-122160674696877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/ZRh3nQG6/photo-122160674714877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/fLjd9KsL/photo-122160674780877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/76Mz2V4f/photo-122160674816877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/FRgSLZvY/photo-122160674870877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/sX9WhczQ/photo-122160674894877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/j5Qf7XTW/photo-122160674954877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/xCymzRQH/photo-122160674978877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/RFQtHRmK/photo-122160675038877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/9Mt97p2t/photo-122160675056877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/pTYjFZvB/photo-122160675122877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/bJHntTPT/photo-122160675140877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/ydXRZPKf/photo-122160675206877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/50qzC3J7/photo-122160675230877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/4dbc95GB/photo-122160675290877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/vBLnVzy2/photo-122160675320877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/FRgSLZv8/photo-122160675380877648.jpg', title: '', desc: '' },
        { url: 'https://i.postimg.cc/1XmqcqRH/photo-122160675392877648.jpg', title: '', desc: '' }

      ]
    }
  ];

export default function Events() {
  const { t } = useLanguage();
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('Wszystkie regiony');
  const [brokenImages, setBrokenImages] = useState<Set<string>>(new Set());

  const handleImageError = (url: string) => {
    setBrokenImages(prev => {
      const next = new Set(prev);
      next.add(url);
      return next;
    });
  };

  const polishMonths: { [key: string]: number } = {
    stycznia: 0, lutego: 1, marca: 2, kwietnia: 3, maja: 4, czerwca: 5,
    lipca: 6, sierpnia: 7, września: 8, października: 9, listopada: 10, grudnia: 11
  };

  const parsePolishDate = (dateStr: string): Date => {
    const parts = dateStr.toLowerCase().split(/[ \-,]+/);
    
    let day = 1, month = 0, year = 2026;
    
    const yearPart = parts.find(p => /^\d{4}$/.test(p));
    if (yearPart) year = parseInt(yearPart);
    
    const monthName = parts.find(p => polishMonths[p] !== undefined);
    if (monthName) month = polishMonths[monthName];
    
    // Find first number that isn't the year
    const dayPart = parts.find(p => /^\d{1,2}$/.test(p) && p !== yearPart);
    if (dayPart) day = parseInt(dayPart);

    // Special cases
    if (dateStr.includes('Niedziela Palmowa')) return new Date(2026, 2, 29);
    if (dateStr.includes('Wielka Sobota')) return new Date(2026, 3, 4);

    return new Date(year, month, day);
  };

  const now = new Date(2026, 3, 27); // 27 Kwietnia 2026

  const filteredEventsForSections = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion === 'Wszystkie regiony' || 
                         selectedRegion === t('events.allRegions') || 
                         event.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  const upcomingEvents = filteredEventsForSections
    .filter(e => parsePolishDate(e.date) >= now)
    .sort((a, b) => parsePolishDate(a.date).getTime() - parsePolishDate(b.date).getTime());

  const pastEvents = filteredEventsForSections
    .filter(e => parsePolishDate(e.date) < now)
    .sort((a, b) => parsePolishDate(b.date).getTime() - parsePolishDate(a.date).getTime());

  const renderEventCard = (event: Event) => {
    // Attempt to find the first working image, fallback to the first one if all fail
    const workingImage = event.images.find(img => !brokenImages.has(img.url)) || event.images[0];

    return (
      <motion.div 
        key={event.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group bg-white rounded-[4rem] border border-slate-100 shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-700"
      >
        <div className="flex flex-col lg:flex-row h-full">
          <div 
            className="lg:w-1/3 aspect-[4/3] lg:aspect-auto relative overflow-hidden bg-slate-50 cursor-zoom-in"
            onClick={() => setZoomedImage(workingImage.url)}
          >
            <img 
              src={workingImage.url} 
              alt={event.title} 
              onError={() => handleImageError(workingImage.url)}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-blue-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <ZoomIn size={64} className="text-white scale-50 group-hover:scale-100 transition-transform duration-500" />
            </div>
            <div className="absolute top-8 left-8">
            <span className="px-6 py-2 bg-white/90 backdrop-blur-sm text-red-700 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
              {event.region}
            </span>
          </div>
        </div>
        <div className="flex-1 p-10 md:p-16 space-y-8 flex flex-col justify-center">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-6 text-sm font-serif italic text-slate-500">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-red-700" />
                {event.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-red-700" />
                {event.time}
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-red-700" />
                {event.location}
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 group-hover:text-red-700 transition-colors">
              {event.title}
            </h2>
          </div>
          <p className="text-xl text-slate-600 font-serif italic leading-relaxed line-clamp-2">
            {event.description}
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <Link 
              to={`/wydarzenia/${event.id}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-950 text-white rounded-full font-bold transition-all hover:scale-105"
            >
              {t('events.viewGallery')} <ArrowRight size={20} />
            </Link>
            <div className="flex items-center gap-2 px-6 py-4 bg-slate-50 rounded-full text-sm font-serif italic text-slate-500 border border-slate-100">
              <MapPin size={14} className="text-red-700" /> {event.location}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-20 pb-20">
      <header className="space-y-8 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-slate-900">
          {t('events.title').split(' ')[0]} <span className="text-red-700">{t('events.title').split(' ').slice(1).join(' ')}</span>
        </h1>
        <p className="text-2xl text-blue-900 max-w-4xl leading-relaxed font-serif italic">
          {t('events.subtitle')}
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm">
        <div className="flex-1 w-full relative">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
          <input 
            type="text" 
            placeholder={t('events.searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-600 font-serif italic" 
          />
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <Filter size={20} className="text-red-700" />
          <select 
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="w-full md:w-64 bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl text-sm font-bold text-slate-600 focus:outline-none cursor-pointer font-serif italic"
          >
            <option>{t('events.allRegions')}</option>
            {REGIONS.map(r => <option key={r.id} value={r.name}>{r.name}</option>)}
          </select>
        </div>
      </div>

      <div className="space-y-24">
        {upcomingEvents.length > 0 && (
          <section className="space-y-12">
            <div className="flex items-center gap-8">
              <h2 className="text-3xl font-serif font-bold text-slate-900 whitespace-nowrap">{t('events.upcoming')}</h2>
              <div className="h-px w-full bg-slate-100" />
            </div>
            <div className="grid grid-cols-1 gap-12">
              {upcomingEvents.map(renderEventCard)}
            </div>
          </section>
        )}

        {pastEvents.length > 0 && (
          <section className="space-y-12">
            <div className="flex items-center gap-8 text-slate-400">
              <h2 className="text-3xl font-serif font-bold whitespace-nowrap">{t('events.past')}</h2>
              <div className="h-px w-full bg-slate-100" />
            </div>
            <div className="grid grid-cols-1 gap-12 grayscale-[0.7] opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              {pastEvents.map(renderEventCard)}
            </div>
          </section>
        )}

        {filteredEventsForSections.length === 0 && (
          <div className="text-center py-24 space-y-6">
            <Search size={64} className="mx-auto text-slate-200" />
            <p className="text-2xl text-slate-400 font-serif italic">{t('events.noResults')}</p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-blue-950/95 backdrop-blur-xl p-4 md:p-12"
            onClick={() => setZoomedImage(null)}
          >
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute top-6 right-6 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-red-700 transition-all z-10 cursor-pointer border border-white/20 shadow-2xl"
            >
              <X size={32} />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-full max-h-full flex flex-col items-center gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative group overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
                <img
                  src={zoomedImage}
                  alt="Zoomed view"
                  className="max-w-[95vw] max-h-[85vh] object-contain block ring-1 ring-white/20"
                />
              </div>
              
              <div className="flex items-center gap-4 px-8 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white/90 text-sm font-serif italic">
                {t('events.gallery.close')}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="space-y-16 py-24 text-center border-t border-dashed border-slate-100 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
           <Calendar size={400} />
        </div>
        <div className="relative z-10 space-y-8">
          <h3 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 italic">{t('events.comingSoon.title')}</h3>
          <p className="text-2xl text-blue-900 font-serif italic leading-relaxed max-w-2xl mx-auto">
            {t('events.comingSoon.subtitle')}
          </p>
          <div className="pt-8">
             <div className="inline-block px-10 py-4 bg-slate-50 text-red-700 border border-slate-100 rounded-full font-serif font-bold italic shadow-sm">{t('events.comingSoon.button')}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

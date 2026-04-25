
export const REGIONS = [
  { id: 'agder', name: 'Agder', cities: 'Kristiansand, Arendal, Grimstad' },
  { id: 'akershus', name: 'Akershus', cities: 'Lillestrøm, Bærum, Asker' },
  { id: 'buskerud', name: 'Buskerud', cities: 'Drammen, Kongsberg, Hønefoss' },
  { id: 'innlandet', name: 'Innlandet', cities: 'Hamar, Lillehammer, Gjøvik' },
  { id: 'more-og-romsdal', name: 'Møre og Romsdal', cities: 'Ålesund, Molde, Kristiansund' },
  { id: 'nordland', name: 'Nordland', cities: 'Bodø, Narvik, Mo i Rana' },
  { id: 'oslo', name: 'Oslo', cities: 'Oslo, Bærum, Grünerløkka' },
  { id: 'rogaland', name: 'Rogaland', cities: 'Stavanger, Sandnes, Haugesund' },
  { id: 'telemark-vestfold', name: 'Telemark + Vestfold', cities: 'Skien, Tønsberg, Porsgrunn' },
  { id: 'troms-finnmark', name: 'Troms + Finnmark', cities: 'Tromsø, Alta, Hammerfest' },
  { id: 'trondelag', name: 'Trøndelag', cities: 'Trondheim, Steinkjer, Stjørdal' },
  { id: 'vestland', name: 'Vestland', cities: 'Bergen, Førde, Stord' },
  { id: 'ostfold', name: 'Østfold', cities: 'Fredrikstad, Sarpsborg, Moss' },
];

export const SLAVIC_COUNTRIES = [
  { group: 'Zachodni', countries: ['Polska', 'Czechy', 'Słowacja'] },
  { group: 'Wschodni', countries: ['Rosja', 'Ukraina', 'Białoruś'] },
  { group: 'Południowi', countries: ['Słowenia', 'Chorwacja', 'Bośnia i Hercegowina', 'Serbia', 'Czarnogóra', 'Macedonia Północna', 'Bułgaria'] },
];

export const CATEGORIES = [
  {
    title: 'Rękodzieło i sztuka',
    items: ['Malowanie obrazów (oleje, akwarele, akryle)', 'Gobeliny, haft, ikony i sztuka sakralna', 'Rysunek, maski, dekoracje teatralne'],
    icon: 'Palette'
  },
  {
    title: 'Dekoracje i ozdoby',
    items: ['Wianki, łapacze snów, figurki i rzeźby', 'Bukiety kwiatowe, świece, ozdoby świąteczne', 'Makrama i plecionki'],
    icon: 'Sparkles'
  },
  {
    title: 'Biżuteria i akcesoria',
    items: ['Naszyjniki, pierścionki, broszki', 'Spinki, opaski, torebki handmade'],
    icon: 'Gem'
  },
  {
    title: 'Tekstylia i szycie',
    items: ['Ubrania, szaliki, rękawiczki', 'Haft, szydełko, patchwork', 'Stroje historyczne, maskotki'],
    icon: 'Scissors'
  },
  {
    title: 'Domowe wyroby',
    items: ['Torty, pieczywo, czekoladki', 'Wędliny, sery, nalewki', 'Przetwory i kiszonki'],
    icon: 'Utensils'
  },
  {
    title: 'Produkty naturalne',
    items: ['Mydła, kosmetyki, olejki', 'Kule do kąpieli, perfumy'],
    icon: 'Leaf'
  },
  {
    title: 'Rzemiosło użytkowe',
    items: ['Meble, dekoracje z drewna', 'Kosze wiklinowe, kowalstwo'],
    icon: 'Hammer'
  },
  {
    title: 'Sztuka cyfrowa i foto',
    items: ['Fotografia artystyczna i portretowa', 'Filmy, animacje, kaligrafia'],
    icon: 'Camera'
  }
];

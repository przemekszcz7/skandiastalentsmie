
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Facebook, Mail, MapPin, Sparkles } from 'lucide-react';
import { REGIONS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const mainLinks = [
    { name: 'O nas', path: '/o-nas' },
    { name: 'Dołącz do społeczności', path: '/dolacz' },
    { name: 'Wydarzenia', path: '/wydarzenia' },
    { name: 'Projekty i pomysły', path: '/projekty' },
    { name: 'Członkostwo i koordynatorzy', path: '/czlonkostwo' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-blue-50 sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 overflow-hidden rounded-full border border-blue-100 shadow-sm">
            <img 
              src="https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/561789674_122142308822877648_8151444745707376127_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=vDwSNfzKtxEQ7kNvwF7X7NW&_nc_oc=AdrhR3UyoomnCy9X6YptbZv0C3O0fkwFQQ30FRKbJx8_YvT_Wk5sHyENjJBwL7s5FMk&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=yrhmPex5imFPqU64XijZjQ&oh=00_Af179rYN69irUD-1wuWoo1ZHilYCMxwIHdkvBYNjd7e6Lw&oe=69F1327F" 
              alt="Skandias Talentsmie Logo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="font-bold tracking-tight text-sm font-serif">Skandias Talentsmie</span>
        </Link>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-blue-600">
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <AnimatePresence>
        {(isSidebarOpen || true) && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            className={`
              fixed md:sticky top-0 left-0 h-screen w-72 bg-slate-50/50 border-r border-blue-50 z-40 
              flex flex-col transform transition-transform duration-300 ease-in-out
              ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            `}
          >
            <div className="p-8 border-b border-blue-50">
              <Link to="/" className="flex flex-col items-center gap-3 text-center group">
                <div className="w-24 h-24 overflow-hidden rounded-full transform group-hover:scale-105 transition-transform duration-500 shadow-xl border-4 border-white bg-white">
                  <img 
                    src="https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/561789674_122142308822877648_8151444745707376127_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=vDwSNfzKtxEQ7kNvwF7X7NW&_nc_oc=AdrhR3UyoomnCy9X6YptbZv0C3O0fkwFQQ30FRKbJx8_YvT_Wk5sHyENjJBwL7s5FMk&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=yrhmPex5imFPqU64XijZjQ&oh=00_Af179rYN69irUD-1wuWoo1ZHilYCMxwIHdkvBYNjd7e6Lw&oe=69F1327F" 
                    alt="Skandias Talentsmie Logo" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold tracking-tight text-blue-600 font-serif">Skandias Talentsmie</h1>
                  <p className="text-[10px] uppercase tracking-widest text-sky-600 font-bold">Kuźnia Talentów</p>
                </div>
              </Link>
            </div>

            <nav className="flex-1 overflow-y-auto py-6 scrollbar-hide">
              <div className="px-6 mb-8">
                <h2 className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-4 px-2">Menu główne</h2>
                <ul className="space-y-1">
                  {mainLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        onClick={() => setIsSidebarOpen(false)}
                        className={`
                          flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-serif font-bold italic transition-all
                          ${location.pathname === link.path 
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                            : 'hover:bg-blue-50 text-slate-600 hover:text-blue-600'}
                        `}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-6">
                <h2 className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-4 px-2">Filie regionalne</h2>
                <ul className="space-y-1">
                  {[...REGIONS].sort((a, b) => a.name.localeCompare(b.name)).map((region) => (
                    <li key={region.id}>
                      <Link
                        to={`/filia/${region.id}`}
                        onClick={() => setIsSidebarOpen(false)}
                        className={`
                          flex items-center justify-between px-3 py-2 rounded-lg text-xs font-serif italic transition-all
                          ${location.pathname === `/filia/${region.id}`
                            ? 'bg-sky-100 text-sky-700 font-bold'
                            : 'hover:bg-sky-50 text-slate-500 hover:text-sky-700'}
                        `}
                      >
                        <span>{region.name}</span>
                        <ChevronRight size={14} className="opacity-30" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            <div className="p-6 border-t border-blue-50 bg-slate-50/50 mt-auto">
              <div className="flex items-center gap-4 justify-center">
                <a href="https://www.facebook.com/SkandiiKuzniaTalentow" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-blue-600 border border-blue-100 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                  <Facebook size={18} />
                </a>
                <a href="mailto:post@skandiatalentsmie.no" className="p-2 bg-white rounded-full text-blue-600 border border-blue-100 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-1 min-h-screen pt-0 md:pt-0">
        <div className="max-w-5xl mx-auto px-6 py-12 md:px-12 md:py-16">
          {children}
        </div>

        {/* Footer */}
        <footer className="w-full border-t border-blue-50 bg-slate-50 mt-12 py-16">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 overflow-hidden rounded-full border-2 border-white shadow-sm ring-1 ring-blue-50">
                  <img 
                    src="https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/561789674_122142308822877648_8151444745707376127_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=vDwSNfzKtxEQ7kNvwF7X7NW&_nc_oc=AdrhR3UyoomnCy9X6YptbZv0C3O0fkwFQQ30FRKbJx8_YvT_Wk5sHyENjJBwL7s5FMk&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=yrhmPex5imFPqU64XijZjQ&oh=00_Af179rYN69irUD-1wuWoo1ZHilYCMxwIHdkvBYNjd7e6Lw&oe=69F1327F" 
                    alt="Logo"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="font-bold text-blue-600 font-serif text-lg">Skandias Talentsmie</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed italic font-serif">
                "Kuźnia, w której hartujemy nie tylko rękodzieło i sztukę, ale także wiezi międzyludzkie."
              </p>
            </div>
            <div className="space-y-4 text-sm text-slate-600">
              <h3 className="font-bold text-slate-900 font-serif text-lg">Kontakt</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2"><Mail size={14} className="text-blue-500" /> post@skandiatalentsmie.no</li>
                <li className="flex items-center gap-2"><MapPin size={14} className="text-blue-500" /> Agder, Norwegia</li>
              </ul>
            </div>
            <div className="space-y-4 text-sm">
              <h3 className="font-bold text-slate-900 font-serif text-lg">Media</h3>
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/SkandiiKuzniaTalentow" target="_blank" rel="noopener noreferrer" className="font-serif font-bold text-blue-600 hover:underline">Facebook</a>
                <span className="text-slate-300">|</span>
                <a href="https://www.facebook.com/groups/2466069263743964" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">Grupa</a>
              </div>
            </div>
          </div>
          <div className="max-w-5xl mx-auto px-6 mt-12 pt-8 border-t border-blue-50 text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
            &copy; 2026 Skandias Talentsmie — Pielęgnujemy Tradycję
          </div>
        </footer>
      </main>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 md:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}

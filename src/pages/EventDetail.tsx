import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Clock, X, ZoomIn, ArrowLeft, ImageIcon } from 'lucide-react';
import { events } from './Events';
import { useLanguage } from '../contexts/LanguageContext';

export default function EventDetail() {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [brokenImages, setBrokenImages] = useState<Set<string>>(new Set());

  const event = events.find(e => e.id === eventId);

  if (!event) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-6">
        <h2 className="text-3xl font-serif font-bold text-slate-900">{t('events.noResults')}</h2>
        <button 
          onClick={() => navigate('/wydarzenia')}
          className="px-8 py-3 bg-blue-950 text-white rounded-full font-bold hover:scale-105 transition-all"
        >
          {t('common.back')}
        </button>
      </div>
    );
  }

  const handleImageError = (url: string) => {
    setBrokenImages(prev => {
      const next = new Set(prev);
      next.add(url);
      return next;
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="space-y-12 pb-20"
    >
      <button 
        onClick={() => navigate('/wydarzenia')}
        className="group inline-flex items-center gap-2 text-blue-950 font-bold hover:text-red-700 transition-colors"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        {t('common.back')}
      </button>

      <header className="space-y-8">
        <div className="space-y-4 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm font-serif italic text-slate-500">
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
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900">
            {event.title}
          </h1>
          <div className="inline-block px-6 py-2 bg-slate-100 text-red-700 rounded-full text-xs font-bold uppercase tracking-widest">
            {event.region}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="text-xl text-slate-600 font-serif italic leading-relaxed whitespace-pre-line">
              {event.description}
            </p>
          </div>
          
          <div className="flex items-center gap-2 px-6 py-4 bg-slate-50 rounded-2xl text-slate-600">
            <MapPin size={20} className="text-red-700" />
            <span className="font-serif italic">{event.address}</span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-950 rounded-[2rem] p-8 text-white space-y-6">
            <div className="flex items-center gap-3">
              <ImageIcon size={24} className="text-red-500" />
              <h3 className="text-xl font-serif font-bold italic">{t('events.gallery')}</h3>
            </div>
            <p className="text-blue-200 font-serif italic">
              {t('events.gallerySubtitle') || 'Zapraszamy do obejrzenia zdjęć z tego wydarzenia.'}
            </p>
          </div>
        </div>
      </div>

      <section className="space-y-12 pt-12 border-t border-slate-100">
        <div className="flex items-center gap-8">
          <h2 className="text-3xl font-serif font-bold text-slate-900 whitespace-nowrap">{t('events.gallery')}</h2>
          <div className="h-px w-full bg-slate-100" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {event.images.filter(img => !brokenImages.has(img.url)).map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 8) * 0.05 }}
              className="space-y-4 group"
            >
              <div 
                className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-100 relative shadow-sm cursor-zoom-in"
                onClick={() => setZoomedImage(img.url)}
              >
                <img 
                  src={img.url} 
                  alt={img.title || `Gallery image ${i}`} 
                  onError={() => handleImageError(img.url)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-blue-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn size={48} className="text-white scale-50 group-hover:scale-100 transition-transform duration-500" />
                </div>
              </div>
              {img.title && (
                <div className="px-2 space-y-1">
                  <h4 className="font-serif font-bold text-slate-900 italic">{img.title}</h4>
                  <p className="text-sm text-slate-500 font-serif italic">{img.desc}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

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
                  referrerPolicy="no-referrer"
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
    </motion.div>
  );
}

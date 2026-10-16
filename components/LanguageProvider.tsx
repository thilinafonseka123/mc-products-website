'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import type { Language } from '@/data/products';
type LanguageContextValue = { lang: Language; setLang: (v: Language) => void };
const LanguageContext = createContext<LanguageContextValue>({ lang: 'si', setLang: () => undefined });
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('si');
  useEffect(() => {
    try { const stored = window.localStorage.getItem('mc-lang'); if (stored === 'en' || stored === 'si') setLang(stored); } catch {}
  }, []);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const update = (v: Language) => { setLang(v); try { window.localStorage.setItem('mc-lang', v); } catch {} };
  return <LanguageContext.Provider value={{ lang, setLang: update }}>{children}</LanguageContext.Provider>;
}
export function useLanguage() { return useContext(LanguageContext); }

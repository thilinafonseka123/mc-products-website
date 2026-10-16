'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageProvider';
import { generalOrderLink } from '@/lib/site';
export default function Header() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => { setOpen(false); }, [pathname]);
  const nav = [
    { href: '/', label: lang === 'si' ? 'මුල් පිටුව' : 'Home' },
    { href: '/#products', label: lang === 'si' ? 'අපේ නිෂ්පාදන' : 'Our products' },
    { href: '/#story', label: lang === 'si' ? 'අපේ කතාව' : 'Our story' },
    { href: '/#contact', label: lang === 'si' ? 'සම්බන්ධ වන්න' : 'Contact' },
  ];
  return <header className="site-header"><div className="nav-shell shell">
    <Link href="/" aria-label="MC Products home" className="brand"><Image src="/logo.svg" alt="MC Products Homemade" width={224} height={70} priority /></Link>
    <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">{nav.map(item => <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
    <a className="mobile-order" href={generalOrderLink()} target="_blank" rel="noopener noreferrer">{lang === 'si' ? 'ඇණවුම් කරන්න' : 'Order now'} <ArrowUpRight size={17}/></a></nav>
    <div className="nav-actions"><div className="lang-switch" role="group" aria-label="Choose language"><button onClick={() => setLang('si')} className={lang === 'si' ? 'selected' : ''} aria-pressed={lang === 'si'}>සිං</button><span>/</span><button onClick={() => setLang('en')} className={lang === 'en' ? 'selected' : ''} aria-pressed={lang === 'en'}>EN</button></div>
      <a className="button button-dark desktop-order" href={generalOrderLink()} target="_blank" rel="noopener noreferrer">{lang === 'si' ? 'ඇණවුම් කරන්න' : 'Order now'} <ArrowUpRight size={17}/></a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X size={25}/> : <Menu size={25}/>}</button>
    </div>
  </div></header>;
}

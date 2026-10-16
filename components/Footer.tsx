'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Instagram, MapPin, Phone } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { companyAddress, generalOrderLink, phoneDisplay } from '@/lib/site';
import { products } from '@/data/products';
export default function Footer() {
  const { lang } = useLanguage();
  return <footer className="footer" id="contact"><div className="shell footer-inner">
    <div className="footer-top"><div><span className="eyebrow footer-eyebrow">LET'S KEEP IN TOUCH</span><h2>{lang === 'si' ? <>හොඳ රසයක්<br/><em>බෙදාගමු.</em></> : <>Let's share<br/><em>something good.</em></>}</h2></div><a className="footer-big-cta" href={generalOrderLink()} target="_blank" rel="noopener noreferrer">{lang === 'si' ? 'අදම කතා කරන්න' : 'Start a conversation'} <ArrowUpRight size={25}/></a></div>
    <div className="footer-columns"><div><Link href="/"><Image src="/logo.svg" alt="MC Products" width={200} height={60} /></Link><p>{lang === 'si' ? 'දේශීය ආහාර රසයට අලුත් ආදරයක්. අපේම ගෙදර හුරුපුරුදු හැඟීම.' : 'Crafted with care. Inspired by Sri Lankan food traditions.'}</p></div>
    <div><strong>{lang === 'si' ? 'නිෂ්පාදන' : 'Explore'}</strong>{products.map(p => <Link key={p.slug} href={`/products/${p.slug}`}>{p.name[lang]}</Link>)}</div>
    <div><strong>{lang === 'si' ? 'සම්බන්ධතා' : 'Get in touch'}</strong><a href={`tel:+94773418738`}><Phone size={16}/> {phoneDisplay}</a><span><MapPin size={16}/> {companyAddress}</span><a href={generalOrderLink()} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={14}/></a></div></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} MC PRODUCTS · HOMEMADE</span><span>Made with care in Sri Lanka <span aria-hidden="true">✳</span></span></div>
  </div></footer>;
}

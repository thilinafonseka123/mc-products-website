'use client';
import type { CSSProperties } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ScanQrCode } from 'lucide-react';
import { Product } from '@/data/products';
import { useLanguage } from './LanguageProvider';
import { Reveal } from './Reveal';
export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { lang } = useLanguage();
  return <Reveal delay={index * .1}><Link href={`/products/${product.slug}`} className="product-card" style={{ '--product-tint': product.colorSoft, '--product-accent': product.color } as CSSProperties}>
    <div className="product-card-top"><span className="product-number">COLLECTION / {product.number}</span><span className="card-arrow"><ArrowUpRight size={22}/></span></div>
    <div className="product-image-stage"><span className="background-ring"/><Image className="card-product-image" src={product.picture} alt={product.name[lang]} width={440} height={620} sizes="(max-width: 760px) 76vw, 30vw"/><img className="card-illustration" src={product.illustration} alt="" /></div>
    <div className="product-card-info"><span className="card-category">{product.category[lang]}</span><h3>{product.name[lang]}</h3><div className="product-card-bottom"><span>{product.grams}g <span className="bullet">•</span> {product.priceLkr ? `Rs. ${product.priceLkr}` : (lang === 'si' ? 'මිල විමසන්න' : 'Ask for price')}</span><span className="card-explore">{lang === 'si' ? 'විස්තර බලන්න' : 'Discover'} <ArrowUpRight size={16}/></span></div></div>
  </Link></Reveal>;
}

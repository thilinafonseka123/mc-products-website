import type { MetadataRoute } from 'next';
import { products } from '@/data/products';
import { siteUrl } from '@/lib/site';
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: siteUrl, changeFrequency: 'monthly', priority: 1 }, ...products.map(p => ({ url: `${siteUrl}/products/${p.slug}/`, changeFrequency: 'monthly' as const, priority: .85 }))]; }


import type { MetadataRoute } from 'next';
import { products } from '@/data/products';
import { siteUrl } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...products.map((product) => ({
      url: `${siteUrl}/products/${product.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
  ];
}

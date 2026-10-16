
import type { MetadataRoute } from 'next';
import { siteUrl, hasRealSiteUrl } from '@/lib/site';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: hasRealSiteUrl ? '/' : [],
      disallow: hasRealSiteUrl ? [] : '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

import type { MetadataRoute } from 'next';
import { siteUrl, hasRealSiteUrl } from '@/lib/site';
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: '*', allow: hasRealSiteUrl ? '/' : [], disallow: hasRealSiteUrl ? [] : '/' }, sitemap: `${siteUrl}/sitemap.xml` }; }

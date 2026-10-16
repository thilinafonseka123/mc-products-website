import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LanguageProvider } from '@/components/LanguageProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteUrl } from '@/lib/site';
export const metadata: Metadata = {
  title: { default: 'MC PRODUCTS | Homemade Goodness from Sri Lanka', template: '%s | MC PRODUCTS' },
  description: 'MC PRODUCTS Homemade: Sri Lankan grain drink, kollu kenda and grain aggala mix. Discover our products, preparation guides and order on WhatsApp.',
  metadataBase: new URL(siteUrl),
  openGraph: { type: 'website', siteName: 'MC PRODUCTS', title: 'MC PRODUCTS · Homemade Goodness', description: 'Rooted in tradition. Made with care in Sri Lanka.', images: [{ url: '/images/og-cover.webp', width: 1200, height: 630 }] },
  icons: { icon: '/favicon.svg' },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#f7f4ed' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="si"><body><LanguageProvider><a className="skip-link" href="#main">Skip to content</a><Header/>{children}<Footer/></LanguageProvider></body></html>;
}

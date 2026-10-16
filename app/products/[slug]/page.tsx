import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProduct, products } from '@/data/products';
import ProductDetail from '@/components/ProductDetail';
import { siteUrl } from '@/lib/site';
export function generateStaticParams() { return products.map(p => ({ slug: p.slug })); }
export function generateMetadata({ params }: { params: Promise<{slug: string}> }): Promise<Metadata> {
  return params.then(({ slug }) => { const product = getProduct(slug); if (!product) return { title: 'Product not found' }; return { title: product.name.si, description: product.description.en, alternates: { canonical: `${siteUrl}/products/${product.slug}/` }, openGraph: { title: product.name.si, description: product.description.en, images: [{ url: product.originalPhoto }] } }; });
}
export default async function Page({ params }: { params: Promise<{slug: string}> }) { const {slug} = await params; const product = getProduct(slug); if (!product) notFound(); return <ProductDetail product={product}/>; }

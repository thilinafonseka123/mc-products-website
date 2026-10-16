export const siteName = 'MC PRODUCTS';
export const defaultWhatsApp = '94773418738';
export const phoneDisplay = '077 341 8738';
export const companyAddress = '220/1, Horana Road, Wekada, Panadura, Sri Lanka';
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://your-real-domain.example').replace(/\/$/, '');
export const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || defaultWhatsApp).replace(/\D/g, '');
export const hasRealSiteUrl = !/\.example\b|localhost|your-real-domain/i.test(siteUrl);
export function orderLink(name: string, qty = 1) {
  const message = `ආයුබෝවන් MC PRODUCTS! 👋\nමට ${name} පැකට් ${qty}ක් ඇණවුම් කරන්න අවශ්‍යයි.\nමිල, තොග සහ බෙදාහැරීමේ විස්තර දැනගන්න පුළුවන්ද?`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
export function generalOrderLink() {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('ආයුබෝවන් MC PRODUCTS! නිෂ්පාදන හා ඇණවුම් පිළිබඳ විස්තර දැනගන්න කැමතියි.')}`;
}

import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  // Static export makes this site inexpensive to deploy on Cloudflare Pages,
  // Netlify static hosting, Vercel, or any static web host.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};
export default nextConfig;

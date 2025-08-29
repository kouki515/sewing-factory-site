import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/sewing-factory-site' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/sewing-factory-site' : '',
  images: {
    unoptimized: true,
  },
  // GitHub Pages では _next や _app などのフォルダが問題になることがあるため
  distDir: 'out',
};

export default nextConfig;

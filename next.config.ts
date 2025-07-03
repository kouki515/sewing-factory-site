import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages では _next や _app などのフォルダが問題になることがあるため
  distDir: 'out',
  // GitHub Actions使用時はbasePathは不要（ルートに直接デプロイされるため）
  // basePath: '/sewing-factory-site',
  // アセットプレフィックス（必要に応じて）
  // assetPrefix: '/sewing-factory-site',
};

export default nextConfig;

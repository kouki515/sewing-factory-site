import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages では _next や _app などのフォルダが問題になることがあるため
  distDir: 'out',
  // ベースパスの設定（リポジトリ名が必要な場合）
  // basePath: '/your-repo-name',
  // アセットプレフィックス（必要に応じて）
  // assetPrefix: '/your-repo-name/',
};

export default nextConfig;

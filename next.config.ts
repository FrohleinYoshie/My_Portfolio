import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Docker環境でのホットリロードを有効化
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000", "0.0.0.0:3000"]
    }
  },
  // ファイル監視の設定
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;

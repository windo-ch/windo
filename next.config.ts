import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/f%C3%BCr/:slug',
        destination: '/fuer/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

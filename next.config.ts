import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/templates',
        destination: '/invoice-templates',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

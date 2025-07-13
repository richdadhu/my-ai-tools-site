import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/go/looka",
        destination: "https://looka.partnerlinks.io/jhnw2zzrefgb", // ← 确认 ID 正确
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

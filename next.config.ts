import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** 这里是你真正的配置——只需要留一个 redirects 就够 */
  async redirects() {
    return [
      {
        source: "/go/looka",                                   // 访问这个短链
        destination: "https://looka.partnerlinks.io/jhnw2zzrefgb", // 跳到你的联盟链接
        permanent: false,                                      // 302/307 临时跳转
      },
    ];
  },
};

export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

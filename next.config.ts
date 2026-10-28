import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["mlapxffieyehdpvuzsyw.supabase.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mlapxffieyehdpvuzsyw.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "starryai.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

// Enable Cloudflare bindings (env, R2, etc.) during `next dev`.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();

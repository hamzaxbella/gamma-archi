/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io", port: "" },
    ],
  },
  experimental: {
    scrollRestoration: true,
  },

};

export default nextConfig;

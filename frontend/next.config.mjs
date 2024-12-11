/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    // domains: ["localhost", "wp.dev.the-company.com"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "wp.dev.the-company.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;

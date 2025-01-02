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
      {
        protocol: "https",
        hostname: "remezcla.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "codiscos-web-prd-files.panterweb.co",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.ecuadortimes.net",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;

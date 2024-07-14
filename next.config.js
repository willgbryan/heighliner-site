/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "api.microlink.io",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "craftwork.design",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname:"assets.aceternity.com"
      },
    ],
  },
}

module.exports = nextConfig

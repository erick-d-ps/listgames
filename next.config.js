/** @type {import('next').NextConfig} */ 
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sujeitoprogramador.com",
      },
    ],
  },
};

module.exports = nextConfig;
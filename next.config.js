/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  async redirect() {
    return [
      {
        source: "/products/test",
        destination: "/products",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/test",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;

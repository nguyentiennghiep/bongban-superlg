/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.hanoispl.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

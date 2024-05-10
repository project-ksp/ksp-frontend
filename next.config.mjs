/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "103.175.218.27",
        port: "8080",
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.kspsentosamakmurjatim.id",
      },
    ],
  },
};

export default nextConfig;

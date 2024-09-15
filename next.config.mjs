/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "packiro.com",
        port: "",
        pathname: "",
      },
    ],
  },
};

export default nextConfig;

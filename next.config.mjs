/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["packiqbackend.setstatetech.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "packiro.com",
        port: "",
        pathname: "/**", // This allows all paths on packiro.com
      },
    ],
  },
};

export default nextConfig;

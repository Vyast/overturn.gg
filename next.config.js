/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  redirects: async function () {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/zW5vghUxhd",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

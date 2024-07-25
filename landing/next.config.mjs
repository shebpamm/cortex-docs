/** @type {import('next').NextConfig} */
const DOCS_URL = process.env.DOCS_URL

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/docs",
        destination: `${DOCS_URL}/docs`,
      },
      {
        source: "/docs/:path+",
        destination: `${DOCS_URL}/docs/:path+`,
      },
    ];
  },
};

export default nextConfig;

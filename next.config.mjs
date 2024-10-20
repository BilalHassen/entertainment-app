/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      oracledb: false, // Exclude 'oracledb'
    };
    return config;
  },
};

export default nextConfig;

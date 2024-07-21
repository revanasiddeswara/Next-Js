import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.plugins.push(new NodePolyfillPlugin());
    config.resolve.fallback = { fs: false, child_process: false, readline: false };
    return config;
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
        port: '',       // leave empty if no port is specified
        pathname: '**', // allows all paths from this hostname
      },
    ],
  },
};

export default nextConfig;

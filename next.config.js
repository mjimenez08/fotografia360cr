/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "tour.panoee.net" },
      { protocol: "https", hostname: "cloud-va.insta360.com" },
    ],
  },
};

module.exports = nextConfig;

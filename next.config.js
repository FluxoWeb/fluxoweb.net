module.exports = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s0.wordpress.com",
      },
    ],
  },
};

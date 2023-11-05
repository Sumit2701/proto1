module.exports = {
  headers: {
    'Access-Control-Allow-Origin': ['https://example.com', 'https://localhost:8080'],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};
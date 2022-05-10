module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/up42/:path*",
        destination: "https://api.up42.com/:path*",
      },
    ];
  },
};

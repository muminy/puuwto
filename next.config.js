const isDev = process.env.NODE_ENV === "development";

module.exports = {
  env: {
    PER_PAGE_BLOG: isDev ? 1 : 1,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
};

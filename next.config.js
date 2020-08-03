const isDev = process.env.NODE_ENV === "development";

module.exports = {
  env: {
    PER_PAGE_BLOG: isDev ? 1 : 5,
  },
  webpack: (config, { isServer }) => {
    config.node = {
      fs: "empty",
    };
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
};

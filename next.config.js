const isDev = process.env.NODE_ENV === "development";

module.exports = {
  env: {
    PER_PAGE_BLOG: isDev ? 1 : 2,
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    }); // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }
    return config;
  },
};

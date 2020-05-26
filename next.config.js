module.exports = {
  env: {
    API_KEY: '29c40030-b009-4e1e-a737-69d10bd2e4ca',
  },
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
  webpack: (config, options) => {
    config.module.rules.push({
      test:/\.md$/,
      use: 'raw-loader',
    })

    return config
  },
}
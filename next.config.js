module.exports = {
  swcMinify: true,
  webpack: function(config) {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: 'raw-loader',
      },
   )
    return config
  },
  async redirects() {
    return [
      {
        source: '/:slug*/',
        destination: '/:slug*', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
}

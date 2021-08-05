module.exports = {
  reactStrictMode: true,

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.externals = config.externals || [];
    config.externals = [...config.externals, 'argon2']
    return config
  },
}

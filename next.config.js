const nodeExternals = require('webpack-node-externals');


module.exports = {
  reactStrictMode: true,

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    config.target = 'node';
    config.externalsPresets = { node: true };
    config.externals = [nodeExternals()];

    return config
  },
}

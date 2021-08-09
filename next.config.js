module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    const experiments = config.experiments || {};
    config.experiments = {...experiments, asyncWebAssembly: true};
    config.output.assetModuleFilename = `static/[hash][ext]`;
    config.output.publicPath = `/_next/`;
    config.module.rules.push({
      test: /\.wasm/,
      type: 'asset/resource',
    })
    return config
  },
}

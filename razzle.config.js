"use strict";

module.exports = {
  modifyWebpackOptions(opts) {
    const options = opts.options.webpackOptions;
    options.postCssOptions.plugins.unshift(require("tailwindcss"));
    return options;
  },
  plugins: [
    {
      name: "scss",
      options: {
        postcss: {
          dev: {
            sourceMap: false,
          },
        },
      },
    },
    {
      name: "compression",
      options: {
        brotli: true,
        gzip: true,
        compressionPlugin: {},
        brotliPlugin: {
          asset: "[path].br[query]",
          test: /\.(js|css|html|svg)$/,
          threshold: 10240,
          minRatio: 0.7,
        },
      },
    },
  ],
};

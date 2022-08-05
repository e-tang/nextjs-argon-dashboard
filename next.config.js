const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");
const webpack = require("webpack");
const path = require("path");

let nextConfig = withFonts(
  withCSS(
    withImages(
      withSass(
        {
        webpack(config, options) {
          config.module.rules.push({
            // test: /\.(eot|ttf|woff|woff2)$/,
            use: {
              loader: "url-loader",
            },
          });
          config.resolve.modules.push(path.resolve("./"));
          return config;
        },
        exportTrailingSlash: false,
      }
      )
    )
  )
);

// nextConfig.webpack5 = false;
nextConfig.webpack = (config, { dev }) => {
  // config.node = {
  //   dns: "mock",
  //   fs: "empty",
  //   path: true,
  //   url: false,
  // };
  return config;
}

module.exports = nextConfig;

// =============================================================== //
// WEBPACK PATHS                                                   //
// =============================================================== //

const publicPath = "/_next/static";

module.exports = {
  /* project publicPath */
  publicPath,
  /* public assets */
  assetsPublicPath: `${publicPath}/media/`,
  /* compiled assets next path (next/static/media) */
  assetsFolder: "static/media/",
  /* public css */
  cssPublicPath: `${publicPath}/css/`,
  /* compiled CSS next path (next/static/css) */
  cssFolder: "static/css",
  /* analyzed client assets (next/analyze/client.html) */
  analyzeClientPath: "./analyze/client.html",
  /* analyzed server assets (next/analyze/server.html) */
  analyzeServerPath: "../analyze/server.html",
  /* static css assets for development */
  staticCSSDevPath: "static/css/[name].css",
  /* static css assets for production */
  staticCSSProdPath: "static/css/[name].[contenthash:8].css",
};

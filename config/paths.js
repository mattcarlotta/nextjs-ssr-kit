// =============================================================== //
// WEBPACK PATHS                                                   //
// =============================================================== //

const publicPath = "/_next/static";

module.exports = {
	/* project publicPath */
	publicPath,
	/* public static images */
	imagesPublicPath: `${publicPath}/media/`,
	/* compiled images next path (next/static/media) */
	imagesFolder: "static/media/",
	/* public static images */
	fontsPublicPath: `${publicPath}/assets/`,
	/* compiled fonts next path (next/static/assets) */
	fontsFolder: "static/assets/",
	/* public css */
	cssPublicPath: `${publicPath}/css/`,
	/* compiled CSS next path (next/static/css) */
	cssFolder: "static/css",
};

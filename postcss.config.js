module.exports = {
	plugin: [
		require("postcss-nested"),
		require("autoprefixer"),
		require("postcss-import"),
		require("postcss-url")({ url: "copy", useHash: true }),
	],
};

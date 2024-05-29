const path = require("path");

module.exports = {
	mode: "production",
	entry: {
		background: "./src/service_worker/background.js",
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "build/service_worker"),
		clean: true,
	},
	resolve: {
		alias: {
			Utilities: path.resolve(__dirname, "src/utilities/"),
			Templates: path.resolve(__dirname, "src/templates/"),
		},
	},
};

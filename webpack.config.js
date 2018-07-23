var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const OUTPUT_BOOTSTRAP = path.resolve(
	__dirname,
	"node_modules/bootstrap/dist/css/bootstrap.min.css"
);
const OUTPUT_SITECSS = path.resolve(__dirname, "./src/styles/styles.css");
// The path(s) that should be cleaned
let pathsToClean = ["public"];

// The clean options to use
let cleanOptions = {
	verbose: true,
	dry: false
};

module.exports = {
	entry: "./src/app.tsx",
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "public")
	},

	// Enable sourcemaps for debugging webpack's output.
	devtool: "source-map",

	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".ts", ".tsx", ".js", ".json", ".jsx"]
	},
	mode: "development",
	module: {
		rules: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{
				test: /\.tsx?$/,
				use: "awesome-typescript-loader",
				exclude: /node_modules/
			},
			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
			{
				test: /\.css$/,

				use: ["style-loader", "css-loader"]
			},

			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
		]
	},
	devServer: {
		contentBase: path.join(__dirname, "public")
	},
	plugins: [
		new CleanWebpackPlugin(pathsToClean, cleanOptions),
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "./src/assets/index.html",
			title: "Sample App",
			extraFiles: {
				// css: OUTPUT_BOOTSTRAP,
				// sitecss: OUTPUT_SITECSS
			}
		})
	],
	// When importing a module whose path matches one of the following, just
	// assume a corresponding global variable exists and use that instead.
	// This is important because it allows us to avoid bundling all of our
	// dependencies, which allows browsers to cache those libraries between builds.
	externals: {
		react: "React",
		"react-dom": "ReactDOM"
	}
};

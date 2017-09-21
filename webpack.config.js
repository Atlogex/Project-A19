var webpack = require('webpack');

module.exports = {
	entry: "./appfd/cmn.js",
	output: {
		path: __dirname + "/public_html/build",
		publicPath: 'build/',
		filename: 'bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
			},
			{
				test: /\.jsx$/,
				use: 'babel-loader'
			}
		]
	},
	resolve: {
		modules: ['node_modules'],
		extensions: [".js", ".json", ".jsx", ".css"]
	},
	plugins: [],
};
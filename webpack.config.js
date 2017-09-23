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
				test: /\.js?$/, // определяем тип файлов
				exclude: /(node_modules)/,
				use: ["babel-loader"]
			},
			{
				test: /\.jsx?$/, // определяем тип файлов
				exclude: /(node_modules)/,
				use: ["babel-loader"]
			},

			/*{
			 test: /\.jsx?$/, // определяем тип файлов
			 exclude: /(node_modules)/,
			 loader: ["babel-loader"],
			 query:{
			 presets:["es2015", "react"]
			 }
			 },
			 {
			 test: /\.jsx$/,
			 exclude: /node_modules/,
			 loader: 'babel-loader'
			 /*query: {
			 // presets: ['es2015', 'stage-0', 'react'],  // U t '='
			 // presets: ['es2015', 'stage-0', ], // U t '<'
			 // presets: ['react'], // U t '='
			 // presets: ['es2015'], // U t '='
			 presets: ['es6'], // U t '='
			 }

			 },


			 {
			 test: /\.jsx$/,
			 exclude: /node_modules/,
			 loader: 'babel-loader',
			 query: {
			 stage: 0,
			 optional: ['runtime'],
			 plugins: [
			 'react-require' // <-- THIS IS YOUR AMENDMENT
			 ]
			 }
			 }*/

			/*],
			 loaders: [   //загрузчики
			 {
			 test: /\.jsx?$/, // определяем тип файлов
			 exclude: /(node_modules)/,
			 loader: ["babel-loader"],
			 query: {
			 presets: ["env", "react"]
			 }
			 }
			 */]
	},

	resolve: {
		modules: ['node_modules'],
		extensions: [".js", ".json", ".jsx", ".css"]
	},
	plugins: [],
};
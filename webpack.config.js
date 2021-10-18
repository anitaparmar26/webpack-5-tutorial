const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Setup',
      template: './src/public/index.html',
      filename: 'index.html', // output file
    }),
  ],
  mode: 'development',
	module: {
		rules: [
			{
				test: /\.(scss|css)$/i,
				use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
			},
			// Images
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				loader: 'file-loader',
				options: {
					name: '/assets/images/[name].[ext]',
				},
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				loader: 'url-loader',
				options: {
					limit: 50000,
					mimetype: 'application/font-ttf',
					name: '/assets/fonts/[name].[ext]',
				},
			},

			// JavaScript
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
		],
	},

	entry: {
		main: path.resolve(__dirname, './src/app/index.js'),
	},

	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].bundle.js',
	},
};

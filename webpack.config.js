const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/index.js',
	devServer:{
        historyApiFallback: true,
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	mode: 'development',
	resolve: {
		extensions: ['.js', '.jsx'],
		// alias: {
		// 	'@icons': path.resolve(__dirname, 'src/assets/icons/'),
		// 	'@logos': path.resolve(__dirname, 'src/assets/logos/'),
		// }
	},
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|gif)$/,
				type: 'asset',
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					{
                        loader: "sass-loader",
                        options:{
                            implementation: require("sass"),
                        }
                    },
				],
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
	]
}
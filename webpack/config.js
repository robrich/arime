module.exports = {
	entry: './src/arime.js',
	output: {
		libraryTarget: 'commonjs2',
		library: 'arime',
		path: 'build',
		filename: 'arime.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /(node_modules|build|test|webpack)/,
			loader: 'babel-loader'
		}]
	}
};

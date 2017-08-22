var webpack=require('webpack');
var path=require('path');

module.exports={
	devtool: 'inline-source-map', // gives the line number and helps in debugging in case if there errors 
	entry: [
		'webpack-dev-server/client?http://127.0.0.1:8080/',
		'webpack/hot/only-dev-server', // stuff set up for hot reloadingor live reloading
		'./src' // it is the folder where webpack is going to look for the initial file to runm in this case we did not specify anything it would be index.js by default
	],
	// where webpack is going to look for the files.

	output: {
		path: path.join(__dirname,'public'),
		filename: 'bundle.js'
	}, // this ois for the production
	resolve: {
		modules: ['node_modules','src'],
		extensions:  ['.js']

	},// looks for the files that needed to be bundled together
	module: {
		loaders: [
		{
			test:/\.jsx?$/,
			exclude: /node_modules/,
			loaders: ['react-hot-loader', 'babel-loader?presets[]=react,presets[]=es2015']
		}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	]

};
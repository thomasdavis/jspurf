var path = require('path');
module.exports = {
	module: {
    noParse: [
        // Suppress warnings and errors logged by benchmark.js when bundled using webpack.
        // https://github.com/bestiejs/benchmark.js/issues/106
        path.resolve(__dirname, './node_modules/benchmark/benchmark.js')
    ],
		loaders: [
			{
		      test: /\.js$/,
		      exclude: /(node_modules|bower_components)/,
		      loader: 'babel', // 'babel-loader' is also a legal name to reference
		      query: {
		        presets: ['es2015', 'react']
		      }
		    }
		],
	},
    entry: {
        app: './app/src/app.js'
    },
    output: {
        filename: './app/dist/[name].js'
    },
    watch: true
};

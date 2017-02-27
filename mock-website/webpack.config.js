let path = require('path')
module.exports={
		context:process.cwd(),
		watch:true,
		entry:path.join(__dirname,'src/main'),
		devtool:'source-map',//资源映射表chrome debug
		output:{
			path:path.join(__dirname,'dist/'),
			filename:'bundle.js'
		},
		//alias 别名 require（'jquery'）==> require(process.cwd()+'lib/jquery.js')
		resolve:{
			alias:{jquery:process.cwd()+'lib/jquery.js'}
		},
		// plugins:[
		// 	new webpack.ProvidePlugin({}),
		// 	new DefinePlugin({})
		// ],
		module:{
			loaders:[
				//loader string-one => loader => string-two
				{test:/\.styl$/,loader:'style!css!stylus?resolve url'},
				{ test: /\.(png|jpg)$/, loader: 'url?limit=8192' },
				{
					test:/\.js[x]?$/,
					exclude:/node_modules/,
					loader:'babel-loader'
				},

			]
		},
}

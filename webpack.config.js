var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: 'style!css'
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      loader: 'style!css!sass'
    },
    {
      test: /\.less$/,
      exclude: /node_modules/,
      loader: "style!css!less"
    },
    {
      test: /\.(jpg|png|gif|svg)$/,
      include: /images/,
      loader: 'url'
    }
    ],
  },
  plugins: debug ? [] : [
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};

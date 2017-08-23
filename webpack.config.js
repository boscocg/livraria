module.exports = {
  context: __dirname,
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
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};

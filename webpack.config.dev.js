import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  devtools: 'source-map',
  entry: [
    './src/index.jsx',
  ],
  output: {
    path: path.join(__dirname, '/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('style.css', {allChunks: true}),
  ],
  module: {
    loaders: [
      {
        test: /\.(ico|jpg|jpeg|png|eot|ttf|woff|svg|less)/,
        loader: 'file'
      },
      {
        test: /\.(scss|css)$/,
        loaders: ExtractTextPlugin.extract("style", "css?sourceMap&modules&importLoaders=1&localIdentName=[local]!sass?sourceMap")
      },
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'src'),
        loaders: ['babel']
      },
      {
        test: /modernizr\.min\.js$/,
        loader: "imports?this=>window,html5=>window.html5!exports?window.Modernizr"
      }
    ]
  },
  resolve: {
    extensions: ['', '.js'],
    alias: {
      'base': path.resolve(__dirname, './src/'),
      'components': path.resolve(__dirname, './src/components/'),
      'data': path.resolve(__dirname, './src/data/'),
      'assets': path.resolve(__dirname, './src/assets/'),
      'global_styles': path.resolve(__dirname, './src/assets/styles/'),
      'constants': path.resolve(__dirname, './src/constants'),
      'actions': path.resolve(__dirname, './src/actions'),
      'utils': path.resolve(__dirname, './src/utils'),
      'reducers': path.resolve(__dirname, './src/reducers')
    }
  }
};
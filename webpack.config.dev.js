import path from 'path';
import webpack from 'webpack';

export default {
  devtools: 'eval-source-map',
  entry: [
    // 'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client')
  ],
  output: {
    path: '/',
    publicPath: '/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'client/src'),
        loaders: ['react-hot', 'babel']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js'],
    alias: {
      'base': path.resolve(__dirname, './client/src/'),
      'components': path.resolve(__dirname, './client/src/components/'),
      'assets': path.resolve(__dirname, './client/src/assets/'),
      'global_styles': path.resolve(__dirname, './client/src/assets/styles/'),
      'constants': path.resolve(__dirname, './client/src/constants'),
      'actions': path.resolve(__dirname, './client/src/actions'),
      'utils': path.resolve(__dirname, './client/src/utils'),
      'reducers': path.resolve(__dirname, './client/src/reducers')
    }
  }
};
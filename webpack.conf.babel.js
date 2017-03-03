import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

//Development Mode
//Be sure to invoke Webpack as env NODE_ENV=production webpack -p when building your production assets.
const DEBUG = process.env.NODE_ENV !== 'production';

let config = {
  devtool: DEBUG ? 'cheap-module-eval-source-map' : 'hidden-source-map',
  entry: [
    './src/index.jsx',
    './src/assets/scss/_screen.scss'
  ],
  output: {
    path: path.join(__dirname, DEBUG ? '/' : '/dist/'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: DEBUG,
      options: {
        context: __dirname
      }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('./server/', 'index.html'),
      minify: {
        collapseWhitespace: true
      }
    }),
    new ExtractTextPlugin({
      filename: "style.css",
      disable: false,
      allChunks: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ico|jpg|jpeg|png|eot|ttf|woff|svg|less)/,
        use: 'file-loader'
      },{
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'src'),
        use: ['babel-loader']
      },
      {
        test: /modernizr\.min\.js$/,
        use: "imports-loader?this=>window,html5=>window.html5!exports?window.Modernizr"
      }
    ]
  },
  resolve: {
    extensions: ['*', '.scss', '.js'],
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
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
  },
  devServer: {
    port: 3000,
    contentBase: './',
    historyApiFallback: true
  }
};

export default config;
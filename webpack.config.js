var bourbon = require('node-bourbon').includePaths;

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.png/, loader: 'url-loader?limit=100000&mimetype=image/png' },
      { test: /\.scss$/, loader: "style!css!sass?includePaths[]=" + bourbon},
      { test: /\.js$/, loader: "jsx-loader" }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.json']
  }
}
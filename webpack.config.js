// webpack.config.js
resolve: {
  modules: [path.resolve(__dirname, './src'), 'node_modules'],
  extensions: ['.ts', '.tsx', '.json'],
  alias: {
    reducers: path.resolve(__dirname, './src/reducers')
  }
},
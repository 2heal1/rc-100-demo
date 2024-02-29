const path = require("path")
const rspack = require("@rspack/core");

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  context: __dirname,
  devtool: false,
  output: {
    path: "./dist",
    clean:true,
    publicPath: 'http://localhost:8082/',
    filename: process.env.NODE_ENV === 'development' ?'[name].js' : '[contenthash].bundle.js',
  },
  resolve:{
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            sourceMap: true,
            jsc: {
              parser: {
                syntax: 'ecmascript',
                jsx: true,
              },
              transform: {
                react: {
                  pragma: 'React.createElement',
                  pragmaFrag: 'React.Fragment',
                  throwIfNamespace: true,
                  development: false,
                  useBuiltins: false,
                },
              },
            },
          },
        },
        type: 'javascript/auto',
      },
      {
        test: /\.jpg/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
			template: "./src/index.html"
		}),
  ],
  devServer: {
    port: 8082,
    devMiddleware: {
      writeToDisk: true,
    },
    headers:{
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods':
        'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    }
  },
  optimization:{
    chunkIds: process.env.NODE_ENV ==='development' ?  'named' : 'deterministic'
  }
}

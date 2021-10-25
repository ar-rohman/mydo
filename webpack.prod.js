const { merge } = require("webpack-merge");
const common = require("./webpack.common");
 
module.exports = merge(common, {
   mode: "production",
   output: {
        publicPath: "/portfolio/mydo/"
   },
   module: {
       rules: [
           {
               test: /\.js$/,
               exclude: "/node_modules/",
               use: [
                   {
                       loader: "babel-loader",
                       options: {
                           presets: ["@babel/preset-env"]
                       }
                   }
               ]
           }
       ]
   }
})
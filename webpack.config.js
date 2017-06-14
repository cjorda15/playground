module.exports = {

  entry:['./src/index.js'],

  output:{
    path:__dirname+'/server/build',
    filename:"bundle.js"
  },

  module:{
    loaders:[
      {test:/\jsx$/,
      loaders:'babel-loader',
      query: {
          presets: ['es2015', 'react']},
      exclude:/node_modules/},
      {test:/\js$/,
      loaders:'babel-loader',
      exclude:/node_modules/},
      {test:/\css$/,
      loaders:'style-loader!css-loader'}
    ]
  }
}

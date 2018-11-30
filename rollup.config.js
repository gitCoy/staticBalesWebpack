const pathCom = '/assets/dev'
export default {
  input: [
    __dirname + pathCom + '/javascript/application.js',
    __dirname + pathCom + '/vendor/jquery-3.1.0.min.js',
    __dirname + pathCom + '/vendor/scrollify.js',
    __dirname + pathCom + '/vendor/slick.min.js'
  ],
  output: {
    file: './dist/main.min.js',
    format: 'umd'
  }
}
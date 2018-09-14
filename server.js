const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const port = 3000
const app = express()
const config = require('./webpack.config.js')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler,{
    publicPath: config.output.publicPath
}))

app.get('/', (req,res) => {
    res.contentType('text/html')
    res.sendFile(__dirname + '/dist/index.html')
})

app.listen(port,() => {
    console.log('Corriendo en el puerto 3000')
})

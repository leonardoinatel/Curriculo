const express = require('express')
const app = express()

const path = require('path')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname,'public')))

const port = process.env.PORT || 3000

app.get('/', (Request,Response) => {
    Response.render('home')
})

app.get('/info', (Request,Response) => {
    Response.render('info')
})

app.listen(port, (err) => {
    if(err){
        console.log("Nao foi possivel conectar no servidor")
    }else {
        console.log("Servidor rodando")
    }
})
const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))


app.get('/', (Request,Response) => {
    Response.render('home')
})

app.get('/info', (Request,Response) => {
    Response.render('info')
})

app.listen(3000, (err) => {
    if(err){
        console.log("Nao foi possivel conectar no servidor")
    }else {
        console.log("Servidor rodando")
    }
})
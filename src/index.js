const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.set('view engine','ejs')


//rota padrão
app.get('/', (req,res)=>{
    res.render('index.ejs')
})

//upload
app.post('/', (req,res) => {
    res.send("OK")
    console.log(res.body,req.file) //apoio a lógica
})

//escuta do servidor
app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})
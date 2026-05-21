const express = require('express')
const app = express()
const port = 3000
//disponibilizar os arquivos estáticos
const path=require('path');
app.use(express.static(path.join(__dirname, 'public')));
//realizar conexao
const db=require('./db');

//rota principal, a rota principal tem a '/'
app.get('/', (req, res) => {
  //res.send('Hello World!')
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.listen(port, () => {
  console.log(`Servidor funcionando ${port}`)
})